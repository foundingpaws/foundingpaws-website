"use client";

import { useState } from "react";
import Image from "next/image";
import ScrollAnimation from "@/components/ScrollAnimation";
import FadeIn from "@/components/FadeIn";
import GlassmorphismCard from "@/components/GlassmorphismCard";
import OptimizedImage from "@/components/OptimizedImage";
import LoadingButton from "@/components/LoadingButton";
import { supabase } from '@/lib/supabase';

const benefits = [
  {
    icon: "🧠",
    title: "Geistige Klarheit",
    description: "Fördert Konzentration und Lernfähigkeit bis ins hohe Alter",
    scientific: "Omega-3 Fettsäuren unterstützen die Gehirnfunktion"
  },
  {
    icon: "❤️",
    title: "Herzgesundheit",
    description: "Stärkt das Herz-Kreislauf-System für mehr Vitalität",
    scientific: "EPA und DHA reduzieren Entzündungen im Herzgewebe"
  },
  {
    icon: "⚡",
    title: "Antioxidantien",
    description: "Schützt vor freien Radikalen und Zellschäden",
    scientific: "Curcumin und Vitamin E neutralisieren oxidative Stress"
  },
  {
    icon: "🎯",
    title: "Fokussiertes Verhalten",
    description: "Verbessert Aufmerksamkeit und Reaktionszeit",
    scientific: "L-Carnitin unterstützt die Neurotransmitter-Produktion"
  }
];

const ingredients = [
  {
    name: "EPA & DHA",
    source: "Hochwertiges Fischöl aus nachhaltigem Fang",
    dosage: "500mg",
    benefit: "Omega-3 Fettsäuren für Gehirn und Herz",
    scientific: "Studien zeigen 23% bessere kognitive Leistung bei Hunden"
  },
  {
    name: "Curcumin",
    source: "Bio-Kurkuma aus kontrolliertem Anbau",
    dosage: "100mg",
    benefit: "Starkes Antioxidans gegen Entzündungen",
    scientific: "95% Bioverfügbarkeit durch Piperin-Verstärkung"
  },
  {
    name: "Vitamin E",
    source: "Natürliches Tocopherol aus Sonnenblumen",
    dosage: "50mg",
    benefit: "Zellschutz und Immunsystem-Unterstützung",
    scientific: "Reduziert oxidative Schäden um 40%"
  },
  {
    name: "L-Carnitin",
    source: "Pharmazeutische Qualität, GMP-zertifiziert",
    dosage: "200mg",
    benefit: "Energiestoffwechsel und Muskelgesundheit",
    scientific: "Verbessert kognitive Funktion bei älteren Hunden"
  }
];

const testimonials = [
  {
    name: "Dr. Sarah Weber",
    role: "Tierärztin & Mitentwicklerin",
    quote: "Die Kombination aus Omega-3 und Curcumin zeigt in unseren Studien messbare Verbesserungen der kognitiven Funktion bei Hunden ab 7 Jahren.",
    verified: true
  },
  {
    name: "Prof. Dr. Michael Schmidt",
    role: "Veterinärpharmakologe",
    quote: "Die Dosierungen sind evidenzbasiert und entsprechen den neuesten wissenschaftlichen Erkenntnissen der Veterinärmedizin.",
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

  const handleWaitlist = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage('');
    
    try {
      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert([{ 
          email: email.toLowerCase().trim(), 
          source: 'bright-mind-waitlist',
          status: 'active'
        }]);
      
      if (error) {
        if (error.code === '23505') {
          setErrorMessage('Diese E-Mail-Adresse ist bereits angemeldet.');
        } else {
          setErrorMessage('Fehler beim Anmelden. Bitte versuche es erneut.');
        }
        setIsLoading(false);
        return;
      }
      
      // Send welcome email
      try {
        await fetch('/api/email/welcome', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email.toLowerCase().trim(),
            name: 'Liebe/r Hundefreund/in'
          }),
        });
      } catch (emailError) {
        console.error('Welcome email error:', emailError);
        // Don't fail the signup if email fails
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
                
                {/* Urgency & Scarcity */}
                <div className="bg-white/10 border border-white/20 rounded-2xl p-4 wv-spacing-md">
                  <div className="flex items-center gap-2 font-medium wv-spacing-xs" style={{color: 'white'}}>
                    <span className="text-lg">⚡</span>
                    <span>Nur noch wenige Plätze für die Warteliste verfügbar</span>
                  </div>
                  <p className="wv-body" style={{color: 'white'}}>
                    Sichere dir jetzt deinen exklusiven 10% Launch-Rabatt und 
                    werde als Erste:r über die Verfügbarkeit informiert.
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
                <div className="p-6 text-center hover-lift-feature bg-white rounded-2xl shadow-lg border border-green/20 hover:shadow-xl transition-all duration-300">
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
                </div>
              </ScrollAnimation>
            ))}
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
                        <span className="text-2xl">🧪</span>
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
      <section id="waitlist" className="wv-section bg-gradient-to-br from-copper to-copper/80 text-cream">
        <div className="container-wide">
          <ScrollAnimation>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="wv-h2 text-cream wv-spacing-sm">
                Sei dabei, wenn Bright Mind verfügbar wird
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

              {errorMessage && (
                <div className="mt-4 p-4 bg-red/10 border border-red/20 rounded-xl max-w-md mx-auto">
                  <p className="text-red-600 font-medium text-center flex items-center justify-center gap-2">
                    <span className="text-2xl">❌</span>
                    <span>{errorMessage}</span>
                  </p>
                </div>
              )}

              <div className="flex flex-wrap justify-center gap-6 text-cream/70 wv-spacing-md">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cream"></span>
                  <span>Made in Germany</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cream"></span>
                  <span>Laborgeprüft</span>
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
