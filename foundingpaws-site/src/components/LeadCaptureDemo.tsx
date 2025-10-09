"use client";

import { useState } from "react";
import { Mail, Heart, ArrowRight, Eye, Clock, MousePointer } from "lucide-react";
import LeadCapture from "./LeadCapture";

export default function LeadCaptureDemo() {
  const [activeDemo, setActiveDemo] = useState<string | null>(null);

  const demos = [
    {
      id: 'popup-exit',
      title: 'Popup mit Exit Intent',
      description: 'Erscheint beim Verlassen der Seite',
      icon: MousePointer,
      variant: 'popup' as const,
      trigger: 'exit-intent' as const
    },
    {
      id: 'popup-delay',
      title: 'Popup mit Verzögerung',
      description: 'Erscheint nach 3 Sekunden',
      icon: Clock,
      variant: 'popup' as const,
      trigger: 'delay' as const,
      delay: 3000
    },
    {
      id: 'slide-in',
      title: 'Slide-in von rechts',
      description: 'Gleitet von der rechten Seite ein',
      icon: ArrowRight,
      variant: 'slide-in' as const,
      trigger: 'manual' as const
    },
    {
      id: 'banner',
      title: 'Banner von oben',
      description: 'Erscheint als Banner am oberen Rand',
      icon: ArrowRight,
      variant: 'banner' as const,
      trigger: 'manual' as const
    }
  ];

  return (
    <div className="min-h-screen bg-secondary py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-heading text-charcoal mb-4">
            Lead Capture Komponenten
          </h1>
          <p className="text-xl text-taupe max-w-3xl mx-auto">
            Verschiedene Varianten der Lead-Capture-Komponente für optimale Conversion-Raten
          </p>
        </div>

        {/* Demo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {demos.map((demo) => {
            const IconComponent = demo.icon;
            return (
              <div
                key={demo.id}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer group"
                onClick={() => setActiveDemo(demo.id)}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg text-charcoal">
                    {demo.title}
                  </h3>
                </div>
                
                <p className="text-taupe text-sm mb-4">
                  {demo.description}
                </p>
                
                <button className="w-full bg-primary hover:bg-primary-dark text-white py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                  <Eye className="w-4 h-4" />
                  Demo anzeigen
                </button>
              </div>
            );
          })}
        </div>

        {/* Features */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-heading text-charcoal mb-6 text-center">
            Features der Lead-Capture-Komponente
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-lg text-charcoal">Elegantes Design</h3>
              <p className="text-taupe text-sm">
                Passend zum CI mit abgerundeten Kanten und modernen Animationen
              </p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-heading text-lg text-charcoal">Double-Opt-In</h3>
              <p className="text-taupe text-sm">
                Automatische E-Mail-Bestätigung für höhere Qualität der Leads
              </p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mx-auto">
                <ArrowRight className="w-6 h-6 text-success" />
              </div>
              <h3 className="font-heading text-lg text-charcoal">Exit Intent</h3>
              <p className="text-taupe text-sm">
                Intelligente Erkennung des Verlassens der Seite
              </p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-warning/10 rounded-full flex items-center justify-center mx-auto">
                <Clock className="w-6 h-6 text-warning" />
              </div>
              <h3 className="font-heading text-lg text-charcoal">Verzögerte Anzeige</h3>
              <p className="text-taupe text-sm">
                Erscheint erst nach einigen Sekunden für bessere UX
              </p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-info/10 rounded-full flex items-center justify-center mx-auto">
                <MousePointer className="w-6 h-6 text-info" />
              </div>
              <h3 className="font-heading text-lg text-charcoal">Scroll-Trigger</h3>
              <p className="text-taupe text-sm">
                Aktivierung basierend auf Scroll-Position
              </p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-lg text-charcoal">Responsive</h3>
              <p className="text-taupe text-sm">
                Optimiert für alle Geräte und Bildschirmgrößen
              </p>
            </div>
          </div>
        </div>

        {/* Lead Capture Modals */}
        {demos.map((demo) => (
          <LeadCapture
            key={demo.id}
            variant={demo.variant}
            trigger={demo.trigger}
            delay={demo.delay}
            isVisible={activeDemo === demo.id}
            onClose={() => setActiveDemo(null)}
          />
        ))}
      </div>
    </div>
  );
}
