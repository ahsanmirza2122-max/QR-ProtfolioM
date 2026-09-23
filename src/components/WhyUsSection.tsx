import React from 'react';
import { Sparkles, Heart, Gift, Package } from 'lucide-react';

export const WhyUsSection: React.FC = () => {
  const pillars = [
    {
      title: 'Personal Touch',
      description: 'Every gift is customized to reflect your personal connection, emotions, and shared memories.',
      icon: Heart,
    },
    {
      title: 'Thoughtfully Designed',
      description: 'Carefully styled arrangements, elegant color balances, and tasteful presentation aesthetics.',
      icon: Sparkles,
    },
    {
      title: 'Made for Special Moments',
      description: 'Dedicated to honoring birthdays, anniversaries, weddings, and celebrations that matter most.',
      icon: Gift,
    },
    {
      title: 'Customized With Care',
      description: 'Attention to detail in assembling every box, ribbon, message card, and bespoke keepsake.',
      icon: Package,
    },
  ];

  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[#9B7836] font-semibold block">
            Our Commitment
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1E1E1E]">
            Why Elegance by Fatima
          </h2>
          <div className="w-16 h-[1.5px] bg-[#C5A059] mx-auto mt-2" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 sm:p-8 rounded-xl border border-[#E8DFD0] text-center flex flex-col items-center space-y-3 hover:border-[#C5A059] transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-[#FAF7F2] border border-[#E6CA85] flex items-center justify-center text-[#9B7836] mb-1">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-medium text-[#1E1E1E]">
                  {item.title}
                </h3>
                <p className="text-xs text-[#6B655F] leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
