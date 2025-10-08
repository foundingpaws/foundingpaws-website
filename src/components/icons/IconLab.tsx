type Props = { className?: string };

export default function IconLab({ className }: Props) {
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
        <linearGradient id="labGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.9"/>
          <stop offset="50%" stopColor="currentColor" stopOpacity="0.7"/>
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.5"/>
        </linearGradient>
        <filter id="labGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Main flask body with premium gradient */}
      <path 
        d="M12 4v7l-7 12a3 3 0 0 0 3 4h14a3 3 0 0 0 3-4l-7-12V4" 
        fill="url(#labGradient)"
        filter="url(#labGlow)"
      />
      
      {/* Flask neck */}
      <path d="M12 4h8" stroke="currentColor" strokeWidth="2" opacity="0.8"/>
      
      {/* Premium liquid inside */}
      <path d="M14 8h4v8" stroke="currentColor" strokeWidth="1.5" opacity="0.6" fill="none"/>
      
      {/* Scientific measurement lines */}
      <path d="M13 6h6" stroke="currentColor" strokeWidth="0.8" opacity="0.4"/>
      <path d="M13 10h6" stroke="currentColor" strokeWidth="0.8" opacity="0.4"/>
      <path d="M13 14h6" stroke="currentColor" strokeWidth="0.8" opacity="0.4"/>
      
      {/* Bubbles in liquid */}
      <circle cx="15" cy="12" r="0.8" fill="currentColor" opacity="0.3"/>
      <circle cx="17" cy="14" r="0.6" fill="currentColor" opacity="0.3"/>
      <circle cx="16" cy="16" r="0.7" fill="currentColor" opacity="0.3"/>
      
      {/* Lab stand base */}
      <path d="M8 28h16" stroke="currentColor" strokeWidth="2" opacity="0.6"/>
      <path d="M10 26h12" stroke="currentColor" strokeWidth="1.5" opacity="0.4"/>
      
      {/* Scientific symbols */}
      <path d="M20 6l2 2" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
      <path d="M22 6l-2 2" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
      <path d="M21 5l1 1" stroke="currentColor" strokeWidth="0.8" opacity="0.4"/>
      
      {/* Central highlight */}
      <circle cx="16" cy="12" r="2" fill="currentColor" opacity="0.1"/>
    </svg>
  );
}


