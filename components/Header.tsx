'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, PhoneCall } from 'lucide-react';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';

const NAV = [
  { href: '#services', label: 'Services' },
  { href: '#documents', label: 'Documents' },
  { href: '#contact', label: 'Contact' },
];

/** Sticky header with logo, navigation, theme switch and the call back button. */
export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-white/90 backdrop-blur dark:border-white/10 dark:bg-[#060f26]/90">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        <a href="#top" className="flex items-center gap-2" aria-label="PK Capital home">
          <Logo className="h-11 w-11" />
          <span className="hidden font-bold text-navy dark:text-white sm:block">PK Capital</span>
        </a>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-6 md:flex" aria-label="Main">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="font-medium text-navy hover:text-gold dark:text-white/90 dark:hover:text-gold">
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a href="#enquiry" className="hidden rounded-lg bg-gold px-4 py-2 text-sm font-semibold text-navy transition hover:bg-gold-light md:inline-flex md:items-center md:gap-2">
            <PhoneCall size={16} /> Get a call back
          </a>
          <button
            type="button"
            className="rounded-lg p-2 text-navy md:hidden dark:text-white"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-navy/10 md:hidden dark:border-white/10"
          >
            <nav className="flex flex-col gap-1 px-4 py-4" aria-label="Mobile">
              {NAV.map((n) => (
                <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 font-medium text-navy hover:bg-navy/5 dark:text-white dark:hover:bg-white/10">
                  {n.label}
                </a>
              ))}
              <a href="#enquiry" onClick={() => setOpen(false)} className="mt-2 rounded-lg bg-gold px-4 py-3 text-center font-semibold text-navy">
                Get a call back
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
