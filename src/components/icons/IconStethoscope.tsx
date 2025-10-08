type Props = { className?: string };

export default function IconStethoscope({ className }: Props) {
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
        <linearGradient id="stethGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.9"/>
          <stop offset="50%" stopColor="currentColor" stopOpacity="0.7"/>
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.5"/>
        </linearGradient>
        <filter id="stethGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Main stethoscope tube */}
      <path d="M8 4v8a5 5 0 0 0 10 0V4" 
            stroke="currentColor" 
            strokeWidth="2.5" 
            opacity="0.8"/>
      
      {/* Premium chest piece */}
      <circle cx="21" cy="12" r="3" 
              fill="url(#stethGradient)" 
              filter="url(#stethGlow)"/>
      
      {/* Chest piece border */}
      <circle cx="21" cy="12" r="3" 
              stroke="currentColor" 
              strokeWidth="1" 
              opacity="0.6" 
              fill="none"/>
      
      {/* Premium connecting tube */}
      <path d="M13 16v4a5 5 0 0 0 10 0v-3" 
            stroke="currentColor" 
            strokeWidth="2" 
            opacity="0.7"/>
      
      {/* Medical cross on chest piece */}
      <path d="M19 12h4" stroke="currentColor" strokeWidth="1.5" opacity="0.8"/>
      <path d="M21 10v4" stroke="currentColor" strokeWidth="1.5" opacity="0.8"/>
      
      {/* Premium ear pieces */}
      <circle cx="8" cy="4" r="1.5" fill="currentColor" opacity="0.6"/>
      <circle cx="18" cy="4" r="1.5" fill="currentColor" opacity="0.6"/>
      
      {/* Professional details */}
      <path d="M9 2h8" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
      <path d="M9 6h8" stroke="currentColor" strokeWidth="0.8" opacity="0.3"/>
      
      {/* Central highlight */}
      <circle cx="21" cy="12" r="1.5" fill="currentColor" opacity="0.2"/>
      
      {/* Premium accent lines */}
      <path d="M20 8l1 1" stroke="currentColor" strokeWidth="0.6" opacity="0.4"/>
      <path d="M22 8l-1 1" stroke="currentColor" strokeWidth="0.6" opacity="0.4"/>
    </svg>
  );
}


