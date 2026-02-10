'use client';

import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppSticky() {
  const openWhatsApp = () => {
    window.open(
      'https://api.whatsapp.com/send?phone=918921954132',
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <div className="global-whatsapp-sticky">
      <button
        onClick={openWhatsApp}
        className="whatsapp-btn"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp />
      </button>
    </div>
  );
}
