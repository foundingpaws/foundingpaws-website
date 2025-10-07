import FadeIn from "@/components/FadeIn";
import ScrollAnimation from "@/components/ScrollAnimation";
import IconStethoscope from "@/components/icons/IconStethoscope";
import IconShield from "@/components/icons/IconShield";
import IconLeaf from "@/components/icons/IconLeaf";

export default function WhyFoundingPaws() {
  return (
    <section className="wv-section bg-cream" aria-labelledby="why-title">
      <div className="container-wide">
        <ScrollAnimation animation="fade-in" className="text-center mb-12">
          <div className="inline-block pill bg-copper/15 border border-copper/25 px-5 py-2 wv-eyebrow mb-6 text-copper">Unsere Haltung</div>
          <h2 id="why-title" className="wv-h2 text-green mb-4">Wissenschaft mit Herz. Transparent in jedem Schritt.</h2>
          <p className="wv-subhead text-green/70 max-w-3xl mx-auto">
            Wir entwickeln gezielte Formeln gemeinsam mit Tierärzt:innen, verwenden natürliche
            Rohstoffe und machen die Anwendung so einfach wie möglich.
          </p>
        </ScrollAnimation>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ScrollAnimation animation="slide-up" delay={0}>
            <article className="wv-card-premium hover-lift-premium p-8">
              <div className="wv-eyebrow text-copper wv-spacing-xs">Wirkprinzip</div>
              <h3 className="wv-h3 text-green wv-spacing-xs">Gezielte Unterstützung</h3>
              <p className="wv-body text-green/75 wv-spacing-md">
                Jede Formel hat ein klares Ziel – z. B. Kognition & Herz, Stress & Angst oder Gelenke –
                auf Basis aktueller Evidenz.
              </p>
              <a href="#knowledge" className="btn-outline pill px-4 py-2 inline-block wv-spacing-top-md text-sm">Weiterlesen →</a>
            </article>
          </ScrollAnimation>

          <ScrollAnimation animation="slide-up" delay={100}>
            <article className="wv-card-feature hover-lift-feature p-8">
              <div className="wv-eyebrow text-copper wv-spacing-xs">Inhaltsstoffe</div>
              <h3 className="wv-h3 text-green wv-spacing-xs">Rein, transparent</h3>
              <p className="wv-body text-green/75 wv-spacing-md">
                Nur ausgewählte, natürliche Rohstoffe – in kleinen Chargen verarbeitet.
              </p>
              <a href="#ingredients" className="btn-ghost pill px-4 py-2 inline-block wv-spacing-top-md text-sm">Transparenz ansehen</a>
            </article>
          </ScrollAnimation>

          <ScrollAnimation animation="slide-up" delay={200}>
            <article className="wv-card-minimal hover-lift-minimal p-8">
              <div className="wv-eyebrow text-copper wv-spacing-xs">Anwendung</div>
              <h3 className="wv-h3 text-green wv-spacing-xs">Alltagstauglich</h3>
              <p className="wv-body text-green/75 wv-spacing-md">
                Klare Dosierung, einfache Integration in die Fütterung und verständliche Anleitungen.
              </p>
              <a href="#finder-mvp" className="btn-primary pill text-cream px-4 py-2 inline-block wv-spacing-top-md text-sm">Finder starten</a>
            </article>
          </ScrollAnimation>
        </div>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
          <div className="flex flex-col items-center gap-2 text-green/85">
            <IconStethoscope className="w-6 h-6" />
            <span className="text-sm">Mit Tierärzt:innen entwickelt</span>
          </div>
          <div className="flex flex-col items-center gap-2 text-green/85">
            <IconShield className="w-6 h-6" />
            <span className="text-sm">Manufaktur Heilbronn</span>
          </div>
          <div className="flex flex-col items-center gap-2 text-green/85">
            <IconLeaf className="w-6 h-6" />
            <span className="text-sm">100% natürliche Inhaltsstoffe</span>
          </div>
        </div>

        <div className="text-center mt-10">
          <a href="#products" className="pill bg-copper text-cream px-6 py-3 text-sm font-medium inline-block mr-3">Produkte ansehen</a>
          <a href="#waitlist" className="pill bg-cream/10 border border-green/20 text-green px-6 py-3 text-sm font-medium inline-block">Warteliste sichern</a>
        </div>
      </div>
    </section>
  );
}


