import React, { useState } from 'react';
import { SERVICES } from '../data/portfolioData';
import { 
  Code2, 
  ShoppingBag, 
  Layout, 
  Layers, 
  Zap, 
  ShieldCheck, 
  Compass, 
  Wrench, 
  ChevronDown, 
  CheckCircle2, 
  ArrowRight,
  ListFilter,
  Grid
} from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [viewMode, setViewMode] = useState<'accordion' | 'grid'>('accordion');
  const [expandedId, setExpandedId] = useState<string | null>('custom-wp');

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2': return <Code2 className="w-5 h-5 text-[#FF5500]" />;
      case 'ShoppingBag': return <ShoppingBag className="w-5 h-5 text-[#FF5500]" />;
      case 'Layout': return <Layout className="w-5 h-5 text-[#FF5500]" />;
      case 'Layers': return <Layers className="w-5 h-5 text-[#FF5500]" />;
      case 'Zap': return <Zap className="w-5 h-5 text-[#FF5500]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-[#FF5500]" />;
      case 'Compass': return <Compass className="w-5 h-5 text-[#FF5500]" />;
      case 'Wrench': return <Wrench className="w-5 h-5 text-[#FF5500]" />;
      default: return <Code2 className="w-5 h-5 text-[#FF5500]" />;
    }
  };

  const toggleAccordion = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="services" className="py-24 bg-[#0c0c0f] relative border-b border-[#1c1c22]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#16161c] border border-[#272733] text-xs font-semibold text-[#FF6A00] uppercase tracking-wider mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>Tailored Solutions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Specialized <span className="text-[#FF5500]">WordPress Services</span>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mt-3 font-normal leading-relaxed">
              Comprehensive web development from dynamic ACF architectures to lightning-fast WooCommerce stores and security hardening.
            </p>
          </div>

          {/* View Mode Switcher */}
          <div className="flex items-center gap-1.5 p-1 bg-[#141419] border border-[#252530] rounded-xl self-start md:self-auto">
            <button
              onClick={() => setViewMode('accordion')}
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                viewMode === 'accordion'
                  ? 'bg-gradient-to-r from-[#FF6A00] to-[#E61E00] text-white shadow-md shadow-[#FF5500]/25 font-semibold'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <ListFilter className="w-3.5 h-3.5" />
              <span>Accordion View</span>
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                viewMode === 'grid'
                  ? 'bg-gradient-to-r from-[#FF6A00] to-[#E61E00] text-white shadow-md shadow-[#FF5500]/25 font-semibold'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Grid className="w-3.5 h-3.5" />
              <span>Cards Grid</span>
            </button>
          </div>
        </div>

        {/* Accordion Layout (Inspired by reference visual) */}
        {viewMode === 'accordion' && (
          <div className="space-y-3">
            {SERVICES.map((service, index) => {
              const isExpanded = expandedId === service.id;
              return (
                <div
                  key={service.id}
                  id={`service-accordion-${service.id}`}
                  className={`rounded-2xl transition-all duration-200 border ${
                    isExpanded
                      ? 'bg-[#131318] border-[#FF5500]/50 shadow-xl shadow-[#FF5500]/5'
                      : 'bg-[#101014] border-[#202028] hover:border-[#2d2d38]'
                  }`}
                >
                  {/* Accordion Header Row */}
                  <button
                    onClick={() => toggleAccordion(service.id)}
                    className="w-full p-5 sm:p-6 flex items-center justify-between text-left focus:outline-none cursor-pointer"
                  >
                    <div className="flex items-center gap-4 sm:gap-5">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#181820] flex items-center justify-center shrink-0 border border-[#272733]">
                        {getServiceIcon(service.iconName)}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-mono text-zinc-400">0{index + 1}</span>
                          <span className="text-zinc-600">•</span>
                          <span className="text-xs text-[#FF6A00] font-medium hidden sm:inline">
                            {service.techStack[0]}
                          </span>
                        </div>
                        <h3 className="text-base sm:text-xl font-bold text-white tracking-tight mt-0.5">
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <div className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isExpanded
                          ? 'bg-[#FF5500] text-white rotate-180'
                          : 'bg-[#1a1a22] text-zinc-400 border border-[#282834]'
                      }`}>
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </div>
                  </button>

                  {/* Accordion Expanded Content */}
                  {isExpanded && (
                    <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-[#1d1d26] space-y-5">
                      <p className="text-sm text-zinc-300 leading-relaxed max-w-4xl">
                        {service.description}
                      </p>

                      <div>
                        <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-3">
                          Key Deliverables & Specifications
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {service.deliverables.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                              <CheckCircle2 className="w-4 h-4 text-[#FF5500] shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Bottom Action Row */}
                      <div className="pt-3 flex flex-wrap items-center justify-between gap-4 border-t border-[#1b1b22]">
                        <div className="flex flex-wrap items-center gap-1.5">
                          <span className="text-[11px] text-zinc-400 mr-1">Stack:</span>
                          {service.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-0.5 rounded-md bg-[#1a1a22] text-[11px] font-medium text-zinc-300 border border-[#292936]"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <button
                          onClick={() => onSelectService(service.title)}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#FF6A00] to-[#E61E00] hover:from-[#FF7A1A] hover:to-[#FF2600] transition-all shadow-md shadow-[#FF5500]/25"
                        >
                          <span>Request Quote for {service.title}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Card Grid Layout */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service, index) => (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className="group p-6 rounded-2xl bg-[#111115] border border-[#22222a] hover:border-[#FF5500]/50 transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-xl hover:shadow-[#FF5500]/5"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-[#181820] group-hover:bg-[#FF5500]/15 flex items-center justify-center border border-[#262632] group-hover:border-[#FF5500]/30 transition-colors">
                      {getServiceIcon(service.iconName)}
                    </div>
                    <span className="text-xs font-mono text-zinc-400">0{index + 1}</span>
                  </div>

                  <h3 className="text-base font-bold text-white tracking-tight mb-2 group-hover:text-[#FF6A00] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-6 pt-3 border-t border-[#1e1e26]">
                    {service.deliverables.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-[11px] text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FF5500] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#1e1e26] flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {service.techStack.slice(0, 2).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[10px] font-medium bg-[#16161c] text-zinc-400 border border-[#262630]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => onSelectService(service.title)}
                    className="p-2 rounded-lg bg-[#181820] hover:bg-[#FF5500] text-zinc-300 hover:text-white transition-colors"
                    title={`Request Quote for ${service.title}`}
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
