# Intrepid Technology website

Marketing website for Intrepid Technology, built with React 18, TypeScript, Vite, Tailwind CSS and React Router.

## Scripts

| Command           | What it does                                                   |
| ----------------- | -------------------------------------------------------------- |
| `npm run dev`     | Start the development server                                   |
| `npm run build`   | Regenerate `public/sitemap.xml` and `robots.txt`, then build   |
| `npm run preview` | Serve the production build locally                             |
| `npm run lint`    | Run ESLint                                                     |
| `npm run sitemap` | Regenerate the sitemap only                                    |

## Where content lives

All copy is data-driven so it can be edited without touching layout code:

| File                  | Contents                                                      |
| --------------------- | ------------------------------------------------------------- |
| `src/data/site.ts`    | Company details, contact info, social links, stats, platforms |
| `src/data/services.ts`| Every service page (offerings, technologies, process, FAQs)   |
| `src/data/blog.ts`    | Blog posts                                                    |
| `src/data/content.ts` | Case studies, testimonials, industries, process, why-us       |

Adding a service, post or project to the relevant array automatically creates its page, adds it to navigation and footer, and includes it in the sitemap on the next build.

## SEO

- Per-page titles, descriptions, canonical URLs, Open Graph and Twitter tags are set by `src/components/Seo.tsx`.
- JSON-LD structured data is emitted for the organisation, services, FAQs, blog posts, case studies, job postings and breadcrumbs.
- `public/sitemap.xml` and `public/robots.txt` are generated from the data files before each build.
- The site URL used in canonical links and the sitemap is `SITE.url` in `src/data/site.ts`.

## Deployment notes

The app is a single-page application. Configure the host to serve `index.html` for unknown routes (history fallback) so deep links such as `/services/shopify-development` work on refresh.
