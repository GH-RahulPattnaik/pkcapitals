import { Car, Bus, Home, Building2, Briefcase, Truck, HardHat, KeyRound } from 'lucide-react';
import Reveal from './Reveal';

const LOANS = [
  { title: 'New vehicle loan', desc: 'Drive home a brand-new car, bike or vehicle.', icon: Car },
  { title: 'Used vehicle loan', desc: 'Finance a pre-owned vehicle from any dealer.', icon: Car },
  { title: 'Used car loan', desc: 'Easy loans for second-hand cars.', icon: Car },
  { title: 'Used commercial vehicle loan', desc: 'Trucks and buses to grow your transport business.', icon: Truck },
  { title: 'Used construction equipment loan', desc: 'Excavators, loaders and more for your site.', icon: HardHat },
  { title: 'Home loan', desc: 'Buy or build the home you have planned for.', icon: Home },
  { title: 'Loan against property', desc: 'Unlock funds using your property as security.', icon: KeyRound },
  { title: 'Secured business loan', desc: 'Working capital and expansion, backed by security.', icon: Briefcase },
];

/** Grid of loan products. Each card can be tapped to start an enquiry. */
export default function Loans() {
  return (
    <section id="services" className="scroll-mt-20 bg-white px-4 py-16 md:px-6 md:py-24 dark:bg-[#060f26]">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-wider text-gold">Our services</p>
          <h2 className="mt-2 text-3xl font-extrabold text-navy md:text-4xl dark:text-white">Loans we offer</h2>
          <p className="mt-3 max-w-2xl text-navy/70 dark:text-white/70">Pick the loan that fits your need. Our team will guide you through the rest.</p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {LOANS.map((loan, i) => {
            const Icon = loan.icon;
            return (
              <Reveal key={loan.title} delay={(i % 4) * 0.06}>
                <a href="#enquiry" className="group flex h-full flex-col rounded-2xl border border-navy/10 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-gold hover:shadow-lg dark:border-white/10 dark:bg-[#0c1a3d] dark:hover:border-gold">
                  <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-gold transition group-hover:bg-gold group-hover:text-navy">
                    <Icon size={24} />
                  </span>
                  <h3 className="text-lg font-bold text-navy dark:text-white">{loan.title}</h3>
                  <p className="mt-2 text-sm text-navy/65 dark:text-white/65">{loan.desc}</p>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
