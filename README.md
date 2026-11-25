# vonmi.app

Static site (GitHub Pages): app pages, privacy policies, terms, account deletion.

1. Edit `tool/content.mjs` (texts, apps, legal pages).
2. Run `node tool/build.mjs` → generates the HTML, `sitemap.xml` and `robots.txt`.
3. Run `node tool/check.mjs` → checks links, images, JSON-LD, sitemap and the pages registered in the store consoles.
4. If app names, taglines or screenshots changed, run `node tool/og.mjs` (needs Chrome) → regenerates the share images in `assets/og/`, `apple-touch-icon.png` and `favicon.ico`.
5. Commit everything. GitHub Actions repeats steps 2–3 on every push and fails if the committed HTML is out of date.
