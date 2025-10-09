type Props = { className?: string };

export default function IconNonGMO({ className }: Props) {
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
      {/* DNA helix */}
      <path d="M12 2c-2 0-4 1-5 3-1 2-1 4 0 6 1 2 3 3 5 3s4-1 5-3c1-2 1-4 0-6-1-2-3-3-5-3z" />
      <path d="M12 2v10" />
      <path d="M8 6l2 2" />
      <path d="M16 6l-2 2" />
      <path d="M9 9l1.5 1.5" />
      <path d="M15 9l-1.5 1.5" />
      <path d="M12 12v6" />
      <path d="M10 18h4" />
      {/* No GMO symbol */}
      <circle cx="18" cy="6" r="3" />
      <path d="M16 6l4 4" strokeWidth="2" />
      <path d="M20 6l-4 4" strokeWidth="2" />
    </svg>
  );
}
