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
    <footer className="bg-green text-cream">
      <div className="container-wide py-12 lg:py-16">
        {/* Kompaktere 3-Spalten Layout */}
        <div className="grid gap-8 lg:gap-12 grid-cols-1 md:grid-cols-3 mb-8">
          {/* Brand & Mission */}
          <div className="md:col-span-1">
            <Image src="/logo-header.png" alt="Founding Paws" width={320} height={80} className="h-10 w-auto mb-4" />
            <p className="text-cream/70 text-sm leading-relaxed mb-4">
              Premium-Supplements für Hunde – wissenschaftlich fundiert, mit Liebe handgefertigt.
            </p>
            <div className="text-copper font-medium flex items-center gap-2 text-sm">
              <IconHeart className="w-4 h-4" />
              Jeder Kauf zählt - 1% für Tierheime
            </div>
          </div>

          {/* Navigation - Kompakter */}
          <div className="md:col-span-1">
            <h3 className="use-fredoka text-base mb-4">Navigation</h3>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <ul className="space-y-2">
                  <li><Link href="#products" className="hover:text-copper transition">Produkte</Link></li>
                  <li><Link href="/bedarfsfinder" className="hover:text-copper transition">Bedarfsfinder</Link></li>
                  <li><Link href="/ratgeber" className="hover:text-copper transition">Ratgeber</Link></li>
                  <li><Link href="/team" className="hover:text-copper transition">Team</Link></li>
                </ul>
              </div>
              <div>
                <ul className="space-y-2">
                  <li><Link href="/impressum" className="hover:text-copper transition">Impressum</Link></li>
                  <li><Link href="/datenschutz" className="hover:text-copper transition">Datenschutz</Link></li>
                  <li><Link href="/agb" className="hover:text-copper transition">AGB</Link></li>
                  <li><CookiePreferences /></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Newsletter & Social */}
          <div className="md:col-span-1">
            <h3 className="use-fredoka text-base mb-4">Newsletter</h3>
            <p className="text-cream/70 text-sm mb-4">
              Exklusive Tipps zur Hundegesundheit.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="deine@email.de"
                className="w-full px-3 py-2 bg-cream/10 border border-cream/20 rounded-lg text-cream placeholder-cream/50 focus:ring-2 focus:ring-copper focus:border-transparent text-sm"
                disabled={status === 'loading'}
              />
              <button
                type="submit"
                className="w-full py-2 bg-copper hover:bg-copper/80 text-white rounded-lg font-medium text-sm transition disabled:opacity-50"
                disabled={status === 'loading'}
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

            {/* Social Links - Kompakter */}
            <div className="flex gap-3 mt-6">
              <a 
                href="https://www.instagram.com/foundingpaws" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-cream/10 hover:bg-copper transition flex items-center justify-center group" 
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 text-cream group-hover:text-white transition" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/company/founding-paws" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-cream/10 hover:bg-copper transition flex items-center justify-center group" 
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 text-cream group-hover:text-white transition" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href="https://www.tiktok.com/@foundingpaws1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-cream/10 hover:bg-copper transition flex items-center justify-center group" 
                aria-label="TikTok"
              >
                <svg className="w-4 h-4 text-cream group-hover:text-white transition" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Kompaktere Bottom Bar */}
        <div className="border-t border-cream/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-cream/60">
          <span>© {new Date().getFullYear()} Founding Paws. Alle Rechte vorbehalten.</span>
          <div className="flex items-center gap-4">
            <span className="use-fredoka text-copper">Wissenschaft trifft Herz</span>
            <a href="mailto:hallo@foundingpaws.de" className="hover:text-copper transition">
              hallo@foundingpaws.de
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}


