import Image from "next/image";
import FadeIn from "@/components/FadeIn";

export default function Hero() {
  return (
    <section className="hero-section relative bg-green text-cream overflow-hidden hero-depth wv-section safe-area-all">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-cream rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-copper rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-cream rounded-full blur-xl"></div>
      </div>
      
      <div className="container-wide relative z-10 h-full flex flex-col justify-center">
        {/* Mobile Layout - Optimiert für bessere mobile Darstellung */}
        <div className="lg:hidden hero-content">
          <FadeIn>
            <div className="text-center mb-6 sm:mb-8">
              <h1 className="hero-title wv-h1 mb-4 sm:mb-6" style={{color: 'white'}}>
                Premium-Supplements für ein langes, gesundes Hundeleben
              </h1>
              <p className="hero-subtitle wv-lead mb-6 sm:mb-8 px-4" style={{color: 'rgba(255, 255, 255, 0.9)'}}>
                Evidenzbasiert entwickelt, handgefertigt in Heilbronn – für spürbare Wirkung und Vertrauen.
              </p>
            </div>
          </FadeIn>
          
          {/* Mobile Product Image - Verbesserte Darstellung */}
          <div className="relative mb-6 sm:mb-8 hero-image">
            <div className="relative aspect-[4/3] sm:aspect-[3/2] rounded-[20px] sm:rounded-[28px] overflow-hidden bg-green/20 transform rotate-1 sm:rotate-2 shadow-2xl mx-4 sm:mx-0">
              <Image 
                src="/mockups/PSD file.png" 
                alt="Bright Mind Produktbild - Gründungspaws Supplements" 
                fill 
                className="object-contain img-depth ios-fix" 
                style={{objectPosition:"center 45%"}} 
                priority 
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 50vw" 
                fetchPriority="high" 
                placeholder="empty" 
              />
            </div>
            {/* Floating Elements - Mobile optimiert */}
            <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 bg-copper rounded-full opacity-80 animate-pulse"></div>
            <div className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 w-4 h-4 sm:w-6 sm:h-6 bg-cream rounded-full opacity-60 animate-bounce"></div>
          </div>
          
          {/* Mobile CTAs - Verbesserte Touch-Targets */}
          <FadeIn delay={200}>
            <div className="hero-cta flex flex-col gap-3 sm:gap-4 max-w-sm mx-auto px-4 sm:px-0">
              <a 
                className="btn-primary pill text-cream px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium shadow-lg touch-padding" 
                href="#products"
                style={{
                  WebkitTapHighlightColor: 'transparent',
                  WebkitTouchCallout: 'none',
                  WebkitUserSelect: 'none',
                  userSelect: 'none'
                }}
              >
                Produkte ansehen →
              </a>
              <a 
                className="btn-secondary pill text-cream px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium touch-padding" 
                href="/bedarfsfinder"
                style={{
                  WebkitTapHighlightColor: 'transparent',
                  WebkitTouchCallout: 'none',
                  WebkitUserSelect: 'none',
                  userSelect: 'none'
                }}
              >
                Bedarfsfinder (2 Min)
              </a>
            </div>
          </FadeIn>
        </div>

        {/* Desktop Layout - Verbesserte Balance */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          <FadeIn>
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="wv-h1" style={{color: 'white'}}>
                  Premium-Supplements für ein langes, gesundes Hundeleben
                </h1>
                <p className="wv-lead" style={{color: 'rgba(255, 255, 255, 0.9)'}}>
                  Evidenzbasiert entwickelt, handgefertigt in Heilbronn – für spürbare Wirkung und Vertrauen.
                </p>
              </div>
              
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
          
          <FadeIn delay={200}>
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-[28px] overflow-hidden bg-green/20 transform rotate-2 shadow-2xl">
                <Image 
                  src="/mockups/PSD file.png" 
                  alt="Bright Mind Produktbild - Gründungspaws Supplements" 
                  fill 
                  className="object-contain img-depth" 
                  style={{objectPosition:"center 45%"}} 
                  priority 
                  sizes="50vw" 
                  fetchPriority="high" 
                  placeholder="empty" 
                />
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-copper rounded-full opacity-80 animate-pulse"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-cream rounded-full opacity-60 animate-bounce"></div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block">
        <div className="w-6 h-10 border-2 border-cream/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cream/60 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
