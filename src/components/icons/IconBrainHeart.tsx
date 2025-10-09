type Props = { className?: string };

export default function IconBrainHeart({ className }: Props) {
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
      <path d="M7 8a3 3 0 0 1 3-3 3 3 0 0 1 3 3v1h1a3 3 0 0 1 3 3v1" />
      <path d="M13 9c-1.5 0-2.5 1-3 2" />
      <path d="M12 14s2.5-3 5-3a3 3 0 0 1 3 3c0 3-4 5-8 8-4-3-8-5-8-8a3 3 0 0 1 3-3c2.5 0 5 3 5 3z" />
    </svg>
  );
}


