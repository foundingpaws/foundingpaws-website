import ScrollAnimation from "@/components/ScrollAnimation";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";

export const metadata = {
  title: 'Übungen für Senior‑Hunde: Schonend mobil bleiben | Founding Paws',
  description: 'Schonende Aktivitäten, Kraft & Balance zu Hause und ein Wochenplan – so bleibt dein Senior mobil, ohne zu überlasten.',
  alternates: { canonical: '/ratgeber/senior-hund-uebungen' },
  openGraph: { title: 'Übungen für Senior‑Hunde', description: 'Schonend mobil bleiben mit Plan.', type: 'article' }
};

export default function SeniorHundUebungenPage() {
  return (
    <main className="bg-cream text-green">
      {/* Hero */}
      <section className="wv-section bg-green text-cream">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <div className="inline-block pill bg-cream/20 border border-cream/30 px-6 py-3 wv-eyebrow backdrop-blur-sm" style={{color: 'white'}}>Gelenke & Mobilität</div>
              <h1 className="wv-h1 wv-spacing-sm" style={{color: 'white'}}>Übungen für Senior‑Hunde: Bewegung ohne Überlastung</h1>
              <div className="w-20 h-1 bg-copper mx-auto rounded-full wv-spacing-md"></div>
              <p className="wv-lead wv-spacing-md max-w-3xl mx-auto" style={{color: 'rgba(255,255,255,0.95)'}}>
                Ältere Hunde profitieren enorm von maßvoller, gelenkschonender Aktivität – für bessere Beweglichkeit, Schlaf und Ausgeglichenheit.
              </p>
              <div className="flex items-center justify-center gap-6 text-sm text-cream/80 wv-spacing-md">
                <span>📅 Aktualisiert: 2025</span>
                <span>⏱️ 9 Min</span>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="wv-section bg-cream">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <ScrollAnimation>
              <div className="prose prose-lg max-w-none">
                <h2 className="wv-h2 text-green wv-spacing-lg">Vor dem Start</h2>
                <ul className="wv-body text-green/80 space-y-2">
                  <li>• Tierärztlichen Check-up (Herz, Gelenke, Gewicht, Schmerzen, ggf. Blutbild)</li>
                  <li>• 7‑Tage‑Bewegungstagebuch (Minuten, Intensität, Reaktion danach)</li>
                </ul>

                <h2 className="wv-h2 text-green wv-spacing-lg">Die sichersten Bewegungsformen</h2>
                <h3 className="wv-h3 text-green wv-spacing-sm">„Schnüffel‑Spaziergänge“</h3>
                <p className="wv-body text-green/80">Langsames Tempo, viele Stopps zum Schnüffeln. Mental fordernd, körperlich schonend.</p>
                <h3 className="wv-h3 text-green wv-spacing-sm">Intervall‑Gehen</h3>
                <p className="wv-body text-green/80">2–3 min zügig, 2 min langsam; 4–6 Zyklen – ideal bei Steifigkeit.</p>
                <h3 className="wv-h3 text-green wv-spacing-sm">Sanfte Steigungen</h3>
                <p className="wv-body text-green/80">Kurze Hänge auf weichem Untergrund: stärkt die Hinterhand‑Muskulatur.</p>
                <h3 className="wv-h3 text-green wv-spacing-sm">Schwimmen / Unterwasserlaufband</h3>
                <p className="wv-body text-green/80">Entlastet Gelenke, fördert Bewegungsumfang und kann Schmerzen senken.</p>

                <h2 className="wv-h2 text-green wv-spacing-lg">Kraft & Balance zu Hause (3–4×/Woche)</h2>
                <ul className="wv-body text-green/80 space-y-2">
                  <li>• Sitz‑Platz‑Sitz (3×5 Wiederholungen, langsam und sauber)</li>
                  <li>• Gewichtsverlagerungen im Stand (sanft Hüfte links/rechts antippen)</li>
                  <li>• Cavaletti in Bodenhöhe (5–6 Stangen, 60–80 cm Abstand)</li>
                  <li>• Wackelkissen/Matte: 3×30 Sek. kurze Balance‑Reize</li>
                </ul>

                <h2 className="wv-h2 text-green wv-spacing-lg">Wochenplan (Beispiel)</h2>
                <ul className="wv-body text-green/80 space-y-1">
                  <li>• Mo/Do: 25–35 min Spaziergang + 10 min Kraft/Balance</li>
                  <li>• Di/Fr: 20–30 min ruhiges Schwimmen/Unterwasserlaufband</li>
                  <li>• Mi/Sa: 30–40 min Schnüffel‑Runde</li>
                  <li>• So: Aktiv‑Ruhetag (leichte Mobilisation, Massage)</li>
                </ul>

                <h2 className="wv-h2 text-green wv-spacing-lg">Stopp‑Zeichen</h2>
                <p className="wv-body text-green/80">Humpeln, starkes Hecheln in Ruhe, Futterverweigerung, nächtliche Unruhe → Dosis senken und Tierarzt rückkoppeln.</p>

                <div className="bg-copper/10 p-6 rounded-xl border border-copper/20 wv-spacing-lg">
                  <h3 className="wv-h3 text-green wv-spacing-sm">Praktischer Profi‑Tipp</h3>
                  <p className="wv-body text-green/80">Nach der Einheit 5–10 min aktives Auslaufen, 1–2 Dehnungen, Wasser. Abends Schmerz/Steifigkeits‑Score (0–10) dokumentieren.</p>
                </div>

                <h2 className="wv-h2 text-green wv-spacing-lg">CTA</h2>
                <p className="wv-body text-green/80">Unterstütze die Gelenke deines Seniors zusätzlich mit Omega‑3 und einem gelenkfreundlichen Futterplan – für spürbar mehr Alltagsfreude.</p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="wv-section bg-green text-cream">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="wv-h2 wv-spacing-sm" style={{color:'white'}}>Jetzt loslegen</h2>
            <div className="w-16 h-1 bg-copper mx-auto rounded-full wv-spacing-md"></div>
            <p className="wv-lead max-w-2xl mx-auto" style={{color:'rgba(255,255,255,0.9)'}}>Starte sanft – wir begleiten dich.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center wv-spacing-md">
              <Link href="/ratgeber" className="btn-primary pill text-cream px-8 py-4 font-medium">Weitere Artikel</Link>
              <Link href="/bedarfsfinder" className="btn-secondary pill text-cream px-8 py-4 font-medium">Bedarfsfinder starten</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


