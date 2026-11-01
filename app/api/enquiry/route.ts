import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { isValidPhone } from '@/lib/utils';
import { LOAN_TYPES } from '@/lib/site';

/**
 * POST /api/enquiry
 * Receives the enquiry form and emails it to the PK Capital team using Resend.
 *
 * Required environment variables (set in .env.local locally and in Vercel project settings):
 *   RESEND_API_KEY      - API key from resend.com
 *   ENQUIRY_TO_EMAIL    - inbox that receives enquiries
 *   ENQUIRY_FROM_EMAIL  - a sender on a domain you verified in Resend
 */

export const runtime = 'nodejs';

/** Escape text before putting it into the HTML email. */
function esc(text: string): string {
  return text.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c] as string));
}

export async function POST(request: NextRequest) {
  let body: { name?: unknown; phone?: unknown; loanType?: unknown; message?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  const name = typeof body.name === 'string' ? body.name.trim() : '';
  const phone = typeof body.phone === 'string' ? body.phone.trim() : '';
  const loanType = typeof body.loanType === 'string' ? body.loanType : '';
  const message = typeof body.message === 'string' ? body.message.trim().slice(0, 1000) : '';

  // Server-side checks (never trust only the browser)
  if (name.length < 2 || !isValidPhone(phone) || !(LOAN_TYPES as readonly string[]).includes(loanType)) {
    return NextResponse.json({ error: 'Please check the name, phone and loan type.' }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.ENQUIRY_TO_EMAIL;
  const from = process.env.ENQUIRY_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    console.error('Enquiry email not sent: RESEND_API_KEY, ENQUIRY_TO_EMAIL or ENQUIRY_FROM_EMAIL is missing.');
    return NextResponse.json({ error: 'Email service is not configured.' }, { status: 500 });
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to,
    subject: `New loan enquiry: ${loanType} from ${name}`,
    html: `
      <h2>New enquiry from the PK Capital website</h2>
      <p><strong>Name:</strong> ${esc(name)}</p>
      <p><strong>Phone:</strong> ${esc(phone)}</p>
      <p><strong>Loan type:</strong> ${esc(loanType)}</p>
      <p><strong>Message:</strong> ${message ? esc(message) : '-'}</p>
      <p><strong>Received:</strong> ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST</p>
    `,
  });

  if (error) {
    console.error('Resend error:', error);
    return NextResponse.json({ error: 'Could not send the enquiry.' }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
