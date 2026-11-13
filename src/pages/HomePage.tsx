import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  SearchCheck,
} from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { ServiceIcon } from '../components/ServiceIcon';
import { PortfolioCard } from '../components/PortfolioCard';
import { ProjectModal } from '../components/ProjectModal';
import { FaqAccordion } from '../components/FaqAccordion';
import {
  HOW_IT_WORKS_STEPS,
  SITE_CONFIG,
  WHY_CHOOSE_PILLARS,
} from '../data/siteConfig';
import { SERVICE_CATEGORIES } from '../data/services';
import { PORTFOLIO_PROJECTS, type PortfolioProject } from '../data/portfolio';
import { FAQ_ITEMS } from '../data/toolsAndFaq';

export function HomePage() {
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [founderImgError, setFounderImgError] = useState(false);

  const featuredProjects = PORTFOLIO_PROJECTS.filter((p) => p.featured);

  return (
    <>
      <SeoHead
        title="Godwin Digital Hub | Websites, Sales Funnels, AI & Video Editing"
        description="Godwin Digital Hub helps entrepreneurs, creators, and businesses build professional websites, digital sales systems, marketing, AI automation, and video content."
        path="/"
      />

      {/* B. Hero Section */}
      <section className="bg-[#0B192C] text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <p className="text-sm font-semibold tracking-wider text-[#D9B15B]">
                {SITE_CONFIG.tagline}
              </p>

              <h1
                className="text-3xl sm:text-4xl lg:text-[3.35rem] font-bold tracking-tight text-white leading-[1.12]"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Build a Stronger Digital Presence. Create Systems That Help Your Business Grow.
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                Godwin Digital Hub helps entrepreneurs, creators, and businesses build professional websites, develop digital sales systems, establish their online presence, create engaging content, and implement practical marketing and AI-powered solutions.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <Link
                  to="/contact#project-enquiry"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-[#0B192C] bg-[#C89B3C] hover:bg-[#D9B15B] rounded-lg transition-colors whitespace-nowrap"
                >
                  <span>Start a Project</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#132743] hover:bg-[#1D3557] border border-slate-700 rounded-lg transition-colors whitespace-nowrap"
                >
                  <span>Explore Services</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md">
                <div className="aspect-[4/4.3] w-full rounded-2xl overflow-hidden bg-[#132743] border border-[#C89B3C]/40 shadow-2xl">
                  {!founderImgError ? (
                    <img
                      src={SITE_CONFIG.founderPhoto}
                      alt={SITE_CONFIG.founderPhotoAlt}
                      referrerPolicy="no-referrer"
                      onError={() => setFounderImgError(true)}
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center p-8 text-center text-slate-300">
                      <span>Godwin — Founder, Godwin Digital Hub</span>
                    </div>
                  )}
                </div>
                <div className="mt-3 flex items-center justify-between text-xs text-slate-300 px-1">
                  <span className="font-semibold text-white">Godwin · Founder</span>
                  <span className="text-[#D9B15B]">Websites · Funnels · AI · Video</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Brand Positioning Strip */}
        <div className="bg-[#06101F] border-t border-slate-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <p className="text-sm font-bold text-[#D9B15B]">01 · Build</p>
                <p className="mt-1 text-xs sm:text-sm text-slate-300">
                  Responsive business websites, landing pages, and digital storefronts.
                </p>
              </div>
              <div>
                <p className="text-sm font-bold text-[#D9B15B]">02 · Market</p>
                <p className="mt-1 text-xs sm:text-sm text-slate-300">
                  Short-form video editing, SEO foundations, and structured sales funnels.
                </p>
              </div>
              <div>
                <p className="text-sm font-bold text-[#D9B15B]">03 · Automate</p>
                <p className="mt-1 text-xs sm:text-sm text-slate-300">
                  Practical AI chatbots, Zapier workflows, and automated notifications.
                </p>
              </div>
              <div>
                <p className="text-sm font-bold text-[#D9B15B]">04 · Grow</p>
                <p className="mt-1 text-xs sm:text-sm text-slate-300">
                  Connected digital systems engineered to capture qualified enquiries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* C. Services Overview */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl space-y-3">
              <p className="text-sm font-semibold text-[#9E761F]">Core Capabilities</p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B192C] tracking-tight">
                Six Integrated Services Built Around Business Results
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B192C] hover:text-[#9E761F] transition-colors whitespace-nowrap shrink-0"
            >
              <span>View Full Services Breakdown</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICE_CATEGORIES.map((service) => (
              <article
                key={service.id}
                className="flex flex-col justify-between p-7 rounded-xl border border-slate-200 bg-white hover:border-[#C89B3C] hover:shadow-md transition-all duration-200"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="w-11 h-11 rounded-lg bg-[#0B192C] text-[#D9B15B] inline-flex items-center justify-center">
                      <ServiceIcon name={service.iconName} className="w-5 h-5" />
                    </span>
                    <span className="text-xs font-semibold text-slate-400 tabular-nums">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#0B192C] leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100">
                  <Link
                    to={`/services#${service.anchor}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0B192C] hover:text-[#9E761F] transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* D. Featured Portfolio */}
      <section className="py-16 sm:py-24 bg-[#F6F8FB] border-t border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl space-y-3">
              <p className="text-sm font-semibold text-[#9E761F]">Selected Work &amp; Demos</p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B192C] tracking-tight">
                Practical Demonstration Projects &amp; Digital Builds
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Explore sample websites, booking workflows, digital storefronts, AI assistant integrations, and short-form video production examples.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-[#0B192C] bg-white hover:bg-slate-100 border border-slate-300 rounded-lg transition-colors whitespace-nowrap"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <a
                href={SITE_CONFIG.googleDrivePortfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-bold text-[#0B192C] bg-[#C89B3C] hover:bg-[#D9B15B] rounded-lg transition-colors whitespace-nowrap"
              >
                <span>VIEW ALL PROJECTS</span>
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.slice(0, 3).map((project) => (
              <PortfolioCard
                key={project.id}
                project={project}
                onSelect={setSelectedProject}
              />
            ))}
          </div>

          {featuredProjects.length > 3 && (
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredProjects.slice(3, 5).map((project) => (
                <PortfolioCard
                  key={project.id}
                  project={project}
                  onSelect={setSelectedProject}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* E. Why Choose Godwin Digital Hub? */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-3 mb-12">
            <p className="text-sm font-semibold text-[#9E761F]">Why Choose Godwin Digital Hub</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B192C] tracking-tight">
              Agency-Grade Structure with Focused Personal Accountability
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
            {WHY_CHOOSE_PILLARS.map((pillar, idx) => (
              <div key={pillar.id} className="pt-5 border-t border-slate-200 space-y-2.5">
                <span className="text-xs font-bold text-[#9E761F] tabular-nums">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <h3 className="text-base font-bold text-[#0B192C] leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* F. How It Works */}
      <section className="py-16 sm:py-24 bg-[#F6F8FB] border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-3 mb-12">
            <p className="text-sm font-semibold text-[#9E761F]">How It Works</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B192C] tracking-tight">
              A Clear Four-Step Project Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOW_IT_WORKS_STEPS.map((step) => (
              <div
                key={step.number}
                className="p-6 rounded-xl bg-white border border-slate-200 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-[#C89B3C] tabular-nums" style={{ fontFamily: 'var(--font-display)' }}>
                    Step {step.number}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#0B192C]">{step.title}</h3>
                <p className="text-sm font-medium text-[#0B192C]/85">{step.summary}</p>
                <p className="text-sm text-slate-600 leading-relaxed">{step.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* G. Free Website Audit Section */}
      <section className="py-16 sm:py-20 bg-[#0B192C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-[#132743] border border-[#C89B3C]/35 p-8 sm:p-12 lg:p-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#D9B15B]">
                <SearchCheck className="w-4 h-4" aria-hidden="true" />
                <span>Complimentary Website Review</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                Is Your Website Helping Your Business Grow?
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                Request a free website audit to identify potential opportunities to improve your website&apos;s design, usability, mobile experience, performance, SEO foundations, and conversion journey.
              </p>
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2 text-xs sm:text-sm text-slate-200">
                {[
                  'Visual Design',
                  'Usability & Flow',
                  'Mobile Experience',
                  'Page Performance',
                  'SEO Foundations',
                  'Conversion Journey',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D9B15B] shrink-0" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col items-stretch sm:items-center lg:items-end justify-center gap-3">
              <Link
                to="/contact?tab=audit#website-audit-form"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-bold tracking-wide text-[#0B192C] bg-[#C89B3C] hover:bg-[#D9B15B] rounded-lg transition-colors text-center whitespace-nowrap"
              >
                <span>REQUEST MY FREE WEBSITE AUDIT</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <p className="text-xs text-slate-400 lg:text-right">
                No downloads required — submit your URL directly for a practical review.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* H. FAQ Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <p className="text-sm font-semibold text-[#9E761F]">Frequently Asked Questions</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B192C] tracking-tight">
              Clear Answers Before We Begin
            </h2>
          </div>

          <FaqAccordion items={FAQ_ITEMS} />
        </div>
      </section>

      {/* I. Final Homepage CTA */}
      <section className="py-16 sm:py-20 bg-[#F6F8FB] border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B192C] tracking-tight">
            Ready to Build Your Next Digital Project?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Let&apos;s discuss your goals and identify the right digital solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 pt-2">
            <Link
              to="/contact#project-enquiry"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-bold text-[#0B192C] bg-[#C89B3C] hover:bg-[#D9B15B] rounded-lg transition-colors whitespace-nowrap"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-[#0B192C] bg-white hover:bg-slate-100 border border-slate-300 rounded-lg transition-colors whitespace-nowrap"
            >
              <span>Contact Me</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  );
}
