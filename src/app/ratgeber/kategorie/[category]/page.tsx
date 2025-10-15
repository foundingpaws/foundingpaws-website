import { articles } from "@/lib/articles";
import { Suspense } from "react";
import ArticleList from "@/components/ArticleList";
import ScrollAnimation from "@/components/ScrollAnimation";
import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import Link from "next/link";
import FaqAccordion, { FaqItem } from "@/components/FaqAccordion";

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
  const topArticles = list.slice(0, 3);
  const introCopyByCategory: Record<string, string> = {
    "Gelenke & Mobilität": "Alles für starke, schmerzfreie Bewegung – von Prävention bis Reha.",
    "Stress & Entspannung": "Training, Management und sanfte Unterstützungen für mehr Gelassenheit.",
    "Ernährung & Verdauung": "Gut verträglich, evidenzbasiert – Fütterung, Verdauung und Mikrobiom.",
    "Haut & Fell": "Juckreiz, Parasiten & Pflege – was wirklich hilft.",
    "Herz & Kreislauf": "Herzgesundheit fördern – Ernährung, Supplemente, Warnzeichen.",
    "Kognition & Gehirn": "Geistig fit bleiben – Training und Ernährung für Senior‑Hunde.",
    "Senior & Vitalität": "Aktiv älter werden – Bewegung, Ernährung, Routinen.",
    "Naturheilkunde": "Pflanzliche Optionen mit Bedacht und Evidenz einsetzen.",
  };

  const faqByCategory: Record<string, FaqItem[]> = {
    "Gelenke & Mobilität": [
      { question: "Woran erkenne ich Arthrose beim Hund?", answer: "Typisch sind Anlaufschwierigkeiten, Steifheit nach Ruhe und Schonhinken. Eine sichere Diagnose stellt der Tierarzt (Klinik, Bildgebung)." },
      { question: "Welche natürlichen Möglichkeiten gibt es?", answer: "Je nach Fall: Omega‑3, Grünlippmuschel, UC‑II/Boswellia, Gewichtsmanagement, angepasste Bewegung und Physiotherapie." },
    ],
    "Stress & Entspannung": [
      { question: "Wie erkenne ich Stress?", answer: "Beschwichtigungssignale, Hecheln, Bellen, Ruhelosigkeit. Ursache identifizieren, Management + Training kombinieren." },
      { question: "Welche sanften Helfer gibt es?", answer: "Training ist zentral. Ergänzend kommen L‑Theanin, DAP, ggf. pflanzliche Optionen in Frage – individuell abstimmen." },
    ],
  };
  const faqs = faqByCategory[category] || [];

  return (
    <main className="bg-cream text-green">
      <section className="wv-section">
        <div className="container-wide">
          <JsonLd schema={{
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Startseite', item: (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.foundingpaws.de') },
              { '@type': 'ListItem', position: 2, name: 'Ratgeber', item: (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.foundingpaws.de') + '/ratgeber' },
              { '@type': 'ListItem', position: 3, name: category, item: (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.foundingpaws.de') + '/ratgeber/kategorie/' + encodeURIComponent(category) },
            ],
          }} />
          <JsonLd schema={{
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            itemListElement: list.map((a, idx) => ({ '@type': 'ListItem', position: idx + 1, url: (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.foundingpaws.de') + a.slug })),
          }} />
          <ScrollAnimation>
            <div className="text-center wv-spacing-2xl">
              <div className="inline-block pill bg-copper/15 border border-copper/25 px-5 py-2 wv-eyebrow wv-spacing-md text-copper">
                Ratgeber – Kategorie
              </div>
              <h1 className="wv-h2 text-green wv-spacing-sm">{category}</h1>
              <div className="w-16 h-1 bg-copper mx-auto rounded-full wv-spacing-md"></div>
              <p className="wv-lead text-green/70 max-w-3xl mx-auto">{introCopyByCategory[category] || ("Unsere wichtigsten Inhalte – kompakt, wissenschaftlich fundiert und praxisnah.")}</p>
            </div>
          </ScrollAnimation>

          {topArticles.length > 0 && (
            <div className="wv-spacing-xl max-w-5xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6">
                {topArticles.map((a) => (
                  <Link key={a.slug} href={a.slug} className="wv-card p-6 block hover-lift">
                    <div className="wv-eyebrow text-copper mb-2">Empfohlen</div>
                    <div className="wv-subhead text-green mb-2">{a.title}</div>
                    <div className="wv-body text-green/70">{a.excerpt}</div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <Suspense fallback={<div className="wv-spacing-xl max-w-5xl mx-auto text-center text-green/60">Laden…</div>}>
            <ArticleList articles={list} pageSize={9} showFilter={false} syncUrl={true} />
          </Suspense>

          {faqs.length > 0 && (
            <>
              <JsonLd schema={{
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: faqs.map((f) => ({
                  '@type': 'Question',
                  name: f.question,
                  acceptedAnswer: { '@type': 'Answer', text: f.answer },
                })),
              }} />
              <FaqAccordion items={faqs} title="Häufige Fragen zur Kategorie" />
            </>
          )}
        </div>
      </section>
    </main>
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const category = (params as any)?.category ?? '';
  const title = `${category} – Ratgeber & Guides für Hundebesitzer | Founding Paws`;
  const description = `Alle Artikel zum Thema ${category}: wissenschaftlich fundierte Tipps, Schritt-für-Schritt Anleitungen und praxisnahe Empfehlungen.`;
  return {
    title,
    description,
    alternates: { canonical: `/ratgeber/kategorie/${encodeURIComponent(category)}` },
    openGraph: {
      title,
      description,
      url: `/ratgeber/kategorie/${encodeURIComponent(category)}`,
      type: 'website',
      images: [{ url: '/logo-header.png', width: 1200, height: 630, alt: `Founding Paws – ${category}` }],
    },
    robots: { index: true, follow: true },
  };
}


