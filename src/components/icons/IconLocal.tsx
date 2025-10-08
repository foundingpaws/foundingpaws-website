type Props = { className?: string };

export default function IconLocal({ className }: Props) {
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
        <linearGradient id="localGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.9"/>
          <stop offset="50%" stopColor="currentColor" stopOpacity="0.7"/>
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.5"/>
        </linearGradient>
        <filter id="localGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Main house shape */}
      <path 
        d="M16 3l12 8v16H4V11l12-8z" 
        fill="url(#localGradient)"
        filter="url(#localGlow)"
      />
      
      {/* Roof details */}
      <path d="M16 3l12 8v2l-12-8-12 8v-2l12-8z" stroke="currentColor" strokeWidth="1" opacity="0.4" fill="none"/>
      
      {/* Door */}
      <rect x="13" y="20" width="6" height="8" rx="1" fill="currentColor" opacity="0.3"/>
      <circle cx="17" cy="24" r="0.8" fill="currentColor" opacity="0.6"/>
      
      {/* Windows */}
      <rect x="8" y="14" width="4" height="4" rx="0.5" fill="currentColor" opacity="0.2"/>
      <rect x="20" y="14" width="4" height="4" rx="0.5" fill="currentColor" opacity="0.2"/>
      
      {/* Window crosses */}
      <path d="M10 16h4" stroke="currentColor" strokeWidth="0.8" opacity="0.4"/>
      <path d="M10 16v4" stroke="currentColor" strokeWidth="0.8" opacity="0.4"/>
      <path d="M22 16h4" stroke="currentColor" strokeWidth="0.8" opacity="0.4"/>
      <path d="M22 16v4" stroke="currentColor" strokeWidth="0.8" opacity="0.4"/>
      
      {/* Chimney */}
      <rect x="22" y="8" width="3" height="6" rx="0.5" fill="currentColor" opacity="0.4"/>
      
      {/* Heart symbol for care */}
      <path d="M16 12c-1-1-2-1-3 0-1 1-1 2 0 3l3 3 3-3c1-1 1-2 0-3-1-1-2-1-3 0z" 
            fill="currentColor" 
            opacity="0.6"/>
      
      {/* Premium corner accents */}
      <circle cx="6" cy="6" r="0.8" fill="currentColor" opacity="0.3"/>
      <circle cx="26" cy="6" r="0.8" fill="currentColor" opacity="0.3"/>
      
      {/* Central highlight */}
      <circle cx="16" cy="18" r="2" fill="currentColor" opacity="0.1"/>
    </svg>
  );
}
