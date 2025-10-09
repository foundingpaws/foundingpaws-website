type Props = { className?: string };

export default function IconMapPin({ className }: Props) {
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
      <path d="M12 22s-7-6-7-12a7 7 0 1 1 14 0c0 6-7 12-7 12z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}


