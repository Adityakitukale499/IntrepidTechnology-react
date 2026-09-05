import ecommerce from '../assets/ecommerce.png';
import bussiness from '../assets/bussiness.png';
import social from '../assets/social.png';
import helthcare from '../assets/helthcare.png';
import education from '../assets/education.png';
import fintech from '../assets/fintech.png';
import artikshaDesktop from '../assets/work/artiksha-desktop.jpg';
import artikshaMobile from '../assets/work/artiksha-mobile.jpg';
import charuvedicDesktop from '../assets/work/charuvedic-desktop.jpg';
import charuvedicMobile from '../assets/work/charuvedic-mobile.jpg';

export interface Project {
  slug: string;
  title: string;
  client: string;
  category: string;
  service: string;
  summary: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  image: string;
  /** Optional second screenshot (usually mobile) for the detail page. */
  mobileImage?: string;
  /** Live site, when the client allows us to link to it. */
  url?: string;
  /** Custom software delivered under NDA: no screenshots, anonymised client. */
  confidential?: boolean;
}

export const PROJECTS: Project[] = [
  {
    slug: 'artiksha-collections-shopify-store',
    title: 'Shopify store for Artiksha Collections',
    client: 'Artiksha Collections, Pune',
    category: 'E-commerce',
    service: 'Shopify Development',
    url: 'https://artiksha.com/',
    summary: 'A premium home décor storefront on Shopify: LED wall art, crystal paintings, designer clocks and figurines, with pan-India shipping and cash on delivery.',
    challenge:
      'Artiksha sells luxury wall décor and clocks from a physical store in Pune and wanted an online store that felt as premium as the products, worked well on mobile, and could be run day to day by a small team without developer help.',
    solution:
      'We set up the Shopify store with a customised theme built around large lifestyle imagery, structured the catalogue into wall décor, clocks, showpieces and combo collections, and configured Indian payment gateways, cash on delivery, shipping rules and a clearance sale flow. Trust elements such as replacement guarantees, reviews and delivery promises are built into the home and product pages.',
    results: ['Mobile-first storefront with a fast, image-heavy home page', 'Catalogue and promotions managed in-house by the client', 'Pan-India shipping with prepaid and COD checkout'],
    technologies: ['Shopify', 'Liquid', 'Shopify Payments', 'Cash on delivery', 'Google Analytics'],
    image: artikshaDesktop,
    mobileImage: artikshaMobile,
  },
  {
    slug: 'charuvedic-woocommerce-store',
    title: 'WooCommerce store for Charuvedic',
    client: 'Charuvedic, India',
    category: 'E-commerce',
    service: 'WordPress Development',
    url: 'https://charuvedic.com/',
    summary: 'A WordPress and WooCommerce store for an Ayurvedic herbal powder brand, with product education, reviews and free all-India delivery.',
    challenge:
      'Charuvedic needed a store for a focused range of Ayurvedic powders that could explain the benefits of each product, build trust with certifications and lab testing, and still be affordable to host and maintain.',
    solution:
      'We built the store on WordPress with WooCommerce, designed around the natural green palette and product photography of the brand, with a hero slider per product, benefit-led product pages, reviews, wishlist and compare features, tiered discount banners, and a blog for Ayurvedic education. The site is hosted on managed WordPress hosting with caching and daily backups.',
    results: ['Product pages that explain benefits, dosage and certifications', 'Free-delivery and COD checkout for all-India orders', 'Blog and reviews drive organic search traffic'],
    technologies: ['WordPress', 'WooCommerce', 'PHP', 'Hostinger', 'LiteSpeed Cache', 'Razorpay'],
    image: charuvedicDesktop,
    mobileImage: charuvedicMobile,
  },
  {
    slug: 'manufacturing-erp-aws',
    title: 'Custom ERP on AWS for a manufacturing company',
    client: 'Auto components manufacturer (confidential)',
    confidential: true,
    category: 'Custom Software',
    service: 'Software Development',
    summary: 'A production planning and inventory system replacing spreadsheets, deployed on AWS with daily backups.',
    challenge:
      'Production schedules, stock levels and purchase orders lived in disconnected spreadsheets. Reports took days to compile and stock-outs were common.',
    solution:
      'We built a web-based ERP covering bill of materials, production planning, purchase and inventory, integrated with Tally for accounting. It runs on AWS with RDS PostgreSQL, automated backups and role-based access for 60 users.',
    results: ['Real-time stock visibility across three plants', 'Monthly reporting reduced from three days to minutes', 'Stock-outs reduced by 40%'],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS EC2', 'AWS RDS', 'Tally integration'],
    image: bussiness,
  },
  {
    slug: 'hospital-patient-app',
    title: 'Patient appointment app for a hospital group',
    client: 'Multi-speciality hospital group (confidential)',
    confidential: true,
    category: 'Mobile App',
    service: 'Mobile App Development',
    summary: 'Flutter app for booking appointments, viewing reports and paying bills, with an admin portal for staff.',
    challenge:
      'Appointment booking was phone-only and reports were collected in person. Front-desk load was high and patients had no visibility into wait times.',
    solution:
      'A Flutter app for iOS and Android lets patients book, reschedule, pay via Razorpay and download reports. A React admin portal gives staff queue management and doctor schedules. Hosted on DigitalOcean with a managed database.',
    results: ['Over 20,000 app bookings in the first six months', 'Front-desk call volume down 55%', '4.7-star average store rating'],
    technologies: ['Flutter', 'Node.js', 'PostgreSQL', 'DigitalOcean', 'Razorpay', 'Firebase'],
    image: helthcare,
  },
  {
    slug: 'coaching-institute-lms',
    title: 'Learning platform for a coaching institute',
    client: 'Coaching institute, Pune (confidential)',
    confidential: true,
    category: 'Education',
    service: 'Web Development',
    summary: 'Video courses, live classes, tests and payments on a WordPress and LearnDash platform hosted on Hostinger.',
    challenge:
      'The institute wanted to sell recorded and live courses online with a small budget and a non-technical team managing content.',
    solution:
      'We set up WordPress with LearnDash, integrated Zoom for live classes and Razorpay for payments, and built a custom theme. Hostinger managed hosting with LiteSpeed caching keeps costs low and speed high.',
    results: ['Launched in five weeks', 'Over 3,000 enrolled students', 'Content team publishes courses without developer help'],
    technologies: ['WordPress', 'LearnDash', 'Zoom API', 'Razorpay', 'Hostinger'],
    image: education,
  },
  {
    slug: 'nbfc-loan-dashboard',
    title: 'Loan operations dashboard for an NBFC',
    client: 'Non-banking finance company (confidential)',
    confidential: true,
    category: 'Fintech',
    service: 'Software Development',
    summary: 'A secure web application for loan origination, KYC tracking and collections reporting.',
    challenge:
      'Loan files moved through email and paper. Managers lacked a real-time view of the pipeline and compliance checks were inconsistent.',
    solution:
      'A role-based web application handles applications, document collection, KYC status and disbursement approvals, with automated reminders and a reporting layer. Deployed on AWS with encryption at rest and audit logging.',
    results: ['Loan turnaround time reduced by 30%', 'Complete audit trail for every file', 'Daily collections reporting automated'],
    technologies: ['React', 'Python / Django', 'PostgreSQL', 'AWS', 'Docker'],
    image: fintech,
  },
  {
    slug: 'agency-social-reporting-rpa',
    title: 'Automated reporting for a marketing agency',
    client: 'Digital marketing agency (confidential)',
    confidential: true,
    category: 'Automation',
    service: 'RPA Automation',
    summary: 'Power Automate and Python bots that collect campaign data and build client reports every morning.',
    challenge:
      'Account managers spent the first two hours of each day exporting data from ad platforms and social channels into spreadsheets for client reports.',
    solution:
      'We built bots that pull data from Meta, Google Ads and LinkedIn via their APIs, consolidate it in Google Sheets and generate branded PDF reports that are emailed to clients automatically.',
    results: ['Around 40 hours saved per week across the team', 'Reports delivered before 8 AM daily', 'Zero manual data entry errors'],
    technologies: ['Power Automate', 'Python', 'Google Sheets API', 'Meta and Google Ads APIs'],
    image: social,
  },
];

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Intrepid moved our store from WooCommerce to Shopify over a weekend without a single lost order. Sales during our festive campaign were the highest we have ever had.',
    name: 'Priya Deshmukh',
    role: 'Founder',
    company: 'Home décor brand, Pune',
  },
  {
    quote:
      'They took the time to understand how our plant actually runs before writing any code. The ERP they built replaced six spreadsheets and our monthly close is now a same-day task.',
    name: 'Rahul Kulkarni',
    role: 'Operations Head',
    company: 'Auto components manufacturer',
  },
  {
    quote:
      'Our AWS bill dropped by a third after their review, and the migration was invisible to our customers. Clear communication throughout.',
    name: 'Sneha Patil',
    role: 'CTO',
    company: 'SaaS startup',
  },
  {
    quote:
      'The reporting bots they built give every account manager two hours back each morning. It paid for itself in the first month.',
    name: 'Arjun Mehta',
    role: 'Director',
    company: 'Digital marketing agency',
  },
];

