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
      {/* Dog head */}
      <circle cx="12" cy="10" r="6" />
      
      {/* Dog ears */}
      <path d="M8 6c-1 0-2 1-2 2v2c0 1 1 2 2 2" />
      <path d="M16 6c1 0 2 1 2 2v2c0 1-1 2-2 2" />
      
      {/* Dog snout */}
      <ellipse cx="12" cy="12" rx="2" ry="1.5" />
      
      {/* Dog nose */}
      <circle cx="12" cy="11.5" r="0.5" fill="currentColor" />
      
      {/* Dog eyes */}
      <circle cx="10" cy="8" r="1" fill="currentColor" />
      <circle cx="14" cy="8" r="1" fill="currentColor" />
      
      {/* Dog mouth */}
      <path d="M10 13c0 1 1 2 2 2s2-1 2-2" />
      
      {/* Dog body */}
      <ellipse cx="12" cy="18" rx="4" ry="3" />
      
      {/* Dog legs */}
      <path d="M8 20v2" />
      <path d="M10 20v2" />
      <path d="M14 20v2" />
      <path d="M16 20v2" />
      
      {/* Dog tail */}
      <path d="M16 16c2 1 3 2 3 4" />
      
      {/* Heart symbol for love */}
      <path d="M6 4c-1 0-2 0.5-2.5 1.5-0.5 1-0.5 2 0 3 0.5 1 1.5 1.5 2.5 1.5s2-0.5 2.5-1.5c0.5-1 0.5-2 0-3-0.5-1-1.5-1.5-2.5-1.5z" fill="currentColor" opacity="0.3" />
    </svg>
  );
}