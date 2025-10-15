import ScrollAnimation from "@/components/ScrollAnimation";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";
import RatgeberArticleLayout from "@/components/RatgeberArticleLayout";

export const metadata = {
  title: 'Coenzym Q10 beim Hund: Herz & Entzündung | Founding Paws',
  description: 'Kontrollierte Studie: niedrigere Neutrophilenrate, höhere Lymphozyten – CoQ10 als entzündungsmodulierende Ergänzung (kein Ersatz anderer Maßnahmen).',
  alternates: { canonical: '/ratgeber/coq10-herz-hund' },
  openGraph: { title: 'CoQ10 beim Hund', description: 'Antioxidativer Schutz fürs Herz?', type: 'article' }
};

export default function Coq10HerzHundPage() {
  return (
    <main className="bg-cream text-green">
      <section className="wv-section bg-green text-cream">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <div className="inline-block pill bg-cream/20 border border-cream/30 px-6 py-3 wv-eyebrow" style={{color:'white'}}>Herz & Kreislauf</div>
              <h1 className="wv-h1 wv-spacing-sm" style={{color:'white'}}>Coenzym Q10 – antioxidativer Schutz fürs Herz</h1>
              <div className="w-20 h-1 bg-copper mx-auto rounded-full wv-spacing-md"></div>
              <p className="wv-lead wv-spacing-md max-w-3xl mx-auto" style={{color:'rgba(255,255,255,0.95)'}}>Studie: reduzierte Entzündungsmarker, aber keine klare Verbesserung der Herzfunktion – sinnvoll als Ergänzung, nicht als Monotherapie.</p>
            </FadeIn>
          </div>
        </div>
      </section>

      <RatgeberArticleLayout
        slug="/ratgeber/coq10-herz-hund"
        takeaways={[
          "CoQ10 kann Entzündungsmarker beeinflussen; kein Ersatz anderer Maßnahmen",
          "Einsatz ergänzend und individuell abgestimmt",
          "Kombination mit Taurin & Omega‑3 sinnvoll prüfen",
        ]}
      >
        <ScrollAnimation>
          <div className="prose prose-lg max-w-none">
            <h2 className="wv-h2 text-green wv-spacing-lg">Einsatzmöglichkeiten</h2>
            <ul className="wv-body text-green/80 space-y-2">
              <li>• Ergänzend bei Herzpatienten zur Unterstützung des Immunsystems</li>
              <li>• In Kombination mit Taurin & Omega‑3 als ganzheitlicher Ansatz</li>
              <li>• Dosierung individuell mit der Tierärztin abstimmen</li>
            </ul>
          </div>
        </ScrollAnimation>
      </RatgeberArticleLayout>

      <section className="wv-section bg-green text-cream">
        <div className="container-wide text-center">
          <Link href="/ratgeber" className="btn-primary pill text-cream px-8 py-4 font-medium">Weitere Artikel</Link>
        </div>
      </section>
    </main>
  );
}


