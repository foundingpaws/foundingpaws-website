"use client";

import { useState } from "react";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="relative py-20 sm:py-32 bg-gradient-to-br from-copper/20 via-taupe/20 to-cream text-green overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-copper/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-taupe/30 rounded-full blur-[120px]" />
      </div>

      <div className="container-wide relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block pill bg-copper/15 backdrop-blur-sm border border-copper/25 px-5 py-2 text-sm font-medium mb-6 text-copper">
            Exklusiver Zugang
          </div>
          <h2 className="use-retrips text-4xl sm:text-6xl leading-tight mb-6 text-green">
            Bleib auf dem Laufenden
          </h2>
          <div className="w-16 h-1 bg-copper mx-auto rounded-full mb-6"></div>
          <p className="use-fredoka text-lg sm:text-xl text-green/70 mb-10 leading-relaxed max-w-2xl mx-auto">
            Erhalte Einblicke in unsere Entwicklung, wissenschaftliche Updates und exklusive Launch-Vorteile.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="deine@email.de"
                className="flex-1 px-6 py-4 rounded-full text-green placeholder:text-green/40 bg-white/70 border border-taupe/20 focus:outline-none focus:ring-2 focus:ring-copper transition"
              />
              <button
                type="submit"
                className="pill bg-copper text-cream px-8 py-4 font-medium shadow-[0_8px_24px_-8px_rgba(180,106,52,0.7)] hover:opacity-95 hover:scale-105 transition-all whitespace-nowrap"
              >
                Jetzt anmelden
              </button>
            </form>
          ) : (
            <div className="pill bg-copper/15 border border-copper/25 text-copper px-8 py-4 inline-flex items-center gap-2 text-lg">
              <span>✓</span> Danke! Du bist dabei.
            </div>
          )}

          <p className="text-xs text-green/60 mt-6">
            Keine Sorge – wir spammen nicht. Nur hochwertige Updates, versprochen.
          </p>
        </div>
      </div>
    </section>
  );
}


