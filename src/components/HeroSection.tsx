import React from 'react';
import { MessageCircle, Instagram } from 'lucide-react';
import heroImg from '../assets/images/hero_custom_gifts_1790168539627.jpg';
import { handleWhatsAppClick, handleInstagramClick } from '../config/links';

export const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative pt-8 sm:pt-16 pb-12 sm:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Brand Typography & Action Triggers */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8 text-center lg:text-left">
            <div className="inline-block">
              <span className="text-xs uppercase tracking-[0.25em] text-[#9B7836] font-semibold">
                ELEGANCE BY FATIMA
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1E1E1E] leading-[1.18] font-normal tracking-tight text-balance">
              Thoughtful Gifts, <br />
              <span className="italic font-light text-[#9B7836]">Made Personal.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#57534E] max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
              Beautiful customized gifts, thoughtfully created to make your special moments unforgettable.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() =>
                  handleWhatsAppClick(
                    'Hello Elegance by Fatima! I would like to chat about a customized gift idea.'
                  )
                }
                className="w-full sm:w-auto px-8 py-3.5 bg-[#25D366] hover:bg-[#20ba59] text-white text-sm font-semibold rounded-lg transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </button>

              <button
                onClick={handleInstagramClick}
                className="w-full sm:w-auto px-8 py-3.5 bg-[#1E1E1E] hover:bg-[#2E2E2E] text-[#FAF7F2] text-sm font-medium rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Instagram className="w-4 h-4 text-[#E6CA85]" />
                <span>Follow on Instagram</span>
              </button>
            </div>
          </div>

          {/* Right Column: Refined Visual Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Subtle gold accent frame border */}
              <div className="absolute -inset-3 sm:-inset-4 rounded-2xl border border-[#C5A059]/30 -rotate-1 pointer-events-none" />

              <div className="relative rounded-xl overflow-hidden shadow-2xl bg-[#F5EFEB] border border-[#E8DFD0] aspect-[16/11]">
                <img
                  src={heroImg}
                  alt="Customized luxury gift presentation by Elegance by Fatima"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-white/95 backdrop-blur-md p-4 rounded-lg border border-[#E6CA85]/60 shadow-lg">
                  <span className="text-[10px] uppercase tracking-widest text-[#9B7836] font-semibold block">
                    Customized Keepsakes
                  </span>
                  <p className="font-serif text-sm sm:text-base text-[#1E1E1E] mt-0.5">
                    Thoughtfully crafted for every milestone and celebration
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
