import React from 'react';
import { Target, Eye, Users, ShieldCheck, Handshake, Sparkles } from 'lucide-react';
import Seo from '../components/Seo';
import { PageHero, Section, SectionHeading, Button, IconTile } from '../components/ui';
import { CtaBand, Testimonials, ProcessSteps } from '../components/home/HomeSections';
import { STATS, PLATFORMS, SITE } from '../data/site';

const VALUES = [
  { icon: ShieldCheck, title: 'Honesty over hype', description: 'We tell you what will work, what will not, and what it will cost. Even when the answer is a cheaper option.' },
  { icon: Sparkles, title: 'Craft', description: 'Clean code, tidy infrastructure and interfaces that are a pleasure to use. Details matter because they compound.' },
  { icon: Handshake, title: 'Partnership', description: 'We measure success by how long clients stay with us, not by how many projects we sign.' },
  { icon: Users, title: 'Learning', description: 'Technology changes fast. We invest in training, certifications and internal projects so our advice stays current.' },
];

const About: React.FC = () => (
  <>
    <Seo
      title="About Intrepid Technology | IT Services Company in Pune"
      description="Learn about Intrepid Technology, a Pune-based team building websites, online stores, cloud infrastructure and automation for businesses across India since 2022."
    />
    <PageHero
      eyebrow="About us"
      title="A technology partner that builds and runs what it recommends"
      description={`Intrepid Technology was founded in ${SITE.founded} in Pune with a simple idea: businesses deserve a technology team that takes responsibility for the whole system, from the code to the servers it runs on.`}
      breadcrumbs={[{ name: 'About' }]}
      image="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200"
      imageAlt="Intrepid Technology team working together"
    >
      <Button to="/contact" icon>
        Work with us
      </Button>
      <Button to="/careers" variant="secondary">
        Join the team
      </Button>
    </PageHero>

    {/* Stats */}
    <div className="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      <dl className="container-x grid grid-cols-2 gap-8 py-12 md:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label} className="text-center">
            <dd className="text-4xl font-bold text-brand-600 dark:text-brand-400">{s.value}</dd>
            <dt className="mt-1 text-sm text-slate-600 dark:text-slate-400">{s.label}</dt>
          </div>
        ))}
      </dl>
    </div>

    {/* Story */}
    <Section>
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Our story"
            title="Started by engineers who were tired of hand-offs"
          />
          <div className="mt-6 space-y-5 text-base leading-relaxed text-slate-600 dark:text-slate-400">
            <p>
              Before Intrepid, our founders worked on projects where the design agency, the development shop and the
              hosting provider were three different companies. When something broke, everyone pointed at someone else.
            </p>
            <p>
              We started Intrepid Technology to be the one team that owns the outcome. Today we design and build
              websites, WordPress and Shopify stores, mobile apps and custom software, and we host and maintain them on
              AWS, DigitalOcean and Hostinger. We also automate the repetitive back-office work that slows businesses
              down.
            </p>
            <p>
              We are based in Pune, Maharashtra, and work with clients across India and abroad, from single-founder
              startups to established manufacturers and hospital groups.
            </p>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 p-7 dark:border-slate-800">
            <IconTile icon={Target} />
            <h3 className="mt-5 text-lg font-semibold text-slate-900 dark:text-white">Our mission</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              Give growing businesses the same quality of technology that large enterprises take for granted, at a cost
              that makes sense for them.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 p-7 dark:border-slate-800">
            <IconTile icon={Eye} />
            <h3 className="mt-5 text-lg font-semibold text-slate-900 dark:text-white">Our vision</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              To be the most trusted technology partner for small and mid-sized businesses in India, known for honest
              advice and systems that last.
            </p>
          </div>
        </div>
      </div>
    </Section>

    {/* Values */}
    <Section tone="muted">
      <SectionHeading eyebrow="Values" title="How we work" />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {VALUES.map((v) => (
          <div key={v.title} className="rounded-2xl border border-slate-200 bg-white p-7 dark:border-slate-800 dark:bg-slate-900">
            <IconTile icon={v.icon} />
            <h3 className="mt-5 text-base font-semibold text-slate-900 dark:text-white">{v.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{v.description}</p>
          </div>
        ))}
      </div>
    </Section>

    {/* Expertise */}
    <Section>
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <img
          src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Engineer working across multiple monitors"
          loading="lazy"
          className="aspect-[4/3] w-full rounded-2xl object-cover shadow-card"
        />
        <div>
          <SectionHeading
            align="left"
            eyebrow="Expertise"
            title="Platforms and tools we work with every day"
            description="We stay deliberately focused. Fewer platforms, deeper expertise, and recommendations you can rely on."
          />
          <ul className="mt-8 flex flex-wrap gap-2">
            {PLATFORMS.map((p) => (
              <li
                key={p.name}
                className="rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-sm font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
              >
                {p.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>

    <ProcessSteps />
    <Testimonials />
    <CtaBand />
  </>
);

export default About;
