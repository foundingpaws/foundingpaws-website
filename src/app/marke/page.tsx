import React from "react";
import Image from "next/image";
import ScrollAnimation from "@/components/ScrollAnimation";
import FadeIn from "@/components/FadeIn";
import GlassmorphismCard from "@/components/GlassmorphismCard";
import IconHeart from "@/components/icons/IconHeart";
import IconScience from "@/components/icons/IconScience";
import IconNature from "@/components/icons/IconNature";
import IconTrust from "@/components/icons/IconTrust";
import IconDoctor from "@/components/icons/IconDoctor";
import IconInfinity from "@/components/icons/IconInfinity";

const values = [
  {
    icon: IconHeart,
    title: "Liebe zu Hunden",
    description: "Jeder Hund ist einzigartig und verdient die bestmögliche Versorgung. Wir verstehen die tiefe Bindung zwischen dir und deinem Vierbeiner.",
    color: "copper"
  },
  {
    icon: IconScience,
    title: "Wissenschaftliche Exzellenz",
    description: "Unsere Formeln basieren auf aktueller Forschung und werden von Tierärzten entwickelt. Jede Zutat ist sorgfältig ausgewählt.",
    color: "green"
  },
  {
    icon: IconNature,
    title: "Natürlichkeit",
    description: "Wir setzen auf die Kraft der Natur. Keine künstlichen Zusatzstoffe, keine Kompromisse bei der Qualität.",
    color: "taupe"
  },
  {
    icon: IconTrust,
    title: "Vertrauen",
    description: "Transparenz ist unser Versprechen. Du weißt immer, was in unseren Produkten enthalten ist und woher es kommt.",
    color: "copper"
  }
];

const milestones = [
  {
    year: "2025",
    title: "Die Geburtsstunde",
    description: "Nachdem wir jahrelang beobachteten, wie herkömmliche Hundesupplements versagten, beschlossen wir, es besser zu machen. Die Idee zu Founding Paws war geboren.",
    image: "/Nala1.jpg"
  },
  {
    year: "2025 Q2",
    title: "Erste Erfolge",
    description: "Nala und Jackson wurden unsere ersten Produkttester. Ihre Begeisterung bestätigte uns: Wir sind auf dem richtigen Weg.",
    image: "/mockups/Jackson.jpg"
  },
  {
    year: "Heute",
    title: "Deine Mission",
    description: "Jetzt sind wir bereit, auch deinem Hund zu helfen. Gemeinsam schaffen wir ein gesünderes, glücklicheres Leben für alle Vierbeiner.",
    image: "/dog.png"
  }
];

const testimonials = [
  {
    name: "Dr. Sarah Weber",
    role: "Tierärztin",
    quote: "Die wissenschaftliche Herangehensweise von Founding Paws überzeugt mich. Endlich Supplements, die wirklich funktionieren.",
    image: null
  },
  {
    name: "Michael Schmidt",
    role: "Hundebesitzer",
    quote: "Seit mein Max die Bright Mind Kapseln bekommt, ist er viel aufmerksamer und fröhlicher. Ein echter Unterschied!",
    image: null
  },
  {
    name: "Dr. Lisa Müller",
    role: "Verhaltensmedizinerin",
    quote: "Gentle Calm hat vielen meiner Patienten geholfen. Natürlich, wirksam und vertrauenswürdig.",
    image: null
  }
];

const stats = [
  { number: "100%", label: "Natürliche Inhaltsstoffe" },
  { number: "0", label: "Künstliche Zusatzstoffe" },
  { number: "3", label: "Wissenschaftlich entwickelte Formeln" },
  { number: "∞", label: "Liebe zu Hunden" }
];

