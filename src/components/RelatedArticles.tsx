import Link from "next/link";
import { articles, type Article } from "@/lib/articles";

type RelatedArticlesProps = {
  currentSlug: string;
  limit?: number;
};

export default function RelatedArticles({ currentSlug, limit = 3 }: RelatedArticlesProps) {
  const current = articles.find((a) => a.slug === currentSlug);
  if (!current) return null;
  const pool = articles.filter((a) => a.slug !== currentSlug);
  const related = pool
    .map((a) => ({
      article: a,
      score:
        (a.category === current.category ? 2 : 0) +
        a.tags.filter((t) => current.tags.includes(t)).length,
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((x) => x.article);

  if (related.length === 0) return null;

  return (
    <aside className="wv-spacing-2xl">
      <div className="wv-h3 text-green mb-4">Weiterführende Artikel</div>
      <div className="grid md:grid-cols-3 gap-6">
        {related.map((a) => (
          <Link key={a.slug} href={a.slug} className="wv-card p-6 block hover-lift">
            <div className="wv-eyebrow text-copper mb-2">{a.category}</div>
            <div className="wv-subhead text-green mb-2">{a.title}</div>
            <div className="wv-caption text-green/70">{a.readTime} • {a.date}</div>
          </Link>
        ))}
      </div>
    </aside>
  );
}


