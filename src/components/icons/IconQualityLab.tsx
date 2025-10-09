type Props = { className?: string };

export default function IconQualityLab({ className }: Props) {
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
      {/* Lab flask */}
      <path d="M9 3v5l-5 9a2 2 0 0 0 2 3h12a2 2 0 0 0 2-3l-5-9V3" />
      <path d="M9 8h6" />
      {/* Quality check mark */}
      <path d="M8 12l2 2 4-4" />
      {/* Lab equipment lines */}
      <path d="M3 21h18" />
      <path d="M6 18h12" />
    </svg>
  );
}
