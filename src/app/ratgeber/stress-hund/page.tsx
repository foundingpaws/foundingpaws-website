import ScrollAnimation from "@/components/ScrollAnimation";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";
import RatgeberArticleLayout from "@/components/RatgeberArticleLayout";

export const metadata = {
  title: 'Stress beim Hund: Signale erkennen & natürlich unterstützen | Founding Paws',
  description: 'Frühzeichen, Training & Management – evidenzbasierte Hilfe und sanfte Optionen.',
  alternates: { canonical: '/ratgeber/stress-hund' },
  openGraph: { title: 'Stress beim Hund: Hilfe & Training', description: 'Training, Management & sanfte Unterstützung – evidenzbasiert.', type: 'article' }
};

export default function StressHundPage() {
  return (
    <main className="bg-cream text-green">
      <section className="wv-section bg-green text-cream">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <div className="inline-block pill bg-cream/20 border border-cream/30 px-6 py-3 wv-eyebrow" style={{color:'white'}}>Stress & Entspannung</div>
              <h1 className="wv-h1 wv-spacing-sm" style={{color:'white'}}>Stress bei Hunden erkennen – und natürlich unterstützen</h1>
              <div className="w-20 h-1 bg-copper mx-auto rounded-full wv-spacing-md"></div>
              <p className="wv-lead wv-spacing-md max-w-3xl mx-auto" style={{color:'rgba(255,255,255,0.95)'}}>Frühe Signale richtig deuten, Training & Management kombinieren – Evidenz zu L‑Theanin, DAP & Co.</p>
            </FadeIn>
          </div>
        </div>
      </section>

      <RatgeberArticleLayout
        slug="/ratgeber/stress-hund"
        takeaways={[
          "Stress zeigt sich früh über Beschwichtigungssignale",
          "Kern ist Training + Management; Ergänzungen sind additiv",
          "Bei schweren Fällen tierärztliche Verhaltenstherapie einbinden",
        ]}
      >
        <ScrollAnimation>
          <div className="prose prose-lg max-w-none">
            <h2 className="wv-h2 text-green wv-spacing-lg">Woran erkenne ich Stress?</h2>
            <p className="wv-body text-green/80">Blick abwenden, Lecken, Gähnen, Pfote heben – später Hecheln, Zittern, Rückzug.</p>

            <h2 className="wv-h2 text-green wv-spacing-lg">Training & Management</h2>
            <ul className="wv-body text-green/80 space-y-2">
              <li>• Trigger analysieren, Distanz/Dauer anpassen</li>
              <li>• Gegenkonditionierung + Entspannungssignale</li>
              <li>• Rückzugsort & Routinen</li>
            </ul>

            <h2 className="wv-h2 text-green wv-spacing-lg">Natürliche Unterstützungen – Evidenz</h2>
            <ul className="wv-body text-green/80 space-y-2">
              <li>• L‑Theanin: Pilotdaten mit beruhigenden Effekten</li>
              <li>• DAP: gemischte Daten – additiv sinnvoll</li>
              <li>• Valerian‑Mischungen: RCT ohne Effekt</li>
              <li>• Senioren/Unruhe: MCT‑reiche Diät kann helfen</li>
            </ul>

            <div className="bg-copper/10 p-6 rounded-xl border border-copper/20 wv-spacing-lg">
              <h3 className="wv-h3 text-green wv-spacing-sm">Sicherheit</h3>
              <p className="wv-body text-green/80">Bei Panik, Aggression, Selbstverletzung: tierärztliche Verhaltenstherapie.</p>
            </div>

            <div className="wv-spacing-xl" />
            <div className="bg-white p-6 rounded-xl border border-green/10">
              <h2 className="wv-h3 text-green wv-spacing-sm">Häufige Fragen</h2>
              <div className="wv-body text-green/80 space-y-4">
                <div>
                  <div className="font-medium text-green">Wie erkenne ich frühzeitige Stresszeichen?</div>
                  <p>Lecken, Gähnen, Blick abwenden, Pfote heben – später Hecheln/Zittern. Kontext beachten.</p>
                </div>
                <div>
                  <div className="font-medium text-green">Hilft L‑Theanin sofort?</div>
                  <p>Bei akutem Stress 60–90 Min vorher geben; für Grundspannung 2–4 Wochen testen.</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </RatgeberArticleLayout>

      <section className="wv-section bg-green text-cream">
        <div className="container-wide text-center">
          <Link href="/ratgeber" className="btn-primary pill text-cream px-8 py-4 font-medium">Weitere Artikel</Link>
        </div>
      </section>
    </main>
  );
}


