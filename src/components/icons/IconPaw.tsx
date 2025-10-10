interface IconProps {
  className?: string;
}

export default function IconPaw({ className = "w-6 h-6" }: IconProps) {
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
      <defs>
        <linearGradient id="pawGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.9" />
          <stop offset="50%" stopColor="currentColor" stopOpacity="0.7" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.5" />
        </linearGradient>
        <filter id="pawGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      
      {/* Main paw pad */}
      <ellipse
        cx="12"
        cy="16"
        rx="4"
        ry="3"
        fill="url(#pawGradient)"
        filter="url(#pawGlow)"
      />
      
      {/* Toe pads */}
      <circle cx="8" cy="12" r="1.5" fill="currentColor" opacity="0.8" />
      <circle cx="12" cy="10" r="1.5" fill="currentColor" opacity="0.8" />
      <circle cx="16" cy="12" r="1.5" fill="currentColor" opacity="0.8" />
      
      {/* Claws */}
      <path
        d="M7 10l1 1M11 8l1 1M15 10l1 1"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.6"
        fill="none"
      />
      
      {/* Paw pad texture */}
      <ellipse
        cx="12"
        cy="16"
        rx="2.5"
        ry="1.5"
        fill="currentColor"
        opacity="0.2"
      />
      
      {/* Decorative elements */}
      <circle cx="6" cy="6" r="0.8" fill="currentColor" opacity="0.3" />
      <circle cx="18" cy="6" r="0.8" fill="currentColor" opacity="0.3" />
      <circle cx="12" cy="4" r="0.6" fill="currentColor" opacity="0.4" />
    </svg>
  );
}
