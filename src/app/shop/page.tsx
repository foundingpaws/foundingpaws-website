import Image from "next/image";
import ScrollAnimation from "@/components/ScrollAnimation";
import FadeIn from "@/components/FadeIn";
import NewsletterSignup from "@/components/NewsletterSignup";

const products = [
  {
    name: "Bright Mind",
    description: "Für geistige Klarheit & Herzgesundheit",
    image: "/products/bright-mind/Bright Mind.png",
    benefits: ["Omega-3 Fischöl", "Ginkgo Biloba", "Vitamin E"],
    color: "copper"
  },
  {
    name: "Gentle Calm",
    description: "Für Entspannung & emotionale Balance",
    image: "/products/gentle-calm/ObjectID6a.png",
    benefits: ["L-Theanin", "Kamille", "Baldrian"],
    color: "green"
  },
  {
    name: "Vital Joints",
    description: "Für Beweglichkeit & Schmerzlinderung",
    image: "/products/vital-joints/VitalJoints.png",
    benefits: ["Glucosamin", "Chondroitin", "MSM"],
    color: "taupe"
  }
];

const bundle = {
  name: "Complete Care Bundle",
  description: "Alle 3 Formeln für optimale Gesundheit",
  image: "/mockups/Tote Bag Mockup.png"
};


