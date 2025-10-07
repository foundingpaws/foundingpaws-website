type Props = { className?: string };

export default function IconStethoscope({ className }: Props) {
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
      <path d="M6 3v6a4 4 0 0 0 8 0V3" />
      <circle cx="16" cy="9" r="2" />
      <path d="M10 13v3a4 4 0 0 0 8 0v-2" />
    </svg>
  );
}


