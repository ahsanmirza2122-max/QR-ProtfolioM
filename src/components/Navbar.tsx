import React, { useState } from 'react';
import { Menu, X, MessageCircle, Instagram } from 'lucide-react';
import logoImg from '../assets/images/brand_logo_main_1790168619210.jpg';
import { handleWhatsAppClick, handleInstagramClick } from '../config/links';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'creations', label: 'Our Creations' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E8DFD0] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo & Name */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-3.5 text-left group focus:outline-none"
          >
            <div className="w-12 h-12 rounded-full overflow-hidden border border-[#D4AF37]/50 shadow-sm shrink-0 bg-[#FAF7F2] p-0.5 group-hover:border-[#C5A059] transition-colors">
              <img
                src={logoImg}
                alt="Elegance by Fatima Logo"
                className="w-full h-full object-cover rounded-full"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-medium tracking-wider text-[#1E1E1E] group-hover:text-[#9B7836] transition-colors">
                ELEGANCE BY FATIMA
              </span>
              <span className="text-[10px] tracking-[0.25em] text-[#8C7A60] uppercase font-sans -mt-0.5">
                Customized Gifts
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`relative py-1 transition-colors ${
                    isActive ? 'text-[#1E1E1E] font-semibold' : 'text-[#57534E] hover:text-[#1E1E1E]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#C5A059] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Icons: Instagram & WhatsApp */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={handleInstagramClick}
              aria-label="Instagram"
              title="Follow on Instagram"
              className="p-2.5 text-[#57534E] hover:text-[#1E1E1E] hover:bg-[#F3ECE1] rounded-full transition-colors flex items-center justify-center"
            >
              <Instagram className="w-5 h-5" />
            </button>

            <button
              onClick={() => handleWhatsAppClick('Hello Elegance by Fatima! I would like to inquire about a customized gift.')}
              aria-label="WhatsApp"
              title="Chat on WhatsApp"
              className="p-2.5 text-[#25D366] hover:bg-[#F3ECE1] rounded-full transition-colors flex items-center justify-center"
            >
              <MessageCircle className="w-5 h-5" />
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#1E1E1E] md:hidden hover:bg-[#F3ECE1] rounded-lg transition-colors ml-1"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E8DFD0] bg-[#FAF7F2] px-6 py-6 space-y-5 shadow-lg animate-fadeIn">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`text-left text-base font-medium py-2.5 border-b border-[#F0E8DC] transition-colors ${
                  activeSection === link.id ? 'text-[#9B7836] font-semibold' : 'text-[#3E3A37]'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleWhatsAppClick('Hello Elegance by Fatima! I would like to inquire about a customized gift.');
              }}
              className="w-full py-3 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-lg font-medium text-sm flex items-center justify-center gap-2 shadow-sm transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleInstagramClick();
              }}
              className="w-full py-3 bg-[#1E1E1E] hover:bg-[#2E2E2E] text-[#FAF7F2] rounded-lg font-medium text-sm flex items-center justify-center gap-2 transition-colors"
            >
              <Instagram className="w-4 h-4 text-[#E6CA85]" />
              <span>Follow on Instagram</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
