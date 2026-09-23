import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { CreationsSection } from './components/CreationsSection';
import { WhyUsSection } from './components/WhyUsSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  // Scroll listener to update active nav state based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'creations', 'how-it-works', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#1E1E1E] selection:bg-[#E6CA85] selection:text-[#1E1E1E]">
      {/* Navigation Header */}
      <Navbar activeSection={activeSection} onNavigate={scrollToSection} />

      {/* Main Showcase & Introduction Sections */}
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <CreationsSection />
        <WhyUsSection />
        <HowItWorksSection />
        <ContactSection />
      </main>

      {/* Brand Footer */}
      <Footer onNavigate={scrollToSection} />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
