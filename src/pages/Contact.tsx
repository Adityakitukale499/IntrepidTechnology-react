import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import Seo from '../components/Seo';
import { PageHero, Section } from '../components/ui';
import ContactForm from '../components/ContactForm';
import { SITE } from '../data/site';

const FAQ = [
  { q: 'How quickly will you respond?', a: 'Within one business day, usually the same day during working hours.' },
  { q: 'Do you work with clients outside Pune?', a: 'Yes. Most of our work is remote and we have clients across India and abroad.' },
  { q: 'Is the first consultation free?', a: 'Yes. The first call is a no-obligation discussion of your goals, followed by a written estimate.' },
  { q: 'What information should I include?', a: 'Your goals, any existing website or systems, rough timeline and budget range if you have one.' },
];

const Contact: React.FC = () => (
  <>
    <Seo
      title="Contact Intrepid Technology | Get a Free Consultation"
      description="Contact Intrepid Technology in Pune for website development, WordPress, Shopify, cloud hosting, mobile apps or automation. Free consultation, reply within one business day."
      jsonLd={{
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: 'Contact Intrepid Technology',
        url: `${SITE.url}/contact`,
      }}
    />
    <PageHero
      eyebrow="Contact"
      title="Tell us about your project"
      description="Share a few details and we will come back with questions, options and a clear estimate. No pressure, no sales scripts."
      breadcrumbs={[{ name: 'Contact' }]}
    />

    <Section>
      <div className="grid gap-12 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-card dark:border-slate-800 dark:bg-slate-900">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Send us a message</h2>
            <p className="mb-6 mt-1 text-sm text-slate-600 dark:text-slate-400">{SITE.responseTime}</p>
            <ContactForm />
          </div>
        </div>

        <div className="space-y-6 lg:col-span-2">
          <div className="rounded-2xl border border-slate-200 p-7 dark:border-slate-800">
            <h2 className="text-base font-semibold text-slate-900 dark:text-white">Contact details</h2>
            <ul className="mt-5 space-y-5 text-sm">
              <li className="flex items-start gap-4">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600 dark:bg-brand-950/60 dark:text-brand-300">
                  <Mail className="h-5 w-5" />
                </span>
                <span>
                  <span className="block font-medium text-slate-900 dark:text-white">Email</span>
                  <a href={`mailto:${SITE.email}`} className="text-slate-600 hover:text-brand-600 dark:text-slate-400">
                    {SITE.email}
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600 dark:bg-brand-950/60 dark:text-brand-300">
                  <Phone className="h-5 w-5" />
                </span>
                <span>
                  <span className="block font-medium text-slate-900 dark:text-white">Phone</span>
                  <a href={SITE.phoneHref} className="text-slate-600 hover:text-brand-600 dark:text-slate-400">
                    {SITE.phone}
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600 dark:bg-brand-950/60 dark:text-brand-300">
                  <MapPin className="h-5 w-5" />
                </span>
                <span>
                  <span className="block font-medium text-slate-900 dark:text-white">Office</span>
                  <span className="text-slate-600 dark:text-slate-400">
                    {SITE.address.line1}, {SITE.address.line2}
                  </span>
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600 dark:bg-brand-950/60 dark:text-brand-300">
                  <Clock className="h-5 w-5" />
                </span>
                <span>
                  <span className="block font-medium text-slate-900 dark:text-white">Hours</span>
                  <span className="text-slate-600 dark:text-slate-400">{SITE.hours}</span>
                </span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 p-7 dark:border-slate-800">
            <h2 className="text-base font-semibold text-slate-900 dark:text-white">Before you write</h2>
            <dl className="mt-4 space-y-4">
              {FAQ.map((f) => (
                <div key={f.q}>
                  <dt className="text-sm font-semibold text-slate-800 dark:text-slate-200">{f.q}</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{f.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </Section>

    <div className="border-t border-slate-200 dark:border-slate-800">
      <iframe
        title="Intrepid Technology location, Pune"
        src="https://www.google.com/maps?q=Pune,+Maharashtra,+India&output=embed"
        className="h-80 w-full grayscale"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  </>
);

export default Contact;
