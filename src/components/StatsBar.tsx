import React from 'react';
import { STATS } from '../data/portfolioData';
import { Award, Briefcase, Smile, CheckCircle, ShieldCheck } from 'lucide-react';

export const StatsBar: React.FC = () => {
  const statIcons = [Award, Briefcase, Smile, CheckCircle];

  const trustedTech = [
    'WordPress Core',
    'Elementor Pro',
    'WooCommerce',
    'JetEngine (Crocoblock)',
    'ACF Pro',
    'PHP 8+',
    'MySQL',
    'WP Rocket',
    'Stripe Gateway'
  ];

  return (
    <section id="stats" className="py-12 bg-[#0d0d10] border-b border-[#1f1f26] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Four Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {STATS.map((stat, idx) => {
            const Icon = statIcons[idx % statIcons.length];
            return (
              <div
                key={stat.label}
                id={`stat-card-${idx}`}
                className="group relative p-6 rounded-2xl bg-[#121216] border border-[#22222a] hover:border-[#ff5733]/40 transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-[#ff5733]/5"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight group-hover:text-[#ff6b35] transition-colors">
                    {stat.value}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[#18181f] group-hover:bg-[#ff5733]/15 flex items-center justify-center text-zinc-400 group-hover:text-[#ff5733] transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-sm font-semibold text-zinc-200">
                  {stat.label}
                </h3>
                <p className="text-xs text-zinc-400 mt-1 font-normal">
                  {stat.subtext}
                </p>

                {/* Subtle top indicator bar on hover */}
                <div className="absolute -top-[1px] left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-[#ff5733] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            );
          })}
        </div>

        {/* Tech Stack Marquee / Pill Strip */}
        <div className="mt-10 pt-8 border-t border-[#1c1c24] flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-zinc-400 uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-[#ff5733]" />
            <span>Mastered Technologies</span>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-end gap-2 sm:gap-2.5">
            {trustedTech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-medium text-zinc-300 bg-[#16161c] border border-[#262630] rounded-lg hover:border-[#ff5733]/40 hover:text-white transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
