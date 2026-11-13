import plumbingImg from '../assets/images/portfolio_plumbing_web_1794523290742.jpg';
import dentalImg from '../assets/images/portfolio_dental_web_1794523291988.jpg';
import salonImg from '../assets/images/portfolio_salon_booking_1794523292435.jpg';
import academyImg from '../assets/images/portfolio_creator_academy_1794523293070.jpg';
import videoEditingImg from '../assets/images/portfolio_video_editing_1794523292857.jpg';

export type PortfolioCategory =
  | 'All'
  | 'Websites'
  | 'Landing Pages'
  | 'Sales Funnels'
  | 'Digital Stores'
  | 'AI Projects'
  | 'Chatbots and Automation'
  | 'Video Editing';

export const PORTFOLIO_CATEGORIES: PortfolioCategory[] = [
  'All',
  'Websites',
  'Landing Pages',
  'Sales Funnels',
  'Digital Stores',
  'AI Projects',
  'Chatbots and Automation',
  'Video Editing',
];

export interface PortfolioProject {
  id: string;
  title: string;
  primaryCategory: Exclude<PortfolioCategory, 'All'>;
  categories: Exclude<PortfolioCategory, 'All'>[];
  projectTypeLabel: 'Demonstration Project' | 'Capability Showcase';
  image: string;
  imageAlt: string;
  shortDescription: string;
  overview: string;
  objective: string;
  featuresDeveloped: string[];
  toolsUsed: string[];
  livePreviewNote: string;
  featured: boolean;
}

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'plumbing-service-demo',
    title: 'Plumbing Business Website with Automated Booking Notifications',
    primaryCategory: 'Websites',
    categories: ['Websites', 'Landing Pages', 'Chatbots and Automation'],
    projectTypeLabel: 'Demonstration Project',
    image: plumbingImg,
    imageAlt: 'Laptop displaying a modern navy-and-white plumbing business website with service booking form',
    shortDescription:
      'A conversion-focused local service website demonstration featuring clear service breakdowns and automated email notifications on booking submission.',
    overview:
      'Designed as a practical blueprint for local trade and home-service businesses, this demonstration website pairs high-contrast navy-and-white trust styling with an immediate service request workflow.',
    objective:
      'Enable homeowners and property managers to understand available plumbing services quickly and submit structured repair or inspection bookings without phone tag.',
    featuresDeveloped: [
      'Responsive service-first layout tailored for mobile and desktop emergency visitors',
      'Structured booking request form capturing service type, preferred date, and contact details',
      'Automated booking email notification workflow upon form submission',
      'Clear navigation across core residential, emergency, and maintenance services',
    ],
    toolsUsed: ['Responsive Web Design', 'Form & Email Notification Automation', 'Conversion Copy Structure'],
    livePreviewNote: 'Available for inspection inside the Google Drive Portfolio Showcase.',
    featured: true,
  },
  {
    id: 'dental-clinic-demo',
    title: 'Dental Clinic Website & Patient Appointment Showcase',
    primaryCategory: 'Websites',
    categories: ['Websites', 'Landing Pages'],
    projectTypeLabel: 'Demonstration Project',
    image: dentalImg,
    imageAlt: 'Desktop monitor presenting a clean dental clinic website and appointment scheduling interface',
    shortDescription:
      'A calm, trust-oriented dental clinic website demonstration built around clear treatment categories and accessible patient appointment requests.',
    overview:
      'Healthcare and dental practices require clean visual order and clear reassurance. This demonstration site structures preventive, restorative, cosmetic, and emergency care alongside an intuitive booking pathway.',
    objective:
      'Reduce friction for prospective patients researching dental services and encourage straightforward online appointment enquiries.',
    featuresDeveloped: [
      'Clean clinical visual hierarchy with generous whitespace and readable typography',
      'Categorised dental care overview (Preventive, Restorative, Cosmetic, Emergency)',
      'Structured appointment scheduling interface and service selection flow',
      'Accessible mobile-friendly navigation and clear call-to-action placement',
    ],
    toolsUsed: ['Modern UI/UX Layout', 'SEO-Ready Semantic HTML', 'Responsive Scheduling Interface'],
    livePreviewNote: 'Available for inspection inside the Google Drive Portfolio Showcase.',
    featured: true,
  },
  {
    id: 'salon-booking-chatbot-demo',
    title: 'Salon Website with Live Appointment Booking & Assistant Chatbot',
    primaryCategory: 'Chatbots and Automation',
    categories: ['Websites', 'Chatbots and Automation', 'AI Projects'],
    projectTypeLabel: 'Demonstration Project',
    image: salonImg,
    imageAlt: 'Tablet and laptop displaying a luxury hair salon website with appointment calendar and chat assistant',
    shortDescription:
      'An upscale beauty and salon web demonstration combining live appointment slot selection with an integrated front-desk chat assistant.',
    overview:
      'Built to demonstrate how personal-care businesses can elevate their digital presence while automating routine booking questions, service selection, and scheduling requests.',
    objective:
      'Help salon visitors browse treatments, check appointment availability, and receive immediate automated guidance before booking.',
    featuresDeveloped: [
      'Editorial brand presentation showcasing salon services and atmosphere',
      'Interactive appointment scheduling view with date, time, and treatment selection',
      'Integrated website chat assistant for handling FAQs and guiding bookings',
      'Cross-device responsive design across tablet, laptop, and mobile screens',
    ],
    toolsUsed: ['Web Design & UI', 'Interactive Booking Flow', 'Website Chatbot Integration'],
    livePreviewNote: 'Available for inspection inside the Google Drive Portfolio Showcase.',
    featured: true,
  },
  {
    id: 'smart-creator-academy-demo',
    title: 'Smart Creator Academy Digital Storefront & AI Learning Assistant',
    primaryCategory: 'Digital Stores',
    categories: ['Digital Stores', 'AI Projects', 'Sales Funnels', 'Chatbots and Automation'],
    projectTypeLabel: 'Demonstration Project',
    image: academyImg,
    imageAlt: 'Widescreen display showing Smart Creator Academy digital course hub with an AI assistant sidebar',
    shortDescription:
      'A digital product and online education platform demonstration integrating organised course listings, funnel pathways, and an AI chatbot assistant.',
    overview:
      'Smart Creator Academy demonstrates how creators, coaches, and educators can present structured digital courses and toolkits alongside an intelligent assistant that helps visitors choose the right programme.',
    objective:
      'Combine organised digital product merchandising with guided AI-powered support to simplify product discovery and enrolment.',
    featuresDeveloped: [
      'Organised course and digital product hub with clear module previews',
      'Integrated AI chatbot sidebar assisting visitors with course navigation and questions',
      'Structured sales funnel layout guiding visitors from discovery to enrolment',
      'Cohesive navy-and-gold digital academy aesthetic optimised for clarity',
    ],
    toolsUsed: ['Google AI Studio', 'Digital Storefront Architecture', 'AI Chatbot Integration', 'Sales Funnel Structure'],
    livePreviewNote: 'Available for inspection inside the Google Drive Portfolio Showcase.',
    featured: true,
  },
  {
    id: 'short-form-video-production-showcase',
    title: 'Short-Form Social Media Video Editing & Repurposing Showcase',
    primaryCategory: 'Video Editing',
    categories: ['Video Editing'],
    projectTypeLabel: 'Capability Showcase',
    image: videoEditingImg,
    imageAlt: 'Editing monitor showing a vertical Reels and TikTok video timeline with dynamic captions and audio waveforms',
    shortDescription:
      'Retention-focused short-form editing workflow for Instagram Reels, TikTok, and YouTube Shorts with captions, pacing, audio layering, and motion text.',
    overview:
      'A practical demonstration of how raw talking-head and promotional clips are transformed into structured, platform-native short-form videos for creators, coaches, and brands.',
    objective:
      'Increase watchability and message clarity across vertical social platforms using tight trimming, readable subtitles, and purposeful audio-visual pacing.',
    featuresDeveloped: [
      'Tight hook trimming, narrative sequencing, and punchline pacing',
      'Synchronised dynamic captions and animated text callouts for mobile viewing',
      'Balanced background audio and targeted sound effects integration',
      'Multi-platform aspect ratio formatting and content repurposing for Reels, TikTok, and Shorts',
    ],
    toolsUsed: ['CapCut', 'Canva', 'Short-Form Pacing & Subtitle Design'],
    livePreviewNote: 'Sample edits and clips are accessible in the Google Drive Portfolio Showcase.',
    featured: true,
  },
];
