"use client";

import Link from "next/link";
import Image from "next/image";
import FadeIn from "./FadeIn";
import { ArrowRight, Star, Shield, Heart } from "lucide-react";

const products = [
  {
    id: "bright-mind",
    name: "Bright Mind",
    description: "Kognitive Gesundheit & Gehirnfunktion",
    price: "€49,90",
    image: "/products/bright-mind/product-studio.svg",
    href: "/produkte/bright-mind",
    comingSoon: false,
    features: ["Omega-3 DHA", "Antioxidantien", "B-Vitamine"]
  },
  {
    id: "gentle-calm",
    name: "Gentle Calm",
    description: "Stressreduktion & Entspannung",
    price: "€39,90",
    image: "/products/gentle-calm/product-studio.svg",
    href: "/produkte/gentle-calm",
    comingSoon: true,
    features: ["L-Theanin", "Magnesium", "Baldrian"]
  },
  {
    id: "vital-joints",
    name: "Vital Joints",
    description: "Gelenkgesundheit & Mobilität",
    price: "€44,90",
    image: "/products/vital-joints/product-studio.svg",
    href: "/produkte/vital-joints",
    comingSoon: true,
    features: ["Glucosamin", "Chondroitin", "MSM"]
  }
];

export default function ProductShowcase() {
  return (
    <section id="products" className="py-16 lg:py-24 bg-cream">
      <div className="container-wide">
        <FadeIn>
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="wv-h2 text-charcoal mb-4">
              Unsere Premium-Formeln
            </h2>
            <p className="wv-lead text-taupe max-w-2xl mx-auto">
              Wissenschaftlich entwickelt, handgefertigt in Deutschland – für die Gesundheit deines Hundes.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <FadeIn key={product.id} delay={index * 100}>
              <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ios-fix">
                {/* Product Image */}
                <div className="relative h-48 lg:h-56 bg-gradient-to-br from-primary/5 to-accent/5">
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <div className="relative w-32 h-32 lg:w-40 lg:h-40">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 128px, (max-width: 1024px) 160px, 160px"
                      />
                    </div>
                  </div>
                  
                  {/* Coming Soon Badge */}
                  {product.comingSoon && (
                    <div className="absolute top-4 right-4">
                      <div className="bg-accent text-white px-3 py-1 rounded-full text-xs font-medium">
                        Bald verfügbar
                      </div>
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="wv-h3 text-charcoal mb-2">
                    {product.name}
                  </h3>
                  
                  <p className="text-taupe text-sm mb-4 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-charcoal">
                      {product.price}
                    </span>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-accent fill-current" />
                      ))}
                      <span className="text-sm text-taupe ml-1">(4.9)</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link
                    href={product.href}
                    className={`w-full py-3 px-4 rounded-xl font-medium text-center transition-all duration-200 flex items-center justify-center gap-2 touch-padding ${
                      product.comingSoon
                        ? "bg-taupe/20 text-taupe cursor-not-allowed"
                        : "bg-primary hover:bg-primary-dark text-white hover:shadow-lg hover:scale-105"
                    }`}
                    style={{
                      WebkitTapHighlightColor: 'transparent',
                      WebkitTouchCallout: 'none',
                      WebkitUserSelect: 'none',
                      userSelect: 'none'
                    }}
                  >
                    {product.comingSoon ? (
                      <>
                        <Shield className="w-4 h-4" />
                        Pre-Order
                      </>
                    ) : (
                      <>
                        Details ansehen
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </Link>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Bottom CTA */}
        <FadeIn delay={400}>
          <div className="text-center mt-12 lg:mt-16">
            <Link
              href="/bedarfsfinder"
              className="btn-copper pill text-cream px-8 py-4 text-base font-medium shadow-lg hover:opacity-95 hover:scale-105 transition-all inline-flex items-center gap-2 touch-padding"
              style={{
                WebkitTapHighlightColor: 'transparent',
                WebkitTouchCallout: 'none',
                WebkitUserSelect: 'none',
                userSelect: 'none'
              }}
            >
              <Heart className="w-5 h-5" />
              Bedarfsfinder starten
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
