type Props = { className?: string };

export default function IconShield({ className }: Props) {
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
        <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.9"/>
          <stop offset="50%" stopColor="currentColor" stopOpacity="0.7"/>
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.5"/>
        </linearGradient>
        <filter id="shieldGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Main shield with premium gradient */}
      <path 
        d="M16 3l9 5v8c0 7-4.5 11-9 13-4.5-2-9-6-9-13V8l9-5z" 
        fill="url(#shieldGradient)"
        filter="url(#shieldGlow)"
      />
      
      {/* Premium checkmark */}
      <path d="M12 16l3 3 6-6" stroke="currentColor" strokeWidth="2" opacity="0.9"/>
      
      {/* Shield border highlight */}
      <path d="M16 3l9 5v8c0 7-4.5 11-9 13-4.5-2-9-6-9-13V8l9-5z" 
            stroke="currentColor" 
            strokeWidth="0.8" 
            opacity="0.3" 
            fill="none"/>
      
      {/* Premium decorative elements */}
      <circle cx="16" cy="8" r="1.5" fill="currentColor" opacity="0.4"/>
      <path d="M16 6l1 1" stroke="currentColor" strokeWidth="0.8" opacity="0.3"/>
      <path d="M16 6l-1 1" stroke="currentColor" strokeWidth="0.8" opacity="0.3"/>
      
      {/* Security lines */}
      <path d="M13 10h6" stroke="currentColor" strokeWidth="0.6" opacity="0.4"/>
      <path d="M13 12h6" stroke="currentColor" strokeWidth="0.6" opacity="0.4"/>
      
      {/* Central highlight */}
      <circle cx="16" cy="14" r="2" fill="currentColor" opacity="0.1"/>
      
      {/* Premium corner accents */}
      <circle cx="8" cy="8" r="0.8" fill="currentColor" opacity="0.3"/>
      <circle cx="24" cy="8" r="0.8" fill="currentColor" opacity="0.3"/>
    </svg>
  );
}


