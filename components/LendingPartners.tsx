import Reveal from './Reveal';

/** Lenders PK Capital is an authorised dealer for. Edit this list in one place. */
const PARTNERS = [
  'Arka Fincap Limited',
  'Tata Capital Limited',
  'Cholamandalam Investment and Finance Company (Chola)',
];

/** Shows the lenders and the lowest interest message. */
export default function LendingPartners() {
  return (
    <section className="bg-white px-4 py-12 md:px-6 md:py-16 dark:bg-[#060f26]">
      <div className="mx-auto max-w-6xl text-center">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-wider text-gold">Authorised dealer in</p>
          <h2 className="mt-2 text-2xl font-extrabold text-navy md:text-3xl dark:text-white">Our lending partners</h2>
          <p className="mx-auto mt-3 max-w-2xl text-navy/70 dark:text-white/70">
            Lowest interest rates from our trusted lenders. Final rate depends on your profile.
          </p>
        </Reveal>
        <ul className="mt-8 grid gap-4 sm:grid-cols-3">
          {PARTNERS.map((p, i) => (
            <Reveal key={p} delay={i * 0.05}>
              <li className="flex h-full items-center justify-center rounded-2xl border border-navy/10 bg-navy/[0.03] px-5 py-6 font-bold text-navy dark:border-white/10 dark:bg-white/5 dark:text-white">
                {p}
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}