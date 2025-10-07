"use client";

import { useState } from 'react';
import { supabase } from '@/lib/supabase';

interface NewsletterSignupProps {
  className?: string;
  variant?: 'default' | 'inline' | 'popup';
  showSuccessMessage?: boolean;
}

export default function NewsletterSignup({ 
  className = '', 
  variant = 'default',
  showSuccessMessage = true 
}: NewsletterSignupProps) {
  const [email, setEmail] = useState('');
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
          source: 'website'
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setEmail('');
        
        // Reset success message after 3 seconds
        if (showSuccessMessage) {
          setTimeout(() => setStatus('idle'), 3000);
        }
      } else {
        setErrorMessage(result.error || 'Fehler beim Anmelden. Bitte versuche es erneut.');
        setStatus('error');
      }
    } catch (error) {
      setErrorMessage('Ein unerwarteter Fehler ist aufgetreten.');
      setStatus('error');
    }
  };

  const getVariantClasses = () => {
    switch (variant) {
      case 'inline':
        return 'flex flex-col sm:flex-row gap-4';
      case 'popup':
        return 'space-y-4';
      default:
        return 'space-y-4';
    }
  };

  const getInputClasses = () => {
    const baseClasses = "w-full px-6 py-4 rounded-2xl border-2 border-green/20 focus:border-copper focus:outline-none text-green placeholder-green/60 text-lg bg-white shadow-lg transition-all duration-300 min-h-[48px]";
    return baseClasses;
  };

  const getButtonClasses = () => {
    const baseClasses = "btn-primary pill text-white px-8 py-4 text-lg font-bold whitespace-nowrap hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed min-h-[48px]";
    return baseClasses;
  };

  return (
    <div className={`newsletter-signup ${className}`}>
      <form onSubmit={handleSubmit} className={getVariantClasses()}>
        <div className="flex-1">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Deine E-Mail-Adresse"
            className={getInputClasses()}
            required
            disabled={status === 'loading'}
          />
        </div>
        <button 
          type="submit" 
          className={getButtonClasses()}
          disabled={status === 'loading'}
        >
          {status === 'loading' ? 'Wird angemeldet...' : 'Newsletter abonnieren'}
        </button>
      </form>

      {/* Status Messages */}
      {status === 'success' && showSuccessMessage && (
        <div className="mt-4 p-4 bg-green/10 border border-green/20 rounded-xl">
          <p className="text-green font-medium text-center">
            ✅ Erfolgreich angemeldet! Willkommen in der Founding Paws Familie.
          </p>
        </div>
      )}

      {status === 'error' && (
        <div className="mt-4 p-4 bg-red/10 border border-red/20 rounded-xl">
          <p className="text-red-600 font-medium text-center">
            ❌ {errorMessage}
          </p>
        </div>
      )}

      {/* Privacy Notice */}
      <p className="mt-4 text-sm text-green/60 text-center">
        Keine Sorge, wir spammen nicht. Du kannst dich jederzeit abmelden.
      </p>
    </div>
  );
}
