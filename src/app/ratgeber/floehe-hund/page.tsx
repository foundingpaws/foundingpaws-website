import ScrollAnimation from "@/components/ScrollAnimation";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";

export const metadata = {
  title: 'Flöhe beim Hund: Erkennen, Bekämpfen, Vorbeugen | Founding Paws',
  description: 'Häufigster Ektoparasit: starker Juckreiz, FAD möglich – Prophylaxe, Umgebungshygiene und Behandlung im Überblick.',
  alternates: { canonical: '/ratgeber/floehe-hund' },
  openGraph: { title: 'Flöhe – kleine Plagegeister', description: 'Was tun bei Befall?', type: 'article' }
};

export default function FloeheHundPage() {
  return (
    <main className="bg-cream text-green">
      <section className="wv-section bg-green text-cream">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <div className="inline-block pill bg-cream/20 border border-cream/30 px-6 py-3 wv-eyebrow" style={{color:'white'}}>Haut & Fell</div>
              <h1 className="wv-h1 wv-spacing-sm" style={{color:'white'}}>Flöhe – kleine Plagegeister mit großer Wirkung</h1>
              <div className="w-20 h-1 bg-copper mx-auto rounded-full wv-spacing-md"></div>
              <p className="wv-lead wv-spacing-md max-w-3xl mx-auto" style={{color:'rgba(255,255,255,0.95)'}}>Juckreiz, Haarausfall, Sekundärinfektionen – so erkennst du Flohbefall und gehst effektiv dagegen vor.</p>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="wv-section bg-cream">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <ScrollAnimation>
              <div className="prose prose-lg max-w-none">
                <h2 className="wv-h2 text-green wv-spacing-lg">Bekämpfung & Vorbeugung</h2>
                <ul className="wv-body text-green/80 space-y-2">
                  <li>• Regelmäßige Prophylaxe (Spot‑ons, Kautabletten, Halsbänder)</li>
                  <li>• Wohnung/Auto gründlich saugen, Bettwäsche heiß waschen</li>
                  <li>• FAD beachten: ggf. medikamentöse Therapie nötig</li>
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


