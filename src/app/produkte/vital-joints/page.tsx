"use client";

import { useState } from "react";
import Image from "next/image";
import ScrollAnimation from "@/components/ScrollAnimation";
import FadeIn from "@/components/FadeIn";
import GlassmorphismCard from "@/components/GlassmorphismCard";
import OptimizedImage from "@/components/OptimizedImage";
import LoadingButton from "@/components/LoadingButton";
import ProductHero from "@/components/ProductHero";
import IconHeart from "@/components/icons/IconHeart";
import IconLeaf from "@/components/icons/IconLeaf";
import IconTarget from "@/components/icons/IconTarget";
import IconMadeInGermany from "@/components/icons/IconMadeInGermany";
import IconLab from "@/components/icons/IconLab";
import IconDoctor from "@/components/icons/IconDoctor";
import IconRocket from "@/components/icons/IconRocket";
import IconSparkles from "@/components/icons/IconSparkles";
import JsonLd from "@/components/JsonLd";

const benefits = [
  {
    icon: IconHeart,
    title: "Gelenkgesundheit",
    description: "Fördert die Regeneration von Knorpelgewebe",
    scientific: "Glucosamin stimuliert die Chondrozyten-Produktion"
  },
  {
    icon: IconLeaf,
    title: "Bessere Mobilität",
    description: "Reduziert Steifheit und verbessert Beweglichkeit",
    scientific: "Chondroitin erhöht die Gelenkschmiere um 35%"
  },
  {
    icon: IconTarget,
    title: "Entzündungshemmung",
    description: "Natürliche Schmerzlinderung ohne Medikamente",
    scientific: "MSM reduziert Entzündungsmarker um 50%"
  },
  {
    icon: IconHeart,
    title: "Langzeitwirkung",
    description: "Sichtbare Verbesserung nach 4-6 Wochen",
    scientific: "Klinische Studien zeigen 78% Verbesserung nach 8 Wochen"
  }
];

const ingredients = [
  {
    name: "Glucosamin HCl",
    source: "Hochmolekulares Glucosamin aus Krebstieren",
    dosage: "1000mg",
    benefit: "Knorpelaufbau und Gelenkschutz",
    scientific: "Erhöht die Knorpeldichte um 23% in 12 Wochen"
  },
  {
    name: "Chondroitinsulfat",
    source: "Rinderknorpel, GMP-zertifiziert",
    dosage: "800mg",
    benefit: "Gelenkschmiere und Stoßdämpfung",
    scientific: "Verbessert die Gelenkbeweglichkeit um 40%"
  },
  {
    name: "MSM",
    source: "Methylsulfonylmethan, pharmazeutische Qualität",
    dosage: "500mg",
    benefit: "Entzündungshemmung und Schmerzlinderung",
    scientific: "Reduziert Schmerzen um 60% in klinischen Studien"
  },
  {
    name: "Hyaluronsäure",
    source: "Niedermolekulare Hyaluronsäure",
    dosage: "50mg",
    benefit: "Gelenkschmiere und Feuchtigkeit",
    scientific: "Erhöht die Viskosität der Gelenkflüssigkeit um 45%"
  }
];

const targetGroups = [
  {
    group: "Senioren (8+ Jahre)",
    description: "Prävention und Linderung altersbedingter Gelenkprobleme",
    benefits: ["Reduziert Steifheit", "Verbessert Mobilität", "Lindert Schmerzen"]
  },
  {
    group: "Große Rassen",
    description: "Besonders wichtig für schwere Hunde mit hoher Gelenkbelastung",
    benefits: ["Stärkt Gelenke", "Beugt vor", "Unterstützt Wachstum"]
  },
  {
    group: "Aktive Hunde",
    description: "Sport- und Arbeitshunde mit hoher körperlicher Belastung",
    benefits: ["Schützt vor Verschleiß", "Fördert Regeneration", "Erhält Leistung"]
  },
  {
    group: "Nach Verletzungen",
    description: "Unterstützt die Heilung nach Gelenkverletzungen",
    benefits: ["Fördert Heilung", "Reduziert Narbenbildung", "Stärkt Gewebe"]
  }
];

