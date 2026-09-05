import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Seo from '../components/Seo';
import { PageHero, Section, SectionHeading, Button, IconTile } from '../components/ui';
import { CtaBand, BlogPreview } from '../components/home/HomeSections';
import ContactForm from '../components/ContactForm';
import { SERVICES, getService } from '../data/services';
import { SITE } from '../data/site';

const ServiceDetail: React.FC = () => {
  const { slug = '' } = useParams();
  const service = getService(slug);

  if (!service) return <Navigate to="/services" replace />;

  const related = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 4);

  return (
    <>
      <Seo
        title={`${service.name} in Pune`}
        description={service.metaDescription}
        image={service.image}
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: service.name,
            description: service.metaDescription,
            provider: { '@type': 'Organization', name: SITE.name, url: SITE.url },
            areaServed: 'IN',
            url: `${SITE.url}/services/${service.slug}`,
          },
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: service.faqs.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          },
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
              { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE.url}/services` },
              { '@type': 'ListItem', position: 3, name: service.name },
            ],
          },
        ]}
      />

      <PageHero
        eyebrow="Service"
        title={service.name}
        description={service.intro}
        breadcrumbs={[{ name: 'Services', to: '/services' }, { name: service.shortName }]}
        image={service.image}
        imageAlt={service.imageAlt}
      >
        <Button to="/contact" icon>
          Get a quote
        </Button>
        <Button href="#enquire" variant="secondary">
          Ask a question
        </Button>
      </PageHero>

      {/* Highlights */}
      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {service.highlights.map((h) => (
            <div key={h.title} className="rounded-2xl border border-slate-200 p-6 dark:border-slate-800">
              <CheckCircle2 className="h-6 w-6 text-brand-600 dark:text-brand-400" />
              <h3 className="mt-4 text-base font-semibold text-slate-900 dark:text-white">{h.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{h.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Offerings */}
      <Section tone="muted">
        <SectionHeading eyebrow="What is included" title={`Our ${service.shortName.toLowerCase()} services`} />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {service.offerings.map((o) => (
            <div key={o.title} className="rounded-2xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-900">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{o.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{o.description}</p>
              <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                {o.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-500" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Technologies */}
      <Section>
        <SectionHeading eyebrow="Technology" title="Platforms and tools we use" />
        <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {service.technologies.map((t) => (
            <li key={t.name} className="rounded-xl border border-slate-200 px-4 py-4 text-center dark:border-slate-800">
              <span className="block text-sm font-semibold text-slate-900 dark:text-white">{t.name}</span>
              <span className="mt-0.5 block text-xs text-slate-500 dark:text-slate-400">{t.category}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Process */}
      <Section tone="dark">
        <SectionHeading light eyebrow="Process" title="How a typical engagement runs" />
        <ol className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {service.process.map((s) => (
            <li key={s.step}>
              <span className="text-4xl font-bold text-brand-400/80">{s.step}</span>
              <h3 className="mt-3 text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.description}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* FAQ + enquiry */}
      <Section id="enquire">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading align="left" eyebrow="FAQ" title="Common questions" />
            <div className="mt-8 divide-y divide-slate-200 dark:divide-slate-800">
              {service.faqs.map((f) => (
                <details key={f.q} className="group py-4">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-slate-900 dark:text-white">
                    {f.q}
                    <span className="text-brand-500 transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{f.a}</p>
                </details>
              ))}
            </div>

            <h3 className="mt-12 text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Related services
            </h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link
                    to={`/services/${r.slug}`}
                    className="flex items-center gap-3 rounded-xl border border-slate-200 p-3 text-sm font-medium text-slate-800 transition-colors hover:border-brand-300 hover:text-brand-700 dark:border-slate-800 dark:text-slate-200 dark:hover:border-brand-700"
                  >
                    <IconTile icon={r.icon} className="!h-9 !w-9" />
                    {r.shortName}
                    <ArrowRight className="ml-auto h-4 w-4 text-slate-400" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 dark:border-slate-800 dark:bg-slate-900/60">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Ask about {service.shortName.toLowerCase()}</h3>
            <p className="mt-2 mb-6 text-sm text-slate-600 dark:text-slate-400">{SITE.responseTime}</p>
            <ContactForm compact />
          </div>
        </div>
      </Section>

      <BlogPreview title="Related reading" />
      <CtaBand />
    </>
  );
};

export default ServiceDetail;
