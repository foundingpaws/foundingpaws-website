"use client";

import Link from "next/link";
import FadeIn from "./FadeIn";
import { ArrowRight, Heart, Shield, Star } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-16 lg:py-24 bg-primary text-cream">
      <div className="container-wide">
        <FadeIn>
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="wv-h2 mb-6" style={{color: 'white'}}>
              Starte noch heute die Reise zu einem gesünderen Hund
            </h2>
            <p className="wv-lead mb-8" style={{color: 'rgba(255, 255, 255, 0.9)'}}>
              Entdecke mit unserem Bedarfsfinder die perfekte Formel für deinen Hund und erhalte exklusive Pre-Launch-Angebote.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/bedarfsfinder"
                className="btn-copper pill text-cream px-8 py-4 text-base font-medium shadow-lg hover:opacity-95 hover:scale-105 transition-all flex items-center justify-center gap-2 touch-padding"
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
              
              <Link
                href="/produkte"
                className="btn-cream pill text-primary px-8 py-4 text-base font-medium hover:opacity-95 hover:scale-105 transition-all flex items-center justify-center gap-2 touch-padding"
                style={{
                  WebkitTapHighlightColor: 'transparent',
                  WebkitTouchCallout: 'none',
                  WebkitUserSelect: 'none',
                  userSelect: 'none'
                }}
              >
                <Shield className="w-5 h-5" />
                Produkte ansehen
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
              <div className="flex items-center justify-center gap-3">
                <div className="w-12 h-12 bg-cream/20 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-cream" />
                </div>
                <div className="text-left">
                  <div className="font-medium text-cream text-sm">
                    30 Tage Geld-zurück
                  </div>
                  <div className="text-cream/70 text-xs">
                    Risikofrei testen
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center gap-3">
                <div className="w-12 h-12 bg-cream/20 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-cream" />
                </div>
                <div className="text-left">
                  <div className="font-medium text-cream text-sm">
                    4.9/5 Sterne
                  </div>
                  <div className="text-cream/70 text-xs">
                    Von 1000+ Kunden
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center gap-3">
                <div className="w-12 h-12 bg-cream/20 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-cream" />
                </div>
                <div className="text-left">
                  <div className="font-medium text-cream text-sm">
                    Made in Germany
                  </div>
                  <div className="text-cream/70 text-xs">
                    Handgefertigt in Heilbronn
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
