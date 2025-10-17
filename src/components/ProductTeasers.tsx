"use client";

import Image from "next/image";
import OptimizedImage from "./OptimizedImage";
import { useState, useEffect } from "react";
import ScrollAnimation from "@/components/ScrollAnimation";
import IconPaw from "@/components/icons/IconPaw";
import Transform3D from "@/components/Transform3D";
import GlassmorphismCard from "@/components/GlassmorphismCard";
import SkeletonLoader from "@/components/SkeletonLoader";
// ProductConfigurator entfernt (noch keine Konfiguration verfügbar)

const products = [
  {
    key: "shiny-coat",
    title: "Shiny Coat",
    subtitle: "Fellglanz & Hautgesundheit",
    description: "Omega‑3, Zink & Biotin – für glänzendes Fell und robuste Hautbarriere.",
    category: "Haut & Fell",
    accent: "green",
    comingSoon: true,
    productImage: "/products/Shiny Coat.png",
  },
  {
    key: "sensitive-skin",
    title: "Sensitive Skin",
    subtitle: "Hautbarriere & Entzündungsbalance",
    description: "GLA‑reiche Öle (Hanf/Nachtkerze) + Vitamin E & Kurkuma – sanft zur Haut.",
    category: "Haut & Fell",
    accent: "green",
    comingSoon: true,
    productImage: "/products/Sensitive Skin.png",
  },
  {
    key: "joint-mobility",
    title: "Joint & Mobility",
    subtitle: "Gelenke & Beweglichkeit",
    description: "Glucosamin, MSM & Grünlippmuschel – spürbar mehr Gelenkkomfort.",
    category: "Gelenke & Mobilität",
    accent: "taupe",
    comingSoon: true,
    productImage: "/products/Joint & Mobility.png",
  },
  {
    key: "skin-vital-omega",
    title: "5‑Omega – Skin & Vital",
    subtitle: "Haut, Fell, Herz & Immunsystem",
    description: "Lachs‑, Lein‑, Hanf‑, Borretsch‑ & Nachtkerzenöl mit Vitamin E.",
    category: "Haut & Vitalität",
    accent: "copper",
    comingSoon: true,
    productImage: "/products/5-Omega-Oelflasche.png",
  },
  {
    key: "green-lipped-mussel",
    title: "Grünlippmuschelpulver",
    subtitle: "Natürlich für Gelenke",
    description: "100 % Perna canaliculus – GAGs & Omega‑3, fein vermahlen.",
    category: "Gelenke & Mobilität",
    accent: "taupe",
    comingSoon: true,
    productImage: "/products/Gruenlippmuschelpulver.png",
  },
];

