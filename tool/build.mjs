// Static site generator for vonmi.app (no dependencies).
// Usage: node tool/build.mjs   → writes HTML into the repo root.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { T, UPDATED, SOCIAL, APPS, privacy, terms, deleteAccount } from './content.mjs';

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

// Outline icons, 24x24, drawn with currentColor.
const svg = (inner) =>
  `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" ` +
  `stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${inner}</svg>`;
const ICONS = {
  linkedin: svg(
    '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/>' +
      '<rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>',
  ),
  instagram: svg(
    '<rect width="20" height="20" x="2" y="2" rx="5"/>' +
      '<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><path d="M17.5 6.5h.01"/>',
  ),
};

// Relative link from one output file to a site path ('' = home, 'spendio/' ...).
function rel(from, to) {
  const depth = from.split('/').length - 1;
  const up = '../'.repeat(depth);
  return (up + to) || './';
}

const appIcon = (app, file, size) =>
  app.icon
    ? `<img class="app-icon app-icon-img" src="${rel(file, app.icon)}" width="${size}" height="${size}" alt="">`
    : spendioIcon(size);

const socialLinks = (cls) =>
  SOCIAL.map(
    (s) => `<a class="${cls}" href="${s.url}" target="_blank" rel="me noopener">${ICONS[s.type]}<span>${s.name}</span></a>`,
  ).join('');

