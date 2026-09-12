import React from 'react';
import { Project } from '../types';
import { X, ExternalLink, CheckCircle2, Zap, Tag, Layers, ArrowUpRight } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div 
        id="project-detail-modal"
        className="relative w-full max-w-4xl bg-[#111116] border border-[#2b2b36] rounded-2xl shadow-2xl overflow-hidden z-10 my-8 text-left"
      >
        {/* Modal Header bar */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-[#202028] bg-[#14141a]">
          <div>
            <span className="text-xs font-semibold text-[#FF6A00] uppercase tracking-wider">
              {project.categoryLabel}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
              {project.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-[#1c1c24] hover:bg-[#FF5500] text-zinc-400 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-7 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Main Showcase Image */}
          <div className="w-full aspect-[16/9] rounded-xl overflow-hidden bg-[#0a0a0c] border border-[#242430] relative group">
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top"
            />
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-[#FF6A00] to-[#E61E00] hover:from-[#FF7A1A] hover:to-[#FF2600] rounded-xl shadow-lg shadow-black/60 transition-all"
              >
                <span>Visit Live Website</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

          {/* Subtitle & Description */}
          <div>
            <h4 className="text-sm sm:text-base font-semibold text-zinc-200 mb-2">
              {project.subtitle}
            </h4>
            <p className="text-sm text-zinc-400 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Metrics Row */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-[#16161d] border border-[#242430]">
              {project.metrics.map((metric, i) => (
                <div key={i} className="text-center">
                  <span className="text-base sm:text-lg font-bold text-white block">
                    {metric.value}
                  </span>
                  <span className="text-[11px] text-zinc-400 block mt-0.5">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Deliverables Checklist */}
          {project.deliverables && (
            <div>
              <h5 className="text-xs font-bold text-zinc-300 uppercase tracking-wider mb-3">
                Key Technical Features & Deliverables
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-[#FF5500] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tags */}
          <div className="pt-4 border-t border-[#1f1f28]">
            <span className="text-xs font-medium text-zinc-400 block mb-2">Technologies Used:</span>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium text-zinc-300 bg-[#17171e] border border-[#262632] rounded-lg"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-5 border-t border-[#202028] bg-[#14141a] flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-zinc-400">
            Crafted by <strong className="text-white">Kaif Qaiser</strong>
          </div>

          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-[#FF6A00] to-[#E61E00] hover:from-[#FF7A1A] hover:to-[#FF2600] rounded-xl transition-all shadow-md shadow-[#FF5500]/20"
              >
                <span>Open Live Project</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-zinc-300 hover:text-white bg-[#1a1a22] border border-[#2a2a36] rounded-xl transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
