"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import CookiePreferences from "./CookiePreferences";
import IconHeart from "./icons/IconHeart";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');
    
    try {
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email.toLowerCase().trim(),
          name: null,
          source: 'footer'
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setEmail('');
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setErrorMessage(result.error || 'Fehler beim Anmelden.');
        setStatus('error');
      }
    } catch (error) {
      setErrorMessage('Ein unerwarteter Fehler ist aufgetreten.');
      setStatus('error');
    }
  };

  return (
    <>
      <footer className="bg-charcoal text-cream py-12 lg:py-16 safe-area-bottom">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Company Info */}
            <div className="md:col-span-1 lg:col-span-1">
              <div className="flex items-center space-x-3 mb-4">
                <div className="relative w-8 h-8">
                  <Image
                    src="/logo-header.png"
                    alt="Founding Paws Logo"
                    fill
                    className="object-contain"
                    sizes="32px"
                  />
                </div>
                <span className="font-heading text-lg font-medium">
                  Founding Paws
                </span>
              </div>
              <p className="text-cream/70 text-sm mb-4 leading-relaxed">
                Wissenschaft mit Herz – Premium-Ergänzungen für deinen Hund.
              </p>
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                  <IconHeart className="w-4 h-4 text-primary" />
                </div>
                <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-1 lg:col-span-1">
              <h4 className="font-medium mb-4 text-cream">Produkte</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/produkte/bright-mind" className="text-cream/70 hover:text-cream transition-colors touch-padding">
                    Bright Mind
                  </Link>
                </li>
                <li>
                  <Link href="/produkte/gentle-calm" className="text-cream/70 hover:text-cream transition-colors touch-padding">
                    Gentle Calm
                  </Link>
                </li>
                <li>
                  <Link href="/produkte/vital-joints" className="text-cream/70 hover:text-cream transition-colors touch-padding">
                    Vital Joints
                  </Link>
                </li>
                <li>
                  <Link href="/bedarfsfinder" className="text-cream/70 hover:text-cream transition-colors touch-padding">
                    Bedarfsfinder
                  </Link>
                </li>
              </ul>
            </div>

            {/* Knowledge */}
            <div className="md:col-span-1 lg:col-span-1">
              <h4 className="font-medium mb-4 text-cream">Wissen</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/ratgeber" className="text-cream/70 hover:text-cream transition-colors touch-padding">
                    Ratgeber
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="text-cream/70 hover:text-cream transition-colors touch-padding">
                    Über uns
                  </Link>
                </li>
                <li>
                  <Link href="/impressum" className="text-cream/70 hover:text-cream transition-colors touch-padding">
                    Impressum
                  </Link>
                </li>
                <li>
                  <Link href="/datenschutz" className="text-cream/70 hover:text-cream transition-colors touch-padding">
                    Datenschutz
                  </Link>
                </li>
              </ul>
            </div>

            {/* Newsletter & Lead Capture */}
            <div className="md:col-span-2 lg:col-span-1">
              <h4 className="font-medium mb-4 text-cream">Newsletter</h4>
              <p className="text-cream/70 text-sm mb-4 leading-relaxed">
                Exklusive Pre-Launch-Angebote und wissenschaftliche Insights.
              </p>
              
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="deine@email.de"
                  className="w-full px-3 py-3 bg-cream/10 border border-cream/20 rounded-lg text-cream placeholder-cream/50 focus:ring-2 focus:ring-copper focus:border-transparent text-sm touch-padding"
                  disabled={status === 'loading'}
                  style={{
                    WebkitTapHighlightColor: 'transparent',
                    WebkitTouchCallout: 'none',
                    WebkitUserSelect: 'none',
                    userSelect: 'none'
                  }}
                />
                <button
                  type="submit"
                  className="w-full py-3 bg-copper hover:bg-copper/80 text-white rounded-lg font-medium text-sm transition disabled:opacity-50 touch-padding"
                  disabled={status === 'loading'}
                  style={{
                    WebkitTapHighlightColor: 'transparent',
                    WebkitTouchCallout: 'none',
                    WebkitUserSelect: 'none',
                    userSelect: 'none'
                  }}
                >
                  {status === 'loading' ? 'Wird angemeldet...' : 'Anmelden'}
                </button>
              </form>
              
              {status === 'success' && (
                <div className="mt-3 p-2 bg-green/20 border border-green/30 rounded text-xs text-green-200">
                  ✅ Erfolgreich angemeldet!
                </div>
              )}
              
              {status === 'error' && (
                <div className="mt-3 p-2 bg-red/20 border border-red/30 rounded text-xs text-red-200">
                  ❌ {errorMessage}
                </div>
              )}

              <div className="mt-4 text-xs text-cream/50">
                <p>🔒 Keine Sorge, wir spammen nicht!</p>
                <p>Du kannst dich jederzeit abmelden.</p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-cream/20 mt-8 lg:mt-12 pt-6 lg:pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-cream/50 text-sm text-center md:text-left">
              © 2024 Founding Paws. Alle Rechte vorbehalten.
            </p>
            <div className="flex gap-6">
              <Link href="/agb" className="text-cream/50 hover:text-cream text-sm transition-colors touch-padding">
                AGB
              </Link>
              <Link href="/widerruf" className="text-cream/50 hover:text-cream text-sm transition-colors touch-padding">
                Widerruf
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Cookie Preferences */}
      <CookiePreferences />
    </>
  );
}
