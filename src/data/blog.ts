export type Block =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'quote'; text: string };

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  metaDescription: string;
  category: string;
  tags: string[];
  author: string;
  authorRole: string;
  date: string; // ISO
  readTime: string;
  image: string;
  imageAlt: string;
  content: Block[];
}

export const POSTS: Post[] = [
  {
    slug: 'aws-vs-digitalocean-vs-hostinger-which-hosting-is-right-for-your-business',
    title: 'AWS vs DigitalOcean vs Hostinger: which hosting is right for your business?',
    excerpt:
      'Three very different platforms, three very different price tags. Here is how we decide which one a client should run on.',
    metaDescription:
      'Compare AWS, DigitalOcean and Hostinger for business websites and applications: pricing, performance, management effort and when to choose each.',
    category: 'Cloud & Hosting',
    tags: ['AWS', 'DigitalOcean', 'Hostinger', 'Hosting'],
    author: 'Intrepid Technology',
    authorRole: 'Cloud team',
    date: '2026-08-18',
    readTime: '7 min read',
    image: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1200',
    imageAlt: 'Rows of servers in a data centre',
    content: [
      {
        type: 'p',
        text: 'Every week someone asks us whether they should be on AWS. The honest answer is usually "it depends on what you are running". A five-page company website, a WooCommerce store and a multi-tenant SaaS product have completely different needs, and paying for infrastructure you do not use is as wasteful as under-provisioning. This guide explains how we choose between the three platforms we work with most.',
      },
      { type: 'h2', text: 'Hostinger: simple, fast and affordable' },
      {
        type: 'p',
        text: 'Hostinger is managed shared and VPS hosting. You get a control panel, one-click WordPress, LiteSpeed caching, free SSL and email, and daily backups on business plans. There are no servers to patch and no cloud console to learn.',
      },
      {
        type: 'ul',
        items: [
          'Best for: brochure websites, blogs, small WooCommerce stores and landing pages.',
          'Typical cost: a few hundred rupees a month for shared plans, a little more for VPS.',
          'Limits: no autoscaling, limited control over the server stack, and resource caps under sustained heavy traffic.',
        ],
      },
      { type: 'h2', text: 'DigitalOcean: predictable cloud servers for applications' },
      {
        type: 'p',
        text: 'DigitalOcean gives you virtual servers (Droplets), managed databases, object storage and a Kubernetes service with flat monthly pricing. You get root access and full control, which means you are also responsible for patching and security unless you use App Platform or a managed service.',
      },
      {
        type: 'ul',
        items: [
          'Best for: Node.js, Python or PHP applications, APIs, staging environments and high-traffic WordPress.',
          'Typical cost: from a few dollars a month per Droplet; managed PostgreSQL starts around fifteen dollars.',
          'Limits: a smaller service catalogue than AWS, and fewer compliance certifications.',
        ],
      },
      { type: 'h2', text: 'AWS: everything, at scale' },
      {
        type: 'p',
        text: 'Amazon Web Services offers more than two hundred services: compute, managed databases, serverless functions, queues, machine learning and detailed identity controls. It is the platform of choice when you need autoscaling, multi-region deployment or specific compliance requirements.',
      },
      {
        type: 'ul',
        items: [
          'Best for: SaaS products, data-heavy applications, regulated industries and anything that must scale automatically.',
          'Typical cost: pay-as-you-go; a small production stack often runs between five and fifteen thousand rupees a month, but costs need active management.',
          'Limits: complexity. Without experience it is easy to over-spend or misconfigure security.',
        ],
      },
      { type: 'h2', text: 'How we decide' },
      {
        type: 'p',
        text: 'We ask four questions. What is the traffic pattern: steady or spiky? Who will manage the server after launch? Are there compliance or data residency requirements? What is the monthly budget? A steady-traffic WordPress site with a non-technical owner belongs on Hostinger. A custom application with a small engineering team fits DigitalOcean. A product that must handle unpredictable growth, or that needs managed services like RDS, SQS and Lambda, belongs on AWS.',
      },
      {
        type: 'quote',
        text: 'The cheapest platform is the one that matches your workload. Over-engineering a brochure site onto AWS costs more in management time than it saves.',
      },
      { type: 'h2', text: 'You can move later' },
      {
        type: 'p',
        text: 'Choosing Hostinger today does not lock you out of AWS tomorrow. We regularly migrate clients between providers as their needs change, using containers and infrastructure as code to keep moves painless. If you are unsure where you should be, our cloud team offers a free hosting assessment.',
      },
    ],
  },
  {
    slug: 'shopify-vs-woocommerce-which-platform-for-your-online-store',
    title: 'Shopify vs WooCommerce: which platform should you build your online store on?',
    excerpt:
      'Hosted convenience or open-source control? A practical comparison for Indian businesses launching or migrating a store.',
    metaDescription:
      'Shopify vs WooCommerce compared for Indian businesses: costs, payments, maintenance, customisation and SEO, with clear guidance on which to choose.',
    category: 'E-commerce',
    tags: ['Shopify', 'WooCommerce', 'WordPress', 'E-commerce'],
    author: 'Intrepid Technology',
    authorRole: 'E-commerce team',
    date: '2026-08-04',
    readTime: '8 min read',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1200',
    imageAlt: 'Online store checkout displayed on a laptop',
    content: [
      {
        type: 'p',
        text: 'Shopify and WooCommerce together power a large share of online stores worldwide, and we build on both. They solve the same problem in different ways: Shopify is a hosted platform where the servers, checkout and security are handled for you; WooCommerce is a free plugin that turns a WordPress site into a store you host and control yourself.',
      },
      { type: 'h2', text: 'Setup and maintenance' },
      {
        type: 'p',
        text: 'Shopify wins on simplicity. You sign up, choose a theme, add products and start selling. Updates, backups, PCI compliance and uptime are Shopify\'s problem. WooCommerce needs hosting, SSL, plugin updates and backups, which is why we pair it with a maintenance plan. If you already run a WordPress site and have someone comfortable with it, that overhead is small. If you do not, Shopify removes a category of worry.',
      },
      { type: 'h2', text: 'Cost' },
      {
        type: 'ul',
        items: [
          'Shopify: a monthly subscription plus transaction fees unless you use Shopify Payments, plus paid apps for features like subscriptions or advanced reviews.',
          'WooCommerce: the plugin is free; you pay for hosting (Hostinger or DigitalOcean), premium extensions and development time.',
          'Over three years, WooCommerce is usually cheaper for small catalogues; Shopify\'s costs are more predictable for growing brands.',
        ],
      },
      { type: 'h2', text: 'Payments and shipping in India' },
      {
        type: 'p',
        text: 'Both platforms support Razorpay, PayU, Cashfree and cash on delivery. Shipping aggregators such as Shiprocket and Delhivery integrate with both. Shopify Payments availability in India is limited, so factor in third-party gateway fees when comparing.',
      },
      { type: 'h2', text: 'Customisation' },
      {
        type: 'p',
        text: 'WooCommerce is open source, so anything is possible: custom checkout flows, B2B pricing, unusual product configurations. Shopify is flexible through its theme language and apps, and Shopify Plus unlocks checkout customisation, but you work within the platform\'s boundaries. For most retail stores those boundaries are never reached.',
      },
      { type: 'h2', text: 'SEO and content' },
      {
        type: 'p',
        text: 'WordPress remains the stronger content platform. If your growth strategy relies on blogging, guides and complex landing pages, WooCommerce gives you more control over URLs, structure and schema. Shopify\'s SEO is solid for product and collection pages and has improved steadily.',
      },
      { type: 'h2', text: 'Our recommendation' },
      {
        type: 'ul',
        items: [
          'Choose Shopify if you want to focus on products and marketing, sell across channels and avoid technical maintenance.',
          'Choose WooCommerce if you already run WordPress, need deep customisation, or want the lowest recurring costs with a maintenance partner.',
          'Undecided? Talk to us. We will look at your catalogue, team and budget and recommend one with clear reasons, and we can migrate you later if needs change.',
        ],
      },
    ],
  },
  {
    slug: 'how-to-speed-up-a-wordpress-website',
    title: 'How to speed up a WordPress website: a practical checklist',
    excerpt:
      'Most slow WordPress sites share the same handful of problems. Here is the order we fix them in, and what each step is worth.',
    metaDescription:
      'A practical checklist for speeding up WordPress: hosting, caching, images, plugins, themes and Core Web Vitals, in the order that delivers the biggest gains.',
    category: 'WordPress',
    tags: ['WordPress', 'Performance', 'Core Web Vitals', 'Hostinger'],
    author: 'Intrepid Technology',
    authorRole: 'WordPress team',
    date: '2026-07-21',
    readTime: '6 min read',
    image: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=1200',
    imageAlt: 'Laptop displaying website performance metrics',
    content: [
      {
        type: 'p',
        text: 'Speed is not a vanity metric. Google uses Core Web Vitals as a ranking signal, and every extra second of load time reduces conversions. The good news is that most WordPress performance problems are predictable and fixable. We work through them in this order.',
      },
      { type: 'h2', text: '1. Measure before you touch anything' },
      {
        type: 'p',
        text: 'Run PageSpeed Insights and note Largest Contentful Paint, Interaction to Next Paint and Cumulative Layout Shift for your home page and a typical inner page. Check Search Console\'s Core Web Vitals report for real-user data. Without a baseline you cannot tell which change helped.',
      },
      { type: 'h2', text: '2. Fix the hosting' },
      {
        type: 'p',
        text: 'Cheap shared hosting with slow disks and no server-level caching will cap your results regardless of what else you do. A LiteSpeed-based host such as Hostinger, or a properly tuned DigitalOcean Droplet with Nginx and PHP 8, is the foundation. Make sure PHP is on a supported version; the jump from PHP 7 to 8 alone is worth measurable time.',
      },
      { type: 'h2', text: '3. Enable page and object caching' },
      {
        type: 'p',
        text: 'Page caching serves stored HTML instead of rebuilding every page on each visit. LiteSpeed Cache on Hostinger, or WP Rocket elsewhere, handles this. Object caching with Redis speeds up logged-in and WooCommerce pages that cannot be fully cached.',
      },
      { type: 'h2', text: '4. Optimise images' },
      {
        type: 'ul',
        items: [
          'Serve WebP or AVIF versions with a plugin or at the CDN.',
          'Resize images to the size they are displayed at; a 4,000-pixel hero image is never needed.',
          'Lazy-load everything below the fold, and give images width and height attributes to prevent layout shift.',
        ],
      },
      { type: 'h2', text: '5. Audit plugins and the theme' },
      {
        type: 'p',
        text: 'Use Query Monitor to see which plugins add the most database queries and load time. Remove anything unused, replace heavy plugins with lighter equivalents, and be wary of page builders that load their entire CSS on every page. A custom theme built from your design is the biggest single improvement for many sites.',
      },
      { type: 'h2', text: '6. Add a CDN and tune delivery' },
      {
        type: 'p',
        text: 'Cloudflare in front of your site serves static assets from locations near your visitors and provides a free layer of security. Enable Brotli compression, HTTP/2 or HTTP/3, and defer non-critical JavaScript.',
      },
      { type: 'h2', text: '7. Clean the database' },
      {
        type: 'p',
        text: 'Post revisions, transients and orphaned metadata accumulate for years. A scheduled cleanup keeps queries fast, especially on WooCommerce sites with large order tables.',
      },
      {
        type: 'quote',
        text: 'Our target for a business WordPress site is a mobile PageSpeed score above 90 and Largest Contentful Paint under 2.5 seconds. It is achievable on a modest budget with the right hosting and a lean theme.',
      },
      {
        type: 'p',
        text: 'If your site is slow and you would rather not work through this list yourself, our WordPress team offers a fixed-price speed optimisation package with before-and-after reports.',
      },
    ],
  },
  {
    slug: 'technical-seo-checklist-for-a-new-website',
    title: 'Technical SEO checklist for launching a new website',
    excerpt:
      'Design and content get the attention, but technical SEO decides whether Google can find and trust your site. Run through this list before go-live.',
    metaDescription:
      'The technical SEO checklist we run before every website launch: indexing, URLs, metadata, schema, speed, mobile, redirects and analytics.',
    category: 'SEO',
    tags: ['SEO', 'Web Development', 'Launch checklist'],
    author: 'Intrepid Technology',
    authorRole: 'Marketing team',
    date: '2026-07-07',
    readTime: '6 min read',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1200',
    imageAlt: 'Search analytics graphs on a laptop screen',
    content: [
      {
        type: 'p',
        text: 'A beautiful website that search engines cannot crawl is a brochure nobody reads. Technical SEO is the set of checks that make sure your pages are discoverable, understandable and fast. We run this list on every launch, and it catches something almost every time.',
      },
      { type: 'h2', text: 'Crawling and indexing' },
      {
        type: 'ul',
        items: [
          'Remove any "noindex" tags or password protection left over from staging.',
          'Publish a robots.txt that allows crawling and points to your sitemap.',
          'Generate an XML sitemap with every public page and submit it in Google Search Console.',
          'Verify the site in Search Console and Bing Webmaster Tools.',
        ],
      },
      { type: 'h2', text: 'URLs and site structure' },
      {
        type: 'ul',
        items: [
          'Use short, descriptive, lowercase URLs with hyphens.',
          'Force a single canonical version: HTTPS, and either www or non-www, with 301 redirects for the others.',
          'Keep important pages within three clicks of the home page and link to them from navigation.',
          'If you are replacing an old site, map every old URL to a new one with 301 redirects.',
        ],
      },
      { type: 'h2', text: 'On-page metadata' },
      {
        type: 'ul',
        items: [
          'Unique title tags under 60 characters and meta descriptions under 160 characters for every page.',
          'One H1 per page that states what the page is about, with a sensible heading hierarchy underneath.',
          'Descriptive alt text on every meaningful image.',
          'Open Graph and Twitter tags so shared links show the right title and image.',
        ],
      },
      { type: 'h2', text: 'Structured data' },
      {
        type: 'p',
        text: 'Add schema.org markup for your organisation, local business details, services, articles, FAQs and products where relevant. Validate it with Google\'s Rich Results Test. Structured data helps search engines understand your content and can earn enhanced results.',
      },
      { type: 'h2', text: 'Performance and mobile' },
      {
        type: 'ul',
        items: [
          'Pass Core Web Vitals on mobile: LCP under 2.5 seconds, INP under 200 milliseconds, CLS under 0.1.',
          'Test every template on a real phone, not just a resized browser window.',
          'Compress images, use modern formats and lazy-load below-the-fold media.',
        ],
      },
      { type: 'h2', text: 'Analytics and monitoring' },
      {
        type: 'p',
        text: 'Install Google Analytics 4 with conversion events for form submissions and calls, connect Search Console, and set up uptime monitoring. Then schedule a check two weeks after launch to review index coverage and fix any crawl errors.',
      },
      {
        type: 'p',
        text: 'Every website we build ships with this checklist completed. If you would like us to audit an existing site against it, get in touch for a free technical SEO review.',
      },
    ],
  },
  {
    slug: 'migrating-a-small-business-application-to-aws',
    title: 'Migrating a small business application to AWS: a step-by-step plan',
    excerpt:
      'Moving to AWS does not have to be a big-bang project. This is the phased approach we use to migrate applications with no customer-visible downtime.',
    metaDescription:
      'A step-by-step AWS migration plan for small and mid-sized businesses: assessment, architecture, data migration, cut-over and cost control.',
    category: 'Cloud & Hosting',
    tags: ['AWS', 'Cloud migration', 'DevOps'],
    author: 'Intrepid Technology',
    authorRole: 'Cloud team',
    date: '2026-06-16',
    readTime: '7 min read',
    image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1200',
    imageAlt: 'Network cables connected to a server switch',
    content: [
      {
        type: 'p',
        text: 'Businesses usually come to us with an application on a single server that has grown beyond what one machine can safely handle. They want reliability, backups and room to grow, and AWS is often the right destination. Here is the plan we follow.',
      },
      { type: 'h2', text: 'Phase 1: Assess' },
      {
        type: 'p',
        text: 'We document every component: application code, runtime versions, databases, file storage, cron jobs, email sending, third-party integrations and DNS. We measure current traffic and resource usage to size the new environment, and we identify anything that is hard-coded to the old server.',
      },
      { type: 'h2', text: 'Phase 2: Design the target architecture' },
      {
        type: 'ul',
        items: [
          'Compute: EC2 instances behind a load balancer, or ECS containers for applications we can containerise.',
          'Database: Amazon RDS with automated backups and multi-availability-zone failover for production.',
          'Files: S3 for uploads and static assets, served through CloudFront.',
          'Security: a private VPC, security groups, IAM roles with least privilege, and secrets stored in Secrets Manager.',
          'Operations: CloudWatch alarms, centralised logs and a CI/CD pipeline with GitHub Actions.',
        ],
      },
      { type: 'h2', text: 'Phase 3: Build and test in parallel' },
      {
        type: 'p',
        text: 'We provision the environment with Terraform so it is repeatable, deploy the application, and restore a copy of the production database. The team tests against the new environment while the old one keeps serving customers. Any code changes needed, such as moving uploads to S3, are made and tested here.',
      },
      { type: 'h2', text: 'Phase 4: Cut over' },
      {
        type: 'p',
        text: 'We lower DNS TTLs a day ahead, then perform a final database sync during a low-traffic window, switch DNS, and monitor closely. The old server stays available in read-only mode for a rollback window. Customers see nothing except, usually, a faster site.',
      },
      { type: 'h2', text: 'Phase 5: Optimise costs' },
      {
        type: 'p',
        text: 'After a month of real usage data we right-size instances, apply savings plans or reserved instances, set S3 lifecycle rules and switch off anything unused. Cost reviews then become a quarterly routine.',
      },
      {
        type: 'quote',
        text: 'The most common migration mistake is lifting a server as-is and treating AWS like a bigger VPS. The value comes from managed services: RDS backups, S3 durability and autoscaling.',
      },
      {
        type: 'p',
        text: 'If you are planning a move to AWS, or wondering whether DigitalOcean would serve you just as well at lower cost, our cloud team can assess your application and give you a clear recommendation.',
      },
    ],
  },
  {
    slug: 'why-rpa-delivers-the-fastest-roi-in-back-office-automation',
    title: 'Why RPA delivers the fastest return on investment in back-office automation',
    excerpt:
      'Robotic process automation does not require replacing your systems. That is exactly why it pays back so quickly.',
    metaDescription:
      'How robotic process automation with UiPath and Power Automate delivers fast ROI in finance, HR and operations, with examples and a guide to choosing processes.',
    category: 'Automation',
    tags: ['RPA', 'UiPath', 'Power Automate', 'Operations'],
    author: 'Intrepid Technology',
    authorRole: 'Automation team',
    date: '2026-05-27',
    readTime: '5 min read',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200',
    imageAlt: 'Abstract illustration of automated data flows',
    content: [
      {
        type: 'p',
        text: 'Most automation projects stall because they require changing the systems people already use. Robotic process automation takes the opposite approach: software bots operate your existing applications the way a person would, clicking, typing and reading screens, or calling their APIs where available. Nothing needs to be replaced, so projects start small and pay back fast.',
      },
      { type: 'h2', text: 'Where the returns come from' },
      {
        type: 'ul',
        items: [
          'Hours recovered: a bot that processes invoices, reconciles statements or updates a CRM works around the clock without errors.',
          'Fewer mistakes: rule-based bots do not mistype amounts or skip steps, which reduces rework and compliance risk.',
          'Faster cycles: onboarding, approvals and reporting move from days to minutes.',
          'Happier teams: people stop doing the repetitive work they dislike and focus on judgement and customers.',
        ],
      },
      { type: 'h2', text: 'Three examples from our clients' },
      {
        type: 'p',
        text: 'A marketing agency saved around forty hours a week by automating client reporting from ad platforms. A distributor cut invoice processing from four days to same-day by having a bot read supplier PDFs and enter them into Tally. An HR team automated document collection and system access requests for new joiners, reducing onboarding effort by more than half.',
      },
      { type: 'h2', text: 'Choosing the first process' },
      {
        type: 'p',
        text: 'Good candidates are high-volume, rule-based and stable. Look for tasks that involve copying data between systems, generating regular reports, or checking documents against rules. Avoid processes that change frequently or require judgement calls; those are better handled with a redesigned workflow or a custom application.',
      },
      { type: 'h2', text: 'Tooling' },
      {
        type: 'p',
        text: 'Microsoft Power Automate is included in many Microsoft 365 subscriptions and is ideal for Office-centric workflows. UiPath and Automation Anywhere offer more powerful desktop automation and document understanding for larger programmes. We are certified on all three and recommend based on your existing licences.',
      },
      {
        type: 'p',
        text: 'A free process discovery session with our automation team usually identifies two or three automations with a payback period under six months.',
      },
    ],
  },
  {
    slug: 'what-website-maintenance-covers-and-why-it-matters',
    title: 'What website maintenance actually covers, and why it matters',
    excerpt:
      'A website is software, and software needs care. Here is what a proper maintenance plan includes and what happens when you skip it.',
    metaDescription:
      'What a website maintenance plan should include: updates, security, backups, monitoring, performance and content support, and the risks of neglecting them.',
    category: 'Maintenance',
    tags: ['Maintenance', 'Security', 'WordPress', 'Shopify'],
    author: 'Intrepid Technology',
    authorRole: 'Support team',
    date: '2026-05-12',
    readTime: '5 min read',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200',
    imageAlt: 'Support engineers working together at a desk',
    content: [
      {
        type: 'p',
        text: 'The most common support call we receive is not about a new feature. It is a site that has been quietly ignored for a year: plugins out of date, SSL certificate expired, contact form silently failing, and a malware warning in Google. All of it avoidable. This is what maintenance means in practice.',
      },
      { type: 'h2', text: 'Updates, tested first' },
      {
        type: 'p',
        text: 'WordPress core, themes, plugins, Shopify apps, server packages and application dependencies all release updates, many of them security fixes. We apply them on a staging copy first, check the site still works, then roll out to production. Unattended auto-updates are how sites break at 2 AM.',
      },
      { type: 'h2', text: 'Security' },
      {
        type: 'ul',
        items: [
          'Web application firewall and rate limiting through Cloudflare.',
          'Login protection, two-factor authentication and removal of unused accounts.',
          'Malware scanning with clean-up if anything slips through.',
          'SSL certificate renewal and security header configuration.',
        ],
      },
      { type: 'h2', text: 'Backups you can actually restore' },
      {
        type: 'p',
        text: 'Daily off-site backups of files and database, retained for at least thirty days, with a restore test every quarter. A backup that has never been restored is a hope, not a plan.',
      },
      { type: 'h2', text: 'Monitoring' },
      {
        type: 'p',
        text: 'Uptime checks every minute, error tracking, and alerts on form failures and payment errors. We usually know a site is down before the owner does.',
      },
      { type: 'h2', text: 'Performance and content' },
      {
        type: 'p',
        text: 'Monthly speed checks catch regressions from new content or plugins. A block of support hours covers content edits, new pages, product uploads and small features, so you are not waiting on a developer\'s availability.',
      },
      {
        type: 'quote',
        text: 'A maintenance plan costs a fraction of an emergency rebuild after a hack or an outage during a campaign.',
      },
      {
        type: 'p',
        text: 'Our care plans cover WordPress, Shopify and custom applications hosted on AWS, DigitalOcean or Hostinger, whether or not we built the site originally.',
      },
    ],
  },
  {
    slug: 'native-vs-cross-platform-mobile-apps',
    title: 'Native vs cross-platform mobile apps: how to choose in 2026',
    excerpt:
      'Flutter and React Native have closed most of the gap with native development. Here is when each approach still makes sense.',
    metaDescription:
      'Native (Swift, Kotlin) vs cross-platform (Flutter, React Native) mobile app development compared on performance, cost, timeline and maintenance.',
    category: 'Mobile',
    tags: ['Mobile apps', 'Flutter', 'React Native', 'iOS', 'Android'],
    author: 'Intrepid Technology',
    authorRole: 'Mobile team',
    date: '2026-04-22',
    readTime: '6 min read',
    image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=1200',
    imageAlt: 'Person holding a smartphone with an app open',
    content: [
      {
        type: 'p',
        text: 'Ten years ago the choice was clear: if you wanted a quality app, you wrote it twice, once in Swift and once in Kotlin. Cross-platform frameworks have matured to the point where that is no longer the default. But native still has its place. Here is how we advise clients.',
      },
      { type: 'h2', text: 'Cross-platform: Flutter and React Native' },
      {
        type: 'p',
        text: 'One codebase produces both iOS and Android apps. Development is typically 30 to 40 percent cheaper than two native apps, features ship simultaneously on both platforms, and a single team maintains everything. Flutter renders its own UI for pixel-perfect consistency; React Native uses native components and suits teams already working in React.',
      },
      {
        type: 'ul',
        items: [
          'Best for: business apps, e-commerce, education, healthcare, social and most consumer products.',
          'Trade-offs: slightly larger app size, and occasional delays when a new OS feature needs framework support.',
        ],
      },
      { type: 'h2', text: 'Native: Swift and Kotlin' },
      {
        type: 'p',
        text: 'Native development gives direct access to every platform capability the day it is released, the best possible performance, and the smoothest integration with system features like widgets, watch apps and advanced camera or Bluetooth APIs.',
      },
      {
        type: 'ul',
        items: [
          'Best for: games, media-heavy apps, hardware-integrated products and apps where platform-specific polish is the selling point.',
          'Trade-offs: two codebases, two teams and roughly double the cost and maintenance.',
        ],
      },
      { type: 'h2', text: 'Questions we ask' },
      {
        type: 'ul',
        items: [
          'Does the app rely on hardware features or heavy graphics?',
          'Will you launch on both platforms at once?',
          'What does your budget and timeline look like for the first release?',
          'Who will maintain the app after launch, and what do they already know?',
        ],
      },
      {
        type: 'p',
        text: 'For most of our clients the answers point to Flutter, and the resulting apps are indistinguishable from native to users. Where the answers point the other way we build native, and we say so up front. Talk to our mobile team for a recommendation based on your product.',
      },
    ],
  },
];

export const getPost = (slug: string) => POSTS.find((p) => p.slug === slug);
export const CATEGORIES = Array.from(new Set(POSTS.map((p) => p.category)));

export const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
