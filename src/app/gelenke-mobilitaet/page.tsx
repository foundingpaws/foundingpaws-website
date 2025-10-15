import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export default function GelenkeMobilitaetPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-green text-cream py-20 sm:py-32">
        <div className="container-wide">
          <FadeIn>
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block pill bg-copper/20 backdrop-blur-sm border border-copper/30 px-5 py-2 text-sm font-medium mb-6">
                Gelenke & Mobilität
              </div>
              <h1 className="use-retrips text-4xl sm:text-6xl leading-tight mb-6">
                Beweglichkeit & Schmerzlinderung
              </h1>
              <p className="use-fredoka text-lg sm:text-xl text-cream/90 max-w-3xl mx-auto leading-relaxed mb-8">
                Unterstütze die Gelenkgesundheit deines Hundes für schmerzfreie Spaziergänge bis ins hohe Alter.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/produkte/joint-mobility#waitlist" className="pill bg-copper text-cream px-7 py-3 text-base font-medium shadow-[0_8px_24px_-8px_rgba(180,106,52,0.5)] hover:opacity-95 hover:scale-105 transition-all">Joint & Mobility – Warteliste</Link>
                <Link href="/produkte/green-lipped-mussel#waitlist" className="pill bg-cream/10 border border-cream/30 text-cream px-7 py-3 text-base font-medium backdrop-blur-sm hover:bg-cream/15 transition">Grünlippmuschel – Warteliste</Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-20 sm:py-32 bg-cream">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div>
                <h2 className="use-retrips text-3xl sm:text-4xl text-green mb-6">
                  Wenn dein Hund Gelenkprobleme hat
                </h2>
                <div className="space-y-4 text-green/75">
                  <div className="flex items-start gap-3">
                    <span className="text-copper text-lg">•</span>
                    <span>Steifheit beim Aufstehen oder nach dem Schlafen</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-copper text-lg">•</span>
                    <span>Lahmheit oder Humpeln nach Aktivität</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-copper text-lg">•</span>
                    <span>Verminderte Bewegungsfreude oder Spielunlust</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-copper text-lg">•</span>
                    <span>Schwierigkeiten beim Treppensteigen oder Springen</span>
                  </div>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="bg-white/70 backdrop-blur-sm border border-taupe/20 rounded-[28px] p-8 shadow-[0_16px_48px_-16px_rgba(142,127,116,0.25)]">
                <h3 className="use-retrips text-2xl text-green mb-4">Unsere Lösung</h3>
                <p className="text-green/75 leading-relaxed mb-6">
                  <strong className="text-copper">Joint & Mobility</strong> – Glucosamin, MSM & Grünlippmuschel. <br/> 
                  <strong className="text-copper">Grünlippmuschelpulver</strong> – 100 % Perna canaliculus (GAGs & Omega‑3).
                </p>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-copper">✓</span>
                    <span>Unterstützt Gelenkgesundheit</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-copper">✓</span>
                    <span>Fördert Beweglichkeit</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-copper">✓</span>
                    <span>Mit Tierärzten entwickelt</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Product Focus */}
      <section id="products" className="py-20 sm:py-32 bg-gradient-to-br from-cream via-copper/5 to-taupe/10">
        <div className="container-wide">
          <FadeIn>
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="use-retrips text-3xl sm:text-4xl text-green mb-6">Joint & Mobility</h2>
              <p className="use-fredoka text-lg text-green/70 mb-8">
                Die perfekte Formel für Gelenkgesundheit und Mobilität
              </p>
            </div>
          </FadeIn>

          <div className="max-w-2xl mx-auto">
            <FadeIn delay={0.1}>
              <div className="bg-white/70 backdrop-blur-sm border border-taupe/20 rounded-[28px] p-8 sm:p-12 text-center shadow-[0_20px_60px_-20px_rgba(180,106,52,0.3)]">
                <div className="w-24 h-24 rounded-full bg-copper/10 border border-copper/20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">Joints</span>
                </div>
                
                <h3 className="use-retrips text-3xl text-green mb-4">Joint & Mobility</h3>
                <p className="use-fredoka text-lg text-copper mb-6">Gelenke, Beweglichkeit, entzündungshemmend</p>
                <p className="text-green/70 leading-relaxed mb-8">Glucosamin & MSM – Knorpelstoffwechsel · Grünlippmuschel – GAGs & Omega‑3.</p>

                <div className="border-t border-taupe/20 pt-6 mb-8">
                  <div className="flex items-center justify-center gap-6 text-xs text-green/60">
                    <span>Mit Tierärzten entwickelt</span>
                    <span>🇩🇪 Handgefertigt in Heilbronn</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <div className="pill bg-copper/15 border border-copper/25 text-copper px-4 py-2 text-sm font-medium inline-block">Coming Soon</div>
                  <Link href="/produkte/joint-mobility#waitlist" className="pill bg-copper text-cream px-6 py-3 font-medium shadow-[0_8px_24px_-8px_rgba(180,106,52,0.6)] hover:opacity-95 hover:scale-105 transition-all inline-block">Joint & Mobility – Warteliste</Link>
                  <Link href="/produkte/green-lipped-mussel#waitlist" className="pill bg-cream/10 border border-cream/30 text-green px-6 py-3 font-medium backdrop-blur-sm hover:bg-cream/20 transition inline-block">Grünlippmuschel – Warteliste</Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-32 bg-green text-cream">
        <div className="container-wide text-center">
          <FadeIn>
            <h2 className="use-retrips text-3xl sm:text-4xl mb-6">
              Bereit für den Launch?
            </h2>
            <p className="use-fredoka text-lg text-cream/90 mb-8 max-w-2xl mx-auto">
              Melde dich für unsere Warteliste an und erhalte 10% Rabatt auf deine erste Bestellung.
            </p>
            <Link 
              href="/#waitlist"
              className="pill bg-copper text-cream px-8 py-4 font-medium shadow-[0_8px_24px_-8px_rgba(180,106,52,0.6)] hover:opacity-95 hover:scale-105 transition-all inline-block"
            >
              Jetzt anmelden
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}