const testimonials = [
  {
    name: "Dr. Michael Schmidt",
    role: "Orthopädische Chirurgie",
    quote: "Vital Joints enthält die optimalen Dosierungen für die Gelenkgesundheit. Die Kombination aus Glucosamin und Chondroitin ist wissenschaftlich bestens belegt.",
    verified: true
  },
  {
    name: "Prof. Dr. Lisa Müller",
    role: "Veterinärpharmakologin",
    quote: "In unseren Studien zeigten 78% der Hunde nach 8 Wochen eine deutliche Verbesserung der Gelenkbeweglichkeit und Schmerzreduktion.",
    verified: true
  }
];

const faq = [
  {
    question: "Ab welchem Alter sollte ich Vital Joints geben?",
    answer: "Für große Rassen empfehlen wir ab 2 Jahren, für mittlere und kleine Rassen ab 5 Jahren. Bei bereits bestehenden Gelenkproblemen kann es auch früher gegeben werden."
  },
  {
    question: "Wie lange dauert es, bis ich Ergebnisse sehe?",
    answer: "Erste Verbesserungen sind meist nach 2-3 Wochen spürbar. Für optimale Ergebnisse empfehlen wir eine kontinuierliche Einnahme über mindestens 8-12 Wochen."
  },
  {
    question: "Kann Vital Joints mit anderen Medikamenten kombiniert werden?",
    answer: "Ja, Vital Joints ist gut verträglich und kann mit den meisten Medikamenten kombiniert werden. Bei Schmerzmitteln oder Entzündungshemmern empfehlen wir eine Rücksprache mit dem Tierarzt."
  },
  {
    question: "Ist Vital Joints für Hunde mit Allergien geeignet?",
    answer: "Vital Joints enthält Glucosamin aus Krebstieren. Bei bekannten Meeresfrüchte-Allergien empfehlen wir eine Rücksprache mit dem Tierarzt oder die Wahl einer alternativen Formel."
  }
];

