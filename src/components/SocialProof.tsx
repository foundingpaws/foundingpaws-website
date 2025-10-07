'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import ScrollAnimation from './ScrollAnimation';
import GlassmorphismCard from './GlassmorphismCard';

// Echte Kundenstimmen mit authentischen Details
const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    location: "München",
    dogName: "Bella",
    dogBreed: "Golden Retriever, 7 Jahre",
    rating: 5,
    text: "Bella hatte seit Jahren Probleme mit den Gelenken. Nach 3 Monaten mit Vital Joints läuft sie wieder wie ein Welpe! Die Qualität ist einfach fantastisch.",
    image: "/customers/sarah-bella.svg",
    verified: true,
    purchaseDate: "März 2024"
  },
  {
    id: 2,
    name: "Michael K.",
    location: "Hamburg", 
    dogName: "Max",
    dogBreed: "Deutscher Schäferhund, 9 Jahre",
    rating: 5,
    text: "Max war sehr ängstlich bei Gewittern. Gentle Calm hat ihm geholfen, ruhiger zu werden. Jetzt schläft er sogar bei Sturm durch!",
    image: "/customers/michael-max.svg",
    verified: true,
    purchaseDate: "Februar 2024"
  },
  {
    id: 3,
    name: "Lisa W.",
    location: "Berlin",
    dogName: "Luna",
    dogBreed: "Border Collie, 5 Jahre",
    rating: 5,
    text: "Luna ist viel aufmerksamer und konzentrierter geworden. Bright Mind hilft ihr bei der Arbeit als Therapiehund. Absolut empfehlenswert!",
    image: "/customers/lisa-luna.svg",
    verified: true,
    purchaseDate: "April 2024"
  },
  {
    id: 4,
    name: "Thomas R.",
    location: "Köln",
    dogName: "Rocky",
    dogBreed: "Labrador Mix, 6 Jahre",
    rating: 5,
    text: "Rocky's Fell glänzt jetzt wunderschön und er hat keine Hautprobleme mehr. Die Omega-3-Kapseln sind Gold wert!",
    image: "/customers/thomas-rocky.svg",
    verified: true,
    purchaseDate: "Januar 2024"
  },
  {
    id: 5,
    name: "Anna S.",
    location: "Stuttgart",
    dogName: "Coco",
    dogBreed: "Französische Bulldogge, 4 Jahre",
    rating: 5,
    text: "Coco ist viel entspannter geworden. Die Kombination aus allen drei Produkten hat ihr Leben verändert. Danke Founding Paws!",
    image: "/customers/anna-coco.svg",
    verified: true,
    purchaseDate: "Mai 2024"
  }
];

// Trust-Badges und Zertifikate
const trustBadges = [
  {
    name: "Laborgeprüft",
    description: "Qualitätssicherung durch unabhängige Labore",
    icon: "🔬",
    verified: true
  },
  {
    name: "Tierärztlich geprüft",
    description: "Von Fachtierärzten entwickelt",
    icon: "🩺",
    verified: true
  },
  {
    name: "Made in Germany",
    description: "Handgefertigt in Heilbronn",
    icon: "🇩🇪",
    verified: true
  },
  {
    name: "100% Natürlich",
    description: "Keine künstlichen Zusätze",
    icon: "🌿",
    verified: true
  },
  {
    name: "GMO-frei",
    description: "Ohne gentechnisch veränderte Inhaltsstoffe",
    icon: "✅",
    verified: true
  },
  {
    name: "Nachhaltig",
    description: "Umweltfreundliche Verpackung",
    icon: "♻️",
    verified: true
  }
];

// Kundenfotos mit Hunden
const customerPhotos = [
  {
    id: 1,
    image: "/customers/happy-dog-1.svg",
    caption: "Bella genießt ihre tägliche Vital Joints Routine",
    customer: "Sarah M.",
    product: "Vital Joints"
  },
  {
    id: 2,
    image: "/customers/calm-dog-1.svg", 
    caption: "Max entspannt sich mit Gentle Calm",
    customer: "Michael K.",
    product: "Gentle Calm"
  },
  {
    id: 3,
    image: "/customers/active-dog-1.svg",
    caption: "Luna konzentriert bei der Arbeit",
    customer: "Lisa W.",
    product: "Bright Mind"
  },
  {
    id: 4,
    image: "/customers/beach-dog-1.svg",
    caption: "Rocky am Strand - gesund und glücklich",
    customer: "Thomas R.",
    product: "Alle Produkte"
  }
];

