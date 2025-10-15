type KeyTakeawaysProps = {
  items: string[];
  title?: string;
};

export default function KeyTakeaways({ items, title = "Das Wichtigste in Kürze" }: KeyTakeawaysProps) {
  if (!items || items.length === 0) return null;
  return (
    <aside className="wv-card p-6 border border-copper/20 bg-copper/5 wv-spacing-lg">
      <div className="wv-eyebrow text-copper mb-2">{title}</div>
      <ul className="list-disc pl-5 space-y-2 text-green/80">
        {items.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </aside>
  );
}


