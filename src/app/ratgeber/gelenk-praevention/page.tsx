import ScrollAnimation from "@/components/ScrollAnimation";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";

export const metadata = {
  title: 'Gelenk‑Prävention beim Hund: Die 6 Säulen | Founding Paws',
  description: 'Gewicht, Bewegung, Umfeld, Früherkennung, Ernährung & Reha – Checkliste und Maßnahmen für gesunde Gelenke.',
  alternates: { canonical: '/ratgeber/gelenk-praevention' },
  openGraph: { title: 'Gelenk‑Prävention', description: 'Früh schützen, besser leben.', type: 'article' }
};

export default function GelenkPraeventionPage() {
  return (
    <main className="bg-cream text-green">
      <section className="wv-section bg-green text-cream">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <div className="inline-block pill bg-cream/20 border border-cream/30 px-6 py-3 wv-eyebrow" style={{color:'white'}}>Gelenke & Mobilität</div>
              <h1 className="wv-h1 wv-spacing-sm" style={{color:'white'}}>Das Geheimnis gesunder Hundegelenke: Prävention ist King</h1>
              <div className="w-20 h-1 bg-copper mx-auto rounded-full wv-spacing-md"></div>
              <p className="wv-lead wv-spacing-md max-w-3xl mx-auto" style={{color:'rgba(255,255,255,0.95)'}}>Frühe Gegenmaßnahmen verzögern Beschwerden messbar – Gewicht, Bewegung, Umfeld und Beratung sind die sechs Säulen.</p>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="wv-section bg-cream">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <ScrollAnimation>
              <div className="prose prose-lg max-w-none">
                <h2 className="wv-h2 text-green wv-spacing-lg">Die 6 Präventions‑Säulen</h2>
                <ul className="wv-body text-green/80 space-y-2">
                  <li>• Körpergewicht & Body Condition Score (Ziel: 4–5/9)</li>
                  <li>• Lebenslange, kontrollierte Low‑Impact‑Bewegung</li>
                  <li>• Rutschfeste Umgebung, Rampen, kurze Krallen</li>
                  <li>• Früherkennung bei Risikorassen (Hüfte/Ellenbogen)</li>
                  <li>• Ernährung/Supplemente gezielt einsetzen (stärkste Evidenz: Omega‑3)</li>
                  <li>• Reha bei ersten Anzeichen (Mobilisation, Kraft, Balance)</li>
                </ul>

                <h2 className="wv-h2 text-green wv-spacing-lg">Checkliste für den Alltag</h2>
                <ul className="wv-body text-green/80 space-y-1">
                  <li>• 4–6×/Woche 30–45 min Bewegung (individuell)</li>
                  <li>• BCS 4–5/9 anstreben</li>
                  <li>• Rutschstopper & Rampen nutzen</li>
                  <li>• 2×/Jahr Gelenk‑Check (Senioren öfter)</li>
                </ul>

                <div className="bg-copper/10 p-6 rounded-xl border border-copper/20 wv-spacing-lg">
                  <h3 className="wv-h3 text-green wv-spacing-sm">CTA</h3>
                  <p className="wv-body text-green/80">Starte heute mit deinem FoundingPaws Gelenk‑Plan – Gewicht, Bewegung, Omega‑3 – wir begleiten dich.</p>
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


