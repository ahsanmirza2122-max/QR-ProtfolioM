import React, { useState } from 'react';
import { MessageCircle, Instagram, Send, AlertCircle } from 'lucide-react';
import { handleWhatsAppClick, handleInstagramClick, WHATSAPP_PHONE } from '../config/links';

export const ContactSection: React.FC = () => {
  const [occasion, setOccasion] = useState('');
  const [recipient, setRecipient] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleCustomInquiry = (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedOccasion = occasion.trim();
    const trimmedRecipient = recipient.trim();
    const trimmedMessage = message.trim();

    // 1. Validation check for required fields
    if (!trimmedOccasion || !trimmedRecipient || !trimmedMessage) {
      if (!trimmedOccasion && !trimmedRecipient && !trimmedMessage) {
        setErrorMessage('Please fill in the occasion, recipient, and gift idea so we can assist you.');
      } else if (!trimmedOccasion) {
        setErrorMessage('Please specify the occasion (e.g. Birthday, Anniversary).');
      } else if (!trimmedRecipient) {
        setErrorMessage('Please let us know who the gift is for (e.g. Wife, Husband, Friend).');
      } else {
        setErrorMessage('Please share a brief gift idea or custom message.');
      }
      return;
    }

    setErrorMessage(null);

    // 2. Build the formatted WhatsApp message
    const formattedMessage =
`Hello Elegance by Fatima! ✨

I'd like to discuss a customized gift.

🎁 Occasion: ${trimmedOccasion}
❤️ Recipient: ${trimmedRecipient}

💌 Gift Idea / Custom Message:
${trimmedMessage}

Please let me know what options you recommend.

Thank you!`;

    // 3. Construct WhatsApp URL with correct encoding
    const encodedText = encodeURIComponent(formattedMessage);
    const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodedText}`;

    // 4. Open WhatsApp (opens app on mobile/Android or web on desktop)
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#F5EFEB] border-t border-[#E8DFD0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Heading & Subheading */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] text-[#9B7836] font-semibold block">
            Direct Inquiries
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#1E1E1E]">
            Let's Create Something Special
          </h2>
          <div className="w-16 h-[1.5px] bg-[#C5A059] mx-auto mt-2" />
          <p className="text-sm sm:text-base text-[#57534E] leading-relaxed pt-2">
            Have a gift idea in mind? Contact us and let's turn your idea into something meaningful.
          </p>
        </div>

        {/* Two Large Primary Contact Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto">
          <button
            onClick={() =>
              handleWhatsAppClick(
                "Hello Elegance by Fatima! ✨\n\nI'd like to discuss a customized gift."
              )
            }
            className="w-full py-4 px-6 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-xl text-base font-semibold transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-3 cursor-pointer"
          >
            <MessageCircle className="w-5 h-5" />
            <span>WhatsApp Us</span>
          </button>

          <button
            onClick={handleInstagramClick}
            className="w-full py-4 px-6 bg-[#1E1E1E] hover:bg-[#2E2E2E] text-[#FAF7F2] rounded-xl text-base font-semibold transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-3 cursor-pointer"
          >
            <Instagram className="w-5 h-5 text-[#E6CA85]" />
            <span>Instagram</span>
          </button>
        </div>

        {/* "Tell Us About Your Idea" Form Section */}
        <div className="bg-white p-6 sm:p-10 rounded-2xl border border-[#E8DFD0] shadow-sm max-w-2xl mx-auto space-y-6">
          <div className="text-center space-y-1">
            <h3 className="font-serif text-2xl text-[#1E1E1E]">
              Tell Us About Your Idea
            </h3>
            <p className="text-xs text-[#78716C]">
              Share a few quick details below and send them directly to us on WhatsApp.
            </p>
          </div>

          <form onSubmit={handleCustomInquiry} noValidate className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-[#44403C] mb-1">
                  Occasion <span className="text-[#C5A059]">*</span>
                </label>
                <input
                  type="text"
                  value={occasion}
                  onChange={(e) => {
                    setOccasion(e.target.value);
                    if (errorMessage) setErrorMessage(null);
                  }}
                  placeholder="e.g. Anniversary"
                  className="w-full px-3.5 py-2.5 text-xs bg-[#FAF7F2] border border-[#D8CEBD] rounded-lg focus:outline-none focus:border-[#C5A059] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#44403C] mb-1">
                  Recipient <span className="text-[#C5A059]">*</span>
                </label>
                <input
                  type="text"
                  value={recipient}
                  onChange={(e) => {
                    setRecipient(e.target.value);
                    if (errorMessage) setErrorMessage(null);
                  }}
                  placeholder="e.g. Wife"
                  className="w-full px-3.5 py-2.5 text-xs bg-[#FAF7F2] border border-[#D8CEBD] rounded-lg focus:outline-none focus:border-[#C5A059] transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-[#44403C] mb-1">
                Gift Idea or Custom Message <span className="text-[#C5A059]">*</span>
              </label>
              <textarea
                rows={3}
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                  if (errorMessage) setErrorMessage(null);
                }}
                placeholder="I want a customized anniversary gift box with our photo and a romantic message."
                className="w-full p-3.5 text-xs bg-[#FAF7F2] border border-[#D8CEBD] rounded-lg focus:outline-none focus:border-[#C5A059] leading-relaxed transition-colors"
              />
            </div>

            {/* Friendly Inline Error Message */}
            {errorMessage && (
              <div className="p-3 bg-[#FEF2F2] border border-[#FECACA] rounded-lg flex items-center gap-2 text-xs text-[#B91C1C] animate-fadeIn">
                <AlertCircle className="w-4 h-4 shrink-0 text-[#EF4444]" />
                <span>{errorMessage}</span>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3.5 bg-[#1E1E1E] hover:bg-[#25D366] hover:text-white text-[#FAF7F2] text-xs font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-sm group"
            >
              <Send className="w-3.5 h-3.5 text-[#E6CA85] group-hover:text-white transition-colors" />
              <span>Send Idea via WhatsApp</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
