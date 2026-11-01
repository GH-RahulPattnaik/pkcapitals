# PK Capital website

One-page site for PK Capital, "Your Growth Partner". Built with Next.js 15 (App Router), TypeScript, Tailwind CSS and Framer Motion.

## Run locally

    npm install
    cp .env.example .env.local   # then fill in the values
    npm run dev

## Before going live

1. **Resend (enquiry emails):** create an API key at resend.com, verify your domain, and set `RESEND_API_KEY`, `ENQUIRY_TO_EMAIL` and `ENQUIRY_FROM_EMAIL`.
2. **Business details:** in `lib/site.ts`, replace the placeholder email, hours, address and Google Maps embed URL. The phone number comes from the poster.
3. **Site URL:** set `NEXT_PUBLIC_SITE_URL` to the live domain (used for the sitemap, canonical link and Open Graph tags).
4. **Deploy:** push to GitHub and import the repo in Vercel. Add the same environment variables under Project Settings > Environment Variables.

## Where things are

- `lib/site.ts`: business details, loan limits (₹50,000 to ₹5 crore, 7–30% rate, 6–84 months) and loan types.
- `components/EMICalculator.tsx`: sliders plus typed number boxes, live EMI.
- `app/api/enquiry/route.ts`: validates the enquiry and sends it with Resend.
- `app/layout.tsx`: SEO title, description, keywords, Open Graph and local business JSON-LD.
- `app/sitemap.ts`, `app/robots.ts`: search engine files.
- `public/logo.png`: PK Capital logo.
