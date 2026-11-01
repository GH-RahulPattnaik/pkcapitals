import Logo from './Logo';
import { SITE } from '@/lib/site';

/** Footer with the required disclaimer. */
export default function Footer() {
  return (
    <footer className="bg-navy px-4 py-10 text-white md:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
        <div className="flex items-center gap-3">
          <Logo className="h-12 w-12" />
          <div>
            <p className="font-bold">PK Capital</p>
            <p className="text-sm text-white/70">{SITE.tagline}</p>
          </div>
        </div>
        <p className="max-w-md text-sm text-white/70">
          All loans are subject to approval. Terms and conditions apply.
        </p>
      </div>
      <p className="mt-8 text-center text-xs text-white/50">
        © {new Date().getFullYear()} PK Capital. All rights reserved.
      </p>
    </footer>
  );
}
