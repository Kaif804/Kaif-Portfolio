import React from 'react';
import { TESTIMONIALS } from '../data/portfolioData';
import { MessageSquareQuote, Star, Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-[#09090b] relative border-b border-[#1c1c22]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#16161c] border border-[#272733] text-xs font-semibold text-[#ff6b35] uppercase tracking-wider mb-3">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>Client Endorsements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Feedback From <span className="text-[#ff5733]">Clients & Collaborators</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mt-3 font-normal leading-relaxed">
            Real feedback from agency directors, eCommerce merchants, and startup founders on speed, communication, and engineering quality.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              id={`testimonial-card-${item.id}`}
              className="group p-7 rounded-2xl bg-[#111115] border border-[#22222a] hover:border-[#ff5733]/40 transition-all duration-300 flex flex-col justify-between shadow-xl relative"
            >
              {/* Quote Mark & Star Rating */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-[#181820] flex items-center justify-center text-[#ff5733]">
                    <Quote className="w-5 h-5 fill-current opacity-80" />
                  </div>
                  
                  {/* Star Rating */}
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#ff5733] text-[#ff5733]" />
                    ))}
                  </div>
                </div>

                {/* Project Badge */}
                <span className="inline-block text-[11px] font-semibold text-[#ff6b35] px-2.5 py-0.5 rounded-md bg-[#ff5733]/10 border border-[#ff5733]/20">
                  {item.projectType}
                </span>

                {/* Testimonial Quote Text */}
                <p className="text-sm text-zinc-300 leading-relaxed italic">
                  "{item.content}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-6 mt-6 border-t border-[#1e1e26] flex items-center gap-3.5">
                <img
                  src={item.avatar}
                  alt={item.name}
                  referrerPolicy="no-referrer"
                  className="w-11 h-11 rounded-full object-cover border border-[#2e2e3a]"
                />
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-[#ff6b35] transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-xs text-zinc-400">
                    {item.role}, <span className="text-zinc-300">{item.company}</span>
                  </p>
                </div>
              </div>

              {/* Top hover accent line */}
              <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#ff5733] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
