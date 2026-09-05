import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { PageHero, Section, Badge } from '../components/ui';
import { PostCard, CtaBand } from '../components/home/HomeSections';
import { POSTS, CATEGORIES, formatDate } from '../data/blog';
import { SITE } from '../data/site';

const Blog: React.FC = () => {
  const [active, setActive] = useState('All');
  const [featured, ...rest] = POSTS;
  const list = active === 'All' ? rest : POSTS.filter((p) => p.category === active);

  return (
    <>
      <Seo
        title="Blog | Guides on Hosting, E-commerce, WordPress, SEO and Automation"
        description="Practical articles from Intrepid Technology on AWS, DigitalOcean and Hostinger hosting, Shopify and WooCommerce, WordPress performance, technical SEO and RPA."
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Blog',
          name: `${SITE.name} Blog`,
          url: `${SITE.url}/blog`,
          blogPost: POSTS.map((p) => ({
            '@type': 'BlogPosting',
            headline: p.title,
            datePublished: p.date,
            url: `${SITE.url}/blog/${p.slug}`,
          })),
        }}
      />
      <PageHero
        eyebrow="Blog"
        title="Insights on building and running digital businesses"
        description="Guides and opinions from our engineers on hosting, e-commerce platforms, WordPress, search and automation. Written to be useful, not to sell."
        breadcrumbs={[{ name: 'Blog' }]}
      />

      {/* Featured */}
      {active === 'All' && (
        <Section className="!pb-0">
          <Link
            to={`/blog/${featured.slug}`}
            className="group grid overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 lg:grid-cols-2"
          >
            <div className="aspect-[16/10] lg:aspect-auto">
              <img src={featured.image} alt={featured.imageAlt} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="flex flex-col justify-center p-8 lg:p-12">
              <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                <Badge>{featured.category}</Badge>
                <time dateTime={featured.date}>{formatDate(featured.date)}</time>
                <span>{featured.readTime}</span>
              </div>
              <h2 className="mt-4 text-2xl font-bold leading-snug text-slate-900 group-hover:text-brand-600 dark:text-white dark:group-hover:text-brand-400 lg:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400">{featured.excerpt}</p>
              <span className="mt-6 text-sm font-semibold text-brand-600 dark:text-brand-400">Read article</span>
            </div>
          </Link>
        </Section>
      )}

      <Section>
        <div className="flex flex-wrap gap-2">
          {['All', ...CATEGORIES].map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                active === c
                  ? 'bg-brand-600 text-white'
                  : 'border border-slate-200 text-slate-700 hover:border-slate-300 dark:border-slate-700 dark:text-slate-300'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {list.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </Section>
      <CtaBand title="Have a question about your own setup?" description="Our engineers are happy to look at your hosting, store or website and give you an honest recommendation." />
    </>
  );
};

export default Blog;
