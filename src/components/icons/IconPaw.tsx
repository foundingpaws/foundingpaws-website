type Props = { className?: string };

export default function IconPaw({ className }: Props) {
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
      <path d="M12 4.5c1.7 0 3 1.4 3 3.1s-1.3 3.1-3 3.1-3-1.4-3-3.1 1.3-3.1 3-3.1z"/>
      <path d="M5.2 10.2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/>
      <path d="M18.8 10.2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/>
      <path d="M6 14.5c2-2 5-2 6 0 1-2 4-2 6 0-1 4-5 6-6 6s-5-2-6-6z"/>
    </svg>
  );
}


