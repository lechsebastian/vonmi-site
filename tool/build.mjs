// Static site generator for vonmi.app (no dependencies).
// Usage: node tool/build.mjs   → writes HTML into the repo root.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { T, UPDATED, privacy, terms, deleteAccount } from './content.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const LANGS = ['en', 'pl'];
const prefix = (lang) => (lang === 'en' ? '' : 'pl/');

// Wallet glyph (Spendio icon 5D) on its tile; 100x100 box.
const spendioIcon = (size) =>
  `<svg class="app-icon" width="${size}" height="${size}" viewBox="0 0 100 100" aria-hidden="true">` +
  `<rect width="100" height="100" rx="22.5" fill="#5F8274"/>` +
  `<rect x="22" y="30" width="56" height="42" rx="9" fill="#F4F8F6"/>` +
  `<path d="M22 41H78" stroke="#5F8274" stroke-width="3"/>` +
  `<rect x="50" y="47" width="28" height="17" rx="8.5" fill="#5F8274"/>` +
  `<circle cx="60" cy="55.5" r="3.5" fill="#F4F8F6"/></svg>`;

// Relative link from one output file to a site path ('' = home, 'spendio/' ...).
function rel(from, to) {
  const depth = from.split('/').length - 1;
  const up = '../'.repeat(depth);
  return (up + to) || './';
}

function layout({ lang, file, title, description, body, altFile }) {
  const t = T[lang];
  const other = lang === 'en' ? 'pl' : 'en';
  return `<!doctype html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
<meta name="description" content="${description}">
<link rel="icon" href="${rel(file, 'favicon.svg')}" type="image/svg+xml">
<link rel="stylesheet" href="${rel(file, 'assets/style.css')}">
<link rel="alternate" hreflang="${other}" href="https://vonmi.app/${altFile.replace(/index\.html$/, '')}">
</head>
<body>
<header class="site-header"><div class="wrap">
  <a class="brand" href="${rel(file, prefix(lang))}">vonmi</a>
  <a class="lang" href="${rel(file, altFile.replace(/index\.html$/, ''))}" hreflang="${other}" lang="${other}">${t.otherLang}</a>
</div></header>
<main class="wrap">
${body}
</main>
<footer class="site-footer"><div class="wrap">${t.footer}</div></footer>
</body>
</html>
`;
}

function write(file, html) {
  const out = path.join(root, file);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, html);
  console.log('wrote', file);
}

for (const lang of LANGS) {
  const t = T[lang];
  const p = prefix(lang);
  const other = lang === 'en' ? 'pl' : 'en';
  const po = prefix(other);
  const links = (file) => ({
    privacy: rel(file, `${p}spendio/privacy/`),
    terms: rel(file, `${p}spendio/terms/`),
    del: rel(file, `${p}spendio/delete-account/`),
    spendio: rel(file, `${p}spendio/`),
  });

  // Home
  {
    const file = `${p}index.html`;
    const l = links(file);
    write(file, layout({
      lang, file, altFile: `${po}index.html`, title: 'vonmi', description: t.homeLead,
      body: `
<section class="hero"><h1>${t.homeTitle}</h1><p class="lead">${t.homeLead}</p></section>
<h2 class="section-label">${t.apps}</h2>
<a class="app-card" href="${l.spendio}">
  ${spendioIcon(64)}
  <span><strong>Spendio</strong><span>${t.spendioTag}</span></span>
</a>`,
    }));
  }

  // Spendio
  {
    const file = `${p}spendio/index.html`;
    const l = links(file);
    write(file, layout({
      lang, file, altFile: `${po}spendio/index.html`, title: 'Spendio', description: t.spendioTag,
      body: `
<section class="app-head">${spendioIcon(88)}<div><h1>Spendio</h1><p class="lead">${t.spendioTag}</p></div></section>
<p>${t.spendioIntro}</p>
<ul class="doc-links">
  <li><a href="${l.privacy}">${t.privacy}</a></li>
  <li><a href="${l.terms}">${t.terms}</a></li>
  <li><a href="${l.del}">${t.deleteAccount}</a></li>
</ul>
<h2>${t.support}</h2>
<p>${t.supportText}</p>`,
    }));
  }

  // Legal pages
  const docs = [
    ['privacy', t.privacy, privacy[lang]],
    ['terms', t.terms, terms[lang]],
    ['delete-account', t.deleteAccount, deleteAccount[lang]],
  ];
  for (const [slug, title, html] of docs) {
    const file = `${p}spendio/${slug}/index.html`;
    const l = links(file);
    const body = html.replaceAll('{{deleteUrl}}', l.del).replaceAll('{{privacyUrl}}', l.privacy);
    const nav = docs
      .filter(([s]) => s !== slug)
      .map(([s, tt]) => `<a href="${rel(file, `${p}spendio/${s}/`)}">${tt}</a>`)
      .join('');
    write(file, layout({
      lang, file, altFile: `${po}spendio/${slug}/index.html`, title: `${title} · Spendio`, description: `${title} · Spendio`,
      body: `
<a class="crumb" href="${l.spendio}">${spendioIcon(28)}<span>Spendio</span></a>
<article class="doc">
<h1>${title}</h1>
<p class="updated">${t.updated}: ${UPDATED[lang]}</p>
${body}
</article>
<nav class="doc-nav">${nav}</nav>`,
    }));
  }
}

// 404 (bilingual, absolute links: served from any path)
write('404.html', `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Not found · vonmi</title><link rel="icon" href="/favicon.svg" type="image/svg+xml"><link rel="stylesheet" href="/assets/style.css"></head>
<body><header class="site-header"><div class="wrap"><a class="brand" href="/">vonmi</a></div></header>
<main class="wrap"><section class="hero"><h1>404</h1><p class="lead">This page does not exist. · Ta strona nie istnieje.</p>
<p><a href="/">vonmi.app</a> · <a href="/spendio/">Spendio</a></p></section></main></body></html>
`);
