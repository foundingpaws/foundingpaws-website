import ScrollAnimation from "@/components/ScrollAnimation";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";
import RatgeberArticleLayout from "@/components/RatgeberArticleLayout";

export const metadata = {
  title: 'Palmitoyl‑Glucosamin + Curcumin: Natürliche Schmerztherapie | Founding Paws',
  description: 'Offene Studie: 90% konnten Meloxicam reduzieren – warum PEA, Glucosamin und Curcumin gemeinsam wirken könnten.',
  alternates: { canonical: '/ratgeber/palmitoyl-glucosamin-curcumin' },
  openGraph: { title: 'PEA + Curcumin + Glucosamin', description: 'Schonende Ergänzung bei chronischen Schmerzen.', type: 'article' }
};

export default function PalmitoylGlucosaminCurcuminPage() {
  return (
    <main className="bg-cream text-green">
      <section className="wv-section bg-green text-cream">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <div className="inline-block pill bg-cream/20 border border-cream/30 px-6 py-3 wv-eyebrow" style={{color:'white'}}>Gelenke & Mobilität</div>
              <h1 className="wv-h1 wv-spacing-sm" style={{color:'white'}}>Palmitoyl‑Glucosamin mit Curcumin: natürliche Schmerztherapie</h1>
              <div className="w-20 h-1 bg-copper mx-auto rounded-full wv-spacing-md"></div>
              <p className="wv-lead wv-spacing-md max-w-3xl mx-auto" style={{color:'rgba(255,255,255,0.95)'}}>In einer offenen Studie reduzierten 90% der Hunde ihre Meloxicam‑Dosis – 75% hielten die Reduktion über 10 Wochen.</p>
            </FadeIn>
          </div>
        </div>
      </section>

      <RatgeberArticleLayout
        slug="/ratgeber/palmitoyl-glucosamin-curcumin"
        takeaways={[
          "PEA + Curcumin + Glucosamin: multimodal bei chronischen Schmerzen",
          "Anwendung mit Tierärztin abstimmen; Qualität & Dosierung beachten",
          "Datenlage teils offen/heterogen – ergänzend, nicht ersetzend",
        ]}
      >
        <ScrollAnimation>
          <div className="prose prose-lg max-w-none">
            <h2 className="wv-h2 text-green wv-spacing-lg">Warum die Kombination sinnvoll ist</h2>
            <ul className="wv-body text-green/80 space-y-2">
              <li>• <strong>PEA</strong>: moduliert Entzündungsprozesse (endocannabinoidähnlich)</li>
              <li>• <strong>Glucosamin</strong>: Knorpelstoffwechsel</li>
              <li>• <strong>Curcumin</strong>: antioxidativ/entzündungshemmend</li>
            </ul>
            <p className="wv-body text-green/80">Vor Einsatz mit der Tierärztin abstimmen – besonders bei gleichzeitiger NSAID‑Therapie.</p>
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


