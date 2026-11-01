import Reveal from './Reveal';

const VEHICLES = [
  'Cars',
  'Small commercial vehicles',
  'Light commercial vehicles',
  'Medium commercial vehicles',
  'Heavy commercial vehicles',
  'Trailers',
  'Tippers',
  'Tankers',
  'Buses',
  'Tractors',
];

/** List of vehicle types we finance, both new and pre-owned. */
export default function Vehicles() {
  return (
    <section id="vehicles" className="scroll-mt-20 bg-navy px-4 py-16 md:px-6 md:py-24 text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-wider text-gold">New &amp; pre-owned</p>
          <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">Vehicles we finance</h2>
          <p className="mt-4 max-w-md text-white/75">
            From your first car to a fleet of trucks. We finance both new and pre-owned vehicles.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-2">
            {VEHICLES.map((v) => (
              <li key={v} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-medium">
                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                {v}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
