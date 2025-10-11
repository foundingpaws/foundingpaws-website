import ScrollAnimation from "@/components/ScrollAnimation";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";

export const metadata = {
  title: 'Giardien beim Hund: Symptome, Behandlung & Prävention | Founding Paws',
  description: 'Zoonose beachten: wässriger Durchfall mit Schleim, übler Geruch – Therapie mit Fenbendazol/Metronidazol + Hygiene.',
  alternates: { canonical: '/ratgeber/giardien-hund' },
  openGraph: { title: 'Giardien – wenn der Darm rebelliert', description: 'Erkennen, behandeln, vorbeugen.', type: 'article' }
};

export default function GiardienHundPage() {
  return (
    <main className="bg-cream text-green">
      <section className="wv-section bg-green text-cream">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <div className="inline-block pill bg-cream/20 border border-cream/30 px-6 py-3 wv-eyebrow" style={{color:'white'}}>Ernährung & Verdauung</div>
              <h1 className="wv-h1 wv-spacing-sm" style={{color:'white'}}>Giardien – wenn der Darm rebelliert</h1>
              <div className="w-20 h-1 bg-copper mx-auto rounded-full wv-spacing-md"></div>
              <p className="wv-lead wv-spacing-md max-w-3xl mx-auto" style={{color:'rgba(255,255,255,0.95)'}}>Parasitäre Durchfälle sicher erkennen und behandeln – Hygienemaßnahmen sind entscheidend.</p>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="wv-section bg-cream">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <ScrollAnimation>
              <div className="prose prose-lg max-w-none">
                <h2 className="wv-h2 text-green wv-spacing-lg">Prävention</h2>
                <ul className="wv-body text-green/80 space-y-2">
                  <li>• Händewaschen, Näpfe/Spielzeug reinigen</li>
                  <li>• Stehende Gewässer meiden, Kot sofort entfernen</li>
                  <li>• Umgebung reinigen/desinfizieren</li>
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


