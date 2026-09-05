import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Quote } from 'lucide-react';
import { Section, SectionHeading, Button, Card, IconTile, Badge } from '../ui';
import { PLATFORMS } from '../../data/site';
import { SERVICES } from '../../data/services';
import { PROJECTS, TESTIMONIALS, INDUSTRIES, PROCESS, WHY_US } from '../../data/content';
import { POSTS, formatDate } from '../../data/blog';

/* ------------------------------------------------------------------ */
/* Platform strip                                                      */
/* ------------------------------------------------------------------ */

export const PlatformStrip: React.FC = () => (
  <div className="border-y border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
    <div className="container-x py-8">
      <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
        Platforms we build and host on
      </p>
      <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
        {PLATFORMS.slice(0, 10).map((p) => (
          <li key={p.name} className="text-base font-semibold text-slate-400 transition-colors hover:text-slate-800 dark:text-slate-500 dark:hover:text-slate-200">
            {p.name}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

/* ------------------------------------------------------------------ */
/* Services                                                            */
/* ------------------------------------------------------------------ */

export const ServicesGrid: React.FC<{ limit?: number; tone?: 'white' | 'muted' }> = ({ limit, tone = 'muted' }) => {
  const list = limit ? SERVICES.slice(0, limit) : SERVICES;
  return (
    <Section id="services" tone={tone}>
      <SectionHeading
        eyebrow="What we do"
        title="Services built around how your business runs"
        description="From a first website to a production cloud platform, one team covers design, development, hosting and support."
      />
      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {list.map((service) => (
          <Link key={service.slug} to={`/services/${service.slug}`} className="group block h-full">
            <Card className="flex h-full flex-col">
              <IconTile icon={service.icon} />
              <h3 className="mt-5 text-lg font-semibold text-slate-900 group-hover:text-brand-600 dark:text-white dark:group-hover:text-brand-400">
                {service.shortName}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{service.summary}</p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 dark:text-brand-400">
                Learn more
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Card>
          </Link>
        ))}
      </div>
      {limit && (
        <div className="mt-12 text-center">
          <Button to="/services" variant="secondary" icon>
            View all services
          </Button>
        </div>
      )}
    </Section>
  );
};

/* ------------------------------------------------------------------ */
/* Why us                                                              */
/* ------------------------------------------------------------------ */

export const WhyUs: React.FC = () => (
  <Section>
    <div className="grid items-start gap-12 lg:grid-cols-12">
      <div className="lg:col-span-5">
        <SectionHeading
          align="left"
          eyebrow="Why Intrepid"
          title="One accountable team for the whole stack"
          description="Most agencies build the site and leave the hosting, SEO and support to someone else. We handle all of it, so there is one number to call when something needs to change."
        />
        <div className="mt-8">
          <Button to="/about" icon variant="secondary">
            More about us
          </Button>
        </div>
        <img
          src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1000"
          alt="Intrepid Technology team collaborating in a meeting"
          loading="lazy"
          className="mt-10 hidden aspect-[4/3] w-full rounded-2xl object-cover shadow-card lg:block"
        />
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:col-span-7">
        {WHY_US.map((item, i) => (
          <div key={item.title} className="rounded-2xl border border-slate-200 p-6 dark:border-slate-800">
            <span className="text-sm font-semibold text-brand-600 dark:text-brand-400">0{i + 1}</span>
            <h3 className="mt-2 text-base font-semibold text-slate-900 dark:text-white">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  </Section>
);

/* ------------------------------------------------------------------ */
/* Process                                                             */
/* ------------------------------------------------------------------ */

export const ProcessSteps: React.FC<{ steps?: typeof PROCESS; tone?: 'white' | 'muted' | 'dark' }> = ({
  steps = PROCESS,
  tone = 'dark',
}) => (
  <Section tone={tone}>
    <SectionHeading
      light={tone === 'dark'}
      eyebrow="How we work"
      title="A clear process from first call to launch"
      description="You always know what is happening, what comes next and what it costs."
    />
    <ol className={`mt-14 grid gap-8 md:grid-cols-2 ${steps.length >= 5 ? 'lg:grid-cols-5' : 'lg:grid-cols-4'}`}>
      {steps.map((s) => (
        <li key={s.step} className="relative">
          <span
            className={`text-4xl font-bold ${tone === 'dark' ? 'text-brand-400/80' : 'text-brand-600/70'}`}
          >
            {s.step}
          </span>
          <h3 className={`mt-3 text-lg font-semibold ${tone === 'dark' ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
            {s.title}
          </h3>
          <p className={`mt-2 text-sm leading-relaxed ${tone === 'dark' ? 'text-slate-400' : 'text-slate-600 dark:text-slate-400'}`}>
            {s.description}
          </p>
        </li>
      ))}
    </ol>
  </Section>
);

/* ------------------------------------------------------------------ */
/* Industries                                                          */
/* ------------------------------------------------------------------ */

export const Industries: React.FC = () => (
  <Section tone="muted">
    <SectionHeading
      eyebrow="Industries"
      title="Experience across the sectors we serve"
      description="Each industry has its own workflows, compliance needs and customer expectations. We have built for these."
    />
    <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {INDUSTRIES.map((ind) => (
        <div key={ind.name} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
          <div className="aspect-[16/10] overflow-hidden">
            <img
              src={ind.image}
              alt={`${ind.name} solutions`}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="p-6">
            <h3 className="text-base font-semibold text-slate-900 dark:text-white">{ind.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{ind.description}</p>
          </div>
        </div>
      ))}
    </div>
  </Section>
);

/* ------------------------------------------------------------------ */
/* Case studies                                                        */
/* ------------------------------------------------------------------ */

export const CaseStudies: React.FC<{ limit?: number }> = ({ limit = 3 }) => (
  <Section>
    <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <SectionHeading
        align="left"
        eyebrow="Our work"
        title="Recent projects"
        description="A selection of the platforms, stores and systems we have delivered."
      />
      <Button to="/portfolio" variant="secondary" icon className="md:mb-1">
        All case studies
      </Button>
    </div>
    <div className="mt-12 grid gap-6 md:grid-cols-3">
      {PROJECTS.slice(0, limit).map((p) => (
        <Link key={p.slug} to={`/portfolio/${p.slug}`} className="group block">
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
          <h3 className="mt-3 text-lg font-semibold text-slate-900 group-hover:text-brand-600 dark:text-white dark:group-hover:text-brand-400">
            {p.title}
          </h3>
          <p className="mt-1.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{p.summary}</p>
        </Link>
      ))}
    </div>
  </Section>
);

/* ------------------------------------------------------------------ */
/* Testimonials                                                        */
/* ------------------------------------------------------------------ */

export const Testimonials: React.FC = () => (
  <Section tone="muted">
    <SectionHeading eyebrow="Client feedback" title="What clients say about working with us" />
    <div className="mt-14 grid gap-6 md:grid-cols-2">
      {TESTIMONIALS.map((t) => (
        <figure key={t.name} className="rounded-2xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-900">
          <Quote className="h-6 w-6 text-brand-300" />
          <blockquote className="mt-4 text-base leading-relaxed text-slate-700 dark:text-slate-300">“{t.quote}”</blockquote>
          <figcaption className="mt-6 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 text-sm font-bold text-brand-700 dark:bg-brand-950 dark:text-brand-300">
              {t.name
                .split(' ')
                .map((n) => n[0])
                .join('')}
            </span>
            <span>
              <span className="block text-sm font-semibold text-slate-900 dark:text-white">{t.name}</span>
              <span className="block text-xs text-slate-500 dark:text-slate-400">
                {t.role}, {t.company}
              </span>
            </span>
          </figcaption>
        </figure>
      ))}
    </div>
  </Section>
);

/* ------------------------------------------------------------------ */
/* Blog preview                                                        */
/* ------------------------------------------------------------------ */

export const BlogPreview: React.FC<{ exclude?: string; limit?: number; title?: string }> = ({
  exclude,
  limit = 3,
  title = 'Insights from our team',
}) => {
  const posts = POSTS.filter((p) => p.slug !== exclude).slice(0, limit);
  return (
    <Section>
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          align="left"
          eyebrow="Blog"
          title={title}
          description="Practical guides on hosting, e-commerce, WordPress, SEO and automation."
        />
        <Button to="/blog" variant="secondary" icon className="md:mb-1">
          All articles
        </Button>
      </div>
      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </Section>
  );
};

export const PostCard: React.FC<{ post: (typeof POSTS)[number] }> = ({ post }) => (
  <article className="group flex h-full flex-col">
    <Link to={`/blog/${post.slug}`} className="aspect-[16/10] overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800">
      <img
        src={post.image}
        alt={post.imageAlt}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </Link>
    <div className="mt-4 flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
      <Badge>{post.category}</Badge>
      <time dateTime={post.date}>{formatDate(post.date)}</time>
      <span>{post.readTime}</span>
    </div>
    <h3 className="mt-3 text-lg font-semibold leading-snug text-slate-900 dark:text-white">
      <Link to={`/blog/${post.slug}`} className="group-hover:text-brand-600 dark:group-hover:text-brand-400">
        {post.title}
      </Link>
    </h3>
    <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{post.excerpt}</p>
  </article>
);

/* ------------------------------------------------------------------ */
/* CTA                                                                 */
/* ------------------------------------------------------------------ */

export const CtaBand: React.FC<{ title?: string; description?: string }> = ({
  title = 'Ready to start your project?',
  description = 'Tell us what you are building. We will reply within one business day with next steps and a clear estimate.',
}) => (
  <section className="bg-brand-600">
    <div className="container-x flex flex-col items-start gap-8 py-16 md:flex-row md:items-center md:justify-between">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight text-white">{title}</h2>
        <p className="mt-3 text-lg text-brand-100">{description}</p>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button to="/contact" variant="white" size="lg" icon>
          Get a free consultation
        </Button>
      </div>
    </div>
  </section>
);
