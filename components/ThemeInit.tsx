'use client';

import { useEffect } from 'react';

/** Applies the saved or system dark mode once the page loads. Renders nothing. */
export default function ThemeInit() {
  useEffect(() => {
    try {
      const saved = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.documentElement.classList.toggle('dark', saved === 'dark' || (!saved && prefersDark));
    } catch {
      /* storage may be blocked; keep the default light mode */
    }
  }, []);

  return null;
}