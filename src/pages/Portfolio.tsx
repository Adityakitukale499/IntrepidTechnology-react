import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { PageHero, Section, Badge, Button } from '../components/ui';
import { CtaBand, Testimonials } from '../components/home/HomeSections';
import { PROJECTS } from '../data/content';

const Portfolio: React.FC = () => {
  const categories = ['All', ...Array.from(new Set(PROJECTS.map((p) => p.category)))];
  const [active, setActive] = useState('All');
  const list = active === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  return (
    <>
      <Seo
        title="Our Work | Case Studies in Web, E-commerce, Cloud and Automation"
        description="Case studies from Intrepid Technology: Shopify stores, custom ERPs on AWS, patient apps, learning platforms and automation projects for businesses across India."
      />
      <PageHero
        eyebrow="Our work"
        title="Projects that solved real business problems"
        description="A selection of the platforms, stores and systems we have designed, built and continue to run for our clients."
        breadcrumbs={[{ name: 'Work' }]}
      >
        <Button to="/contact" icon>
          Start your project
        </Button>
      </PageHero>

      <Section>
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
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
          {list.map((p) => (
            <Link key={p.slug} to={`/portfolio/${p.slug}`} className="group flex flex-col">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <Badge>{p.category}</Badge>
                <Badge>{p.service}</Badge>
                {p.confidential && <Badge>NDA</Badge>}
              </div>
              <h2 className="mt-3 text-lg font-semibold text-slate-900 group-hover:text-brand-600 dark:text-white dark:group-hover:text-brand-400">
                {p.title}
              </h2>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{p.summary}</p>
              <p className="mt-3 text-xs text-slate-500 dark:text-slate-500">{p.client}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Testimonials />
      <CtaBand />
    </>
  );
};

export default Portfolio;