export default function MarkePage() {
  return (
    <main className="bg-cream text-green">
      {/* Hero Section */}
      <section className="wv-section bg-green text-cream">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <div className="inline-block pill bg-cream/15 border border-cream/25 px-5 py-2 wv-eyebrow wv-spacing-md" style={{color: 'white'}}>
                Unsere Marke
              </div>
              <h1 className="wv-h1 wv-spacing-sm" style={{color: 'white'}}>
                Unsere Mission
              </h1>
              <div className="w-16 h-1 bg-copper mx-auto rounded-full wv-spacing-md"></div>
              <p className="wv-lead wv-spacing-md max-w-3xl mx-auto" style={{color: 'rgba(255, 255, 255, 0.9)'}}>
                Wir verstehen die tiefe Bindung zwischen dir und deinem Hund. Deshalb entwickeln wir 
                Supplements, die nicht nur wirken, sondern auch Vertrauen schaffen.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="wv-section bg-cream">
        <div className="container-wide">
          <ScrollAnimation>
            <div className="text-center wv-spacing-2xl">
              <h2 className="wv-h2 text-green wv-spacing-sm">
                Unsere Geschichte
              </h2>
              <div className="w-16 h-1 bg-copper mx-auto rounded-full wv-spacing-md"></div>
              <p className="wv-lead text-green/70 wv-spacing-md max-w-3xl mx-auto">
                Jede große Idee beginnt mit einer einfachen Beobachtung: Hunde verdienen das Beste.
              </p>
            </div>
          </ScrollAnimation>


          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <ScrollAnimation key={milestone.year} animation="slide-up" delay={index * 200}>
                <div className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
                  <div className={`${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                    <div className="text-copper font-bold text-lg mb-2">{milestone.year}</div>
                    <h3 className="wv-h3 text-green wv-spacing-sm">
                      {milestone.title}
                    </h3>
                    <p className="wv-body text-green/80 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                  <div className={`relative aspect-[4/3] rounded-2xl overflow-hidden ${index % 2 === 1 ? 'md:col-start-1' : ''}`}>
                    <Image
                      src={milestone.image}
                      alt={milestone.title}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="wv-section bg-gradient-to-b from-cream to-taupe/5">
        <div className="container-wide">
          <ScrollAnimation>
            <div className="text-center wv-spacing-2xl">
              <h2 className="wv-h2 text-green wv-spacing-sm">
                Unsere Werte
              </h2>
              <div className="w-16 h-1 bg-copper mx-auto rounded-full wv-spacing-md"></div>
              <p className="wv-lead text-green/70 wv-spacing-md max-w-3xl mx-auto">
                Diese Prinzipien leiten uns jeden Tag und prägen jede Entscheidung, die wir treffen.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <ScrollAnimation key={value.title} animation="fade-in" delay={index * 100}>
                <GlassmorphismCard className="p-6 text-center hover-lift-feature">
                  <div className="w-16 h-16 mx-auto wv-spacing-sm text-green">
                    <value.icon className="w-full h-full" />
                  </div>
                  <h3 className="wv-h4 text-green wv-spacing-xs">
                    {value.title}
                  </h3>
                  <p className="wv-body text-green/75">
                    {value.description}
                  </p>
                </GlassmorphismCard>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="wv-section bg-green text-cream">
        <div className="container-wide">
          <ScrollAnimation>
            <div className="text-center wv-spacing-2xl">
              <h2 className="wv-h2 wv-spacing-sm" style={{color: 'white'}}>
                Unsere Zahlen sprechen für sich
              </h2>
              <div className="w-16 h-1 bg-copper mx-auto rounded-full wv-spacing-md"></div>
              <p className="wv-lead wv-spacing-md max-w-3xl mx-auto" style={{color: 'rgba(255, 255, 255, 0.9)'}}>
                Qualität, die man messen kann – und Liebe, die man spürt.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <ScrollAnimation key={stat.label} animation="fade-in" delay={index * 100}>
                <div className="text-center">
                  <div className="text-4xl font-bold text-copper wv-spacing-sm">
                    {stat.number}
                  </div>
                  <div className="wv-body" style={{color: 'rgba(255, 255, 255, 0.9)'}}>
                    {stat.label}
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Testimonials */}
      <section className="wv-section bg-cream">
        <div className="container-wide">
          <ScrollAnimation>
            <div className="text-center wv-spacing-2xl">
              <h2 className="wv-h2 text-green wv-spacing-sm">
                Vertrauen von Experten
              </h2>
              <div className="w-16 h-1 bg-copper mx-auto rounded-full wv-spacing-md"></div>
              <p className="wv-lead text-green/70 wv-spacing-md max-w-3xl mx-auto">
                Tierärzte und Hundebesitzer vertrauen auf unsere Produkte – und das aus gutem Grund.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <ScrollAnimation key={testimonial.name} animation="slide-up" delay={index * 100}>
                <GlassmorphismCard className="p-6 text-center">
                  <div className="relative w-16 h-16 mx-auto mb-4 rounded-full overflow-hidden border-2 border-copper/20">
                    {testimonial.image ? (
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                        unoptimized
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-green/20 to-copper/20 flex items-center justify-center">
                        <IconDoctor className="w-8 h-8 text-green/60" />
                      </div>
                    )}
                  </div>
                  <blockquote className="wv-body text-green/80 italic wv-spacing-sm">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="font-medium text-green wv-spacing-xs">
                    {testimonial.name}
                  </div>
                  <div className="wv-caption text-copper">
                    {testimonial.role}
                  </div>
                </GlassmorphismCard>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="wv-section bg-gradient-to-b from-taupe/5 to-cream">
        <div className="container-wide">
          <ScrollAnimation>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div className="text-center lg:text-left">
                <h2 className="wv-h2 text-green wv-spacing-sm">
                  Unsere Mission
                </h2>
                <div className="w-16 h-1 bg-copper mx-auto lg:mx-0 rounded-full wv-spacing-md"></div>
                <p className="wv-lead text-green/70 wv-spacing-md">
                  Dein Hund verdient das Beste. Lass uns gemeinsam dafür sorgen, dass er ein langes, 
                  gesundes und glückliches Leben führt.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start wv-spacing-md">
                  <a href="/produkte" className="btn-primary pill text-cream px-8 py-4 font-medium">
                    Produkte entdecken
                  </a>
                  <a href="#finder-mvp" className="btn-secondary pill text-green px-8 py-4 font-medium">
                    Bedarfsfinder starten
                  </a>
                </div>
              </div>

              {/* Tote Bag Mockup */}
              <div className="relative">
                <ScrollAnimation animation="fade-in" delay={300}>
                  <div className="relative aspect-[4/5] max-w-md mx-auto">
                    <Image
                      src="/mockups/Tote Bag Mockup.png"
                      alt="Founding Paws Tote Bag - Nachhaltige Verpackung"
                      fill
                      className="object-contain drop-shadow-2xl"
                      unoptimized
                    />
                  </div>
                </ScrollAnimation>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-copper/20 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green/20 rounded-full animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 -left-8 w-4 h-4 bg-taupe/20 rounded-full animate-pulse delay-500"></div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </main>
  );
}
