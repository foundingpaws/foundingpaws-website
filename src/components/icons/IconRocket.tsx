type Props = { className?: string };

export default function IconRocket({ className }: Props) {
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
      {/* Main rocket body - cylindrical */}
      <rect x="9" y="4" width="6" height="12" rx="3" />
      
      {/* Rocket nose cone - pointed tip */}
      <path d="M12 2l3 2-3 2-3-2z" />
      
      {/* Rocket fins - triangular at bottom */}
      <path d="M9 16l-2 3 2 1" />
      <path d="M15 16l2 3-2 1" />
      
      {/* Rocket flames - multiple streams */}
      <path d="M10 18l-1 3 1 1" />
      <path d="M12 18l-1 3 1 1" />
      <path d="M14 18l1 3-1 1" />
      
      {/* Rocket window - circular */}
      <circle cx="12" cy="8" r="1.5" fill="currentColor" opacity="0.2" />
      
      {/* Launch trajectory lines - diagonal upward */}
      <path d="M4 20l3-3" strokeWidth="1" opacity="0.4" />
      <path d="M20 20l-3-3" strokeWidth="1" opacity="0.4" />
      <path d="M6 22l2-2" strokeWidth="1" opacity="0.4" />
      <path d="M18 22l-2-2" strokeWidth="1" opacity="0.4" />
    </svg>
  );
}
