'use client';

import { useEffect, useState } from 'react';
import { LOAN_LIMITS } from '@/lib/site';
import { calculateEMI, clamp, formatINR } from '@/lib/utils';

/**
 * One input row: a slider plus a number box.
 * The user can drag the slider OR type an exact value.
 * Typing is allowed freely; the value is clamped to the range when the box loses focus.
 */
function RangeField({
  label,
  value,
  min,
  max,
  step,
  display,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  display: string;
  onChange: (v: number) => void;
}) {
  const [draft, setDraft] = useState(String(value));

  // Keep the typed box in sync when the slider moves
  useEffect(() => {
    setDraft(String(value));
  }, [value]);

  const fill = ((value - min) / (max - min)) * 100;

  function commit(raw: string) {
    const n = Number(raw);
    if (raw.trim() === '' || Number.isNaN(n)) {
      setDraft(String(value));
      return;
    }
    const v = clamp(n, min, max);
    onChange(v);
    setDraft(String(v));
  }

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <label className="text-sm font-medium text-navy/80 dark:text-white/80">{label}</label>
        <div className="flex items-center gap-2">
          {/* Shows the formatted value (e.g. ₹10,00,000) */}
          <span className="text-sm font-semibold text-navy dark:text-gold">{display}</span>
          {/* Typed entry */}
          <input
            type="number"
            inputMode="decimal"
            aria-label={`${label} exact value`}
            min={min}
            max={max}
            step={step}
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onBlur={(e) => commit(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') commit((e.target as HTMLInputElement).value);
            }}
            className="w-24 rounded-md border border-navy/20 bg-white px-2 py-1 text-right text-sm text-navy focus:border-gold dark:border-white/20 dark:bg-[#0c1a3d] dark:text-white"
          />
        </div>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        style={{ ['--fill' as string]: `${fill}%` }}
        className="range-gold w-full"
        aria-label={label}
      />
    </div>
  );
}

/** Live EMI calculator: loan amount, interest rate and tenure. */
export default function EMICalculator() {
  const [amount, setAmount] = useState(LOAN_LIMITS.amount.default);
  const [rate, setRate] = useState(LOAN_LIMITS.rate.default);
  const [months, setMonths] = useState(LOAN_LIMITS.tenure.default);

  const emi = calculateEMI(amount, rate, months);

  return (
    <div className="rounded-2xl border border-navy/10 bg-white p-5 shadow-xl md:p-7 dark:border-white/10 dark:bg-[#0c1a3d]">
      <h2 className="mb-1 text-xl font-bold text-navy dark:text-white">Estimate your monthly EMI</h2>
      <p className="mb-6 text-sm text-navy/60 dark:text-white/60">Drag the sliders or type a value.</p>

      <div className="space-y-6">
        <RangeField
          label="Loan amount"
          value={amount}
          min={LOAN_LIMITS.amount.min}
          max={LOAN_LIMITS.amount.max}
          step={LOAN_LIMITS.amount.step}
          display={formatINR(amount)}
          onChange={setAmount}
        />
        <RangeField
          label="Interest rate a year (%)"
          value={rate}
          min={LOAN_LIMITS.rate.min}
          max={LOAN_LIMITS.rate.max}
          step={LOAN_LIMITS.rate.step}
          display={`${rate}%`}
          onChange={(v) => setRate(Number(v.toFixed(2)))}
        />
        <RangeField
          label="Tenure (months)"
          value={months}
          min={LOAN_LIMITS.tenure.min}
          max={LOAN_LIMITS.tenure.max}
          step={LOAN_LIMITS.tenure.step}
          display={`${months} months`}
          onChange={setMonths}
        />
      </div>

      <div className="mt-7 rounded-xl bg-navy p-5 text-white">
        <p className="text-sm text-white/70">Estimated EMI per month</p>
        <p className="mt-1 text-3xl font-extrabold text-gold md:text-4xl" aria-live="polite">
          {formatINR(emi)}
        </p>
        <p className="mt-2 text-xs text-white/60">
          Illustrative only. Final rate confirmed on approval.
        </p>
      </div>
    </div>
  );
}
