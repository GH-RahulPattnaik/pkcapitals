'use client';

import { useState, type FormEvent } from 'react';
import { MessageCircle, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { LOAN_TYPES, SITE } from '@/lib/site';
import { isValidPhone, whatsappLink } from '@/lib/utils';

type Status = 'idle' | 'sending' | 'sent' | 'error';

/**
 * Enquiry form.
 * - "Send enquiry" posts to /api/enquiry, which emails the team through Resend.
 * - "Send on WhatsApp" opens a wa.me link with the details already filled in.
 */
export default function EnquiryForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [loanType, setLoanType] = useState<string>(LOAN_TYPES[0]);
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

  /** Check the fields before sending anything. Returns an error text or null. */
  function validate(): string | null {
    if (name.trim().length < 2) return 'Please enter your name.';
    if (!isValidPhone(phone)) return 'Please enter a valid 10-digit mobile number.';
    if (!loanType) return 'Please choose a loan type.';
    return null;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const problem = validate();
    if (problem) {
      setError(problem);
      setStatus('error');
      return;
    }
    setError('');
    setStatus('sending');
    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, loanType, message }),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('sent');
      setName('');
      setPhone('');
      setMessage('');
    } catch {
      setError('Sorry, your enquiry could not be sent. Please try WhatsApp or call us.');
      setStatus('error');
    }
  }

  /** Open WhatsApp with the details filled in. */
  function sendOnWhatsApp() {
    const problem = validate();
    if (problem) {
      setError(problem);
      setStatus('error');
      return;
    }
    setError('');
    const text = `Hello PK Capital, I want to enquire about a ${loanType}.\nName: ${name}\nPhone: ${phone}${message ? `\nMessage: ${message}` : ''}`;
    window.open(whatsappLink(SITE.whatsappNumber, text), '_blank', 'noopener,noreferrer');
  }

  const inputClass =
    'w-full rounded-lg border border-navy/20 bg-white px-4 py-3 text-navy placeholder:text-navy/40 focus:border-gold dark:border-white/20 dark:bg-[#0c1a3d] dark:text-white dark:placeholder:text-white/40';

  return (
    <section id="enquiry" className="scroll-mt-20 bg-[#f4f6fb] px-4 py-16 md:px-6 md:py-24 dark:bg-[#0a1838]">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-gold">Get in touch</p>
          <h2 className="mt-2 text-3xl font-extrabold text-navy md:text-4xl dark:text-white">Get a call back</h2>
          <p className="mt-4 text-navy/70 dark:text-white/70">
            Tell us what you need. We will call you back on your number, usually within one working day.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl bg-white p-5 shadow-xl md:p-7 dark:bg-[#0c1a3d]" noValidate>
          <div>
            <label htmlFor="name" className="mb-1 block text-sm font-medium text-navy dark:text-white">Full name</label>
            <input id="name" value={name} onChange={(e) => setName(e.target.value)} className={inputClass} placeholder="Your full name" autoComplete="name" />
          </div>
          <div>
            <label htmlFor="phone" className="mb-1 block text-sm font-medium text-navy dark:text-white">Phone number</label>
            <input id="phone" type="tel" inputMode="numeric" value={phone} onChange={(e) => setPhone(e.target.value)} className={inputClass} placeholder="10-digit mobile number" autoComplete="tel" maxLength={14} />
          </div>
          <div>
            <label htmlFor="loanType" className="mb-1 block text-sm font-medium text-navy dark:text-white">Loan type</label>
            <select id="loanType" value={loanType} onChange={(e) => setLoanType(e.target.value)} className={inputClass}>
              {LOAN_TYPES.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="message" className="mb-1 block text-sm font-medium text-navy dark:text-white">Message <span className="text-navy/50 dark:text-white/50">(optional)</span></label>
            <textarea id="message" rows={3} value={message} onChange={(e) => setMessage(e.target.value)} className={inputClass} placeholder="Anything we should know?" />
          </div>

          {status === 'error' && error && (
            <p role="alert" className="flex items-start gap-2 rounded-lg bg-red-50 p-3 text-sm text-red-700">
              <AlertCircle size={18} className="mt-0.5 shrink-0" /> {error}
            </p>
          )}
          {status === 'sent' && (
            <p role="status" className="flex items-start gap-2 rounded-lg bg-green-50 p-3 text-sm text-green-800">
              <CheckCircle2 size={18} className="mt-0.5 shrink-0" /> Thank you! We will call you back soon.
            </p>
          )}

          <div className="grid gap-3 sm:grid-cols-2">
            <button type="submit" disabled={status === 'sending'} className="inline-flex items-center justify-center gap-2 rounded-lg bg-navy px-5 py-3 font-semibold text-white transition hover:bg-navy-light disabled:opacity-60">
              <Send size={18} /> {status === 'sending' ? 'Sending...' : 'Send enquiry'}
            </button>
            <button type="button" onClick={sendOnWhatsApp} className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-5 py-3 font-semibold text-white transition hover:brightness-95">
              <MessageCircle size={18} /> Send on WhatsApp
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
