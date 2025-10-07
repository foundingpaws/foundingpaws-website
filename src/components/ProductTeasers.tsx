"use client";

import Image from "next/image";
import OptimizedImage from "./OptimizedImage";
import { useState, useEffect } from "react";
import ScrollAnimation from "@/components/ScrollAnimation";
import IconPaw from "@/components/icons/IconPaw";
import Transform3D from "@/components/Transform3D";
import GlassmorphismCard from "@/components/GlassmorphismCard";
import LoadingButton from "@/components/LoadingButton";
import SkeletonLoader from "@/components/SkeletonLoader";
import { RippleButton, MagneticButton, TiltCard } from "@/components/MicroInteractions";
import ProductConfigurator from "@/components/ProductConfigurator";

const products = [
  {
    key: "bright-mind",
    title: "Bright Mind",
    subtitle: "Kognitive Unterstützung & Herzgesundheit",
    description: "Fördert geistige Klarheit und unterstützt die Herzfunktion – für ein waches, vitales Hundeleben.",
    category: "Kognition & Herz",
    accent: "copper",
    comingSoon: true,
        productImage: "/products/bright-mind/Bright Mind.png",
    studioImage: "/products/bright-mind/product-studio.svg",
    lifestyleImage: "/products/lifestyle/happy-dog-beach.svg",
  },
  {
    key: "gentle-calm",
    title: "Gentle Calm",
    subtitle: "Stresslinderung & Emotionale Balance",
    description: "Natürliche Beruhigung für ängstliche Momente – damit dein Hund entspannt durch den Alltag geht.",
    category: "Stress & Angst",
    accent: "green",
    comingSoon: true,
        productImage: "/products/gentle-calm/ObjectID6a.png",
    studioImage: "/products/gentle-calm/product-studio.svg",
    lifestyleImage: "/products/lifestyle/calm-dog-home.svg",
  },
  {
    key: "vital-joints",
    title: "Vital Joints",
    subtitle: "Gelenkgesundheit & Mobilität",
    description: "Unterstützt Gelenke und Beweglichkeit – für schmerzfreie Spaziergänge bis ins hohe Alter.",
    category: "Gelenke & Mobilität",
    accent: "taupe",
    comingSoon: true,
        productImage: "/products/vital-joints/VitalJoints.png",
    studioImage: "/products/vital-joints/product-studio.svg",
    lifestyleImage: "/products/lifestyle/active-dog-park.svg",
  },
];

