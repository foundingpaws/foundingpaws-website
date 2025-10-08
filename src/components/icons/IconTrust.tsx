type Props = { className?: string };

export default function IconTrust({ className }: Props) {
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
      {/* Handshake/hands */}
      <path d="M8 12l-2-2 2-2" />
      <path d="M16 12l2-2-2-2" />
      {/* Connection line */}
      <path d="M12 8v8" />
      {/* Trust elements */}
      <circle cx="6" cy="6" r="2" />
      <circle cx="18" cy="6" r="2" />
      <path d="M6 6l6 6 6-6" />
      {/* Shield of trust */}
      <path d="M12 2l8 3v7c0 5.55-3.84 10.74-9 12-5.16-1.26-9-6.45-9-12V5l8-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}
