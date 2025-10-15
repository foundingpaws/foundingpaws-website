"use client";

import { useEffect, useMemo, useState } from "react";

type TocItem = { id: string; text: string; level: number };

type TableOfContentsProps = {
  /** CSS selector to scan for headings, defaults to main article container */
  rootSelector?: string;
  minLevel?: number; // default 2
  maxLevel?: number; // default 3
  title?: string;
};

export default function TableOfContents({ rootSelector = "main", minLevel = 2, maxLevel = 3, title = "Inhalt" }: TableOfContentsProps) {
  const [items, setItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    try {
      const root = document.querySelector(rootSelector) || document;
      const headings = Array.from(root.querySelectorAll("h2, h3, h4")) as HTMLElement[];
      const filtered = headings
        .map((el) => {
          const level = Number(el.tagName.substring(1));
          if (level < minLevel || level > maxLevel) return null;
          if (!el.id) {
            el.id = el.textContent?.toLowerCase().replace(/[^a-z0-9äöüß\s-]/gi, "").replace(/\s+/g, "-") || "section";
          }
          return { id: el.id, text: el.textContent || "", level } as TocItem;
        })
        .filter(Boolean) as TocItem[];
      setItems(filtered);
    } catch {}
  }, [rootSelector, minLevel, maxLevel]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId((entry.target as HTMLElement).id);
          }
        }
      },
      { rootMargin: "0px 0px -70% 0px", threshold: [0, 1] }
    );
    const elements = items.map((i) => document.getElementById(i.id)).filter(Boolean) as Element[];
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  return (
    <nav aria-label="Inhaltsverzeichnis" className="wv-card p-4 sticky top-24">
      <div className="wv-eyebrow text-copper mb-2">{title}</div>
      <ul className="space-y-2">
        {items.map((i) => (
          <li key={i.id} className={i.level === 3 ? "pl-4" : i.level >= 4 ? "pl-8" : "pl-0"}>
            <a href={`#${i.id}`} className={`text-sm ${activeId === i.id ? "text-copper font-medium" : "text-green hover:text-copper"}`}>{i.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}


