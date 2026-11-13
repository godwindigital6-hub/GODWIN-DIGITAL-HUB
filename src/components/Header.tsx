import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

const NAV_ITEMS = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname, location.search]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Lockup (Primary on Desktop, Compact Secondary on Mobile) */}
        <Link
          to="/"
          aria-label="Godwin Digital Hub Home"
          className="inline-flex items-center whitespace-nowrap shrink-0"
        >
          <span className="hidden sm:inline-flex">
            <BrandLogo variant="primary" theme="light" />
          </span>
          <span className="inline-flex sm:hidden">
            <BrandLogo variant="secondary" theme="light" />
          </span>
        </Link>

        {/* Zone 2: Concise Single-Line Navigation Links */}
        <nav aria-label="Primary Navigation" className="hidden md:flex items-center gap-7">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `relative py-1 text-sm font-medium transition-colors whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'text-[#0B192C]'
                    : 'text-slate-600 hover:text-[#0B192C]'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>{item.label}</span>
                  <span
                    className={`absolute left-0 right-0 -bottom-0.5 h-0.5 rounded-full transition-opacity ${
                      isActive ? 'bg-[#C89B3C] opacity-100' : 'opacity-0'
                    }`}
                    aria-hidden="true"
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Zone 3: Single Primary Action + Mobile Menu Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            to="/contact#project-enquiry"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-[#0B192C] bg-[#C89B3C] hover:bg-[#D9B15B] rounded-lg transition-colors whitespace-nowrap shrink-0"
          >
            Start a Project
          </Link>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg text-[#0B192C] hover:bg-slate-100 transition-colors"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="md:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-1 shadow-lg"
        >
          <nav aria-label="Mobile Navigation" className="flex flex-col space-y-1">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-[#FBF6EA] text-[#0B192C] font-semibold'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-[#0B192C]'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="pt-3 border-t border-slate-100">
            <Link
              to="/contact#project-enquiry"
              className="w-full inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold text-[#0B192C] bg-[#C89B3C] hover:bg-[#D9B15B] rounded-lg transition-colors"
            >
              Start a Project
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
