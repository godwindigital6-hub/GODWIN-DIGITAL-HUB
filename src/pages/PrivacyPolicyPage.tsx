import { Link } from 'react-router-dom';
import { SeoHead } from '../components/SeoHead';
import { SITE_CONFIG } from '../data/siteConfig';

export function PrivacyPolicyPage() {
  return (
    <>
      <SeoHead
        title="Privacy Policy | Godwin Digital Hub"
        description="Privacy Policy explaining how Godwin Digital Hub collects, uses, and protects project enquiry and website audit request details."
        path="/privacy-policy"
      />

      <section className="bg-[#0B192C] text-white py-12 sm:py-16 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-2">
          <p className="text-sm font-semibold text-[#D9B15B]">Legal &amp; Data Privacy</p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Privacy Policy</h1>
          <p className="text-sm text-slate-300">Effective Date: November 2026</p>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-slate-700 text-sm sm:text-base leading-relaxed">
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#0B192C]">1. Overview</h2>
            <p>
              Godwin Digital Hub respects your privacy and is committed to handling the information you share responsibly. This Privacy Policy explains what information is collected through our website, why it is collected, and how it is used.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#0B192C]">2. Information We Collect</h2>
            <p>
              We only collect the information you voluntarily submit through our two website forms:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Project Enquiry Form:</strong> Your full name, email address, optional business or brand name, selected service, optional budget range and timeline, project description, and optional current website URL.
              </li>
              <li>
                <strong>Free Website Audit Request Form:</strong> Your full name, email address, optional business name, website URL, optional business industry, selected assessment focus areas, and optional challenge or context notes.
              </li>
            </ul>
            <p>
              We do not collect sensitive personal financial credentials, payment card numbers, or unnecessary personal records through these forms.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#0B192C]">3. Why We Collect This Information</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Project Enquiry Details:</strong> Used to understand your project requirements, assess feasibility, prepare appropriate recommendations, and communicate with you regarding potential collaboration.
              </li>
              <li>
                <strong>Website Audit Request Details:</strong> Used to review your submitted website across areas such as design, usability, mobile experience, performance, SEO foundations, and conversion flow, and to deliver your requested audit feedback.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#0B192C]">4. How Your Information Is Processed</h2>
            <p>
              Form submissions are processed via Netlify Forms so that Godwin Digital Hub receives your enquiry securely. After a successful submission, you are offered an optional button to continue to WhatsApp with a prefilled summary of your submitted details. Choosing to open and send that WhatsApp message is entirely voluntary and initiated by you inside WhatsApp.
            </p>
            <p>
              We do not sell, rent, or trade your contact details or project information to third parties.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#0B192C]">5. External Links</h2>
            <p>
              This website includes links to external platforms such as WhatsApp, Google Drive (for portfolio demonstrations), Instagram, TikTok, and LinkedIn. Those platforms operate under their own privacy policies and terms.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#0B192C]">6. Questions or Data Requests</h2>
            <p>
              If you would like to update, review, or request deletion of information you previously submitted through our forms, please reach out via our{' '}
              <Link to="/contact" className="text-[#0B192C] font-semibold underline hover:text-[#9E761F]">
                Contact page
              </Link>{' '}
              or contact us directly via{' '}
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0B192C] font-semibold underline hover:text-[#9E761F]"
              >
                WhatsApp
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
