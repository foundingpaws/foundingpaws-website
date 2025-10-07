"use client";

import { useState } from "react";
import { supabase } from '@/lib/supabase';

export default function CTA() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');
    
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email.toLowerCase().trim(),
          source: 'cta'
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setEmail('');
        
        // Reset success message after 5 seconds
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setErrorMessage(result.error || 'Fehler beim Anmelden. Bitte versuche es erneut.');
        setStatus('error');
      }
    } catch (error) {
      setErrorMessage('Ein unerwarteter Fehler ist aufgetreten.');
      setStatus('error');
    }
  };

  return (
    <section className="wv-section bg-cream text-green">
      <div className="container-wide">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block pill bg-copper/15 border border-copper/25 px-5 py-2 wv-eyebrow mb-6 text-copper">
            Exklusiver Zugang
          </div>
          <h2 className="wv-h2 mb-6 text-green">
            Bleib auf dem Laufenden
          </h2>
          <div className="w-16 h-1 bg-copper mx-auto rounded-full mb-6"></div>
          <p className="wv-subhead text-green/70 mb-10 max-w-2xl mx-auto">
            Erhalte Einblicke in unsere Entwicklung, wissenschaftliche Updates und exklusive Launch-Vorteile.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <div className="form-group flex-1">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="deine@email.de"
                className="form-input-premium w-full"
                disabled={status === 'loading'}
              />
            </div>
            <button
              type="submit"
              className="btn-primary pill text-cream px-8 py-4 font-medium whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Wird angemeldet...' : 'Jetzt anmelden'}
            </button>
          </form>

          {/* Status Messages */}
          {status === 'success' && (
            <div className="mt-6 p-4 bg-green/10 border border-green/20 rounded-xl max-w-xl mx-auto">
              <p className="text-green font-medium text-center flex items-center justify-center gap-2">
                <span className="text-2xl">✅</span>
                <span>Erfolgreich angemeldet! Willkommen in der Founding Paws Familie.</span>
              </p>
            </div>
          )}

          {status === 'error' && (
            <div className="mt-6 p-4 bg-red/10 border border-red/20 rounded-xl max-w-xl mx-auto">
              <p className="text-red-600 font-medium text-center flex items-center justify-center gap-2">
                <span className="text-2xl">❌</span>
                <span>{errorMessage}</span>
              </p>
            </div>
          )}

          <p className="text-xs text-green/60 mt-6">
            Keine Sorge – wir spammen nicht. Nur hochwertige Updates, versprochen.
          </p>
        </div>
      </div>
    </section>
  );
}


