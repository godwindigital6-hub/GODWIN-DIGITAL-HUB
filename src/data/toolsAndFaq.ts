export interface ToolGroup {
  category: string;
  description: string;
  tools: {
    name: string;
    proficiencyNote: 'Core Focus' | 'Applied Experience' | 'Developing Experience';
  }[];
}

export const TOOL_GROUPS: ToolGroup[] = [
  {
    category: 'Website and Deployment',
    description: 'Platforms used to design, build, deploy, and connect responsive websites and web applications.',
    tools: [
      { name: 'Wix', proficiencyNote: 'Core Focus' },
      { name: 'Shopify', proficiencyNote: 'Applied Experience' },
      { name: 'Netlify', proficiencyNote: 'Core Focus' },
      { name: 'Google AI Studio', proficiencyNote: 'Core Focus' },
    ],
  },
  {
    category: 'Sales and Digital Stores',
    description: 'Funnels, landing pages, and creator storefronts for selling digital products and services.',
    tools: [
      { name: 'Systeme.io', proficiencyNote: 'Core Focus' },
      { name: 'ClickFunnels', proficiencyNote: 'Applied Experience' },
      { name: 'Gumroad', proficiencyNote: 'Core Focus' },
      { name: 'Payhip', proficiencyNote: 'Core Focus' },
      { name: 'Stan Store', proficiencyNote: 'Applied Experience' },
      { name: 'Beacons', proficiencyNote: 'Applied Experience' },
      { name: 'Whop', proficiencyNote: 'Developing Experience' },
    ],
  },
  {
    category: 'Marketing and CRM',
    description: 'Tools supporting email marketing, audience nurturing, and structured lead management.',
    tools: [
      { name: 'MailerLite', proficiencyNote: 'Core Focus' },
      { name: 'HubSpot', proficiencyNote: 'Developing Experience' },
      { name: 'GoHighLevel', proficiencyNote: 'Developing Experience' },
    ],
  },
  {
    category: 'Automation and AI',
    description: 'Workflow bridges, conversational bots, and practical AI-assisted business solutions.',
    tools: [
      { name: 'Google AI Studio', proficiencyNote: 'Core Focus' },
      { name: 'Zapier', proficiencyNote: 'Applied Experience' },
      { name: 'ManyChat', proficiencyNote: 'Applied Experience' },
      { name: 'n8n', proficiencyNote: 'Developing Experience' },
    ],
  },
  {
    category: 'Content and Creative Tools',
    description: 'Creative suites for short-form video editing, captions, social graphics, and visual assets.',
    tools: [
      { name: 'CapCut', proficiencyNote: 'Core Focus' },
      { name: 'Canva', proficiencyNote: 'Core Focus' },
    ],
  },
];

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'services-offered',
    question: 'What services does Godwin Digital Hub offer?',
    answer:
      'Godwin Digital Hub offers six core service categories: Website Design and Development, Sales Funnels and Landing Pages, Digital Store Setup, Digital Marketing, AI Solutions and Automation, and Video Editing and Content Production.',
  },
  {
    id: 'who-you-work-with',
    question: 'Who do you work with?',
    answer:
      'We work with entrepreneurs, content creators, coaches, educators, service businesses, and growing organisations looking to build a stronger online presence, launch digital offers, or streamline how they capture enquiries.',
  },
  {
    id: 'custom-website',
    question: 'Can I request a custom website?',
    answer:
      'Yes. Whether you need a custom business website, a landing page, a full redesign, an AI-assisted web application, or a build on Wix or Shopify, the structure and features are tailored to your business requirements.',
  },
  {
    id: 'sales-funnels',
    question: 'Do you build sales funnels?',
    answer:
      'Yes. We design and structure lead-generation funnels, sales pages, checkout flows, and email integrations using dedicated funnel platforms such as Systeme.io and ClickFunnels.',
  },
  {
    id: 'digital-stores',
    question: 'Can you set up digital stores?',
    answer:
      'Yes. We configure and organise digital product storefronts on Gumroad, Payhip, Stan Store, Beacons, and Whop—including product pages, store landing pages, email integration, and domain connection.',
  },
  {
    id: 'video-editing',
    question: 'Do you offer video editing?',
    answer:
      'Yes. Video Editing and Content Production is one of our core services. We edit promotional videos, marketing clips, and social media videos with clean pacing, subtitles, audio balancing, and visual text elements.',
  },
  {
    id: 'short-form-videos',
    question: 'Can you edit short-form social media videos?',
    answer:
      'Yes. We edit vertical short-form content specifically formatted for Instagram Reels, TikTok, and YouTube Shorts, including captions, sound effects, transitions, text animations, and repurposing from longer footage.',
  },
  {
    id: 'ai-chatbots',
    question: 'Do you develop AI chatbots?',
    answer:
      'Yes. We build practical AI chatbots and website chat integrations, as well as ManyChat and automated enquiry workflows designed to answer common visitor questions and guide users toward booking or contact.',
  },
  {
    id: 'connect-domains',
    question: 'Can you connect domains?',
    answer:
      'Yes. We handle domain connection and DNS configuration for websites, landing pages, funnels, and digital stores so your brand runs cleanly on your custom domain.',
  },
  {
    id: 'free-website-audit',
    question: 'Can I request a free website audit?',
    answer:
      'Yes. You can submit the dedicated Free Website Audit Request form on our Contact page with your website URL and areas of focus. We review your site’s design, usability, mobile experience, performance, SEO foundations, and conversion journey.',
  },
  {
    id: 'start-a-project',
    question: 'How do I start a project?',
    answer:
      'Complete the Project Enquiry form on the Contact / Start a Project page with your goals, required service, and project description. Once submitted, you can also continue directly to WhatsApp with your prefilled project summary.',
  },
  {
    id: 'project-process',
    question: 'How does your project process work?',
    answer:
      'Every project follows four clear stages: Discovery (understanding your goals and requirements), Strategy (mapping the right solution and direction), Development (designing, building, integrating, and testing), and Delivery (launching and completing the agreed handover).',
  },
];
