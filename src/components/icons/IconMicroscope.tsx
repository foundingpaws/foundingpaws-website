type Props = { className?: string };

export default function IconMicroscope({ className }: Props) {
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
      {/* Microscope base */}
      <rect x="3" y="18" width="6" height="2" rx="1" />
      <rect x="5" y="16" width="2" height="2" />
      
      {/* Microscope arm */}
      <path d="M9 18h8" />
      <path d="M17 18v-6" />
      
      {/* Microscope head */}
      <circle cx="17" cy="10" r="3" />
      <circle cx="17" cy="10" r="1.5" fill="currentColor" opacity="0.3" />
      
      {/* Microscope tube */}
      <path d="M14 10h6" />
      <path d="M20 10v-2" />
      
      {/* Microscope eyepiece */}
      <circle cx="20" cy="6" r="1.5" />
      <path d="M18.5 6h3" />
      
      {/* Scientific symbols */}
      <path d="M2 2l4 4" strokeWidth="1" opacity="0.6" />
      <path d="M6 2l-4 4" strokeWidth="1" opacity="0.6" />
      <circle cx="4" cy="4" r="0.5" fill="currentColor" opacity="0.4" />
    </svg>
  );
}
