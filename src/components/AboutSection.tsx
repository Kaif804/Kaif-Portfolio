import React, { useState } from 'react';
import { PERSONAL_INFO, SKILLS_LIST, SKILL_CATEGORIES, EDUCATION } from '../data/portfolioData';
import { User, Sparkles, GraduationCap, MapPin, Mail, Phone, ExternalLink, Check, Laptop, Shield } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | string>('all');

  return (
    <section id="about" className="py-24 bg-[#09090b] relative border-b border-[#1c1c22]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#18181e] border border-[#272732] text-xs font-semibold text-[#FF6A00] uppercase tracking-wider mb-3">
            <User className="w-3.5 h-3.5" />
            <span>About Kaif Qaiser</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Creative Background & <span className="text-[#FF5500]">Professional Skills</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-3xl mt-3 font-normal leading-relaxed">
            No fluff, just measurable results. Smart WordPress architecture and high-performance development built to support your workflow and deliver real commercial impact.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Detailed Bio & Education */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Bio Card */}
            <div className="p-7 rounded-2xl bg-[#111115] border border-[#22222a] space-y-5">
              <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2.5">
                <Laptop className="w-5 h-5 text-[#FF5500]" />
                <span>3 Years of Dedicated Engineering</span>
              </h3>
              
              <p className="text-sm text-zinc-300 leading-relaxed font-normal">
                {PERSONAL_INFO.bio}
              </p>

              <p className="text-sm text-zinc-400 leading-relaxed">
                Skilled in designing, developing, and maintaining modern, responsive, and high-performance WordPress websites. Experienced in collaborating effectively with domestic and international design agencies, SaaS startups, and eCommerce founders.
              </p>

              {/* Quick Info Grid */}
              <div className="pt-4 border-t border-[#1f1f26] grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-[#16161c] border border-[#252530]">
                  <span className="text-zinc-400 block text-[11px]">Location</span>
                  <span className="font-semibold text-white mt-0.5 block">{PERSONAL_INFO.location}</span>
                </div>
                <div className="p-3 rounded-xl bg-[#16161c] border border-[#252530]">
                  <span className="text-zinc-400 block text-[11px]">Experience</span>
                  <span className="font-semibold text-white mt-0.5 block">{PERSONAL_INFO.experienceYears} Industry Delivery</span>
                </div>
                <div className="p-3 rounded-xl bg-[#16161c] border border-[#252530]">
                  <span className="text-zinc-400 block text-[11px]">Primary Tools</span>
                  <span className="font-semibold text-white mt-0.5 block">Elementor Pro + JetEngine</span>
                </div>
                <div className="p-3 rounded-xl bg-[#16161c] border border-[#252530]">
                  <span className="text-zinc-400 block text-[11px]">Languages</span>
                  <span className="font-semibold text-white mt-0.5 block">English, Urdu</span>
                </div>
              </div>
            </div>

            {/* Education Cards from Resume */}
            <div className="p-7 rounded-2xl bg-[#111115] border border-[#22222a] space-y-4">
              <div className="flex items-center gap-2 text-sm font-bold text-white">
                <GraduationCap className="w-5 h-5 text-[#FF5500]" />
                <span>Education & Credentials</span>
              </div>

              <div className="space-y-4 pt-2">
                {EDUCATION.map((edu, i) => (
                  <div key={i} className="relative pl-4 border-l-2 border-[#FF5500]/40 space-y-1">
                    <span className="text-[11px] font-semibold text-[#FF6A00] uppercase tracking-wider">
                      {edu.period}
                    </span>
                    <h4 className="text-sm font-semibold text-white">{edu.degree}</h4>
                    <p className="text-xs text-zinc-400">{edu.institution} • {edu.location}</p>
                    <p className="text-xs text-zinc-400 pt-0.5">{edu.details}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Skills & Tags */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Primary Requested Skills Tag Grid */}
            <div className="p-7 rounded-2xl bg-[#111115] border border-[#22222a] space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h3 className="text-lg font-bold text-white">Core Competencies & Stack</h3>
                  <p className="text-xs text-zinc-400 mt-0.5">Prompt specified technologies and frameworks</p>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-[#FF5500]/15 text-[#FF6A00] border border-[#FF5500]/30 self-start sm:self-auto">
                  14 Core Proficiencies
                </span>
              </div>

              {/* Tags Cloud */}
              <div className="flex flex-wrap gap-2 pt-2">
                {SKILLS_LIST.map((skill) => (
                  <div
                    key={skill}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium bg-[#16161c] text-zinc-200 border border-[#282832] hover:border-[#FF5500] hover:text-white hover:bg-[#1c1c24] transition-all duration-200 shadow-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF5500]" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Categorized Deep-Dive Skills with Progress Visualizers */}
            <div className="p-7 rounded-2xl bg-[#111115] border border-[#22222a] space-y-6">
              
              {/* Category Filter Pills */}
              <div className="flex flex-wrap items-center gap-2 pb-2 border-b border-[#1e1e26]">
                <button
                  onClick={() => setActiveTab('all')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                    activeTab === 'all'
                      ? 'bg-gradient-to-r from-[#FF6A00] to-[#E61E00] text-white shadow-md shadow-[#FF5500]/25'
                      : 'text-zinc-400 hover:text-white hover:bg-[#181820]'
                  }`}
                >
                  All Categories
                </button>
                {SKILL_CATEGORIES.map((cat) => (
                  <button
                    key={cat.category}
                    onClick={() => setActiveTab(cat.category)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                      activeTab === cat.category
                        ? 'bg-gradient-to-r from-[#FF6A00] to-[#E61E00] text-white shadow-md shadow-[#FF5500]/25'
                        : 'text-zinc-400 hover:text-white hover:bg-[#181820]'
                    }`}
                  >
                    {cat.category}
                  </button>
                ))}
              </div>

              {/* Skills Display */}
              <div className="space-y-6">
                {SKILL_CATEGORIES.filter(
                  (cat) => activeTab === 'all' || activeTab === cat.category
                ).map((cat) => (
                  <div key={cat.category} className="space-y-3.5">
                    <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                      {cat.category}
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {cat.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="p-3.5 rounded-xl bg-[#16161c] border border-[#24242e] hover:border-[#FF5500]/40 transition-colors"
                        >
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-xs font-semibold text-zinc-200">
                              {skill.name}
                            </span>
                            <span className="text-[11px] font-mono font-medium text-[#FF6A00]">
                              {skill.level}%
                            </span>
                          </div>
                          
                          {/* Progress Bar */}
                          <div className="w-full h-1.5 bg-[#22222b] rounded-full overflow-hidden">
                            <div
                              className="h-full rounded-full bg-gradient-to-r from-[#FF5500] to-[#E61E00] transition-all duration-700"
                              style={{ width: `${skill.level}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
