'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface NewsletterSignupProps {
  className?: string;
  variant?: 'default' | 'minimal' | 'popup';
}

export default function NewsletterSignup({ 
  className = '', 
  variant = 'default' 
}: NewsletterSignupProps) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    try {
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          email: email.trim(), 
          name: name.trim() || null 
        }),
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        setMessage('Erfolgreich angemeldet! Willkommen in der Founding Paws Familie! 🎉');
        setEmail('');
        setName('');
      } else {
        setMessage(data.error || 'Ein Fehler ist aufgetreten.');
      }
    } catch (error) {
      setMessage('Ein Fehler ist aufgetreten. Bitte versuche es später erneut.');
    } finally {
      setIsLoading(false);
    }
  };

  if (variant === 'minimal') {
    return (
      <form onSubmit={handleSubmit} className={`flex gap-2 ${className}`}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Deine E-Mail-Adresse"
          required
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50"
        >
          {isLoading ? '...' : 'Anmelden'}
        </button>
        {message && (
          <div className={`text-sm ${isSuccess ? 'text-green-600' : 'text-red-600'}`}>
            {message}
          </div>
        )}
      </form>
    );
  }

  if (variant === 'popup') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      >
        <motion.div
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          className="bg-white rounded-2xl p-8 max-w-md w-full"
        >
          <div className="text-center mb-6">
            <div className="text-4xl mb-2">🐾</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Bleib auf dem Laufenden!
            </h2>
            <p className="text-gray-600">
              Erhalte exklusive Tipps zur Hundegesundheit und verpasse keine Neuigkeiten.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Dein Name (optional)"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Deine E-Mail-Adresse"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 font-semibold"
            >
              {isLoading ? 'Wird angemeldet...' : 'Newsletter abonnieren'}
            </button>
          </form>

          {message && (
            <div className={`mt-4 text-sm text-center ${isSuccess ? 'text-green-600' : 'text-red-600'}`}>
              {message}
            </div>
          )}

          <button
            onClick={() => setMessage('')}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          >
            ✕
          </button>
        </motion.div>
      </motion.div>
    );
  }

  // Default variant
  return (
    <div className={`bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-8 ${className}`}>
      <div className="text-center mb-6">
        <div className="text-5xl mb-4">🐾</div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Newsletter abonnieren
        </h2>
        <p className="text-gray-600 text-lg">
          Erhalte exklusive Tipps zur Hundegesundheit, wissenschaftliche Erkenntnisse und 
          spezielle Angebote direkt in dein Postfach.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Dein Name (optional)"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Deine E-Mail-Adresse"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 font-semibold text-lg"
        >
          {isLoading ? 'Wird angemeldet...' : 'Jetzt anmelden'}
        </button>
      </form>

      {message && (
        <div className={`mt-4 text-center ${isSuccess ? 'text-green-600' : 'text-red-600'}`}>
          {message}
        </div>
      )}

      <div className="mt-6 text-center text-sm text-gray-500">
        <p>
          Keine Sorge, wir spammen nicht! Du kannst dich jederzeit abmelden.
        </p>
      </div>
    </div>
  );
}