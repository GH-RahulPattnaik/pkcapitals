'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

/** Switches between light and dark mode and remembers the choice. */
export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  // Read the current mode once the page has loaded
  useEffect(() => {
    setDark(document.documentElement.classList.contains('dark'));
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light');
    } catch {
      /* storage may be blocked; the switch still works for this visit */
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="rounded-lg p-2 text-navy transition hover:bg-navy/10 dark:text-gold dark:hover:bg-white/10"
    >
      {dark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}
