import React from 'react';
import Seo from '../components/Seo';
import Hero from '../components/Hero';
import {
  PlatformStrip,
  ServicesGrid,
  WhyUs,
  ProcessSteps,
  Industries,
  CaseStudies,
  Testimonials,
  BlogPreview,
  CtaBand,
} from '../components/home/HomeSections';
import { SITE } from '../data/site';

const Home: React.FC = () => (
  <>
    <Seo
      title="Intrepid Technology | Web, Cloud, WordPress & Shopify Development Company in Pune"
      description="Intrepid Technology is a Pune-based IT services company delivering web and mobile development, WordPress and Shopify stores, AWS, DigitalOcean and Hostinger cloud hosting, RPA automation and IT consulting."
      path="/"
      jsonLd={{
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        name: SITE.name,
        url: SITE.url,
        email: SITE.email,
        telephone: SITE.phone,
        address: {
          '@type': 'PostalAddress',
          addressLocality: SITE.address.city,
          addressRegion: SITE.address.region,
          addressCountry: 'IN',
        },
        areaServed: 'IN',
        priceRange: '$$',
        description: SITE.tagline,
      }}
    />
    <Hero />
    <PlatformStrip />
    <ServicesGrid limit={6} />
    <WhyUs />
    <ProcessSteps />
    <Industries />
    <CaseStudies />
    <Testimonials />
    <BlogPreview />
    <CtaBand />
  </>
);

export default Home;
