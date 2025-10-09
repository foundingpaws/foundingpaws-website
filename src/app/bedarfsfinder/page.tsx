'use client';

import { useState } from 'react';
import Image from "next/image";
import ScrollAnimation from "@/components/ScrollAnimation";
import FadeIn from "@/components/FadeIn";
import IconDog from "@/components/icons/IconDog";

const questions = [
  {
    id: 1,
    question: "Wie alt ist dein Hund?",
    options: [
      { value: "puppy", label: "Welpe (bis 1 Jahr)", description: "Wachstum und Entwicklung" },
      { value: "adult", label: "Erwachsen (1-7 Jahre)", description: "Aktive Lebensphase" },
      { value: "senior", label: "Senior (7+ Jahre)", description: "Gesundheit und Vitalität" }
    ]
  },
  {
    id: 2,
    question: "Welche Größe hat dein Hund?",
    options: [
      { value: "small", label: "Klein (bis 10kg)", description: "Chihuahua, Yorkshire Terrier" },
      { value: "medium", label: "Mittel (10-25kg)", description: "Beagle, Cocker Spaniel" },
      { value: "large", label: "Groß (25kg+)", description: "Golden Retriever, Labrador" }
    ]
  },
  {
    id: 3,
    question: "Wie aktiv ist dein Hund?",
    options: [
      { value: "low", label: "Ruhig", description: "Weniger als 30 Min. Bewegung täglich" },
      { value: "medium", label: "Moderat", description: "30-60 Min. Bewegung täglich" },
      { value: "high", label: "Sehr aktiv", description: "Mehr als 60 Min. Bewegung täglich" }
    ]
  },
  {
    id: 4,
    question: "Hat dein Hund gesundheitliche Herausforderungen?",
    options: [
      { value: "joints", label: "Gelenkprobleme", description: "Steifheit, Lahmheit, Schmerzen" },
      { value: "stress", label: "Stress & Ängste", description: "Trennungsangst, Nervosität" },
      { value: "cognitive", label: "Kognitive Probleme", description: "Vergesslichkeit, Verwirrung" },
      { value: "none", label: "Keine besonderen Probleme", description: "Allgemeine Gesundheitsvorsorge" }
    ]
  },
  {
    id: 5,
    question: "Welche Art von Futter bekommt dein Hund?",
    options: [
      { value: "dry", label: "Trockenfutter", description: "Kroketten, Trockennahrung" },
      { value: "wet", label: "Nassfutter", description: "Dosenfutter, Feuchtnahrung" },
      { value: "raw", label: "BARF/Rohfutter", description: "Rohfleisch, natürliche Ernährung" },
      { value: "mixed", label: "Gemischt", description: "Kombination verschiedener Futtersorten" }
    ]
  }
];

const recommendations = {
  brightMind: {
    title: "Bright Mind",
    description: "Für geistige Klarheit & Herzgesundheit",
    image: "/products/bright-mind/Bright Mind.png",
    benefits: ["Omega-3 Fischöl", "Ginkgo Biloba", "Vitamin E"],
    why: "Ideal für Hunde mit kognitiven Herausforderungen oder zur allgemeinen Gehirngesundheit.",
    dosage: "1 Kapsel täglich mit dem Futter"
  },
  gentleCalm: {
    title: "Gentle Calm",
    description: "Für Entspannung & emotionale Balance",
    image: "/products/gentle-calm/ObjectID6a.png",
    benefits: ["L-Theanin", "Kamille", "Baldrian"],
    why: "Perfekt für gestresste oder ängstliche Hunde, die Entspannung brauchen.",
    dosage: "1-2 Kapseln täglich je nach Größe"
  },
  vitalJoints: {
    title: "Vital Joints",
    description: "Für Beweglichkeit & Schmerzlinderung",
    image: "/products/vital-joints/VitalJoints.png",
    benefits: ["Glucosamin", "Chondroitin", "MSM"],
    why: "Unverzichtbar für Hunde mit Gelenkproblemen oder zur Vorbeugung.",
    dosage: "1-2 Kapseln täglich je nach Gewicht"
  }
};

