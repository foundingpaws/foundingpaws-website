"use client";

import { useMemo, useState } from "react";
import Transform3D from "./Transform3D";
import ArticleCard from "./ArticleCard";
import { Article } from "@/lib/articles";

type ArticleListProps = {
  articles: Article[];
  pageSize?: number;
  showFilter?: boolean;
  initialCategory?: string;
  showSearch?: boolean;
};

export default function ArticleList({
  articles,
  pageSize = 6,
  showFilter = true,
  initialCategory = "Alle",
  showSearch = false,
}: ArticleListProps) {
  const categories = useMemo(() => {
    const set = new Set<string>();
    for (const a of articles) set.add(a.category);
    return ["Alle", ...Array.from(set)];
  }, [articles]);

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const byCategory = selectedCategory === "Alle"
      ? articles
      : articles.filter((a) => a.category === selectedCategory);
    const q = query.trim().toLowerCase();
    if (!q) return byCategory;
    return byCategory.filter(a =>
      a.title.toLowerCase().includes(q) ||
      a.excerpt.toLowerCase().includes(q)
    );
  }, [articles, selectedCategory, query]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const startIdx = (page - 1) * pageSize;
  const current = filtered.slice(startIdx, startIdx + pageSize);

  const goToPage = (p: number) => {
    const next = Math.max(1, Math.min(totalPages, p));
    setPage(next);
    try {
      window.scrollTo({ top: (document?.getElementById("article-list-top")?.offsetTop || 0) - 120, behavior: "smooth" });
    } catch {}
  };

  return (
    <div>
      {(showFilter || showSearch) && (
        <div className="flex flex-wrap justify-center gap-3 wv-spacing-md">
          {showSearch && (
            <input
              type="search"
              value={query}
              onChange={(e) => { setQuery(e.target.value); setPage(1); }}
              placeholder="Suche nach Themen, Begriffen..."
              className="px-4 py-2 rounded-lg border border-green/20 focus:border-copper focus:outline-none text-green w-full md:w-80"
            />
          )}
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => { setSelectedCategory(category); setPage(1); }}
              className={`pill px-4 py-2 wv-caption font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-copper text-cream'
                  : 'bg-green/10 text-green hover:bg-green/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      <div id="article-list-top" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {current.map((post) => (
          <Transform3D key={post.slug} hoverEffect="lift">
            <ArticleCard article={post} />
          </Transform3D>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-8">
          <button
            onClick={() => goToPage(page - 1)}
            disabled={page === 1}
            className="px-3 py-2 rounded-lg text-sm font-medium bg-green/10 text-green disabled:opacity-50"
          >
            Zurück
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              onClick={() => goToPage(p)}
              className={`px-3 py-2 rounded-lg text-sm font-medium ${
                p === page ? 'bg-copper text-cream' : 'bg-green/10 text-green hover:bg-green/20'
              }`}
            >
              {p}
            </button>
          ))}
          <button
            onClick={() => goToPage(page - 0 + 1)}
            disabled={page === totalPages}
            className="px-3 py-2 rounded-lg text-sm font-medium bg-green/10 text-green disabled:opacity-50"
          >
            Weiter
          </button>
        </div>
      )}
    </div>
  );
}


