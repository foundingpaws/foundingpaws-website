type Props = { className?: string };

export default function IconDoctor({ className }: Props) {
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
      {/* Medical cross */}
      <path d="M12 2l8 3v7c0 5.55-3.84 10.74-9 12-5.16-1.26-9-6.45-9-12V5l8-3z" />
      <path d="M12 8v8" />
      <path d="M8 12h8" />
      {/* Stethoscope */}
      <path d="M6 16a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
      <path d="M18 16a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
      <path d="M8 18l4-4 4 4" />
      {/* Professional elements */}
      <circle cx="12" cy="6" r="1" fill="currentColor" opacity="0.6" />
      <path d="M10 4h4" strokeWidth="1" opacity="0.6" />
    </svg>
  );
}
