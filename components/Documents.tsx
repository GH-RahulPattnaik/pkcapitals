import { IdCard, House, Landmark, FileText, Receipt } from 'lucide-react';
import Reveal from './Reveal';

const DOCS = [
  { icon: IdCard, title: 'ID proof', text: 'A valid government photo ID.' },
  { icon: House, title: 'Address proof', text: 'Proof of where you currently live.' },
  { icon: Landmark, title: 'Bank statement', text: 'Your recent bank account statements.' },
  { icon: Receipt, title: 'Income proof', text: 'Proof of how you earn your income.' },
  { icon: FileText, title: 'Property documents', text: 'Papers for the property offered as security.' },
];

/** Checklist of documents the customer needs to keep ready. */
export default function Documents() {
  return (
    <section id="documents" className="scroll-mt-20 bg-white px-4 py-16 md:px-6 md:py-24 dark:bg-[#060f26]">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-wider text-gold">Keep these ready</p>
          <h2 className="mt-2 text-3xl font-extrabold text-navy md:text-4xl dark:text-white">Documents needed</h2>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {DOCS.map((d, i) => {
            const Icon = d.icon;
            return (
              <Reveal key={d.title} delay={i * 0.05}>
                <div className="flex gap-4 rounded-2xl border-l-4 border-gold bg-navy/[0.03] p-5 dark:bg-white/5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy text-gold">
                    <Icon size={22} />
                  </span>
                  <div>
                    <h3 className="font-bold text-navy dark:text-white">{d.title}</h3>
                    <p className="mt-1 text-sm text-navy/65 dark:text-white/65">{d.text}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
        <p className="mt-6 text-sm text-navy/60 dark:text-white/60">Our team will confirm the exact list for your loan type.</p>
      </div>
    </section>
  );
}
