import { MessageCircle, Phone } from 'lucide-react';
import { SITE } from '@/lib/site';

/**
 * Floating call and WhatsApp buttons.
 * Shown on mobile only (they hide on desktop, where the header button is visible).
 */
export default function FloatingButtons() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3 md:hidden">
      <a
        href={`https://wa.me/${SITE.whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition active:scale-95"
      >
        <MessageCircle size={26} />
      </a>
      <a
        href={`tel:${SITE.phoneTel}`}
        aria-label="Call PK Capital"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-gold text-navy shadow-lg transition active:scale-95"
      >
        <Phone size={24} />
      </a>
    </div>
  );
}
