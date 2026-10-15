import { readFile, writeFile } from 'node:fs/promises';

const url = new URL(process.argv[2]);
if (url.protocol !== 'https:') throw new Error('Pages requiere una URL HTTPS.');
const siteUrl = url.href.replace(/\/$/, '');

for (const file of ['index.html', 'robots.txt', 'sitemap.xml']) {
  const path = new URL(`../dist/${file}`, import.meta.url);
  const content = await readFile(path, 'utf8');
  await writeFile(path, content.replaceAll('https://kesolucion.com', siteUrl));
}
