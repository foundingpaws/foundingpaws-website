import ScrollAnimation from "@/components/ScrollAnimation";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";

export const metadata = {
  title: 'MCTs & kognitive Dysfunktion beim Hund | Founding Paws',
  description: 'Diät mit 6,5% MCT + Brain‑Protection‑Blend: klinische Verbesserungen nach 30–90 Tagen – warum MCTs helfen können.',
  alternates: { canonical: '/ratgeber/mct-kognition-hund' },
  openGraph: { title: 'MCTs & kognitive Leistung', description: 'Schnelle Energie fürs Hundegehirn.', type: 'article' }
};

export default function MctKognitionHundPage() {
  return (
    <main className="bg-cream text-green">
      <section className="wv-section bg-green text-cream">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <div className="inline-block pill bg-cream/20 border border-cream/30 px-6 py-3 wv-eyebrow" style={{color:'white'}}>Kognition & Gehirn</div>
              <h1 className="wv-h1 wv-spacing-sm" style={{color:'white'}}>Mittelkettige Triglyzeride (MCT) und kognitive Dysfunktion</h1>
              <div className="w-20 h-1 bg-copper mx-auto rounded-full wv-spacing-md"></div>
              <p className="wv-lead wv-spacing-md max-w-3xl mx-auto" style={{color:'rgba(255,255,255,0.95)'}}>88% der Hunde verbesserten sich oder stagnierten nicht – MCTs liefern Ketone als schnelle Energiequelle fürs Gehirn.</p>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="wv-section bg-cream">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <ScrollAnimation>
              <div className="prose prose-lg max-w-none">
                <h2 className="wv-h2 text-green wv-spacing-lg">Warum MCTs wirken</h2>
                <ul className="wv-body text-green/80 space-y-2">
                  <li>• Ketonkörper als alternative Energiequelle fürs Gehirn</li>
                  <li>• Synergie mit Omega‑3, Antioxidantien, Arginin</li>
                </ul>
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


