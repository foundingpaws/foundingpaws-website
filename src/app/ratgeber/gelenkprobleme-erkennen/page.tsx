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


