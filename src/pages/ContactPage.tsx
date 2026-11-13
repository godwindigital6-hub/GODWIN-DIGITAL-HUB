import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { ArrowUpRight, ClipboardCheck, FileText, MessageCircle } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { ProjectEnquiryForm } from '../components/ProjectEnquiryForm';
import { WebsiteAuditForm } from '../components/WebsiteAuditForm';
import { HOW_IT_WORKS_STEPS, SITE_CONFIG } from '../data/siteConfig';

type ActiveFormTab = 'enquiry' | 'audit';

export function ContactPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const [founderImgError, setFounderImgError] = useState(false);

  const initialService = searchParams.get('service') ?? '';
  const tabParam = searchParams.get('tab');

  const resolveTabFromLocation = (): ActiveFormTab => {
    if (tabParam === 'audit' || location.hash === '#website-audit-form') {
      return 'audit';
    }
    return 'enquiry';
  };

  const [activeTab, setActiveTab] = useState<ActiveFormTab>(resolveTabFromLocation);

  useEffect(() => {
    setActiveTab(resolveTabFromLocation());
  }, [tabParam, location.hash]);

  const handleTabSwitch = (tab: ActiveFormTab) => {
    setActiveTab(tab);
    const nextParams = new URLSearchParams(searchParams);
    if (tab === 'audit') {
      nextParams.set('tab', 'audit');
      nextParams.delete('service');
    } else {
      nextParams.delete('tab');
    }
    setSearchParams(nextParams, { replace: true });
  };

  return (
    <>
      <SeoHead
        title="Contact & Start a Project | Godwin Digital Hub"
        description="Submit a project enquiry or request a free website audit from Godwin Digital Hub. Connect directly on WhatsApp or via Instagram, TikTok, and LinkedIn."
        path="/contact"
      />

      {/* Page Header */}
      <section className="bg-[#0B192C] text-white py-14 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <p className="text-sm font-semibold text-[#D9B15B]">Contact &amp; Enquiries</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight max-w-3xl">
            Start a Project or Request a Free Website Audit
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
            Choose the enquiry path that fits what you need today. Once your form is submitted, you can also continue directly to WhatsApp with your prefilled details.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#F6F8FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left Forms Column */}
            <div className="lg:col-span-8 space-y-6">
              {/* Switcher Bar */}
              <div
                id="project-enquiry"
                className="p-1.5 bg-white border border-slate-200 rounded-xl grid grid-cols-1 sm:grid-cols-2 gap-1.5 scroll-mt-24"
                role="tablist"
                aria-label="Choose an enquiry form"
              >
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTab === 'enquiry'}
                  onClick={() => handleTabSwitch('enquiry')}
                  className={`flex items-center justify-center gap-2.5 px-4 py-3 text-sm font-bold rounded-lg transition-colors ${
                    activeTab === 'enquiry'
                      ? 'bg-[#0B192C] text-white'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <FileText className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>1. Project Enquiry</span>
                </button>
                <button
                  type="button"
                  role="tab"
                  id="website-audit-form"
                  aria-selected={activeTab === 'audit'}
                  onClick={() => handleTabSwitch('audit')}
                  className={`flex items-center justify-center gap-2.5 px-4 py-3 text-sm font-bold rounded-lg transition-colors scroll-mt-24 ${
                    activeTab === 'audit'
                      ? 'bg-[#0B192C] text-white'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <ClipboardCheck className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>2. Free Website Audit Request</span>
                </button>
              </div>

              {/* Active Form Card */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm">
                {activeTab === 'enquiry' ? (
                  <div className="space-y-6">
                    <div className="space-y-2 pb-4 border-b border-slate-100">
                      <h2 className="text-2xl font-bold text-[#0B192C]">
                        Project Enquiry Form
                      </h2>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Tell us about the website, sales funnel, digital store, AI solution, marketing campaign, or video editing project you would like to discuss.
                      </p>
                    </div>
                    <ProjectEnquiryForm initialService={initialService} />
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="space-y-2 pb-4 border-b border-slate-100">
                      <h2 className="text-2xl font-bold text-[#0B192C]">
                        Free Website Audit Request
                      </h2>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Share your current website URL and the areas you want reviewed across design, user experience, mobile responsiveness, performance, SEO foundations, and conversions.
                      </p>
                    </div>
                    <WebsiteAuditForm />
                  </div>
                )}
              </div>
            </div>

            {/* Right Guidance & Direct Channels Sidebar */}
            <aside className="lg:col-span-4 space-y-6">
              {/* Founder Contact Card */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shrink-0">
                    {!founderImgError ? (
                      <img
                        src={SITE_CONFIG.founderPhoto}
                        alt={SITE_CONFIG.founderPhotoAlt}
                        referrerPolicy="no-referrer"
                        onError={() => setFounderImgError(true)}
                        className="w-full h-full object-cover object-top"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-[#0B192C] text-[#D9B15B] text-xs font-bold">
                        GDH
                      </div>
                    )}
                  </div>
                  <div>
                    <h2 className="text-base font-bold text-[#0B192C]">Godwin</h2>
                    <p className="text-xs text-[#9E761F] font-semibold">
                      Founder · Godwin Digital Hub
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Direct, responsive project guidance
                    </p>
                  </div>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  Submitting a form ensures your project details or website URL are properly recorded. Prefer a quick conversation first? Connect directly via WhatsApp.
                </p>

                <a
                  href={SITE_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-bold text-white bg-[#1B8A4B] hover:bg-[#16733E] rounded-lg transition-colors"
                >
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  <span>Message on WhatsApp</span>
                </a>
              </div>

              {/* Official Social Media Links */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4">
                <h2 className="text-base font-bold text-[#0B192C]">Official Social Channels</h2>
                <ul className="divide-y divide-slate-100 text-sm">
                  <li>
                    <a
                      href={SITE_CONFIG.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 flex items-center justify-between text-slate-700 hover:text-[#0B192C] font-medium transition-colors"
                    >
                      <span>Instagram</span>
                      <ArrowUpRight className="w-4 h-4 text-[#9E761F]" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a
                      href={SITE_CONFIG.socials.tiktok}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 flex items-center justify-between text-slate-700 hover:text-[#0B192C] font-medium transition-colors"
                    >
                      <span>TikTok</span>
                      <ArrowUpRight className="w-4 h-4 text-[#9E761F]" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a
                      href={SITE_CONFIG.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 flex items-center justify-between text-slate-700 hover:text-[#0B192C] font-medium transition-colors"
                    >
                      <span>LinkedIn</span>
                      <ArrowUpRight className="w-4 h-4 text-[#9E761F]" aria-hidden="true" />
                    </a>
                  </li>
                </ul>
              </div>

              {/* Process Summary */}
              <div className="bg-[#0B192C] text-white rounded-2xl p-6 space-y-4">
                <h2 className="text-base font-bold text-white">What Happens Next</h2>
                <ol className="space-y-3 text-sm">
                  {HOW_IT_WORKS_STEPS.map((step) => (
                    <li key={step.number} className="flex items-start gap-3">
                      <span className="text-xs font-bold text-[#D9B15B] tabular-nums mt-0.5 shrink-0">
                        {step.number}
                      </span>
                      <div>
                        <p className="font-semibold text-white">{step.title}</p>
                        <p className="text-xs text-slate-300 leading-relaxed">{step.summary}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
