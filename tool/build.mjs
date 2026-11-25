// Static site generator for vonmi.app (no dependencies).
// Usage: node tool/build.mjs   → writes HTML into the repo root.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { T, EMAIL, SOCIAL, APPS, LEGAL } from './content.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
// Polish is the default language (site root); English lives under /en/.
const LANGS = ['pl', 'en'];
const prefix = (lang) => (lang === 'pl' ? '' : 'en/');

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
  `<svg class="icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" ` +
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

const status = (app, t) =>
  `<span class="status"><i class="dot${app.stores ? '' : ' soon'}"></i>${app.stores ? t.available : t.soon}</span>`;

const ext = 'target="_blank" rel="me noopener"';

function layout({ lang, file, title, description, body, altFile }) {
  const t = T[lang];
  const p = prefix(lang);
  const other = lang === 'en' ? 'pl' : 'en';
  const url = `https://vonmi.app/${file.replace(/index\.html$/, '')}`;
  const home = rel(file, p);
  const isHome = file === `${p}index.html`;
  const anchor = (id) => (isHome ? `#${id}` : `${home}#${id}`);
  return `<!doctype html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
<meta name="description" content="${description}">
<meta name="theme-color" content="#0A0C11">
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
<div class="bg-grid" aria-hidden="true"></div>
<header class="site-header"><div class="wrap nav">
  <a class="brand" href="${home}">vonmi<b>_</b></a>
  <nav class="nav-links">
    <a class="nav-text" href="${anchor('apps')}">${t.navApps}</a>
    <a class="nav-text" href="${anchor('work')}">${t.navWork}</a>
    ${SOCIAL.map((s) => `<a class="nav-icon" href="${s.url}" ${ext} aria-label="${s.name}">${ICONS[s.type]}</a>`).join('\n    ')}
    <a class="lang-switch" href="${rel(file, altFile.replace(/index\.html$/, ''))}" hreflang="${other}" aria-label="${other === 'en' ? 'Switch to English' : 'Przełącz na polski'}">${['pl', 'en']
      .map((l) => `<span${l === lang ? ' class="on"' : ''}>${l.toUpperCase()}</span>`)
      .join('')}</a>
  </nav>
</div></header>
<main>
${body}
</main>
<footer class="site-footer"><div class="wrap">
  <span>${t.footer}</span>
  <span class="footer-links">${SOCIAL.map((s) => `<a href="${s.url}" ${ext}>${s.name}</a>`).join('<span aria-hidden="true">·</span>')}</span>
</div></footer>
${isHome ? rotatorScript : ''}
</body>
</html>
`;
}