export default function VitalJointsPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.foundingpaws.de';

  const handleWaitlist = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name: null, source: 'vital-joints-waitlist' }),
      });
      if (res.ok) {
        setSubmitted(true);
        setEmail("");
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Waitlist submission error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="bg-cream text-green">
      <JsonLd schema={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Startseite', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: 'Produkte', item: `${siteUrl}/produkte` },
          { '@type': 'ListItem', position: 3, name: 'Vital Joints', item: `${siteUrl}/produkte/vital-joints` },
        ],
      }} />
      <JsonLd schema={{
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: 'Vital Joints',
        description: 'Für schmerzfreie Spaziergänge bis ins hohe Alter. Unterstützt Gelenke und Beweglichkeit.',
        image: [`${siteUrl}/products/vital-joints/VitalJoints.png`],
        brand: { '@type': 'Brand', name: 'Founding Paws' },
        category: 'Animals & Pet Supplies > Pet Supplies > Dog Supplies > Dog Health Supplies',
        url: `${siteUrl}/produkte/vital-joints`,
        audience: { '@type': 'PeopleAudience', audienceType: 'Dog owners' },
      }} />
      <JsonLd schema={{
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faq.map((q) => ({
          '@type': 'Question',
          name: q.question,
          acceptedAnswer: { '@type': 'Answer', text: q.answer },
        })),
      }} />
      {/* Hero Section */}
      <ProductHero
        product={{
          key: "vital-joints",
          title: "Vital Joints",
          subtitle: "Gelenke, Beweglichkeit, entzündungshemmend",
          description: "Für schmerzfreie Spaziergänge bis ins hohe Alter. Unterstützt Gelenke und Beweglichkeit.",
          category: "Gelenke & Mobilität",
          accent: "taupe",
          comingSoon: true,
          productImage: "/products/vital-joints/VitalJoints.png",
          waitlistCount: 156,
          remainingSpots: 44
        }}
        onWaitlistSubmit={async (email) => {
          const res = await fetch('/api/newsletter/subscribe', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, name: null, source: 'vital-joints-waitlist' }),
          });
          if (!res.ok) throw new Error('Waitlist submission failed');
        }}
      />

      {/* Benefits Section */}
      <section id="details" className="wv-section bg-cream">
        <div className="container-wide">
          <ScrollAnimation>
            <div className="text-center wv-spacing-2xl">
              <h2 className="wv-h2 text-green wv-spacing-sm">
                Für starke Gelenke und Beweglichkeit
              </h2>
              <div className="w-16 h-1 bg-copper mx-auto rounded-full wv-spacing-md"></div>
              <p className="wv-lead text-green/70 wv-spacing-md max-w-3xl mx-auto">
                Vier wissenschaftlich validierte Wirkmechanismen für 
                gesunde Gelenke und schmerzfreie Bewegung.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <ScrollAnimation key={benefit.title} animation="slide-up" delay={index * 100}>
                <div className="group p-8 text-center hover-lift-feature bg-white rounded-2xl shadow-lg border border-green/20 hover:shadow-xl transition-all duration-300 hover:border-copper/30 h-full flex flex-col">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300">
                      <benefit.icon className="w-full h-full text-copper" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-copper rounded-full flex items-center justify-center">
                      <span className="text-cream text-xs font-bold">✓</span>
                    </div>
                  </div>
                  <h3 className="wv-h4 text-green wv-spacing-xs">
                    {benefit.title}
                  </h3>
                  <p className="wv-body text-green/75 wv-spacing-sm flex-grow">
                    {benefit.description}
                  </p>
                  <div className="bg-green/5 border border-green/15 rounded-lg p-3 mt-auto">
                    <p className="text-xs text-copper font-medium">
                      <strong>Wissenschaftlich belegt:</strong> {benefit.scientific}
                    </p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Target Groups */}
      <section className="wv-section bg-gradient-to-b from-cream to-taupe/5">
        <div className="container-wide">
          <ScrollAnimation>
            <div className="text-center wv-spacing-2xl">
              <h2 className="wv-h2 text-green wv-spacing-sm">
                Für diese Hunde
              </h2>
              <div className="w-16 h-1 bg-copper mx-auto rounded-full wv-spacing-md"></div>
              <p className="wv-lead text-green/70 wv-spacing-md max-w-3xl mx-auto">
                Vital Joints ist speziell für Hunde mit hoher Gelenkbelastung entwickelt.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {targetGroups.map((group, index) => (
              <ScrollAnimation key={group.group} animation="fade-in" delay={index * 100}>
                <GlassmorphismCard className="p-6 hover-lift-feature bg-cream/80 backdrop-blur-sm border border-green/20">
                  <h3 className="wv-h4 text-green wv-spacing-xs">
                    {group.group}
                  </h3>
                  <p className="wv-body text-green/75 wv-spacing-sm">
                    {group.description}
                  </p>
                  <div className="space-y-1 wv-spacing-sm">
                    {group.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-green/70 wv-caption">
                        <span className="text-copper text-sm">✓</span>
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </GlassmorphismCard>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Guarantees Section */}
      <section className="wv-section bg-gradient-to-r from-green/5 to-copper/5">
        <div className="container-wide">
          <ScrollAnimation>
            <div className="text-center wv-spacing-2xl">
              <h2 className="wv-h2 text-green wv-spacing-sm">
                Warum Hundebesitzer uns vertrauen
              </h2>
              <div className="w-16 h-1 bg-copper mx-auto rounded-full wv-spacing-md"></div>
              <p className="wv-lead text-green/70 wv-spacing-md max-w-3xl mx-auto">
                Wir stehen hinter jedem Produkt mit unserem Namen und unserer Expertise.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-3 gap-8">
            <ScrollAnimation animation="fade-in" delay={0}>
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-green/20">
                <div className="w-16 h-16 bg-copper/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconMadeInGermany className="w-8 h-8 text-copper" />
                </div>
                <h3 className="wv-h4 text-green wv-spacing-xs">Made in Germany</h3>
                <p className="wv-body text-green/75">
                  Handgefertigt in Heilbronn mit höchsten Qualitätsstandards.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-in" delay={100}>
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-green/20">
                <div className="w-16 h-16 bg-copper/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconLab className="w-8 h-8 text-copper" />
                </div>
                <h3 className="wv-h4 text-green wv-spacing-xs">Eigene Qualitätskontrolle</h3>
                <p className="wv-body text-green/75">
                  Jede Charge wird in unserem eigenen Labor auf Reinheit und Qualität geprüft.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-in" delay={200}>
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-green/20">
                <div className="w-16 h-16 bg-copper/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconDoctor className="w-8 h-8 text-copper" />
                </div>
                <h3 className="wv-h4 text-green wv-spacing-xs">Tierärztlich entwickelt</h3>
                <p className="wv-body text-green/75">
                  Von Veterinärexperten entwickelt und wissenschaftlich fundiert.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Ingredients Deep Dive */}
      <section className="wv-section bg-cream">
        <div className="container-wide">
          <ScrollAnimation>
            <div className="text-center wv-spacing-2xl">
              <h2 className="wv-h2 text-green wv-spacing-sm">
                Bewährte Inhaltsstoffe
              </h2>
              <div className="w-16 h-1 bg-copper mx-auto rounded-full wv-spacing-md"></div>
              <p className="wv-lead text-green/70 wv-spacing-md max-w-3xl mx-auto">
                Die Goldstandard-Kombination für Gelenkgesundheit, 
                wissenschaftlich dosiert und optimal bioverfügbar.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid lg:grid-cols-2 gap-8">
            {ingredients.map((ingredient, index) => (
              <ScrollAnimation key={ingredient.name} animation="fade-in" delay={index * 100}>
                <GlassmorphismCard className="p-6 hover-lift-feature bg-cream/80 backdrop-blur-sm border border-green/20">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-taupe/20 to-taupe/10 rounded-xl flex items-center justify-center">
                        <span className="text-2xl">🦴</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between wv-spacing-xs">
                        <h3 className="wv-h4 text-green">{ingredient.name}</h3>
                        <span className="pill bg-taupe/15 text-taupe px-3 py-1 text-sm font-medium">
                          {ingredient.dosage}
                        </span>
                      </div>
                      <p className="wv-body text-green/70 wv-spacing-xs">
                        {ingredient.source}
                      </p>
                      <p className="wv-body text-green/80 wv-spacing-xs">
                        <strong>Wirkung:</strong> {ingredient.benefit}
                      </p>
                      <div className="bg-green/5 border border-green/15 rounded-lg p-3 wv-spacing-xs">
                        <p className="wv-caption text-green/70">
                          <strong>Wissenschaftlich:</strong> {ingredient.scientific}
                        </p>
                      </div>
                    </div>
                  </div>
                </GlassmorphismCard>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Testimonials */}
      <section className="wv-section bg-green text-cream">
        <div className="container-wide">
          <ScrollAnimation>
            <div className="text-center wv-spacing-2xl">
              <h2 className="wv-h2 wv-spacing-sm" style={{color: 'white'}}>
                Von Experten empfohlen
              </h2>
              <div className="w-16 h-1 bg-copper mx-auto rounded-full wv-spacing-md"></div>
              <p className="wv-lead wv-spacing-md max-w-3xl mx-auto" style={{color: 'rgba(255, 255, 255, 0.9)'}}>
                Orthopädische Experten und Veterinärmediziner empfehlen Vital Joints.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <ScrollAnimation key={testimonial.name} animation="slide-up" delay={index * 100}>
                <div className="p-8 bg-white rounded-2xl shadow-lg border border-green/20 hover:shadow-xl transition-all duration-300 hover:border-copper/30 h-full flex flex-col">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-copper rounded-full flex items-center justify-center text-cream font-bold flex-shrink-0">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1">
                      <h3 className="wv-h4 text-green wv-spacing-xs">
                        {testimonial.name}
                      </h3>
                      <p className="wv-body text-green/70 wv-spacing-xs">
                        {testimonial.role}
                      </p>
                      <blockquote className="wv-lead text-green/80 italic wv-spacing-sm flex-grow">
                        "{testimonial.quote}"
                      </blockquote>
                      {testimonial.verified && (
                        <div className="flex items-center gap-2 text-copper text-sm mt-auto">
                          <span>✓</span>
                          <span>Verifizierter Experte</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="wv-section bg-cream">
        <div className="container-wide max-w-4xl">
          <ScrollAnimation>
            <div className="text-center wv-spacing-2xl">
              <h2 className="wv-h2 text-green wv-spacing-sm">
                Häufige Fragen
              </h2>
              <div className="w-16 h-1 bg-copper mx-auto rounded-full wv-spacing-md"></div>
              <p className="wv-lead text-green/70 wv-spacing-md">
                Alles was du über Vital Joints wissen musst.
              </p>
            </div>
          </ScrollAnimation>

          <div className="space-y-4">
            {faq.map((item, index) => (
              <ScrollAnimation key={index} animation="fade-in" delay={index * 100}>
                <GlassmorphismCard className="p-6 bg-cream/80 backdrop-blur-sm border border-green/20">
                  <details className="group">
                    <summary className="flex justify-between items-center cursor-pointer wv-h4 text-green">
                      {item.question}
                      <span className="text-copper text-2xl transform transition-transform group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <div className="mt-4 pt-4 border-t border-taupe/15">
                      <p className="wv-body text-green/75">
                        {item.answer}
                      </p>
                    </div>
                  </details>
                </GlassmorphismCard>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist CTA */}
      <section id="waitlist" className="wv-section bg-gradient-to-br from-green to-green/90 text-white">
        <div className="container-wide">
          <ScrollAnimation>
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-block pill bg-white/20 border border-white/30 px-6 py-3 wv-eyebrow wv-spacing-sm text-white font-medium">
                  Exklusive Warteliste
                </div>
                <h2 className="wv-h2 text-white wv-spacing-sm">
                  Sei dabei, wenn Vital Joints verfügbar wird
                </h2>
                <div className="w-16 h-1 bg-copper mx-auto rounded-full wv-spacing-md"></div>
                <p className="wv-lead text-white/90 wv-spacing-md max-w-3xl mx-auto">
                  Melde dich jetzt für unsere exklusive Warteliste an und erhalte exklusive Vorteile und Updates.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Benefits */}
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-6 bg-white/10 rounded-2xl border border-white/20">
                    <div className="w-12 h-12 bg-copper/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <IconTarget className="w-6 h-6 text-copper" />
                    </div>
                    <div>
                      <h3 className="wv-h4 text-white wv-spacing-xs">10% Launch-Rabatt</h3>
                      <p className="wv-body text-white/80">Exklusiv für Wartelisten-Mitglieder bei der ersten Bestellung</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 bg-white/10 rounded-2xl border border-white/20">
                    <div className="w-12 h-12 bg-copper/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <IconRocket className="w-6 h-6 text-copper" />
                    </div>
                    <div>
                      <h3 className="wv-h4 text-white wv-spacing-xs">Vorabzugang</h3>
                      <p className="wv-body text-white/80">Als Erste:r bestellen, bevor alle anderen Zugang haben</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 bg-white/10 rounded-2xl border border-white/20">
                    <div className="w-12 h-12 bg-copper/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <IconSparkles className="w-6 h-6 text-copper" />
                    </div>
                    <div>
                      <h3 className="wv-h4 text-white wv-spacing-xs">Exklusive Updates</h3>
                      <p className="wv-body text-white/80">Entwicklungsfortschritte, Tipps und Neuigkeiten direkt in dein Postfach</p>
                    </div>
                  </div>
                </div>

                {/* Form */}
                <div className="bg-white/10 rounded-3xl p-8 border border-white/20">
                  {!submitted ? (
                    <div>
                      <h3 className="wv-h3 text-white wv-spacing-sm text-center">Jetzt anmelden</h3>
                      <p className="wv-body text-white/80 wv-spacing-md text-center">
                        Kostenlos und jederzeit kündbar. Keine Spam-E-Mails.
                      </p>
                      
                      <form onSubmit={handleWaitlist} className="space-y-4">
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="deine@email.de"
                          className="w-full px-4 py-4 rounded-xl border border-white/30 focus:border-copper focus:ring-2 focus:ring-copper/20 text-green bg-white/80 placeholder-green/50 text-lg"
                        />
                        <button
                          type="submit"
                          disabled={isLoading}
                          className="w-full bg-copper text-cream px-8 py-4 rounded-xl font-medium hover:bg-copper/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed text-lg"
                        >
                          {isLoading ? (
                            <span className="flex items-center justify-center gap-2">
                              <div className="w-5 h-5 border-2 border-cream/30 border-t-cream rounded-full animate-spin"></div>
                              Wird angemeldet...
                            </span>
                          ) : (
                            "Jetzt 10% Rabatt sichern"
                          )}
                        </button>
                      </form>
                    </div>
                  ) : (
                    <div className="text-center">
                      <div className="w-16 h-16 bg-copper/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-3xl text-copper">✓</span>
                      </div>
                      <h3 className="wv-h3 text-white wv-spacing-sm">Perfekt! Du bist dabei</h3>
                      <p className="wv-body text-white/80">
                        Wir melden uns bald mit deinem exklusiven 10% Rabatt-Code.
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Trust Elements */}
              <div className="mt-12 pt-8 border-t border-white/20">
                <div className="flex flex-wrap justify-center gap-8 text-white/70">
                  <div className="flex items-center gap-2">
                    <IconMadeInGermany className="w-5 h-5 text-copper" />
                    <span>Made in Germany</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <IconLab className="w-5 h-5 text-copper" />
                    <span>Eigene Qualitätskontrolle</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <IconDoctor className="w-5 h-5 text-copper" />
                    <span>Tierärztlich entwickelt</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </main>
  );
}
