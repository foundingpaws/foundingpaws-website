"use client";

import { useState } from "react";
import { ArrowRight, Mail, Heart, Sparkles } from "lucide-react";
import LeadCapture from "./LeadCapture";

export default function HeroWithLeadCapture() {
  const [showLeadCapture, setShowLeadCapture] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-secondary via-secondary-light to-secondary/50 flex items-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-accent font-medium">
                  <Sparkles className="w-5 h-5" />
                  <span>Wissenschaft mit Herz</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-heading text-charcoal leading-tight">
                  Premium-Ergänzungen für eine lange, gesunde Hundeleben
                </h1>
                
                <p className="text-xl text-taupe leading-relaxed max-w-2xl">
                  Evidenzbasiert entwickelt und mit Herz gemacht – für spürbare Wirkung und Vertrauen.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-medium text-lg transition-all duration-200 flex items-center justify-center gap-2 group">
                  Produkte entdecken
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button
                  onClick={() => setShowLeadCapture(true)}
                  className="bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-xl font-medium text-lg transition-all duration-200 flex items-center justify-center gap-2 group"
                >
                  <Mail className="w-5 h-5" />
                  Pre-Launch-Angebote
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-6 text-sm text-taupe">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-success rounded-full" />
                  <span>Mit Tierärzten entwickelt</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-success rounded-full" />
                  <span>Made in Germany</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-success rounded-full" />
                  <span>100% natürliche Inhaltsstoffe</span>
                </div>
              </div>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className="relative z-10">
                {/* Placeholder for product image */}
                <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                      <Heart className="w-12 h-12 text-primary" />
                    </div>
                    <p className="text-taupe font-medium">Produkt-Visual</p>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center animate-bounce">
                <Sparkles className="w-8 h-8 text-accent" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center animate-pulse">
                <Heart className="w-6 h-6 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Capture Modal */}
      <LeadCapture
        variant="popup"
        trigger="manual"
        isVisible={showLeadCapture}
        onClose={() => setShowLeadCapture(false)}
      />
    </>
  );
}
