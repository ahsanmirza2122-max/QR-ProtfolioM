import React from 'react';
import { MessageCircle } from 'lucide-react';
import { handleWhatsAppClick } from '../config/links';

import coupleBoxImg from '../assets/images/product_couple_gift_box_1790168554302.jpg';
import customFrameImg from '../assets/images/product_custom_frame_1790168578263.jpg';
import anniversaryHamperImg from '../assets/images/product_anniversary_hamper_1790168593043.jpg';
import birthdayBoxImg from '../assets/images/product_custom_birthday_box_1790168635804.jpg';
import heroImg from '../assets/images/hero_custom_gifts_1790168539627.jpg';

interface CreationCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

export const CreationsSection: React.FC = () => {
  const categories: CreationCategory[] = [
    {
      id: 'customized-gifts',
      title: 'Customized Gifts',
      subtitle: 'Category Example',
      description: 'Bespoke gifts customized with names, dates, and personalized details for your special recipient.',
      image: heroImg,
    },
    {
      id: 'couple-gifts',
      title: 'Couple Gifts',
      subtitle: 'Category Example',
      description: 'Coordinated keepsake sets and custom pairings created to honor shared love stories.',
      image: coupleBoxImg,
    },
    {
      id: 'personalized-keepsakes',
      title: 'Personalized Keepsakes',
      subtitle: 'Category Example',
      description: 'Timeless memory plaques, customized frames, and keepsakes designed to be cherished for years.',
      image: customFrameImg,
    },
    {
      id: 'gift-boxes',
      title: 'Gift Boxes',
      subtitle: 'Category Example',
      description: 'Curated gift boxes finished with satin ribbons, thoughtful touches, and personalized note cards.',
      image: anniversaryHamperImg,
    },
    {
      id: 'birthday-gifts',
      title: 'Birthday Gifts',
      subtitle: 'Category Example',
      description: 'Celebratory customized hampers and personalized surprises designed to make birthdays memorable.',
      image: birthdayBoxImg,
    },
    {
      id: 'anniversary-gifts',
      title: 'Anniversary Gifts',
      subtitle: 'Category Example',
      description: 'Romantic arrangements, personalized keepsakes, and meaningful gifts celebrating milestone years.',
      image: anniversaryHamperImg,
    },
    {
      id: 'special-occasion-gifts',
      title: 'Special Occasion Gifts',
      subtitle: 'Category Example',
      description: 'Handcrafted gifts tailored for weddings, engagements, graduations, and other cherished moments.',
      image: coupleBoxImg,
    },
  ];

  return (
    <section id="creations" className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[#9B7836] font-semibold block">
            Inspiration & Examples
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1E1E1E]">
            Our Creations
          </h2>
          <div className="w-16 h-[1.5px] bg-[#C5A059] mx-auto mt-2" />
          <p className="text-xs sm:text-sm text-[#78716C] leading-relaxed pt-1">
            Browse examples of the customized gift styles and categories we create. Each order is tailored individually according to your preferences.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="bg-white rounded-xl border border-[#E8DFD0] overflow-hidden flex flex-col justify-between group hover:border-[#C5A059] transition-all duration-300 hover:shadow-md"
            >
              <div className="relative aspect-[16/11] bg-[#FAF7F2] overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-3 left-3 bg-[#1E1E1E]/85 text-[#E6CA85] text-[10px] font-medium px-2.5 py-1 rounded tracking-wider uppercase backdrop-blur-xs">
                  {cat.subtitle}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-serif text-xl font-medium text-[#1E1E1E] group-hover:text-[#9B7836] transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-[#6B655F] mt-2 leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F2ECE1]">
                  <button
                    onClick={() =>
                      handleWhatsAppClick(
                        `Hello Elegance by Fatima! I would like to ask about "${cat.title}" and learn more about customization options.`
                      )
                    }
                    className="w-full py-3 bg-[#FAF7F2] hover:bg-[#1E1E1E] text-[#1E1E1E] hover:text-[#FAF7F2] border border-[#D8CEBD] hover:border-[#1E1E1E] rounded-lg text-xs font-semibold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 text-[#25D366]" />
                    <span>Ask About This Gift</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-4">
          <p className="text-xs text-[#8C857E]">
            Have a custom theme or unique request in mind? We customize gifts for all occasions.
          </p>
        </div>
      </div>
    </section>
  );
};
