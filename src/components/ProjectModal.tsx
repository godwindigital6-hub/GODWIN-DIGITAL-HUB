import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { X, CheckCircle2, ExternalLink, Layers } from 'lucide-react';
import type { PortfolioProject } from '../data/portfolio';
import { SITE_CONFIG } from '../data/siteConfig';

interface ProjectModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    setImgError(false);
  }, [project]);

  useEffect(() => {
    if (!project) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#06101F]/70 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl border border-slate-200 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-white/95 backdrop-blur-sm border-b border-slate-200">
          <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
            <span className="text-[#9E761F] font-semibold">{project.primaryCategory}</span>
            <span aria-hidden="true">·</span>
            <span>{project.projectTypeLabel}</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="w-9 h-9 rounded-lg inline-flex items-center justify-center text-slate-500 hover:text-[#0B192C] hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          <div className="aspect-[16/10] w-full rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
            {!imgError ? (
              <img
                src={project.image}
                alt={project.imageAlt}
                referrerPolicy="no-referrer"
                onError={() => setImgError(true)}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#0B192C] to-[#1D3557] text-white text-center">
                <Layers className="w-10 h-10 text-[#D9B15B] mb-2" aria-hidden="true" />
                <span className="text-base font-semibold">{project.title}</span>
              </div>
            )}
          </div>

          <div className="space-y-2">
            <h2
              id="project-modal-title"
              className="text-2xl sm:text-3xl font-bold text-[#0B192C] tracking-tight"
            >
              {project.title}
            </h2>
            <p className="text-sm text-slate-500">
              Categories: {project.categories.join(' · ')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-[#0B192C]">Project Overview</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{project.overview}</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-[#0B192C]">Project Objective</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{project.objective}</p>
            </div>
          </div>

          <div className="space-y-3 pt-2 border-t border-slate-100">
            <h3 className="text-sm font-semibold text-[#0B192C]">Features Developed</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.featuresDeveloped.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-600">
                  <CheckCircle2
                    className="w-4 h-4 text-[#9E761F] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-2 pt-2 border-t border-slate-100">
            <h3 className="text-sm font-semibold text-[#0B192C]">Tools &amp; Approaches Used</h3>
            <p className="text-sm text-slate-600">{project.toolsUsed.join(' · ')}</p>
            <p className="text-xs text-slate-500 pt-1">{project.livePreviewNote}</p>
          </div>

          <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            <a
              href={SITE_CONFIG.googleDrivePortfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-[#0B192C] bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap"
            >
              <span>View Drive Portfolio Folder</span>
              <ExternalLink className="w-4 h-4" aria-hidden="true" />
            </a>

            <Link
              to="/contact#project-enquiry"
              onClick={onClose}
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-[#0B192C] bg-[#C89B3C] hover:bg-[#D9B15B] rounded-lg transition-colors whitespace-nowrap"
            >
              Request a Similar Solution
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
