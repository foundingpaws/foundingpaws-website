type Props = { className?: string };

export default function IconPassion({ className }: Props) {
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
      {/* Heart shape */}
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      
      {/* Heartbeat lines */}
      <path d="M8 8l2 2 4-4 2 2" strokeWidth="2" opacity="0.7" />
      
      {/* Sparkle effects */}
      <path d="M6 6l1 1" strokeWidth="1" opacity="0.5" />
      <path d="M18 6l-1 1" strokeWidth="1" opacity="0.5" />
      <path d="M6 18l1-1" strokeWidth="1" opacity="0.5" />
      <path d="M18 18l-1-1" strokeWidth="1" opacity="0.5" />
      
      {/* Central glow */}
      <circle cx="12" cy="12" r="2" fill="currentColor" opacity="0.1" />
    </svg>
  );
}
