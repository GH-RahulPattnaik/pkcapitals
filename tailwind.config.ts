import type { Config } from 'tailwindcss';

// Brand palette: navy, gold and white (poster colours)
const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0B1F4B',
          light: '#1a3a7a',
          dark: '#060f26',
        },
        gold: {
          DEFAULT: '#C9A227',
          light: '#e0bf4f',
        },
        // Poster green, used sparingly for "success" accents
        brandgreen: '#0f7a5a',
      },
      fontFamily: {
        sans: ['"Google Sans"', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
