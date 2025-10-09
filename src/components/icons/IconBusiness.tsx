type Props = { className?: string };

export default function IconBusiness({ className }: Props) {
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
      
      {/* Business elements */}
      <rect x="2" y="3" width="20" height="14" rx="2" fill="currentColor" opacity="0.1" />
      <path d="M6 7h12" strokeWidth="1" opacity="0.6" />
      <path d="M6 11h8" strokeWidth="1" opacity="0.6" />
      <path d="M6 15h6" strokeWidth="1" opacity="0.6" />
      
      {/* Professional elements */}
      <path d="M18 3v4" strokeWidth="1" opacity="0.4" />
      <path d="M20 5h-4" strokeWidth="1" opacity="0.4" />
      
      {/* Success indicators */}
      <path d="M4 19l2 2 4-4" strokeWidth="2" opacity="0.7" />
    </svg>
  );
}
