"use client";

import Image from "next/image";
import { useState } from "react";

const products = [
  {
    key: "bright-mind",
    title: "Bright Mind",
    subtitle: "Kognitive Unterstützung & Herzgesundheit",
    description: "Fördert geistige Klarheit und unterstützt die Herzfunktion – für ein waches, vitales Hundeleben.",
    category: "🧠 Kognition & Herz",
    accent: "copper",
    comingSoon: true,
  },
  {
    key: "gentle-calm",
    title: "Gentle Calm",
    subtitle: "Stresslinderung & Emotionale Balance",
    description: "Natürliche Beruhigung für ängstliche Momente – damit dein Hund entspannt durch den Alltag geht.",
    category: "😌 Stress & Angst",
    accent: "green",
    comingSoon: true,
  },
  {
    key: "vital-joints",
    title: "Vital Joints",
    subtitle: "Gelenkgesundheit & Mobilität",
    description: "Unterstützt Gelenke und Beweglichkeit – für schmerzfreie Spaziergänge bis ins hohe Alter.",
    category: "🦴 Gelenke & Mobilität",
    accent: "taupe",
    comingSoon: true,
  },
];

export default function ProductTeasers() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleWaitlist = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Backend-Integration für Warteliste
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="products" className="relative py-20 sm:py-32 bg-gradient-to-br from-cream via-copper/5 to-taupe/10 overflow-hidden">
      {/* Subtle Copper Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-copper/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container-wide relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block pill bg-copper/15 backdrop-blur-sm border border-copper/25 px-5 py-2 text-sm font-medium mb-6 text-copper">
            Bald verfügbar
          </div>
          <h2 className="use-retrips text-4xl sm:text-6xl leading-tight mb-4 text-green">
            Unsere Formeln
          </h2>
          <div className="w-16 h-1 bg-copper mx-auto rounded-full mb-6"></div>
          <p className="use-fredoka text-lg text-green/70 max-w-2xl mx-auto">
            Fünf wissenschaftlich entwickelte Supplements für jede Lebensphase deines Hundes.
            Handgefertigt in Heilbronn, entwickelt mit Tierärzten.
          </p>
        </div>

        {/* Product Grid - Top 3 only for better focus */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-16">
          {products.map((product, idx) => (
            <article
              key={product.key}
              className="group relative bg-white/70 backdrop-blur-sm border border-taupe/20 rounded-[28px] p-8 hover:shadow-[0_20px_60px_-20px_rgba(180,106,52,0.3)] transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1"
            >
              {/* Coming Soon Badge */}
              <div className="absolute top-4 right-4 pill bg-copper/15 border border-copper/25 text-copper text-xs px-3 py-1 font-medium">
                Coming Soon
              </div>

              {/* Category Badge */}
              <div className="pill bg-green/10 border border-green/20 text-green text-xs px-3 py-1 font-medium mb-4 inline-block">
                {product.category}
              </div>

              {/* Product Icon Placeholder */}
              <div className="w-20 h-20 rounded-full bg-copper/10 border border-copper/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl">🐾</span>
              </div>

              {/* Content */}
              <h3 className="use-retrips text-3xl sm:text-4xl text-green mb-3">
                {product.title}
              </h3>
              <p className="use-fredoka text-base text-copper mb-4 font-medium">
                {product.subtitle}
              </p>
              <p className="text-sm text-green/70 leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Trust Footer */}
              <div className="border-t border-taupe/20 pt-4">
                <div className="flex items-center justify-between text-xs text-green/60">
                  <span>🩺 Mit Tierärzten entwickelt</span>
                  <span>🇩🇪 Handgefertigt in Heilbronn</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* "Alle Produkte" Teaser */}
        <div className="text-center mb-16">
          <p className="text-green/70 mb-4">Weitere Formeln in Entwicklung:</p>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <span className="pill bg-taupe/10 border border-taupe/20 text-green/70 px-4 py-2">✨ Skin & Coat</span>
            <span className="pill bg-taupe/10 border border-taupe/20 text-green/70 px-4 py-2">🛡️ Immune Boost</span>
            <span className="pill bg-taupe/10 border border-taupe/20 text-green/70 px-4 py-2">+ 3 weitere</span>
          </div>
        </div>

        {/* Waitlist CTA mit Urgency */}
        <div id="waitlist" className="max-w-2xl mx-auto bg-white/70 backdrop-blur-sm border border-taupe/20 rounded-[28px] p-8 sm:p-12 text-center shadow-[0_16px_48px_-16px_rgba(142,127,116,0.25)] relative overflow-hidden">
          {/* Subtle Copper Accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-copper to-transparent"></div>
          
          <div className="inline-block pill bg-copper/15 border border-copper/25 px-4 py-2 text-xs font-medium mb-4 text-copper">
            🔥 Nur noch wenige Plätze verfügbar
          </div>
          
          <h3 className="use-retrips text-3xl sm:text-4xl mb-4 text-green">
            Sei beim Launch dabei
          </h3>
          <p className="text-green/70 mb-6 leading-relaxed">
            Registriere dich für unsere <strong className="text-green">exklusive Warteliste</strong> und erhalte:
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 text-sm">
            <div className="flex items-center gap-2 text-green/80">
              <span className="text-copper text-lg">✓</span>
              <span><strong className="text-copper">10% Launch-Rabatt</strong></span>
            </div>
            <div className="flex items-center gap-2 text-green/80">
              <span className="text-copper text-lg">✓</span>
              <span>Vorabzugang vor allen anderen</span>
            </div>
            <div className="flex items-center gap-2 text-green/80">
              <span className="text-copper text-lg">✓</span>
              <span>Exklusive Entwicklungs-Updates</span>
            </div>
          </div>
          
          {!submitted ? (
            <form onSubmit={handleWaitlist} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="deine@email.de"
                className="flex-1 px-6 py-4 rounded-full text-green placeholder:text-green/40 bg-cream border border-taupe/20 focus:outline-none focus:ring-2 focus:ring-copper"
              />
              <button
                type="submit"
                className="pill bg-copper text-cream px-8 py-4 font-medium shadow-[0_8px_24px_-8px_rgba(180,106,52,0.6)] hover:opacity-95 hover:scale-105 transition-all whitespace-nowrap"
              >
                Jetzt anmelden
              </button>
            </form>
          ) : (
            <div className="pill bg-copper/15 border border-copper/25 text-copper px-6 py-4 inline-flex items-center gap-2 animate-pulse">
              <span>✓</span> Perfekt! Du bist dabei – wir melden uns bald.
            </div>
          )}
          
          <p className="text-xs text-green/50 mt-4">
            ⏱️ Launch geplant für die nächsten Wochen
          </p>
        </div>
      </div>
    </section>
  );
}


