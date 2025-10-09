"use client";

import FadeIn from "./FadeIn";
import Image from "next/image";
import Link from "next/link";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Anna & Coco",
    location: "München",
    image: "/customers/anna-coco.jpg",
    rating: 5,
    text: "Seit Coco Bright Mind bekommt, ist sie viel aufmerksamer und lernt neue Tricks schneller. Wir sind begeistert!",
    product: "Bright Mind"
  },
  {
    id: 2,
    name: "Michael & Max",
    location: "Berlin",
    image: "/customers/michael-max.jpg",
    rating: 5,
    text: "Max ist 12 Jahre alt und hatte Probleme mit den Gelenken. Nach 4 Wochen Vital Joints läuft er wieder wie ein junger Hund!",
    product: "Vital Joints"
  },
  {
    id: 3,
    name: "Sarah & Bella",
    location: "Hamburg",
    image: "/customers/sarah-bella.jpg",
    rating: 5,
    text: "Bella war immer sehr ängstlich bei Gewitter. Gentle Calm hat ihr geholfen, ruhiger zu werden. Danke!",
    product: "Gentle Calm"
  },
  {
    id: 4,
    name: "Thomas & Rocky",
    location: "Köln",
    image: "/customers/thomas-rocky.jpg",
    rating: 5,
    text: "Die Qualität ist einfach top! Rocky liebt die Leckerlis und ich sehe bereits nach 2 Wochen Verbesserungen.",
    product: "Bright Mind"
  },
  {
    id: 5,
    name: "Lisa & Luna",
    location: "Stuttgart",
    image: "/customers/lisa-luna.jpg",
    rating: 5,
    text: "Endlich ein Produkt, dem ich vertraue. Transparente Herkunft und Luna geht es sichtlich besser.",
    product: "Vital Joints"
  },
  {
    id: 6,
    name: "Hundeliebhaber",
    location: "Frankfurt",
    image: "/customers/happy-dog-1.jpg",
    rating: 5,
    text: "Mein Hund ist 8 Jahre alt und hat wieder so viel Energie wie ein Welpe. Die Formeln wirken wirklich!",
    product: "Bright Mind"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 lg:py-24 bg-cream">
      <div className="container-wide">
        <FadeIn>
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="wv-h2 text-charcoal mb-4">
              Was unsere Kunden sagen
            </h2>
            <p className="wv-lead text-taupe max-w-2xl mx-auto">
              Über 1000 zufriedene Hunde und ihre Menschen vertrauen auf unsere Formeln.
            </p>
          </div>
        </FadeIn>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={testimonial.id} delay={index * 100}>
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 ios-fix">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-primary/20" />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-accent fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-taupe text-sm leading-relaxed mb-6">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* Product Badge */}
                <div className="mb-4">
                  <span className="inline-block bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">
                    {testimonial.product}
                  </span>
                </div>

                {/* Customer Info */}
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                  <div>
                    <div className="font-medium text-charcoal text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-taupe text-xs">
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Bottom CTA */}
        <FadeIn delay={700}>
          <div className="text-center mt-12 lg:mt-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 max-w-4xl mx-auto">
              <h3 className="wv-h3 text-charcoal mb-4">
                Werde Teil unserer Community
              </h3>
              <p className="text-taupe mb-6 max-w-2xl mx-auto">
                Schließe dich über 1000 zufriedenen Hundebesitzern an und entdecke, wie unsere Formeln auch deinem Hund helfen können.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/bedarfsfinder"
                  className="btn-primary pill text-cream px-8 py-4 text-base font-medium shadow-lg hover:opacity-95 hover:scale-105 transition-all touch-padding"
                  style={{
                    WebkitTapHighlightColor: 'transparent',
                    WebkitTouchCallout: 'none',
                    WebkitUserSelect: 'none',
                    userSelect: 'none'
                  }}
                >
                  Bedarfsfinder starten
                </Link>
                <Link
                  href="/produkte"
                  className="btn-outline pill text-primary px-8 py-4 text-base font-medium hover:bg-primary hover:text-cream transition-all touch-padding"
                  style={{
                    WebkitTapHighlightColor: 'transparent',
                    WebkitTouchCallout: 'none',
                    WebkitUserSelect: 'none',
                    userSelect: 'none'
                  }}
                >
                  Alle Produkte ansehen
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
