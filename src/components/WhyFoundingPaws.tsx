import FadeIn from "@/components/FadeIn";
import ScrollAnimation from "@/components/ScrollAnimation";

export default function WhyFoundingPaws({ className = "" }: { className?: string }) {
  return (
    <section className={`bg-cream pt-2 pb-16 ${className}`} aria-labelledby="why-title">
      <div className="container-wide">
        <ScrollAnimation animation="fade-in" className="text-center mb-8 lg:mb-12">
          <div className="inline-block pill bg-copper/15 border border-copper/25 px-5 py-2 wv-eyebrow mb-4 lg:mb-6 text-copper">Unsere Mission</div>
          <h2 id="why-title" className="wv-h2 text-green mb-3 lg:mb-4">Wissenschaft mit Herz. Transparent in jedem Schritt.</h2>
          <p className="wv-subhead text-green/70 max-w-3xl mx-auto">
            Wir entwickeln gezielte Formeln gemeinsam mit Tierärzten, verwenden natürliche
            Rohstoffe und machen die Anwendung so einfach wie möglich.
          </p>
        </ScrollAnimation>

        {/* Mobile: 1 Spalte, Desktop: 3 Spalten */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <ScrollAnimation animation="slide-up" delay={0}>
            <article className="bg-white/80 border border-green/10 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
              <div className="wv-eyebrow text-copper wv-spacing-xs">Wirkprinzip</div>
              <h3 className="wv-h3 text-green wv-spacing-xs">Gezielte Unterstützung</h3>
              <p className="wv-body text-green/75 wv-spacing-md flex-grow">
                Jede Formel hat ein klares Ziel – z. B. Kognition & Herz, Stress & Angst oder Gelenke –
                auf Basis aktueller Evidenz.
              </p>
              <a href="#knowledge" className="bg-copper text-cream px-6 py-3 rounded-full font-medium hover:bg-copper/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm inline-block w-fit">Weiterlesen →</a>
            </article>
          </ScrollAnimation>

          <ScrollAnimation animation="slide-up" delay={100}>
            <article className="bg-white/80 border border-green/10 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
              <div className="wv-eyebrow text-copper wv-spacing-xs">Inhaltsstoffe</div>
              <h3 className="wv-h3 text-green wv-spacing-xs">Rein, transparent</h3>
              <p className="wv-body text-green/75 wv-spacing-md flex-grow">
                Nur ausgewählte, natürliche Rohstoffe – in kleinen Chargen verarbeitet.
              </p>
              <a href="#ingredients" className="bg-green text-cream px-6 py-3 rounded-full font-medium hover:bg-green/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm inline-block w-fit">Transparenz ansehen</a>
            </article>
          </ScrollAnimation>

          <ScrollAnimation animation="slide-up" delay={200}>
            <article className="bg-white/80 border border-green/10 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
              <div className="wv-eyebrow text-copper wv-spacing-xs">Anwendung</div>
              <h3 className="wv-h3 text-green wv-spacing-xs">Alltagstauglich</h3>
              <p className="wv-body text-green/75 wv-spacing-md flex-grow">
                Klare Dosierung, einfache Integration in die Fütterung und verständliche Anleitungen.
              </p>
              <a href="#finder-mvp" className="bg-copper text-cream px-6 py-3 rounded-full font-medium hover:bg-copper/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm inline-block w-fit">Finder starten</a>
            </article>
          </ScrollAnimation>
        </div>

        {/* Mobile: Vertikale Anordnung, Desktop: Horizontal */}
        <div className="text-center mt-8 lg:mt-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#products" className="bg-copper text-cream px-8 py-4 rounded-full font-medium hover:bg-copper/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm w-full sm:w-auto">Produkte ansehen</a>
            <a href="#waitlist" className="bg-green text-cream px-8 py-4 rounded-full font-medium hover:bg-green/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm w-full sm:w-auto">Warteliste sichern</a>
          </div>
        </div>
      </div>
    </section>
  );
}