export default function BedarfsfinderPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (questionId: number, value: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
    
    if (currentQuestion < questions.length - 1) {
      setTimeout(() => setCurrentQuestion(prev => prev + 1), 300);
    } else {
      setTimeout(() => setShowResults(true), 300);
    }
  };

  const getRecommendations = () => {
    const recs = [];
    
    // Bright Mind für kognitive Probleme oder Senioren
    if (answers[4] === 'cognitive' || answers[1] === 'senior') {
      recs.push('brightMind');
    }
    
    // Gentle Calm für Stress/Ängste
    if (answers[4] === 'stress') {
      recs.push('gentleCalm');
    }
    
    // Vital Joints für Gelenkprobleme oder aktive Hunde
    if (answers[4] === 'joints' || answers[3] === 'high') {
      recs.push('vitalJoints');
    }
    
    // Fallback: Alle drei für allgemeine Gesundheit
    if (recs.length === 0) {
      recs.push('brightMind', 'gentleCalm', 'vitalJoints');
    }
    
    return recs;
  };

  const resetFinder = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
  };

  if (showResults) {
    const recommendedProducts = getRecommendations();
    
    return (
      <main className="bg-cream text-green min-h-screen">
        {/* Results Hero */}
        <section className="wv-section bg-green text-cream">
          <div className="container-wide">
            <div className="max-w-4xl mx-auto text-center">
              <FadeIn>
                <div className="inline-block pill bg-cream/20 border border-cream/30 px-6 py-3 wv-eyebrow wv-spacing-md text-cream backdrop-blur-sm">
                  🎯 Deine Empfehlung
                </div>
                <h1 className="wv-h1 wv-spacing-sm" style={{color: 'white'}}>
                  Perfekt abgestimmt auf deinen Hund
                </h1>
                <div className="w-20 h-1 bg-copper mx-auto rounded-full wv-spacing-md"></div>
                <p className="wv-lead wv-spacing-md max-w-3xl mx-auto" style={{color: 'rgba(255, 255, 255, 0.95)'}}>
                  Basierend auf deinen Antworten haben wir die idealen Supplements für deinen Hund ausgewählt.
                </p>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Recommendations */}
        <section className="wv-section bg-gradient-to-b from-cream to-taupe/5">
          <div className="container-wide">
            <div className="grid lg:grid-cols-3 gap-12 wv-spacing-2xl">
              {recommendedProducts.map((productKey, index) => {
                const product = recommendations[productKey as keyof typeof recommendations];
                return (
                  <ScrollAnimation key={productKey} animation="slide-up" delay={index * 150}>
                    <div className="group relative">
                      <div className="relative bg-gradient-to-br from-white via-cream/30 to-white rounded-[2rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] hover:shadow-[0_35px_60px_-12px_rgba(0,0,0,0.2)] transition-all duration-700 overflow-hidden hover:-translate-y-3 border border-green/10">
                        
                        {/* Product Image */}
                        <div className="relative aspect-square bg-gradient-to-br from-green/5 via-cream/20 to-taupe/10 p-12">
                          <Image
                            src={product.image}
                            alt={product.title}
                            fill
                            className="object-contain group-hover:scale-110 transition-transform duration-700 drop-shadow-2xl"
                            unoptimized
                          />
                          
                          {/* Recommended Badge */}
                          <div className="absolute top-6 right-6">
                            <div className="bg-gradient-to-r from-copper to-copper/80 text-cream px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                              Empfohlen
                            </div>
                          </div>
                        </div>
                        
                        {/* Content */}
                        <div className="p-10">
                          <div className="wv-spacing-md">
                            <h3 className="wv-h2 text-green wv-spacing-sm">
                              {product.title}
                            </h3>
                            <div className="w-12 h-1 bg-gradient-to-r from-copper to-copper/60 rounded-full"></div>
                          </div>
                          
                          <p className="wv-lead text-green/80 wv-spacing-lg leading-relaxed">
                            {product.description}
                          </p>
                          
                          <div className="wv-spacing-lg">
                            <div className="text-base font-semibold text-green/90 wv-spacing-sm">Warum für deinen Hund:</div>
                            <p className="wv-body text-green/70 leading-relaxed">
                              {product.why}
                            </p>
                          </div>
                          
                          <div className="wv-spacing-lg">
                            <div className="text-base font-semibold text-green/90 wv-spacing-sm">Hauptinhaltsstoffe:</div>
                            <div className="grid grid-cols-1 gap-3">
                              {product.benefits.map((benefit, idx) => (
                                <div key={idx} className="flex items-center gap-3 bg-gradient-to-r from-green/5 to-green/10 text-green px-4 py-3 rounded-xl text-sm font-medium border border-green/10">
                                  <div className="w-2 h-2 bg-green rounded-full"></div>
                                  {benefit}
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div className="wv-spacing-lg">
                            <div className="text-base font-semibold text-green/90 wv-spacing-sm">Dosierung:</div>
                            <p className="wv-body text-green/70">
                              {product.dosage}
                            </p>
                          </div>
                          
                          <div className="wv-spacing-lg">
                            <a 
                              href="#newsletter" 
                              className="btn-primary pill text-cream w-full text-center py-5 font-bold text-xl group-hover:shadow-[0_15px_35px_-12px_rgba(180,106,52,0.6)] transition-all duration-300 hover:scale-[1.02]"
                            >
                              📧 Benachrichtigen lassen
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ScrollAnimation>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="wv-section bg-green text-cream">
          <div className="container-wide">
            <ScrollAnimation>
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="wv-h2 wv-spacing-sm" style={{color: 'white'}}>
                  Bereit für gesündere, glücklichere Hunde?
                </h2>
                <div className="w-20 h-1 bg-copper mx-auto rounded-full wv-spacing-md"></div>
                <p className="wv-lead wv-spacing-md max-w-3xl mx-auto" style={{color: 'rgba(255, 255, 255, 0.9)'}}>
                  Melde dich für unseren Newsletter an und erfahre als Erster, wenn unsere Produkte verfügbar sind.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center wv-spacing-xl">
                  <a href="#newsletter" className="btn-primary pill text-cream px-10 py-5 text-xl font-bold shadow-[0_20px_40px_-12px_rgba(180,106,52,0.6)] hover:shadow-[0_25px_50px_-12px_rgba(180,106,52,0.7)] transition-all duration-300 hover:scale-105">
                    📧 Newsletter abonnieren
                  </a>
                  <button onClick={resetFinder} className="btn-secondary pill text-cream px-10 py-5 text-xl font-medium backdrop-blur-sm hover:bg-cream/20 transition-all duration-300">
                    🔄 Finder neu starten
                  </button>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="bg-cream text-green min-h-screen">
      {/* Hero Section */}
      <section className="wv-section bg-green text-cream">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <div className="inline-block pill bg-cream/20 border border-cream/30 px-6 py-3 wv-eyebrow wv-spacing-md backdrop-blur-sm" style={{color: 'white'}}>
                Bedarfsfinder
              </div>
              <h1 className="wv-h1 wv-spacing-sm" style={{color: 'white'}}>
                Finde die perfekten Supplements für deinen Hund
              </h1>
              <div className="w-20 h-1 bg-copper mx-auto rounded-full wv-spacing-md"></div>
              <p className="wv-lead wv-spacing-md max-w-3xl mx-auto" style={{color: 'rgba(255, 255, 255, 0.95)'}}>
                Beantworte 5 kurze Fragen und erhalte eine personalisierte Empfehlung 
                basierend auf den Bedürfnissen deines Hundes.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Progress Bar */}
      <section className="bg-gradient-to-r from-copper to-copper/90 text-cream py-4">
        <div className="container-wide">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-between wv-spacing-sm">
              <span className="text-sm font-medium">Frage {currentQuestion + 1} von {questions.length}</span>
              <span className="text-sm font-medium">{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
            </div>
            <div className="w-full bg-cream/20 rounded-full h-2">
              <div 
                className="bg-cream h-2 rounded-full transition-all duration-500"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Question Section */}
      <section className="wv-section bg-gradient-to-b from-cream to-taupe/5">
        <div className="container-wide">
          <ScrollAnimation>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-3xl shadow-2xl p-12 border border-green/10">
                <div className="text-center wv-spacing-2xl">
                  <h2 className="wv-h2 text-green wv-spacing-sm">
                    {questions[currentQuestion].question}
                  </h2>
                  <div className="w-16 h-1 bg-copper mx-auto rounded-full wv-spacing-md"></div>
                  
                  <div className="grid md:grid-cols-2 gap-6 wv-spacing-xl">
                    {questions[currentQuestion].options.map((option, index) => (
                      <button
                        key={option.value}
                        onClick={() => handleAnswer(questions[currentQuestion].id, option.value)}
                        className="group p-8 rounded-2xl border-2 border-green/10 hover:border-copper hover:bg-copper/5 transition-all duration-300 text-center hover:shadow-lg hover:-translate-y-1 bedarfsfinder-option"
                      >
                        <h3 className="wv-h4 text-green wv-spacing-xs group-hover:text-copper transition-colors">
                          {option.label}
                        </h3>
                        <p className="wv-body text-green/70 group-hover:text-green/80 transition-colors">
                          {option.description}
                        </p>
                      </button>
                    ))}
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
