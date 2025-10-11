import ScrollAnimation from "@/components/ScrollAnimation";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";

export const metadata = {
  title: 'Glucosamin/Chondroitin vs. marine Lipide bei Arthrose | Founding Paws',
  description: 'Randomisierte Daten: PCSO‑524/EAB‑277 und Carprofen verbessern objektive Belastungsmaße – Glucosamin/Chondroitin nicht. Praxisfolgen.',
  alternates: { canonical: '/ratgeber/glucosamin-vs-marine-lipide' },
  openGraph: { title: 'Marine Lipide vs. Glucosamin', description: 'Was sagt die Studie?', type: 'article' }
};

export default function GlucosaminVsMarineLipidePage() {
  return (
    <main className="bg-cream text-green">
      <section className="wv-section bg-green text-cream">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <div className="inline-block pill bg-cream/20 border border-cream/30 px-6 py-3 wv-eyebrow" style={{color:'white'}}>Gelenke & Mobilität</div>
              <h1 className="wv-h1 wv-spacing-sm" style={{color:'white'}}>Glucosamin & Chondroitin vs. marine Lipide – was hilft bei Arthrose?</h1>
              <div className="w-20 h-1 bg-copper mx-auto rounded-full wv-spacing-md"></div>
              <p className="wv-lead wv-spacing-md max-w-3xl mx-auto" style={{color:'rgba(255,255,255,0.95)'}}>Randomisierte Daten: PCSO‑524/EAB‑277 und Carprofen verbesserten objektive Belastungsmaße – Glucosamin/Chondroitin nicht.</p>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="wv-section bg-cream">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <ScrollAnimation>
              <div className="prose prose-lg max-w-none">
                <h2 className="wv-h2 text-green wv-spacing-lg">Kernaussagen der Studie</h2>
                <ul className="wv-body text-green/80 space-y-2">
                  <li>• Nach 4–6 Wochen zeigten <strong>PCSO‑524/EAB‑277</strong> und <strong>Carprofen</strong> signifikante Verbesserungen (Peak Vertical Force) gegenüber Placebo und Glucosamin.</li>
                  <li>• <strong>Glucosamin/Chondroitin</strong> allein erzielte keine signifikanten Effekte.</li>
                </ul>

                <h2 className="wv-h2 text-green wv-spacing-lg">Was bedeutet das praktisch?</h2>
                <ul className="wv-body text-green/80 space-y-2">
                  <li>• Setze bei Arthrose auf <strong>marine Lipide</strong> (z. B. Grünlippmuschel‑Extrakte) – evidenzbasiert wirksam.</li>
                  <li>• Glucosamin/Chondroitin ggf. nur in <strong>Kombination</strong> mit weiteren Wirkstoffen.</li>
                </ul>

                <div className="bg-copper/10 p-6 rounded-xl border border-copper/20 wv-spacing-lg">
                  <h3 className="wv-h3 text-green wv-spacing-sm">Tipp</h3>
                  <p className="wv-body text-green/80">Wähle Produkte mit <strong>klar ausgewiesenen marinen Lipidkomplexen</strong> und kombiniere mit Omega‑3 für zusätzliche Entzündungsmodulation.</p>
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
    </main>
  );
}


