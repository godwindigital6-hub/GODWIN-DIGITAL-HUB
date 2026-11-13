import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';

export function NotFoundPage() {
  return (
    <>
      <SeoHead
        title="Page Not Found (404) | Godwin Digital Hub"
        description="The requested page could not be found on Godwin Digital Hub."
        noIndex={true}
      />

      <section className="py-20 sm:py-28 bg-[#F6F8FB] min-h-[70vh] flex items-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <p className="text-sm font-bold text-[#9E761F] tabular-nums">Error 404</p>
          <h1 className="text-3xl sm:text-5xl font-bold text-[#0B192C] tracking-tight">
            This Page Could Not Be Found
          </h1>
          <p className="text-base text-slate-600 leading-relaxed max-w-lg mx-auto">
            The link you followed may be outdated or the address may have been typed incorrectly. Use one of the links below to continue exploring Godwin Digital Hub.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-[#0B192C] bg-[#C89B3C] hover:bg-[#D9B15B] rounded-lg transition-colors whitespace-nowrap"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              <span>Back to Homepage</span>
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#0B192C] bg-white hover:bg-slate-100 border border-slate-300 rounded-lg transition-colors whitespace-nowrap"
            >
              <span>Explore Services</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
