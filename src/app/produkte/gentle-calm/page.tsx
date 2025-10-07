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
    icon: "😌",
    title: "Natürliche Beruhigung",
    description: "Sanfte Entspannung ohne Sedierung oder Nebenwirkungen",
    scientific: "L-Theanin fördert Alpha-Wellen im Gehirn für natürliche Ruhe"
  },
  {
    icon: "🌙",
    title: "Besserer Schlaf",
    description: "Fördert erholsamen Schlaf und reduziert nächtliche Unruhe",
    scientific: "Kamillenextrakt wirkt schlaffördernd und angstlösend"
  },
  {
    icon: "⚡",
    title: "Schnelle Wirkung",
    description: "Bereits nach 30-60 Minuten spürbare Entspannung",
    scientific: "Optimierte Bioverfügbarkeit für schnelle Aufnahme"
  },
  {
    icon: "🎯",
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

  const handleWaitlist = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, product: 'gentle-calm' }),
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
                  Stress & Angst
                </div>
                <h1 className="wv-h1 wv-spacing-sm" style={{color: 'white'}}>
                  Gentle Calm
                </h1>
                <p className="wv-lead wv-spacing-md" style={{color: 'white'}}>
                  Natürliche Beruhigung für ängstliche Momente. 
                  Sanft, wirksam, ohne Sedierung.
                </p>
                
                {/* Emotional Appeal */}
                <div className="bg-copper/20 border border-copper/30 rounded-2xl p-4 wv-spacing-md">
                  <div className="flex items-center gap-2 font-medium wv-spacing-xs" style={{color: 'white'}}>
                    <span className="text-lg">💝</span>
                    <span>Gib deinem Hund die Ruhe, die er verdient</span>
                  </div>
                  <p className="wv-body" style={{color: 'white'}}>
                    Kein Hund sollte unter Stress und Angst leiden. Gentle Calm hilft 
                    deinem Vierbeiner, entspannt durch den Alltag zu gehen.
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
      <section id="waitlist" className="wv-section bg-gradient-to-br from-copper to-copper/80 text-cream">
        <div className="container-wide">
          <ScrollAnimation>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="wv-h2 text-cream wv-spacing-sm">
                Hilf deinem Hund zu entspannen
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
                  <span>100% Natürlich</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cream"></span>
                  <span>Ohne Sedierung</span>
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
