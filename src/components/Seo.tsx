import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SITE } from '../data/site';

interface SeoProps {
  title: string;
  description: string;
  /** Absolute or site-relative path. Defaults to the current route. */
  path?: string;
  image?: string;
  type?: 'website' | 'article';
  /** Any JSON-LD objects to inject for this page. */
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  publishedTime?: string;
  noIndex?: boolean;
}

const upsertMeta = (attr: 'name' | 'property', key: string, content: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
};

const upsertLink = (rel: string, href: string) => {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
};

const JSON_LD_ID = 'page-jsonld';

/**
 * Client-side head management. Sets title, description, canonical,
 * Open Graph and Twitter tags, plus optional JSON-LD for the current route.
 */
const Seo: React.FC<SeoProps> = ({
  title,
  description,
  path,
  image,
  type = 'website',
  jsonLd,
  publishedTime,
  noIndex,
}) => {
  const location = useLocation();

  useEffect(() => {
    const fullTitle = title.includes(SITE.name) ? title : `${title} | ${SITE.name}`;
    const routePath = path ?? location.pathname;
    const url = routePath.startsWith('http') ? routePath : `${SITE.url}${routePath === '/' ? '/' : routePath}`;
    const img = image ?? `${SITE.url}/logo.png`;

    document.title = fullTitle;
    upsertMeta('name', 'description', description);
    upsertMeta('name', 'robots', noIndex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large');
    upsertLink('canonical', url);

    upsertMeta('property', 'og:type', type);
    upsertMeta('property', 'og:site_name', SITE.name);
    upsertMeta('property', 'og:title', fullTitle);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', url);
    upsertMeta('property', 'og:image', img);
    if (publishedTime) upsertMeta('property', 'article:published_time', publishedTime);

    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', fullTitle);
    upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:image', img);

    const existing = document.getElementById(JSON_LD_ID);
    if (existing) existing.remove();
    if (jsonLd) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = JSON_LD_ID;
      script.text = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }
  }, [title, description, path, image, type, jsonLd, publishedTime, noIndex, location.pathname]);

  return null;
};

export default Seo;
