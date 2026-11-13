import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { SITE_CONFIG } from '../data/siteConfig';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#06101F] text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <Link
              to="/"
              aria-label="Godwin Digital Hub Home"
              className="inline-flex items-center"
            >
              <BrandLogo variant="primary" theme="dark" />
            </Link>
            <p className="text-sm text-[#D9B15B] font-medium tracking-wide">
              {SITE_CONFIG.tagline}
            </p>
            <p className="text-sm leading-relaxed text-slate-400 max-w-sm">
              Helping entrepreneurs, creators, and businesses build credible websites, structured sales systems, marketing workflows, practical AI solutions, and engaging video content.
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h2 className="text-sm font-semibold text-white tracking-wide">
              Navigation
            </h2>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-slate-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-slate-400 hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Core Services */}
          <div className="lg:col-span-3 space-y-3">
            <h2 className="text-sm font-semibold text-white tracking-wide">
              Core Solutions
            </h2>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/services#website-design" className="text-slate-400 hover:text-white transition-colors">
                  Website Design &amp; Development
                </Link>
              </li>
              <li>
                <Link to="/services#sales-funnels" className="text-slate-400 hover:text-white transition-colors">
                  Sales Funnels &amp; Landing Pages
                </Link>
              </li>
              <li>
                <Link to="/services#digital-stores" className="text-slate-400 hover:text-white transition-colors">
                  Digital Store Setup
                </Link>
              </li>
              <li>
                <Link to="/services#digital-marketing" className="text-slate-400 hover:text-white transition-colors">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link to="/services#ai-automation" className="text-slate-400 hover:text-white transition-colors">
                  AI Solutions &amp; Automation
                </Link>
              </li>
              <li>
                <Link to="/services#video-editing" className="text-slate-400 hover:text-white transition-colors">
                  Video Editing &amp; Content Production
                </Link>
              </li>
            </ul>
          </div>

          {/* Official Channels & Legal */}
          <div className="lg:col-span-3 space-y-3">
            <h2 className="text-sm font-semibold text-white tracking-wide">
              Connect
            </h2>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={SITE_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-slate-300 hover:text-[#D9B15B] transition-colors"
                >
                  <span>WhatsApp</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
                >
                  <span>Instagram</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.socials.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
                >
                  <span>TikTok</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </li>
              <li className="pt-2">
                <Link
                  to="/contact?tab=audit#website-audit-form"
                  className="text-sm font-medium text-[#D9B15B] hover:text-white transition-colors"
                >
                  Request Free Website Audit
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Legal Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/90 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; {currentYear} {SITE_CONFIG.brandName}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
