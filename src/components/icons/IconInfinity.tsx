type Props = { className?: string };

export default function IconInfinity({ className }: Props) {
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
      {/* Infinity symbol */}
      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
      <path d="M3 21v-5h5" />
      {/* Heart symbol inside infinity */}
      <path d="M12 8c-1 0-2 0.5-2.5 1.5-0.5 1-0.5 2 0 3 0.5 1 1.5 1.5 2.5 1.5s2-0.5 2.5-1.5c0.5-1 0.5-2 0-3-0.5-1-1.5-1.5-2.5-1.5z" fill="currentColor" opacity="0.3" />
    </svg>
  );
}
