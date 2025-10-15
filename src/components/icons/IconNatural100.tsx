type Props = { className?: string };

export default function IconNatural100({ className }: Props) {
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
        <linearGradient id="naturalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.9"/>
          <stop offset="50%" stopColor="currentColor" stopOpacity="0.7"/>
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.5"/>
        </linearGradient>
        <filter id="naturalGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Main leaf with premium gradient */}
      <path 
        d="M16 3c-3 0-6 2-8 5-2 3-2 7 0 10 2 3 5 5 8 5s6-2 8-5c2-3 2-7 0-10-2-3-5-5-8-5z" 
        fill="url(#naturalGradient)"
        filter="url(#naturalGlow)"
      />
      
      {/* Central vein */}
      <path d="M16 3v14" stroke="currentColor" strokeWidth="1.5" opacity="0.8"/>
      
      {/* Side veins */}
      <path d="M10 8l3 3" stroke="currentColor" strokeWidth="1" opacity="0.6"/>
      <path d="M22 8l-3 3" stroke="currentColor" strokeWidth="1" opacity="0.6"/>
      <path d="M12 12l2 2" stroke="currentColor" strokeWidth="0.8" opacity="0.5"/>
      <path d="M20 12l-2 2" stroke="currentColor" strokeWidth="0.8" opacity="0.5"/>
      
      {/* Stem */}
      <path d="M16 17v8" stroke="currentColor" strokeWidth="2" opacity="0.7"/>
      <path d="M12 25h8" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
      
      {/* 100% Badge */}
      <circle cx="24" cy="8" r="4" fill="currentColor" opacity="0.1"/>
      <circle cx="24" cy="8" r="4" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
      <text x="24" y="11" textAnchor="middle" fontSize="4" fontWeight="bold" fill="currentColor" opacity="0.8">100%</text>
      
      {/* Natural symbol */}
      <circle cx="8" cy="8" r="2" fill="currentColor" opacity="0.2"/>
      <path d="M7 8l1 1 2-2" stroke="currentColor" strokeWidth="0.8" opacity="0.6"/>
      
      {/* Central highlight */}
      <circle cx="16" cy="12" r="3" fill="currentColor" opacity="0.1"/>
    </svg>
  );
}
