/**
 * PK Capital logo (the shield/arrow "PK" mark from the brand file).
 * The logo sits on a white rounded tile so the navy letters stay visible in dark mode.
 */
export default function Logo({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center justify-center rounded-xl bg-white p-1 shadow-sm ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/logo.png" alt="PK Capital logo" className="h-full w-full object-contain" />
    </span>
  );
}
