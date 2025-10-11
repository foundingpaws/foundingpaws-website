import ScrollAnimation from "@/components/ScrollAnimation";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";

export const metadata = {
  title: 'Feuerwerksangst: Tryptophan, Baldrian & Passionsblume | Founding Paws',
  description: 'Placebokontrollierte Daten: Verbesserungen 33–41% – in Kombination mit Training und Management einsetzen.',
  alternates: { canonical: '/ratgeber/feuerwerksangst-hund' },
  openGraph: { title: 'Lärmphobie beim Hund', description: 'Natürliche Hilfen sinnvoll kombiniert.', type: 'article' }
};

export default function FeuerwerksangstHundPage() {
  return (
    <main className="bg-cream text-green">
      <section className="wv-section bg-green text-cream">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <div className="inline-block pill bg-cream/20 border border-cream/30 px-6 py-3 wv-eyebrow" style={{color:'white'}}>Stress & Entspannung</div>
              <h1 className="wv-h1 wv-spacing-sm" style={{color:'white'}}>Feuerwerksangst und Lärmphobie – natürliche Hilfen</h1>
              <div className="w-20 h-1 bg-copper mx-auto rounded-full wv-spacing-md"></div>
              <p className="wv-lead wv-spacing-md max-w-3xl mx-auto" style={{color:'rgba(255,255,255,0.95)'}}>Tryptophan, Baldrian & Passionsblume: Effekte in Studien – rechtzeitig beginnen und mit Training kombinieren.</p>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="wv-section bg-cream">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <ScrollAnimation>
              <div className="prose prose-lg max-w-none">
                <h2 className="wv-h2 text-green wv-spacing-lg">Anwendung</h2>
                <ul className="wv-body text-green/80 space-y-2">
                  <li>• 6 Wochen vor Ereignis starten</li>
                  <li>• Mit Verhaltenstraining, Rückzugsorten, Geräuschmanagement kombinieren</li>
                  <li>• Geduld: Effekte teils erst nach mehreren Wochen sichtbar</li>
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


