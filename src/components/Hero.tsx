import React from 'react';
import { ArrowRight, Download, CheckCircle2, Sparkles, MapPin, Code2, Zap } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useMedia } from '../context/MediaContext';

interface HeroProps {
  onOpenCv: () => void;
  onOpenPortfolio: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCv, onOpenPortfolio }) => {
  const { profilePhoto } = useMedia();
  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-32 pb-20 flex items-center justify-center overflow-hidden border-b border-[#1c1c22]"
    >
      {/* Background Decorative Mesh & Radial Glows */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Ambient Top Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[400px] bg-gradient-to-b from-[#ff5733]/15 via-[#ff5733]/5 to-transparent blur-[120px] rounded-full" />
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}
        />

        {/* Ambient side accents */}
        <div className="absolute top-1/3 -left-32 w-72 h-72 bg-[#ff5733]/10 blur-[100px] rounded-full" />
        <div className="absolute bottom-10 -right-32 w-80 h-80 bg-[#ff6b35]/10 blur-[110px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Top Badge: Availability & Role */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#16161b] border border-[#2a2a34] text-zinc-300 text-xs font-medium shadow-inner">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Freelance & Full-time</span>
              <span className="text-zinc-600">|</span>
              <span className="text-[#ff6b35] font-semibold flex items-center gap-1">
                <MapPin className="w-3 h-3 inline" /> Lahore, PK
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              WordPress Developer Who Builds{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5733] via-[#ff7a59] to-[#ff9a3d]">
                Fast, Beautiful & Scalable
              </span>{' '}
              Websites
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-zinc-400 max-w-2xl font-normal leading-relaxed">
              <strong className="text-zinc-200 font-semibold">3 Years of Professional Experience</strong>
              <span className="mx-2 text-[#ff5733]">✦</span>
              <span>Elementor Pro</span>
              <span className="mx-2 text-[#ff5733]">✦</span>
              <span>WooCommerce</span>
              <span className="mx-2 text-[#ff5733]">✦</span>
              <span>JetEngine</span>
              <span className="mx-2 text-[#ff5733]">✦</span>
              <span>ACF</span>
            </p>

            {/* Concise Bio snippet */}
            <p className="text-xs sm:text-sm text-zinc-400/90 max-w-xl leading-relaxed border-l-2 border-[#ff5733]/60 pl-3.5 py-0.5">
              Transforming design visions and complex business models into responsive, clean-coded WordPress experiences with sub-second page loads and custom dynamic integrations.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <button
                id="hero-view-portfolio-btn"
                onClick={onOpenPortfolio}
                className="group inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 text-sm font-semibold text-white bg-[#ff5733] hover:bg-[#ff6b35] rounded-xl shadow-xl shadow-[#ff5733]/25 hover:shadow-[#ff5733]/40 transition-all duration-200 w-full sm:w-auto cursor-pointer"
              >
                <span>View Portfolio</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-download-cv-btn"
                onClick={onOpenCv}
                className="group inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 text-sm font-medium text-zinc-200 hover:text-white bg-[#141418] hover:bg-[#1c1c24] border border-[#2b2b35] hover:border-[#ff5733]/50 rounded-xl transition-all duration-200 w-full sm:w-auto cursor-pointer"
              >
                <Download className="w-4 h-4 text-[#ff5733] group-hover:scale-110 transition-transform" />
                <span>Download CV</span>
              </button>
            </div>

            {/* Micro Highlights Pill Row */}
            <div className="pt-3 flex flex-wrap gap-4 text-xs text-zinc-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#ff5733]" />
                <span>Clean Code & No Bloat</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#ff5733]" />
                <span>Google Core Web Vitals 90+</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#ff5733]" />
                <span>Payment Gateways & APIs</span>
              </div>
            </div>

          </div>

          {/* Right Column: Profile Presentation Card */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* Glowing Backdrop Frame */}
            <div className="relative w-full max-w-sm sm:max-w-md aspect-[3/4] rounded-3xl p-2 bg-gradient-to-b from-[#25252e] via-[#16161b] to-[#0d0d10] border border-[#2d2d38] shadow-2xl shadow-black/80 group">
              
              {/* Profile Image container */}
              <div className="w-full h-full rounded-2xl overflow-hidden relative bg-[#121215]">
                <img
                  src={profilePhoto}
                  alt={PERSONAL_INFO.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top filter contrast-105 group-hover:scale-102 transition-transform duration-700"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c10] via-transparent to-transparent opacity-85" />

                {/* In-Image Bottom Content */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#121216]/90 backdrop-blur-md border border-[#272733] shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-bold text-white tracking-wide">Kaif Qaiser</p>
                      <p className="text-xs text-zinc-400">Professional WP Architect</p>
                    </div>
                    <span className="px-2.5 py-1 text-[11px] font-semibold text-[#ff5733] bg-[#ff5733]/15 border border-[#ff5733]/30 rounded-lg">
                      3+ Yrs Exp
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: Top Left - Speed & Performance */}
              <div className="absolute -top-4 -left-4 sm:-left-6 px-3.5 py-2 rounded-xl bg-[#141419]/95 border border-[#2c2c36] shadow-xl backdrop-blur-md flex items-center gap-2.5 animate-bounce [animation-duration:4s]">
                <div className="w-7 h-7 rounded-lg bg-[#ff5733]/20 flex items-center justify-center text-[#ff5733]">
                  <Zap className="w-4 h-4 fill-current" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-white">90+ Performance</p>
                  <p className="text-[9px] text-zinc-400">Core Web Vitals</p>
                </div>
              </div>

              {/* Floating Badge 2: Bottom Right - JetEngine & ACF */}
              <div className="absolute -bottom-4 -right-4 sm:-right-6 px-3.5 py-2 rounded-xl bg-[#141419]/95 border border-[#2c2c36] shadow-xl backdrop-blur-md flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-[#ff5733]/20 flex items-center justify-center text-[#ff5733]">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-white">JetEngine & ACF</p>
                  <p className="text-[9px] text-zinc-400">Dynamic CPT Pro</p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
