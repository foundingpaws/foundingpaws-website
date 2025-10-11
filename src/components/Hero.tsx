"use client";

import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import { useState } from "react";

export default function Hero() {
  const [videoError, setVideoError] = useState(false);

  return (
    <section className="relative bg-green text-cream overflow-hidden hero-depth wv-section">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-cream rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-copper rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-cream rounded-full blur-xl"></div>
      </div>

      <div className="container-wide relative z-20">
        {/* Mobile Layout - iOS Optimiert */}
        <div className="lg:hidden pt-0">
          <FadeIn>
            <div className="text-center mb-1 mt-0">
              <h1 className="wv-h1 mb-2" style={{color: 'white'}}>
                Premium-Supplements für ein langes, gesundes Hundeleben
              </h1>
              <p className="wv-lead mb-5" style={{color: 'rgba(255, 255, 255, 0.9)'}}>
                Evidenzbasiert entwickelt, handgefertigt in Heilbronn – für spürbare Wirkung und Vertrauen.
              </p>
            </div>
          </FadeIn>

          {/* Mobile Video - iOS optimiert mit Best Practices */}
          <div className="relative mb-8">
            <div className="relative aspect-[4/3] rounded-[28px] overflow-hidden bg-green/20 shadow-2xl">
              {!videoError ? (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="none"
                  poster="/mockups/PSD file.png"
                  className="w-full h-full object-cover"
                  onError={() => setVideoError(true)}
                  style={{
                    filter: 'brightness(0.9) contrast(1.1)',
                    transform: 'scale(1.02)',
                    transition: 'transform 0.3s ease-out'
                  }}
                >
                  {/* TODO: Erstelle komprimierte Mobile Version (<3MB) für iOS Autoplay */}
                  <source src="/customers/Smooth_cinematic_transition_202510101708-mobile.mp4" type="video/mp4" />
                  {/* Fallback auf Original (wird nur auf WiFi/Desktop geladen) */}
                  <source src="/customers/Smooth_cinematic_transition_202510101708.mp4" type="video/mp4" />
                </video>
              ) : (
                <Image
                  src="/mockups/PSD file.png"
                  alt="Bright Mind Produktbild - Founding Paws Supplements"
                  fill
                  className="object-contain img-depth"
                  style={{objectPosition:"center 45%"}}
                  priority
                  sizes="100vw"
                  fetchPriority="high"
                  placeholder="empty"
                />
              )}
              {/* Video/Image Overlay für bessere Lesbarkeit */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none"></div>
            </div>
            {/* Mobile-optimierte Floating Elements */}
            <div className="absolute -top-3 -right-3 w-6 h-6 bg-copper rounded-full opacity-80 animate-pulse"></div>
            <div className="absolute -bottom-2 -left-2 w-5 h-5 bg-cream rounded-full opacity-60 animate-bounce"></div>
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

        {/* Desktop Layout - Verbesserte Balance */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          <FadeIn>
            <div className="max-w-lg">
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
          
          {/* Desktop Video - Original Qualität */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-[24px] overflow-hidden bg-green/20 shadow-2xl">
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="none"
                poster="/mockups/PSD file.png"
                className="w-full h-full object-cover"
                style={{
                  filter: 'brightness(0.95) contrast(1.05)',
                  transform: 'scale(1.01)',
                  transition: 'transform 0.3s ease-out'
                }}
              >
                <source src="/customers/Smooth_cinematic_transition_202510101708.mp4" type="video/mp4" />
              </video>
              {/* Subtile Video Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/5 pointer-events-none"></div>
            </div>
            {/* Desktop Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-copper rounded-full opacity-70 animate-pulse"></div>
            <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-cream rounded-full opacity-50 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
}


