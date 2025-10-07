type Props = { className?: string };

export default function IconDog({ className }: Props) {
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
      <path d="M4 10l3-3h6l3 3v8H7a3 3 0 0 1-3-3v-5z" />
      <path d="M16 10l3-2 1 3v7h-4" />
      <circle cx="9.5" cy="12" r="0.8" />
    </svg>
  );
}