function layout({ lang, file, title, description, body, altFile }) {
  const t = T[lang];
  const other = lang === 'en' ? 'pl' : 'en';
  const url = `https://vonmi.app/${file.replace(/index\.html$/, '')}`;
  return `<!doctype html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
<meta name="description" content="${description}">
<meta property="og:type" content="website">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${description}">
<meta property="og:url" content="${url}">
<link rel="canonical" href="${url}">
<link rel="icon" href="${rel(file, 'favicon.svg')}" type="image/svg+xml">
<link rel="stylesheet" href="${rel(file, 'assets/style.css')}">
<link rel="alternate" hreflang="${other}" href="https://vonmi.app/${altFile.replace(/index\.html$/, '')}">
</head>
<body>
<header class="site-header"><div class="wrap">
  <a class="brand" href="${rel(file, prefix(lang))}">vonmi</a>
  <nav class="header-links">
    ${socialLinks('icon-link')}
    <a class="lang" href="${rel(file, altFile.replace(/index\.html$/, ''))}" hreflang="${other}" lang="${other}">${t.otherLang}</a>
  </nav>
</div></header>
<main class="wrap">
${body}
</main>
<footer class="site-footer"><div class="wrap">
  <span>${t.footer}</span>
  <span class="footer-links">${socialLinks('text-link')}</span>
</div></footer>
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

// Swaps the highlighted verb in the hero; static for reduced motion or without JS.
const rotatorScript = `<script>
(() => {
  const el = document.querySelector('.rot');
  if (!el || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const words = el.dataset.words.split('|');
  let i = 0;
  setInterval(() => {
    el.classList.add('out');
    setTimeout(() => { i = (i + 1) % words.length; el.textContent = words[i]; el.classList.remove('out'); }, 250);
  }, 2400);
})();
</script>`;

for (const lang of LANGS) {
  const t = T[lang];
  const p = prefix(lang);
  const other = lang === 'en' ? 'pl' : 'en';
  const po = prefix(other);
  const linkedin = SOCIAL.find((s) => s.type === 'linkedin');
  const instagram = SOCIAL.find((s) => s.type === 'instagram');

  // Home
  {
    const file = `${p}index.html`;
    const cards = APPS.map(
      (app) => `<a class="app-card" href="${rel(file, `${p}${app.slug}/`)}">
  ${appIcon(app, file, 64)}
  <span class="app-card-text"><strong>${app.name[lang]}</strong><span>${app.tag[lang]}</span>
  <span class="pill${app.stores ? '' : ' pill-soon'}">${app.stores ? t.onStores : t.comingSoon}</span></span>
</a>`,
    ).join('\n');
    write(file, layout({
      lang, file, altFile: `${po}index.html`, title: 'vonmi', description: t.homeDescription,
      body: `
<section class="hero">
  <p class="eyebrow">vonmi</p>
  <h1><span class="sr-only">${t.heroSr}</span><span aria-hidden="true">${t.heroHtml}</span></h1>
  <p class="lead">${t.homeLead}</p>
  <div class="actions"><a class="btn btn-primary" href="#apps">${t.seeApps}</a><a class="btn" href="#work">${t.workWithMe}</a></div>
</section>
<section id="apps">
<h2 class="section-label">${t.apps}</h2>
<div class="app-list">
${cards}
</div>
</section>
<section id="work" class="work">
<h2>${t.workTitle}</h2>
<p>${t.workText}</p>
<ul class="services">${t.services.map((s) => `<li>${s}</li>`).join('')}</ul>
<div class="actions">
  <a class="btn btn-primary" href="${linkedin.url}" target="_blank" rel="me noopener">${ICONS.linkedin}${t.messageLinkedIn}</a>
  <a class="btn" href="${instagram.url}" target="_blank" rel="me noopener">${ICONS.instagram}${t.messageInstagram}</a>
</div>
</section>
${rotatorScript}`,
    }));
  }

  // App pages
  for (const app of APPS) {
    const file = `${p}${app.slug}/index.html`;
    const docs =
      app.docs === 'local'
        ? [
            [t.privacy, rel(file, `${p}${app.slug}/privacy/`)],
            [t.terms, rel(file, `${p}${app.slug}/terms/`)],
            [t.deleteAccount, rel(file, `${p}${app.slug}/delete-account/`)],
          ]
        : Object.entries(app.docs).map(([key, url]) => [t[key], url[lang]]);
    const stores = app.stores
      ? `<div class="actions store-links">
  <a class="btn btn-primary" href="${app.stores.appStore}">${t.appStore}</a>
  <a class="btn" href="${app.stores.googlePlay}">${t.googlePlay}</a>
</div>`
      : `<p class="pill pill-soon">${t.comingSoonStores}</p>`;
    const features = app.features
      ? `<ul class="features">${app.features[lang]
          .map(([h, d]) => `<li><strong>${h}</strong><span>${d}</span></li>`)
          .join('')}</ul>`
      : '';
    write(file, layout({
      lang, file, altFile: `${po}${app.slug}/index.html`, title: `${app.name[lang]} · vonmi`, description: app.tag[lang],
      body: `
<section class="app-head">${appIcon(app, file, 88)}<div><h1>${app.name[lang]}</h1><p class="lead">${app.tag[lang]}</p></div></section>
${stores}
<p>${app.intro[lang]}</p>
${features}
${app.note ? `<p class="note">${app.note[lang]}</p>` : ''}
<ul class="doc-links">
${docs.map(([label, href]) => `  <li><a href="${href}">${label}</a></li>`).join('\n')}
</ul>
<h2>${t.support}</h2>
<p>${t.supportText}</p>`,
    }));
  }

  // Legal pages (Spendio)
  const docs = [
    ['privacy', t.privacy, privacy[lang]],
    ['terms', t.terms, terms[lang]],
    ['delete-account', t.deleteAccount, deleteAccount[lang]],
  ];
  for (const [slug, title, html] of docs) {
    const file = `${p}spendio/${slug}/index.html`;
    const body = html
      .replaceAll('{{deleteUrl}}', rel(file, `${p}spendio/delete-account/`))
      .replaceAll('{{privacyUrl}}', rel(file, `${p}spendio/privacy/`));
    const nav = docs
      .filter(([s]) => s !== slug)
      .map(([s, tt]) => `<a href="${rel(file, `${p}spendio/${s}/`)}">${tt}</a>`)
      .join('');
    write(file, layout({
      lang, file, altFile: `${po}spendio/${slug}/index.html`, title: `${title} · Spendio`, description: `${title} · Spendio`,
      body: `
<a class="crumb" href="${rel(file, `${p}spendio/`)}">${spendioIcon(28)}<span>Spendio</span></a>
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
<p><a href="/">vonmi.app</a> · ${APPS.map((a) => `<a href="/${a.slug}/">${a.name.en}</a>`).join(' · ')}</p></section></main></body></html>
`);
