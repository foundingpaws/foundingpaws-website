'use client';

import React, { useState } from 'react';
import Image from "next/image";
import ScrollAnimation from "@/components/ScrollAnimation";
import FadeIn from "@/components/FadeIn";
import IconPaw from "@/components/icons/IconPaw";
import IconHeart from "@/components/icons/IconHeart";
import IconBone from "@/components/icons/IconBone";
import IconLeaf from "@/components/icons/IconLeaf";
import IconTarget from "@/components/icons/IconTarget";
import IconShield from "@/components/icons/IconShield";
import IconSparkles from "@/components/icons/IconSparkles";

const questions = [
  {
    id: 1,
    question: "Wie alt ist dein Hund?",
    icon: IconPaw,
    options: [
      { value: "puppy", label: "Welpe (bis 1 Jahr)", description: "Wachstum und Entwicklung", icon: IconPaw },
      { value: "adult", label: "Erwachsen (1-7 Jahre)", description: "Aktive Lebensphase", icon: IconPaw },
      { value: "senior", label: "Senior (7+ Jahre)", description: "Gesundheit und Vitalität", icon: IconPaw }
    ]
  },
  {
    id: 2,
    question: "Welche Größe hat dein Hund?",
    icon: IconTarget,
    options: [
      { value: "small", label: "Klein (bis 10kg)", description: "Chihuahua, Yorkshire Terrier", icon: IconPaw },
      { value: "medium", label: "Mittel (10-25kg)", description: "Beagle, Cocker Spaniel", icon: IconPaw },
      { value: "large", label: "Groß (25kg+)", description: "Golden Retriever, Labrador", icon: IconPaw }
    ]
  },
  {
    id: 3,
    question: "Wie aktiv ist dein Hund?",
    icon: IconHeart,
    options: [
      { value: "low", label: "Ruhig", description: "Weniger als 30 Min. Bewegung täglich", icon: IconHeart },
      { value: "medium", label: "Moderat", description: "30-60 Min. Bewegung täglich", icon: IconHeart },
      { value: "high", label: "Sehr aktiv", description: "Mehr als 60 Min. Bewegung täglich", icon: IconHeart }
    ]
  },
  {
    id: 4,
    question: "Welche gesundheitlichen Bedürfnisse hat dein Hund?",
    icon: IconShield,
    options: [
      { value: "joints", label: "Gelenke & Mobilität", description: "Steifheit, Lahmheit, Beweglichkeit", icon: IconBone },
      { value: "skin", label: "Haut & Fell", description: "Trockene Haut, stumpfes Fell, Juckreiz", icon: IconSparkles },
      { value: "general", label: "Allgemeine Vitalität", description: "Prävention und ganzheitliche Gesundheit", icon: IconLeaf }
    ]
  },
  {
    id: 5,
    question: "Hat dein Hund spezielle Haut- oder Fellprobleme?",
    icon: IconLeaf,
    options: [
      { value: "dry_skin", label: "Trockene, schuppige Haut", description: "Schuppen, Rauheit, Juckreiz", icon: IconLeaf },
      { value: "dull_coat", label: "Stumpfes, glanzloses Fell", description: "Fehlender Glanz, brüchiges Haar", icon: IconSparkles },
      { value: "sensitive", label: "Empfindliche Haut", description: "Rötungen, Reizungen, Allergien", icon: IconLeaf },
      { value: "none", label: "Keine Haut-/Fellprobleme", description: "Gesunde Haut und glänzendes Fell", icon: IconSparkles }
    ]
  }
];

