import React, { useState } from 'react';
import { Project } from '../types';
import { PROJECTS } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { LayoutGrid, ExternalLink, ArrowRight, Eye, Sparkles } from 'lucide-react';

export const PortfolioSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'custom' | 'ecommerce' | 'dynamic'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filters = [
    { key: 'all', label: 'All Featured Projects' },
    { key: 'custom', label: 'Streaming / Web App' },
    { key: 'ecommerce', label: 'WooCommerce Stores' },
    { key: 'dynamic', label: 'Dynamic & JetEngine' },
  ];

  const filteredProjects = PROJECTS.filter((proj) => {
    if (activeFilter === 'all') return true;
    return proj.category === activeFilter;
  });

  return (
    <section id="portfolio" className="py-24 bg-[#09090b] relative border-b border-[#1c1c22]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#16161c] border border-[#272733] text-xs font-semibold text-[#ff6b35] uppercase tracking-wider mb-3">
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Selected Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Featured <span className="text-[#ff5733]">Portfolio</span>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mt-3 font-normal leading-relaxed">
              Real-world client solutions demonstrating high-performance architectures, complex WooCommerce configurations, and custom JetEngine data structures.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 p-1 bg-[#121216] border border-[#22222a] rounded-xl self-start md:self-auto">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key as any)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeFilter === f.key
                    ? 'bg-[#ff5733] text-white shadow-md shadow-[#ff5733]/20 font-semibold'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              id={`portfolio-card-${project.id}`}
              className="group relative rounded-2xl bg-[#121216] border border-[#22222a] hover:border-[#ff5733]/50 overflow-hidden transition-all duration-300 flex flex-col justify-between shadow-xl hover:shadow-2xl hover:shadow-[#ff5733]/10"
            >
              {/* Thumbnail Container with Hover Overlay */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#0a0a0d]">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />

                {/* Subtle dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#121216] via-transparent to-transparent opacity-80" />

                {/* Top Badge: Category */}
                <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                  <span className="px-2.5 py-1 text-[11px] font-semibold bg-[#0f0f13]/90 backdrop-blur-md text-white border border-[#2d2d38] rounded-md">
                    {project.categoryLabel}
                  </span>
                  {project.id === 'zaxflix' && (
                    <span className="px-2 py-0.5 text-[10px] font-bold bg-[#ff5733] text-white rounded-md flex items-center gap-1 shadow-sm">
                      <Sparkles className="w-2.5 h-2.5" /> Live URL
                    </span>
                  )}
                </div>

                {/* Hover Overlay with Action Buttons */}
                <div className="absolute inset-0 bg-black/75 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center p-6 text-center">
                  <h4 className="text-lg font-bold text-white mb-2">
                    {project.title}
                  </h4>
                  <p className="text-xs text-zinc-300 max-w-xs mb-5 line-clamp-2">
                    {project.subtitle}
                  </p>
                  
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-[#ff5733] hover:bg-[#ff6b35] transition-colors shadow-lg cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Details</span>
                    </button>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium text-zinc-200 bg-[#1e1e26] hover:bg-[#282834] border border-[#343442] hover:text-white transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span>Live Site</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-white group-hover:text-[#ff6b35] transition-colors">
                      {project.title}
                    </h3>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-500 hover:text-[#ff5733] transition-colors"
                        title="Visit external site"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                  <p className="text-xs text-zinc-400 mt-1 line-clamp-2">
                    {project.subtitle}
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="pt-2 border-t border-[#1e1e26]">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 text-[11px] font-medium rounded-md bg-[#181820] text-zinc-300 border border-[#282834]"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-0.5 text-[10px] text-zinc-400 rounded-md bg-[#16161c]">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-zinc-200 bg-[#181820] group-hover:bg-[#ff5733] group-hover:text-white transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>View Project</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
};
