import React from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2, Building, Sparkles } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-[#0c0c0f] relative border-b border-[#1c1c22]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#16161c] border border-[#272733] text-xs font-semibold text-[#FF6A00] uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Work Experience <span className="text-[#FF5500]">Timeline</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-3xl mt-3 font-normal leading-relaxed">
            A proven track record of engineering scalable WordPress architectures, dynamic JetEngine query structures, and high-revenue WooCommerce environments.
          </p>
        </div>

        {/* Vertical Timeline Structure */}
        <div className="relative border-l border-[#24242e] ml-3 sm:ml-6 space-y-12 pl-6 sm:pl-10">
          {EXPERIENCES.map((exp, index) => (
            <div
              key={exp.id}
              id={`experience-timeline-item-${exp.id}`}
              className="relative group"
            >
              {/* Timeline Pin Indicator */}
              <div className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-transform duration-300 group-hover:scale-125 ${
                exp.current
                  ? 'border-[#FF5500] bg-[#FF5500] shadow-lg shadow-[#FF5500]/40'
                  : 'border-[#3a3a46] bg-[#141419]'
              }`}>
                {exp.current ? (
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                ) : (
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
                )}
              </div>

              {/* Experience Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#111115] border border-[#22222a] group-hover:border-[#FF5500]/40 transition-all duration-300 shadow-xl space-y-5">
                
                {/* Header: Role, Company, Period */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#1e1e26]">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#FF6A00] transition-colors">
                        {exp.role}
                      </h3>
                      {exp.current && (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#FF5500]/20 text-[#FF6A00] border border-[#FF5500]/40">
                          Current Role
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-400 mt-1">
                      <span className="font-semibold text-zinc-200 flex items-center gap-1.5">
                        <Building className="w-3.5 h-3.5 text-[#FF5500]" />
                        {exp.company}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-zinc-500" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#17171f] border border-[#272733] text-xs font-mono font-medium text-zinc-300 self-start sm:self-auto">
                    <Calendar className="w-3.5 h-3.5 text-[#FF5500]" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Bullets List */}
                <div className="space-y-2.5">
                  {exp.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-[#FF5500] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Badges Used in Role */}
                <div className="pt-4 border-t border-[#1e1e26] flex flex-wrap items-center gap-2">
                  <span className="text-xs text-zinc-400 mr-1">Skills:</span>
                  {exp.skillsUsed.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-[11px] font-medium bg-[#16161c] text-zinc-300 border border-[#252530] rounded-lg"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
