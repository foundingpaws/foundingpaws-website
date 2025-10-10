import Image from "next/image";
import ScrollAnimation from "@/components/ScrollAnimation";
import FadeIn from "@/components/FadeIn";
import IconHeart from "@/components/icons/IconHeart";
import IconTransparency from "@/components/icons/IconTransparency";
import IconLocal from "@/components/icons/IconLocal";
import IconImpact from "@/components/icons/IconImpact";

export default function CharitySection() {
  return (
    <section className="wv-section bg-gradient-to-br from-green/5 to-copper/5">
      <div className="container-wide">
        <ScrollAnimation>
          <div className="text-center wv-spacing-2xl">
            <div className="inline-flex items-center gap-3 mb-6">
              <IconHeart className="w-8 h-8 text-copper" />
              <h2 className="wv-h2 text-green">Jeder Kauf zählt</h2>
            </div>
            <div className="w-16 h-1 bg-copper mx-auto rounded-full wv-spacing-md"></div>
            <p className="wv-lead text-green/70 wv-spacing-md max-w-3xl mx-auto">
              Sobald wir starten, spenden wir <strong className="text-copper">1% unseres Umsatzes</strong> an Tierheime in Deutschland. 
              <strong className="text-copper"> Jeder Kauf</strong> hilft Hunden in Not.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-3 gap-8">
          <ScrollAnimation animation="fade-in" delay={100}>
            <div className="text-center p-6 bg-white/50 rounded-2xl border border-green/10">
              <div className="w-16 h-16 bg-copper/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <IconTransparency className="w-8 h-8 text-copper" />
              </div>
              <h3 className="wv-h4 text-green wv-spacing-xs">Transparente Spenden</h3>
              <p className="wv-body text-green/70">
                Sobald wir starten, veröffentlichen wir jeden Monat, welche Tierheime wir unterstützt haben.
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-in" delay={200}>
            <div className="text-center p-6 bg-white/50 rounded-2xl border border-green/10">
              <div className="w-16 h-16 bg-copper/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <IconLocal className="w-8 h-8 text-copper" />
              </div>
              <h3 className="wv-h4 text-green wv-spacing-xs">Lokale Unterstützung</h3>
              <p className="wv-body text-green/70">
                Wir konzentrieren uns auf Tierheime in unserer Region und deutschlandweit.
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-in" delay={300}>
            <div className="text-center p-6 bg-white/50 rounded-2xl border border-green/10">
              <div className="w-16 h-16 bg-copper/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <IconImpact className="w-8 h-8 text-copper" />
              </div>
              <h3 className="wv-h4 text-green wv-spacing-xs">Messbare Wirkung</h3>
              <p className="wv-body text-green/70">
                Jeder Kauf wird direkt an Tierheime weitergegeben. Wir starten mit dem ersten Verkauf!
              </p>
            </div>
          </ScrollAnimation>
        </div>

        <ScrollAnimation>
          <div className="text-center wv-spacing-xl">
            <div className="bg-gradient-to-r from-copper/10 to-green/10 rounded-2xl p-8 border border-copper/20">
              <h3 className="wv-h3 text-green wv-spacing-sm">Gemeinsam mehr erreichen</h3>
              <p className="wv-body text-green/70 wv-spacing-md max-w-2xl mx-auto">
                Sobald wir starten, unterstützt jeder Kauf nicht nur die Gesundheit deines Vierbeiners, 
                sondern hilft auch anderen Hunden in Not. <strong className="text-copper">Wissenschaft trifft Herz</strong> – 
                auch über unsere Produkte hinaus.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#products" className="bg-copper text-cream px-8 py-4 rounded-full font-medium hover:bg-copper/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-base">
                  Jetzt kaufen & helfen →
                </a>
                <a href="/team" className="bg-green text-cream px-8 py-4 rounded-full font-medium hover:bg-green/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-base">
                  Mehr über unsere Mission
                </a>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
