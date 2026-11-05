export const SITE = {
  name: 'PK Capital',
  tagline: 'Your Growth Partner',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://pkcapital.example.com',
  phoneDisplay: '+91 82491 52952',
  phoneTel: '+918249152952',
  whatsappNumber: '918249152952',
  email: 'info@pkcapital.example.com',
  address: 'Near Natraj Royal Hotel, Bypass Road, Cuttack, Odisha, India',
  hours: 'Mon – Sat: 10:00 AM – 7:00 PM',
  mapsEmbedUrl:
    'https://www.google.com/maps?q=20.953171,86.134235&z=17&output=embed',
};

export const LOAN_LIMITS = {
  amount: { min: 50000, max: 50000000, step: 5000, default: 1000000 },
  rate: { min: 7, max: 30, step: 0.1, default: 14 },
  tenure: { min: 6, max: 84, step: 1, default: 48 },
};

export const LOAN_TYPES = [
  'New vehicle loan',
  'Used vehicle loan',
  'Used car loan',
  'Used commercial vehicle loan',
  'Used construction equipment loan',
  'Home loan',
  'Loan against property',
  'Secured business loan',
] as const;

export type LoanType = (typeof LOAN_TYPES)[number];
