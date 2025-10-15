import ScrollAnimation from "@/components/ScrollAnimation";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";
import RatgeberArticleLayout from "@/components/RatgeberArticleLayout";

export const metadata = {
  title: 'Natürliche Alternativen zu Schmerzmitteln beim Hund | Founding Paws',
  description: 'Evidenz zu Omega‑3, Grünlippmuschel und UC‑II/Boswellia – sicher anwenden und richtig dosieren.',
  alternates: { canonical: '/ratgeber/natuerliche-schmerzmittel-hund' },
  openGraph: { title: 'Natürliche Schmerztherapie', description: 'Was hilft wirklich?', type: 'article' }
};

export default function NatuerlicheSchmerzmittelHundPage() {
  return (
    <main className="bg-cream text-green">
      <section className="wv-section bg-green text-cream">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <div className="inline-block pill bg-cream/20 border border-cream/30 px-6 py-3 wv-eyebrow backdrop-blur-sm" style={{color:'white'}}>Gelenke & Mobilität</div>
              <h1 className="wv-h1 wv-spacing-sm" style={{color:'white'}}>Natürliche Alternativen zu Schmerzmitteln: Was hilft wirklich?</h1>
              <div className="w-20 h-1 bg-copper mx-auto rounded-full wv-spacing-md"></div>
              <p className="wv-lead wv-spacing-md max-w-3xl mx-auto" style={{color:'rgba(255,255,255,0.95)'}}>
                NSAIDs bleiben Standard – doch evidenzbasiert können Omega‑3, Grünlippmuschel und UC‑II/Boswellia unterstützen und Medikamentenbedarf senken.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      <RatgeberArticleLayout
        slug="/ratgeber/natuerliche-schmerzmittel-hund"
        takeaways={[
          "NSAIDs bleiben Basis – natürliche Optionen können additiv helfen",
          "Beste Evidenz: Omega‑3; außerdem GLM, UC‑II/Boswellia",
          "Qualitätsprodukte wählen; Dosierung und Sicherheit beachten",
        ]}
      >
        <ScrollAnimation>
          <div className="prose prose-lg max-w-none">
            <h2 className="wv-h2 text-green wv-spacing-lg">Top 5 evidenzbasierte Optionen</h2>
            <h3 className="wv-h3 text-green wv-spacing-sm">Omega‑3 (EPA/DHA)</h3>
            <p className="wv-body text-green/80">RCTs: bessere Belastung/Schmerz; teils geringerer NSAID‑Bedarf. Start 30–50 mg/kg/Tag, Ziel bis ~70 mg/kg/Tag.</p>
            <h3 className="wv-h3 text-green wv-spacing-sm">Grünlippmuschel / PCSO‑524</h3>
            <p className="wv-body text-green/80">Mehrere Studien/Reviews mit Schmerz‑ und Funktionsverbesserungen.</p>
            <h3 className="wv-h3 text-green wv-spacing-sm">UC‑II® ± Boswellia</h3>
            <p className="wv-body text-green/80">Randomisierte Daten: bessere Funktion binnen 8 Wochen.</p>

            <h2 className="wv-h2 text-green wv-spacing-lg">Sicherheit & Dosierung</h2>
            <ul className="wv-body text-green/80 space-y-2">
              <li>• Omega‑3 zu den Mahlzeiten; bei OPs Rücksprache wegen Gerinnung</li>
              <li>• UC‑II/Boswellia/GLM: nur qualitätsgeprüfte Produkte</li>
            </ul>

            <div className="bg-copper/10 p-6 rounded-xl border border-copper/20 wv-spacing-lg">
              <h3 className="wv-h3 text-green wv-spacing-sm">CTA</h3>
              <p className="wv-body text-green/80">Entdecke unser FoundingPaws Gelenk‑Paket (Omega‑3 + Snack) als Baustein deiner multimodalen Strategie.</p>
            </div>
          </div>
        </ScrollAnimation>
      </RatgeberArticleLayout>

      <section className="wv-section bg-green text-cream">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <Link href="/ratgeber" className="btn-primary pill text-cream px-8 py-4 font-medium">Weitere Artikel</Link>
          </div>
        </div>
      </section>
    </main>
  );
}


