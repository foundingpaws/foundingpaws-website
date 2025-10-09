type Props = { className?: string };

export default function IconBone({ className }: Props) {
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
      <path d="M4 10a2 2 0 1 1 2-2h12a2 2 0 1 1 2 2v4a2 2 0 1 1-2 2H6a2 2 0 1 1-2-2v-4z" />
    </svg>
  );
}