export const INDUSTRIES = [
  { name: 'E-commerce & Retail', description: 'Shopify, WooCommerce and custom storefronts with integrated logistics.', image: ecommerce },
  { name: 'Manufacturing', description: 'ERP, inventory and production planning systems built around your plant.', image: bussiness },
  { name: 'Healthcare', description: 'Patient apps, appointment systems and secure records management.', image: helthcare },
  { name: 'Education', description: 'Learning platforms, live classes and student management.', image: education },
  { name: 'Finance & Fintech', description: 'Secure loan, collections and reporting applications.', image: fintech },
  { name: 'Agencies & Media', description: 'Client portals, reporting automation and high-performance websites.', image: social },
];

export const PROCESS = [
  {
    step: '01',
    title: 'Discovery',
    description: 'We learn your business, users and constraints, then agree on scope, timeline and success metrics.',
  },
  {
    step: '02',
    title: 'Design',
    description: 'Wireframes, prototypes and architecture reviewed with you before development starts.',
  },
  {
    step: '03',
    title: 'Build',
    description: 'Iterative delivery in short sprints with a staging environment you can review at any time.',
  },
  {
    step: '04',
    title: 'Launch',
    description: 'Performance, security and SEO checks, then a smooth go-live with training for your team.',
  },
  {
    step: '05',
    title: 'Support',
    description: 'Monitoring, maintenance and a roadmap for what comes next.',
  },
];

export const WHY_US = [
  {
    title: 'Engineers who also run infrastructure',
    description:
      'We build the application and manage the AWS, DigitalOcean or Hostinger environment it runs on. One team, no finger-pointing.',
  },
  {
    title: 'Platform-agnostic recommendations',
    description:
      'WordPress or custom? Shopify or WooCommerce? We recommend what fits your budget and team, not what earns us the most.',
  },
  {
    title: 'Transparent pricing and timelines',
    description:
      'Fixed quotes for defined scopes, clear sprint plans for evolving products, and no surprise invoices.',
  },
  {
    title: 'Built for search from day one',
    description:
      'Every site we ship has clean structure, fast load times, schema markup and analytics configured.',
  },
  {
    title: 'You own everything',
    description:
      'Code, accounts, domains and hosting stay in your name. You are never locked in to us.',
  },
  {
    title: 'Long-term partnership',
    description:
      'Most of our clients stay with us on maintenance and growth plans long after launch.',
  },
];
