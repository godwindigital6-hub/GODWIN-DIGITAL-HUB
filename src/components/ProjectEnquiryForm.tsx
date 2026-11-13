import { useEffect, useState, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AlertCircle, ArrowRight, Loader2, ShieldCheck } from 'lucide-react';
import { buildProjectEnquiryWhatsAppUrl } from '../utils/whatsapp';

const SERVICE_OPTIONS = [
  'Website Design and Development',
  'Sales Funnel Development',
  'Landing Page Design',
  'Digital Store Setup',
  'Digital Marketing',
  'AI Website or Web Application',
  'AI Chatbot',
  'Automation',
  'Video Editing and Content Production',
  'Domain Connection',
  'Other',
];

const BUDGET_OPTIONS = [
  'Under $250',
  '$250 – $500',
  '$500 – $1,000',
  '$1,000 – $2,500',
  '$2,500+',
  'Not sure yet / Prefer to discuss',
];

const TIMELINE_OPTIONS = [
  'As soon as possible',
  'Within 2 weeks',
  'Within 1 month',
  '1 – 2 months',
  'Flexible',
];

interface ProjectEnquiryFormProps {
  initialService?: string;
}

export function ProjectEnquiryForm({ initialService = '' }: ProjectEnquiryFormProps) {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [serviceRequired, setServiceRequired] = useState(
    SERVICE_OPTIONS.includes(initialService) ? initialService : ''
  );
  const [projectBudget, setProjectBudget] = useState('');
  const [expectedTimeline, setExpectedTimeline] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [currentWebsiteUrl, setCurrentWebsiteUrl] = useState('');
  const [botField, setBotField] = useState('');

  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialService && SERVICE_OPTIONS.includes(initialService)) {
      setServiceRequired(initialService);
    }
  }, [initialService]);

  const validate = (): boolean => {
    const errors: Record<string, string> = {};

    if (!fullName.trim()) {
      errors.fullName = 'Please enter your full name.';
    }
    if (!email.trim()) {
      errors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      errors.email = 'Please enter a valid email address.';
    }
    if (!serviceRequired) {
      errors.serviceRequired = 'Please select the service you require.';
    }
    if (!projectDescription.trim()) {
      errors.projectDescription = 'Please describe your project goals and requirements.';
    }
    if (currentWebsiteUrl.trim()) {
      try {
        const parsed = new URL(currentWebsiteUrl.trim());
        if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') {
          errors.currentWebsiteUrl = 'URL must start with https:// or http://';
        }
      } catch {
        errors.currentWebsiteUrl = 'Please enter a valid URL (e.g., https://example.com).';
      }
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    const payload = new URLSearchParams({
      'form-name': 'project-enquiry',
      'bot-field': botField,
      'full-name': fullName.trim(),
      email: email.trim(),
      'business-name': businessName.trim(),
      'service-required': serviceRequired,
      'project-budget': projectBudget,
      'expected-timeline': expectedTimeline,
      'project-description': projectDescription.trim(),
      'current-website-url': currentWebsiteUrl.trim(),
    });

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: payload.toString(),
      });

      if (!response.ok) {
        throw new Error(`Submission failed with status ${response.status}`);
      }

      const whatsappUrl = buildProjectEnquiryWhatsAppUrl({
        fullName,
        email,
        businessName,
        serviceRequired,
        projectBudget,
        expectedTimeline,
        projectDescription,
        currentWebsiteUrl,
      });

      const confirmationPayload = {
        submitted: true,
        formType: 'project-enquiry' as const,
        submitterName: fullName.trim(),
        serviceRequired,
        whatsappUrl,
        submittedAt: new Date().toISOString(),
      };

      sessionStorage.setItem('gdh_last_submission', JSON.stringify(confirmationPayload));

      navigate('/thank-you', {
        state: confirmationPayload,
      });
    } catch {
      setSubmitError(
        'We could not confirm your form submission right now. Your details have been preserved below—please check your connection and try submitting again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      id="project-enquiry-form"
      name="project-enquiry"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      noValidate
      className="space-y-6"
    >
      <input type="hidden" name="form-name" value="project-enquiry" />
      <div className="hidden" aria-hidden="true">
        <label>
          Do not fill this out if you are human:
          <input
            name="bot-field"
            value={botField}
            onChange={(e) => setBotField(e.target.value)}
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </div>

      {submitError && (
        <div
          role="alert"
          className="flex items-start gap-3 p-4 rounded-xl bg-red-50 border border-red-200 text-red-900 text-sm"
        >
          <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" aria-hidden="true" />
          <p>{submitError}</p>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <label htmlFor="pe-full-name" className="block text-sm font-semibold text-[#0B192C]">
            Full Name <span className="text-red-600" aria-hidden="true">*</span>
          </label>
          <input
            id="pe-full-name"
            name="full-name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your full name"
            value={fullName}
            onChange={(e) => {
              setFullName(e.target.value);
              if (fieldErrors.fullName) setFieldErrors((p) => ({ ...p, fullName: '' }));
            }}
            aria-invalid={Boolean(fieldErrors.fullName)}
            className="w-full px-3.5 py-2.5 text-sm text-[#0B192C] bg-white border border-slate-300 rounded-lg focus:border-[#0B192C] focus:ring-2 focus:ring-[#C89B3C]/30 outline-none transition-colors"
          />
          {fieldErrors.fullName && (
            <p className="text-xs text-red-600 font-medium">{fieldErrors.fullName}</p>
          )}
        </div>

        <div className="space-y-1.5">
          <label htmlFor="pe-email" className="block text-sm font-semibold text-[#0B192C]">
            Email Address <span className="text-red-600" aria-hidden="true">*</span>
          </label>
          <input
            id="pe-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@company.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (fieldErrors.email) setFieldErrors((p) => ({ ...p, email: '' }));
            }}
            aria-invalid={Boolean(fieldErrors.email)}
            className="w-full px-3.5 py-2.5 text-sm text-[#0B192C] bg-white border border-slate-300 rounded-lg focus:border-[#0B192C] focus:ring-2 focus:ring-[#C89B3C]/30 outline-none transition-colors"
          />
          {fieldErrors.email && (
            <p className="text-xs text-red-600 font-medium">{fieldErrors.email}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <label htmlFor="pe-business-name" className="block text-sm font-semibold text-[#0B192C]">
            Business or Brand Name <span className="text-xs font-normal text-slate-500">(Optional)</span>
          </label>
          <input
            id="pe-business-name"
            name="business-name"
            type="text"
            autoComplete="organization"
            placeholder="Your business or brand"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            className="w-full px-3.5 py-2.5 text-sm text-[#0B192C] bg-white border border-slate-300 rounded-lg focus:border-[#0B192C] focus:ring-2 focus:ring-[#C89B3C]/30 outline-none transition-colors"
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="pe-service-required" className="block text-sm font-semibold text-[#0B192C]">
            Service Required <span className="text-red-600" aria-hidden="true">*</span>
          </label>
          <select
            id="pe-service-required"
            name="service-required"
            required
            value={serviceRequired}
            onChange={(e) => {
              setServiceRequired(e.target.value);
              if (fieldErrors.serviceRequired) setFieldErrors((p) => ({ ...p, serviceRequired: '' }));
            }}
            aria-invalid={Boolean(fieldErrors.serviceRequired)}
            className="w-full px-3.5 py-2.5 text-sm text-[#0B192C] bg-white border border-slate-300 rounded-lg focus:border-[#0B192C] focus:ring-2 focus:ring-[#C89B3C]/30 outline-none transition-colors"
          >
            <option value="">Select a service...</option>
            {SERVICE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {fieldErrors.serviceRequired && (
            <p className="text-xs text-red-600 font-medium">{fieldErrors.serviceRequired}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <label htmlFor="pe-budget" className="block text-sm font-semibold text-[#0B192C]">
            Project Budget <span className="text-xs font-normal text-slate-500">(Optional)</span>
          </label>
          <select
            id="pe-budget"
            name="project-budget"
            value={projectBudget}
            onChange={(e) => setProjectBudget(e.target.value)}
            className="w-full px-3.5 py-2.5 text-sm text-[#0B192C] bg-white border border-slate-300 rounded-lg focus:border-[#0B192C] focus:ring-2 focus:ring-[#C89B3C]/30 outline-none transition-colors"
          >
            <option value="">Select budget range...</option>
            {BUDGET_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-1.5">
          <label htmlFor="pe-timeline" className="block text-sm font-semibold text-[#0B192C]">
            Expected Timeline <span className="text-xs font-normal text-slate-500">(Optional)</span>
          </label>
          <select
            id="pe-timeline"
            name="expected-timeline"
            value={expectedTimeline}
            onChange={(e) => setExpectedTimeline(e.target.value)}
            className="w-full px-3.5 py-2.5 text-sm text-[#0B192C] bg-white border border-slate-300 rounded-lg focus:border-[#0B192C] focus:ring-2 focus:ring-[#C89B3C]/30 outline-none transition-colors"
          >
            <option value="">Select expected timeline...</option>
            {TIMELINE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="pe-website-url" className="block text-sm font-semibold text-[#0B192C]">
          Current Website URL <span className="text-xs font-normal text-slate-500">(Optional)</span>
        </label>
        <input
          id="pe-website-url"
          name="current-website-url"
          type="url"
          placeholder="https://yourwebsite.com"
          value={currentWebsiteUrl}
          onChange={(e) => {
            setCurrentWebsiteUrl(e.target.value);
            if (fieldErrors.currentWebsiteUrl) setFieldErrors((p) => ({ ...p, currentWebsiteUrl: '' }));
          }}
          aria-invalid={Boolean(fieldErrors.currentWebsiteUrl)}
          className="w-full px-3.5 py-2.5 text-sm text-[#0B192C] bg-white border border-slate-300 rounded-lg focus:border-[#0B192C] focus:ring-2 focus:ring-[#C89B3C]/30 outline-none transition-colors"
        />
        {fieldErrors.currentWebsiteUrl && (
          <p className="text-xs text-red-600 font-medium">{fieldErrors.currentWebsiteUrl}</p>
        )}
      </div>

      <div className="space-y-1.5">
        <label htmlFor="pe-description" className="block text-sm font-semibold text-[#0B192C]">
          Project Description <span className="text-red-600" aria-hidden="true">*</span>
        </label>
        <textarea
          id="pe-description"
          name="project-description"
          rows={5}
          required
          placeholder="Share what you want to build, your target audience, key features or video goals, and any platforms you prefer."
          value={projectDescription}
          onChange={(e) => {
            setProjectDescription(e.target.value);
            if (fieldErrors.projectDescription) setFieldErrors((p) => ({ ...p, projectDescription: '' }));
          }}
          aria-invalid={Boolean(fieldErrors.projectDescription)}
          className="w-full px-3.5 py-2.5 text-sm text-[#0B192C] bg-white border border-slate-300 rounded-lg focus:border-[#0B192C] focus:ring-2 focus:ring-[#C89B3C]/30 outline-none transition-colors"
        />
        {fieldErrors.projectDescription && (
          <p className="text-xs text-red-600 font-medium">{fieldErrors.projectDescription}</p>
        )}
      </div>

      <div className="pt-2 space-y-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm font-bold tracking-wide text-[#0B192C] bg-[#C89B3C] hover:bg-[#D9B15B] disabled:opacity-60 disabled:cursor-not-allowed rounded-lg transition-colors"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
              <span>SUBMITTING PROJECT ENQUIRY...</span>
            </>
          ) : (
            <>
              <span>SUBMIT PROJECT ENQUIRY</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </>
          )}
        </button>

        <p className="flex items-start gap-2 text-xs text-slate-500 leading-relaxed">
          <ShieldCheck className="w-4 h-4 text-[#9E761F] shrink-0 mt-0.5" aria-hidden="true" />
          <span>
            Your enquiry details are used solely to review your project scope and respond to you. Read our{' '}
            <Link to="/privacy-policy" className="underline hover:text-[#0B192C]">
              Privacy Policy
            </Link>
            .
          </span>
        </p>
      </div>
    </form>
  );
}
