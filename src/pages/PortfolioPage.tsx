import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, FolderOpen } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { PortfolioCard } from '../components/PortfolioCard';
import { ProjectModal } from '../components/ProjectModal';
import {
  PORTFOLIO_CATEGORIES,
  PORTFOLIO_PROJECTS,
  type PortfolioCategory,
  type PortfolioProject,
} from '../data/portfolio';
import { SITE_CONFIG } from '../data/siteConfig';

export function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>('All');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  const filteredProjects =
    activeCategory === 'All'
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((project) =>
          project.categories.includes(activeCategory)
        );

  return (
    <>
      <SeoHead
        title="Portfolio & Demonstration Projects | Godwin Digital Hub"
        description="Browse demonstration websites, landing pages, sales funnels, digital stores, AI chatbot integrations, and short-form video editing work from Godwin Digital Hub."
        path="/portfolio"
      />

      {/* Page Hero */}
      <section className="bg-[#0B192C] text-white py-14 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-2xl space-y-4">
            <p className="text-sm font-semibold text-[#D9B15B]">Portfolio &amp; Demonstrations</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
              Practical Builds &amp; Capability Demonstrations
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Review sample project structures across business websites, booking systems, digital product storefronts, AI chatbots, automation workflows, and short-form video editing.
            </p>
          </div>

          <a
            href={SITE_CONFIG.googleDrivePortfolioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-[#0B192C] bg-[#C89B3C] hover:bg-[#D9B15B] rounded-lg transition-colors whitespace-nowrap shrink-0"
          >
            <FolderOpen className="w-4 h-4" aria-hidden="true" />
            <span>VIEW ALL PROJECTS</span>
            <ExternalLink className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </section>

      {/* Filter & Project Grid */}
      <section className="py-14 sm:py-20 bg-[#F6F8FB] min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Category Filters */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold text-slate-500">Filter by Category</p>
            <div
              role="group"
              aria-label="Filter portfolio projects by category"
              className="flex flex-wrap items-center gap-2"
            >
              {PORTFOLIO_CATEGORIES.map((category) => {
                const isActive = activeCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    aria-pressed={isActive}
                    className={`px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap ${
                      isActive
                        ? 'bg-[#0B192C] text-white'
                        : 'bg-white text-slate-700 border border-slate-200 hover:border-[#0B192C]/40 hover:text-[#0B192C]'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <PortfolioCard
                  key={project.id}
                  project={project}
                  onSelect={setSelectedProject}
                />
              ))}
            </div>
          ) : (
            <div className="p-10 rounded-xl bg-white border border-slate-200 text-center space-y-3">
              <p className="text-base font-semibold text-[#0B192C]">
                No demonstration projects found in this category yet.
              </p>
              <button
                type="button"
                onClick={() => setActiveCategory('All')}
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-[#0B192C] bg-[#C89B3C] hover:bg-[#D9B15B] rounded-lg transition-colors"
              >
                Show All Projects
              </button>
            </div>
          )}

          {/* Transparency Note & Drive Link */}
          <div className="p-6 sm:p-8 rounded-xl bg-white border border-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-1.5 max-w-2xl">
              <h2 className="text-lg font-bold text-[#0B192C]">
                Full Media &amp; Project Archive on Google Drive
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Additional screenshots, video editing reels, and demonstration walkthroughs are organised in our public view-only portfolio folder.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <a
                href={SITE_CONFIG.googleDrivePortfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-bold text-[#0B192C] bg-[#C89B3C] hover:bg-[#D9B15B] rounded-lg transition-colors whitespace-nowrap"
              >
                <span>VIEW ALL PROJECTS</span>
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
              </a>
              <Link
                to="/contact#project-enquiry"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-[#0B192C] bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  );
}
