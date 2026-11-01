import { Phone, ShieldCheck } from 'lucide-react';
import EMICalculator from './EMICalculator';
import { SITE } from '@/lib/site';

/** Top of the page: headline, short intro, and the EMI calculator. */
export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-to-b from-white via-white to-[#eef2fa] dark:from-[#060f26] dark:to-[#0a1838]">
      {/* Soft decorative glow using the brand gold */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold/15 blur-3xl" />
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 md:grid-cols-2 md:gap-12 md:px-6 md:py-20">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-gold/15 px-3 py-1 text-sm font-semibold text-navy dark:text-gold">
            <ShieldCheck size={16} /> {SITE.tagline}
          </p>
          <h1 className="text-4xl font-extrabold leading-tight text-navy md:text-5xl dark:text-white">
            Finance for your <span className="text-gold">vehicle</span>, <span className="text-gold">home</span> and <span className="text-gold">business</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-navy/70 dark:text-white/70">
            Easy finance for new and pre-owned vehicles, home loans and loans against property. Loans from ₹50,000 up to ₹5 crore with quick approval and minimum paperwork.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#enquiry" className="rounded-lg bg-gold px-6 py-3 text-center font-semibold text-navy shadow-md transition hover:-translate-y-0.5 hover:bg-gold-light">
              Check your eligibility
            </a>
            <a href={`tel:${SITE.phoneTel}`} className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-navy px-6 py-3 font-semibold text-navy transition hover:bg-navy hover:text-white dark:border-gold dark:text-gold dark:hover:bg-gold dark:hover:text-navy">
              <Phone size={18} /> Call {SITE.phoneDisplay}
            </a>
          </div>
        </div>

        <EMICalculator />
      </div>
    </section>
  );
}
