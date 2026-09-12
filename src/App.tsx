import React, { useState } from 'react';
import { MediaProvider } from './context/MediaContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsBar } from './components/StatsBar';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ExperienceSection } from './components/ExperienceSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CvModal } from './components/CvModal';

export function App() {
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState<string>('');

  const handleSelectService = (serviceTitle: string) => {
    setSelectedServiceForQuote(serviceTitle);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <MediaProvider>
      <div className="min-h-screen bg-[#09090b] text-[#f4f4f5] flex flex-col relative selection:bg-[#FF5500]/30 selection:text-[#FF6A00]">
        {/* Top Fixed Navbar */}
        <Navbar
          onOpenCv={() => setCvModalOpen(true)}
          onOpenContact={handleOpenContact}
        />

        {/* Main Page Sections in exact order */}
        <main className="flex-1">
          {/* 1. Hero Section */}
          <Hero
            onOpenCv={() => setCvModalOpen(true)}
            onOpenPortfolio={handleOpenPortfolio}
          />

          {/* 2. Stats Bar & Tech Trust */}
          <StatsBar />

          {/* 3. About & Skills Section */}
          <AboutSection />

          {/* 4. Services Section (Accordion & Card Switcher) */}
          <ServicesSection onSelectService={handleSelectService} />

          {/* 5. Featured Portfolio Section (Zaxflix & More) */}
          <PortfolioSection />

          {/* 6. Work Experience Timeline & Credentials */}
          <ExperienceSection />

          {/* 7. Client Testimonials */}
          <TestimonialsSection />

          {/* 8. Contact & Quote Request Section */}
          <ContactSection preselectedService={selectedServiceForQuote} />
        </main>

        {/* Footer */}
        <Footer />

        {/* Printable / Viewable Digital CV Modal */}
        <CvModal
          isOpen={cvModalOpen}
          onClose={() => setCvModalOpen(false)}
        />
      </div>
    </MediaProvider>
  );
}

export default App;
