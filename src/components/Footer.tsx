import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp, Heart, Linkedin, Mail, Phone, ExternalLink } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Experience', href: '#experience' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer id="main-footer" className="bg-[#08080a] text-zinc-400 text-xs border-t border-[#18181f] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#1a1a22]">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center">
              <BrandLogo size="lg" height={54} />
            </div>

            <p className="text-zinc-400 text-xs leading-relaxed max-w-sm">
              Professional WordPress & WooCommerce Developer with 3 years of experience based in Lahore, Pakistan. Specializing in Elementor Pro, Crocoblock JetEngine, ACF, and Google Core Web Vitals speed optimization.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#14141a] border border-[#242430] hover:border-[#ff5733] hover:text-[#ff6b35] flex items-center justify-center text-zinc-300 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="w-8 h-8 rounded-lg bg-[#14141a] border border-[#242430] hover:border-[#ff5733] hover:text-[#ff6b35] flex items-center justify-center text-zinc-300 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="w-8 h-8 rounded-lg bg-[#14141a] border border-[#242430] hover:border-[#ff5733] hover:text-[#ff6b35] flex items-center justify-center text-zinc-300 transition-colors"
                aria-label="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href="https://zaxflix.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#14141a] border border-[#242430] hover:border-[#ff5733] hover:text-[#ff6b35] flex items-center justify-center text-zinc-300 transition-colors"
                aria-label="Zaxflix Live"
                title="Zaxflix.com"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-[#ff6b35] transition-colors inline-block py-1 text-zinc-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Location & Current Availability */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Work Inquiries
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Available for freelance contracts, custom theme developments, speed optimizations, or full-time remote roles.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#141419] border border-[#24242e] text-[11px] text-zinc-300">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span>Open for new projects</span>
              </span>
            </div>
          </div>

        </div>

        {/* Bottom copyright and back-to-top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-400 text-center sm:text-left">
            © 2025 <strong className="text-zinc-200">Kaif Qaiser</strong>. All Rights Reserved. Built with modern web standards.
          </p>

          <button
            onClick={scrollToTop}
            id="back-to-top-btn"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#14141a] hover:bg-[#ff5733] border border-[#242430] hover:border-[#ff5733] text-zinc-300 hover:text-white transition-all duration-200 cursor-pointer text-xs"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
