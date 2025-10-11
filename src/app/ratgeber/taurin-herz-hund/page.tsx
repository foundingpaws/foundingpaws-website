import ScrollAnimation from "@/components/ScrollAnimation";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";

export const metadata = {
  title: 'Taurin & Herzgesundheit beim Hund (DCM) | Founding Paws',
  description: '2018er Daten: Taurinmangel als reversible DCM‑Ursache – Warnzeichen, Diagnose und Ernährungstipps.',
  alternates: { canonical: '/ratgeber/taurin-herz-hund' },
  openGraph: { title: 'Taurin & dilatative Kardiomyopathie', description: 'Erkenntnisse & Empfehlungen für Hundebesitzer.', type: 'article' }
};

export default function TaurinHerzHundPage() {
  return (
    <main className="bg-cream text-green">
      <section className="wv-section bg-green text-cream">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <div className="inline-block pill bg-cream/20 border border-cream/30 px-6 py-3 wv-eyebrow" style={{color:'white'}}>Herz & Kreislauf</div>
              <h1 className="wv-h1 wv-spacing-sm" style={{color:'white'}}>Taurin und die Herzgesundheit: Vorbeugung gegen DCM</h1>
              <div className="w-20 h-1 bg-copper mx-auto rounded-full wv-spacing-md"></div>
              <p className="wv-lead wv-spacing-md max-w-3xl mx-auto" style={{color:'rgba(255,255,255,0.95)'}}>Studie: Futterumstellung + Taurin verbesserten Echos, Symptome und reduzierten Diuretika in vielen Fällen.</p>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="wv-section bg-cream">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <ScrollAnimation>
              <div className="prose prose-lg max-w-none">
                <h2 className="wv-h2 text-green wv-spacing-lg">Erkenntnisse & Empfehlungen</h2>
                <ul className="wv-body text-green/80 space-y-2">
                  <li>• Warnzeichen: Müdigkeit, Husten, Herzgeräusche → tierärztlich abklären.</li>
                  <li>• Ernährung: hochwertiges Futter mit ausreichendem Taurin; Supplemente bei Bedarf.</li>
                  <li>• Diagnose: Blut-/Urintests zur Taurinbestimmung.</li>
                  <li>• Bei getreidefreien Diäten Taurinzufuhr besonders beachten.</li>
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


