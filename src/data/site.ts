export const SITE = {
  name: 'Intrepid Technology',
  legalName: 'Intrepid Technology',
  tagline: 'Web, cloud and automation partner for growing businesses',
  url: 'https://intrepidtechnology.in',
  email: 'conect@intrepidtechnology.in',
  phone: '+91 78419 11347',
  phoneHref: 'tel:+917841911347',
  address: {
    line1: 'Pune, Maharashtra',
    line2: 'India',
    city: 'Pune',
    region: 'Maharashtra',
    country: 'India',
  },
  hours: 'Monday to Saturday, 9:00 AM to 7:00 PM IST',
  responseTime: 'We reply to every enquiry within one business day.',
  founded: 2022,
  social: {
    linkedin: 'https://www.linkedin.com/company/intrepid-technology',
    twitter: 'https://twitter.com/intrepidtech',
    facebook: 'https://www.facebook.com/intrepidtechnology',
    github: 'https://github.com/intrepid-technology',
  },
  internshipFormUrl:
    'https://docs.google.com/forms/d/e/1FAIpQLSd_Fy8ms7b7AvsgrlymG-8LbKYdjMH1Nk4E4yss8Z4C6dchBg/viewform',
  contactEndpoint:
    'https://script.google.com/macros/s/AKfycbzP7ARODcBL894vGh_prBkAtboC2WRrcWzwlafYckVIdv6SkTKHy0Zc4TJi6uLrBYyW/exec',
} as const;

export const STATS = [
  { value: '50+', label: 'Projects delivered' },
  { value: '40+', label: 'Clients served' },
  { value: '3+', label: 'Years in business' },
  { value: '24h', label: 'Enquiry response time' },
] as const;

/** Platforms and tools we build on. Shown as a logo strip across the site. */
export const PLATFORMS = [
  { name: 'AWS', category: 'Cloud' },
  { name: 'DigitalOcean', category: 'Cloud' },
  { name: 'Hostinger', category: 'Hosting' },
  { name: 'Microsoft Azure', category: 'Cloud' },
  { name: 'Google Cloud', category: 'Cloud' },
  { name: 'WordPress', category: 'CMS' },
  { name: 'Shopify', category: 'E-commerce' },
  { name: 'WooCommerce', category: 'E-commerce' },
  { name: 'React', category: 'Frontend' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Python', category: 'Backend' },
  { name: 'Flutter', category: 'Mobile' },
  { name: 'React Native', category: 'Mobile' },
  { name: 'UiPath', category: 'Automation' },
  { name: 'Power Automate', category: 'Automation' },
  { name: 'Docker', category: 'DevOps' },
  { name: 'PostgreSQL', category: 'Database' },
] as const;
