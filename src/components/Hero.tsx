import Image from "next/image";
import FadeIn from "@/components/FadeIn";

export default function Hero() {
  return (
    <section className="relative bg-green text-cream overflow-hidden hero-depth wv-section">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-cream rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-copper rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-cream rounded-full blur-xl"></div>
      </div>
      
      <div className="container-wide relative z-10">
        {/* Mobile Layout - Optimiert für weniger Stapelung */}
        <div className="lg:hidden">
          <FadeIn>
            <div className="text-center mb-8">
              <h1 className="wv-h1 mb-6" style={{color: 'white'}}>
                Premium-Supplements für ein langes, gesundes Hundeleben
              </h1>
              <p className="wv-lead mb-8" style={{color: 'rgba(255, 255, 255, 0.9)'}}>
                Evidenzbasiert entwickelt, handgefertigt in Heilbronn – für spürbare Wirkung und Vertrauen.
              </p>
            </div>
          </FadeIn>
          
          {/* Mobile Product Image - Diagonale Positionierung */}
          <div className="relative mb-8">
            <div className="relative aspect-[4/3] rounded-[28px] overflow-hidden bg-green/20 transform rotate-2 shadow-2xl">
              <Image 
                src="/mockups/PSD file.png" 
                alt="Bright Mind Produktbild - Gründungspaws Supplements" 
                fill 
                className="object-contain img-depth" 
                style={{objectPosition:"center 45%"}} 
                priority 
                sizes="100vw" 
                fetchPriority="high" 
                placeholder="empty" 
              />
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-copper rounded-full opacity-80 animate-pulse"></div>
            <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-cream rounded-full opacity-60 animate-bounce"></div>
          </div>
          
          {/* Mobile CTAs - Zentriert */}
          <FadeIn delay={200}>
            <div className="flex flex-col gap-4 max-w-sm mx-auto">
              <a className="btn-primary pill text-cream px-8 py-4 text-base font-medium shadow-lg" href="#products">
                Produkte ansehen →
              </a>
              <a className="btn-secondary pill text-cream px-8 py-4 text-base font-medium" href="/bedarfsfinder">
                Bedarfsfinder (2 Min)
              </a>
            </div>
          </FadeIn>
        </div>

        {/* Desktop Layout - Diagonale Anordnung */}
        <div className="hidden lg:grid lg:grid-cols-12 lg:gap-12 lg:items-center">
          <FadeIn>
            <div className="lg:col-span-5 lg:pr-8">
              <h1 className="wv-h1 mb-6" style={{color: 'white'}}>
                Premium-Supplements für ein langes, gesundes Hundeleben
              </h1>
              <p className="wv-lead mb-8" style={{color: 'rgba(255, 255, 255, 0.9)'}}>
                Evidenzbasiert entwickelt, handgefertigt in Heilbronn – für spürbare Wirkung und Vertrauen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a className="btn-primary pill text-cream px-8 py-4 text-base font-medium shadow-lg" href="#products">
                  Produkte ansehen →
                </a>
                <a className="btn-secondary pill text-cream px-8 py-4 text-base font-medium" href="/bedarfsfinder">
                  Bedarfsfinder (2 Min)
                </a>
              </div>
            </div>
          </FadeIn>
          
          {/* Desktop Product Image - Diagonale Positionierung */}
          <div className="lg:col-span-7 relative">
            <div className="relative aspect-[5/4] rounded-[32px] overflow-hidden bg-green/20 transform -rotate-3 shadow-2xl">
              <Image 
                src="/mockups/PSD file.png" 
                alt="Bright Mind Produktbild - Gründungspaws Supplements" 
                fill 
                className="object-contain img-depth" 
                style={{objectPosition:"center 45%"}} 
                priority 
                sizes="(max-width: 1024px) 50vw, 600px" 
                fetchPriority="high" 
                placeholder="empty" 
              />
            </div>
            {/* Floating Elements für Desktop */}
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-copper rounded-full opacity-80 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-cream rounded-full opacity-60 animate-bounce"></div>
            <div className="absolute top-1/3 -left-8 w-6 h-6 bg-copper/60 rounded-full opacity-70 animate-ping"></div>
          </div>
        </div>
      </div>
    </section>
  );
}


