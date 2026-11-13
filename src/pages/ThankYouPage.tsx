import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, ExternalLink, MessageCircle } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';

interface SubmissionState {
  submitted: boolean;
  formType: 'project-enquiry' | 'website-audit-request';
  submitterName: string;
  serviceRequired?: string;
  websiteUrl?: string;
  whatsappUrl: string;
  submittedAt: string;
}

export function ThankYouPage() {
  const location = useLocation();
  const [submission, setSubmission] = useState<SubmissionState | null>(() => {
    const routeState = location.state as SubmissionState | null;
    if (routeState?.submitted && routeState.whatsappUrl) {
      return routeState;
    }
    try {
      const stored = sessionStorage.getItem('gdh_last_submission');
      if (stored) {
        const parsed = JSON.parse(stored) as SubmissionState;
        if (parsed?.submitted && parsed.whatsappUrl) {
          return parsed;
        }
      }
    } catch {
      // Ignore storage access errors
    }
    return null;
  });

  useEffect(() => {
    const routeState = location.state as SubmissionState | null;
    if (routeState?.submitted && routeState.whatsappUrl) {
      setSubmission(routeState);
    }
  }, [location.state]);

  return (
    <>
      <SeoHead
        title="Submission Confirmation | Godwin Digital Hub"
        description="Confirmation page for submitted project enquiries and free website audit requests at Godwin Digital Hub."
        path="/thank-you"
        noIndex={true}
      />

      <section className="py-16 sm:py-24 bg-[#F6F8FB] min-h-[70vh] flex items-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {submission ? (
            <div className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-12 shadow-sm text-center space-y-6">
              <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 inline-flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" aria-hidden="true" />
              </div>

              <div className="space-y-3">
                <p className="text-xs font-semibold text-[#9E761F]">
                  {submission.formType === 'project-enquiry'
                    ? 'Project Enquiry Recorded'
                    : 'Website Audit Request Recorded'}
                </p>
                <h1 className="text-2xl sm:text-3xl font-bold text-[#0B192C] tracking-tight">
                  Your form has been submitted successfully!
                </h1>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-lg mx-auto">
                  Thank you for contacting Godwin Digital Hub. Your information has been recorded. You can continue to WhatsApp to send an additional message about your enquiry.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F6F8FB] border border-slate-200 text-left text-sm space-y-1">
                <p className="text-slate-600">
                  <span className="font-semibold text-[#0B192C]">Submitted by:</span>{' '}
                  {submission.submitterName}
                </p>
                {submission.serviceRequired && (
                  <p className="text-slate-600">
                    <span className="font-semibold text-[#0B192C]">Service Selected:</span>{' '}
                    {submission.serviceRequired}
                  </p>
                )}
                {submission.websiteUrl && (
                  <p className="text-slate-600 break-all">
                    <span className="font-semibold text-[#0B192C]">Website URL:</span>{' '}
                    {submission.websiteUrl}
                  </p>
                )}
              </div>

              <div className="pt-2 flex flex-col items-center gap-3">
                <a
                  href={submission.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 text-sm font-bold tracking-wide text-white bg-[#1B8A4B] hover:bg-[#16733E] rounded-lg transition-colors whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  <span>CONTINUE TO WHATSAPP</span>
                  <ExternalLink className="w-4 h-4" aria-hidden="true" />
                </a>
                <p className="text-xs text-slate-500">
                  Clicking opens WhatsApp with your details prefilled—you can review and press Send inside WhatsApp.
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-center gap-6 text-sm">
                <Link
                  to="/"
                  className="inline-flex items-center gap-1.5 font-semibold text-[#0B192C] hover:text-[#9E761F] transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                  <span>Return to Homepage</span>
                </Link>
                <Link
                  to="/portfolio"
                  className="font-semibold text-slate-600 hover:text-[#0B192C] transition-colors"
                >
                  Browse Portfolio
                </Link>
              </div>
            </div>
          ) : (
            <div className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-12 text-center space-y-5">
              <h1 className="text-2xl sm:text-3xl font-bold text-[#0B192C]">
                Submit an Enquiry First
              </h1>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-md mx-auto">
                This confirmation page is shown after submitting a Project Enquiry or Free Website Audit Request. Please complete a form on our Contact page to get started.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  to="/contact#project-enquiry"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-[#0B192C] bg-[#C89B3C] hover:bg-[#D9B15B] rounded-lg transition-colors"
                >
                  Go to Contact Forms
                </Link>
                <Link
                  to="/"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-[#0B192C] bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
