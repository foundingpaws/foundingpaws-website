type Props = { className?: string };

export default function IconScience({ className }: Props) {
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
      {/* Microscope */}
      <path d="M9 3v5l-5 9a2 2 0 0 0 2 3h12a2 2 0 0 0 2-3l-5-9V3" />
      <path d="M9 8h6" />
      {/* Scientific symbols */}
      <circle cx="18" cy="6" r="2" />
      <path d="M16 6l2 2" />
      <path d="M20 6l-2 2" />
      {/* Data points */}
      <circle cx="4" cy="18" r="1" fill="currentColor" opacity="0.6" />
      <circle cx="8" cy="16" r="1" fill="currentColor" opacity="0.6" />
      <circle cx="12" cy="14" r="1" fill="currentColor" opacity="0.6" />
    </svg>
  );
}
