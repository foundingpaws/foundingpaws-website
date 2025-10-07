import Image from "next/image";
import FadeIn from "@/components/FadeIn";

export default function Hero() {
  return (
    <section className="relative bg-green text-cream overflow-hidden hero-depth wv-section">
      <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
        <FadeIn>
          <div className="max-w-2xl">
            <h1 className="wv-h1" style={{color: 'white'}}>
              Premium-Supplements für ein langes, gesundes Hundeleben
            </h1>
            <p className="wv-spacing-lg wv-lead" style={{color: 'rgba(255, 255, 255, 0.9)'}}>
              Evidenzbasiert entwickelt, handgefertigt in Heilbronn – für spürbare Wirkung und Vertrauen.
            </p>
            <div className="wv-spacing-xl flex flex-col sm:flex-row gap-4">
              <a className="btn-primary pill text-cream px-8 py-4 text-base font-medium" href="#products">
                Produkte ansehen →
              </a>
              <a className="btn-secondary pill text-cream px-8 py-4 text-base font-medium" href="/bedarfsfinder">
                Bedarfsfinder (2 Min)
              </a>
            </div>
          </div>
        </FadeIn>
        <div className="relative aspect-[4/3] sm:aspect-[5/4] rounded-[28px] overflow-hidden bg-green">
          {/* Bright Mind Produktbild */}
          <Image src="/mockups/PSD file.png" alt="Bright Mind Produktbild - Gründungspaws Supplements" fill className="object-contain img-depth" style={{objectPosition:"center 45%"}} priority sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px" fetchPriority="high" placeholder="empty" />
        </div>
      </div>
    </section>
  );
}


