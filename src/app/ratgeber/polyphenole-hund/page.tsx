import ScrollAnimation from "@/components/ScrollAnimation";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";

export const metadata = {
  title: 'Antioxidantien & Polyphenole: Pflanzliche Helden | Founding Paws',
  description: 'Gallic Acid, Tannine, Granatapfel, Curcumin: antioxidativ/entzündungshemmend – wo sie sinnvoll sind.',
  alternates: { canonical: '/ratgeber/polyphenole-hund' },
  openGraph: { title: 'Antioxidantien & Polyphenole', description: 'Pflanzliche Bausteine sinnvoll nutzen.', type: 'article' }
};

export default function PolyphenoleHundPage() {
  return (
    <main className="bg-cream text-green">
      <section className="wv-section bg-green text-cream">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <div className="inline-block pill bg-cream/20 border border-cream/30 px-6 py-3 wv-eyebrow" style={{color:'white'}}>Ernährung</div>
              <h1 className="wv-h1 wv-spacing-sm" style={{color:'white'}}>Antioxidantien & Polyphenole – pflanzliche Helden</h1>
              <div className="w-20 h-1 bg-copper mx-auto rounded-full wv-spacing-md"></div>
              <p className="wv-lead wv-spacing-md max-w-3xl mx-auto" style={{color:'rgba(255,255,255,0.95)'}}>Zellschutz, Immunmodulation und Entzündungshemmung – sinnvoll als Ergänzung, nicht als Ersatz.</p>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="wv-section bg-cream">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <ScrollAnimation>
              <div className="prose prose-lg max-w-none">
                <h2 className="wv-h2 text-green wv-spacing-lg">Highlights</h2>
                <ul className="wv-body text-green/80 space-y-2">
                  <li>• <strong>Gallic Acid</strong>: weniger Durchfälle, niedrigeres Cortisol/HSP70 nach Transportstress.</li>
                  <li>• <strong>Tanninsäure/Granatapfel</strong>: antioxidativ, bessere Blutparameter.</li>
                  <li>• <strong>Curcumin</strong>: höhere antioxidative Kapazität, Synergien mit Nährstoffen.</li>
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


