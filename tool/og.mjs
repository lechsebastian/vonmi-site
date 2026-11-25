// Renders share images (og:image) and PNG/ICO icons with headless Chrome.
// Usage: node tool/og.mjs   → writes assets/og/*.jpg, apple-touch-icon.png, favicon.ico
// Run it after changing app names, taglines or screenshots, then commit the images.
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { T, APPS } from './content.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'vonmi-og-'));

const CHROME = [
  process.env.CHROME,
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
].find((p) => p && fs.existsSync(p));
if (!CHROME) throw new Error('Chrome not found; set CHROME=/path/to/chrome');

function render(name, html, width, height, out) {
  const src = path.join(tmp, `${name}.html`);
  fs.writeFileSync(src, html);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  execFileSync(CHROME, [
    '--headless=new', '--disable-gpu', '--hide-scrollbars', '--force-device-scale-factor=1',
    '--default-background-color=00000000', `--window-size=${width},${height}`,
    `--screenshot=${out}`, pathToFileURL(src).href,
  ], { stdio: 'ignore' });
  console.log('wrote', path.relative(root, out));
}

const asset = (p) => pathToFileURL(path.join(root, p)).href;
const favicon = fs.readFileSync(path.join(root, 'favicon.svg'), 'utf8');
const spendioTile =
  `<svg width="260" height="260" viewBox="0 0 100 100"><rect width="100" height="100" rx="22.5" fill="#5F8274"/>` +
  `<rect x="22" y="30" width="56" height="42" rx="9" fill="#F4F8F6"/><path d="M22 41H78" stroke="#5F8274" stroke-width="3"/>` +
  `<rect x="50" y="47" width="28" height="17" rx="8.5" fill="#5F8274"/><circle cx="60" cy="55.5" r="3.5" fill="#F4F8F6"/></svg>`;

const css = `
* { box-sizing: border-box; margin: 0; }
html, body { width: 1200px; height: 630px; overflow: hidden; }
body { background: #0A0C11; color: #E7EAF3; font-family: "Segoe UI", system-ui, sans-serif; position: relative; }
.grid { position: absolute; inset: 0; opacity: .4;
  background-image: linear-gradient(#232836 1px, transparent 1px), linear-gradient(90deg, #232836 1px, transparent 1px);
  background-size: 48px 48px; -webkit-mask-image: radial-gradient(ellipse 80% 80% at 30% 40%, #000 20%, transparent 75%); }
.glow { position: absolute; right: 60px; top: 60px; width: 520px; height: 520px; border-radius: 50%;
  background: radial-gradient(circle, rgba(139,108,255,.5), rgba(45,212,239,.16) 55%, transparent 70%); filter: blur(24px); }
.text { position: absolute; left: 80px; top: 0; bottom: 0; width: 640px; display: flex; flex-direction: column; justify-content: center; }
.brand { font: 700 34px/1 "Cascadia Code", Consolas, monospace; margin-bottom: 40px; }
.brand b { color: #2DD4EF; }
.app { display: flex; align-items: center; gap: 22px; margin-bottom: 26px; }
.app img, .app svg { width: 92px; height: 92px; border-radius: 22.5%; background: #fff; }
h1 { font-size: 72px; line-height: 1.04; letter-spacing: -2px; font-weight: 700; }
h1 span { background: linear-gradient(90deg, #8B6CFF, #2DD4EF); -webkit-background-clip: text; color: transparent; }
p { margin-top: 24px; font-size: 30px; line-height: 1.35; color: #8A93A8; max-width: 600px; }
.url { position: absolute; left: 80px; bottom: 44px; font: 24px "Cascadia Code", Consolas, monospace; color: #8A93A8; }
.phone { position: absolute; right: 120px; top: 70px; width: 300px; border-radius: 44px; padding: 10px; background: #1B1F29;
  border: 1px solid #2D3342; box-shadow: 0 40px 80px rgba(0,0,0,.6); }
.phone img { display: block; width: 100%; border-radius: 35px; }
.phone.back { right: 330px; top: 120px; width: 240px; transform: rotate(-8deg); opacity: .5; }
.home .text { width: 520px; }
.home h1 { font-size: 64px; }
.home p { font-size: 27px; }
.tile { position: absolute; right: 170px; top: 185px; border-radius: 58px; box-shadow: 0 40px 80px rgba(0,0,0,.6); }
`;

