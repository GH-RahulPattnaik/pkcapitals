import { Phone, MapPin, Mail, Clock, MessageCircle } from 'lucide-react';
import { SITE } from '@/lib/site';
import { whatsappLink } from '@/lib/utils';
import Reveal from './Reveal';

/** Contact details, opening hours and a Google Maps embed. */
export default function Contact() {
  const rows = [
    { icon: Phone, label: 'Phone', value: SITE.phoneDisplay, href: `tel:${SITE.phoneTel}` },
    { icon: Mail, label: 'Email', value: SITE.email, href: `mailto:${SITE.email}` },
    { icon: MapPin, label: 'Address', value: SITE.address },
    { icon: Clock, label: 'Hours', value: SITE.hours },
  ];

  return (
    <section id="contact" className="scroll-mt-20 bg-white px-4 py-16 md:px-6 md:py-24 dark:bg-[#060f26]">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-wider text-gold">Visit or call</p>
          <h2 className="mt-2 text-3xl font-extrabold text-navy md:text-4xl dark:text-white">Contact us</h2>
          <ul className="mt-8 space-y-5">
            {rows.map((r) => {
              const Icon = r.icon;
              const body = (
                <>
                  <p className="text-sm text-navy/60 dark:text-white/60">{r.label}</p>
                  <p className="font-semibold text-navy dark:text-white">{r.value}</p>
                </>
              );
              return (
                <li key={r.label} className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy text-gold">
                    <Icon size={20} />
                  </span>
                  {r.href ? <a href={r.href} className="hover:opacity-80">{body}</a> : <div>{body}</div>}
                </li>
              );
            })}
          </ul>
          <a href={whatsappLink(SITE.whatsappNumber, 'Hello PK Capital, I need a loan enquiry.')} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-5 py-3 font-semibold text-white hover:brightness-95">
            <MessageCircle size={18} /> Chat on WhatsApp
          </a>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="h-full min-h-[320px] overflow-hidden rounded-2xl border border-navy/10 shadow-lg dark:border-white/10">
            {/* Placeholder map: replace SITE.mapsEmbedUrl in lib/site.ts with your real embed link */}
            <iframe
              title="PK Capital office location on Google Maps"
              src={SITE.mapsEmbedUrl}
              className="h-full min-h-[320px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
