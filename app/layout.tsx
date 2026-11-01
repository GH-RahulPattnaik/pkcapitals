import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import './globals.css';
import { SITE } from '@/lib/site';

const TITLE = 'PK Capital | Vehicle, Home & Business Loans in Odisha';
const DESCRIPTION =
  'PK Capital, Your Growth Partner. Loans from ₹50,000 to ₹5 crore for new and used vehicles, commercial vehicles, home loans, loan against property and business loans in Odisha.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: TITLE, template: '%s | PK Capital' },
  description: DESCRIPTION,
  keywords: [
    'vehicle loan Odisha',
    'car loan Cuttack',
    'used car loan Odisha',
    'commercial vehicle loan Odisha',
    'truck loan Odisha',
    'home loan Cuttack',
    'loan against property Odisha',
    'business loan Odisha',
    'construction equipment loan Odisha',
    'PK Capital',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE.url,
    siteName: 'PK Capital',
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: '/logo.png', width: 1254, height: 1254, alt: 'PK Capital logo' }],
  },
  twitter: { card: 'summary', title: TITLE, description: DESCRIPTION, images: ['/logo.png'] },
  icons: { icon: '/logo.png', apple: '/logo.png' },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0B1F4B' },
    { media: '(prefers-color-scheme: dark)', color: '#060f26' },
  ],
};

/** Local business structured data helps local search ("loan near me" in Odisha). */
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FinancialService',
  name: 'PK Capital',
  description: DESCRIPTION,
  url: SITE.url,
  logo: `${SITE.url}/logo.png`,
  telephone: SITE.phoneTel,
  email: SITE.email,
  address: { '@type': 'PostalAddress', streetAddress: 'Byasanagar, Jaipur Road', addressLocality: 'Cuttack', addressRegion: 'Odisha', addressCountry: 'IN' },
  openingHours: 'Mo-Sa 10:00-19:00',
};

/** Runs before the page paints so dark mode never flashes. */
const themeScript = `try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Sans from Google Fonts. Falls back to system fonts if the request fails. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;500;600;700;800&display=swap"
        />
      </head>
      <body className="font-sans">
        {/* next/script handles inline scripts correctly in React 19 / Next.js 16 */}
        <Script id="theme-init" strategy="beforeInteractive">
          {themeScript}
        </Script>
        <Script id="ld-json" type="application/ld+json" strategy="beforeInteractive">
          {JSON.stringify(jsonLd)}
        </Script>
        {children}
      </body>
    </html>
  );
}