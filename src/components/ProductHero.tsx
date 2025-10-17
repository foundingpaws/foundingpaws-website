"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";
import OptimizedImage from "@/components/OptimizedImage";
import IconHeart from "@/components/icons/IconHeart";
import IconSparkles from "@/components/icons/IconSparkles";
import IconShield from "@/components/icons/IconShield";

interface ProductHeroProps {
  product: {
    key: string;
    title: string;
    subtitle: string;
    description: string;
    category: string;
    accent: "green" | "copper" | "taupe";
    comingSoon: boolean;
    productImage: string;
    waitlistCount: number;
    remainingSpots: number;
  };
  onWaitlistSubmit: (email: string) => Promise<void>;
}

export default function ProductHero({ product, onWaitlistSubmit }: ProductHeroProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleWaitlist = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await onWaitlistSubmit(email);
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error('Waitlist submission error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const getAccentColor = () => {
    switch (product.accent) {
      case "copper": return "from-copper/20 to-copper/10";
      case "taupe": return "from-taupe/20 to-taupe/10";
      default: return "from-green/20 to-green/10";
    }
  };

  return (
    <section className="wv-section-hero bg-gradient-to-br from-green to-green/90 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-cream rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-copper rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-taupe rounded-full blur-3xl"></div>
      </div>

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Content */}
          <FadeIn>
            <div className="space-y-8">
              {/* Category Badge */}
              <div className="inline-flex items-center gap-2 pill bg-cream/15 border border-cream/25 px-6 py-3 wv-eyebrow">
                <div className="w-2 h-2 bg-copper rounded-full animate-pulse"></div>
                <span className="text-white font-medium">{product.category}</span>
              </div>

              {/* Title */}
              <div className="space-y-4">
                <h1 className="wv-h1 text-white leading-tight">
                  {product.title}
                </h1>
                <p className="text-xl md:text-2xl text-cream font-normal max-w-2xl leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Social Proof */}
              <div className="flex items-center gap-6 p-6 bg-white/10 rounded-2xl border border-white/20 backdrop-blur-sm">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 bg-copper rounded-full border-3 border-white flex items-center justify-center text-sm font-bold text-cream">A</div>
                  <div className="w-10 h-10 bg-copper rounded-full border-3 border-white flex items-center justify-center text-sm font-bold text-cream">B</div>
                  <div className="w-10 h-10 bg-copper rounded-full border-3 border-white flex items-center justify-center text-sm font-bold text-cream">C</div>
                  <div className="w-10 h-10 bg-cream/20 rounded-full border-3 border-white flex items-center justify-center text-sm font-bold text-cream">+</div>
                </div>
                <div className="text-white/90">
                  <div className="font-bold text-lg">{product.waitlistCount} Hundehalter</div>
                  <div className="text-sm">bereits auf der Warteliste</div>
                </div>
              </div>

              {/* Urgency Box */}
              <div className={`bg-gradient-to-r ${getAccentColor()} border border-copper/30 rounded-3xl p-8 relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-copper/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-3xl animate-pulse">⚡</span>
                    <span className="font-bold text-xl text-white">
                      Nur noch {product.remainingSpots} Plätze verfügbar!
                    </span>
                  </div>
                  <p className="text-white/90 mb-6 text-lg">
                    Sichere dir jetzt deinen exklusiven <strong className="text-copper">10% Launch-Rabatt</strong> und werde als Erste:r über die Verfügbarkeit informiert.
                  </p>
                  <div className="flex flex-wrap gap-6 text-white/80">
                    <div className="flex items-center gap-2">
                      <IconShield className="w-5 h-5 text-copper" />
                      <span>Kostenlose Anmeldung</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <IconHeart className="w-5 h-5 text-copper" />
                      <span>Jederzeit kündbar</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <IconSparkles className="w-5 h-5 text-copper" />
                      <span>Exklusive Updates</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#waitlist" 
                  className="group bg-copper text-cream px-8 py-5 rounded-2xl font-bold text-lg hover:bg-copper/90 transition-all duration-300 shadow-2xl hover:shadow-copper/25 transform hover:scale-105 text-center relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    <span className="text-2xl">🎯</span>
                    <span>Jetzt 10% Rabatt sichern</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-copper to-copper/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
                <a 
                  href="#details" 
                  className="group bg-white/20 text-white px-8 py-5 rounded-2xl font-bold text-lg hover:bg-white/30 transition-all duration-300 backdrop-blur-sm border border-white/30 text-center"
                >
                  <span className="flex items-center justify-center gap-2">
                    <span>Mehr erfahren</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </span>
                </a>
              </div>
            </div>
          </FadeIn>

          {/* Product Image */}
          <FadeIn delay={0.2}>
            <div className="relative">
              <div className="relative aspect-square max-w-lg mx-auto">
                <OptimizedImage
                  src={product.productImage}
                  alt={`${product.title} Produktbild`}
                  width={500}
                  height={500}
                  className="w-full h-full object-contain drop-shadow-2xl"
                  placeholder="blur"
                  quality={95}
                />
              </div>
              
              {/* Floating Badges */}
              <div className="absolute top-6 left-6 pill bg-copper text-cream px-4 py-2 text-sm font-bold shadow-lg">
                Coming Soon
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}