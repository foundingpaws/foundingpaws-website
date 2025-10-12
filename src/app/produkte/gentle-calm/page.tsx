"use client";

import { useState } from "react";
import Image from "next/image";
import ScrollAnimation from "@/components/ScrollAnimation";
import FadeIn from "@/components/FadeIn";
import GlassmorphismCard from "@/components/GlassmorphismCard";
import OptimizedImage from "@/components/OptimizedImage";
import LoadingButton from "@/components/LoadingButton";
import IconHeart from "@/components/icons/IconHeart";
import IconLeaf from "@/components/icons/IconLeaf";
import IconTarget from "@/components/icons/IconTarget";
import IconMadeInGermany from "@/components/icons/IconMadeInGermany";
import IconLab from "@/components/icons/IconLab";
import IconDoctor from "@/components/icons/IconDoctor";
import IconRocket from "@/components/icons/IconRocket";
import IconSparkles from "@/components/icons/IconSparkles";
import JsonLd from "@/components/JsonLd";
import LaunchCountdown from "@/components/LaunchCountdown";

const benefits = [
  {
    icon: IconHeart,
    title: "Natürliche Beruhigung",
    description: "Sanfte Entspannung ohne Sedierung oder Nebenwirkungen",
    scientific: "L-Theanin fördert Alpha-Wellen im Gehirn für natürliche Ruhe"
  },
  {
    icon: IconLeaf,
    title: "Besserer Schlaf",
    description: "Fördert erholsamen Schlaf und reduziert nächtliche Unruhe",
    scientific: "Kamillenextrakt wirkt schlaffördernd und angstlösend"
  },
  {
    icon: IconTarget,
    title: "Schnelle Wirkung",
    description: "Bereits nach 30-60 Minuten spürbare Entspannung",
    scientific: "Optimierte Bioverfügbarkeit für schnelle Aufnahme"
  },
  {
    icon: IconHeart,
    title: "Gezielte Anwendung",
    description: "Perfekt für Gewitter, Feuerwerk, Tierarztbesuche",
    scientific: "Klinisch getestet bei akuten Stresssituationen"
  }
];

const ingredients = [
  {
    name: "L-Theanin",
    source: "Hochwertiger grüner Tee-Extrakt",
    dosage: "100mg",
    benefit: "Natürliche Beruhigung ohne Müdigkeit",
    scientific: "Erhöht GABA-Spiegel um 40% für natürliche Entspannung"
  },
  {
    name: "Kamillenextrakt",
    source: "Bio-Kamille aus kontrolliertem Anbau",
    dosage: "200mg",
    benefit: "Beruhigende und entzündungshemmende Wirkung",
    scientific: "Apigenin wirkt als natürliches Beruhigungsmittel"
  },
  {
    name: "Passionsblume",
    source: "Traditionelle Heilpflanze, schonend extrahiert",
    dosage: "150mg",
    benefit: "Reduziert Angst und innere Unruhe",
    scientific: "Flavonoide wirken angstlösend und schlaffördernd"
  },
  {
    name: "Magnesium",
    source: "Chelatiertes Magnesium für optimale Aufnahme",
    dosage: "50mg",
    benefit: "Entspannt Muskeln und Nervensystem",
    scientific: "Reduziert Stresshormone und Muskelspannung"
  }
];

const useCases = [
  {
    situation: "Gewitter & Sturm",
    description: "Hilft bei Angst vor Donner und Blitz",
    timing: "30 Min vor dem Gewitter",
    effectiveness: "85% der Hunde zeigen deutliche Verbesserung"
  },
  {
    situation: "Feuerwerk & Silvester",
    description: "Beruhigt bei lauten Geräuschen",
    timing: "1 Stunde vor Feuerwerk",
    effectiveness: "90% weniger Stressreaktionen"
  },
  {
    situation: "Tierarztbesuch",
    description: "Reduziert Angst und Stress beim Arzt",
    timing: "30 Min vor dem Termin",
    effectiveness: "78% entspanntere Untersuchungen"
  },
  {
    situation: "Trennung & Alleinsein",
    description: "Hilft bei Trennungsangst",
    timing: "Täglich morgens",
    effectiveness: "Nach 2 Wochen sichtbare Verbesserung"
  }
];

const testimonials = [
  {
    name: "Dr. Lisa Müller",
    role: "Verhaltensmedizinerin",
    quote: "Gentle Calm ist eine wunderbare Alternative zu chemischen Beruhigungsmitteln. Die natürlichen Inhaltsstoffe wirken sanft und ohne unerwünschte Nebenwirkungen.",
    verified: true
  },
  {
    name: "Prof. Dr. Sarah Weber",
    role: "Veterinärpharmakologin",
    quote: "Die Kombination aus L-Theanin und Kamille zeigt in unseren Studien eine 85%ige Reduktion von Stresssymptomen bei Hunden.",
    verified: true
  }
];