const products = {
  "shiny-coat": {
    title: "Shiny Coat",
    subtitle: "Fellglanz & Hautgesundheit – weniger Juckreiz",
    description: "Omega‑3, Zink, Biotin & Vitamin E für glänzendes Fell und starke Hautbarriere.",
    image: "/products/Shiny Coat.png",
    category: "Haut & Fell",
    accent: "green",
    benefits: ["Omega‑3", "Zink", "Biotin", "Vitamin E"],
    why: "Perfekt für Hunde mit stumpfem, glanzlosem Fell oder trockener Haut. Fördert gesunde Hautbarriere und reduziert Juckreiz.",
    dosage: "1–3 Chews je 10 kg täglich",
    targetGroup: "Hunde mit stumpfem Fell, trockener/empfindlicher Haut"
  },
  "sensitive-skin": {
    title: "Sensitive Skin",
    subtitle: "Hautbarriere & Entzündungsbalance",
    description: "GLA‑reiche Öle (Hanf/Nachtkerze), Vitamin E & Kurkuma – sanft für sensible Haut.",
    image: "/products/Sensitive Skin.png",
    category: "Haut & Fell",
    accent: "green",
    benefits: ["Hanföl", "Nachtkerzenöl", "Bierhefe", "Kurkuma"],
    why: "Ideal für Hunde mit empfindlicher Haut, Allergien oder Schuppen. Stärkt die Hautbarriere und reduziert Entzündungen.",
    dosage: "1–3 Chews je 10 kg täglich",
    targetGroup: "Hunde mit sensibler Haut/Schuppen"
  },
  "joint-mobility": {
    title: "Joint & Mobility",
    subtitle: "Gelenke, Beweglichkeit, entzündungshemmend",
    description: "Glucosamin, MSM & Grünlippmuschel – für spürbar mehr Gelenkkomfort.",
    image: "/products/Joint & Mobility.png",
    category: "Gelenke & Mobilität",
    accent: "taupe",
    benefits: ["Glucosamin", "MSM", "Grünlippmuschel", "Hagebutte"],
    why: "Unverzichtbar für Hunde mit Gelenkproblemen oder zur Vorbeugung. Besonders wichtig für große Rassen und Senioren.",
    dosage: "1–3 Chews je 10 kg täglich",
    targetGroup: "Senioren, große Rassen, Gelenkbedarf"
  },
  "skin-vital-omega": {
    title: "5‑Omega‑Öl – Skin & Vital Blend",
    subtitle: "Haut, Fell, Herz & Immunsystem",
    description: "Synergie aus Lachs‑, Lein‑, Hanf‑, Borretsch‑ & Nachtkerzenöl, mit Vitamin E.",
    image: "/products/5-Omega-Oelflasche.png",
    category: "Haut & Vitalität",
    accent: "copper",
    benefits: ["Lachsöl", "Leinöl", "Hanföl", "Borretsch & Nachtkerze"],
    why: "Perfekt für Hunde mit Haut- und Fellproblemen. Die Omega-3-Kombination fördert gesunde Haut und glänzendes Fell.",
    dosage: "2–3 ml je 10 kg täglich",
    targetGroup: "Hunde mit Haut/Fell‑ & Vitalitätsbedarf"
  },
  "green-lipped-mussel": {
    title: "Grünlippmuschelpulver (100%)",
    subtitle: "Gelenke, Sehnen, Bindegewebe",
    description: "100 % Perna canaliculus – GAGs & Omega‑3, schonend getrocknet.",
    image: "/products/Gruenlippmuschelpulver.png",
    category: "Gelenke & Mobilität",
    accent: "taupe",
    benefits: ["GAGs ~3,3%", "Omega‑3 ~3,2%", "Natürlich", "Flexibel kombinierbar"],
    why: "Natürliche Unterstützung für Gelenke und Bindegewebe. Ideal für Sporthunde und zur langfristigen Gelenkgesundheit.",
    dosage: "0,5 g je 10 kg täglich",
    targetGroup: "Gelenkbedarf, Sporthunde, Senioren"
  }
};

