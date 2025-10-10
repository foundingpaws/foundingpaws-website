"use client";

import { useState, useEffect } from 'react';

const steps = [
  { id: 1, name: 'Produkte', target: 'products' },
  { id: 2, name: 'Formeln', target: 'ingredients' },
  { id: 3, name: 'Vertrauen', target: 'social-proof' },
  { id: 4, name: 'Lifestyle', target: 'lifestyle' },
  { id: 5, name: 'Kauf', target: 'cta' }
];

export default function ProgressIndicator() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Zeige Indicator nach 20% Scroll
      setIsVisible(scrollTop > windowHeight * 0.2);
      
      // Bestimme aktuellen Schritt basierend auf Scroll-Position
      if (scrollTop > windowHeight * 4) setCurrentStep(5);
      else if (scrollTop > windowHeight * 3.5) setCurrentStep(4);
      else if (scrollTop > windowHeight * 2.5) setCurrentStep(3);
      else if (scrollTop > windowHeight * 1.5) setCurrentStep(2);
      else setCurrentStep(1);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-40 animate-fade-in">
      <div className="bg-white/95 backdrop-blur-sm border border-green/20 rounded-full px-6 py-3 shadow-lg">
        <div className="flex items-center gap-4">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center gap-2">
              <div 
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${
                  step.id <= currentStep 
                    ? 'bg-copper text-cream' 
                    : 'bg-green/10 text-green/60'
                }`}
              >
                {step.id < currentStep ? '✓' : step.id}
              </div>
              <span 
                className={`text-sm font-medium transition-colors duration-300 ${
                  step.id <= currentStep ? 'text-green' : 'text-green/60'
                }`}
              >
                {step.name}
              </span>
              {index < steps.length - 1 && (
                <div 
                  className={`w-8 h-0.5 transition-colors duration-300 ${
                    step.id < currentStep ? 'bg-copper' : 'bg-green/20'
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
