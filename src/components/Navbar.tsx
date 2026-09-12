import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Code2, Download } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { BrandLogo } from './BrandLogo';

interface NavbarProps {
  onOpenCv: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCv, onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['home', 'about', 'services', 'portfolio', 'experience', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Experience', href: '#experience' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#09090b]/95 backdrop-blur-md border-b border-[#222228] py-2.5 shadow-2xl shadow-black/50'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Official Brand Logo */}
          <a
            href="#home"
            id="nav-logo"
            className="flex items-center group focus:outline-none transition-transform hover:scale-[1.03]"
            aria-label="Kaif Qaiser - WordPress Developer"
          >
            <BrandLogo
              size="xl"
              imgClassName={scrolled ? "h-9 sm:h-12 md:h-[52px]" : "h-10 sm:h-13 md:h-[60px]"}
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#121215]/80 border border-[#222228] rounded-full px-4 py-1.5 backdrop-blur-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <button
                  key={link.label}
                  id={`nav-link-${link.label.toLowerCase()}`}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-[#FF6A00] to-[#E61E00] text-white shadow-md shadow-[#FF5500]/30 font-semibold'
                      : 'text-zinc-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              id="nav-cv-btn"
              onClick={onOpenCv}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium text-zinc-300 hover:text-white border border-[#2a2a30] hover:border-[#FF5500]/40 rounded-xl bg-[#141418] transition-all duration-200"
            >
              <Download className="w-3.5 h-3.5 text-[#FF5500]" />
              <span>CV</span>
            </button>

            <button
              id="nav-hire-me-btn"
              onClick={() => {
                onOpenContact();
                handleNavClick('#contact');
              }}
              className="relative group inline-flex items-center gap-2 px-5 py-2 text-xs font-semibold text-white bg-gradient-to-r from-[#FF6A00] to-[#E61E00] hover:from-[#FF7A1A] hover:to-[#FF2600] rounded-xl shadow-lg shadow-[#FF5500]/25 hover:shadow-[#FF5500]/45 transition-all duration-200"
            >
              <span>Hire Me</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              id="mobile-hire-me-btn"
              onClick={() => handleNavClick('#contact')}
              className="px-3.5 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-[#FF6A00] to-[#E61E00] rounded-lg shadow-sm"
            >
              Hire Me
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-400 hover:text-white bg-[#141418] border border-[#222228] rounded-lg"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="md:hidden border-b border-[#222228] bg-[#0c0c0e] px-4 pt-3 pb-6 shadow-2xl space-y-3"
        >
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <button
                key={link.label}
                id={`mobile-link-${link.label.toLowerCase()}`}
                onClick={() => handleNavClick(link.href)}
                className={`text-left px-3 py-2 text-sm rounded-lg transition-colors ${
                  activeSection === link.href.replace('#', '')
                    ? 'bg-[#FF5500]/15 text-[#FF6A00] font-semibold border border-[#FF5500]/30'
                    : 'text-zinc-300 hover:bg-[#141418]'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-[#1e1e24] flex gap-2">
            <button
              id="mobile-drawer-cv-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCv();
              }}
              className="flex-1 inline-flex justify-center items-center gap-2 py-2.5 text-xs font-medium text-zinc-200 bg-[#15151a] border border-[#282830] rounded-lg"
            >
              <Download className="w-3.5 h-3.5 text-[#FF5500]" />
              <span>View Resume</span>
            </button>
            <button
              id="mobile-drawer-hire-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                handleNavClick('#contact');
              }}
              className="flex-1 inline-flex justify-center items-center gap-2 py-2.5 text-xs font-semibold text-white bg-[#FF5500] rounded-lg"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