export default function ProductTeasers() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showSkeletons, setShowSkeletons] = useState(true);
  // Konfigurator-UI deaktiviert

  useEffect(() => {
    setMounted(true);
    // Simulate loading time for skeleton screens
    const timer = setTimeout(() => {
      setShowSkeletons(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleWaitlist = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setSubmitted(true);
        setEmail("");
        setTimeout(() => setSubmitted(false), 3000);
      }
    } catch (error) {
      console.error('Waitlist submission error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <section id="products" className="wv-section-lg bg-cream">
      <div className="container-wide">
        {/* Header - Verbesserte Hierarchie */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-block pill bg-copper/15 border border-copper/25 px-5 py-2 wv-eyebrow mb-4 text-copper">
            Bald verfügbar
          </div>
          <h2 className="wv-h2 text-green mb-4">
            Unsere neuen Formeln
          </h2>
          <div className="w-16 h-1 bg-copper mx-auto rounded-full mb-6"></div>
          <p className="wv-lead text-green/70 max-w-2xl mx-auto">
            Fünf neue Formeln – wissenschaftlich entwickelt, tierärztlich begleitet und in Heilbronn handgefertigt.
          </p>
        </div>

        {/* Product Grid - Verbesserte Balance */}
        <div className="grid gap-6 lg:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-12 lg:mb-16">
          {showSkeletons ? (
            // Skeleton Loaders
            Array.from({ length: 3 }).map((_, idx) => (
              <SkeletonLoader
                key={`skeleton-${idx}`}
                variant="product"
                height="400px"
                className="w-full"
              />
            ))
          ) : (
            products.map((product, idx) => (
              <ScrollAnimation 
                key={product.key}
                animation="slide-up"
                delay={idx * 100}
                className="group relative"
              >
                <a href={`/produkte/${product.key}`} className="block">
                  <div className="wv-card-feature hover-lift-feature p-6 lg:p-8 shadow-floating transition-all duration-300 hover:shadow-xl cursor-pointer h-full flex flex-col">
                  {/* Coming Soon Badge */}
                  <div className="absolute top-4 right-4 pill bg-copper border border-copper text-cream text-xs px-3 py-1 font-medium shadow-sm">
                    Coming Soon
                  </div>

                  {/* Category Badge */}
                  <div className="pill bg-green/5 border border-green/15 text-green wv-caption px-3 py-1 font-medium mb-4 inline-block">
                    {product.category}
                  </div>

                  {/* Product Image - Größer und prominenter */}
                  <div className="w-40 h-40 mx-auto rounded-2xl overflow-hidden bg-gradient-to-br from-cream to-taupe/20 border border-taupe/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-premium">
                    <OptimizedImage 
                      src={product.productImage} 
                      alt={`${product.title} Produktbild`}
                      width={160}
                      height={160}
                      className="w-full h-full object-contain"
                      placeholder="blur"
                      quality={90}
                    />
                  </div>

                  {/* Content - Bessere Hierarchie */}
                  <div className="flex-1 flex flex-col">
                    <h3 className="wv-h3 text-green mb-2">
                      {product.title}
                    </h3>
                    <p className="wv-subhead text-copper mb-3">
                      {product.subtitle}
                    </p>
                    <p className="wv-body text-green/75 mb-4 flex-1">
                      {product.description}
                    </p>
                    <ul className="text-green/70 text-sm mb-5 sm:mb-6 list-disc pl-5">
                      {product.key === 'shiny-coat' && (
                        <>
                          <li>Omega‑3, Zink & Biotin für Fell & Haut</li>
                          <li>Schonend getrocknet – hohe Akzeptanz</li>
                        </>
                      )}
                      {product.key === 'sensitive-skin' && (
                        <>
                          <li>GLA‑Öle (Hanf/Nachtkerze) für Barriere</li>
                          <li>Vitamin E & Kurkuma – antioxidativ</li>
                        </>
                      )}
                      {product.key === 'joint-mobility' && (
                        <>
                          <li>Glucosamin, MSM & Grünlippmuschel</li>
                          <li>Für Gelenkkomfort & Beweglichkeit</li>
                        </>
                      )}
                      {product.key === 'skin-vital-omega' && (
                        <>
                          <li>5‑Öle‑Synergie: EPA/DHA + ALA + GLA</li>
                          <li>Mit Vitamin E – kalt gemischt</li>
                        </>
                      )}
                      {product.key === 'green-lipped-mussel' && (
                        <>
                          <li>100 % Perna canaliculus – GAGs & Omega‑3</li>
                          <li>Fein vermahlen – flexible Dosierung</li>
                        </>
                      )}
                    </ul>

                    {/* Trust Footer */}
                    <div className="border-t border-taupe/15 pt-4 text-xs text-green/60 flex items-center gap-4 mt-auto">
                      <span className="flex items-center gap-2"><span className="inline-block w-1.5 h-1.5 rounded-full bg-copper"/> Mit Tierärzten entwickelt</span>
                      <span className="flex items-center gap-2"><span className="inline-block w-1.5 h-1.5 rounded-full bg-copper"/> Handgefertigt in Heilbronn</span>
                    </div>
                  </div>
                  </div>
                </a>
              </ScrollAnimation>
            ))
          )}
        </div>

        {/* Produkt-Konfigurator entfernt */}

        {/* "Alle Produkte" Teaser */}
        {/* Entfernt: Weitere Formeln in Entwicklung */}

        {/* Waitlist CTA mit Urgency */}
        <Transform3D hoverEffect="morph" className="max-w-2xl mx-auto">
          <GlassmorphismCard 
            variant="strong" 
            particleEffect={true}
            className="wv-card p-7 sm:p-12 text-center relative overflow-hidden shadow-glow"
          >
          
          <div className="inline-block pill bg-copper/15 border border-copper/25 px-4 py-2 text-xs font-medium mb-4 text-copper micro-bounce">
            Nur noch wenige Plätze verfügbar
          </div>
          
          <h3 className="wv-h3 mb-4 text-green text-gradient">
            Sei beim Launch dabei
          </h3>
          <p className="wv-body text-green/75 mb-6">
            Registriere dich für unsere <strong className="text-green">exklusive Warteliste</strong> – wir senden dir eine Bestätigungs‑E‑Mail (Double Opt‑In). Danach erhältst du:
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 text-sm">
            <div className="flex items-center gap-2 text-green/80 micro-pulse">
              <span className="text-copper text-lg">✓</span>
              <span><strong className="text-copper">10% Launch-Rabatt</strong></span>
            </div>
            <div className="flex items-center gap-2 text-green/80 micro-pulse">
              <span className="text-copper text-lg">✓</span>
              <span>Vorabzugang vor allen anderen</span>
            </div>
            <div className="flex items-center gap-2 text-green/80 micro-pulse">
              <span className="text-copper text-lg">✓</span>
              <span>Exklusive Entwicklungs-Updates</span>
            </div>
          </div>
          
          <div id="waitlist">
          {!submitted ? (
            <form onSubmit={handleWaitlist} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <div className="form-group flex-1">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="deine@email.de"
                  className="form-input-premium w-full border-copper/30 focus:border-copper focus:ring-copper/20"
                />
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="bg-copper text-cream px-6 py-3 rounded-full font-medium hover:bg-copper/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-cream/30 border-t-cream rounded-full animate-spin"></div>
                    Wird angemeldet...
                  </span>
                ) : (
                  'Jetzt anmelden'
                )}
              </button>
            </form>
          ) : (
            <div className="pill bg-copper/15 border border-copper/25 text-copper px-6 py-4 inline-flex items-center gap-2 animate-pulse">
              <span>✓</span> Danke! Bitte bestätige jetzt deine E‑Mail – prüfe dein Postfach.
            </div>
          )}
          </div>
          
          </GlassmorphismCard>
        </Transform3D>
      </div>

      {/* Konfigurator-Modal entfernt */}
    </section>
  );
}