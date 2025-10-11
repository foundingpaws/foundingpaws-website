import ScrollAnimation from "@/components/ScrollAnimation";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";

export const metadata = {
  title: 'Probiotika & Präbiotika: Darm & Immunsystem beim Hund | Founding Paws',
  description: 'Bacillus amyloliquefaciens, Saccharomyces boulardii & Co.: Evidenz zu Verdauung, Stress und IgA – Anwendung in der Praxis.',
  alternates: { canonical: '/ratgeber/probiotika-hund' },
  openGraph: { title: 'Probiotika & Präbiotika beim Hund', description: 'Starke Basis für Darm & Immunsystem.', type: 'article' }
};

export default function ProbiotikaHundPage() {
  return (
    <main className="bg-cream text-green">
      <section className="wv-section bg-green text-cream">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <div className="inline-block pill bg-cream/20 border border-cream/30 px-6 py-3 wv-eyebrow" style={{color:'white'}}>Ernährung & Verdauung</div>
              <h1 className="wv-h1 wv-spacing-sm" style={{color:'white'}}>Probiotika & Präbiotika für Darm und Immunsystem</h1>
              <div className="w-20 h-1 bg-copper mx-auto rounded-full wv-spacing-md"></div>
              <p className="wv-lead wv-spacing-md max-w-3xl mx-auto" style={{color:'rgba(255,255,255,0.95)'}}>Überblick 2023: ausgewählte Stämme verbessern Verdauung, Stressmarker und IgA – so setzt du sie ein.</p>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="wv-section bg-cream">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <ScrollAnimation>
              <div className="prose prose-lg max-w-none">
                <h2 className="wv-h2 text-green wv-spacing-lg">Evidenz – ausgewählte Beispiele</h2>
                <ul className="wv-body text-green/80 space-y-2">
                  <li>• <strong>Bacillus amyloliquefaciens</strong>: reduzierte Koliforme, verbesserte Darmflora.</li>
                  <li>• <strong>Saccharomyces boulardii</strong>: senkte Calprotectin, sIgA und Cortisol.</li>
                  <li>• <strong>Multi‑Stamm + Fasern</strong>: bessere Kotkonsistenz, höheres IgA.</li>
                  <li>• <strong>Enterococcus faecium</strong>: geringere Durchfallrate bei Welpen/Erwachsenen.</li>
                </ul>

                <h2 className="wv-h2 text-green wv-spacing-lg">Praxis – so nutzt du Probiotika</h2>
                <ul className="wv-body text-green/80 space-y-2">
                  <li>• Produkte mit <strong>mehreren Stämmen</strong> wählen (breitere Effekte).</li>
                  <li>• Mit <strong>Präbiotika/Fasern</strong> kombinieren (z. B. Flohsamen).</li>
                  <li>• <strong>Regelmäßig</strong> geben für anhaltende Wirkung.</li>
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