export default function BedarfsfinderPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [email, setEmail] = useState('');
  const [isNewsletterSubmitting, setIsNewsletterSubmitting] = useState(false);
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'success' | 'error'>('idle');

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
    const scores: Record<string, number> = {};
    
    // Initialisiere alle Produkte mit Score 0
    Object.keys(products).forEach(key => scores[key] = 0);
    
    // Alters-basierte Empfehlungen
    if (answers[1] === 'senior') {
      scores['joint-mobility'] += 3; // Gelenkgesundheit für Senioren
      scores['green-lipped-mussel'] += 2; // Natürliche Gelenkunterstützung
      scores['skin-vital-omega'] += 1; // Allgemeine Vitalität
    } else if (answers[1] === 'puppy') {
      scores['skin-vital-omega'] += 2; // Omega-3 für Entwicklung
      scores['shiny-coat'] += 1; // Fellentwicklung
    }
    
    // Größen-basierte Empfehlungen
    if (answers[2] === 'large') {
      scores['joint-mobility'] += 2; // Gelenkbelastung bei großen Hunden
      scores['green-lipped-mussel'] += 1;
    } else if (answers[2] === 'small') {
      scores['sensitive-skin'] += 1; // Kleine Hunde oft empfindlicher
    }
    
    // Aktivitäts-basierte Empfehlungen
    if (answers[3] === 'high') {
      scores['joint-mobility'] += 2; // Gelenkbelastung bei aktiven Hunden
      scores['green-lipped-mussel'] += 1;
    } else if (answers[3] === 'low') {
      scores['skin-vital-omega'] += 1; // Allgemeine Vitalität für ruhige Hunde
    }
    
    // Gesundheitsbedürfnisse-basierte Empfehlungen
    if (answers[4] === 'joints') {
      scores['joint-mobility'] += 4;
      scores['green-lipped-mussel'] += 3;
    } else if (answers[4] === 'skin') {
      scores['shiny-coat'] += 3;
      scores['sensitive-skin'] += 3;
      scores['skin-vital-omega'] += 2;
    } else if (answers[4] === 'general') {
      scores['skin-vital-omega'] += 3; // Allgemeine Vitalität
      scores['shiny-coat'] += 1;
    }
    
    // Haut-/Fellprobleme-basierte Empfehlungen
    if (answers[5] === 'dry_skin') {
      scores['sensitive-skin'] += 4;
      scores['skin-vital-omega'] += 3;
    } else if (answers[5] === 'dull_coat') {
      scores['shiny-coat'] += 4;
      scores['skin-vital-omega'] += 3;
    } else if (answers[5] === 'sensitive') {
      scores['sensitive-skin'] += 4;
      scores['skin-vital-omega'] += 2;
    } else if (answers[5] === 'none') {
      scores['skin-vital-omega'] += 1; // Präventive Omega-3 Versorgung
    }
    
    // Sortiere Produkte nach Score und nimm die Top 3
    const sortedProducts = Object.entries(scores)
      .filter(([_, score]) => score > 0)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 3)
      .map(([key, _]) => key);
    
    // Fallback: Wenn keine spezifischen Empfehlungen, empfehle die beliebtesten
    if (sortedProducts.length === 0) {
      return ['skin-vital-omega', 'shiny-coat', 'joint-mobility'];
    }
    
    return sortedProducts;
  };

  const resetFinder = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    setEmail('');
    setNewsletterStatus('idle');
  };

  const handleNewsletterSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setNewsletterStatus('error');
      return;
    }

    setIsNewsletterSubmitting(true);
    setNewsletterStatus('idle');

    try {
      const response = await fetch('/api/newsletter-simple', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          source: 'bedarfsfinder'
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setNewsletterStatus('success');
        setEmail('');
      } else {
        setNewsletterStatus('error');
      }
    } catch (error) {
      console.error('Newsletter signup error:', error);
      setNewsletterStatus('error');
    } finally {
      setIsNewsletterSubmitting(false);
    }
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
                <div className="inline-block pill bg-cream/20 border border-cream/30 px-6 py-3 wv-eyebrow wv-spacing-md text-white backdrop-blur-sm">
                  DEINE EMPFEHLUNG
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
            <div className="grid lg:grid-cols-3 gap-8 wv-spacing-2xl">
              {recommendedProducts.map((productKey, index) => {
                const product = products[productKey as keyof typeof products];
                const IconComponent = questions[3].icon; // Verwende das Icon für Gesundheitsbedürfnisse
                
                return (
                  <ScrollAnimation key={productKey} animation="slide-up" delay={index * 150}>
                    <div className="group relative">
                      <div className={`relative bg-gradient-to-br from-white via-cream/30 to-white rounded-[2rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] hover:shadow-[0_35px_60px_-12px_rgba(0,0,0,0.2)] transition-all duration-700 overflow-hidden hover:-translate-y-3 border border-green/10 ${
                        product.accent === 'copper' ? 'hover:border-copper/30' : 
                        product.accent === 'green' ? 'hover:border-green/30' : 
                        'hover:border-taupe/30'
                      }`}>
                        
                        {/* Product Image */}
                        <div className={`relative aspect-square bg-gradient-to-br ${
                          product.accent === 'copper' ? 'from-copper/5 via-cream/20 to-copper/10' :
                          product.accent === 'green' ? 'from-green/5 via-cream/20 to-green/10' :
                          'from-taupe/5 via-cream/20 to-taupe/10'
                        } p-12`}>
                          <Image
                            src={product.image}
                            alt={product.title}
                            fill
                            className="object-contain group-hover:scale-110 transition-transform duration-700 drop-shadow-2xl"
                            unoptimized
                          />
                          
                          {/* Recommended Badge */}
                          <div className="absolute top-6 right-6">
                            <div className={`bg-gradient-to-r ${
                              product.accent === 'copper' ? 'from-copper to-copper/80' :
                              product.accent === 'green' ? 'from-green to-green/80' :
                              'from-taupe to-taupe/80'
                            } text-cream px-4 py-2 rounded-full text-sm font-bold shadow-lg`}>
                              #{index + 1} Empfehlung
                            </div>
                          </div>
                          
                          {/* Category Badge */}
                          <div className="absolute top-6 left-6">
                            <div className="bg-white/90 backdrop-blur-sm text-green px-3 py-1 rounded-full text-xs font-medium border border-green/20">
                              {product.category}
                            </div>
                          </div>
                        </div>
                        
                        {/* Content */}
                        <div className="p-8">
                          <div className="wv-spacing-md">
                            <h3 className="wv-h2 text-green wv-spacing-sm">
                              {product.title}
                            </h3>
                            <p className="text-green/70 text-sm font-medium wv-spacing-xs">
                              {product.subtitle}
                            </p>
                            <div className={`w-12 h-1 bg-gradient-to-r ${
                              product.accent === 'copper' ? 'from-copper to-copper/60' :
                              product.accent === 'green' ? 'from-green to-green/60' :
                              'from-taupe to-taupe/60'
                            } rounded-full`}></div>
                          </div>
                          
                          <p className="wv-body text-green/80 wv-spacing-lg leading-relaxed">
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
                            <div className="grid grid-cols-2 gap-2">
                              {product.benefits.map((benefit, idx) => (
                                <div key={idx} className={`flex items-center gap-2 bg-gradient-to-r ${
                                  product.accent === 'copper' ? 'from-copper/5 to-copper/10' :
                                  product.accent === 'green' ? 'from-green/5 to-green/10' :
                                  'from-taupe/5 to-taupe/10'
                                } text-green px-3 py-2 rounded-lg text-xs font-medium border ${
                                  product.accent === 'copper' ? 'border-copper/10' :
                                  product.accent === 'green' ? 'border-green/10' :
                                  'border-taupe/10'
                                }`}>
                                  <div className={`w-1.5 h-1.5 rounded-full ${
                                    product.accent === 'copper' ? 'bg-copper' :
                                    product.accent === 'green' ? 'bg-green' :
                                    'bg-taupe'
                                  }`}></div>
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
                            <div className="text-sm text-green/60 wv-spacing-xs">Zielgruppe:</div>
                            <p className="text-sm text-green/70">
                              {product.targetGroup}
                            </p>
                          </div>
                          
                          <div className="wv-spacing-lg">
                            <button 
                              onClick={() => {
                                // Scroll to newsletter form
                                const newsletterSection = document.getElementById('newsletter-signup');
                                if (newsletterSection) {
                                  newsletterSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                }
                                // Focus on email input
                                setTimeout(() => {
                                  const emailInput = document.querySelector('input[type="email"]') as HTMLInputElement;
                                  if (emailInput) {
                                    emailInput.focus();
                                  }
                                }, 500);
                              }}
                              className={`btn-primary pill text-cream w-full text-center py-4 font-bold text-lg group-hover:shadow-[0_15px_35px_-12px_rgba(180,106,52,0.6)] transition-all duration-300 hover:scale-[1.02] ${
                                product.accent === 'copper' ? 'bg-copper hover:bg-copper/90' :
                                product.accent === 'green' ? 'bg-green hover:bg-green/90' :
                                'bg-taupe hover:bg-taupe/90'
                              }`}
                            >
                              📧 Benachrichtigen lassen
                            </button>
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
        <section className="wv-section bg-green text-cream relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 right-10 w-24 h-24 bg-cream rounded-full blur-2xl"></div>
            <div className="absolute bottom-10 left-10 w-32 h-32 bg-copper rounded-full blur-3xl"></div>
          </div>
          
          <div className="container-wide relative z-10">
            <ScrollAnimation>
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="wv-h2 wv-spacing-sm" style={{color: 'white'}}>
                  Bereit für gesündere, glücklichere Hunde?
                </h2>
                <div className="w-20 h-1 bg-copper mx-auto rounded-full wv-spacing-md"></div>
                <p className="wv-lead wv-spacing-md max-w-3xl mx-auto" style={{color: 'rgba(255, 255, 255, 0.9)'}}>
                  Melde dich für unseren Newsletter an und erfahre als Erster, wenn unsere Produkte verfügbar sind. 
                  Erhalte exklusive Launch-Rabatte und wissenschaftliche Insights zur Hundegesundheit.
                </p>
                
                {/* Benefits */}
                <div className="grid md:grid-cols-3 gap-6 my-12">
                  <div className="bg-white/10 rounded-2xl p-6 border border-white/20 backdrop-blur-sm">
                    <div className="mb-3 flex justify-center">
                      <IconSparkles className="w-8 h-8 text-cream" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">10% Launch-Rabatt</h3>
                    <p className="text-white/80 text-sm">Exklusiv für Newsletter-Abonnenten</p>
                  </div>
                  <div className="bg-white/10 rounded-2xl p-6 border border-white/20 backdrop-blur-sm">
                    <div className="mb-3 flex justify-center">
                      <IconShield className="w-8 h-8 text-cream" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">Wissenschaftliche Insights</h3>
                    <p className="text-white/80 text-sm">Evidenzbasierte Tipps zur Hundegesundheit</p>
                  </div>
                  <div className="bg-white/10 rounded-2xl p-6 border border-white/20 backdrop-blur-sm">
                    <div className="mb-3 flex justify-center">
                      <IconPaw className="w-8 h-8 text-cream" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">Früher Zugang</h3>
                    <p className="text-white/80 text-sm">Als Erster über neue Produkte informiert</p>
                  </div>
                </div>
                
                {/* Newsletter Signup Form */}
                <div id="newsletter-signup" className="max-w-md mx-auto wv-spacing-xl">
                  <form onSubmit={handleNewsletterSignup} className="space-y-4">
                    <div className="flex flex-col sm:flex-row gap-3">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Deine E-Mail-Adresse"
                        className="flex-1 px-6 py-4 rounded-2xl border-2 border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-white/60 focus:outline-none focus:border-copper focus:bg-white/20 transition-all duration-300"
                        required
                        disabled={isNewsletterSubmitting}
                      />
                      <button
                        type="submit"
                        disabled={isNewsletterSubmitting || !email}
                        className="btn-primary pill text-cream px-8 py-4 text-lg font-bold shadow-[0_20px_40px_-12px_rgba(180,106,52,0.6)] hover:shadow-[0_25px_50px_-12px_rgba(180,106,52,0.7)] transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                      >
                        {isNewsletterSubmitting ? (
                          <span className="flex items-center gap-2">
                            <div className="w-5 h-5 border-2 border-cream border-t-transparent rounded-full animate-spin"></div>
                            Anmeldung...
                          </span>
                        ) : (
                          '📧 Newsletter abonnieren'
                        )}
                      </button>
                    </div>
                    
                    {/* Status Messages */}
                    {newsletterStatus === 'success' && (
                      <div className="text-center p-4 bg-green/20 border border-green/30 rounded-xl text-green-100">
                        ✅ Erfolgreich angemeldet! Du erhältst eine Bestätigungs-E-Mail.
                      </div>
                    )}
                    {newsletterStatus === 'error' && (
                      <div className="text-center p-4 bg-red/20 border border-red/30 rounded-xl text-red-100">
                        ❌ Fehler bei der Anmeldung. Bitte versuche es erneut.
                      </div>
                    )}
                  </form>
                </div>

                <div className="flex justify-center wv-spacing-md">
                  <button onClick={resetFinder} className="btn-secondary pill text-cream px-8 py-4 text-lg font-medium backdrop-blur-sm hover:bg-cream/20 transition-all duration-300">
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
      <section className="wv-section bg-green text-cream relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-cream rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-copper rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-cream rounded-full blur-xl"></div>
        </div>
        
        <div className="container-wide relative z-10">
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
              
              {/* Features */}
              <div className="grid md:grid-cols-3 gap-6 mt-12">
                <div className="bg-white/10 rounded-2xl p-6 border border-white/20 backdrop-blur-sm">
                  <div className="mb-3 flex justify-center">
                    <IconPaw className="w-8 h-8 text-cream" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Schnell & Einfach</h3>
                  <p className="text-white/80 text-sm">Nur 5 Fragen in 2 Minuten</p>
                </div>
                <div className="bg-white/10 rounded-2xl p-6 border border-white/20 backdrop-blur-sm">
                  <div className="mb-3 flex justify-center">
                    <IconTarget className="w-8 h-8 text-cream" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Personalisierte Empfehlungen</h3>
                  <p className="text-white/80 text-sm">Basierend auf Alter, Größe & Bedürfnissen</p>
                </div>
                <div className="bg-white/10 rounded-2xl p-6 border border-white/20 backdrop-blur-sm">
                  <div className="mb-3 flex justify-center">
                    <IconShield className="w-8 h-8 text-cream" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Wissenschaftlich Fundiert</h3>
                  <p className="text-white/80 text-sm">Evidenzbasierte Produktauswahl</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Progress Bar */}
      <section className="bg-gradient-to-r from-copper to-copper/90 text-cream py-6">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-between wv-spacing-sm">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-cream/20 rounded-full flex items-center justify-center text-sm font-bold">
                  {currentQuestion + 1}
                </div>
                <span className="text-sm font-medium">Frage {currentQuestion + 1} von {questions.length}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
                <div className="w-16 h-2 bg-cream/20 rounded-full overflow-hidden">
                  <div 
                    className="bg-cream h-2 rounded-full transition-all duration-500"
                    style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Question Section */}
      <section className="wv-section bg-gradient-to-b from-cream to-taupe/5">
        <div className="container-wide">
          <ScrollAnimation>
            <div className="max-w-5xl mx-auto">
              <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-green/10">
                <div className="text-center wv-spacing-2xl">
                  {/* Question Icon */}
                  <div className="flex justify-center wv-spacing-md">
                    <div className="w-16 h-16 bg-gradient-to-br from-copper/10 to-copper/20 rounded-2xl flex items-center justify-center">
                      {React.createElement(questions[currentQuestion].icon, { 
                        className: "w-8 h-8 text-copper" 
                      })}
                    </div>
                  </div>
                  
                  <h2 className="wv-h2 text-green wv-spacing-sm">
                    {questions[currentQuestion].question}
                  </h2>
                  <div className="w-16 h-1 bg-copper mx-auto rounded-full wv-spacing-md"></div>
                  
                  <div className={`grid gap-4 wv-spacing-xl ${
                    questions[currentQuestion].options.length === 2 ? 'md:grid-cols-2' :
                    questions[currentQuestion].options.length === 3 ? 'md:grid-cols-3' :
                    questions[currentQuestion].options.length === 4 ? 'md:grid-cols-2' :
                    'md:grid-cols-2'
                  }`}>
                    {questions[currentQuestion].options.map((option, index) => (
                      <button
                        key={option.value}
                        onClick={() => handleAnswer(questions[currentQuestion].id, option.value)}
                        className="group p-6 md:p-8 rounded-2xl border-2 border-green/10 hover:border-copper hover:bg-copper/5 transition-all duration-300 text-center hover:shadow-lg hover:-translate-y-1 bedarfsfinder-option"
                      >
                        {/* Option Icon */}
                        {option.icon && (
                          <div className="mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                            {React.createElement(option.icon, { 
                              className: "w-8 h-8 text-copper" 
                            })}
                          </div>
                        )}
                        
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
