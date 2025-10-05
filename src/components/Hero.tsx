import Image from "next/image";
import FadeIn from "@/components/FadeIn";

export default function Hero() {
  return (
    <section className="relative bg-green text-cream overflow-hidden hero-depth">
      <div className="container-wide grid sm:grid-cols-2 gap-8 items-center py-20 sm:py-28">
        <FadeIn>
          <div className="max-w-xl">
            <h1 className="use-retrips text-4xl sm:text-6xl leading-tight">
              Premium-Supplements für ein langes, gesundes Hundeleben
            </h1>
            <p className="mt-4 text-cream/90 text-lg">
              Wissenschaftlich entwickelt, liebevoll gestaltet – für Klarheit,
              Vertrauen und spürbare Wirkung.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a className="pill bg-copper text-cream px-7 py-3 text-base font-medium shadow-[0_8px_24px_-8px_rgba(180,106,52,0.5)] hover:opacity-95 hover:scale-105 transition-all" href="#products">
                Produkte ansehen →
              </a>
              <a className="pill bg-cream/10 border border-cream/30 text-cream px-7 py-3 text-base font-medium backdrop-blur-sm hover:bg-cream/15 transition" href="#finder">
                Bedarfsfinder (2 Min)
              </a>
            </div>
          </div>
        </FadeIn>
        <div className="relative aspect-[4/3] sm:aspect-[5/4] rounded-[28px] overflow-hidden bg-green">
          {/* Transparent cutout of Nala */}
          <Image src="/NalaTransparentBeach.png?v=2" alt="Nala freigestellt" fill className="object-contain img-depth" style={{objectPosition:"center 45%"}} priority />
        </div>
      </div>
    </section>
  );
}


