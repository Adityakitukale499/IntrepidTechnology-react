import type { LucideIcon } from 'lucide-react';
import {
  Globe,
  Layout,
  ShoppingBag,
  ShoppingCart,
  Smartphone,
  Code2,
  Cloud,
  Bot,
  Megaphone,
  Lightbulb,
  PenTool,
  Wrench,
} from 'lucide-react';

export interface ServiceOffering {
  title: string;
  description: string;
  points: string[];
}

export interface Service {
  slug: string;
  name: string;
  /** Short name used in navigation and cards. */
  shortName: string;
  icon: LucideIcon;
  /** One-line summary for cards. */
  summary: string;
  /** Meta description for SEO (under 160 chars). */
  metaDescription: string;
  /** Hero paragraph on the detail page. */
  intro: string;
  image: string;
  imageAlt: string;
  highlights: { title: string; description: string }[];
  offerings: ServiceOffering[];
  technologies: { name: string; category: string }[];
  process: { step: string; title: string; description: string }[];
  faqs: { q: string; a: string }[];
  featured?: boolean;
}

export const SERVICES: Service[] = [
  {
    slug: 'web-development',
    name: 'Website & Web Application Development',
    shortName: 'Web Development',
    icon: Globe,
    featured: true,
    summary:
      'Fast, secure, search-friendly websites and web applications built on React, Next.js and Node.js.',
    metaDescription:
      'Custom website and web application development in Pune. React, Next.js and Node.js builds that are fast, secure and optimised for search engines.',
    intro:
      'We design and build websites and web applications that load quickly, rank well and are easy for your team to maintain. From a corporate site to a multi-tenant SaaS platform, every build ships with performance budgets, accessibility checks and SEO fundamentals in place.',
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1200',
    imageAlt: 'Developer reviewing a web application on a laptop',
    highlights: [
      { title: 'Performance first', description: 'Core Web Vitals targets agreed up front and verified before launch.' },
      { title: 'Modern stack', description: 'React, Next.js, TypeScript and Node.js with a clean, documented codebase.' },
      { title: 'Built to scale', description: 'Component libraries and APIs designed so the next feature is cheap to add.' },
      { title: 'Secure by default', description: 'OWASP-aligned practices, dependency scanning and hardened hosting.' },
    ],
    offerings: [
      {
        title: 'Corporate & marketing websites',
        description: 'Professional websites that present your business clearly and convert visitors into enquiries.',
        points: ['Custom design system', 'CMS for your content team', 'On-page SEO and analytics', 'Lead forms and CRM integration'],
      },
      {
        title: 'Custom web applications',
        description: 'Portals, dashboards and SaaS products tailored to your workflows.',
        points: ['Role-based access control', 'REST and GraphQL APIs', 'Third-party integrations', 'Automated testing'],
      },
      {
        title: 'Landing pages & campaigns',
        description: 'High-converting pages for product launches, ads and seasonal campaigns.',
        points: ['A/B-test ready', 'Fast static delivery', 'Conversion tracking', 'Rapid turnaround'],
      },
      {
        title: 'Website redesign & migration',
        description: 'Move from a legacy site or platform without losing rankings or content.',
        points: ['Content and URL mapping', '301 redirect strategy', 'Design refresh', 'Post-launch monitoring'],
      },
    ],
    technologies: [
      { name: 'React', category: 'Frontend' },
      { name: 'Next.js', category: 'Frontend' },
      { name: 'TypeScript', category: 'Language' },
      { name: 'Tailwind CSS', category: 'Styling' },
      { name: 'Node.js', category: 'Backend' },
      { name: 'Python / Django', category: 'Backend' },
      { name: 'PostgreSQL', category: 'Database' },
      { name: 'MongoDB', category: 'Database' },
      { name: 'AWS', category: 'Hosting' },
      { name: 'DigitalOcean', category: 'Hosting' },
      { name: 'Vercel', category: 'Hosting' },
      { name: 'Cloudflare', category: 'CDN' },
    ],
    process: [
      { step: '01', title: 'Discovery', description: 'Goals, audiences, content inventory and technical constraints.' },
      { step: '02', title: 'Design', description: 'Wireframes and high-fidelity screens reviewed with your team.' },
      { step: '03', title: 'Build', description: 'Iterative development with a staging site you can review at any time.' },
      { step: '04', title: 'Launch & support', description: 'Performance checks, SEO verification, training and ongoing care.' },
    ],
    faqs: [
      { q: 'How long does a website take?', a: 'A marketing website typically takes four to eight weeks. Web applications are scoped individually and delivered in two-week sprints.' },
      { q: 'Will I be able to edit content myself?', a: 'Yes. We integrate a CMS such as WordPress, Sanity or Strapi so your team can update pages without a developer.' },
      { q: 'Do you provide hosting?', a: 'We set up and manage hosting on AWS, DigitalOcean or Hostinger depending on your traffic, budget and compliance needs.' },
    ],
  },
  {
    slug: 'wordpress-development',
    name: 'WordPress Development',
    shortName: 'WordPress',
    icon: Layout,
    featured: true,
    summary:
      'Custom WordPress themes, plugins and WooCommerce stores that are fast, secure and simple to manage.',
    metaDescription:
      'WordPress development company in Pune. Custom themes, plugin development, WooCommerce stores, speed optimisation, security hardening and maintenance.',
    intro:
      'WordPress powers over 40% of the web for good reason: your team can manage content without touching code. We build WordPress sites the right way, with custom themes, lean plugins, hardened security and hosting tuned for speed, so you get the flexibility without the bloat.',
    image: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=1200',
    imageAlt: 'Laptop showing a content management dashboard',
    highlights: [
      { title: 'Custom themes', description: 'Hand-built themes from your design, not page-builder templates.' },
      { title: 'Speed optimised', description: 'Caching, image optimisation and clean code for 90+ PageSpeed scores.' },
      { title: 'Hardened security', description: 'Firewall, login protection, backups and update management.' },
      { title: 'Easy editing', description: 'Gutenberg blocks or ACF fields shaped around your content.' },
    ],
    offerings: [
      {
        title: 'Custom theme development',
        description: 'Pixel-accurate themes built from your brand and design system.',
        points: ['Block-based editing', 'Responsive and accessible', 'Schema and SEO built in', 'No unnecessary plugins'],
      },
      {
        title: 'WooCommerce stores',
        description: 'Full-featured online stores on WordPress with Indian and international payment gateways.',
        points: ['Razorpay, Stripe and PayPal', 'Shipping and tax rules', 'Inventory and order workflows', 'Subscription and booking add-ons'],
      },
      {
        title: 'Plugin development & integrations',
        description: 'Custom functionality and connections to your CRM, ERP or marketing tools.',
        points: ['Custom post types and APIs', 'HubSpot, Zoho and Salesforce', 'Membership and LMS', 'Multilingual setup'],
      },
      {
        title: 'Speed, security & maintenance',
        description: 'Ongoing care so your site stays fast, updated and protected.',
        points: ['Core Web Vitals tuning', 'Malware cleanup and hardening', 'Managed updates and backups', 'Uptime monitoring'],
      },
    ],
    technologies: [
      { name: 'WordPress', category: 'CMS' },
      { name: 'WooCommerce', category: 'E-commerce' },
      { name: 'Elementor', category: 'Builder' },
      { name: 'ACF Pro', category: 'Fields' },
      { name: 'PHP 8', category: 'Language' },
      { name: 'MySQL', category: 'Database' },
      { name: 'Hostinger', category: 'Hosting' },
      { name: 'DigitalOcean', category: 'Hosting' },
      { name: 'LiteSpeed', category: 'Caching' },
      { name: 'Cloudflare', category: 'CDN' },
      { name: 'Yoast / Rank Math', category: 'SEO' },
      { name: 'WPML', category: 'Multilingual' },
    ],
    process: [
      { step: '01', title: 'Plan', description: 'Site map, content model and plugin audit.' },
      { step: '02', title: 'Design', description: 'Page templates and block designs approved before build.' },
      { step: '03', title: 'Develop', description: 'Theme and plugin build on a staging server with your content.' },
      { step: '04', title: 'Launch', description: 'Hosting setup, caching, security and hand-over training.' },
    ],
    faqs: [
      { q: 'Can you fix or speed up my existing WordPress site?', a: 'Yes. We start with an audit covering performance, security, plugins and hosting, then give you a prioritised fix list with costs.' },
      { q: 'Which hosting do you recommend for WordPress?', a: 'Hostinger for most small business sites, DigitalOcean or AWS for high-traffic or custom stacks. We manage all three.' },
      { q: 'Do you offer WordPress maintenance plans?', a: 'Yes. Monthly plans include updates, backups, security monitoring and a block of support hours.' },
    ],
  },
  {
    slug: 'shopify-development',
    name: 'Shopify Development',
    shortName: 'Shopify',
    icon: ShoppingBag,
    featured: true,
    summary:
      'Shopify and Shopify Plus stores with custom themes, app integrations and conversion-focused design.',
    metaDescription:
      'Shopify development agency in Pune. Custom Shopify themes, store setup, app integrations, migrations to Shopify and Shopify Plus builds for growing brands.',
    intro:
      'Shopify lets you sell online without worrying about servers, PCI compliance or checkout uptime. We build Shopify stores that look like your brand, convert well on mobile, and connect to your inventory, shipping and marketing tools, so you can focus on products and customers.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1200',
    imageAlt: 'Online shopping cart on a laptop screen',
    highlights: [
      { title: 'Custom themes', description: 'Liquid and Hydrogen themes designed around your products.' },
      { title: 'Conversion focused', description: 'Fast product pages, clean checkout and trust signals that lift sales.' },
      { title: 'Integrated operations', description: 'Inventory, ERP, shipping and marketplaces connected to one back office.' },
      { title: 'Migrations handled', description: 'Move from WooCommerce, Magento or Wix without losing orders or SEO.' },
    ],
    offerings: [
      {
        title: 'Store setup & custom theme',
        description: 'A complete store launch with a theme built for your catalogue.',
        points: ['Custom Liquid theme', 'Product and collection templates', 'Payments, shipping and taxes', 'Google and Meta channel setup'],
      },
      {
        title: 'Shopify app & integration development',
        description: 'Custom apps and connections when off-the-shelf apps do not fit.',
        points: ['Private and public apps', 'ERP and inventory sync', 'Shiprocket, Delhivery and courier APIs', 'Subscriptions and loyalty'],
      },
      {
        title: 'Migration to Shopify',
        description: 'Move your store and keep your customers, orders and rankings.',
        points: ['Product and customer import', 'URL redirects', 'Design refresh', 'Parallel testing before cut-over'],
      },
      {
        title: 'Conversion optimisation',
        description: 'Ongoing improvements to turn more visitors into buyers.',
        points: ['Speed optimisation', 'Checkout and cart improvements', 'Analytics and heatmaps', 'A/B testing'],
      },
    ],
    technologies: [
      { name: 'Shopify', category: 'Platform' },
      { name: 'Shopify Plus', category: 'Enterprise' },
      { name: 'Liquid', category: 'Theming' },
      { name: 'Hydrogen', category: 'Headless' },
      { name: 'Shopify Payments', category: 'Payments' },
      { name: 'Razorpay', category: 'Payments' },
      { name: 'Klaviyo', category: 'Email' },
      { name: 'Shiprocket', category: 'Logistics' },
      { name: 'Meta & Google Ads', category: 'Marketing' },
      { name: 'Judge.me', category: 'Reviews' },
      { name: 'Recharge', category: 'Subscriptions' },
      { name: 'GA4', category: 'Analytics' },
    ],
    process: [
      { step: '01', title: 'Store audit', description: 'Catalogue, pricing, shipping and integration requirements.' },
      { step: '02', title: 'Design', description: 'Home, collection, product and checkout designs for desktop and mobile.' },
      { step: '03', title: 'Build & integrate', description: 'Theme development, app setup and data import on a development store.' },
      { step: '04', title: 'Launch & grow', description: 'Domain go-live, channel setup and conversion tracking.' },
    ],
    faqs: [
      { q: 'Shopify or WooCommerce, which should I choose?', a: 'Shopify is best if you want hosted reliability and less maintenance. WooCommerce gives more control and lower recurring fees if you already run WordPress. We will recommend based on your catalogue and team.' },
      { q: 'Can you migrate my existing store to Shopify?', a: 'Yes. We migrate products, customers, orders and redirects from WooCommerce, Magento, Wix, BigCommerce and custom platforms.' },
      { q: 'Do you support Indian payment gateways and couriers?', a: 'Yes. Razorpay, PayU, Cashfree, Shiprocket and Delhivery are all part of regular launches.' },
    ],
  },
  {
    slug: 'ecommerce-development',
    name: 'E-commerce Development',
    shortName: 'E-commerce',
    icon: ShoppingCart,
    summary:
      'Custom online stores and marketplaces on WooCommerce, Magento or a headless stack.',
    metaDescription:
      'E-commerce development services in Pune. Custom online stores, B2B portals and multi-vendor marketplaces on WooCommerce, Magento and headless commerce.',
    intro:
      'When a hosted platform is not enough, we build e-commerce systems to fit your business model: B2B pricing, multi-vendor marketplaces, subscription boxes or high-volume catalogues. Every store ships with secure payments, inventory workflows and analytics from day one.',
    image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1200',
    imageAlt: 'Person shopping online with a credit card',
    highlights: [
      { title: 'Any business model', description: 'B2C, B2B, marketplace, subscription and wholesale.' },
      { title: 'Secure payments', description: 'PCI-aware integrations with Razorpay, Stripe, PayPal and more.' },
      { title: 'Operations built in', description: 'Inventory, order management, shipping and returns workflows.' },
      { title: 'Analytics ready', description: 'GA4 e-commerce events, dashboards and funnel reporting.' },
    ],
    offerings: [
      {
        title: 'Custom online stores',
        description: 'Stores designed around your catalogue, pricing and fulfilment.',
        points: ['Headless or monolithic', 'Mobile-first checkout', 'Search and filtering', 'SEO-friendly architecture'],
      },
      {
        title: 'Multi-vendor marketplaces',
        description: 'Platforms where many sellers list, sell and get paid.',
        points: ['Vendor onboarding', 'Commission and payouts', 'Reviews and disputes', 'Admin dashboards'],
      },
      {
        title: 'B2B commerce portals',
        description: 'Wholesale ordering with account-specific pricing and approvals.',
        points: ['Tiered pricing', 'Quote requests', 'Credit terms', 'ERP integration'],
      },
      {
        title: 'Platform migration',
        description: 'Move between platforms with zero data loss and no downtime.',
        points: ['Data mapping', 'SEO preservation', 'Parallel run', 'Staff training'],
      },
    ],
    technologies: [
      { name: 'WooCommerce', category: 'Platform' },
      { name: 'Magento / Adobe Commerce', category: 'Platform' },
      { name: 'Shopify', category: 'Platform' },
      { name: 'Medusa', category: 'Headless' },
      { name: 'Next.js', category: 'Frontend' },
      { name: 'Node.js', category: 'Backend' },
      { name: 'Razorpay', category: 'Payments' },
      { name: 'Stripe', category: 'Payments' },
      { name: 'PayPal', category: 'Payments' },
      { name: 'Algolia', category: 'Search' },
      { name: 'AWS', category: 'Hosting' },
      { name: 'DigitalOcean', category: 'Hosting' },
    ],
    process: [
      { step: '01', title: 'Discovery', description: 'Business model, catalogue structure and integrations.' },
      { step: '02', title: 'Architecture & design', description: 'Platform selection, data model and storefront design.' },
      { step: '03', title: 'Build', description: 'Storefront, back office, payments and logistics in sprints.' },
      { step: '04', title: 'Launch & optimise', description: 'Load testing, go-live and conversion tracking.' },
    ],
    faqs: [
      { q: 'Which platform is right for me?', a: 'It depends on catalogue size, team, budget and integrations. We compare Shopify, WooCommerce, Magento and headless options in our discovery phase and recommend one with clear reasons.' },
      { q: 'Can you integrate with my accounting or ERP system?', a: 'Yes. We regularly connect stores to Tally, Zoho Books, SAP and custom ERPs for orders, stock and invoices.' },
    ],
  },
  {
    slug: 'mobile-app-development',
    name: 'Mobile App Development',
    shortName: 'Mobile Apps',
    icon: Smartphone,
    featured: true,
    summary:
      'iOS and Android apps built with Flutter, React Native or native code, shipped to the stores.',
    metaDescription:
      'Mobile app development company in Pune. iOS and Android apps with Flutter, React Native, Swift and Kotlin, from design to App Store and Play Store release.',
    intro:
      'We build mobile applications that people keep on their phones: fast, intuitive and reliable offline. Whether you need a customer app, a field-force tool or a companion to your web platform, we cover design, development, backend APIs and store submission.',
    image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=1200',
    imageAlt: 'Person using a mobile application on a smartphone',
    highlights: [
      { title: 'Cross-platform', description: 'One codebase for iOS and Android with Flutter or React Native.' },
      { title: 'Native when needed', description: 'Swift and Kotlin for performance-critical or hardware-heavy apps.' },
      { title: 'Backend included', description: 'APIs, push notifications, auth and analytics built alongside the app.' },
      { title: 'Store ready', description: 'We handle App Store and Play Store listing, review and release.' },
    ],
    offerings: [
      {
        title: 'Consumer apps',
        description: 'Retail, food, fitness, education and community apps with polished UX.',
        points: ['Onboarding and auth', 'Payments and wallets', 'Push and in-app messaging', 'Ratings and analytics'],
      },
      {
        title: 'Business & field apps',
        description: 'Tools for sales teams, technicians and operations staff.',
        points: ['Offline-first data sync', 'Forms, photos and signatures', 'GPS and maps', 'Role-based access'],
      },
      {
        title: 'E-commerce apps',
        description: 'Mobile storefronts connected to Shopify, WooCommerce or your custom platform.',
        points: ['Catalogue and search', 'Cart and checkout', 'Order tracking', 'Deep links and promotions'],
      },
      {
        title: 'App modernisation',
        description: 'Rebuild or refactor ageing apps for today\'s OS versions and devices.',
        points: ['Code audit', 'Incremental migration', 'Performance tuning', 'Crash and ANR fixes'],
      },
    ],
    technologies: [
      { name: 'Flutter', category: 'Cross-platform' },
      { name: 'React Native', category: 'Cross-platform' },
      { name: 'Swift', category: 'iOS' },
      { name: 'Kotlin', category: 'Android' },
      { name: 'Firebase', category: 'Backend' },
      { name: 'Node.js', category: 'Backend' },
      { name: 'GraphQL', category: 'API' },
      { name: 'PostgreSQL', category: 'Database' },
      { name: 'AWS Amplify', category: 'Cloud' },
      { name: 'OneSignal', category: 'Push' },
      { name: 'Razorpay', category: 'Payments' },
      { name: 'Codemagic', category: 'CI/CD' },
    ],
    process: [
      { step: '01', title: 'Product definition', description: 'User journeys, feature list and platform choice.' },
      { step: '02', title: 'UX & UI design', description: 'Clickable prototype tested with real users before code.' },
      { step: '03', title: 'Development', description: 'App and backend built in sprints with TestFlight and internal test builds.' },
      { step: '04', title: 'Release & iterate', description: 'Store submission, crash monitoring and feature roadmap.' },
    ],
    faqs: [
      { q: 'Flutter or React Native?', a: 'Both deliver near-native performance. We recommend Flutter for design-heavy apps and React Native when your team already works in React. Native code is used where hardware access or performance demands it.' },
      { q: 'How much does an app cost?', a: 'Simple apps start from a few lakh rupees; complex products are scoped after discovery. We give a fixed quote for a defined MVP scope.' },
    ],
  },
  {
    slug: 'software-development',
    name: 'Custom Software Development',
    shortName: 'Custom Software',
    icon: Code2,
    summary:
      'Business systems, APIs and SaaS products engineered for reliability and long-term maintainability.',
    metaDescription:
      'Custom software development in Pune. Business applications, APIs, SaaS platforms and system integrations built with modern engineering practices.',
    intro:
      'Off-the-shelf tools stop fitting as your business grows. We build custom software around the way you actually work: ERPs, CRMs, booking systems, internal tools and SaaS products, with clean architecture, automated tests and documentation so the system stays maintainable for years.',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200',
    imageAlt: 'Software engineer working across multiple screens of code',
    highlights: [
      { title: 'Clean architecture', description: 'Modular services and clear boundaries that survive change.' },
      { title: 'API-first', description: 'Well-documented REST and GraphQL APIs your other systems can use.' },
      { title: 'Tested & observable', description: 'Automated tests, CI pipelines, logging and monitoring.' },
      { title: 'Your IP', description: 'You own the code, the repository and the infrastructure.' },
    ],
    offerings: [
      {
        title: 'Business management systems',
        description: 'CRM, ERP, HRMS and inventory systems designed around your processes.',
        points: ['Workflow automation', 'Reporting dashboards', 'Approval flows', 'Audit trails'],
      },
      {
        title: 'SaaS product development',
        description: 'Multi-tenant platforms from MVP to scale.',
        points: ['Subscription billing', 'Tenant isolation', 'Usage analytics', 'Admin consoles'],
      },
      {
        title: 'API development & integration',
        description: 'Connect systems that were never designed to talk to each other.',
        points: ['REST and GraphQL', 'Webhooks and queues', 'Legacy system adapters', 'API documentation'],
      },
      {
        title: 'Legacy modernisation',
        description: 'Move ageing applications to modern, supported stacks step by step.',
        points: ['Code and data audit', 'Strangler-fig migration', 'Database upgrades', 'Cloud re-platforming'],
      },
    ],
    technologies: [
      { name: 'Node.js', category: 'Backend' },
      { name: 'Python', category: 'Backend' },
      { name: '.NET', category: 'Backend' },
      { name: 'Java / Spring', category: 'Backend' },
      { name: 'React', category: 'Frontend' },
      { name: 'TypeScript', category: 'Language' },
      { name: 'PostgreSQL', category: 'Database' },
      { name: 'Redis', category: 'Cache' },
      { name: 'Docker', category: 'Containers' },
      { name: 'GitHub Actions', category: 'CI/CD' },
      { name: 'AWS', category: 'Cloud' },
      { name: 'DigitalOcean', category: 'Cloud' },
    ],
    process: [
      { step: '01', title: 'Requirements', description: 'Process mapping, user stories and acceptance criteria.' },
      { step: '02', title: 'Architecture', description: 'Data model, service design and technology selection.' },
      { step: '03', title: 'Agile delivery', description: 'Two-week sprints with demos and a live staging environment.' },
      { step: '04', title: 'Operate', description: 'Deployment, monitoring, documentation and support.' },
    ],
    faqs: [
      { q: 'Do you work with fixed-price or time and materials?', a: 'Both. Well-defined scopes get a fixed price; evolving products run on monthly retainers with a dedicated team.' },
      { q: 'Who owns the source code?', a: 'You do. All code lives in your repository and infrastructure is provisioned in accounts you control.' },
    ],
  },
  {
    slug: 'cloud-hosting',
    name: 'Cloud & Hosting Services',
    shortName: 'Cloud & Hosting',
    icon: Cloud,
    featured: true,
    summary:
      'Managed hosting, migration and DevOps on AWS, DigitalOcean, Hostinger, Azure and Google Cloud.',
    metaDescription:
      'Cloud and hosting services in Pune. AWS, DigitalOcean and Hostinger setup, cloud migration, managed servers, DevOps, CI/CD, backups and 24x7 monitoring.',
    intro:
      'The right infrastructure depends on your workload: a WordPress site does not need the same setup as a SaaS product. We design, migrate and manage hosting on AWS, DigitalOcean, Hostinger, Azure and Google Cloud, with security, backups and monitoring handled for you.',
    image: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1200',
    imageAlt: 'Server hardware in a data centre',
    highlights: [
      { title: 'Right-sized platform', description: 'Hostinger for small sites, DigitalOcean for apps, AWS for scale.' },
      { title: 'Zero-downtime migration', description: 'Move servers, domains and databases with a tested cut-over plan.' },
      { title: 'Cost control', description: 'Reserved instances, autoscaling and monthly cost reviews.' },
      { title: 'Always monitored', description: 'Uptime checks, alerts, patching and off-site backups.' },
    ],
    offerings: [
      {
        title: 'AWS architecture & management',
        description: 'Production-grade AWS environments for applications and data.',
        points: ['EC2, ECS and Lambda', 'RDS and S3', 'VPC and IAM security', 'CloudWatch monitoring and cost optimisation'],
      },
      {
        title: 'DigitalOcean & VPS hosting',
        description: 'Simple, predictable cloud servers for web apps and APIs.',
        points: ['Droplets and App Platform', 'Managed databases', 'Load balancers and Spaces', 'Firewall and backups'],
      },
      {
        title: 'Hostinger & managed WordPress hosting',
        description: 'Affordable, fast hosting for business websites and WooCommerce stores.',
        points: ['LiteSpeed caching', 'Free SSL and CDN', 'Email setup', 'Daily backups and staging'],
      },
      {
        title: 'DevOps, CI/CD & migration',
        description: 'Automate deployments and move workloads between providers safely.',
        points: ['Docker and Kubernetes', 'GitHub Actions pipelines', 'Terraform infrastructure as code', 'Cloud-to-cloud migration'],
      },
    ],
    technologies: [
      { name: 'AWS', category: 'Cloud' },
      { name: 'DigitalOcean', category: 'Cloud' },
      { name: 'Hostinger', category: 'Hosting' },
      { name: 'Microsoft Azure', category: 'Cloud' },
      { name: 'Google Cloud', category: 'Cloud' },
      { name: 'Cloudflare', category: 'CDN / DNS' },
      { name: 'Docker', category: 'Containers' },
      { name: 'Kubernetes', category: 'Orchestration' },
      { name: 'Terraform', category: 'IaC' },
      { name: 'GitHub Actions', category: 'CI/CD' },
      { name: 'Nginx', category: 'Web server' },
      { name: 'Grafana', category: 'Monitoring' },
    ],
    process: [
      { step: '01', title: 'Assessment', description: 'Current infrastructure, traffic, costs and compliance needs.' },
      { step: '02', title: 'Architecture', description: 'Provider selection, sizing, security and backup design.' },
      { step: '03', title: 'Migration', description: 'Staged move with rollback plan and DNS cut-over.' },
      { step: '04', title: 'Managed operations', description: 'Monitoring, patching, scaling and monthly reporting.' },
    ],
    faqs: [
      { q: 'AWS, DigitalOcean or Hostinger, which is right for me?', a: 'Hostinger suits brochure sites and small WooCommerce stores. DigitalOcean is ideal for web apps that need predictable pricing. AWS fits applications that need managed databases, autoscaling or compliance controls. We help you choose and can move you later.' },
      { q: 'Can you take over hosting we already have?', a: 'Yes. We audit the existing setup, secure it and either manage it in place or migrate it to a better fit.' },
      { q: 'Do you offer 24x7 monitoring?', a: 'Yes. Uptime and error monitoring runs around the clock with alerts routed to our on-call engineers.' },
    ],
  },
  {
    slug: 'rpa-automation',
    name: 'RPA & Process Automation',
    shortName: 'RPA Automation',
    icon: Bot,
    summary:
      'Automate repetitive back-office work with UiPath, Power Automate and Automation Anywhere.',
    metaDescription:
      'RPA and business process automation services in Pune. UiPath, Microsoft Power Automate and Automation Anywhere bots for finance, HR, operations and support.',
    intro:
      'Invoice processing, report generation, data entry between systems: work that is repetitive and rule-based is a candidate for automation. We identify the processes with the fastest payback, build reliable bots, and hand them over with monitoring and documentation.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200',
    imageAlt: 'Abstract visual of automated digital processes',
    highlights: [
      { title: 'Fast payback', description: 'Most automations pay for themselves within months.' },
      { title: 'Certified developers', description: 'UiPath, Power Automate and Automation Anywhere expertise.' },
      { title: 'Reliable bots', description: 'Exception handling, retries and logging built into every workflow.' },
      { title: 'No system changes', description: 'Bots work with your existing applications through their UI or APIs.' },
    ],
    offerings: [
      {
        title: 'Process discovery & ROI analysis',
        description: 'Find and prioritise the automations that matter.',
        points: ['Process mapping', 'Effort and volume analysis', 'ROI model', 'Automation roadmap'],
      },
      {
        title: 'Bot development',
        description: 'Attended and unattended bots for finance, HR, operations and support.',
        points: ['UiPath and Automation Anywhere', 'Power Automate cloud flows', 'Document understanding and OCR', 'Email and Excel automation'],
      },
      {
        title: 'Integration automation',
        description: 'Move data between CRMs, ERPs and spreadsheets without manual re-keying.',
        points: ['API and database connectors', 'Scheduled and event-driven flows', 'Validation and reconciliation', 'Error notifications'],
      },
      {
        title: 'Support & centre of excellence',
        description: 'Keep bots running and scale automation across teams.',
        points: ['Monitoring and maintenance', 'Change management', 'Team training', 'Governance frameworks'],
      },
    ],
    technologies: [
      { name: 'UiPath', category: 'RPA' },
      { name: 'Power Automate', category: 'RPA' },
      { name: 'Automation Anywhere', category: 'RPA' },
      { name: 'Python', category: 'Scripting' },
      { name: 'Zapier / Make', category: 'Integration' },
      { name: 'Microsoft 365', category: 'Platform' },
      { name: 'SAP', category: 'ERP' },
      { name: 'Tally', category: 'Accounting' },
    ],
    process: [
      { step: '01', title: 'Identify', description: 'Shortlist processes by volume, rules and error rate.' },
      { step: '02', title: 'Design', description: 'Process definition document and exception handling plan.' },
      { step: '03', title: 'Build & test', description: 'Bot development with user acceptance testing.' },
      { step: '04', title: 'Deploy & monitor', description: 'Production release, dashboards and support.' },
    ],
    faqs: [
      { q: 'Which processes are good candidates for RPA?', a: 'High-volume, rule-based, repetitive tasks with structured inputs: invoice entry, report preparation, onboarding checklists, data migration and reconciliation.' },
      { q: 'Do we need to buy RPA licences?', a: 'Power Automate is often included in Microsoft 365 plans. UiPath and Automation Anywhere have free community and paid tiers; we advise on the most economical option.' },
    ],
  },
  {
    slug: 'digital-marketing-seo',
    name: 'Digital Marketing & SEO',
    shortName: 'SEO & Marketing',
    icon: Megaphone,
    summary:
      'Search engine optimisation, paid campaigns and content that bring qualified traffic to your site.',
    metaDescription:
      'SEO and digital marketing services in Pune. Technical SEO, local SEO, content marketing, Google Ads and social media campaigns with transparent reporting.',
    intro:
      'A well-built website still needs to be found. We combine technical SEO, content and paid campaigns to grow qualified traffic, with monthly reporting that shows exactly what changed and why. No vanity metrics, just enquiries and sales.',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1200',
    imageAlt: 'Marketing analytics dashboard on a laptop',
    highlights: [
      { title: 'Technical SEO', description: 'Site structure, speed, schema and indexing fixed at the source.' },
      { title: 'Local SEO', description: 'Google Business Profile, citations and reviews for local search.' },
      { title: 'Content that ranks', description: 'Keyword research and articles written for people and search engines.' },
      { title: 'Transparent reporting', description: 'Monthly dashboards with rankings, traffic and conversions.' },
    ],
    offerings: [
      {
        title: 'SEO audits & technical SEO',
        description: 'Fix what is holding your site back in search.',
        points: ['Crawl and index audit', 'Core Web Vitals', 'Schema markup', 'Internal linking'],
      },
      {
        title: 'Content marketing',
        description: 'Blogs, guides and landing pages built around real search demand.',
        points: ['Keyword strategy', 'Editorial calendar', 'On-page optimisation', 'Performance tracking'],
      },
      {
        title: 'Google & Meta Ads',
        description: 'Paid campaigns managed for return on ad spend, not clicks.',
        points: ['Search and shopping', 'Remarketing', 'Landing page testing', 'Conversion tracking'],
      },
      {
        title: 'Social media management',
        description: 'Consistent, professional presence on LinkedIn, Instagram and Facebook.',
        points: ['Content design', 'Scheduling', 'Community management', 'Monthly insights'],
      },
    ],
    technologies: [
      { name: 'Google Search Console', category: 'SEO' },
      { name: 'Google Analytics 4', category: 'Analytics' },
      { name: 'Ahrefs', category: 'SEO' },
      { name: 'Semrush', category: 'SEO' },
      { name: 'Google Ads', category: 'Paid' },
      { name: 'Meta Ads', category: 'Paid' },
      { name: 'Google Tag Manager', category: 'Tracking' },
      { name: 'Mailchimp', category: 'Email' },
    ],
    process: [
      { step: '01', title: 'Audit', description: 'Technical, content and competitor analysis.' },
      { step: '02', title: 'Strategy', description: 'Keyword map, content plan and campaign structure.' },
      { step: '03', title: 'Execute', description: 'Fixes, content and campaigns shipped monthly.' },
      { step: '04', title: 'Report & refine', description: 'Dashboards, reviews and next-month priorities.' },
    ],
    faqs: [
      { q: 'How long until SEO shows results?', a: 'Technical fixes can lift rankings within weeks. Sustained growth from content usually takes three to six months.' },
      { q: 'Do you guarantee first-page rankings?', a: 'No reputable agency can. We commit to a clear plan, measurable progress and honest reporting.' },
    ],
  },
  {
    slug: 'it-consulting',
    name: 'IT Consulting',
    shortName: 'IT Consulting',
    icon: Lightbulb,
    summary:
      'Technology strategy, architecture reviews and vendor selection from engineers who also build.',
    metaDescription:
      'IT consulting services in Pune. Technology roadmaps, architecture and security reviews, cloud strategy, vendor selection and digital transformation planning.',
    intro:
      'Good technology decisions are hard to make from the inside. We give independent, practical advice on platforms, architecture, security and spend, grounded in the experience of building and running systems ourselves.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200',
    imageAlt: 'Consultants reviewing a technology plan around a table',
    highlights: [
      { title: 'Independent advice', description: 'Recommendations based on your needs, not vendor incentives.' },
      { title: 'Practical', description: 'Roadmaps with priorities, budgets and owners, not slide decks.' },
      { title: 'Security minded', description: 'Reviews aligned to OWASP and ISO 27001 controls.' },
      { title: 'Cost aware', description: 'Cloud and licence spend reviews with concrete savings.' },
    ],
    offerings: [
      {
        title: 'Technology roadmap',
        description: 'A two-to-three-year plan that connects technology to business goals.',
        points: ['Current-state assessment', 'Prioritised initiatives', 'Budget estimates', 'Quarterly reviews'],
      },
      {
        title: 'Architecture & code review',
        description: 'An honest assessment of an existing system or a proposed design.',
        points: ['Scalability and reliability', 'Maintainability', 'Security findings', 'Remediation plan'],
      },
      {
        title: 'Cloud & cost strategy',
        description: 'Choose the right provider and stop over-paying.',
        points: ['AWS, Azure, GCP and DigitalOcean comparison', 'Cost optimisation', 'Migration planning', 'Governance'],
      },
      {
        title: 'Vendor & product selection',
        description: 'Pick the CRM, ERP or platform that fits, with a clear evaluation.',
        points: ['Requirements matrix', 'Shortlist and demos', 'Total cost of ownership', 'Implementation plan'],
      },
    ],
    technologies: [
      { name: 'AWS', category: 'Cloud' },
      { name: 'Microsoft Azure', category: 'Cloud' },
      { name: 'Google Cloud', category: 'Cloud' },
      { name: 'DigitalOcean', category: 'Cloud' },
      { name: 'Microsoft 365', category: 'Workplace' },
      { name: 'Google Workspace', category: 'Workplace' },
      { name: 'Zoho', category: 'Business apps' },
      { name: 'HubSpot', category: 'CRM' },
    ],
    process: [
      { step: '01', title: 'Listen', description: 'Stakeholder interviews and goals.' },
      { step: '02', title: 'Assess', description: 'Systems, processes, risks and spend.' },
      { step: '03', title: 'Recommend', description: 'Options with trade-offs and a preferred path.' },
      { step: '04', title: 'Support', description: 'Help executing, or hand-over to your team.' },
    ],
    faqs: [
      { q: 'Do you only recommend solutions you build?', a: 'No. If a SaaS product or another vendor is the better fit, we say so.' },
    ],
  },
  {
    slug: 'ui-ux-design',
    name: 'UI/UX Design',
    shortName: 'UI/UX Design',
    icon: PenTool,
    summary:
      'Research-led product design: user flows, wireframes, prototypes and design systems.',
    metaDescription:
      'UI/UX design services in Pune. User research, wireframes, interactive prototypes and design systems for websites, web apps and mobile apps.',
    intro:
      'Good design is the difference between software people tolerate and software they enjoy. We design interfaces that are clear, consistent and accessible, validated with real users before a line of code is written.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200',
    imageAlt: 'Designer sketching interface wireframes',
    highlights: [
      { title: 'User research', description: 'Interviews, surveys and usability tests that inform every decision.' },
      { title: 'Prototypes', description: 'Clickable Figma prototypes so stakeholders experience the product early.' },
      { title: 'Design systems', description: 'Reusable components that keep products consistent as they grow.' },
      { title: 'Accessible', description: 'WCAG 2.2 AA colour, contrast and interaction standards.' },
    ],
    offerings: [
      {
        title: 'Website design',
        description: 'Brand-led designs that communicate clearly and convert.',
        points: ['Information architecture', 'Responsive layouts', 'Content design', 'Handoff to development'],
      },
      {
        title: 'Web & mobile app design',
        description: 'Product UX from onboarding to complex workflows.',
        points: ['User flows', 'Wireframes', 'High-fidelity UI', 'Micro-interactions'],
      },
      {
        title: 'Design systems',
        description: 'Tokens, components and documentation for your team.',
        points: ['Figma libraries', 'Coded components', 'Usage guidelines', 'Governance'],
      },
      {
        title: 'UX audits',
        description: 'Find what is confusing users and losing conversions.',
        points: ['Heuristic review', 'Analytics and heatmaps', 'Usability testing', 'Prioritised fixes'],
      },
    ],
    technologies: [
      { name: 'Figma', category: 'Design' },
      { name: 'Adobe XD', category: 'Design' },
      { name: 'Illustrator', category: 'Graphics' },
      { name: 'Maze', category: 'Testing' },
      { name: 'Hotjar', category: 'Analytics' },
      { name: 'Storybook', category: 'Components' },
    ],
    process: [
      { step: '01', title: 'Research', description: 'Users, goals and competitive landscape.' },
      { step: '02', title: 'Structure', description: 'Flows, sitemaps and wireframes.' },
      { step: '03', title: 'Design', description: 'Visual design and interactive prototype.' },
      { step: '04', title: 'Validate', description: 'Usability testing and developer handoff.' },
    ],
    faqs: [
      { q: 'Can you work with our existing brand?', a: 'Yes. We design within your brand guidelines and extend them for digital where needed.' },
    ],
  },
  {
    slug: 'website-maintenance-support',
    name: 'Website Maintenance & Support',
    shortName: 'Maintenance & Support',
    icon: Wrench,
    summary:
      'Monthly care plans covering updates, security, backups, monitoring and content changes.',
    metaDescription:
      'Website maintenance and support plans in Pune. Updates, security monitoring, backups, uptime checks and content edits for WordPress, Shopify and custom sites.',
    intro:
      'A website is never finished. Plugins need updating, certificates expire, content changes and traffic spikes happen. Our maintenance plans keep your site secure, fast and current, with a real engineer available when you need a change.',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200',
    imageAlt: 'Support team collaborating at a desk',
    highlights: [
      { title: 'Proactive updates', description: 'Core, plugin and dependency updates tested on staging first.' },
      { title: 'Security & backups', description: 'Daily off-site backups, malware scanning and firewall.' },
      { title: 'Monitoring', description: 'Uptime, performance and error alerts around the clock.' },
      { title: 'Support hours', description: 'A monthly block of hours for content edits and small features.' },
    ],
    offerings: [
      {
        title: 'WordPress care plans',
        description: 'Everything a WordPress site needs to stay healthy.',
        points: ['Managed updates', 'Security hardening', 'Speed checks', 'Content edits'],
      },
      {
        title: 'Shopify & e-commerce support',
        description: 'Keep your store selling with theme updates and app support.',
        points: ['Theme and app updates', 'Product uploads', 'Promotion setup', 'Checkout monitoring'],
      },
      {
        title: 'Custom application support',
        description: 'SLA-backed support for the software we or others built.',
        points: ['Bug fixes', 'Dependency upgrades', 'Performance tuning', 'Feature backlog'],
      },
      {
        title: 'Hosting & infrastructure care',
        description: 'Server patching, scaling and cost reviews on AWS, DigitalOcean and Hostinger.',
        points: ['OS and runtime patches', 'SSL renewals', 'Backup verification', 'Monthly reports'],
      },
    ],
    technologies: [
      { name: 'WordPress', category: 'CMS' },
      { name: 'Shopify', category: 'E-commerce' },
      { name: 'UptimeRobot', category: 'Monitoring' },
      { name: 'Sentry', category: 'Errors' },
      { name: 'Cloudflare', category: 'Security' },
      { name: 'AWS', category: 'Hosting' },
      { name: 'DigitalOcean', category: 'Hosting' },
      { name: 'Hostinger', category: 'Hosting' },
    ],
    process: [
      { step: '01', title: 'Onboard', description: 'Access, audit and baseline performance.' },
      { step: '02', title: 'Stabilise', description: 'Fix urgent issues and set up monitoring.' },
      { step: '03', title: 'Maintain', description: 'Scheduled updates and support requests.' },
      { step: '04', title: 'Report', description: 'Monthly summary of work done and recommendations.' },
    ],
    faqs: [
      { q: 'Can you support a site you did not build?', a: 'Yes. We start with an audit and take over maintenance for WordPress, Shopify and most custom stacks.' },
      { q: 'What response times do you offer?', a: 'Critical issues are acknowledged within two hours during business hours. Standard requests are scheduled within one business day.' },
    ],
  },
];

export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug);
export const FEATURED_SERVICES = SERVICES.filter((s) => s.featured);
