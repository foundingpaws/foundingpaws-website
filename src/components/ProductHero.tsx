"use client";

import Image from "next/image";
import { useState } from "react";
import { trackEvent } from "@/lib/analytics";

interface Product {
  key: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  accent: string;
  comingSoon: boolean;
  price: string;
  currency: string;
  productImage: string;
  heroImage: string;
}

interface ProductHeroProps {
  product: Product;
}

export default function ProductHero({ product }: ProductHeroProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  const getAccentColor = () => {
    switch (product.accent) {
      case "copper":
        return "bg-copper";
      case "green":
        return "bg-green";
      case "taupe":
        return "bg-taupe";
      default:
        return "bg-accent";
    }
  };

  return (
    <section className={`relative min-h-[75vh] md:min-h-[80vh] ${getAccentColor()} text-white overflow-hidden pdp-hero`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-32 -translate-x-32"></div>
      </div>

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[75vh] md:min-h-[80vh] pt-12 pb-12 md:pt-16 md:pb-16 pdp-hero" style={{ paddingTop: 'max(3rem, env(safe-area-inset-top))' }}>
          {/* Content */}
          <div className="space-y-6 md:space-y-8">
            {/* Category Badge */}
            <div className="inline-block">
              <span className="px-4 py-2 rounded-full text-sm font-medium bg-white/20 backdrop-blur-sm border border-white/30">
                {product.category}
              </span>
            </div>

            {/* Title */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                {product.title}
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-white/90 font-medium">
                {product.subtitle}
              </p>
            </div>

            {/* Description */}
            <p className="text-lg text-white/80 leading-relaxed max-w-2xl">
              {product.description}
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              {product.comingSoon ? (
                <a
                  href="#waitlist"
                  className="product-cta-button px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 bg-white text-copper hover:bg-white/90 shadow-lg hover:shadow-xl transform hover:scale-105"
                  style={{
                    WebkitTapHighlightColor: 'transparent',
                    WebkitTouchCallout: 'none',
                    WebkitUserSelect: 'none',
                    userSelect: 'none'
                  }}
                  onClick={() => trackEvent('hero_waitlist_cta', 'pdp', product.key)}
                >
                  Coming Soon – Jetzt vormerken
                </a>
              ) : (
                <button
                  className="product-cta-button px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 bg-accent text-white hover:bg-accent-dark shadow-lg hover:shadow-xl transform hover:scale-105"
                  style={{
                    WebkitTapHighlightColor: 'transparent',
                    WebkitTouchCallout: 'none',
                    WebkitUserSelect: 'none',
                    userSelect: 'none'
                  }}
                  onClick={() => trackEvent('hero_buy_cta', 'pdp', product.key)}
                >
                  In den Warenkorb
                </button>
              )}
            </div>

            {/* Coming Soon Badge */}
            {product.comingSoon && (
              <div className="flex items-center gap-3 text-white/80">
                <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">
                  Verfügbar bald
                </span>
              </div>
            )}
          </div>

          {/* Product Image */}
          <div className="relative">
            <div className="relative w-full h-[680px] md:h-[840px] lg:h-[960px]">
              {/* Main Product Image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-[24rem] h-[24rem] md:w-[36rem] md:h-[36rem] lg:w-[48rem] lg:h-[48rem] max-w-full">
                  <Image
                    src={product.heroImage || product.productImage}
                    alt={product.title}
                    fill
                    className={`object-contain transition-all duration-1000 ${
                      imageLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
                    }`}
                    sizes="(min-width: 1024px) 48rem, (min-width: 768px) 36rem, 22rem"
                    onLoad={() => setImageLoaded(true)}
                    priority
                    quality={100}
                  />
                  
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-white/20 rounded-full blur-3xl scale-[2] opacity-50"></div>
                </div>
              </div>

              {/* Unified background pattern only (removed floating animations for consistency) */}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block">
        <div className="flex flex-col items-center gap-2 text-white/60">
          <span className="text-sm font-medium">Scrollen für Details</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
