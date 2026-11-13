import { useState, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AlertCircle, ArrowRight, Check, Loader2, ShieldCheck } from 'lucide-react';
import { buildWebsiteAuditWhatsAppUrl } from '../utils/whatsapp';

const ASSESSMENT_FOCUS_OPTIONS = [
  'Website Design',
  'User Experience',
  'Mobile Responsiveness',
  'Website Performance',
  'SEO Foundations',
  'Conversion Journey',
  'Overall Website Review',
];

export function WebsiteAuditForm() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [businessIndustry, setBusinessIndustry] = useState('');
  const [assessmentFocus, setAssessmentFocus] = useState<string[]>(['Overall Website Review']);
  const [biggestChallenge, setBiggestChallenge] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [botField, setBotField] = useState('');

  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleFocusOption = (option: string) => {
    setAssessmentFocus((prev) =>
      prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option]
    );
  };

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
    if (!websiteUrl.trim()) {
      errors.websiteUrl = 'Please enter the website URL you would like audited.';
    } else {
      try {
        const parsed = new URL(websiteUrl.trim());
        if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') {
          errors.websiteUrl = 'Website URL must start with https:// or http://';
        }
      } catch {
        errors.websiteUrl = 'Please enter a valid URL (e.g., https://yourbusiness.com).';
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
      'form-name': 'website-audit-request',
      'bot-field': botField,
      'full-name': fullName.trim(),
      email: email.trim(),
      'business-name': businessName.trim(),
      'website-url': websiteUrl.trim(),
      'business-industry': businessIndustry.trim(),
      'assessment-focus': assessmentFocus.join(', '),
      'biggest-challenge': biggestChallenge.trim(),
      'additional-info': additionalInfo.trim(),
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

      const whatsappUrl = buildWebsiteAuditWhatsAppUrl({
        fullName,
        email,
        businessName,
        websiteUrl,
        businessIndustry,
        assessmentFocus,
        biggestChallenge,
        additionalInfo,
      });

      const confirmationPayload = {
        submitted: true,
        formType: 'website-audit-request' as const,
        submitterName: fullName.trim(),
        websiteUrl: websiteUrl.trim(),
        whatsappUrl,
        submittedAt: new Date().toISOString(),
      };

      sessionStorage.setItem('gdh_last_submission', JSON.stringify(confirmationPayload));

      navigate('/thank-you', {
        state: confirmationPayload,
      });
    } catch {
      setSubmitError(
        'We could not confirm your website audit request right now. Your details have been preserved—please check your connection and try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      id="website-audit-request-form"
      name="website-audit-request"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      noValidate
      className="space-y-6"
    >
      <input type="hidden" name="form-name" value="website-audit-request" />
      <input type="hidden" name="assessment-focus" value={assessmentFocus.join(', ')} />
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
          <label htmlFor="wa-full-name" className="block text-sm font-semibold text-[#0B192C]">
            Full Name <span className="text-red-600" aria-hidden="true">*</span>
          </label>
          <input
            id="wa-full-name"
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
          <label htmlFor="wa-email" className="block text-sm font-semibold text-[#0B192C]">
            Email Address <span className="text-red-600" aria-hidden="true">*</span>
          </label>
          <input
            id="wa-email"
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
          <label htmlFor="wa-business-name" className="block text-sm font-semibold text-[#0B192C]">
            Business Name <span className="text-xs font-normal text-slate-500">(Optional)</span>
          </label>
          <input
            id="wa-business-name"
            name="business-name"
            type="text"
            autoComplete="organization"
            placeholder="Your business name"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            className="w-full px-3.5 py-2.5 text-sm text-[#0B192C] bg-white border border-slate-300 rounded-lg focus:border-[#0B192C] focus:ring-2 focus:ring-[#C89B3C]/30 outline-none transition-colors"
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="wa-industry" className="block text-sm font-semibold text-[#0B192C]">
            Business Industry <span className="text-xs font-normal text-slate-500">(Optional)</span>
          </label>
          <input
            id="wa-industry"
            name="business-industry"
            type="text"
            placeholder="e.g., Coaching, Healthcare, E-commerce, Local Services"
            value={businessIndustry}
            onChange={(e) => setBusinessIndustry(e.target.value)}
            className="w-full px-3.5 py-2.5 text-sm text-[#0B192C] bg-white border border-slate-300 rounded-lg focus:border-[#0B192C] focus:ring-2 focus:ring-[#C89B3C]/30 outline-none transition-colors"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="wa-website-url" className="block text-sm font-semibold text-[#0B192C]">
          Website URL <span className="text-red-600" aria-hidden="true">*</span>
        </label>
        <input
          id="wa-website-url"
          name="website-url"
          type="url"
          required
          placeholder="https://yourwebsite.com"
          value={websiteUrl}
          onChange={(e) => {
            setWebsiteUrl(e.target.value);
            if (fieldErrors.websiteUrl) setFieldErrors((p) => ({ ...p, websiteUrl: '' }));
          }}
          aria-invalid={Boolean(fieldErrors.websiteUrl)}
          className="w-full px-3.5 py-2.5 text-sm text-[#0B192C] bg-white border border-slate-300 rounded-lg focus:border-[#0B192C] focus:ring-2 focus:ring-[#C89B3C]/30 outline-none transition-colors"
        />
        {fieldErrors.websiteUrl && (
          <p className="text-xs text-red-600 font-medium">{fieldErrors.websiteUrl}</p>
        )}
      </div>

      <fieldset className="space-y-2.5">
        <legend className="text-sm font-semibold text-[#0B192C]">
          Assessment Focus <span className="text-xs font-normal text-slate-500">(Select all that apply)</span>
        </legend>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {ASSESSMENT_FOCUS_OPTIONS.map((option) => {
            const isSelected = assessmentFocus.includes(option);
            return (
              <button
                key={option}
                type="button"
                role="checkbox"
                aria-checked={isSelected}
                onClick={() => toggleFocusOption(option)}
                className={`flex items-center gap-3 px-3.5 py-2.5 rounded-lg border text-left text-sm font-medium transition-colors ${
                  isSelected
                    ? 'bg-[#FBF6EA] border-[#C89B3C] text-[#0B192C]'
                    : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                }`}
              >
                <span
                  className={`w-4 h-4 rounded flex items-center justify-center shrink-0 border ${
                    isSelected
                      ? 'bg-[#0B192C] border-[#0B192C] text-[#D9B15B]'
                      : 'border-slate-300 bg-white'
                  }`}
                  aria-hidden="true"
                >
                  {isSelected && <Check className="w-3 h-3" />}
                </span>
                <span>{option}</span>
              </button>
            );
          })}
        </div>
      </fieldset>

      <div className="space-y-1.5">
        <label htmlFor="wa-challenge" className="block text-sm font-semibold text-[#0B192C]">
          Biggest Website Challenge <span className="text-xs font-normal text-slate-500">(Optional)</span>
        </label>
        <textarea
          id="wa-challenge"
          name="biggest-challenge"
          rows={3}
          placeholder="What feels hardest about your current site (e.g., low enquiries, mobile layout issues, unclear messaging)?"
          value={biggestChallenge}
          onChange={(e) => setBiggestChallenge(e.target.value)}
          className="w-full px-3.5 py-2.5 text-sm text-[#0B192C] bg-white border border-slate-300 rounded-lg focus:border-[#0B192C] focus:ring-2 focus:ring-[#C89B3C]/30 outline-none transition-colors"
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="wa-additional" className="block text-sm font-semibold text-[#0B192C]">
          Additional Information <span className="text-xs font-normal text-slate-500">(Optional)</span>
        </label>
        <textarea
          id="wa-additional"
          name="additional-info"
          rows={3}
          placeholder="Any specific pages, goals, or upcoming campaigns you want us to keep in mind during the review."
          value={additionalInfo}
          onChange={(e) => setAdditionalInfo(e.target.value)}
          className="w-full px-3.5 py-2.5 text-sm text-[#0B192C] bg-white border border-slate-300 rounded-lg focus:border-[#0B192C] focus:ring-2 focus:ring-[#C89B3C]/30 outline-none transition-colors"
        />
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
              <span>SUBMITTING AUDIT REQUEST...</span>
            </>
          ) : (
            <>
              <span>REQUEST MY FREE WEBSITE AUDIT</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </>
          )}
        </button>

        <p className="flex items-start gap-2 text-xs text-slate-500 leading-relaxed">
          <ShieldCheck className="w-4 h-4 text-[#9E761F] shrink-0 mt-0.5" aria-hidden="true" />
          <span>
            Your website audit request details are used solely to review your website and share practical observations. Read our{' '}
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