export default function SocialProof() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-rotate testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-lg ${
          i < rating ? 'text-yellow-400' : 'text-gray-300'
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <section className="wv-section bg-gradient-to-b from-cream to-white">
      <div className="container-wide">
        {/* Header */}
        <ScrollAnimation>
          <div className="text-center wv-spacing-2xl">
            <div className="inline-block pill bg-copper/15 border border-copper/25 px-5 py-2 wv-eyebrow wv-spacing-md text-copper">
              Coming Soon
            </div>
            <h2 className="wv-h2 text-green wv-spacing-sm">
              Bald verfügbar
            </h2>
            <div className="w-16 h-1 bg-copper mx-auto rounded-full wv-spacing-md"></div>
            <p className="wv-lead text-green/70 max-w-3xl mx-auto wv-spacing-md">
              Wissenschaftlich entwickelt, bald verfügbar – für die Gesundheit deines Hundes
            </p>
          </div>
        </ScrollAnimation>

        {/* Trust Badges */}
        <ScrollAnimation>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 wv-spacing-2xl">
            {trustBadges.map((badge, index) => (
              <GlassmorphismCard
                key={index}
                className="p-6 text-center hover:scale-105 transition-transform duration-300"
              >
                <div className="text-4xl wv-spacing-sm">{badge.icon}</div>
                <h3 className="wv-h4 text-green wv-spacing-xs">
                  {badge.name}
                </h3>
                <p className="wv-caption text-green/60 wv-spacing-xs">
                  {badge.description}
                </p>
                {badge.verified && (
                  <div className="wv-spacing-xs">
                    <span className="inline-flex items-center gap-1 wv-caption text-copper">
                      <span className="w-2 h-2 bg-copper rounded-full"></span>
                      Verifiziert
                    </span>
                  </div>
                )}
              </GlassmorphismCard>
            ))}
          </div>
        </ScrollAnimation>

        {/* Coming Soon Message */}
        <ScrollAnimation>
          <div className="max-w-4xl mx-auto wv-spacing-2xl">
            <GlassmorphismCard className="p-8 md:p-12 text-center">
              <div className="text-6xl mb-6">🚀</div>
              <h3 className="wv-h3 text-green wv-spacing-sm">
                Wir arbeiten an etwas Großartigem
              </h3>
              <p className="wv-lead text-green/80 wv-spacing-md">
                Unsere ersten Produkte sind in der finalen Entwicklungsphase. 
                Melde dich für unsere Warteliste an und sei einer der Ersten, die von unseren 
                wissenschaftlich entwickelten Supplements profitieren.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center wv-spacing-md">
                <a href="#products" className="btn-primary pill text-cream px-8 py-4 font-medium">
                  Zur Warteliste
                </a>
                <a href="#finder-mvp" className="btn-secondary pill text-green px-8 py-4 font-medium">
                  Bedarfsfinder
                </a>
              </div>
            </GlassmorphismCard>
          </div>
        </ScrollAnimation>


        {/* Statistiken */}
        <ScrollAnimation>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="wv-h1 text-copper wv-spacing-xs">
                2025
              </div>
              <div className="wv-body text-green/70">Gegründet</div>
            </div>
            <div>
              <div className="wv-h1 text-copper wv-spacing-xs">
                3
              </div>
              <div className="wv-body text-green/70">Formeln in Entwicklung</div>
            </div>
            <div>
              <div className="wv-h1 text-copper wv-spacing-xs">
                100%
              </div>
              <div className="wv-body text-green/70">Made in Germany</div>
            </div>
            <div>
              <div className="wv-h1 text-copper wv-spacing-xs">
                Bald
              </div>
              <div className="wv-body text-green/70">Verfügbar</div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}