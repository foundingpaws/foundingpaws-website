"use client";

import Image from "next/image";
import ScrollAnimation from "@/components/ScrollAnimation";
import FadeIn from "@/components/FadeIn";

const ingredients = [
  {
    name: "Omega-3 Fischöl",
    description: "Hochwertige Fettsäuren für kognitive Funktion und Herzgesundheit",
    image: "/products/ingredients/OMEGA-3 FISCHÖL New.png",
    benefits: ["Gehirnfunktion", "Herzgesundheit", "Entzündungshemmend"],
    color: "copper"
  },
  {
    name: "Glucosamin",
    description: "Natürlicher Gelenknährstoff für Beweglichkeit und Flexibilität",
    image: "/products/ingredients/Gelenk.png",
    benefits: ["Gelenkgesundheit", "Knorpelaufbau", "Beweglichkeit"],
    color: "green"
  },
  {
    name: "L-Theanin",
    description: "Aminosäure aus grünem Tee für natürliche Entspannung",
    image: "/products/ingredients/L-THEANIN .png",
    benefits: ["Stressreduktion", "Entspannung", "Bessere Schlafqualität"],
    color: "taupe"
  }
];

export default function IngredientsShowcase() {
  return (
    <section id="ingredients" className="wv-section-lg bg-gradient-to-b from-cream to-taupe/5">
      <div className="container-wide">
        {/* Header */}
        <FadeIn>
          <div className="text-center wv-spacing-2xl">
            <div className="inline-block pill bg-copper/15 border border-copper/25 px-5 py-2 wv-eyebrow wv-spacing-md text-copper">
              Wissenschaftlich fundiert
            </div>
            <h2 className="wv-h2 text-green wv-spacing-sm">
              Premium-Inhaltsstoffe
            </h2>
            <div className="w-16 h-1 bg-copper mx-auto rounded-full wv-spacing-md"></div>
            <p className="wv-lead text-green/70 max-w-3xl mx-auto">
              Jede Zutat wird sorgfältig ausgewählt und in optimaler Dosierung kombiniert – 
              für maximale Wirksamkeit und Sicherheit deines Hundes.
            </p>
          </div>
        </FadeIn>

        {/* Ingredients Grid */}
        <div className="grid gap-8 sm:gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {ingredients.map((ingredient, idx) => (
            <ScrollAnimation 
              key={ingredient.name}
              animation="slide-up" 
              delay={idx * 150}
              className="group"
            >
              <div className="bg-white/80 border border-green/10 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                {/* Ingredient Image */}
                <div className="relative aspect-square rounded-2xl overflow-hidden mb-6 bg-gradient-to-br from-cream to-taupe/10">
                  <Image 
                    src={ingredient.image} 
                    alt={`${ingredient.name} Detailaufnahme`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="space-y-4 flex-grow">
                  <h3 className="wv-h3 text-green">
                    {ingredient.name}
                  </h3>
                  <p className="wv-body text-green/75">
                    {ingredient.description}
                  </p>
                  
                  {/* Benefits */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-green/80 uppercase tracking-wide">
                      Wirkungen:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {ingredient.benefits.map((benefit, benefitIdx) => (
                        <span 
                          key={benefitIdx}
                          className={`pill text-xs px-3 py-1 font-medium ${
                            ingredient.color === 'copper' ? 'bg-copper/10 border border-copper/20 text-copper' :
                            ingredient.color === 'green' ? 'bg-green/10 border border-green/20 text-green' :
                            'bg-taupe/10 border border-taupe/20 text-taupe'
                          }`}
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

        {/* Trust Indicators */}
        <FadeIn delay={0.3}>
          <div className="mt-16 text-center">
            <div className="inline-flex flex-wrap justify-center gap-8 text-sm text-green/70">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-copper"></span>
                <span>Pharmazeutische Qualität</span>
              </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-copper"></span>
                  <span>Laborgeprüft</span>
                </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-copper"></span>
                <span>Ohne Zusatzstoffe</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-copper"></span>
                <span>Made in Germany</span>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
