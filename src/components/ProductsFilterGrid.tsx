"use client";
import { useMemo, useState, useEffect } from "react";
import ScrollAnimation from "@/components/ScrollAnimation";
import ProductCard from "@/components/ProductCard";
import { trackEvent } from "@/lib/analytics";

export type ProductListItem = {
  key: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  accent: string;
  comingSoon: boolean;
  isNew?: boolean;
  isBestseller?: boolean;
  productImage?: string;
  studioImage?: string;
  lifestyleImage?: string;
};

interface ProductsFilterGridProps {
  products: ProductListItem[];
}

const CATEGORY_LABELS = [
  "Alle",
  "Haut & Fell",
  "Stress & Angst",
  "Gelenke & Mobilität",
  "Haut & Vitalität",
  "Kognition & Herz",
];

export default function ProductsFilterGrid({ products }: ProductsFilterGridProps) {
  const [activeCategory, setActiveCategory] = useState<string>("Alle");
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    trackEvent("listing_render", "produkte", activeCategory);
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const matches = (p: ProductListItem) => {
      const inCategory = activeCategory === "Alle" || p.category === activeCategory;
      if (!q) return inCategory;
      const hay = `${p.title} ${p.subtitle} ${p.description} ${p.category}`.toLowerCase();
      return inCategory && hay.includes(q);
    };
    return products.filter(matches);
  }, [products, activeCategory, query]);

  return (
    <div>
      {/* Filter Bar */}
      <div className="sticky top-16 z-10 bg-cream/90 backdrop-blur-md border-b border-green/10 -mx-4 px-4 py-3 mb-6">
        <div className="flex flex-wrap items-center gap-2">
          {CATEGORY_LABELS.map((label) => (
            <button
              key={label}
              onClick={() => {
                setActiveCategory(label);
                trackEvent("filter_category", "produkte", label);
              }}
              className={`pill px-3 py-1 text-sm font-medium ${
                activeCategory === label
                  ? "bg-green text-cream"
                  : "bg-green/10 text-green hover:bg-green/15"
              }`}
            >
              {label}
            </button>
          ))}
          <div className="ml-auto w-full sm:w-64">
            <input
              type="search"
              placeholder="Suchen…"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                trackEvent("filter_search", "produkte", e.target.value);
              }}
              className="w-full px-3 py-2 text-sm rounded-lg border border-green/20 focus:border-copper focus:outline-none text-green placeholder-green/50"
            />
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="product-grid">
        {filtered.map((product, index) => (
          <ScrollAnimation key={product.key} animation="slide-up" delay={index * 100}>
            <ProductCard product={product as any} index={index} />
          </ScrollAnimation>
        ))}
        {filtered.length === 0 && (
          <div className="col-span-full text-center text-green/60 py-8">
            Keine Produkte gefunden.
          </div>
        )}
      </div>
    </div>
  );
}


