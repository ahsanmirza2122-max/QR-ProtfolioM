import React from 'react';

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Share Your Idea',
      description: "Tell us about the person, occasion and type of gift you're looking for.",
    },
    {
      num: '02',
      title: 'We Personalize It',
      description: "We'll discuss the customization details with you.",
    },
    {
      num: '03',
      title: 'Make Their Moment Special',
      description: 'Your personalized gift is prepared with care.',
    },
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-white border-y border-[#E8DFD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[#9B7836] font-semibold block">
            Simple Process
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1E1E1E]">
            How It Works
          </h2>
          <div className="w-16 h-[1.5px] bg-[#C5A059] mx-auto mt-2" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {steps.map((step) => (
            <div
              key={step.num}
              className="p-8 rounded-xl bg-[#FAF7F2] border border-[#E8DFD0] text-center flex flex-col items-center space-y-4 hover:border-[#C5A059] transition-colors"
            >
              <span className="font-serif text-3xl sm:text-4xl font-light text-[#C5A059] tracking-wider">
                {step.num}
              </span>

              <h3 className="font-serif text-xl font-medium text-[#1E1E1E]">
                {step.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#6B655F] leading-relaxed max-w-xs">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
