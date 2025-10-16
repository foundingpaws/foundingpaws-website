"use client";

import { useState } from "react";
import Image from "next/image";
import ScrollAnimation from "@/components/ScrollAnimation";
import FadeIn from "@/components/FadeIn";
import GlassmorphismCard from "@/components/GlassmorphismCard";
import OptimizedImage from "@/components/OptimizedImage";
import LoadingButton from "@/components/LoadingButton";
import IconBrainHeart from "@/components/icons/IconBrainHeart";
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
    icon: IconBrainHeart,
    title: "Kognitive Unterstützung",
    description: "Natürliche Unterstützung für geistige Vitalität",
    scientific: "Omega-3 Fettsäuren sind wichtige Bausteine für das Gehirn"
  },
  {
    icon: IconHeart,
    title: "Herz-Kreislauf-Unterstützung",
    description: "Natürliche Unterstützung für Herz und Kreislauf",
    scientific: "EPA und DHA sind essentielle Fettsäuren für den Körper"
  },
  {
    icon: IconLeaf,
    title: "Antioxidative Unterstützung",
    description: "Natürliche Unterstützung für den Zellschutz",
    scientific: "Curcumin und Vitamin E haben antioxidative Eigenschaften"
  },
  {
    icon: IconTarget,
    title: "Energiestoffwechsel",
    description: "Unterstützung für den natürlichen Energiestoffwechsel",
    scientific: "L-Carnitin ist am Energiestoffwechsel beteiligt"
  }
];

const ingredients = [
  {
    name: "EPA & DHA",
    source: "Hochwertiges Fischöl aus nachhaltigem Fang",
    dosage: "500mg",
    benefit: "Essentielle Omega-3 Fettsäuren",
    scientific: "Wichtige Bausteine für Gehirn und Herz"
  },
  {
    name: "Curcumin",
    source: "Bio-Kurkuma aus kontrolliertem Anbau",
    dosage: "100mg",
    benefit: "Natürliches Antioxidans",
    scientific: "Höhere Bioverfügbarkeit durch Piperin"
  },
  {
    name: "Vitamin E",
    source: "Natürliches Tocopherol aus Sonnenblumen",
    dosage: "50mg",
    benefit: "Antioxidative Unterstützung",
    scientific: "Natürlicher Zellschutz"
  },
  {
    name: "L-Carnitin",
    source: "Pharmazeutische Qualität, GMP-zertifiziert",
    dosage: "200mg",
    benefit: "Unterstützung des Energiestoffwechsels",
    scientific: "Beteiligt am natürlichen Energiestoffwechsel"
  }
];

const testimonials = [
  {
    name: "Dr. Sarah Weber",
    role: "Tierärztin & Mitentwicklerin",
    quote: "Die Kombination aus Omega-3 und Curcumin basiert auf aktuellen wissenschaftlichen Erkenntnissen der Veterinärmedizin.",
    verified: true
  },
  {
    name: "Prof. Dr. Michael Schmidt",
    role: "Veterinärpharmakologe",
    quote: "Die Dosierungen orientieren sich an den aktuellen wissenschaftlichen Erkenntnissen der Veterinärmedizin.",
    verified: true
  }
];

const faq = [
  {
    question: "Ab welchem Alter kann ich Bright Mind geben?",
    answer: "Bright Mind ist speziell für Hunde ab 7 Jahren entwickelt. Bei jüngeren Hunden empfehlen wir eine individuelle Beratung mit unserem Tierarzt-Team."
  },
  {
    question: "Wie schnell sehe ich erste Ergebnisse?",
    answer: "Die ersten positiven Effekte sind meist nach 2-3 Wochen sichtbar. Für optimale Ergebnisse empfehlen wir eine kontinuierliche Einnahme über mindestens 8 Wochen."
  },
  {
    question: "Kann ich Bright Mind mit anderen Medikamenten kombinieren?",
    answer: "Ja, Bright Mind ist gut verträglich. Bei laufender Medikamenteneinnahme empfehlen wir jedoch eine Rücksprache mit Ihrem Tierarzt."
  },
  {
    question: "Was passiert bei Überdosierung?",
    answer: "Bei versehentlicher Überdosierung kann es zu weichem Stuhl kommen. Reduzieren Sie die Dosis und kontaktieren Sie uns bei Bedarf."
  }
];

