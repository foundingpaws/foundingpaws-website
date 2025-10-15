import ScrollAnimation from "@/components/ScrollAnimation";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import TableOfContents from "@/components/TableOfContents";
import KeyTakeaways from "@/components/KeyTakeaways";
import AuthorBox from "@/components/AuthorBox";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata = {
  title: 'Omega‑3 für Hunde: Wirkung & Dosierung (inkl. Rechner) | Founding Paws',
  description: 'EPA/DHA richtig dosieren: Vorteile, Qualität, Praxis‑Tipps – evidenzbasiert.',
  alternates: { canonical: '/ratgeber/omega3-hund' },
  openGraph: {
    title: 'Omega‑3 für Hunde: Wirkung, Dosierung & Qualität',
    description: 'EPA/DHA modulieren Entzündungen – Studienlage, Dosierung und Qualität im Überblick.',
    type: 'article'
  }
};

export default function Omega3HundPage() {
  return (
    <main className="bg-cream text-green">
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Omega‑3 für Hunde: Wirkung, Dosierung & Qualität",
        "description": "Evidenz zu EPA/DHA bei Gelenken, Haut, Herz & Niere. Dosierung (~70 mg/kg/Tag) und Qualitätskriterien.",
        "inLanguage": "de-DE",
        "author": { "@type": "Organization", "name": "Founding Paws" },
        "publisher": {
          "@type": "Organization",
          "name": "Founding Paws",
          "logo": { "@type": "ImageObject", "url": (process.env.NEXT_PUBLIC_SITE_URL || "https://foundingpaws.de") + "/favicon.png" }
        },
        "mainEntityOfPage": (process.env.NEXT_PUBLIC_SITE_URL || "https://foundingpaws.de") + "/ratgeber/omega3-hund",
      }} />
      <section className="wv-section bg-green text-cream">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <div className="inline-block pill bg-cream/20 border border-cream/30 px-6 py-3 wv-eyebrow" style={{color:'white'}}>Ernährung</div>
              <h1 className="wv-h1 wv-spacing-sm" style={{color:'white'}}>Omega‑3 für Hunde: Warum so wichtig – und worauf achten?</h1>
              <div className="w-20 h-1 bg-copper mx-auto rounded-full wv-spacing-md"></div>
              <p className="wv-lead wv-spacing-md max-w-3xl mx-auto" style={{color:'rgba(255,255,255,0.95)'}}>EPA/DHA modulieren Entzündungen – Evidenz bei OA, Haut, Herz, Niere. Dosierung und Qualität im Überblick.</p>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="wv-section bg-cream">
        <div className="container-wide">
          <div className="grid lg:grid-cols-[280px,1fr] gap-10 items-start max-w-6xl mx-auto">
            <div className="hidden lg:block sticky top-24">
              <TableOfContents rootSelector="main" />
            </div>
            <ScrollAnimation>
              <div className="prose prose-lg max-w-none">
                <KeyTakeaways
                  items={[
                    "EPA/DHA unterstützen entzündungsmodulierende Prozesse (z. B. bei OA)",
                    "Zielbereich ~70 mg EPA+DHA/kg/Tag als grobe Obergrenze",
                    "Qualität zählt: Oxidation/Schwermetalle prüfen, langsam einschleichen",
                  ]}
                />
                <h2 className="wv-h2 text-green wv-spacing-lg">Belegte Vorteile</h2>
                <ul className="wv-body text-green/80 space-y-2">
                  <li>• OA: bessere objektive Belastungsmaße, teils reduzierte NSAIDs</li>
                  <li>• Schmerz & QoL: 16‑Wochen‑Studie (~70 mg/kg/Tag) mit Verbesserungen</li>
                </ul>

                <h2 className="wv-h2 text-green wv-spacing-lg">Dosierung & Qualität</h2>
                <p className="wv-body text-green/80">Zielbereich ~70 mg EPA+DHA/kg/Tag als oberer Richtwert; langsam einschleichen; Reinheit/Frische prüfen.</p>

                <div className="bg-copper/10 p-6 rounded-xl border border-copper/20 wv-spacing-lg">
                  <h3 className="wv-h3 text-green wv-spacing-sm">FAQ</h3>
                  <p className="wv-body text-green/80">Zu hohe Dosen → weicher Kot, Gewicht; Dosis splitten. Kombination mit MCT bei Senioren je nach Ziel sinnvoll.</p>
                </div>

                <div className="wv-spacing-xl" />
                <div className="bg-white p-6 rounded-xl border border-green/10">
                  <h2 className="wv-h3 text-green wv-spacing-sm">Häufige Fragen</h2>
                  <div className="wv-body text-green/80 space-y-4">
                    <div>
                      <div className="font-medium text-green">Wie schnell wirkt Omega‑3 beim Hund?</div>
                      <p>Erste Effekte zeigen sich häufig nach 2–4 Wochen regelmäßiger Gabe; bei Gelenken teils 8–12 Wochen.</p>
                    </div>
                    <div>
                      <div className="font-medium text-green">Gibt es Nebenwirkungen?</div>
                      <p>Selten weicher Kot oder Gewichtszunahme. Dosis langsam einschleichen und aufteilen; bei Vorerkrankungen Tierarzt fragen.</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section className="wv-section bg-green text-cream">
        <div className="container-wide text-center">
          <Link href="/ratgeber" className="btn-primary pill text-cream px-8 py-4 font-medium">Weitere Artikel</Link>
        </div>
      </section>

      <section className="wv-section bg-cream">
        <div className="container-wide max-w-4xl mx-auto">
          <RelatedArticles currentSlug="/ratgeber/omega3-hund" />
          <div className="wv-spacing-xl" />
          <AuthorBox
            author={{
              name: "Founding Paws Redaktion",
              title: "Evidenzbasierter Ratgeber",
              updated: "Oktober 2025",
              links: [{ label: "LinkedIn", href: "https://www.linkedin.com/company/foundingpaws" }],
            }}
          />
          <JsonLd schema={{
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Wie schnell wirkt Omega‑3 beim Hund?',
                acceptedAnswer: { '@type': 'Answer', text: 'Erste Effekte oft nach 2–4 Wochen; bei Gelenken teils 8–12 Wochen.' },
              },
              {
                '@type': 'Question',
                name: 'Gibt es Nebenwirkungen?',
                acceptedAnswer: { '@type': 'Answer', text: 'Selten weicher Kot/Gewicht. Dosis langsam einschleichen und aufteilen; ggf. Tierarzt fragen.' },
              },
            ],
          }} />
        </div>
      </section>
    </main>
  );
}


