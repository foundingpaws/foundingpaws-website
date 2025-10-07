import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import Transform3D from "@/components/Transform3D";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-cream via-taupe/5 to-green/5 flex items-center justify-center">
      <div className="container-wide py-16">
        <div className="text-center max-w-4xl mx-auto">
          <FadeIn>
            <Transform3D hoverEffect="lift" className="inline-block mb-8">
              <div className="relative">
                {/* 404 Number with Dog Silhouette */}
                <div className="text-[12rem] sm:text-[16rem] font-bold text-green/20 select-none">
                  404
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src="/NalaTransparentBeach.png"
                    alt="Nala - 404"
                    width={200}
                    height={200}
                    className="opacity-60"
                  />
                </div>
              </div>
            </Transform3D>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="wv-h1 text-green mb-6">
              Oops! Diese Seite ist verschwunden
            </h1>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="wv-lead text-green/70 mb-8 max-w-2xl mx-auto">
              Wie ein Hund, der sich im Park versteckt hat – diese Seite ist nicht mehr da, wo sie sein sollte. 
              Aber keine Sorge, wir helfen dir, den richtigen Weg zu finden!
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                href="/"
                className="btn-primary pill text-cream px-8 py-4 text-base font-medium hover-glow"
              >
                Zur Startseite →
              </Link>
              <Link 
                href="#products"
                className="btn-secondary pill text-cream px-8 py-4 text-base font-medium"
              >
                Unsere Produkte
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.5}>
            <div className="bg-white/60 backdrop-blur-sm border border-taupe/20 rounded-3xl p-8 max-w-2xl mx-auto">
              <h2 className="wv-h3 text-green mb-4">
                Was du stattdessen tun kannst:
              </h2>
              <div className="grid gap-4 text-left">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-copper/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-copper text-sm">🐕</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-green mb-1">Unsere Produkte entdecken</h3>
                    <p className="text-green/70 text-sm">Erfahre mehr über unsere Premium-Supplements für Hunde</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-copper/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-copper text-sm">🔍</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-green mb-1">Bedarfsfinder nutzen</h3>
                    <p className="text-green/70 text-sm">Finde das perfekte Supplement für deinen Hund</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-copper/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-copper text-sm">📞</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-green mb-1">Kontakt aufnehmen</h3>
                    <p className="text-green/70 text-sm">Wir helfen dir gerne bei deinen Fragen</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.6}>
            <div className="mt-12 text-center">
              <p className="text-green/60 text-sm">
                Fehler 404 • Founding Paws • Wissenschaft mit Herz
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </main>
  );
}
