export function OdaaLogo({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="odaa-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--gold)" />
          <stop offset="100%" stopColor="var(--primary)" />
        </linearGradient>
      </defs>
      <path
        d="M24 44V26"
        stroke="url(#odaa-g)"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <path
        d="M24 30l-7-6M24 32l7-6"
        stroke="url(#odaa-g)"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M12 22c-4 0-6-3-5-6.5C8 12 11 11 13 11.5 13.5 7 17 4 21 4c3 0 5.5 1.6 6.8 4C29.6 6.7 32 6.4 34 7.4c2.6 1.3 3.6 4 3 6.3 3.3.4 5 3 4.6 5.7-.5 3-3.2 4.6-6.6 4.6H12z"
        fill="url(#odaa-g)"
        fillOpacity="0.9"
      />
    </svg>
  );
}