const page = (inner, cls = '') => `<!doctype html><html><head><meta charset="utf-8"><style>${css}</style></head>
<body class="${cls}"><div class="grid"></div><div class="glow"></div>${inner}</body></html>`;

const phones = (screens) =>
  `<div class="phone back"><img src="${asset(screens[1])}"></div><div class="phone"><img src="${asset(screens[0])}"></div>`;

for (const lang of ['pl', 'en']) {
  const t = T[lang];
  const showcase = APPS.find((a) => a.screens);
  const heroWord = t.heroHtml.match(/data-words="([^|"]+)/)[1];
  const heroRest = t.heroHtml.split('</span>')[1].trim();
  render(`home-${lang}`, page(`
<div class="text">
  <div class="brand">vonmi<b>_</b></div>
  <h1>${lang === 'pl' ? `<span>${heroWord}</span><br>${heroRest}` : `I <span>${heroWord}</span><br>${heroRest}`}</h1>
  <p>${t.homeLead}</p>
</div>
<div class="url">vonmi.app</div>
${phones(showcase.screens)}`, 'home'), 1200, 630, path.join(root, `assets/og/home-${lang}.jpg`));

  for (const app of APPS) {
    const icon = app.icon ? `<img src="${asset(app.icon)}">` : spendioTile.replace(/width="260" height="260"/, '');
    const art = app.screens ? phones(app.screens) : `<div class="tile">${spendioTile}</div>`;
    render(`${app.slug}-${lang}`, page(`
<div class="text">
  <div class="app">${icon}<h1>${app.name[lang]}</h1></div>
  <p style="margin-top:0">${app.tag[lang]}</p>
  <p style="font-size:24px">${app.stores ? 'App Store · Google Play' : t.comingSoonStores}</p>
</div>
<div class="url">vonmi.app/${lang === 'en' ? 'en/' : ''}${app.slug}</div>
${art}`), 1200, 630, path.join(root, `assets/og/${app.slug}-${lang}.jpg`));
  }
}

// Icons: square, full-bleed (iOS rounds the corners itself).
const square = favicon.replace('rx="22.5"', 'rx="0"');
const iconPage = (size, svg) => `<!doctype html><html><head><style>html,body{margin:0;width:${size}px;height:${size}px;overflow:hidden;background:transparent}
svg{display:block;width:${size}px;height:${size}px}</style></head><body>${svg}</body></html>`;
render('apple-touch-icon', iconPage(180, square), 180, 180, path.join(root, 'apple-touch-icon.png'));

// favicon.ico with PNG entries (16, 32, 48), for tools that ignore SVG icons.
const sizes = [16, 32, 48];
const pngs = sizes.map((s) => {
  const out = path.join(tmp, `ico-${s}.png`);
  render(`ico-${s}`, iconPage(s, favicon), s, s, out);
  return fs.readFileSync(out);
});
const header = Buffer.alloc(6 + 16 * sizes.length);
header.writeUInt16LE(0, 0);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(sizes.length, 4);
let offset = header.length;
sizes.forEach((s, i) => {
  const e = 6 + 16 * i;
  header.writeUInt8(s, e);
  header.writeUInt8(s, e + 1);
  header.writeUInt16LE(1, e + 4);
  header.writeUInt16LE(32, e + 6);
  header.writeUInt32LE(pngs[i].length, e + 8);
  header.writeUInt32LE(offset, e + 12);
  offset += pngs[i].length;
});
fs.writeFileSync(path.join(root, 'favicon.ico'), Buffer.concat([header, ...pngs]));
console.log('wrote favicon.ico');
fs.rmSync(tmp, { recursive: true, force: true });
