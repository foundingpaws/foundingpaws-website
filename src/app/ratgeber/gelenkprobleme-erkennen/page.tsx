import ScrollAnimation from "@/components/ScrollAnimation";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";

export const metadata = {
  title: 'Gelenkprobleme erkennen: 5 typische Muster | Founding Paws',
  description: 'OA, Hüft-/Ellenbogendysplasie, Kreuzband, Patellaluxation – Anzeichen & Tierarzt‑Check verständlich erklärt.',
  alternates: { canonical: '/ratgeber/gelenkprobleme-erkennen' },
  openGraph: { title: 'Gelenkprobleme erkennen', description: 'Wann zum Tierarzt?', type: 'article' }
};

export default function GelenkproblemeErkennenPage() {
  return (
    <main className="bg-cream text-green">
      <section className="wv-section bg-green text-cream">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <div className="inline-block pill bg-cream/20 border border-cream/30 px-6 py-3 wv-eyebrow" style={{color:'white'}}>Gelenke & Mobilität</div>
              <h1 className="wv-h1 wv-spacing-sm" style={{color:'white'}}>Die 5 häufigsten Gelenkprobleme – und wie du sie erkennst</h1>
              <div className="w-20 h-1 bg-copper mx-auto rounded-full wv-spacing-md"></div>
              <p className="wv-lead wv-spacing-md max-w-3xl mx-auto" style={{color:'rgba(255,255,255,0.95)'}}>OA, Hüft‑/Ellenbogendysplasie, Kreuzband, Patellaluxation – typische Anzeichen und wann zum Tierarzt.</p>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="wv-section bg-cream">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <ScrollAnimation>
              <div className="prose prose-lg max-w-none">
                <h2 className="wv-h2 text-green wv-spacing-lg">Kurzüberblick</h2>
                <ul className="wv-body text-green/80 space-y-2">
                  <li>• Osteoarthritis: Anlauf‑Lahmheit, Steifigkeit, Muskelabbau</li>
                  <li>• Hüftdysplasie: Watschelgang, Hasenhopp, Treppenprobleme</li>
                  <li>• Ellenbogendysplasie: Vorderbein‑Lahmheit früh</li>
                  <li>• Kreuzbandriss: akute Lahmheit, „Sitz schief“</li>
                  <li>• Patellaluxation: Hoppeln, kurzes Hochziehen des Beins</li>
                </ul>

                <h2 className="wv-h2 text-green wv-spacing-lg">Wann zum Tierarzt?</h2>
                <p className="wv-body text-green/80">Bei plötzlicher/anhaltender Lahmheit, Schmerzzeichen, Schwellung oder Knacken – früh therapieren bremst Folgeschäden.</p>

                <h2 className="wv-h2 text-green wv-spacing-lg">Typische Muster im Alltag</h2>
                <ul className="wv-body text-green/80 space-y-2">
                  <li>• <strong>Osteoarthritis (OA):</strong> Anlauf‑Steifigkeit nach Ruhe, warmgelaufen besser, abends wieder schlechter; Treppen & Sprünge werden gemieden.</li>
                  <li>• <strong>Hüftdysplasie (HD):</strong> Watschelgang, „Hasenhopp“ beim Laufen, breiter Stand, Aufstehen fällt schwer.</li>
                  <li>• <strong>Ellenbogendysplasie (ED):</strong> Vorderbein‑Lahmheit, kurze Schritte, Ellbogen nach außen gedreht, häufig junges Alter.</li>
                  <li>• <strong>Kreuzbandriss (CCLR):</strong> Akuter Schmerz, Teilbelastung/Entlastung, „Sitz schief“ (Bein zur Seite), Oberschenkelmuskel baut ab.</li>
                  <li>• <strong>Patellaluxation:</strong> Hoppeln, Bein wird kurz hochgezogen und danach wieder normal belastet, häufig kleine Rassen.</li>
                </ul>

                <h2 className="wv-h2 text-green wv-spacing-lg">Praktische Selbst‑Checks (zu Hause)</h2>
                <ul className="wv-body text-green/80 space-y-2">
                  <li>• <strong>Treppentest:</strong> Vermeidet der Hund Stufen/ins Auto springen? Verschlechterung über Tage ist ein Warnsignal.</li>
                  <li>• <strong>Aufsteh‑Zeit:</strong> Dauert Aufstehen nach Ruhe deutlich länger als früher? Häufig OA/HD.</li>
                  <li>• <strong>Asymmetrie:</strong> Tasten Sie beide Seiten nacheinander (Temperatur, Schwellung, Schmerzreaktion) – Unterschiede notieren.</li>
                  <li>• <strong>Belastungsdauer:</strong> Nach kurzer Runde deutliche Lahmheit? Belastung reduzieren und Tierarzttermin vereinbaren.</li>
                </ul>

                <h2 className="wv-h2 text-green wv-spacing-lg">Diagnostik beim Tierarzt</h2>
                <ul className="wv-body text-green/80 space-y-2">
                  <li>• Ganganalyse, Palpation, Gelenkspiel (z. B. Schubladen‑/Tibiakompressionstest bei CCLR).</li>
                  <li>• Bildgebung je nach Verdacht: Röntgen (HD/ED/OA), Ultraschall (Weichteile), ggf. CT/MRT (Komplexfälle).</li>
                  <li>• Entzündungs-/Infekt‑Ausschluss bei akuter Schwellung, Trauma‑Abklärung.</li>
                </ul>

                <h2 className="wv-h2 text-green wv-spacing-lg">Therapie‑Bausteine (individualisiert)</h2>
                <ul className="wv-body text-green/80 space-y-2">
                  <li>• <strong>Bewegungsmanagement:</strong> Kurze, häufige, kontrollierte Spaziergänge; rutschfeste Unterlagen; Gewichtsmanagement.</li>
                  <li>• <strong>Physiotherapie:</strong> Muskelaufbau, Gelenkmobilisation, Hydrotherapie – nach Plan.</li>
                  <li>• <strong>Schmerztherapie:</strong> Tierärztlich gesteuert (Analgetika/Entzündungshemmer, je nach Befund).</li>
                  <li>• <strong>Ergänzend:</strong> Omega‑3‑Fettsäuren, gelenkunterstützende Nährstoffe – nur Produkte mit klarer Dosierung/Qualität.</li>
                </ul>

                <h2 className="wv-h2 text-green wv-spacing-lg">Red Flags (sofort abklären)</h2>
                <ul className="wv-body text-green/80 space-y-2">
                  <li>• Plötzliche hochgradige Lahmheit, starke Schwellung/Hitze, sichtbare Fehlstellung.</li>
                  <li>• Fieber, Apathie, Trauma oder neurologische Ausfälle (z. B. Lähmungen).</li>
                </ul>

                <h2 className="wv-h2 text-green wv-spacing-lg">Quellen (Auswahl)</h2>
                <ul className="wv-body text-green/80 space-y-2">
                  <li>• Leitlinien/Reviews zur Diagnostik von OA/HD/ED/CCLR beim Hund (Ganganalyse, Bildgebung, Tests).</li>
                  <li>• Evidenz zu konservativen und chirurgischen Therapien sowie Reha‑Maßnahmen.</li>
                </ul>

                <div className="bg-copper/10 p-6 rounded-xl border border-copper/20 wv-spacing-lg">
                  <h3 className="wv-h3 text-green wv-spacing-sm">CTA</h3>
                  <p className="wv-body text-green/80">Hol dir unseren Gelenk‑Selbsttest und sprich mit deiner Tierärztin. Ergänzend: FoundingPaws Omega‑3 als Baustein.</p>
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


