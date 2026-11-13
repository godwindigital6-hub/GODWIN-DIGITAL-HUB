export interface ServiceCategory {
  id: string;
  anchor: string;
  number: string;
  title: string;
  shortTitle: string;
  dropdownValue: string;
  iconName: 'globe' | 'funnel' | 'store' | 'megaphone' | 'bot' | 'video';
  shortDescription: string;
  whatItInvolves: string;
  whoItIsFor: string[];
  problemsSolved: string[];
  includes: string[];
  businessValue: string;
  ctaLabel: string;
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'website-design',
    anchor: 'website-design',
    number: '01',
    title: 'Website Design and Development',
    shortTitle: 'Websites & Web Apps',
    dropdownValue: 'Website Design and Development',
    iconName: 'globe',
    shortDescription:
      'Custom business websites, landing pages, redesigns, and AI-assisted web applications built to establish credibility and generate enquiries.',
    whatItInvolves:
      'Designing, structuring, building, and deploying responsive websites and web applications tailored to your business goals—from clean multi-page company sites and Wix or Shopify builds to AI-assisted web applications and custom domain setup.',
    whoItIsFor: [
      'Service businesses needing a trustworthy online presence',
      'Entrepreneurs launching a new brand or digital offer',
      'Established businesses outgrowing an outdated website',
      'Founders seeking interactive, AI-powered web tools',
    ],
    problemsSolved: [
      'Outdated or slow websites that fail to inspire visitor confidence',
      'Poor mobile layouts that frustrate visitors on phones and tablets',
      'Unclear messaging where visitors cannot tell what you offer or how to enquire',
      'Technical friction around hosting deployment, domain connection, and ongoing updates',
    ],
    includes: [
      'Business website design & professional website development',
      'Landing page design & complete website redesigns',
      'Wix website design & Shopify website design',
      'AI-assisted website development & AI-powered web applications',
      'Website deployment, domain connection, and ongoing improvements/updates',
      'Shopify store migration (available as a developing service)',
    ],
    businessValue:
      'Gives prospective clients a clear, credible digital storefront that works reliably on every screen size and turns visitors into structured project enquiries.',
    ctaLabel: 'Request Website Design',
  },
  {
    id: 'sales-funnels',
    anchor: 'sales-funnels',
    number: '02',
    title: 'Sales Funnels and Landing Pages',
    shortTitle: 'Sales Funnels',
    dropdownValue: 'Sales Funnel Development',
    iconName: 'funnel',
    shortDescription:
      'Focused landing pages, sales pages, checkout flows, and email-integrated funnels that guide prospects through a structured buying journey.',
    whatItInvolves:
      'Architecting dedicated conversion pages and multi-step funnel journeys—connecting opt-in pages, sales pages, checkout steps, and automated email follow-ups on platforms such as Systeme.io and ClickFunnels.',
    whoItIsFor: [
      'Coaches and consultants selling programmes or discovery calls',
      'Creators launching courses, workshops, or digital bundles',
      'Businesses running traffic campaigns that need focused conversion pages',
      'Entrepreneurs replacing scattered links with an organised buying path',
    ],
    problemsSolved: [
      'Sending paid or organic traffic to cluttered homepages with too many distractions',
      'Disconnected opt-in forms, checkout links, and email sequences',
      'Drop-offs caused by confusing page hierarchy or weak calls to action',
      'Lack of a structured system to capture leads before they are ready to buy',
    ],
    includes: [
      'Sales funnel development & lead-generation funnel structure',
      'Dedicated landing page development & high-clarity sales page design',
      'Systeme.io funnel setup & ClickFunnels funnel setup',
      'Checkout integration & digital product sales systems',
      'Email marketing integration for automated subscriber onboarding',
    ],
    businessValue:
      'Guides potential customers step by step from initial interest to lead capture or checkout, helping convert attention into measurable enquiries and sales.',
    ctaLabel: 'Build a Sales Funnel',
  },
  {
    id: 'digital-stores',
    anchor: 'digital-stores',
    number: '03',
    title: 'Digital Store Setup',
    shortTitle: 'Digital Stores',
    dropdownValue: 'Digital Store Setup',
    iconName: 'store',
    shortDescription:
      'Complete digital storefront setup and product organisation on Gumroad, Payhip, Stan Store, Beacons, and Whop for creators and educators.',
    whatItInvolves:
      'Setting up, branding, structuring, and connecting digital product storefronts so creators, coaches, and educators can present and deliver ebooks, templates, memberships, or courses cleanly.',
    whoItIsFor: [
      'Digital creators monetising templates, guides, and toolkits',
      'Coaches and educators packaging workshops, courses, or memberships',
      'Entrepreneurs launching lightweight digital product storefronts quickly',
      'Personal brands unifying their link-in-bio store with custom domains',
    ],
    problemsSolved: [
      'Unfinished or disorganised storefronts that undervalue your digital products',
      'Confusing product listings that leave buyers unsure what is included',
      'Unconnected custom domains or missing email list capture after checkout',
      'Hours lost wrestling with platform settings instead of creating content',
    ],
    includes: [
      'Gumroad, Payhip, Stan Store, Beacons, and Whop store setup',
      'Digital product storefronts & dedicated store landing pages',
      'Product page configuration & clean digital product organisation',
      'Custom domain connection & email marketing integration',
    ],
    businessValue:
      'Launches an organised, trustworthy digital storefront that makes buying your products straightforward and captures customer emails automatically.',
    ctaLabel: 'Set Up My Digital Store',
  },
  {
    id: 'digital-marketing',
    anchor: 'digital-marketing',
    number: '04',
    title: 'Digital Marketing',
    shortTitle: 'Digital Marketing',
    dropdownValue: 'Digital Marketing',
    iconName: 'megaphone',
    shortDescription:
      'Practical SEO foundations, social media management, content planning, email marketing, and lead-generation strategy.',
    whatItInvolves:
      'Developing coordinated digital marketing foundations—aligning search engine optimisation, social media strategy, structured content calendars, email marketing workflows, and lead generation around your business offers.',
    whoItIsFor: [
      'Small and growing businesses looking to strengthen online visibility',
      'Creators and founders building consistent audience communication',
      'Brands needing structured content planning across key social channels',
      'Organisations looking to connect website traffic with email follow-up',
    ],
    problemsSolved: [
      'Inconsistent posting without a clear content or lead-generation purpose',
      'Websites missing essential on-page SEO foundations and clear search alignment',
      'Relying solely on social algorithms without building an owned email list',
      'Disconnected marketing efforts that do not point back to a conversion path',
    ],
    includes: [
      'Digital marketing strategy & lead generation alignment',
      'Social media management, social media strategy & content planning',
      'Content marketing support tailored to your audience',
      'On-page search engine optimisation (SEO) foundations',
      'Email marketing setup and subscriber communication workflows',
    ],
    businessValue:
      'Strengthens visibility, supports consistent audience engagement, and builds reliable pathways that move prospects toward your website and offers.',
    ctaLabel: 'Plan Digital Marketing',
  },
  {
    id: 'ai-automation',
    anchor: 'ai-automation',
    number: '05',
    title: 'AI Solutions and Automation',
    shortTitle: 'AI & Automation',
    dropdownValue: 'AI Website or Web Application',
    iconName: 'bot',
    shortDescription:
      'Practical AI-powered websites, web applications, website chatbots, ManyChat flows, and Zapier/email notification automations.',
    whatItInvolves:
      'Integrating practical AI tools and workflow automations into your digital presence—including AI-assisted websites and web apps, website chatbot integration, ManyChat conversational flows, booking email notifications, and Zapier application bridges.',
    whoItIsFor: [
      'Service businesses wanting instant visitor answers and booking routing',
      'Creators and educators offering interactive AI-assisted learning portals',
      'Teams tired of manually copying enquiry details between forms and tools',
      'Businesses exploring practical WhatsApp and chatbot engagement workflows',
    ],
    problemsSolved: [
      'Slow enquiry responses when visitors ask common questions outside business hours',
      'Manual, repetitive administrative tasks between forms, spreadsheets, and email',
      'Static websites that do not guide visitors interactively toward booking',
      'Uncertainty over how to apply AI practically without unnecessary complexity',
    ],
    includes: [
      'AI-powered websites & AI-assisted web applications',
      'AI chatbot development & website chatbot integration',
      'Zapier integrations, workflow automation & application integrations',
      'ManyChat chatbot development & practical WhatsApp automation workflows',
      'Automated booking and enquiry email notification setups',
    ],
    businessValue:
      'Helps businesses respond faster, reduce manual follow-up friction, and deploy grounded AI and automation capabilities scoped transparently to your operational needs.',
    ctaLabel: 'Explore AI & Automation',
  },
  {
    id: 'video-editing',
    anchor: 'video-editing',
    number: '06',
    title: 'Video Editing and Content Production',
    shortTitle: 'Video Editing',
    dropdownValue: 'Video Editing and Content Production',
    iconName: 'video',
    shortDescription:
      'Engaging short-form social media video editing for Reels, TikTok, and YouTube Shorts, plus promotional marketing videos.',
    whatItInvolves:
      'Transforming your raw talking-head, product, or promotional footage into structured, engaging video content—complete with clean sequencing, pacing, subtitles, text animations, sound effects, and platform-ready repurposing.',
    whoItIsFor: [
      'Content creators and personal brands publishing regularly',
      'Coaches and educators sharing tips, frameworks, and insights',
      'Entrepreneurs and business owners marketing products or services',
      'Social media marketers needing reliable short-form edits',
    ],
    problemsSolved: [
      'Raw video clips sitting unused because editing takes too much time',
      'Unpolished pacing that loses viewer attention in the first few seconds',
      'Missing captions, sound cues, and visual emphasis needed for silent mobile viewing',
      'Effort wasted filming separately when existing footage can be repurposed across platforms',
    ],
    includes: [
      'Short-form & social media video editing (Instagram Reels, TikTok, YouTube Shorts)',
      'Promotional video editing & marketing video editing',
      'Captions, subtitles, text animations & clean motion elements',
      'Video trimming, sequencing, punchline pacing & storytelling flow',
      'Sound effects integration, background audio integration & transitions',
      'Content repurposing formatted for multiple social media platforms',
    ],
    businessValue:
      'Turns raw recorded footage into clean, cohesive, retention-focused video assets ready to publish consistently across modern short-form channels.',
    ctaLabel: 'REQUEST VIDEO EDITING SERVICES',
  },
];