const polishFiles = [];
function write(file, html) {
  if (/^<!doctype html>\s*<html lang="pl">/.test(html)) polishFiles.push(file);
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

const socialButtons = (primary) =>
  SOCIAL.map(
    (s, i) => `<a class="btn${primary && i === 0 ? ' btn-primary' : ''}" href="${s.url}" ${ext}>${ICONS[s.type]}${s.name}</a>`,
  ).join('\n    ');

for (const lang of LANGS) {
  const t = T[lang];
  const p = prefix(lang);
  const other = lang === 'en' ? 'pl' : 'en';
  const po = prefix(other);

  // Home
  {
    const file = `${p}index.html`;
    const showcase = APPS.find((a) => a.screens);
    const phones = showcase
      ? `<div class="phone-stage" aria-hidden="true">
    <div class="phone back"><img src="${rel(file, showcase.screens[1])}" alt="" width="420" height="910"></div>
    <div class="phone"><img src="${rel(file, showcase.screens[0])}" alt="" width="420" height="910"></div>
  </div>`
      : '';
    const cards = APPS.map((app) => {
      const page = rel(file, `${p}${app.slug}/`);
      const stores = app.stores
        ? `<a class="btn btn-sm" href="${app.stores.appStore}">App Store</a><a class="btn btn-sm" href="${app.stores.googlePlay}">Google Play</a>`
        : '';
      return `<article class="app">
    <div class="app-top">
      ${appIcon(app, file, 64)}
      <div><h3><a href="${page}">${app.name[lang]}</a></h3>${status(app, t)}</div>
    </div>
    <p>${app.summary[lang]}</p>
    <div class="chips">${app.tech.map((x) => `<span>${x}</span>`).join('')}</div>
    <div class="app-foot">
      <div class="store-btns">${stores}</div>
      <a class="more" href="${page}">${t.more} →</a>
    </div>
  </article>`;
    }).join('\n  ');
    write(file, layout({
      lang, file, altFile: `${po}index.html`, title: 'vonmi', description: t.homeDescription,
      body: `
<div class="wrap hero">
  <div>
    <p class="prompt"><span>~/vonmi</span> $ flutter run <i class="caret"></i></p>
    <h1><span class="sr-only">${t.heroSr}</span><span aria-hidden="true">${t.heroHtml.replace('</span> ', '</span><br>')}</span></h1>
    <p class="lead">${t.homeLead}</p>
    <div class="actions">
      <a class="btn btn-primary" href="#apps">${t.seeApps}</a>
      <a class="btn" href="#work">${t.workWithMe} →</a>
    </div>
    <div class="tags"><span>iOS</span><span>Android</span><span>Flutter</span><span>Firebase</span><span>AI</span></div>
  </div>
  ${phones}
</div>

<section id="apps" class="section"><div class="wrap">
  <p class="label">${t.appsLabel}</p>
  <h2>${t.apps}</h2>
  <div class="apps">
  ${cards}
  </div>
</div></section>

<section id="work" class="section"><div class="wrap work">
  <div>
    <p class="label">${t.workLabel}</p>
    <h2>${t.workTitle}</h2>
    <p class="work-text">${t.workText}</p>
  </div>
  <ol class="steps">
    ${t.services.map((s, i) => `<li><b>${String(i + 1).padStart(2, '0')}</b>${s}</li>`).join('\n    ')}
  </ol>
</div></section>

<section id="contact" class="section cta"><div class="wrap">
  <p class="label">${t.contactLabel}</p>
  <h2>${t.contactTitle}</h2>
  <p>${t.contactText}</p>
  <div class="actions">
    ${socialButtons(true)}
  </div>
</div></section>`,
    }));
  }

  // App pages
  for (const app of APPS) {
    const file = `${p}${app.slug}/index.html`;
    const docs = (LEGAL[app.slug] ?? []).map((d) => [t[d.key], rel(file, `${p}${app.slug}/${d.slug}/`)]);
    const stores = app.stores
      ? `<div class="actions">
  <a class="btn btn-primary" href="${app.stores.appStore}">${t.appStore}</a>
  <a class="btn" href="${app.stores.googlePlay}">${t.googlePlay}</a>
</div>`
      : `<p class="soon-note"><i class="dot soon"></i>${t.comingSoonStores}</p>`;
    const features = app.features
      ? `<ul class="features">${app.features[lang]
          .map(([h, d]) => `<li><strong>${h}</strong><span>${d}</span></li>`)
          .join('')}</ul>`
      : '';
    const shots = app.screens
      ? `<div class="shots">${app.screens
          .map((s) => `<div class="phone"><img src="${rel(file, s)}" alt="" width="420" height="910" loading="lazy"></div>`)
          .join('')}</div>`
      : '';
    write(file, layout({
      lang, file, altFile: `${po}${app.slug}/index.html`, title: `${app.name[lang]} · vonmi`, description: app.tag[lang],
      body: `
<div class="wrap narrow page">
<a class="crumb" href="${rel(file, p)}#apps">← ${t.back}</a>
<section class="app-head">${appIcon(app, file, 88)}<div><h1>${app.name[lang]}</h1>${status(app, t)}</div></section>
<p class="lead">${app.tag[lang]}</p>
${stores}
<p>${app.intro[lang]}</p>
${features}
${shots}
${app.note ? `<p class="note">${app.note[lang]}</p>` : ''}
<ul class="doc-links">
${docs.map(([label, href]) => `  <li><a href="${href}">${label}<span aria-hidden="true">→</span></a></li>`).join('\n')}
</ul>
<h2>${t.support}</h2>
<p>${t.supportText}</p>
</div>`,
    }));
  }

  // Link-in-bio page for Instagram (/links): own minimal layout, one column.
  {
    const linksPath = (l) => `${prefix(l)}links/`;
    const file = `${linksPath(lang)}index.html`;
    const altFile = `${linksPath(other)}index.html`;
    const url = `https://vonmi.app/${linksPath(lang)}`;
    const row = (href, icon, title, hint) =>
      `<a class="lt-row" href="${href}">${icon}<span>${title}${hint ? `<small>${hint}</small>` : ''}</span><span class="lt-chev" aria-hidden="true">→</span></a>`;
    const apps = APPS.map((app) => {
      const page = rel(file, `${p}${app.slug}/`);
      const stores = app.stores
        ? `<div class="lt-stores">
        <a class="lt-store" data-os="ios" href="${app.stores.appStore}">App Store</a>
        <a class="lt-store" data-os="android" href="${app.stores.googlePlay}">Google Play</a>
      </div>`
        : `<div class="lt-soon"><i class="dot soon"></i>${t.comingSoonStores}</div>`;
      return `<div class="lt-app">
      <a class="lt-app-top" href="${page}">
        ${appIcon(app, file, 52)}
        <span><strong>${app.name[lang]}</strong><small>${app.tag[lang]}</small></span>
        <span class="lt-chev" aria-hidden="true">→</span>
      </a>
      ${stores}
    </div>`;
    }).join('\n    ');
    write(file, `<!doctype html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>vonmi · links</title>
<meta name="description" content="${t.linksBio}">
<meta name="theme-color" content="#0A0C11">
<meta property="og:type" content="website">
<meta property="og:title" content="vonmi">
<meta property="og:description" content="${t.linksBio}">
<meta property="og:url" content="${url}">
<link rel="canonical" href="${url}">
<link rel="icon" href="${rel(file, 'favicon.svg')}" type="image/svg+xml">
<link rel="stylesheet" href="${rel(file, 'assets/style.css')}">
<link rel="alternate" hreflang="${other}" href="https://vonmi.app/${linksPath(other)}">
</head>
<body class="lt">
<div class="lt-glow" aria-hidden="true"></div>
<main class="lt-main">
  <a class="lang-switch lt-lang" href="${rel(file, altFile.replace(/index\.html$/, ''))}" hreflang="${other}" aria-label="${other === 'en' ? 'Switch to English' : 'Przełącz na polski'}">${['pl', 'en']
    .map((l) => `<span${l === lang ? ' class="on"' : ''}>${l.toUpperCase()}</span>`)
    .join('')}</a>
  <section class="lt-profile">
    ${fs.readFileSync(path.join(root, 'favicon.svg'), 'utf8').trim()
      .replace('<svg ', '<svg class="lt-logo" width="88" height="88" aria-hidden="true" ')}
    <h1>vonmi<b>_</b></h1>
    <p>${t.linksBio}</p>
  </section>
  <p class="lt-group">${t.linksApps}</p>
  <div class="lt-list">
    ${apps}
  </div>
  <p class="lt-group">${t.linksContact}</p>
  <div class="lt-list">
    ${row(`mailto:${EMAIL}`, svg('<rect x="2" y="4" width="20" height="16" rx="3"/><path d="m3 6 9 7 9-7"/>'), EMAIL, t.supportHint)}
    ${row(rel(file, p), svg('<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"/>'), 'vonmi.app', t.fullSite)}
  </div>
  <footer class="lt-footer">${t.footer}</footer>
</main>
<script>
// Highlights the store for the visitor's phone; both buttons stay visible.
(() => {
  const ua = navigator.userAgent;
  const os = /iPhone|iPad|iPod/.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1) ? 'ios' : /Android/.test(ua) ? 'android' : null;
  if (os) document.querySelectorAll('[data-os="' + os + '"]').forEach((a) => a.classList.add('primary'));
})();
</script>
</body>
</html>
`);
  }

  // Legal pages per app
  for (const app of APPS) {
    const docs = LEGAL[app.slug] ?? [];
    const name = app.name[lang];
    for (const doc of docs) {
      const file = `${p}${app.slug}/${doc.slug}/index.html`;
      const title = t[doc.key];
      const body = doc.html[lang]
        .replaceAll('{{deleteUrl}}', rel(file, `${p}${app.slug}/delete-account/`))
        .replaceAll('{{privacyUrl}}', rel(file, `${p}${app.slug}/privacy/`));
      const nav = docs
        .filter((d) => d !== doc)
        .map((d) => `<a href="${rel(file, `${p}${app.slug}/${d.slug}/`)}">${t[d.key]}</a>`)
        .join('');
      write(file, layout({
        lang, file, altFile: `${po}${app.slug}/${doc.slug}/index.html`, title: `${title} · ${name}`, description: `${title} · ${name}`,
        body: `
<div class="wrap narrow page">
<a class="crumb crumb-app" href="${rel(file, `${p}${app.slug}/`)}">${appIcon(app, file, 28)}<span>${name}</span></a>
<article class="doc">
<h1>${title}</h1>
<p class="updated">${t.updated}: ${doc.updated[lang]}</p>
${body}
</article>
<nav class="doc-nav">${nav}</nav>
</div>`,
      }));
    }
  }
}

// Polish pages used to live under /pl/: keep those addresses as redirects.
for (const file of [...polishFiles]) {
  const target = file.replace(/index\.html$/, '');
  const old = `pl/${file}`;
  write(old, `<!doctype html>
<html lang="pl"><head><meta charset="utf-8"><title>vonmi</title>
<meta name="robots" content="noindex"><link rel="canonical" href="https://vonmi.app/${target}">
<meta http-equiv="refresh" content="0; url=${rel(old, target)}"></head>
<body><a href="${rel(old, target)}">vonmi.app/${target}</a></body></html>
`);
}

// 404 (bilingual, absolute links: served from any path)
write('404.html', `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Not found · vonmi</title><meta name="theme-color" content="#0A0C11"><link rel="icon" href="/favicon.svg" type="image/svg+xml"><link rel="stylesheet" href="/assets/style.css"></head>
<body><div class="bg-grid" aria-hidden="true"></div>
<header class="site-header"><div class="wrap nav"><a class="brand" href="/">vonmi<b>_</b></a></div></header>
<main><div class="wrap narrow page"><p class="prompt"><span>~/vonmi</span> $ cd page: no such file or directory</p><h1>404</h1>
<p class="lead">This page does not exist. · Ta strona nie istnieje.</p>
<p><a href="/">vonmi.app</a> · ${APPS.map((a) => `<a href="/${a.slug}/">${a.name.en}</a>`).join(' · ')}</p></div></main></body></html>
`);
