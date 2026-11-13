import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { ServiceIcon } from '../components/ServiceIcon';
import { SERVICE_CATEGORIES } from '../data/services';

export function ServicesPage() {
  return (
    <>
      <SeoHead
        title="Digital Services | Godwin Digital Hub"
        description="Explore website design, sales funnels, digital store setup, digital marketing, AI automation, and video editing services at Godwin Digital Hub."
        path="/services"
      />

      {/* Page Hero */}
      <section className="bg-[#0B192C] text-white py-14 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm font-semibold text-[#D9B15B]">Services &amp; Capabilities</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
              Practical Digital Solutions Designed to Work Together
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              From custom websites and focused sales funnels to digital stores, marketing foundations, AI-assisted workflows, and short-form video editing—every service addresses real business bottlenecks.
            </p>
          </div>

          {/* Anchor Jump Strip */}
          <nav aria-label="Service Categories" className="pt-4 flex flex-wrap gap-2">
            {SERVICE_CATEGORIES.map((service) => (
              <a
                key={service.id}
                href={`#${service.anchor}`}
                className="inline-flex items-center gap-2 px-3.5 py-2 text-xs sm:text-sm font-medium text-slate-200 bg-[#132743] hover:bg-[#1D3557] border border-slate-700 rounded-lg transition-colors whitespace-nowrap"
              >
                <span className="text-[#D9B15B] font-semibold tabular-nums">{service.number}.</span>
                <span>{service.shortTitle}</span>
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Detailed Service Sections */}
      <div>
        {SERVICE_CATEGORIES.map((service, index) => {
          const isAltBg = index % 2 === 1;
          return (
            <section
              key={service.id}
              id={service.anchor}
              className={`py-16 sm:py-20 border-b border-slate-200 scroll-mt-20 ${
                isAltBg ? 'bg-[#F6F8FB]' : 'bg-white'
              }`}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
                  {/* Left Summary Column */}
                  <div className="lg:col-span-5 space-y-5">
                    <div className="flex items-center gap-3">
                      <span className="w-11 h-11 rounded-lg bg-[#0B192C] text-[#D9B15B] inline-flex items-center justify-center shrink-0">
                        <ServiceIcon name={service.iconName} className="w-5 h-5" />
                      </span>
                      <span className="text-sm font-bold text-[#9E761F] tabular-nums">
                        Service {service.number}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-bold text-[#0B192C] tracking-tight">
                      {service.title}
                    </h2>

                    <p className="text-base text-slate-700 leading-relaxed">
                      {service.whatItInvolves}
                    </p>

                    <div className="p-5 rounded-xl bg-white border border-slate-200 space-y-2">
                      <h3 className="text-sm font-bold text-[#0B192C]">Business Value</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {service.businessValue}
                      </p>
                    </div>

                    <div className="pt-2">
                      <Link
                        to={`/contact?service=${encodeURIComponent(service.dropdownValue)}#project-enquiry`}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-[#0B192C] bg-[#C89B3C] hover:bg-[#D9B15B] rounded-lg transition-colors whitespace-nowrap"
                      >
                        <span>{service.ctaLabel}</span>
                        <ArrowRight className="w-4 h-4" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>

                  {/* Right Structured Breakdown */}
                  <div className="lg:col-span-7 space-y-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="p-6 rounded-xl bg-white border border-slate-200 space-y-3">
                        <h3 className="text-sm font-bold text-[#0B192C]">Who It Is Suitable For</h3>
                        <ul className="space-y-2.5 text-sm text-slate-600">
                          {service.whoItIsFor.map((audience, idx) => (
                            <li key={idx} className="flex items-start gap-2.5">
                              <CheckCircle2
                                className="w-4 h-4 text-[#9E761F] shrink-0 mt-0.5"
                                aria-hidden="true"
                              />
                              <span>{audience}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="p-6 rounded-xl bg-white border border-slate-200 space-y-3">
                        <h3 className="text-sm font-bold text-[#0B192C]">Problems It Helps Solve</h3>
                        <ul className="space-y-2.5 text-sm text-slate-600">
                          {service.problemsSolved.map((problem, idx) => (
                            <li key={idx} className="flex items-start gap-2.5">
                              <CheckCircle2
                                className="w-4 h-4 text-[#0B192C] shrink-0 mt-0.5"
                                aria-hidden="true"
                              />
                              <span>{problem}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="p-6 sm:p-7 rounded-xl bg-white border border-slate-200 space-y-4">
                      <h3 className="text-sm font-bold text-[#0B192C]">What This Service Includes</h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
                        {service.includes.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <span
                              className="w-1.5 h-1.5 rounded-full bg-[#C89B3C] shrink-0 mt-2"
                              aria-hidden="true"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Services Bottom CTA */}
      <section className="py-16 sm:py-20 bg-[#0B192C] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Need Help Deciding Which Service Fits Best?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Share your business goals or request a complimentary review of your existing website.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 pt-2">
            <Link
              to="/contact#project-enquiry"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-[#0B192C] bg-[#C89B3C] hover:bg-[#D9B15B] rounded-lg transition-colors whitespace-nowrap"
            >
              <span>Discuss Your Project</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
            <Link
              to="/contact?tab=audit#website-audit-form"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#132743] hover:bg-[#1D3557] border border-slate-700 rounded-lg transition-colors whitespace-nowrap"
            >
              <span>Request My Free Website Audit</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
