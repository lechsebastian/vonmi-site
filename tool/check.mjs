// Checks the generated site. Usage: node tool/check.mjs   (exit code 1 on problems)
// - every local link, image, stylesheet and og:image points to an existing file
// - JSON-LD blocks parse
// - every sitemap URL exists
// - the pages registered in the store consoles exist (STORE_PAGES)
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SITE = 'https://vonmi.app/';

// Addresses given to App Store Connect / Play Console: these must never break.
const STORE_PAGES = [
  'seansownik/privacy/', 'seansownik/delete-account/', 'en/seansownik/privacy/', 'en/seansownik/delete-account/',
  'spendio/privacy/', 'spendio/terms/', 'spendio/delete-account/',
  'en/spendio/privacy/', 'en/spendio/terms/', 'en/spendio/delete-account/',
];

const problems = [];
const SKIP = new Set(['.git', 'node_modules', 'tool', '.github', '.claude']);

function htmlFiles(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    if (SKIP.has(e.name)) return [];
    const p = path.join(dir, e.name);
    return e.isDirectory() ? htmlFiles(p) : e.name.endsWith('.html') ? [p] : [];
  });
}

// Resolves a site path ("a/b/" or "a/b.png") to a file in the repo, or null.
function exists(sitePath) {
  const clean = decodeURIComponent(sitePath.split(/[?#]/)[0]).replace(/^\/+/, '');
  const target = path.join(root, clean);
  if (clean === '' || clean.endsWith('/')) return fs.existsSync(path.join(target, 'index.html'));
  return fs.existsSync(target) && fs.statSync(target).isFile();
}

const files = htmlFiles(root);
for (const file of files) {
  const rel = path.relative(root, file).split(path.sep).join('/');
  const html = fs.readFileSync(file, 'utf8');
  const base = new URL(rel, SITE);

  for (const [, attr, value] of html.matchAll(/\b(href|src|content)="([^"]*)"/g)) {
    if (attr === 'content' && !value.startsWith(SITE)) continue;
    if (/^(mailto:|tel:|#|data:)/.test(value) || value === '') continue;
    const url = new URL(value, base);
    if (url.origin !== new URL(SITE).origin) continue;
    if (!exists(url.pathname)) problems.push(`${rel}: broken ${attr} → ${value}`);
  }

  for (const [, json] of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try { JSON.parse(json); } catch (e) { problems.push(`${rel}: invalid JSON-LD (${e.message})`); }
  }

  if (!/<meta name="robots" content="noindex">/.test(html)) {
    for (const tag of ['<title>', 'rel="canonical"', 'property="og:image"', 'hreflang="x-default"']) {
      if (!html.includes(tag)) problems.push(`${rel}: missing ${tag}`);
    }
  }
}

const sitemap = fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8');
for (const [, loc] of sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)) {
  if (!exists(new URL(loc).pathname)) problems.push(`sitemap.xml: missing page ${loc}`);
}
for (const page of STORE_PAGES) {
  if (!exists(page)) problems.push(`store page missing: ${page}`);
  if (!sitemap.includes(`<loc>${SITE}${page}</loc>`)) problems.push(`store page not in sitemap: ${page}`);
}

if (problems.length) {
  console.error(problems.join('\n'));
  console.error(`\n${problems.length} problem(s) in ${files.length} HTML files.`);
  process.exit(1);
}
console.log(`OK: ${files.length} HTML files, ${[...sitemap.matchAll(/<loc>/g)].length} sitemap URLs, ${STORE_PAGES.length} store pages.`);
