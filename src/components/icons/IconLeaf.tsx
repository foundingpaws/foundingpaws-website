type Props = { className?: string };

export default function IconLeaf({ className }: Props) {
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
        <linearGradient id="leafGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.9"/>
          <stop offset="50%" stopColor="currentColor" stopOpacity="0.7"/>
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.5"/>
        </linearGradient>
        <filter id="leafGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Main leaf shape with premium organic curves */}
      <path 
        d="M16 3c-3 0-6 2-8 5-2 3-2 6 0 9 2 3 5 4 8 4s6-1 8-4c2-3 2-6 0-9-2-3-5-5-8-5z" 
        fill="url(#leafGradient)"
        filter="url(#leafGlow)"
      />
      
      {/* Central vein with gradient */}
      <path d="M16 3v14" stroke="currentColor" strokeWidth="1.8" opacity="0.8"/>
      
      {/* Detailed side veins */}
      <path d="M10 8l3 3" stroke="currentColor" strokeWidth="1.2" opacity="0.6"/>
      <path d="M22 8l-3 3" stroke="currentColor" strokeWidth="1.2" opacity="0.6"/>
      <path d="M12 12l2 2" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
      <path d="M20 12l-2 2" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
      <path d="M8 16l2 2" stroke="currentColor" strokeWidth="0.8" opacity="0.4"/>
      <path d="M24 16l-2 2" stroke="currentColor" strokeWidth="0.8" opacity="0.4"/>
      
      {/* Premium stem */}
      <path d="M16 17v8" stroke="currentColor" strokeWidth="2" opacity="0.7"/>
      <path d="M13 25h6" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
      
      {/* Subtle leaf texture lines */}
      <path d="M14 6l1 1" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
      <path d="M18 6l-1 1" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
      <path d="M13 10l1.5 1.5" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
      <path d="M19 10l-1.5 1.5" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
      
      {/* Central highlight */}
      <circle cx="16" cy="10" r="2" fill="currentColor" opacity="0.1"/>
    </svg>
  );
}


