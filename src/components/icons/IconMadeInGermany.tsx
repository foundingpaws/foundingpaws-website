type Props = { className?: string };

export default function IconMadeInGermany({ className }: Props) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* Factory/manufacturing building */}
      <path d="M3 21h18" />
      <path d="M5 21V7l8-4v18" />
      <path d="M19 21V11l-6-4" />
      {/* Chimney with smoke */}
      <path d="M8 8h2v4h-2z" />
      <path d="M8 6v2" />
      <path d="M8 4v2" />
      {/* Quality mark */}
      <circle cx="17" cy="8" r="2" />
      <path d="M16 8l1 1 2-2" />
      {/* German flag colors representation */}
      <path d="M3 3h18v2H3z" fill="currentColor" opacity="0.3" />
      <path d="M3 5h18v2H3z" fill="currentColor" opacity="0.5" />
      <path d="M3 7h18v2H3z" fill="currentColor" opacity="0.3" />
    </svg>
  );
}
