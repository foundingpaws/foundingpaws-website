import ScrollAnimation from "@/components/ScrollAnimation";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";

export const metadata = {
  title: 'Übungen für Senioren: 4‑Wochen Praxis‑Anleitung | Founding Paws',
  description: 'Warm‑up, Basis‑ und Ausdauer‑Phase, Cool‑down – sicher trainieren mit Plan und Dosierung.',
  alternates: { canonical: '/ratgeber/senior-uebungen-anleitung' },
  openGraph: { title: '4‑Wochen Praxis‑Anleitung', description: 'Schonend mobil bleiben – Schritt für Schritt.', type: 'article' }
};

export default function SeniorUebungenAnleitungPage() {
  return (
    <main className="bg-cream text-green">
      <section className="wv-section bg-green text-cream">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <div className="inline-block pill bg-cream/20 border border-cream/30 px-6 py-3 wv-eyebrow" style={{color:'white'}}>Gelenke & Mobilität</div>
              <h1 className="wv-h1 wv-spacing-sm" style={{color:'white'}}>Die besten Übungen für ältere Hunde: Bewegung ohne Risiko</h1>
              <div className="w-20 h-1 bg-copper mx-auto rounded-full wv-spacing-md"></div>
              <p className="wv-lead wv-spacing-md max-w-3xl mx-auto" style={{color:'rgba(255,255,255,0.95)'}}>Konkreter 4‑Wochen‑Plan mit Warm‑up, Progression und Dosierung – individuell anpassbar.</p>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="wv-section bg-cream">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <ScrollAnimation>
              <div className="prose prose-lg max-w-none">
                <h2 className="wv-h2 text-green wv-spacing-lg">Warm‑up (täglich, 5–7 min)</h2>
                <ul className="wv-body text-green/80 space-y-2">
                  <li>• 2 min langsam → 2 min zügig</li>
                  <li>• 5 Gewichtsverlagerungen im Stand</li>
                  <li>• Passive Beugungen/Streckungen großer Gelenke</li>
                </ul>

                <h2 className="wv-h2 text-green wv-spacing-lg">Woche 1–2: Basis stabilisieren</h2>
                <ul className="wv-body text-green/80 space-y-2">
                  <li>• Nase‑Schulter‑Targets (3×5)</li>
                  <li>• Sitz‑Platz‑Sitz (3×5, 60 s Pause)</li>
                  <li>• Cavaletti flach (6 Stangen, 2 Durchgänge)</li>
                  <li>• 10–15 min Schnüffel‑Spaziergang am Ende</li>
                </ul>

                <h2 className="wv-h2 text-green wv-spacing-lg">Woche 3–4: Ausdauer & Hinterhand</h2>
                <ul className="wv-body text-green/80 space-y-2">
                  <li>• Intervall‑Gehen 6× (2 min flott/2 min langsam)</li>
                  <li>• Mini‑Steigungen 3×30 m</li>
                  <li>• Balance‑Kissen 3×30 Sek. (Handstütze erlaubt)</li>
                  <li>• 1–2×/Woche Schwimmen/Unterwasserlaufband 15–20 min</li>
                </ul>

                <h2 className="wv-h2 text-green wv-spacing-lg">Cool‑down (5 min)</h2>
                <p className="wv-body text-green/80">Langsam auslaufen, 3–4 entspannte Dehnungen, Wasser anbieten.</p>

                <div className="bg-copper/10 p-6 rounded-xl border border-copper/20 wv-spacing-lg">
                  <h3 className="wv-h3 text-green wv-spacing-sm">Dokumentation & Anpassung</h3>
                  <p className="wv-body text-green/80">Abends Schmerz/Steifigkeits‑Score 0–10. Steigt der Score ≥2 Punkte oder &gt;24 h → nächste Einheit kürzen.</p>
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


