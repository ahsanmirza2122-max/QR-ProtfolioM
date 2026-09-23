import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white border-y border-[#E8DFD0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <span className="text-xs uppercase tracking-[0.25em] text-[#9B7836] font-semibold block">
          Our Philosophy
        </span>

        <h2 className="font-serif text-3xl sm:text-4xl text-[#1E1E1E]">
          Made With Meaning
        </h2>

        <div className="w-16 h-[1.5px] bg-[#C5A059] mx-auto mt-2" />

        <p className="font-serif text-lg sm:text-2xl text-[#3A3530] font-light leading-relaxed max-w-3xl mx-auto pt-2 italic">
          "At Elegance by Fatima, we believe the most meaningful gifts are the ones created with thought, emotion and a personal touch. We create customized gifts designed to celebrate the people and moments that matter most."
        </p>

        <p className="text-xs sm:text-sm text-[#78716C] max-w-2xl mx-auto leading-relaxed pt-2">
          From personalized names and bespoke messages to custom presentation boxes, every piece is curated to reflect your unique sentiment and bring warmth to the recipient.
        </p>
      </div>
    </section>
  );
};
