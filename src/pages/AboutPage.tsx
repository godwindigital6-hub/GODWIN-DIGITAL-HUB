import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { BrandEmblem, BrandLogo } from '../components/BrandLogo';
import { SeoHead } from '../components/SeoHead';
import { SITE_CONFIG } from '../data/siteConfig';
import { TOOL_GROUPS } from '../data/toolsAndFaq';

export function AboutPage() {
  const [founderImgError, setFounderImgError] = useState(false);

  return (
    <>
      <SeoHead
        title="About Godwin Digital Hub | Founder & Digital Capabilities"
        description="Learn about Godwin Digital Hub, founder Godwin, our practical approach to websites, sales funnels, digital marketing, AI tools, video editing, and the platforms we use."
        path="/about"
      />

      {/* Page Hero & Business Introduction */}
      <section className="bg-[#0B192C] text-white py-14 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm font-semibold text-[#D9B15B]">About Godwin Digital Hub</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
              Helping Businesses and Creators Build Reliable Digital Foundations
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Godwin Digital Hub exists to help entrepreneurs, creators, coaches, and growing businesses establish a stronger online presence through structured website development, digital sales systems, practical marketing, engaging video production, and applied AI-powered solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Introduction */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-5">
              <div className="aspect-[4/4.4] w-full max-w-md mx-auto rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-lg">
                {!founderImgError ? (
                  <img
                    src={SITE_CONFIG.founderPhoto}
                    alt={SITE_CONFIG.founderPhotoAlt}
                    referrerPolicy="no-referrer"
                    onError={() => setFounderImgError(true)}
                    className="w-full h-full object-cover object-top"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center p-8 bg-[#0B192C] text-white text-center">
                    <span>Godwin — Founder, Godwin Digital Hub</span>
                  </div>
                )}
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <p className="text-sm font-semibold text-[#9E761F]">Founder Introduction</p>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B192C] tracking-tight">
                  Meet Godwin
                </h2>
              </div>

              <div className="space-y-4 text-base text-slate-600 leading-relaxed">
                <p>
                  As the founder of Godwin Digital Hub, my focus is bringing together the practical digital pieces businesses and creators often struggle to connect: clear websites, organised sales funnels, digital storefronts, consistent video content, and straightforward automation.
                </p>
                <p>
                  Rather than treating design, marketing, and technology as separate silos, I work across website development, sales funnel creation, digital marketing, AI-assisted project builds, and short-form video editing so every part of your online presence points visitors toward a clear next step.
                </p>
                <p>
                  I place strong emphasis on continuous learning and hands-on practical implementation—building real demonstration projects, testing workflows end to end, and expanding into modern AI and automation tools while staying transparent about what fits your project best.
                </p>
              </div>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-[#0B192C]">
                {[
                  'Website Design & Deployment',
                  'Sales Funnels & Digital Stores',
                  'Digital Marketing & Lead Systems',
                  'AI-Powered Web Projects & Chatbots',
                  'Short-Form Video Editing',
                  'Continuous Practical Implementation',
                ].map((focus) => (
                  <div key={focus} className="flex items-center gap-2.5 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#9E761F] shrink-0" aria-hidden="true" />
                    <span>{focus}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3 flex flex-wrap gap-3.5">
                <Link
                  to="/contact#project-enquiry"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-[#0B192C] bg-[#C89B3C] hover:bg-[#D9B15B] rounded-lg transition-colors whitespace-nowrap"
                >
                  <span>Work With Me</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
                <Link
                  to="/portfolio"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#0B192C] bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap"
                >
                  <span>Explore Demonstrations</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools and Technologies */}
      <section className="py-16 sm:py-24 bg-[#F6F8FB] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-2xl space-y-3">
            <p className="text-sm font-semibold text-[#9E761F]">Tools &amp; Platforms</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B192C] tracking-tight">
              Technologies We Work With
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We select practical platforms matched to each client&apos;s stage and requirements, clearly distinguishing our core focus areas from tools where we continue expanding applied experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TOOL_GROUPS.map((group) => (
              <div
                key={group.category}
                className="p-6 sm:p-7 rounded-xl bg-white border border-slate-200 space-y-5"
              >
                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-[#0B192C]">{group.category}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {group.description}
                  </p>
                </div>

                <ul className="divide-y divide-slate-100 border-t border-slate-100">
                  {group.tools.map((tool) => (
                    <li
                      key={`${group.category}-${tool.name}`}
                      className="py-2.5 flex items-center justify-between gap-4 text-sm"
                    >
                      <span className="font-semibold text-[#0B192C]">{tool.name}</span>
                      <span
                        className={`text-xs font-medium ${
                          tool.proficiencyNote === 'Core Focus'
                            ? 'text-[#9E761F]'
                            : tool.proficiencyNote === 'Applied Experience'
                              ? 'text-slate-600'
                              : 'text-slate-500'
                        }`}
                      >
                        {tool.proficiencyNote}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Identity & Logo System */}
      <section className="py-16 sm:py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-2xl space-y-3">
            <p className="text-sm font-semibold text-[#9E761F]">Brand Identity System</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B192C] tracking-tight">
              Visual Mark &amp; Studio Typography
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Our emblem pairs two interlocking architectural brackets—representing connected digital platforms, funnels, and automated workflows—around a central gold keystone symbolising strategy and growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl border border-slate-200 bg-white flex flex-col justify-between gap-6">
              <div className="py-4 flex items-center justify-center">
                <BrandLogo variant="primary" theme="light" />
              </div>
              <div className="pt-3 border-t border-slate-100">
                <p className="text-sm font-bold text-[#0B192C]">Primary Logo</p>
                <p className="text-xs text-slate-500 mt-0.5">Full-colour on light canvas</p>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-slate-800 bg-[#0B192C] flex flex-col justify-between gap-6">
              <div className="py-4 flex items-center justify-center">
                <BrandLogo variant="primary" theme="dark" />
              </div>
              <div className="pt-3 border-t border-slate-800">
                <p className="text-sm font-bold text-white">Reversed Full-Colour</p>
                <p className="text-xs text-slate-400 mt-0.5">White &amp; gold on deep navy</p>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-slate-200 bg-[#F6F8FB] flex flex-col justify-between gap-6">
              <div className="py-4 flex items-center justify-center">
                <BrandLogo variant="secondary" theme="light" />
              </div>
              <div className="pt-3 border-t border-slate-200">
                <p className="text-sm font-bold text-[#0B192C]">Secondary Compact</p>
                <p className="text-xs text-slate-500 mt-0.5">Horizontal lockup for tight spaces</p>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-slate-200 bg-white flex flex-col justify-between gap-6">
              <div className="py-2 flex items-center justify-center gap-4">
                <BrandEmblem theme="light" size={38} />
                <BrandEmblem theme="monochrome" size={38} className="text-[#0B192C]" />
                <div className="p-2 rounded-lg bg-[#0B192C]">
                  <BrandEmblem theme="white" size={28} />
                </div>
                <BrandLogo variant="social" className="w-12 h-12 rounded-xl" />
              </div>
              <div className="pt-3 border-t border-slate-100">
                <p className="text-sm font-bold text-[#0B192C]">Emblem, Mono &amp; Social</p>
                <p className="text-xs text-slate-500 mt-0.5">Favicon, single-colour &amp; 1:1 avatar</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
