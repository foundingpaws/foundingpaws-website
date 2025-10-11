import ScrollAnimation from "@/components/ScrollAnimation";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";

export const metadata = {
  title: 'Melatonin beim Hund: Angst, Schlaf & Alopezie | Founding Paws',
  description: 'Übersicht: Einsatz bei Geräuschphobie, Schlafstörungen im Alter und saisonaler Flankenalopezie – Dosierung mit Tierärztin abstimmen.',
  alternates: { canonical: '/ratgeber/melatonin-hund' },
  openGraph: { title: 'Melatonin beim Hund', description: 'Beruhigend und schlaffördernd – Evidenzlage.', type: 'article' }
};

export default function MelatoninHundPage() {
  return (
    <main className="bg-cream text-green">
      <section className="wv-section bg-green text-cream">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <div className="inline-block pill bg-cream/20 border border-cream/30 px-6 py-3 wv-eyebrow" style={{color:'white'}}>Stress & Entspannung</div>
              <h1 className="wv-h1 wv-spacing-sm" style={{color:'white'}}>Melatonin – Beruhigung und Hilfe bei Haarausfall</h1>
              <div className="w-20 h-1 bg-copper mx-auto rounded-full wv-spacing-md"></div>
              <p className="wv-lead wv-spacing-md max-w-3xl mx-auto" style={{color:'rgba(255,255,255,0.95)'}}>Anwendung bei Lärmphobie und Schlafstörungen; bei saisonaler Alopezie teils Haarneubildung – individuell dosieren.</p>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="wv-section bg-cream">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <ScrollAnimation>
              <div className="prose prose-lg max-w-none">
                <h2 className="wv-h2 text-green wv-spacing-lg">Tipps zur Anwendung</h2>
                <ul className="wv-body text-green/80 space-y-2">
                  <li>• Einsatz mit der Tierärztin abstimmen; Gewicht und Indikation beachten</li>
                  <li>• Bei Fellthemen längere Gabe; Lichtmanagement berücksichtigen</li>
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


