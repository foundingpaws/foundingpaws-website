import { articles } from "@/lib/articles";
import ArticleList from "@/components/ArticleList";
import ScrollAnimation from "@/components/ScrollAnimation";

// Relax typing to match Next.js generated PageProps in this environment
type PageProps = any;

export function generateStaticParams() {
  const set = new Set<string>();
  for (const a of articles) set.add(a.category);
  return Array.from(set).map((category) => ({ category }));
}

export default function CategoryPage({ params }: PageProps) {
  const category = (params as any)?.category ?? '';
  const list = articles.filter((a) => a.category === category);

  return (
    <main className="bg-cream text-green">
      <section className="wv-section">
        <div className="container-wide">
          <ScrollAnimation>
            <div className="text-center wv-spacing-2xl">
              <div className="inline-block pill bg-copper/15 border border-copper/25 px-5 py-2 wv-eyebrow wv-spacing-md text-copper">
                Ratgeber – Kategorie
              </div>
              <h1 className="wv-h2 text-green wv-spacing-sm">{category}</h1>
              <div className="w-16 h-1 bg-copper mx-auto rounded-full wv-spacing-md"></div>
            </div>
          </ScrollAnimation>

          <ArticleList articles={list} pageSize={9} showFilter={false} />
        </div>
      </section>
    </main>
  );
}


