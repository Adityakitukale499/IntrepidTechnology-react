import React from 'react';
import { Users, TrendingUp, Laptop, Heart, GraduationCap, ArrowUpRight } from 'lucide-react';
import Seo from '../components/Seo';
import { PageHero, Section, SectionHeading, Button, IconTile, Badge } from '../components/ui';
import { CtaBand } from '../components/home/HomeSections';
import { SITE } from '../data/site';

const BENEFITS = [
  { icon: Users, title: 'Small, senior team', description: 'Work directly with experienced engineers and clients. No layers, no busywork.' },
  { icon: TrendingUp, title: 'Real growth', description: 'Certifications, conference budgets and a clear path from junior to lead.' },
  { icon: Laptop, title: 'Modern stack', description: 'React, Node, Flutter, AWS, DigitalOcean, Shopify, WordPress and RPA tooling.' },
  { icon: Heart, title: 'Balanced hours', description: 'Flexible timing, hybrid work and time off that you are actually encouraged to take.' },
];

const OPENINGS = [
  { title: 'Full-stack Developer (React / Node.js)', type: 'Full-time', location: 'Pune (hybrid)', experience: '2 to 5 years' },
  { title: 'WordPress & WooCommerce Developer', type: 'Full-time', location: 'Pune (hybrid)', experience: '1 to 4 years' },
  { title: 'Shopify Developer', type: 'Full-time / Contract', location: 'Remote (India)', experience: '2+ years' },
  { title: 'Cloud & DevOps Engineer (AWS)', type: 'Full-time', location: 'Pune (hybrid)', experience: '3+ years' },
  { title: 'Flutter Developer', type: 'Full-time', location: 'Pune (hybrid)', experience: '1 to 3 years' },
];

const INTERNSHIPS = [
  { title: 'Web Development', description: 'HTML, CSS, JavaScript, React and Node.js on live client projects.', tags: ['React', 'Node.js', 'Full stack'] },
  { title: 'Mobile App Development', description: 'Build cross-platform apps with Flutter and React Native, from UI to release.', tags: ['Flutter', 'React Native'] },
  { title: 'E-commerce (Shopify & WooCommerce)', description: 'Set up and customise online stores, payments and integrations.', tags: ['Shopify', 'WooCommerce'] },
  { title: 'Cloud & DevOps', description: 'Deploy and monitor applications on AWS and DigitalOcean with Docker and CI/CD.', tags: ['AWS', 'DigitalOcean', 'Docker'] },
  { title: 'RPA: UiPath & Power Automate', description: 'Design and build bots that automate real business processes.', tags: ['UiPath', 'Power Automate'] },
  { title: 'Automation Anywhere', description: 'Intelligent automation and document processing for enterprise workflows.', tags: ['Automation Anywhere', 'RPA'] },
];

const Careers: React.FC = () => (
  <>
    <Seo
      title="Careers & Internships at Intrepid Technology, Pune"
      description="Join Intrepid Technology in Pune. Open roles for full-stack, WordPress, Shopify, cloud and Flutter developers, plus hands-on internships in web, mobile, cloud and RPA."
      jsonLd={OPENINGS.map((o) => ({
        '@context': 'https://schema.org',
        '@type': 'JobPosting',
        title: o.title,
        employmentType: o.type.toUpperCase().includes('CONTRACT') ? 'CONTRACTOR' : 'FULL_TIME',
        hiringOrganization: { '@type': 'Organization', name: SITE.name, sameAs: SITE.url },
        jobLocation: { '@type': 'Place', address: { '@type': 'PostalAddress', addressLocality: 'Pune', addressRegion: 'Maharashtra', addressCountry: 'IN' } },
        datePosted: '2026-08-01',
        description: `${o.title} at ${SITE.name}. Experience: ${o.experience}. Location: ${o.location}.`,
      }))}
    />
    <PageHero
      eyebrow="Careers"
      title="Build things that businesses depend on"
      description="We are a small team in Pune that takes ownership of real systems for real clients. If you like shipping quality work and learning fast, we would like to hear from you."
      breadcrumbs={[{ name: 'Careers' }]}
      image="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1200"
      imageAlt="Team members working together in an office"
    >
      <Button href="#openings" icon>
        View open roles
      </Button>
      <Button href="#internships" variant="secondary">
        Internship programmes
      </Button>
    </PageHero>

    <Section>
      <SectionHeading eyebrow="Why join" title="What working here is like" />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {BENEFITS.map((b) => (
          <div key={b.title} className="rounded-2xl border border-slate-200 p-7 dark:border-slate-800">
            <IconTile icon={b.icon} />
            <h3 className="mt-5 text-base font-semibold text-slate-900 dark:text-white">{b.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{b.description}</p>
          </div>
        ))}
      </div>
    </Section>

    <Section id="openings" tone="muted">
      <SectionHeading eyebrow="Open roles" title="Current openings" description="Do not see a perfect match? Send us your profile anyway; we hire for attitude and learning speed." />
      <ul className="mt-12 divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-white dark:divide-slate-800 dark:border-slate-800 dark:bg-slate-900">
        {OPENINGS.map((o) => (
          <li key={o.title} className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-base font-semibold text-slate-900 dark:text-white">{o.title}</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                <Badge>{o.type}</Badge>
                <Badge>{o.location}</Badge>
                <Badge>{o.experience}</Badge>
              </div>
            </div>
            <a
              href={`mailto:${SITE.email}?subject=${encodeURIComponent(`Application: ${o.title}`)}`}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:underline dark:text-brand-400"
            >
              Apply by email <ArrowUpRight className="h-4 w-4" />
            </a>
          </li>
        ))}
      </ul>
    </Section>

    <Section id="internships">
      <div className="grid items-start gap-12 lg:grid-cols-3">
        <div>
          <IconTile icon={GraduationCap} />
          <SectionHeading
            align="left"
            className="mt-5"
            eyebrow="Internships"
            title="Hands-on internship programmes"
            description="Three to six month programmes where you work on live client projects with a mentor, not on throwaway exercises. Certificates and full-time offers for strong performers."
          />
          <div className="mt-8">
            <Button href={SITE.internshipFormUrl} icon>
              Apply for an internship
            </Button>
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:col-span-2">
          {INTERNSHIPS.map((i) => (
            <div key={i.title} className="rounded-2xl border border-slate-200 p-6 dark:border-slate-800">
              <h3 className="text-base font-semibold text-slate-900 dark:text-white">{i.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{i.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {i.tags.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>

    <CtaBand title="Want to work with us as a client instead?" description="Tell us about your project and we will get back within one business day." />
  </>
);

export default Careers;
