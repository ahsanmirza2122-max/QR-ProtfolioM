import React from 'react';
import { MessageCircle, Instagram } from 'lucide-react';
import logoImg from '../assets/images/brand_logo_main_1790168619210.jpg';
import { handleWhatsAppClick, handleInstagramClick } from '../config/links';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#181818] text-[#E7E2D9] pt-14 pb-10 border-t border-[#C5A059]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 text-center md:text-left">
          {/* Brand Identity Lockup */}
          <div className="space-y-3 max-w-sm">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-[#C5A059]/60 shrink-0 bg-[#FAF7F2] p-0.5">
                <img
                  src={logoImg}
                  alt="Elegance by Fatima Logo"
                  className="w-full h-full object-cover rounded-full"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="font-serif text-xl tracking-wider text-[#FAF7F2] block">
                  ELEGANCE BY FATIMA
                </span>
                <span className="text-[11px] tracking-[0.25em] text-[#C5A059] uppercase block font-sans">
                  Customized Gifts
                </span>
              </div>
            </div>
            <p className="font-serif text-sm text-[#D4CEBF] italic">
              "Thoughtful gifts, made personal."
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#E6CA85] font-semibold block">
              Navigation
            </span>
            <ul className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-xs text-[#A8A29E]">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-[#FAF7F2] transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#FAF7F2] transition-colors cursor-pointer"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('creations')}
                  className="hover:text-[#FAF7F2] transition-colors cursor-pointer"
                >
                  Our Creations
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('how-it-works')}
                  className="hover:text-[#FAF7F2] transition-colors cursor-pointer"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-[#FAF7F2] transition-colors cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Social Channels */}
          <div className="space-y-3 text-center md:text-right">
            <span className="text-xs uppercase tracking-widest text-[#E6CA85] font-semibold block">
              Social
            </span>
            <div className="flex items-center justify-center md:justify-end gap-3 text-xs">
              <button
                onClick={handleInstagramClick}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-[#2E2E2E] hover:bg-[#3D3D3D] text-[#FAF7F2] rounded-lg transition-colors cursor-pointer border border-[#3A3A3A]"
              >
                <Instagram className="w-3.5 h-3.5 text-[#E6CA85]" />
                <span>Instagram</span>
              </button>
              <button
                onClick={() =>
                  handleWhatsAppClick('Hello Elegance by Fatima! I would like to inquire about a customized gift.')
                }
                className="flex items-center gap-1.5 px-3 py-1.5 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-lg transition-colors cursor-pointer"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-[#2E2E2E] text-center text-xs text-[#8C857E]">
          <p>© 2026 Elegance by Fatima. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
