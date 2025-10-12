import ScrollAnimation from "@/components/ScrollAnimation";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";

export default function LTheaninHundPage() {
  return (
    <main className="bg-cream text-green">
      <section className="wv-section bg-green text-cream">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <div className="inline-block pill bg-cream/20 border border-cream/30 px-6 py-3 wv-eyebrow" style={{color:'white'}}>Stress & Entspannung</div>
              <h1 className="wv-h1 wv-spacing-sm" style={{color:'white'}}>L‑Theanin: Sanfte Hilfe bei Stress und Angst</h1>
              <div className="w-20 h-1 bg-copper mx-auto rounded-full wv-spacing-md"></div>
              <p className="wv-lead wv-spacing-md max-w-3xl mx-auto" style={{color:'rgba(255,255,255,0.95)'}}>Übersichten zeigen beruhigende Effekte; typische Dosierungen: 50/100/200 mg je nach Gewichtsklasse.</p>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="wv-section bg-cream">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <ScrollAnimation>
              <div className="prose prose-lg max-w-none">
                <h2 className="wv-h2 text-green wv-spacing-lg">So wirkt L‑Theanin</h2>
                <ul className="wv-body text-green/80 space-y-2">
                  <li>• Fördert GABA/Serotonin (beruhigende Neurotransmitter)</li>
                  <li>• Reduziert Stresshormon Cortisol</li>
                  <li>• Unterstützt entspanntere Interaktionen</li>
                </ul>

                <h2 className="wv-h2 text-green wv-spacing-lg">Einsatzgebiete</h2>
                <ul className="wv-body text-green/80 space-y-2">
                  <li>• Akuter Stress (Gewitter, Feuerwerk, Tierarzt): 60–90 Min vorher geben.</li>
                  <li>• Generalisierte Unsicherheit/Trennungsstress: tägliche Gabe über 2–4 Wochen testen.</li>
                  <li>• Als Baustein im Trainingsplan (Gegenkonditionierung, Ruhetraining).</li>
                </ul>

                <h2 className="wv-h2 text-green wv-spacing-lg">Dosierung (Richtwerte)</h2>
                <ul className="wv-body text-green/80 space-y-2">
                  <li>• &lt;10 kg: 50 mg/Tag</li>
                  <li>• 10–25 kg: 100 mg/Tag</li>
                  <li>• &gt;25 kg: 200 mg/Tag</li>
                </ul>

                <div className="bg-copper/10 p-6 rounded-xl border border-copper/20 wv-spacing-lg">
                  <h3 className="wv-h3 text-green wv-spacing-sm">Empfehlung</h3>
                  <p className="wv-body text-green/80">Setze L‑Theanin als Baustein im ganzheitlichen Stressmanagement ein – kombiniert mit Training, Routinen und Rückzugsorten.</p>
                </div>

                <h2 className="wv-h2 text-green wv-spacing-lg">Sicherheit & Hinweise</h2>
                <ul className="wv-body text-green/80 space-y-2">
                  <li>• In Studien gut verträglich; selten milde Magen‑Darm‑Beschwerden berichtet.</li>
                  <li>• Vorsicht bei Beruhigungsmitteln/Sedativa – Tierarzt fragen (additive Effekte möglich).</li>
                  <li>• Trächtigkeit/Laktation: nur nach tierärztlicher Rücksprache.</li>
                </ul>

                <h2 className="wv-h2 text-green wv-spacing-lg">Quellen (Auswahl)</h2>
                <ul className="wv-body text-green/80 space-y-2">
                  <li>• Klinische Untersuchungen zu L‑Theanin bei Hunden mit Stress‑/Angst‑Verhalten; Berichte zu Sicherheit und Verträglichkeit.</li>
                  <li>• Übersichten zum Wirkmechanismus (GABA/Serotonin‑Modulation, Stressmarker).</li>
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


