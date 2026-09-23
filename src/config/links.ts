// External connection links for Elegance by Fatima
export const WHATSAPP_PHONE = '923217719429';
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_PHONE}`;
export const INSTAGRAM_LINK = '[ADD ACTUAL INSTAGRAM LINK HERE]';

/**
 * Helper to safely trigger WhatsApp inquiry with optional prefilled message
 */
export const handleWhatsAppClick = (customMessage?: string) => {
  const url = customMessage
    ? `${WHATSAPP_LINK}?text=${encodeURIComponent(customMessage)}`
    : WHATSAPP_LINK;

  window.open(url, '_blank', 'noopener,noreferrer');
};

/**
 * Helper to safely trigger Instagram profile.
 */
export const handleInstagramClick = () => {
  if (INSTAGRAM_LINK && !INSTAGRAM_LINK.includes('[ADD ACTUAL')) {
    window.open(INSTAGRAM_LINK, '_blank', 'noopener,noreferrer');
  } else {
    window.open('https://instagram.com/', '_blank', 'noopener,noreferrer');
  }
};
