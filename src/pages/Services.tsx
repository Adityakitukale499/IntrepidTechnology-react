import React from 'react';
import Seo from '../components/Seo';
import { PageHero, Button } from '../components/ui';
import { ServicesGrid, ProcessSteps, PlatformStrip, CtaBand, Testimonials } from '../components/home/HomeSections';
import { SERVICES } from '../data/services';
import { SITE } from '../data/site';

const Services: React.FC = () => (
  <>
    <Seo
      title="IT Services | Web, WordPress, Shopify, Cloud Hosting, Mobile Apps & Automation"
      description="Explore Intrepid Technology's services: website and web app development, WordPress and Shopify stores, AWS, DigitalOcean and Hostinger hosting, mobile apps, RPA automation, SEO and IT consulting."
      jsonLd={{
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        itemListElement: SERVICES.map((s, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: s.name,
          url: `${SITE.url}/services/${s.slug}`,
        })),
      }}
    />
    <PageHero
      eyebrow="Services"
      title="Everything you need to build, host and grow online"
      description="Design, development, hosting, automation and support from one accountable team. Pick a single service or let us handle the whole stack."
      breadcrumbs={[{ name: 'Services' }]}
    >
      <Button to="/contact" icon>
        Discuss your project
      </Button>
    </PageHero>
    <ServicesGrid tone="white" />
    <PlatformStrip />
    <ProcessSteps tone="muted" />
    <Testimonials />
    <CtaBand />
  </>
);

export default Services;
