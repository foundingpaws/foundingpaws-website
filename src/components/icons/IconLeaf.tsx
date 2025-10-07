type Props = { className?: string };

export default function IconLeaf({ className }: Props) {
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
      <path d="M5 21c8 0 14-6 14-14V3H7C7 11 5 13 5 21z" />
      <path d="M5 14c2 0 5-3 7-5" />
    </svg>
  );
}


