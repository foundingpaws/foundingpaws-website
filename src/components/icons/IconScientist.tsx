type Props = { className?: string };

export default function IconScientist({ className }: Props) {
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
      {/* Person silhouette */}
      <circle cx="12" cy="8" r="3" />
      <path d="M6 21v-4a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v4" />
      
      {/* Lab coat */}
      <path d="M8 12h8v8H8z" fill="currentColor" opacity="0.1" />
      <path d="M10 12v8" strokeWidth="1" opacity="0.6" />
      <path d="M14 12v8" strokeWidth="1" opacity="0.6" />
      
      {/* Scientific elements */}
      <circle cx="12" cy="6" r="1" fill="currentColor" opacity="0.3" />
      <path d="M4 4l4 4" strokeWidth="1" opacity="0.5" />
      <path d="M20 4l-4 4" strokeWidth="1" opacity="0.5" />
      
      {/* Lab equipment */}
      <path d="M2 16l4-2" strokeWidth="1" opacity="0.4" />
      <path d="M22 16l-4-2" strokeWidth="1" opacity="0.4" />
      
      {/* Knowledge/success indicators */}
      <path d="M6 18l2 2 4-4" strokeWidth="2" opacity="0.7" />
    </svg>
  );
}
