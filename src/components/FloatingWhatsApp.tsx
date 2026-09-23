import React from 'react';
import { MessageCircle } from 'lucide-react';
import { handleWhatsAppClick } from '../config/links';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={() =>
          handleWhatsAppClick('Hello Elegance by Fatima! I would like to inquire about a customized gift.')
        }
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 border-2 border-white focus:outline-none cursor-pointer"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#C5A059] rounded-full border-2 border-white" />
      </button>
    </div>
  );
};
