type Props = { className?: string };

export default function IconBook({ className }: Props) {
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
      {/* Book cover */}
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      
      {/* Book pages */}
      <path d="M8 6h8" strokeWidth="1" opacity="0.6" />
      <path d="M8 8h8" strokeWidth="1" opacity="0.6" />
      <path d="M8 10h6" strokeWidth="1" opacity="0.6" />
      <path d="M8 12h8" strokeWidth="1" opacity="0.6" />
      <path d="M8 14h6" strokeWidth="1" opacity="0.6" />
      
      {/* Knowledge symbols */}
      <circle cx="12" cy="4" r="1" fill="currentColor" opacity="0.3" />
      <path d="M10 4l2 2 2-2" strokeWidth="1" opacity="0.5" />
      
      {/* Health cross */}
      <path d="M16 16h2" strokeWidth="1.5" opacity="0.7" />
      <path d="M17 15v2" strokeWidth="1.5" opacity="0.7" />
      
      {/* Scientific elements */}
      <path d="M4 8l2-2" strokeWidth="1" opacity="0.4" />
      <path d="M4 12l2-2" strokeWidth="1" opacity="0.4" />
    </svg>
  );
}