export default function BrightMindPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.foundingpaws.de';

  const handleWaitlist = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage('');
    
    try {
      const res = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.toLowerCase().trim(), name: 'Liebe/r Hundefreund/in', source: 'bright-mind-waitlist' })
      });
      if (!res.ok) {
        const data = await res.json();
        setErrorMessage(data?.error || 'Fehler beim Anmelden. Bitte versuche es erneut.');
        setIsLoading(false);
        return;
      }
      
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      setErrorMessage('Ein unerwarteter Fehler ist aufgetreten.');
    }
    setIsLoading(false);
  };

  return (
    <main className="bg-cream text-green">
      <JsonLd schema={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Startseite', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: 'Produkte', item: `${siteUrl}/produkte` },
          { '@type': 'ListItem', position: 3, name: 'Bright Mind', item: `${siteUrl}/produkte/bright-mind` },
        ],
      }} />
      <JsonLd schema={{
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: 'Bright Mind',
        description: 'Für geistige Klarheit und Herzgesundheit bis ins hohe Alter. Wissenschaftlich entwickelt, tierärztlich empfohlen.',
        image: [`${siteUrl}/products/bright-mind/Bright Mind.png`],
        brand: { '@type': 'Brand', name: 'Founding Paws' },
        category: 'Animals & Pet Supplies > Pet Supplies > Dog Supplies > Dog Health Supplies',
        url: `${siteUrl}/produkte/bright-mind`,
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
                <div className="inline-block pill bg-white/15 border border-white/25 px-5 py-2 wv-eyebrow wv-spacing-md" style={{color: 'white'}}>
                  Kognition & Herzgesundheit
                </div>
                <h1 className="wv-h1 wv-spacing-sm" style={{color: 'white'}}>
                  Bright Mind
                </h1>
                <p className="wv-lead wv-spacing-md" style={{color: 'white'}}>
                  Für geistige Klarheit und Herzgesundheit bis ins hohe Alter. 
                  Wissenschaftlich entwickelt, tierärztlich empfohlen.
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
                    <strong>127 Hundehalter</strong> bereits auf der Warteliste
                  </div>
                </div>
                
                {/* Enhanced Urgency & Scarcity */}
                <div className="bg-gradient-to-r from-copper/20 to-copper/10 border border-copper/30 rounded-2xl p-6 wv-spacing-md">
                  <div className="flex items-center gap-3 font-bold text-lg wv-spacing-xs" style={{color: 'white'}}>
                    <span className="text-2xl animate-pulse">⚡</span>
                    <span>Nur noch 23 Plätze für die Warteliste verfügbar!</span>
                  </div>
                  <p className="wv-body wv-spacing-sm" style={{color: 'white'}}>
                    Sichere dir jetzt deinen exklusiven <strong>10% Launch-Rabatt</strong> und 
                    werde als Erste:r über die Verfügbarkeit informiert.
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
                    src="/products/bright-mind/Bright Mind.png"
                    alt="Bright Mind Produktbild"
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
                  Made in Germany
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
                Warum Bright Mind?
              </h2>
              <div className="w-16 h-1 bg-copper mx-auto rounded-full wv-spacing-md"></div>
              <p className="wv-lead text-green/70 wv-spacing-md max-w-3xl mx-auto">
                Vier wissenschaftlich validierte Wirkmechanismen für die 
                kognitive Gesundheit und Herzfunktion deines Hundes.
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
                  <h3 className="wv-h4 text-green wv-spacing-xs group-hover:text-copper transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="wv-body text-green/75 wv-spacing-sm flex-grow">
                    {benefit.description}
                  </p>
                  <div className="bg-gradient-to-r from-copper/10 to-copper/5 border border-copper/20 rounded-lg p-3 mt-4">
                    <div className="text-xs text-copper font-semibold mb-1">Wissenschaftlich belegt:</div>
                    <div className="text-xs text-green/80">
                      {benefit.scientific}
                    </div>
                  </div>
                </div>
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
      <section className="wv-section bg-gradient-to-b from-cream to-taupe/5">
        <div className="container-wide">
          <ScrollAnimation>
            <div className="text-center wv-spacing-2xl">
              <h2 className="wv-h2 text-green wv-spacing-sm">
                Transparente Inhaltsstoffe
              </h2>
              <div className="w-16 h-1 bg-copper mx-auto rounded-full wv-spacing-md"></div>
              <p className="wv-lead text-green/70 wv-spacing-md max-w-3xl mx-auto">
                Jeder Inhaltsstoff ist sorgfältig ausgewählt und wissenschaftlich dosiert. 
                Keine Füllstoffe, keine Kompromisse.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid lg:grid-cols-2 gap-8">
            {ingredients.map((ingredient, index) => (
              <ScrollAnimation key={ingredient.name} animation="fade-in" delay={index * 100}>
                <div className="p-6 hover-lift-feature bg-white rounded-2xl shadow-lg border border-green/20 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-copper/20 to-copper/10 rounded-xl flex items-center justify-center">
                        <IconLab className="w-8 h-8 text-copper" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between wv-spacing-xs">
                        <h3 className="wv-h4 text-green">{ingredient.name}</h3>
                        <span className="pill bg-copper/15 text-copper px-3 py-1 text-sm font-medium">
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
                </div>
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
                Unsere Formel wurde von führenden Veterinärexperten entwickelt und validiert.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <ScrollAnimation key={testimonial.name} animation="slide-up" delay={index * 100}>
                <div className="p-8 bg-white rounded-2xl shadow-lg border border-green/20">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-copper rounded-full flex items-center justify-center text-cream font-bold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1">
                      <h3 className="wv-h4 text-green wv-spacing-xs">
                        {testimonial.name}
                      </h3>
                      <p className="wv-body text-green/70 wv-spacing-xs">
                        {testimonial.role}
                      </p>
                      <blockquote className="wv-lead text-green/80 italic wv-spacing-sm">
                        "{testimonial.quote}"
                      </blockquote>
                      {testimonial.verified && (
                        <div className="flex items-center gap-2 text-copper text-sm">
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
                Alles was du über Bright Mind wissen musst.
              </p>
            </div>
          </ScrollAnimation>

          <div className="space-y-4">
            {faq.map((item, index) => (
              <ScrollAnimation key={index} animation="fade-in" delay={index * 100}>
                <div className="p-6 bg-white rounded-2xl shadow-lg border border-green/20">
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
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist CTA */}
      <section id="waitlist" className="wv-section bg-gradient-to-br from-green to-green/90 text-cream">
        <div className="container-wide">
          <ScrollAnimation>
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-block pill bg-white/20 border border-white/30 px-6 py-3 wv-eyebrow wv-spacing-sm text-white font-medium">
                  Exklusive Warteliste
                </div>
                <h2 className="wv-h2 text-white wv-spacing-sm">
                  Sei dabei, wenn Bright Mind verfügbar wird
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
                          className="w-full px-4 py-4 rounded-xl border border-cream/30 focus:border-copper focus:ring-2 focus:ring-copper/20 text-green bg-white/80 placeholder-green/50 text-lg"
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

                      {errorMessage && (
                        <div className="mt-4 p-4 bg-red/10 border border-red/20 rounded-xl">
                          <p className="text-red-600 font-medium text-center flex items-center justify-center gap-2">
                            <span className="text-xl">⚠️</span>
                            <span>{errorMessage}</span>
                          </p>
                        </div>
                      )}
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
