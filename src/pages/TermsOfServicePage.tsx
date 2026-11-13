import { Link } from 'react-router-dom';
import { SeoHead } from '../components/SeoHead';

export function TermsOfServicePage() {
  return (
    <>
      <SeoHead
        title="Terms of Service | Godwin Digital Hub"
        description="General Terms of Service governing website use, project enquiries, and digital service engagements with Godwin Digital Hub."
        path="/terms-of-service"
      />

      <section className="bg-[#0B192C] text-white py-12 sm:py-16 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-2">
          <p className="text-sm font-semibold text-[#D9B15B]">Legal Terms</p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Terms of Service</h1>
          <p className="text-sm text-slate-300">Effective Date: November 2026</p>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-slate-700 text-sm sm:text-base leading-relaxed">
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#0B192C]">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the Godwin Digital Hub website, you agree to comply with these general Terms of Service. If you do not agree with any part of these terms, please refrain from using the website.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#0B192C]">2. Enquiries &amp; Project Proposals</h2>
            <p>
              Submitting a Project Enquiry or Free Website Audit Request does not establish a binding client agreement or guarantee project availability. Specific project deliverables, timelines, pricing, payment terms, and support conditions are agreed separately in writing prior to starting work.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#0B192C]">3. Scope of Services</h2>
            <p>
              Godwin Digital Hub provides website design and development, sales funnel and landing page creation, digital store setup, digital marketing support, practical AI and automation integrations, and video editing services. Exact deliverables for each engagement depend on the agreed project scope.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#0B192C]">4. Client Responsibilities &amp; Third-Party Tools</h2>
            <p>
              Projects often rely on third-party platforms (such as Wix, Shopify, Netlify, Systeme.io, ClickFunnels, Gumroad, Payhip, Zapier, or domain registrars) as well as timely client feedback, content, branding assets, and footage. Clients are responsible for maintaining their own third-party subscriptions, domain renewals, and ensuring they hold necessary rights to any text, images, or video footage provided.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#0B192C]">5. Demonstration Projects &amp; Website Content</h2>
            <p>
              Portfolio examples labelled as demonstration or sample builds on this website are presented to illustrate design structure and technical capabilities. Nothing on this site should be interpreted as a guaranteed commercial, traffic, or revenue outcome.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#0B192C]">6. Contact</h2>
            <p>
              For questions regarding these terms or an upcoming project scope, please reach out through our{' '}
              <Link to="/contact" className="text-[#0B192C] font-semibold underline hover:text-[#9E761F]">
                Contact page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
