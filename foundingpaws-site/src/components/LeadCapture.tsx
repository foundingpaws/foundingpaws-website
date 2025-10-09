"use client";

import { useState, useEffect, useRef } from "react";
import { X, Mail, Heart, CheckCircle, Sparkles } from "lucide-react";

interface LeadCaptureProps {
  variant?: 'popup' | 'slide-in' | 'banner';
  trigger?: 'exit-intent' | 'delay' | 'scroll' | 'manual';
  delay?: number;
  className?: string;
  onClose?: () => void;
  showCloseButton?: boolean;
  isVisible?: boolean;
}

export default function LeadCapture({
  variant = 'popup',
  trigger = 'exit-intent',
  delay = 3000,
  className = '',
  onClose,
  showCloseButton = true,
  isVisible: externalIsVisible
}: LeadCaptureProps) {
  const [internalIsVisible, setInternalIsVisible] = useState(false);
  const isVisible = externalIsVisible !== undefined ? externalIsVisible : internalIsVisible;
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [hasShown, setHasShown] = useState(false);
  
  const componentRef = useRef<HTMLDivElement>(null);
  const exitIntentTriggered = useRef(false);

  // Exit Intent Detection
  useEffect(() => {
    if (trigger !== 'exit-intent' || hasShown) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !exitIntentTriggered.current) {
        exitIntentTriggered.current = true;
        showComponent();
      }
    };

    const handleMouseEnter = () => {
      exitIntentTriggered.current = false;
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [trigger, hasShown]);

  // Delay Trigger
  useEffect(() => {
    if (trigger !== 'delay' || hasShown) return;

    const timer = setTimeout(() => {
      showComponent();
    }, delay);

    return () => clearTimeout(timer);
  }, [trigger, delay, hasShown]);

  // Scroll Trigger
  useEffect(() => {
    if (trigger !== 'scroll' || hasShown) return;

    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercentage > 50) {
        showComponent();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [trigger, hasShown]);

  const showComponent = () => {
    if (hasShown) return;
    setHasShown(true);
    if (externalIsVisible === undefined) {
      setInternalIsVisible(true);
    }
  };

  const hideComponent = () => {
    if (externalIsVisible === undefined) {
      setInternalIsVisible(false);
    }
    onClose?.();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage('');

    try {
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email.toLowerCase().trim(),
          name: firstName.trim() || null,
          source: 'lead-capture'
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSuccess(true);
        setEmail('');
        setFirstName('');
        
        // Auto-hide after success
        setTimeout(() => {
          hideComponent();
        }, 3000);
      } else {
        setErrorMessage(result.error || 'Fehler beim Anmelden. Bitte versuche es erneut.');
      }
    } catch (error) {
      setErrorMessage('Ein unerwarteter Fehler ist aufgetreten.');
    } finally {
      setIsLoading(false);
    }
  };

  if (!isVisible) return null;

  const baseClasses = `
    fixed z-50 bg-white/95 backdrop-blur-sm border border-taupe/20 shadow-2xl
    ${variant === 'popup' ? 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-md w-full mx-4' : ''}
    ${variant === 'slide-in' ? 'top-0 right-0 h-full w-96 max-w-full' : ''}
    ${variant === 'banner' ? 'top-0 left-0 right-0 w-full' : ''}
    ${className}
  `;

  const overlayClasses = `
    fixed inset-0 bg-charcoal/20 backdrop-blur-sm z-40
    ${variant === 'banner' ? 'hidden' : ''}
  `;

  return (
    <>
      {/* Overlay */}
      {variant !== 'banner' && (
        <div 
          className={overlayClasses}
          onClick={hideComponent}
        />
      )}

      {/* Main Component */}
      <div 
        ref={componentRef}
        className={baseClasses}
        style={{
          animation: variant === 'slide-in' 
            ? 'slideInFromRight 0.4s ease-out'
            : variant === 'banner'
            ? 'slideInFromTop 0.4s ease-out'
            : 'fadeInScale 0.3s ease-out'
        }}
      >
        {/* Close Button */}
        {showCloseButton && (
          <button
            onClick={hideComponent}
            className="absolute top-4 right-4 text-taupe hover:text-charcoal transition-colors z-10"
            aria-label="Schließen"
          >
            <X size={20} />
          </button>
        )}

        {/* Content */}
        <div className="p-8">
          {isSuccess ? (
            /* Success State */
            <div className="text-center space-y-4">
              <div className="relative">
                <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-success" />
                </div>
                <div className="absolute -top-1 -right-1">
                  <Sparkles className="w-6 h-6 text-accent animate-pulse" />
                </div>
              </div>
              
              <h3 className="text-2xl font-heading text-charcoal mb-2">
                Willkommen in der Familie! 🎉
              </h3>
              
              <p className="text-taupe text-sm">
                Du erhältst in Kürze eine Bestätigungs-E-Mail mit deinen exklusiven Pre-Launch-Angeboten.
              </p>
            </div>
          ) : (
            /* Form State */
            <>
              {/* Header */}
              <div className="text-center mb-6">
                <div className="relative mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Heart className="w-8 h-8 text-primary" />
                  </div>
                  <div className="absolute -top-1 -right-1">
                    <Mail className="w-6 h-6 text-accent animate-bounce" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-heading text-charcoal mb-2">
                  Bleib auf dem Laufenden
                </h3>
                
                <p className="text-taupe text-sm leading-relaxed">
                  Erhalte exklusive Pre-Launch-Angebote und wissenschaftliche Insights zur Hundegesundheit direkt in dein Postfach.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Dein Vorname (optional)"
                    className="w-full px-4 py-3 border border-taupe/30 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 text-charcoal placeholder-taupe/60"
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Deine E-Mail-Adresse"
                    required
                    className="w-full px-4 py-3 border border-taupe/30 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 text-charcoal placeholder-taupe/60"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isLoading || !email}
                  className="w-full py-3 bg-primary hover:bg-primary-dark text-white rounded-xl font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Wird angemeldet...
                    </>
                  ) : (
                    <>
                      <Mail className="w-4 h-4" />
                      Jetzt anmelden
                    </>
                  )}
                </button>
              </form>

              {/* Error Message */}
              {errorMessage && (
                <div className="mt-4 p-3 bg-error/10 border border-error/20 rounded-lg text-error text-sm text-center">
                  {errorMessage}
                </div>
              )}

              {/* Trust Indicators */}
              <div className="mt-6 text-center">
                <p className="text-xs text-taupe/70">
                  🔒 Keine Sorge, wir spammen nicht! Du kannst dich jederzeit abmelden.
                </p>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes slideInFromRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        @keyframes slideInFromTop {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes fadeInScale {
          from {
            transform: translate(-50%, -50%) scale(0.9);
            opacity: 0;
          }
          to {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}
