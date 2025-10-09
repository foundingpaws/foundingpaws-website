type Props = { className?: string };

export default function IconSustainability({ className }: Props) {
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
      {/* Leaf with detailed veins */}
      <path d="M12 2c-2 0-4 1-5 3-1 2-1 4 0 6 1 2 3 3 5 3s4-1 5-3c1-2 1-4 0-6-1-2-3-3-5-3z" />
      
      {/* Central vein */}
      <path d="M12 2v10" />
      
      {/* Side veins */}
      <path d="M8 6l2 2" />
      <path d="M16 6l-2 2" />
      <path d="M9 9l1.5 1.5" />
      <path d="M15 9l-1.5 1.5" />
      
      {/* Stem */}
      <path d="M12 12v6" />
      <path d="M10 18h4" />
      
      {/* Recycling symbol */}
      <path d="M4 20h4l2-4" strokeWidth="1" opacity="0.6" />
      <path d="M20 4h-4l-2 4" strokeWidth="1" opacity="0.6" />
      
      {/* Earth/globe elements */}
      <circle cx="6" cy="6" r="1" fill="currentColor" opacity="0.3" />
      <circle cx="18" cy="18" r="1" fill="currentColor" opacity="0.3" />
      
      {/* Growth arrows */}
      <path d="M2 12h4l-2-2" strokeWidth="1" opacity="0.5" />
      <path d="M22 12h-4l2-2" strokeWidth="1" opacity="0.5" />
    </svg>
  );
}
