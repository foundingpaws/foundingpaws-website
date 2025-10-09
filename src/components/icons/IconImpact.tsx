type Props = { className?: string };

export default function IconImpact({ className }: Props) {
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
      <defs>
        <linearGradient id="impactGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.9"/>
          <stop offset="50%" stopColor="currentColor" stopOpacity="0.7"/>
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.5"/>
        </linearGradient>
        <filter id="impactGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Main chart/graph background */}
      <rect x="4" y="8" width="24" height="16" rx="2" 
            fill="url(#impactGradient)" 
            filter="url(#impactGlow)"/>
      
      {/* Chart bars showing growth */}
      <rect x="8" y="18" width="3" height="4" fill="currentColor" opacity="0.8"/>
      <rect x="12" y="16" width="3" height="6" fill="currentColor" opacity="0.8"/>
      <rect x="16" y="14" width="3" height="8" fill="currentColor" opacity="0.8"/>
      <rect x="20" y="12" width="3" height="10" fill="currentColor" opacity="0.8"/>
      
      {/* Chart grid lines */}
      <path d="M8 20h16" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
      <path d="M8 16h16" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
      <path d="M8 12h16" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
      
      {/* Growth arrow */}
      <path d="M24 6l4 4-4 4" stroke="currentColor" strokeWidth="2" opacity="0.8"/>
      <path d="M26 8h2" stroke="currentColor" strokeWidth="2" opacity="0.8"/>
      
      {/* Percentage symbol */}
      <circle cx="6" cy="6" r="2" fill="currentColor" opacity="0.6"/>
      <path d="M5 5l2 2" stroke="currentColor" strokeWidth="1" opacity="0.8"/>
      <path d="M7 5l-2 2" stroke="currentColor" strokeWidth="1" opacity="0.8"/>
      
      {/* Premium corner details */}
      <circle cx="6" cy="24" r="0.8" fill="currentColor" opacity="0.3"/>
      <circle cx="26" cy="24" r="0.8" fill="currentColor" opacity="0.3"/>
      
      {/* Central highlight */}
      <circle cx="16" cy="16" r="2" fill="currentColor" opacity="0.1"/>
      
      {/* Impact waves */}
      <circle cx="16" cy="16" r="4" stroke="currentColor" strokeWidth="0.8" opacity="0.2" fill="none"/>
      <circle cx="16" cy="16" r="6" stroke="currentColor" strokeWidth="0.6" opacity="0.1" fill="none"/>
    </svg>
  );
}
