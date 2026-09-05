// Generates public/sitemap.xml and public/robots.txt from the route data.
// Runs automatically before `vite build` (see package.json "prebuild").
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const read = (p) => readFileSync(resolve(root, p), 'utf8');

const siteUrl = (read('src/data/site.ts').match(/url:\s*'([^']+)'/) ?? [])[1] ?? 'https://intrepidtechnology.in';
const slugsOf = (file) => [...read(file).matchAll(/^\s+slug:\s*'([^']+)'/gm)].map((m) => m[1]);

const services = slugsOf('src/data/services.ts');
const posts = slugsOf('src/data/blog.ts');
const projects = slugsOf('src/data/content.ts');

const today = new Date().toISOString().slice(0, 10);
const entries = [
  { path: '/', priority: '1.0', freq: 'weekly' },
  { path: '/about', priority: '0.8', freq: 'monthly' },
  { path: '/services', priority: '0.9', freq: 'monthly' },
  ...services.map((s) => ({ path: `/services/${s}`, priority: '0.8', freq: 'monthly' })),
  { path: '/portfolio', priority: '0.7', freq: 'monthly' },
  ...projects.map((s) => ({ path: `/portfolio/${s}`, priority: '0.6', freq: 'yearly' })),
  { path: '/blog', priority: '0.8', freq: 'weekly' },
  ...posts.map((s) => ({ path: `/blog/${s}`, priority: '0.7', freq: 'monthly' })),
  { path: '/careers', priority: '0.6', freq: 'monthly' },
  { path: '/contact', priority: '0.8', freq: 'yearly' },
  { path: '/privacy-policy', priority: '0.2', freq: 'yearly' },
  { path: '/terms-conditions', priority: '0.2', freq: 'yearly' },
  { path: '/cookie-policy', priority: '0.2', freq: 'yearly' },
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    (e) => `  <url>
    <loc>${siteUrl}${e.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${e.freq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;

mkdirSync(resolve(root, 'public'), { recursive: true });
writeFileSync(resolve(root, 'public/sitemap.xml'), xml);
writeFileSync(resolve(root, 'public/robots.txt'), robots);
console.log(`sitemap: ${entries.length} URLs written to public/sitemap.xml`);
