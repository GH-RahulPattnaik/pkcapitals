/**
 * Calculate the monthly EMI.
 * Formula: EMI = P × r × (1 + r)^n / ((1 + r)^n − 1)
 * P = principal, r = monthly rate, n = number of months.
 */
export function calculateEMI(principal: number, annualRate: number, months: number): number {
  if (principal <= 0 || months <= 0) return 0;
  const r = annualRate / 100 / 12;
  if (r === 0) return Math.round(principal / months);
  const factor = Math.pow(1 + r, months);
  return Math.round((principal * r * factor) / (factor - 1));
}

/** Format a number as Indian rupees, e.g. ₹27,326 */
export function formatINR(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
}

/** Keep a number inside a range */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

/** Build a wa.me link with a pre-filled message */
export function whatsappLink(number: string, message: string): string {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

/** Indian mobile: 10 digits, starts with 6 to 9 (a leading 91 country code is allowed) */
export function isValidPhone(phone: string): boolean {
  let digits = phone.replace(/\D/g, '');
  if (digits.length === 12 && digits.startsWith('91')) digits = digits.slice(2);
  return /^[6-9]\d{9}$/.test(digits);
}
