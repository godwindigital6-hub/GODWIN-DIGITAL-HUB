export const SITE_CONFIG = {
  brandName: 'Godwin Digital Hub',
  tagline: 'Build. Market. Automate. Grow.',
  founderPhoto: '/assets/aistudio/unnamed_6ce51cf0.png',
  founderPhotoAlt: 'Godwin, Founder of Godwin Digital Hub',
  whatsappNumber: '2348143395479',
  whatsappUrl: 'https://wa.me/2348143395479',
  googleDrivePortfolioUrl:
    'https://drive.google.com/drive/folders/1nDY_U9VqCYClKCV_JstkrAJOObbZVM-r?usp=drive_link',
  socials: {
    instagram: 'https://www.instagram.com/godwi_ndigital/',
    tiktok: 'https://www.tiktok.com/@digitalsalesfix?_r=1&_t=ZS-9BLw0C15YPs',
    linkedin: 'https://www.linkedin.com/in/godwin-bright-030a98408',
  },
};

export interface ValuePillar {
  id: string;
  title: string;
  description: string;
}

export const WHY_CHOOSE_PILLARS: ValuePillar[] = [
  {
    id: 'all-in-one',
    title: 'Multiple Digital Solutions Under One Business',
    description:
      'Coordinate your website, sales funnel, digital store, marketing, automation, and video content with one cohesive strategy rather than managing disconnected freelancers.',
  },
  {
    id: 'sales-systems',
    title: 'Understanding of Digital Sales Systems',
    description:
      'Every page and asset is structured around how visitors move from first impression to enquiry, booking, or purchase.',
  },
  {
    id: 'practical-solutions',
    title: 'Practical, Business-Focused Solutions',
    description:
      'Decisions are guided by what helps your business communicate clearly, capture leads, and operate efficiently—never unnecessary technical complexity.',
  },
  {
    id: 'communication',
    title: 'Professional Communication',
    description:
      'Direct, responsive collaboration from initial discovery through delivery so you always know project status and next steps.',
  },
  {
    id: 'strategic-thinking',
    title: 'Strategic Thinking',
    description:
      'Structure, messaging, and user journeys are planned before design begins so your digital presence supports long-term goals.',
  },
  {
    id: 'tech-implementation',
    title: 'Technology-Driven Implementation',
    description:
      'Modern web platforms, creator commerce tools, and practical AI-assisted workflows applied thoughtfully where they add genuine value.',
  },
  {
    id: 'clear-processes',
    title: 'Clear Project Processes',
    description:
      'A transparent four-stage workflow—Discovery, Strategy, Development, and Delivery—keeps every project predictable and organised.',
  },
  {
    id: 'scalable-solutions',
    title: 'Scalable Digital Solutions',
    description:
      'Foundations built to expand cleanly as you add new offers, products, marketing channels, or automated workflows.',
  },
];

export interface ProcessStep {
  number: string;
  title: string;
  summary: string;
  detail: string;
}

export const HOW_IT_WORKS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Discovery',
    summary: 'Understand the business, objectives, challenges, and requirements.',
    detail:
      'We review your current online presence, target audience, core offers, and what your website or content system needs to achieve.',
  },
  {
    number: '02',
    title: 'Strategy',
    summary: 'Identify the appropriate digital solution and establish the project direction.',
    detail:
      'We map out the right platform, page hierarchy, funnel structure, integrations, or content editing scope aligned with your goals.',
  },
  {
    number: '03',
    title: 'Development',
    summary: 'Design, build, integrate, and test the required solution.',
    detail:
      'Your website, funnel, digital storefront, automation workflow, or video assets are crafted, connected, and verified across devices.',
  },
  {
    number: '04',
    title: 'Delivery',
    summary: 'Launch the project and provide the agreed handover or support.',
    detail:
      'Once approved, your project goes live with domain connections, form workflows, and clear handover guidance for ongoing use.',
  },
];
