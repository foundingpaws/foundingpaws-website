import Link from "next/link";
import React from "react";
import Image from "next/image";
import ScrollAnimation from "@/components/ScrollAnimation";
import FadeIn from "@/components/FadeIn";
import GlassmorphismCard from "@/components/GlassmorphismCard";
import AnimatedCounter from "@/components/AnimatedCounter";
import IconHeart from "@/components/icons/IconHeart";
import IconScience from "@/components/icons/IconScience";
import IconNature from "@/components/icons/IconNature";
import IconTrust from "@/components/icons/IconTrust";
import IconDoctor from "@/components/icons/IconDoctor";
import IconInfinity from "@/components/icons/IconInfinity";
import IconPaw from "@/components/icons/IconPaw";
import IconRocket from "@/components/icons/IconRocket";
import IconSparkles from "@/components/icons/IconSparkles";
import IconLab from "@/components/icons/IconLab";
import IconShield from "@/components/icons/IconShield";
import IconTarget from "@/components/icons/IconTarget";
import IconBook from "@/components/icons/IconBook";
import IconBusiness from "@/components/icons/IconBusiness";
import "@/styles/timeline.css";

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
    year: "2024",
    quarter: "Q4",
    title: "Die Geburtsstunde",
    description: "Nachdem wir jahrelang beobachteten, wie herkömmliche Hundesupplements versagten, beschlossen wir, es besser zu machen. Die Idee zu Founding Paws war geboren.",
    image: "/Nala1.jpg",
    icon: IconSparkles
  },
  {
    year: "2025",
    quarter: "Q1",
    title: "Forschung & Entwicklung",
    description: "Intensive Zusammenarbeit mit Tierärzten und Wissenschaftlern. Jede Formel wird sorgfältig entwickelt und getestet.",
    image: "/mockups/Jackson.jpg",
    icon: IconLab
  },
  {
    year: "2025",
    quarter: "Q2",
    title: "Erste Erfolge",
    description: "Nala und Jackson wurden unsere ersten Produkttester. Ihre Begeisterung bestätigte uns: Wir sind auf dem richtigen Weg.",
    image: "/dog.png",
    icon: IconPaw
  },
  {
    year: "2025",
    quarter: "Q3",
    title: "Launch",
    description: "Die ersten Produkte kommen auf den Markt. Endlich können wir allen Hundebesitzern helfen, ihre Vierbeiner optimal zu versorgen.",
    image: "/mockups/bright-mind-boxes.png",
    icon: IconRocket
  },
  {
    year: "Heute",
    quarter: "",
    title: "Deine Mission",
    description: "Jetzt sind wir bereit, auch deinem Hund zu helfen. Gemeinsam schaffen wir ein gesünderes, glücklicheres Leben für alle Vierbeiner.",
    image: "/mockups/Tote Bag Mockup.png",
    icon: IconHeart
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
  { 
    number: 100, 
    suffix: "%", 
    label: "Natürliche Inhaltsstoffe",
    icon: IconNature,
    description: "Jede Zutat stammt aus der Natur"
  },
  { 
    number: 0, 
    label: "Künstliche Zusatzstoffe",
    icon: IconShield,
    description: "Keine Kompromisse bei der Qualität"
  },
  { 
    number: 3, 
    label: "Wissenschaftlich entwickelte Formeln",
    icon: IconScience,
    description: "Von Experten entwickelt und getestet"
  },
  { 
    number: 100, 
    label: "Zufriedene Kunden",
    icon: IconPaw,
    description: "Die bereits von uns profitieren"
  }
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

      {/* Our Story - Interactive Timeline */}
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

          {/* Horizontal Timeline with Scroll Snap */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-copper via-copper/50 to-copper transform -translate-y-1/2 z-0"></div>
            
            {/* Timeline Container with Scroll Snap */}
            <div className="overflow-x-auto scrollbar-hide timeline-container">
              <div className="flex lg:grid lg:grid-cols-5 gap-8 lg:gap-0 min-w-max lg:min-w-0 pb-8 lg:pb-0">
                {milestones.map((milestone, index) => (
                  <ScrollAnimation key={`${milestone.year}-${milestone.quarter}`} animation="fade-in" delay={index * 150}>
                    <div className="flex-shrink-0 w-80 lg:w-auto lg:relative timeline-item">
                      {/* Timeline Point */}
                      <div className="flex flex-col lg:items-center">
                        {/* Icon and Point */}
                        <div className="flex items-center lg:flex-col mb-6 lg:mb-8">
                          {/* Mobile: Icon on left */}
                          <div className="flex-shrink-0 w-16 h-16 bg-copper rounded-full flex items-center justify-center mr-4 lg:mr-0 lg:mb-4 shadow-lg z-10 relative timeline-point">
                            <milestone.icon className="w-8 h-8 text-white" />
                          </div>
                          
                          {/* Desktop: Timeline point */}
                          <div className="hidden lg:block w-6 h-6 bg-copper rounded-full border-4 border-cream shadow-lg z-10 relative timeline-point">
                            <div className="absolute inset-0 bg-copper rounded-full animate-pulse"></div>
                          </div>
                        </div>

                        {/* Content Card */}
                        <div className="timeline-card bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-taupe/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                          {/* Year and Quarter */}
                          <div className="flex items-center gap-2 mb-3">
                            <span className="text-copper font-bold text-lg">{milestone.year}</span>
                            {milestone.quarter && (
                              <>
                                <span className="text-taupe">•</span>
                                <span className="text-taupe font-medium">{milestone.quarter}</span>
                              </>
                            )}
                          </div>
                          
                          {/* Title */}
                          <h3 className="wv-h4 text-green wv-spacing-xs">
                            {milestone.title}
                          </h3>
                          
                          {/* Description */}
                          <p className="wv-body text-green/80 leading-relaxed mb-4">
                            {milestone.description}
                          </p>
                          
                          {/* Image with Enhanced Fade-In */}
                          <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                            <Image
                              src={milestone.image}
                              alt={milestone.title}
                              fill
                              className="timeline-image object-cover transition-all duration-500 hover:scale-105"
                              unoptimized
                            />
                            {/* Overlay for better text readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Werte - Enhanced Icon Grid */}
      <section className="wv-section bg-gradient-to-b from-cream to-taupe/5">
        <div className="container-wide">
          <ScrollAnimation>
            <div className="text-center wv-spacing-2xl">
              <h2 className="wv-h2 text-green wv-spacing-sm">
                Unsere Mission & Werte
              </h2>
              <div className="w-16 h-1 bg-copper mx-auto rounded-full wv-spacing-md"></div>
              <p className="wv-lead text-green/70 wv-spacing-md max-w-3xl mx-auto">
                Diese Prinzipien leiten uns jeden Tag und prägen jede Entscheidung, die wir treffen.
              </p>
            </div>
          </ScrollAnimation>

          {/* 4-Column Icon Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <ScrollAnimation key={value.title} animation="fade-in" delay={index * 150}>
                <div className="group relative">
                  {/* Hover Effect Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-${value.color}/5 to-${value.color === 'copper' ? 'green' : 'copper'}/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  {/* Content Card */}
                  <div className="relative bg-white/60 backdrop-blur-sm rounded-2xl p-8 text-center border border-taupe/20 hover:border-copper/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                    {/* Icon Container with Enhanced Styling */}
                    <div className="relative w-20 h-20 mx-auto mb-6">
                      <div className={`absolute inset-0 bg-gradient-to-br from-${value.color}/10 to-${value.color === 'copper' ? 'green' : 'copper'}/10 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500`}></div>
                      <div className={`relative w-full h-full bg-gradient-to-br from-${value.color} to-${value.color === 'copper' ? 'copper/80' : 'green/80'} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <value.icon className="w-10 h-10 text-white" />
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="wv-h4 text-green wv-spacing-sm group-hover:text-copper transition-colors duration-300">
                      {value.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="wv-body text-green/75 leading-relaxed group-hover:text-green/90 transition-colors duration-300">
                      {value.description}
                    </p>
                    
                    
                    {/* Decorative Element */}
                    <div className={`absolute top-4 right-4 w-2 h-2 bg-${value.color}/30 rounded-full group-hover:bg-${value.color}/60 transition-colors duration-300`}></div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Zahlen & Fakten - Animated Counters */}
      <section className="wv-section bg-gradient-to-br from-green via-green/95 to-green/90 text-cream relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(180,106,52,0.1),transparent_50%)]"></div>
        </div>
        
        <div className="container-wide relative z-10">
          <ScrollAnimation>
            <div className="text-center wv-spacing-2xl">
              <h2 className="wv-h2 wv-spacing-sm" style={{color: 'white'}}>
                Zahlen & Fakten
              </h2>
              <div className="w-16 h-1 bg-copper mx-auto rounded-full wv-spacing-md"></div>
              <p className="wv-lead wv-spacing-md max-w-3xl mx-auto" style={{color: 'rgba(255, 255, 255, 0.9)'}}>
                Qualität, die man messen kann – und Liebe, die man spürt.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <ScrollAnimation key={stat.label} animation="fade-in" delay={index * 200}>
                <div className="group text-center">
                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 text-copper">
                    <stat.icon className="w-full h-full" />
                  </div>
                  
                  {/* Animated Counter */}
                  <div className="mb-4">
                    <AnimatedCounter
                      end={stat.number}
                      suffix={stat.suffix || ''}
                      className="text-5xl font-bold text-copper group-hover:text-copper/90 transition-colors duration-300"
                    />
                  </div>
                  
                  {/* Label */}
                  <div className="wv-h4 mb-2" style={{color: 'white'}}>
                    {stat.label}
                  </div>
                  
                  {/* Description */}
                  <div className="wv-body text-sm" style={{color: 'rgba(255, 255, 255, 0.8)'}}>
                    {stat.description}
                  </div>
                  
                  {/* Decorative Line */}
                  <div className="w-12 h-1 bg-copper/50 mx-auto mt-4 group-hover:bg-copper transition-colors duration-300"></div>
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

      {/* Enhanced Call to Action */}
      <section className="wv-section bg-gradient-to-br from-copper/5 via-cream to-green/5 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-copper/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-green/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-wide relative z-10">
          <ScrollAnimation>
            <div className="text-center wv-spacing-2xl">
              <h2 className="wv-h2 text-green wv-spacing-sm">
                Bereit für die nächste Stufe?
              </h2>
              <div className="w-16 h-1 bg-copper mx-auto rounded-full wv-spacing-md"></div>
              <p className="wv-lead text-green/70 wv-spacing-md max-w-3xl mx-auto">
                Dein Hund verdient das Beste. Lass uns gemeinsam dafür sorgen, dass er ein langes, 
                gesundes und glückliches Leben führt.
              </p>
            </div>
          </ScrollAnimation>

          {/* CTA Grid */}
          <div className="grid md:grid-cols-2 gap-8 wv-spacing-lg">
            {/* Primary CTA - Products */}
            <ScrollAnimation animation="slide-up" delay={100}>
              <div className="group relative bg-gradient-to-br from-green to-green/90 rounded-3xl p-8 text-center text-white overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-copper/30 rounded-full blur-2xl"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-cream/20 rounded-full blur-xl"></div>
                </div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 mx-auto mb-4 text-white">
                    <IconPaw className="w-full h-full" />
                  </div>
                  <h3 className="wv-h3 mb-4">Entdecke unsere Produkte</h3>
                  <p className="wv-body mb-6 opacity-90">
                    Wissenschaftlich entwickelte Supplements für jeden Bedarf deines Hundes.
                  </p>
                  <Link 
                    href="/produkte" 
                    className="inline-block bg-copper hover:bg-copper/90 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  >
                    Jetzt entdecken →
                  </Link>
                </div>
              </div>
            </ScrollAnimation>

            {/* Secondary CTA - Team */}
            <ScrollAnimation animation="slide-up" delay={200}>
              <div className="group relative bg-gradient-to-br from-copper to-copper/90 rounded-3xl p-8 text-center text-white overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 left-0 w-28 h-28 bg-green/30 rounded-full blur-2xl"></div>
                  <div className="absolute bottom-0 right-0 w-20 h-20 bg-cream/20 rounded-full blur-xl"></div>
                </div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 mx-auto mb-4 text-white">
                    <IconBusiness className="w-full h-full" />
                  </div>
                  <h3 className="wv-h3 mb-4">Lerne unser Team kennen</h3>
                  <p className="wv-body mb-6 opacity-90">
                    Die Experten hinter unseren Produkten und ihre Leidenschaft für Hunde.
                  </p>
                  <Link 
                    href="/team" 
                    className="inline-block bg-green hover:bg-green/90 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  >
                    Team entdecken →
                  </Link>
                </div>
              </div>
            </ScrollAnimation>
          </div>

          {/* Additional CTA Row */}
          <div className="grid sm:grid-cols-3 gap-6 wv-spacing-lg">
            <ScrollAnimation animation="fade-in" delay={300}>
              <Link 
                href="/bedarfsfinder" 
                className="group bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center border border-taupe/20 hover:border-copper/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="w-12 h-12 mx-auto mb-3 text-copper">
                  <IconTarget className="w-full h-full" />
                </div>
                <h4 className="wv-h5 text-green mb-2 group-hover:text-copper transition-colors">Bedarfsfinder</h4>
                <p className="wv-caption text-green/70">Finde das perfekte Produkt</p>
              </Link>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-in" delay={400}>
              <Link 
                href="/ratgeber" 
                className="group bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center border border-taupe/20 hover:border-copper/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="w-12 h-12 mx-auto mb-3 text-copper">
                  <IconBook className="w-full h-full" />
                </div>
                <h4 className="wv-h5 text-green mb-2 group-hover:text-copper transition-colors">Ratgeber</h4>
                <p className="wv-caption text-green/70">Expertentipps für deinen Hund</p>
              </Link>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-in" delay={500}>
              <Link 
                href="/newsletter" 
                className="group bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center border border-taupe/20 hover:border-copper/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="w-12 h-12 mx-auto mb-3 text-copper">
                  <IconBusiness className="w-full h-full" />
                </div>
                <h4 className="wv-h5 text-green mb-2 group-hover:text-copper transition-colors">Newsletter</h4>
                <p className="wv-caption text-green/70">Bleibe auf dem Laufenden</p>
              </Link>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </main>
  );
}
