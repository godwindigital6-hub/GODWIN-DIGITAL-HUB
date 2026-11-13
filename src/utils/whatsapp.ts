import { SITE_CONFIG } from '../data/siteConfig';

export interface ProjectEnquiryValues {
  fullName: string;
  email: string;
  businessName: string;
  serviceRequired: string;
  projectBudget: string;
  expectedTimeline: string;
  projectDescription: string;
  currentWebsiteUrl: string;
}

export interface WebsiteAuditValues {
  fullName: string;
  email: string;
  businessName: string;
  websiteUrl: string;
  businessIndustry: string;
  assessmentFocus: string[];
  biggestChallenge: string;
  additionalInfo: string;
}

export function buildProjectEnquiryWhatsAppUrl(values: ProjectEnquiryValues): string {
  const lines: string[] = [
    'Hello Godwin Digital Hub,',
    '',
    'I have just submitted a project enquiry through your website.',
    '',
    'Here are my project details:',
    '',
    `Full Name: ${values.fullName.trim()}`,
    `Email Address: ${values.email.trim()}`,
  ];

  if (values.businessName.trim()) {
    lines.push(`Business/Brand Name: ${values.businessName.trim()}`);
  }

  lines.push(`Service Required: ${values.serviceRequired.trim()}`);

  if (values.projectBudget.trim()) {
    lines.push(`Project Budget: ${values.projectBudget.trim()}`);
  }

  if (values.expectedTimeline.trim()) {
    lines.push(`Expected Timeline: ${values.expectedTimeline.trim()}`);
  }

  lines.push('', 'Project Description:', values.projectDescription.trim());

  if (values.currentWebsiteUrl.trim()) {
    lines.push('', `Website URL: ${values.currentWebsiteUrl.trim()}`);
  }

  lines.push('', 'I would like to discuss my project further.');

  const message = lines.join('\n');
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function buildWebsiteAuditWhatsAppUrl(values: WebsiteAuditValues): string {
  const lines: string[] = [
    'Hello Godwin Digital Hub,',
    '',
    'I have just submitted a request for a free website audit through your website.',
    '',
    'Here are my details:',
    '',
    `Full Name: ${values.fullName.trim()}`,
    `Email Address: ${values.email.trim()}`,
  ];

  if (values.businessName.trim()) {
    lines.push(`Business Name: ${values.businessName.trim()}`);
  }

  lines.push(`Website URL: ${values.websiteUrl.trim()}`);

  if (values.businessIndustry.trim()) {
    lines.push(`Industry: ${values.businessIndustry.trim()}`);
  }

  if (values.assessmentFocus.length > 0) {
    lines.push(`Assessment Focus: ${values.assessmentFocus.join(', ')}`);
  }

  if (values.biggestChallenge.trim()) {
    lines.push('', 'Biggest Website Challenge:', values.biggestChallenge.trim());
  }

  if (values.additionalInfo.trim()) {
    lines.push('', 'Additional Information:', values.additionalInfo.trim());
  }

  lines.push('', 'I would like to proceed with my free website audit request.');

  const message = lines.join('\n');
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
