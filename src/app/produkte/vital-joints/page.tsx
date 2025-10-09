"use client";

import { useState } from "react";
import Image from "next/image";
import ScrollAnimation from "@/components/ScrollAnimation";
import FadeIn from "@/components/FadeIn";
import GlassmorphismCard from "@/components/GlassmorphismCard";
import OptimizedImage from "@/components/OptimizedImage";
import LoadingButton from "@/components/LoadingButton";

const benefits = [
  {
    icon: "🦴",
    title: "Gelenkgesundheit",
    description: "Fördert die Regeneration von Knorpelgewebe",
    scientific: "Glucosamin stimuliert die Chondrozyten-Produktion"
  },
  {
    icon: "🏃",
    title: "Bessere Mobilität",
    description: "Reduziert Steifheit und verbessert Beweglichkeit",
    scientific: "Chondroitin erhöht die Gelenkschmiere um 35%"
  },
  {
    icon: "💪",
    title: "Entzündungshemmung",
    description: "Natürliche Schmerzlinderung ohne Medikamente",
    scientific: "MSM reduziert Entzündungsmarker um 50%"
  },
  {
    icon: "⏰",
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

  const handleWaitlist = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, product: 'vital-joints' }),
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
      {/* Hero Section */}
      <section className="wv-section bg-gradient-to-br from-green to-green/90" style={{color: 'white'}}>
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div>
                <div className="inline-block pill bg-cream/15 border border-cream/25 px-5 py-2 wv-eyebrow wv-spacing-md" style={{color: 'white'}}>
                  Gelenke & Mobilität
                </div>
                <h1 className="wv-h1 wv-spacing-sm" style={{color: 'white'}}>
                  Vital Joints
                </h1>
                <p className="wv-lead wv-spacing-md" style={{color: 'white'}}>
                  Für schmerzfreie Spaziergänge bis ins hohe Alter. 
                  Unterstützt Gelenke und Beweglichkeit.
                </p>
                
                {/* Social Proof */}
                <div className="bg-copper/20 border border-copper/30 rounded-2xl p-4 wv-spacing-md">
                  <div className="flex items-center gap-2 font-medium wv-spacing-xs" style={{color: 'white'}}>
                    <span className="text-lg">📊</span>
                    <span>78% der Hunde zeigen Verbesserung nach 8 Wochen</span>
                  </div>
                  <p className="wv-body" style={{color: 'white'}}>
                    Klinische Studien belegen die Wirksamkeit unserer Formel. 
                    Dein Hund verdient ein schmerzfreies, aktives Leben.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 wv-spacing-md">
                  <a href="#waitlist" className="btn-primary pill text-cream px-8 py-4 text-base font-medium">
                    Jetzt für Warteliste anmelden
                  </a>
                  <a href="#details" className="btn-secondary pill text-cream px-8 py-4 text-base font-medium">
                    Mehr erfahren
                  </a>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="relative">
                <div className="relative aspect-square max-w-md mx-auto">
                  <OptimizedImage
                    src="/products/vital-joints/VitalJoints.png"
                    alt="Vital Joints Produktbild"
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
                  Klinisch getestet
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
                <GlassmorphismCard className="p-6 text-center hover-lift-feature bg-cream/80 backdrop-blur-sm border border-green/20">
                  <div className="text-4xl wv-spacing-sm">{benefit.icon}</div>
                  <h3 className="wv-h4 text-green wv-spacing-xs">
                    {benefit.title}
                  </h3>
                  <p className="wv-body text-green/75 wv-spacing-sm">
                    {benefit.description}
                  </p>
                  <div className="text-xs text-copper font-medium bg-copper/10 px-2 py-1 rounded">
                    {benefit.scientific}
                  </div>
                </GlassmorphismCard>
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
                <GlassmorphismCard className="p-8 bg-cream/90 backdrop-blur-sm border border-cream/30">
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
                </GlassmorphismCard>
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
      <section id="waitlist" className="wv-section bg-gradient-to-br from-copper to-copper/80 text-cream">
        <div className="container-wide">
          <ScrollAnimation>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="wv-h2 text-cream wv-spacing-sm">
                Gib deinem Hund die Beweglichkeit zurück
              </h2>
              <div className="w-16 h-1 bg-cream mx-auto rounded-full wv-spacing-md"></div>
              <p className="wv-lead text-cream/90 wv-spacing-md">
                Melde dich jetzt für unsere exklusive Warteliste an und erhalte:
              </p>

              <div className="grid sm:grid-cols-3 gap-6 wv-spacing-md">
                <div className="text-center">
                  <div className="text-3xl wv-spacing-sm">🎯</div>
                  <h3 className="wv-h4 text-cream wv-spacing-xs">10% Launch-Rabatt</h3>
                  <p className="wv-body text-cream/80">Exklusiv für Wartelisten-Mitglieder</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl wv-spacing-sm">⚡</div>
                  <h3 className="wv-h4 text-cream wv-spacing-xs">Vorabzugang</h3>
                  <p className="wv-body text-cream/80">Als Erste:r bestellen, bevor alle anderen</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl wv-spacing-sm">📧</div>
                  <h3 className="wv-h4 text-cream wv-spacing-xs">Exklusive Updates</h3>
                  <p className="wv-body text-cream/80">Entwicklungsfortschritte und Tipps</p>
                </div>
              </div>

              {!submitted ? (
                <form onSubmit={handleWaitlist} className="max-w-md mx-auto wv-spacing-md">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="deine@email.de"
                      className="form-input-premium flex-1 border-cream/30 focus:border-cream focus:ring-cream/20 text-green"
                    />
                    <LoadingButton
                      type="submit"
                      loading={isLoading}
                      className="btn-primary pill text-copper bg-cream px-8 py-4 font-medium whitespace-nowrap"
                    >
                      Jetzt anmelden
                    </LoadingButton>
                  </div>
                  <p className="wv-caption text-cream/70 wv-spacing-sm">
                    Keine Sorge – wir spammen nicht. Nur hochwertige Updates, versprochen.
                  </p>
                </form>
              ) : (
                <div className="pill bg-cream/20 border border-cream/30 text-cream px-8 py-4 inline-flex items-center gap-2 text-lg wv-spacing-md">
                  <span>✓</span> Perfekt! Du bist dabei – wir melden uns bald.
                </div>
              )}

              <div className="flex flex-wrap justify-center gap-6 text-cream/70 wv-spacing-md">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cream"></span>
                  <span>Klinisch getestet</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cream"></span>
                  <span>Made in Germany</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cream"></span>
                  <span>Tierärztlich entwickelt</span>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </main>
  );
}