export default function ShopPage() {
  return (
    <main className="bg-cream text-green">
      {/* Hero Section */}
      <section className="relative wv-section bg-green text-cream overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green via-green to-green/90"></div>
        <div className="absolute inset-0 bg-[url('/products/lifestyle/active-dog-park.svg')] opacity-5"></div>
        
        <div className="container-wide relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <FadeIn>
              <div className="inline-block pill bg-cream/20 border border-cream/30 px-6 py-3 wv-eyebrow wv-spacing-md text-cream backdrop-blur-sm">
                🚀 Coming Soon
              </div>
              <h1 className="wv-h1 wv-spacing-sm" style={{color: 'white'}}>
                Premium-Supplements für deinen Hund
              </h1>
              <div className="w-20 h-1 bg-copper mx-auto rounded-full wv-spacing-md"></div>
              <p className="wv-lead wv-spacing-md max-w-4xl mx-auto" style={{color: 'rgba(255, 255, 255, 0.95)'}}>
                Wissenschaftlich entwickelt, handgefertigt in Deutschland. 
                <strong> Bald verfügbar - sei der Erste!</strong>
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center wv-spacing-xl">
                <a href="#newsletter" className="btn-primary pill text-cream px-10 py-5 text-xl font-bold shadow-[0_20px_40px_-12px_rgba(180,106,52,0.6)] hover:shadow-[0_25px_50px_-12px_rgba(180,106,52,0.7)] transition-all duration-300 hover:scale-105">
                  📧 Newsletter abonnieren
                </a>
                <a href="#products" className="btn-secondary pill text-cream px-10 py-5 text-xl font-medium backdrop-blur-sm hover:bg-cream/20 transition-all duration-300">
                  Produkte entdecken
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Coming Soon Banner */}
      <section className="bg-gradient-to-r from-copper to-copper/90 text-cream py-4">
        <div className="container-wide">
          <div className="text-center">
            <p className="wv-body font-semibold text-lg">
              🔔 <strong>Werde benachrichtigt:</strong> Erhalte 20% Frühbucher-Rabatt + exklusive Updates
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="wv-section bg-gradient-to-b from-cream to-taupe/5">
        <div className="container-wide">
          <ScrollAnimation>
            <div className="text-center wv-spacing-2xl">
              <h2 className="wv-h2 text-green wv-spacing-sm">
                Unsere Premium-Formeln
              </h2>
              <div className="w-20 h-1 bg-copper mx-auto rounded-full wv-spacing-md"></div>
              <p className="wv-lead text-green/70 wv-spacing-md max-w-4xl mx-auto">
                Wissenschaftlich entwickelt, von Tierärzten empfohlen, von Hunden geliebt.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid lg:grid-cols-3 gap-16 wv-spacing-2xl">
            {products.map((product, index) => (
              <ScrollAnimation key={product.name} animation="slide-up" delay={index * 150}>
                <div className="group relative">
                  {/* Premium Card Container */}
                  <div className="relative bg-gradient-to-br from-white via-cream/30 to-white rounded-[2rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] hover:shadow-[0_35px_60px_-12px_rgba(0,0,0,0.2)] transition-all duration-700 overflow-hidden hover:-translate-y-3 border border-green/10">
                    
                    {/* Premium Image Section */}
                    <div className="relative aspect-square bg-gradient-to-br from-green/5 via-cream/20 to-taupe/10 p-12">
                      {/* Decorative Background Pattern */}
                      <div className="absolute inset-0 opacity-5">
                        <div className="absolute top-8 right-8 w-32 h-32 bg-copper/20 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-8 left-8 w-24 h-24 bg-green/20 rounded-full blur-2xl"></div>
                      </div>
                      
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain group-hover:scale-110 transition-transform duration-700 drop-shadow-2xl"
                        unoptimized
                      />
                      
                      {/* Premium Badge */}
                      <div className="absolute top-6 right-6">
                        <div className="bg-gradient-to-r from-copper to-copper/80 text-cream px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                          Coming Soon
                        </div>
                      </div>
                    </div>
                    
                    {/* Premium Content Section */}
                    <div className="p-10">
                      {/* Product Title */}
                      <div className="wv-spacing-md">
                        <h3 className="wv-h2 text-green wv-spacing-sm">
                          {product.name}
                        </h3>
                        <div className="w-12 h-1 bg-gradient-to-r from-copper to-copper/60 rounded-full"></div>
                      </div>
                      
                      {/* Description */}
                      <p className="wv-lead text-green/80 wv-spacing-lg leading-relaxed">
                        {product.description}
                      </p>
                      
                      {/* Status Indicator */}
                      <div className="wv-spacing-lg">
                        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-copper/10 to-copper/5 text-copper px-6 py-3 rounded-2xl text-base font-semibold border border-copper/20">
                          <div className="w-3 h-3 bg-copper rounded-full animate-pulse"></div>
                          Bald verfügbar
                        </div>
                      </div>
                      
                      {/* Premium Benefits Section */}
                      <div className="wv-spacing-lg">
                        <div className="text-base font-semibold text-green/90 wv-spacing-sm">Hauptinhaltsstoffe:</div>
                        <div className="grid grid-cols-1 gap-3">
                          {product.benefits.map((benefit, idx) => (
                            <div key={idx} className="flex items-center gap-3 bg-gradient-to-r from-green/5 to-green/10 text-green px-4 py-3 rounded-xl text-sm font-medium border border-green/10">
                              <div className="w-2 h-2 bg-green rounded-full"></div>
                              {benefit}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Premium CTA */}
                      <div className="wv-spacing-lg">
                        <a 
                          href="#newsletter" 
                          className="btn-primary pill text-cream w-full text-center py-5 font-bold text-xl group-hover:shadow-[0_15px_35px_-12px_rgba(180,106,52,0.6)] transition-all duration-300 hover:scale-[1.02]"
                        >
                          📧 Benachrichtigen lassen
                        </a>
                      </div>
                    </div>
                    
                    {/* Premium Border Glow Effect */}
                    <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-r from-copper/20 via-transparent to-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Bundle Offer */}
      <section className="wv-section bg-green text-cream">
        <div className="container-wide">
          <ScrollAnimation>
            <div className="max-w-6xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-cream/20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="inline-block pill bg-copper/20 border border-copper/30 px-6 py-3 wv-eyebrow wv-spacing-sm text-copper font-bold">
                      💰 Complete Care Bundle
                    </div>
                    <h2 className="wv-h2 wv-spacing-sm" style={{color: 'white'}}>
                      Alle 3 Formeln für optimale Gesundheit
                    </h2>
                    <p className="wv-body wv-spacing-md" style={{color: 'rgba(255, 255, 255, 0.9)'}}>
                      Das komplette Paket für ein langes, gesundes Hundeleben. 
                      Alle drei Formeln perfekt aufeinander abgestimmt.
                    </p>
                    
                    <div className="wv-spacing-md">
                      <div className="inline-flex items-center gap-3 bg-copper/20 text-copper px-6 py-3 rounded-full text-lg font-semibold">
                        <div className="w-3 h-3 bg-copper rounded-full animate-pulse"></div>
                        Bald verfügbar - Exklusiv für Newsletter-Abonnenten
                      </div>
                    </div>
                    
                    <a 
                      href="#newsletter" 
                      className="btn-primary pill text-cream px-10 py-5 text-xl font-bold mt-6 inline-block hover:scale-105 transition-all duration-300"
                    >
                      📧 Bundle-Info erhalten
                    </a>
                  </div>
                  
                  <div className="relative aspect-square max-w-md mx-auto">
                    <Image
                      src={bundle.image}
                      alt={bundle.name}
                      fill
                      className="object-contain drop-shadow-2xl"
                      unoptimized
                    />
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section id="newsletter" className="wv-section bg-gradient-to-b from-cream to-taupe/10">
        <div className="container-wide">
          <ScrollAnimation>
            <div className="max-w-5xl mx-auto">
              <div className="bg-white rounded-3xl shadow-2xl p-12 border border-green/10">
                <div className="text-center wv-spacing-2xl">
                  <h2 className="wv-h2 text-green wv-spacing-sm">
                    Sei der Erste, der erfährt, wenn es losgeht!
                  </h2>
                  <div className="w-20 h-1 bg-copper mx-auto rounded-full wv-spacing-md"></div>
                  <p className="wv-lead text-green/70 wv-spacing-md max-w-3xl mx-auto">
                    Melde dich für unseren Newsletter an und erhalte exklusive Vorteile:
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-8 wv-spacing-xl">
                    <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-copper/5 to-copper/10 border border-copper/20">
                      <div className="text-4xl wv-spacing-sm">🎁</div>
                      <h3 className="wv-h4 text-green wv-spacing-xs">20% Frühbucher-Rabatt</h3>
                      <p className="wv-body text-green/70">Exklusiv für Newsletter-Abonnenten</p>
                    </div>
                    <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-green/5 to-green/10 border border-green/20">
                      <div className="text-4xl wv-spacing-sm">📧</div>
                      <h3 className="wv-h4 text-green wv-spacing-xs">Exklusive Updates</h3>
                      <p className="wv-body text-green/70">Über Produktentwicklung & Launch</p>
                    </div>
                    <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-taupe/5 to-taupe/10 border border-taupe/20">
                      <div className="text-4xl wv-spacing-sm">🐕</div>
                      <h3 className="wv-h4 text-green wv-spacing-xs">Hundegesundheit-Tipps</h3>
                      <p className="wv-body text-green/70">Wertvolle Ratschläge von Experten</p>
                    </div>
                  </div>

                  <div className="wv-spacing-xl">
                    <NewsletterSignup 
                      variant="minimal" 
                      className="max-w-lg mx-auto"
                    />
                  </div>
                  
                  <div className="wv-spacing-sm">
                    <p className="wv-body text-green/60">
                      🔔 Erhalte Benachrichtigungen • 🎁 Exklusive Angebote • 🇩🇪 Made in Germany
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </main>
  );
}
