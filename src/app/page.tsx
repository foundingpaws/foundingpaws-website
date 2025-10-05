import Image from "next/image";
import ProductTeasers from "@/components/ProductTeasers";
import CTA from "@/components/CTA";
import FadeIn from "@/components/FadeIn";
import Hero from "@/components/Hero";
import FAQ from "@/components/FAQ";
import Ingredients from "@/components/Ingredients";
import KnowledgeHub from "@/components/KnowledgeHub";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <Hero />

      {/* Trust Strip - Direkt nach Hero für Glaubwürdigkeit */}
      <section className="bg-taupe/30 border-y border-taupe/20 py-8">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center gap-3 group">
              <div className="text-4xl transition-transform group-hover:scale-110">🩺</div>
              <p className="text-xs sm:text-sm font-medium text-green">Entwickelt mit<br />Tierärzten</p>
            </div>
            <div className="flex flex-col items-center gap-3 group">
              <div className="text-4xl transition-transform group-hover:scale-110">🇩🇪</div>
              <p className="text-xs sm:text-sm font-medium text-green">Hergestellt in<br />Deutschland</p>
            </div>
            <div className="flex flex-col items-center gap-3 group">
              <div className="text-4xl transition-transform group-hover:scale-110">🤲</div>
              <p className="text-xs sm:text-sm font-medium text-green">Handgefertigt in<br />Heilbronn</p>
            </div>
            <div className="flex flex-col items-center gap-3 group">
              <div className="text-4xl transition-transform group-hover:scale-110">🌿</div>
              <p className="text-xs sm:text-sm font-medium text-green">100% natürliche<br />Inhaltsstoffe</p>
            </div>
          </div>
        </div>
      </section>

      {/* Produkte DIREKT nach Trust - Conversion-Hook */}
      <ProductTeasers />

      {/* Story NACH Produkten - Emotionale Vertiefung */}
      <section id="story" className="py-20 sm:py-32 bg-gradient-to-b from-cream via-taupe/10 to-cream">
        <div className="container-wide">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="use-retrips text-4xl sm:text-6xl text-green mb-6">
                Von Hundeliebe zur Mission
              </h2>
              <p className="use-fredoka text-lg sm:text-xl text-green/70 max-w-3xl mx-auto leading-relaxed">
                Founding Paws entstand aus der tiefen Verbindung zu unseren Hunden Nala und Jackson.
                Als wir nach Premium-Supplements suchten, die wissenschaftlich fundiert UND
                mit Liebe gemacht sind, fanden wir nichts – also schufen wir es selbst.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <FadeIn delay={0.1}>
              <div className="relative aspect-[4/3] rounded-[28px] overflow-hidden shadow-[0_20px_60px_-20px_rgba(142,127,116,0.4)] border border-taupe/20">
                {/* Platzhalter für Nala */}
                <div className="absolute inset-0 bg-gradient-to-br from-cream via-taupe/30 to-copper/20 flex items-center justify-center text-green/40 text-lg font-medium">
                  [Nala – die Neugierige]
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="relative aspect-[4/3] rounded-[28px] overflow-hidden shadow-[0_20px_60px_-20px_rgba(142,127,116,0.4)] border border-taupe/20">
                {/* Platzhalter für Jackson */}
                <div className="absolute inset-0 bg-gradient-to-br from-taupe/40 via-copper/20 to-cream flex items-center justify-center text-green/40 text-lg font-medium">
                  [Jackson – der Beschützer]
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.3}>
            <div className="max-w-4xl mx-auto bg-white/70 backdrop-blur-sm border border-taupe/20 rounded-[28px] p-8 sm:p-12 shadow-[0_16px_48px_-16px_rgba(142,127,116,0.25)]">
              <h3 className="use-retrips text-3xl sm:text-4xl text-green mb-6 text-center">
                Unsere Philosophie
              </h3>
              <div className="space-y-6 text-green/75 leading-relaxed">
                <p>
                  Jeder Hund verdient ein langes, gesundes Leben. Doch der Markt war voll von 
                  Produkten mit fragwürdigen Inhaltsstoffen, intransparenten Prozessen und 
                  leeren Versprechen.
                </p>
                <p>
                  Deshalb arbeiten wir mit führenden Tierärzten zusammen und fertigen unsere 
                  Supplements in einer kleinen Manufaktur in Heilbronn – mit höchster Sorgfalt, 
                  rückverfolgbaren Zutaten und echter Liebe zum Detail.
                </p>
                <p className="use-fredoka text-lg text-copper font-medium text-center pt-4">
                  Wissenschaft trifft Herz. Das ist Founding Paws.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Values AM ENDE - für interessierte Käufer */}
      <section id="values" className="bg-cream py-16 sm:py-24">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="use-retrips text-4xl sm:text-5xl text-green mb-4">Unsere Werte</h2>
            <div className="w-16 h-1 bg-copper mx-auto rounded-full"></div>
          </div>
          <div className="grid gap-6">
            <FadeIn>
            <div className="bg-white/60 backdrop-blur-sm border border-taupe/20 rounded-[24px] hover-lift p-6 sm:p-8 grid sm:grid-cols-[220px_1fr] items-center shadow-[0_8px_32px_-12px_rgba(142,127,116,0.2)]">
              <div className="flex items-center gap-5">
                <div className="pill w-16 h-16 bg-green flex items-center justify-center text-cream text-xl font-bold transition-transform group-hover:scale-110">01</div>
                <h3 className="use-fredoka text-2xl text-green">Wissenschaft mit Herz</h3>
              </div>
              <p className="mt-4 sm:mt-0 text-base text-green/80">
                Evidenzbasierte Ernährung, mit aufrichtigem Herzblut entwickelt –
                Forschung trifft Fürsorge.
              </p>
            </div>
            </FadeIn>
            <FadeIn delay={0.05}>
            <div className="bg-white/60 backdrop-blur-sm border border-taupe/20 rounded-[24px] hover-lift p-6 sm:p-8 grid sm:grid-cols-[220px_1fr] items-center shadow-[0_8px_32px_-12px_rgba(142,127,116,0.2)]">
              <div className="flex items-center gap-5">
                <div className="pill w-16 h-16 bg-copper text-cream flex items-center justify-center text-xl font-bold transition-transform group-hover:scale-110">02</div>
                <h3 className="use-fredoka text-2xl text-green">Reinheit & Transparenz</h3>
              </div>
              <p className="mt-4 sm:mt-0 text-base text-green/80">
                Ausschließlich saubere, rückverfolgbare Inhaltsstoffe – Vertrauen
                entsteht durch Ehrlichkeit.
              </p>
            </div>
            </FadeIn>
            <FadeIn delay={0.1}>
            <div className="bg-white/60 backdrop-blur-sm border border-taupe/20 rounded-[24px] hover-lift p-6 sm:p-8 grid sm:grid-cols-[220px_1fr] items-center shadow-[0_8px_32px_-12px_rgba(142,127,116,0.2)]">
              <div className="flex items-center gap-5">
                <div className="pill w-16 h-16 bg-taupe text-cream flex items-center justify-center text-xl font-bold transition-transform group-hover:scale-110">03</div>
                <h3 className="use-fredoka text-2xl text-green">Design mit Intention</h3>
              </div>
              <p className="mt-4 sm:mt-0 text-base text-green/80">
                Ruhige Präzision mit moderner Eleganz – das Gleichgewicht aus Wellness
                und Anspruch.
              </p>
            </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <Ingredients />
      <KnowledgeHub />
      <FAQ />
      <CTA />
  {/* Finder Teaser */}
  <section id="finder" className="py-20 sm:py-28 bg-cream">
    <div className="container-wide">
      <div className="text-center mb-10">
        <div className="inline-block pill bg-copper/15 border border-copper/25 px-5 py-2 text-sm font-medium mb-6 text-copper">In 2 Minuten</div>
        <h2 className="use-retrips text-4xl sm:text-5xl text-green mb-4">Finde die richtige Formel</h2>
        <p className="use-fredoka text-lg text-green/70 max-w-2xl mx-auto">Beantworte 3 kurze Fragen – wir empfehlen dir die passende Unterstützung für deinen Hund.</p>
      </div>
      <div className="grid sm:grid-cols-3 gap-6">
        <div className="bg-white/70 backdrop-blur-sm border border-taupe/20 rounded-[24px] p-6 text-center">
          <div className="text-3xl mb-2">🐶</div>
          <div className="use-fredoka text-green">Alter & Größe</div>
        </div>
        <div className="bg-white/70 backdrop-blur-sm border border-taupe/20 rounded-[24px] p-6 text-center">
          <div className="text-3xl mb-2">🎯</div>
          <div className="use-fredoka text-green">Ziel wählen</div>
        </div>
        <div className="bg-white/70 backdrop-blur-sm border border-taupe/20 rounded-[24px] p-6 text-center">
          <div className="text-3xl mb-2">✨</div>
          <div className="use-fredoka text-green">Empfehlung erhalten</div>
        </div>
      </div>
      <div className="text-center mt-10">
        <a href="#products" className="pill bg-copper text-cream px-7 py-3 inline-block font-medium shadow-[0_8px_24px_-8px_rgba(180,106,52,0.6)] hover:opacity-95 hover:scale-105 transition">Jetzt starten</a>
      </div>
    </div>
  </section>
    </div>
  );
}