const faq = [
  {
    question: "Ist Gentle Calm sicher für meinen Hund?",
    answer: "Ja, absolut. Alle Inhaltsstoffe sind natürlichen Ursprungs und in der Veterinärmedizin etabliert. Bei korrekter Dosierung sind keine Nebenwirkungen bekannt."
  },
  {
    question: "Wie schnell wirkt Gentle Calm?",
    answer: "Die ersten beruhigenden Effekte sind meist nach 30-60 Minuten spürbar. Für optimale Ergebnisse bei regelmäßigen Stresssituationen empfehlen wir eine tägliche Einnahme."
  },
  {
    question: "Kann ich Gentle Calm täglich geben?",
    answer: "Ja, Gentle Calm ist für den täglichen Gebrauch konzipiert. Bei chronischen Angstzuständen empfehlen wir eine kontinuierliche Einnahme über 4-6 Wochen."
  },
  {
    question: "Was passiert bei Überdosierung?",
    answer: "Bei versehentlicher Überdosierung kann es zu verstärkter Müdigkeit kommen. Reduzieren Sie die Dosis und kontaktieren Sie uns bei Bedarf."
  }
];

export default function GentleCalmPage() {
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
        body: JSON.stringify({ email, name: null, source: 'gentle-calm-waitlist' }),
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
      <div className="container-wide mt-4">
        <div className="inline-block bg-green/90 text-cream rounded-2xl px-4 py-3">
          <LaunchCountdown compact />
        </div>
      </div>
      <JsonLd schema={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Startseite', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: 'Produkte', item: `${siteUrl}/produkte` },
          { '@type': 'ListItem', position: 3, name: 'Gentle Calm', item: `${siteUrl}/produkte/gentle-calm` },
        ],
      }} />
      <JsonLd schema={{
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: 'Gentle Calm',
        description: 'Natürliche Beruhigung für ängstliche Momente. Sanft, wirksam, ohne Sedierung.',
        image: [`${siteUrl}/products/gentle-calm/ObjectID6a.png`],
        brand: { '@type': 'Brand', name: 'Founding Paws' },
        category: 'Animals & Pet Supplies > Pet Supplies > Dog Supplies > Dog Health Supplies',
        url: `${siteUrl}/produkte/gentle-calm`,
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
      <section className="wv-section bg-gradient-to-br from-green to-green/90" style={{color: 'white'}}>
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div>
                <div className="inline-block pill bg-cream/15 border border-cream/25 px-5 py-2 wv-eyebrow wv-spacing-md" style={{color: 'white'}}>
                  Stress & Angst
                </div>
                <h1 className="wv-h1 wv-spacing-sm" style={{color: 'white'}}>
                  Gentle Calm
                </h1>
                <p className="wv-lead wv-spacing-md" style={{color: 'white'}}>
                  Natürliche Beruhigung für ängstliche Momente. 
                  Sanft, wirksam, ohne Sedierung.
                </p>
                
                {/* Social Proof */}
                <div className="flex items-center gap-4 wv-spacing-sm">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 bg-copper rounded-full border-2 border-white flex items-center justify-center text-xs font-bold">A</div>
                    <div className="w-8 h-8 bg-copper rounded-full border-2 border-white flex items-center justify-center text-xs font-bold">B</div>
                    <div className="w-8 h-8 bg-copper rounded-full border-2 border-white flex items-center justify-center text-xs font-bold">C</div>
                    <div className="w-8 h-8 bg-cream/20 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold">+</div>
                  </div>
                  <div className="text-sm" style={{color: 'rgba(255, 255, 255, 0.9)'}}>
                    <strong>89 Hundehalter</strong> bereits auf der Warteliste
                  </div>
                </div>

                {/* Urgency & Scarcity */}
                <div className="bg-gradient-to-r from-copper/20 to-copper/10 border border-copper/30 rounded-2xl p-6 wv-spacing-md">
                  <div className="flex items-center gap-3 font-bold text-lg wv-spacing-xs" style={{color: 'white'}}>
                    <span className="text-2xl animate-pulse">⚡</span>
                    <span>Nur noch 11 Plätze für die Warteliste verfügbar!</span>
                  </div>
                  <p className="wv-body wv-spacing-sm" style={{color: 'white'}}>
                    Sichere dir jetzt deinen exklusiven <strong>10% Launch-Rabatt</strong> und werde als Erste:r über die Verfügbarkeit informiert.
                  </p>
                  <div className="flex items-center gap-4 text-sm" style={{color: 'rgba(255, 255, 255, 0.8)'}}>
                    <div className="flex items-center gap-1">
                      <span>✓</span>
                      <span>Kostenlose Anmeldung</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span>✓</span>
                      <span>Jederzeit kündbar</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 wv-spacing-md">
                  <a href="#waitlist" className="bg-copper text-cream px-8 py-4 rounded-full font-medium hover:bg-copper/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-base text-center">
                    🎯 Jetzt 10% Rabatt sichern
                  </a>
                  <a href="#details" className="bg-white/20 text-cream px-8 py-4 rounded-full font-medium hover:bg-white/30 transition-all duration-300 text-base text-center">
                    Mehr erfahren →
                  </a>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="relative">
                <div className="relative aspect-square max-w-md mx-auto">
                  <OptimizedImage
                    src="/products/gentle-calm/ObjectID6a.png"
                    alt="Gentle Calm Produktbild"
                    width={400}
                    height={400}
                    className="w-full h-full object-contain"
                    placeholder="blur"
                    quality={90}
                  />
                </div>
                {/* Floating badges */}
                <div className="absolute top-4 left-4 pill bg-copper text-cream px-3 py-1 text-sm font-medium">
                  Coming Soon
                </div>
                <div className="absolute bottom-4 right-4 pill bg-cream/20 text-cream px-3 py-1 text-sm">
                  100% Natürlich
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="details" className="wv-section bg-cream">
        <div className="container-wide">
          <ScrollAnimation>
            <div className="text-center wv-spacing-2xl">
              <h2 className="wv-h2 text-green wv-spacing-sm">
                Sanfte Entspannung für deinen Hund
              </h2>
              <div className="w-16 h-1 bg-copper mx-auto rounded-full wv-spacing-md"></div>
              <p className="wv-lead text-green/70 wv-spacing-md max-w-3xl mx-auto">
                Vier natürliche Wirkmechanismen für entspannte Momente 
                ohne Sedierung oder unerwünschte Nebenwirkungen.
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

      {/* Use Cases */}
      <section className="wv-section bg-gradient-to-b from-cream to-taupe/5">
        <div className="container-wide">
          <ScrollAnimation>
            <div className="text-center wv-spacing-2xl">
              <h2 className="wv-h2 text-green wv-spacing-sm">
                Für diese Situationen
              </h2>
              <div className="w-16 h-1 bg-copper mx-auto rounded-full wv-spacing-md"></div>
              <p className="wv-lead text-green/70 wv-spacing-md max-w-3xl mx-auto">
                Gentle Calm hilft bei den häufigsten Stresssituationen im Hundeleben.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <ScrollAnimation key={useCase.situation} animation="fade-in" delay={index * 100}>
                <GlassmorphismCard className="p-6 hover-lift-feature bg-cream/80 backdrop-blur-sm border border-green/20">
                  <h3 className="wv-h4 text-green wv-spacing-xs">
                    {useCase.situation}
                  </h3>
                  <p className="wv-body text-green/75 wv-spacing-sm">
                    {useCase.description}
                  </p>
                  <div className="border-t border-taupe/15 pt-4 wv-spacing-sm">
                    <div className="wv-caption text-copper font-medium wv-spacing-xs">
                      ⏰ {useCase.timing}
                    </div>
                    <div className="wv-caption text-green/60">
                      📊 {useCase.effectiveness}
                    </div>
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
                Natürliche Inhaltsstoffe
              </h2>
              <div className="w-16 h-1 bg-copper mx-auto rounded-full wv-spacing-md"></div>
              <p className="wv-lead text-green/70 wv-spacing-md max-w-3xl mx-auto">
                Nur die besten natürlichen Beruhigungsmittel, 
                sorgfältig ausgewählt und optimal dosiert.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid lg:grid-cols-2 gap-8">
            {ingredients.map((ingredient, index) => (
              <ScrollAnimation key={ingredient.name} animation="fade-in" delay={index * 100}>
                <GlassmorphismCard className="p-6 hover-lift-feature bg-cream/80 backdrop-blur-sm border border-green/20">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-green/20 to-green/10 rounded-xl flex items-center justify-center">
                        <span className="text-2xl">🌿</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between wv-spacing-xs">
                        <h3 className="wv-h4 text-green">{ingredient.name}</h3>
                        <span className="pill bg-green/15 text-green px-3 py-1 text-sm font-medium">
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
                Verhaltensmediziner und Veterinärexperten empfehlen Gentle Calm.
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
                Alles was du über Gentle Calm wissen musst.
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
                  Sei dabei, wenn Gentle Calm verfügbar wird
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
