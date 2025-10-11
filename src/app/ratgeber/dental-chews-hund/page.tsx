import ScrollAnimation from "@/components/ScrollAnimation";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";

export const metadata = {
  title: 'Dental‑Chews: Mehr als nur Kauen – Evidenz zur Zahnpflege | Founding Paws',
  description: 'Kontrollierte Studie: 12–17% weniger Plaque/Zahnstein; 20–35% weniger Calculus – einfache Ergänzung zur Zahnhygiene.',
  alternates: { canonical: '/ratgeber/dental-chews-hund' },
  openGraph: { title: 'Dental‑Chews beim Hund', description: 'Mechanische Reinigung mit belegtem Effekt.', type: 'article' }
};

export default function DentalChewsHundPage() {
  return (
    <main className="bg-cream text-green">
      <section className="wv-section bg-green text-cream">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <div className="inline-block pill bg-cream/20 border border-cream/30 px-6 py-3 wv-eyebrow" style={{color:'white'}}>Zähne & Mundgesundheit</div>
              <h1 className="wv-h1 wv-spacing-sm" style={{color:'white'}}>Dental‑Chews: mehr als nur Kauen</h1>
              <div className="w-20 h-1 bg-copper mx-auto rounded-full wv-spacing-md"></div>
              <p className="wv-lead wv-spacing-md max-w-3xl mx-auto" style={{color:'rgba(255,255,255,0.95)'}}>Weniger Plaque/Zahnstein, besserer Atem – als Ergänzung zum Zähneputzen und jährlichen Checks.</p>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="wv-section bg-cream">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <ScrollAnimation>
              <div className="prose prose-lg max-w-none">
                <h2 className="wv-h2 text-green wv-spacing-lg">Tipps zur Zahnpflege</h2>
                <ul className="wv-body text-green/80 space-y-2">
                  <li>• Kaustreifen in den Kalorienbedarf einrechnen</li>
                  <li>• Mit regelmäßigem Zähneputzen kombinieren</li>
                  <li>• Jährliche Gebisskontrolle beim Tierarzt</li>
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