export default function ProductTeasers() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showSkeletons, setShowSkeletons] = useState(true);
  const [showConfigurator, setShowConfigurator] = useState(false);

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
    <section id="products" className="wv-section bg-cream">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center wv-spacing-2xl">
          <div className="inline-block pill bg-copper/15 border border-copper/25 px-5 py-2 wv-eyebrow wv-spacing-md text-copper">
            Bald verfügbar
          </div>
          <h2 className="wv-h2 text-green wv-spacing-sm">
            Unsere Formeln
          </h2>
          <div className="w-16 h-1 bg-copper mx-auto rounded-full wv-spacing-md"></div>
          <p className="wv-lead text-green/70 max-w-2xl mx-auto">
            Fünf wissenschaftlich entwickelte Supplements für jede Lebensphase deines Hundes.
            Handgefertigt in Heilbronn, entwickelt mit Tierärzten.
          </p>
        </div>

        {/* Product Grid - Top 3 only for better focus */}
        <div className="grid gap-8 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-14 sm:mb-16">
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
                  <div className="wv-card-feature hover-lift-feature p-7 sm:p-8 shadow-floating transition-all duration-300 hover:shadow-xl cursor-pointer">
                  {/* Coming Soon Badge */}
                  <div className="absolute top-4 right-4 pill bg-copper/15 border border-copper/25 text-copper text-xs px-3 py-1 font-medium">
                    Coming Soon
                  </div>

                  {/* Category Badge */}
                  <div className="pill bg-green/5 border border-green/15 text-green wv-caption px-3 py-1 font-medium wv-spacing-sm inline-block">
                    {product.category}
                  </div>

                  {/* Product Image */}
                  <div className="w-24 h-24 rounded-2xl overflow-hidden bg-gradient-to-br from-cream to-taupe/20 border border-taupe/20 flex items-center justify-center wv-spacing-md group-hover:scale-110 transition-transform shadow-premium">
                    <OptimizedImage 
                      src={product.productImage} 
                      alt={`${product.title} Produktbild`}
                      width={80}
                      height={80}
                      className="w-full h-full object-contain"
                      placeholder="blur"
                      quality={90}
                    />
                  </div>

                  {/* Content */}
                  <h3 className="wv-h3 text-green wv-spacing-xs">
                    {product.title}
                  </h3>
                  <p className="wv-subhead text-copper wv-spacing-sm">
                    {product.subtitle}
                  </p>
                  <p className="wv-body text-green/75 wv-spacing-sm">
                    {product.description}
                  </p>
                  <ul className="text-green/70 text-sm mb-5 sm:mb-6 list-disc pl-5">
                    {product.key === 'bright-mind' && (
                      <>
                        <li>Omega‑3 + Antioxidantien für mentale Schärfe</li>
                        <li>Kohärent dosiert, alltagstauglich</li>
                      </>
                    )}
                    {product.key === 'gentle-calm' && (
                      <>
                        <li>Sanfte Pflanzenstoffe für Balance</li>
                        <li>Ohne Sedierung, klare Dosierung</li>
                      </>
                    )}
                    {product.key === 'vital-joints' && (
                      <>
                        <li>Gelenknährstoffe in sinnvoller Kombination</li>
                        <li>Für Beweglichkeit bis ins Alter</li>
                      </>
                    )}
                  </ul>

                  {/* Trust Footer */}
                  <div className="border-t border-taupe/15 pt-4 text-xs text-green/60 flex items-center gap-4">
                    <span className="flex items-center gap-2"><span className="inline-block w-1.5 h-1.5 rounded-full bg-copper"/> Mit Tierärzten entwickelt</span>
                    <span className="flex items-center gap-2"><span className="inline-block w-1.5 h-1.5 rounded-full bg-copper"/> Handgefertigt in Heilbronn</span>
                  </div>
                </div>
                </a>
              </ScrollAnimation>
            ))
          )}
        </div>

        {/* Product Configurator Button */}
        <div className="text-center mb-8">
          <RippleButton
            onClick={() => setShowConfigurator(true)}
            className="btn-primary pill text-cream px-8 py-4 font-medium gradient-copper-glow"
          >
            🐕 Produkt-Konfigurator öffnen
          </RippleButton>
        </div>

        {/* "Alle Produkte" Teaser */}
        <div className="text-center mb-14 sm:mb-16">
          <p className="text-green/70 mb-4">Weitere Formeln in Entwicklung:</p>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <span className="pill bg-taupe/10 border border-taupe/20 text-green/70 px-4 py-2">Skin & Coat</span>
            <span className="pill bg-taupe/10 border border-taupe/20 text-green/70 px-4 py-2">Immune Boost</span>
            <span className="pill bg-taupe/10 border border-taupe/20 text-green/70 px-4 py-2">+ 3 weitere</span>
          </div>
        </div>

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
            Registriere dich für unsere <strong className="text-green">exklusive Warteliste</strong> und erhalte:
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
              <LoadingButton
                type="submit"
                loading={isLoading}
                className="whitespace-nowrap gradient-copper-glow"
              >
                Jetzt anmelden
              </LoadingButton>
            </form>
          ) : (
            <div className="pill bg-copper/15 border border-copper/25 text-copper px-6 py-4 inline-flex items-center gap-2 animate-pulse">
              <span>✓</span> Perfekt! Du bist dabei – wir melden uns bald.
            </div>
          )}
          
          </GlassmorphismCard>
        </Transform3D>
      </div>

      {/* Product Configurator Modal */}
      {showConfigurator && (
        <ProductConfigurator onClose={() => setShowConfigurator(false)} />
      )}
    </section>
  );
}