import { CheckCircle2, Clock, Users, Wallet, FileCheck2 } from 'lucide-react';
import Reveal from './Reveal';

const BENEFITS = [
  { icon: Wallet, title: 'Loans from ₹50,000 to ₹5 crore', text: 'A loan size that fits you, from small to large.' },
  { icon: Users, title: 'First-time buyers to fleet operators', text: 'Whether you are buying your first vehicle or a whole fleet.' },
  { icon: Clock, title: 'Flexible tenure', text: 'Choose a repayment period that suits your budget.' },
  { icon: FileCheck2, title: 'Quick approval, minimal paperwork', text: 'Simple process and fast decisions.' },
  { icon: CheckCircle2, title: 'Dedicated relationship manager', text: 'One person to help you from start to finish.' },
];

/** Key benefits band in navy and gold. */
export default function Benefits() {
  return (
    <section className="bg-gradient-to-r from-navy to-navy-light px-4 py-14 md:px-6 md:py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="text-center text-3xl font-extrabold md:text-4xl">Why choose PK Capital</h2>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {BENEFITS.map((b, i) => {
            const Icon = b.icon;
            return (
              <Reveal key={b.title} delay={i * 0.05}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                  <Icon className="mb-3 text-gold" size={28} />
                  <h3 className="text-base font-bold">{b.title}</h3>
                  <p className="mt-2 text-sm text-white/70">{b.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
