import { SITE_CONFIG } from '../data/siteConfig';

export function FloatingWhatsApp() {
  return (
    <a
      href={SITE_CONFIG.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Godwin Digital Hub on WhatsApp"
      title="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2.5 h-12 px-4 rounded-full bg-[#1B8A4B] hover:bg-[#16733E] text-white shadow-lg shadow-slate-900/20 border border-white/15 transition-transform duration-150 hover:-translate-y-0.5"
    >
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5 shrink-0"
        aria-hidden="true"
      >
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2Zm5.78 14.01c-.24.68-1.41 1.3-1.95 1.38-.5.08-1.13.11-1.83-.11-.42-.13-.96-.31-1.65-.61-2.9-1.25-4.79-4.18-4.93-4.37-.14-.19-1.18-1.57-1.18-3 0-1.43.75-2.13 1.01-2.42.27-.29.58-.36.78-.36h.56c.18 0 .42-.07.66.5.24.58.83 2.01.9 2.16.07.15.12.32.02.51-.1.19-.14.31-.29.48-.14.17-.31.38-.44.51-.14.14-.3.3-.13.59.17.29.76 1.25 1.63 2.02 1.12 1 2.06 1.31 2.35 1.45.29.15.46.12.63-.07.17-.19.73-.85.92-1.14.19-.29.39-.24.66-.14.27.1 1.7.8 1.99.94.29.15.48.22.55.34.07.12.07.7-.17 1.38Z" />
      </svg>
      <span className="hidden sm:inline text-sm font-semibold whitespace-nowrap">
        WhatsApp
      </span>
    </a>
  );
}
