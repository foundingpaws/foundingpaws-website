type Props = { className?: string };

export default function IconHeart({ className }: Props) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* Outer glow effect */}
      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.9"/>
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.6"/>
        </linearGradient>
      </defs>
      
      {/* Main heart shape with gradient */}
      <path 
        d="M16 28.5l-2.5-2.3C8.5 20.5 4 16.8 4 12.5c0-3.5 2.5-6 6-6 2.2 0 4.2 1.1 5.5 2.8C16.8 7.6 18.8 6.5 21 6.5c3.5 0 6 2.5 6 6 0 4.3-4.5 8-9.5 13.7L16 28.5z" 
        fill="url(#heartGradient)"
        filter="url(#glow)"
      />
      
      {/* Inner heart highlight */}
      <path 
        d="M16 28.5l-2.5-2.3C8.5 20.5 4 16.8 4 12.5c0-3.5 2.5-6 6-6 2.2 0 4.2 1.1 5.5 2.8C16.8 7.6 18.8 6.5 21 6.5c3.5 0 6 2.5 6 6 0 4.3-4.5 8-9.5 13.7L16 28.5z" 
        fill="none"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.3"
      />
      
      {/* Elegant heartbeat line */}
      <path 
        d="M10 12l3 3 6-6 3 3" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        opacity="0.8"
        fill="none"
      />
      
      {/* Premium sparkle effects */}
      <circle cx="8" cy="8" r="1" fill="currentColor" opacity="0.6"/>
      <circle cx="24" cy="8" r="1" fill="currentColor" opacity="0.6"/>
      <circle cx="8" cy="24" r="1" fill="currentColor" opacity="0.6"/>
      <circle cx="24" cy="24" r="1" fill="currentColor" opacity="0.6"/>
      
      {/* Central premium glow */}
      <circle cx="16" cy="16" r="3" fill="currentColor" opacity="0.15"/>
      <circle cx="16" cy="16" r="1.5" fill="currentColor" opacity="0.3"/>
      
      {/* Subtle inner details */}
      <path d="M14 14l2 2 2-2" stroke="currentColor" strokeWidth="0.5" opacity="0.4" fill="none"/>
    </svg>
  );
}