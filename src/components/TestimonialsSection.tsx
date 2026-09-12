import React from 'react';
import { TESTIMONIALS } from '../data/portfolioData';
import { Quote, Star, MessageSquare } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-[#09090b] relative border-b border-[#1c1c22]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#16161c] border border-[#272733] text-xs font-semibold text-[#ff6b35] uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>CLIENT ENDORSEMENTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Feedback From <span className="text-[#ff5733]">Clients & Collaborators</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-3xl mt-3 font-normal leading-relaxed">
            Real feedback from agency directors, eCommerce merchants, and startup founders on speed, communication, and engineering quality.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              id={`testimonial-card-${testimonial.id}`}
              className="bg-[#101014] border border-[#22222a] hover:border-[#ff5733]/40 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#ff5733]/5 group"
            >
              <div>
                {/* Header with Quote Icon and Rating Stars */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-9 h-9 rounded-lg bg-[#1a1413] border border-[#ff5733]/20 flex items-center justify-center text-[#ff5733]">
                    <Quote className="w-4 h-4 fill-current" />
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[#ff5733] text-[#ff5733]"
                      />
                    ))}
                  </div>
                </div>

                {/* Project Badge */}
                {testimonial.projectType && (
                  <div className="mb-4">
                    <span className="inline-block px-2.5 py-1 rounded-md text-[11px] font-semibold bg-[#1a1413] border border-[#ff5733]/25 text-[#ff6b35]">
                      {testimonial.projectType}
                    </span>
                  </div>
                )}

                {/* Testimonial Quote Content */}
                <p className="text-sm text-zinc-300 italic font-normal leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>
              </div>

              {/* Client Info */}
              <div className="pt-4 border-t border-[#1e1e26]">
                <h4 className="text-sm font-bold text-white tracking-wide group-hover:text-[#ff6b35] transition-colors">
                  {testimonial.name}
                </h4>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
