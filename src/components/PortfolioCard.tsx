import { useState } from 'react';
import { ArrowUpRight, Layers } from 'lucide-react';
import type { PortfolioProject } from '../data/portfolio';

interface PortfolioCardProps {
  project: PortfolioProject;
  onSelect: (project: PortfolioProject) => void;
}

export function PortfolioCard({ project, onSelect }: PortfolioCardProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <article className="group flex flex-col bg-white border border-slate-200 rounded-xl overflow-hidden transition-all duration-200 hover:border-[#0B192C]/40 hover:shadow-md">
      <button
        type="button"
        onClick={() => onSelect(project)}
        className="relative aspect-[4/3] w-full bg-slate-100 overflow-hidden text-left focus-visible:outline-none"
        aria-label={`View case study details for ${project.title}`}
      >
        {!imgError ? (
          <img
            src={project.image}
            alt={project.imageAlt}
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#0B192C] to-[#1D3557] text-white text-center">
            <Layers className="w-8 h-8 text-[#D9B15B] mb-2" aria-hidden="true" />
            <span className="text-sm font-semibold">{project.title}</span>
          </div>
        )}
      </button>

      <div className="flex flex-col flex-1 p-6 space-y-4">
        <div className="flex items-center flex-wrap gap-x-2 gap-y-1 text-xs font-medium text-slate-500">
          <span className="text-[#9E761F] font-semibold">{project.primaryCategory}</span>
          <span aria-hidden="true">·</span>
          <span>{project.projectTypeLabel}</span>
        </div>

        <h3 className="text-lg font-semibold text-[#0B192C] leading-snug">
          <button
            type="button"
            onClick={() => onSelect(project)}
            className="text-left hover:text-[#9E761F] transition-colors"
          >
            {project.title}
          </button>
        </h3>

        <p className="text-sm text-slate-600 leading-relaxed flex-1">
          {project.shortDescription}
        </p>

        <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
          <p className="text-xs text-slate-500 truncate" title={project.toolsUsed.join(' · ')}>
            {project.toolsUsed.slice(0, 2).join(' · ')}
          </p>
          <button
            type="button"
            onClick={() => onSelect(project)}
            className="inline-flex items-center gap-1 text-sm font-semibold text-[#0B192C] hover:text-[#9E761F] transition-colors whitespace-nowrap shrink-0"
          >
            <span>View Details</span>
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </article>
  );
}
