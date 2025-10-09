"use client";

import FadeIn from "./FadeIn";
import IconBrainHeart from "./icons/IconBrainHeart";
import IconBone from "./icons/IconBone";
import IconSparkles from "./icons/IconSparkles";
import IconShield from "./icons/IconShield";

const features = [
  {
    icon: IconBrainHeart,
    title: "Wissenschaftlich fundiert",
    description: "Alle Formeln basieren auf aktuellen Studien und werden von Veterinärmedizinern entwickelt."
  },
  {
    icon: IconBone,
    title: "Handgefertigt in Deutschland",
    description: "Hochwertige Rohstoffe aus kontrolliertem Anbau, verarbeitet in Heilbronn."
  },
  {
    icon: IconSparkles,
    title: "Natürliche Inhaltsstoffe",
    description: "Keine künstlichen Zusatzstoffe, Konservierungsmittel oder Geschmacksverstärker."
  },
  {
    icon: IconShield,
    title: "100% vertrauensvoll",
    description: "Transparente Herkunft, regelmäßige Qualitätskontrollen und Geld-zurück-Garantie."
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container-wide">
        <FadeIn>
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="wv-h2 text-charcoal mb-4">
              Warum Founding Paws?
            </h2>
            <p className="wv-lead text-taupe max-w-2xl mx-auto">
              Wir setzen auf Qualität, Transparenz und wissenschaftliche Exzellenz – für das Wohl deines Hundes.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <FadeIn key={feature.title} delay={index * 100}>
              <div className="text-center group">
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 ios-fix">
                    <feature.icon className="w-8 h-8 lg:w-10 lg:h-10 text-primary" />
                  </div>
                  
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <h3 className="wv-h3 text-charcoal mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-taupe text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Bottom Stats */}
        <FadeIn delay={500}>
          <div className="mt-16 lg:mt-20 pt-12 lg:pt-16 border-t border-taupe/20">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-center">
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                  1000+
                </div>
                <div className="text-sm text-taupe">
                  Zufriedene Hunde
                </div>
              </div>
              
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                  99%
                </div>
                <div className="text-sm text-taupe">
                  Natürliche Inhaltsstoffe
                </div>
              </div>
              
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                  24/7
                </div>
                <div className="text-sm text-taupe">
                  Kundenbetreuung
                </div>
              </div>
              
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                  30
                </div>
                <div className="text-sm text-taupe">
                  Tage Geld-zurück
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
