import ScrollAnimation from "@/components/ScrollAnimation";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";

export const metadata = {
  title: 'Ashwagandha beim Hund: Evidenz & Einsatz | Founding Paws',
  description: 'Randomisierte Doppelblindstudie bei Senioren: weniger Cortisol/TNF‑α/IFN‑γ, bessere antioxidative Kapazität & Lebensqualität.',
  alternates: { canonical: '/ratgeber/ashwagandha-hund' },
  openGraph: { title: 'Ashwagandha (Withania somnifera)', description: 'Adaptogen für alternde Hunde?', type: 'article' }
};

export default function AshwagandhaHundPage() {
  return (
    <main className="bg-cream text-green">
      <section className="wv-section bg-green text-cream">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <div className="inline-block pill bg-cream/20 border border-cream/30 px-6 py-3 wv-eyebrow" style={{color:'white'}}>Senior & Vitalität</div>
              <h1 className="wv-h1 wv-spacing-sm" style={{color:'white'}}>Ashwagandha – Adaptogen für alternde Hunde</h1>
              <div className="w-20 h-1 bg-copper mx-auto rounded-full wv-spacing-md"></div>
              <p className="wv-lead wv-spacing-md max-w-3xl mx-auto" style={{color:'rgba(255,255,255,0.95)'}}>Studie: niedrigere Stress‑/Entzündungsmarker, bessere Lebensqualität – Dosierung mit der Tierärztin abstimmen.</p>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="wv-section bg-cream">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <ScrollAnimation>
              <div className="prose prose-lg max-w-none">
                <h2 className="wv-h2 text-green wv-spacing-lg">Nutzen laut Literatur</h2>
                <ul className="wv-body text-green/80 space-y-2">
                  <li>• Senkt Cortisol; moduliert TNF‑α/IFN‑γ</li>
                  <li>• Bessere antioxidative Kapazität</li>
                  <li>• Verbesserte Vitalität/Well‑Being</li>
                </ul>
                <p className="wv-body text-green/80">Als starkes Pflanzenextrakt nur nach Dosierempfehlung und Beratung einsetzen.</p>
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


