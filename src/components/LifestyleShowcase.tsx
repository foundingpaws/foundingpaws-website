"use client";

import Image from "next/image";
import ScrollAnimation from "@/components/ScrollAnimation";
import FadeIn from "@/components/FadeIn";

const lifestyleShots = [
  {
    title: "Aktive Momente",
    description: "Für Hunde, die das Leben in vollen Zügen genießen",
    image: "/products/lifestyle/active-dog-park.svg",
    scenario: "Im Park spielen",
    benefits: ["Beweglichkeit", "Ausdauer", "Lebensfreude"]
  },
  {
    title: "Entspannte Ruhe",
    description: "Natürliche Beruhigung für stressige Situationen",
    image: "/products/lifestyle/calm-dog-home.svg",
    scenario: "Zu Hause entspannen",
    benefits: ["Stressabbau", "Bessere Schlafqualität", "Emotionale Balance"]
  },
  {
    title: "Glückliche Momente",
    description: "Für ein langes, gesundes Hundeleben",
    image: "/products/lifestyle/happy-dog-beach.svg",
    scenario: "Am Strand toben",
    benefits: ["Herzgesundheit", "Kognitive Funktion", "Vitalität"]
  }
];

export default function LifestyleShowcase() {
  return (
    <section className="wv-section bg-green text-cream">
      <div className="container-wide">
        {/* Header */}
        <FadeIn>
          <div className="text-center wv-spacing-2xl">
            <div className="inline-block pill bg-cream/15 border border-cream/25 px-5 py-2 wv-eyebrow wv-spacing-md text-cream">
              Echte Momente
            </div>
            <h2 className="wv-h2 wv-spacing-sm" style={{color: 'white'}}>
              Für jeden Hund, jeden Tag
            </h2>
            <div className="w-16 h-1 bg-copper mx-auto rounded-full wv-spacing-md"></div>
            <p className="wv-lead max-w-3xl mx-auto" style={{color: 'rgba(255, 255, 255, 0.9)'}}>
              Unsere Supplements begleiten deinen Hund durch alle Lebensphasen – 
              von verspielten Welpen bis zu entspannten Senioren.
            </p>
          </div>
        </FadeIn>

        {/* Lifestyle Grid */}
        <div className="grid gap-8 sm:gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {lifestyleShots.map((shot, idx) => (
            <ScrollAnimation 
              key={shot.title}
              animation="fade-in" 
              delay={idx * 200}
              className="group"
            >
              <div className="relative rounded-3xl overflow-hidden hover-lift-feature shadow-floating">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image 
                    src={shot.image} 
                    alt={`${shot.title} - ${shot.scenario}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green/80 via-green/20 to-transparent"></div>
                  
                  {/* Overlay Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="pill bg-cream/20 backdrop-blur-sm border border-cream/30 text-cream text-xs px-3 py-1 font-medium mb-3 inline-block">
                      {shot.scenario}
                    </div>
                    <h3 className="wv-h3 text-cream mb-2">
                      {shot.title}
                    </h3>
                    <p className="text-cream/90 text-sm mb-4">
                      {shot.description}
                    </p>
                    
                    {/* Benefits */}
                    <div className="flex flex-wrap gap-2">
                      {shot.benefits.map((benefit, benefitIdx) => (
                        <span 
                          key={benefitIdx}
                          className="pill bg-copper/20 border border-copper/30 text-cream text-xs px-2 py-1 font-medium"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* Call to Action */}
        <FadeIn delay={0.4}>
          <div className="mt-16 text-center">
            <div className="max-w-2xl mx-auto">
              <h3 className="wv-h3 text-cream mb-4">
                Finde das richtige Supplement für deinen Hund
              </h3>
              <p className="text-cream/90 mb-6">
                Unser Bedarfsfinder hilft dir dabei, die perfekte Formel für die individuellen 
                Bedürfnisse deines Hundes zu finden.
              </p>
              <a 
                href="#finder-mvp"
                className="btn-primary pill text-cream px-8 py-4 text-base font-medium hover-glow"
              >
                Bedarfsfinder starten →
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
