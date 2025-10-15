"use client";

import { useState, useEffect } from 'react';

export default function StickyCTA({ comingSoon = true }: { comingSoon?: boolean }) {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      
      setScrollProgress(progress);
      
      // Zeige Button nach 50% Scroll-Progress (weniger aufdringlich)
      setIsVisible(progress > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed right-6 z-40 animate-fade-in" style={{ bottom: 'calc(env(safe-area-inset-bottom, 0px) + 24px)' }}>
      <button 
        className="bg-green text-cream px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:bg-green/90 transform hover:scale-105 transition-all duration-300 text-sm font-medium"
        onClick={() => {
          if (comingSoon) {
            const el = document.getElementById('waitlist');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          } else {
            const el = document.getElementById('products');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      >
        {comingSoon ? 'Warteliste sichern →' : 'Jetzt bestellen →'}
      </button>
    </div>
  );
}