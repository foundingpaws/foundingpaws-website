type Props = { className?: string };

export default function IconTransparency({ className }: Props) {
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
        <linearGradient id="transparencyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.9"/>
          <stop offset="50%" stopColor="currentColor" stopOpacity="0.7"/>
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.5"/>
        </linearGradient>
        <filter id="transparencyGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Main document with transparency effect */}
      <path 
        d="M6 4h16a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" 
        fill="url(#transparencyGradient)"
        filter="url(#transparencyGlow)"
      />
      
      {/* Document lines */}
      <path d="M10 10h8" stroke="currentColor" strokeWidth="1.5" opacity="0.8"/>
      <path d="M10 14h12" stroke="currentColor" strokeWidth="1.5" opacity="0.8"/>
      <path d="M10 18h10" stroke="currentColor" strokeWidth="1.5" opacity="0.8"/>
      <path d="M10 22h6" stroke="currentColor" strokeWidth="1.5" opacity="0.8"/>
      
      {/* Transparency overlay effect */}
      <path d="M8 6h16v4l-4 4-4-4V6z" fill="currentColor" opacity="0.2"/>
      
      {/* Eye icon for transparency */}
      <ellipse cx="16" cy="12" rx="4" ry="2.5" stroke="currentColor" strokeWidth="1.5" opacity="0.6" fill="none"/>
      <circle cx="16" cy="12" r="1.5" fill="currentColor" opacity="0.4"/>
      
      {/* Premium corner details */}
      <circle cx="8" cy="8" r="1" fill="currentColor" opacity="0.3"/>
      <circle cx="24" cy="8" r="1" fill="currentColor" opacity="0.3"/>
      
      {/* Central highlight */}
      <circle cx="16" cy="16" r="2" fill="currentColor" opacity="0.1"/>
    </svg>
  );
}