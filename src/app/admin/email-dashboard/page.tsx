"use client";

import { useState } from 'react';
import { EmailService } from '@/lib/email-service';

export default function EmailDashboard() {
  const [testEmail, setTestEmail] = useState('');
  const [newsletterData, setNewsletterData] = useState({
    subject: '',
    content: '',
    featuredProduct: {
      name: '',
      description: '',
      image: '',
      link: ''
    },
    articles: []
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSendTestNewsletter = async () => {
    if (!testEmail || !newsletterData.subject || !newsletterData.content) {
      setMessage('Bitte fülle alle Felder aus');
      setStatus('error');
      return;
    }

    setStatus('sending');
    setMessage('');

    try {
      const response = await fetch('/api/email/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...newsletterData,
          testEmail
        }),
      });

      const result = await response.json();

      if (result.success) {
        setMessage('Test-Newsletter erfolgreich gesendet!');
        setStatus('success');
      } else {
        setMessage(result.error || 'Fehler beim Senden');
        setStatus('error');
      }
    } catch (error) {
      setMessage('Fehler beim Senden des Newsletters');
      setStatus('error');
    }
  };

  const handleSendWelcomeEmail = async () => {
    if (!testEmail) {
      setMessage('Bitte gib eine E-Mail-Adresse ein');
      setStatus('error');
      return;
    }

    setStatus('sending');
    setMessage('');

    try {
      const response = await fetch('/api/email/welcome', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: testEmail,
          name: 'Test User'
        }),
      });

      const result = await response.json();

      if (result.success) {
        setMessage('Willkommens-E-Mail erfolgreich gesendet!');
        setStatus('success');
      } else {
        setMessage(result.error || 'Fehler beim Senden');
        setStatus('error');
      }
    } catch (error) {
      setMessage('Fehler beim Senden der Willkommens-E-Mail');
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-cream p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-green mb-8">E-Mail Dashboard</h1>
        
        {/* Test Email Section */}
        <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg">
          <h2 className="text-2xl font-bold text-green mb-6">Test-E-Mails senden</h2>
          
          <div className="mb-6">
            <label className="block text-sm font-medium text-green mb-2">
              Test-E-Mail-Adresse
            </label>
            <input
              type="email"
              value={testEmail}
              onChange={(e) => setTestEmail(e.target.value)}
              placeholder="test@example.com"
              className="w-full px-4 py-3 border border-green/20 rounded-xl focus:border-copper focus:outline-none"
            />
          </div>

          <div className="flex gap-4">
            <button
              onClick={handleSendWelcomeEmail}
              disabled={status === 'sending'}
              className="btn-primary px-6 py-3 rounded-xl font-bold disabled:opacity-50"
            >
              Willkommens-E-Mail senden
            </button>
            
            <button
              onClick={handleSendTestNewsletter}
              disabled={status === 'sending'}
              className="btn-secondary px-6 py-3 rounded-xl font-bold disabled:opacity-50"
            >
              Test-Newsletter senden
            </button>
          </div>
        </div>

        {/* Newsletter Editor */}
        <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg">
          <h2 className="text-2xl font-bold text-green mb-6">Newsletter erstellen</h2>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-green mb-2">
                Betreff
              </label>
              <input
                type="text"
                value={newsletterData.subject}
                onChange={(e) => setNewsletterData(prev => ({ ...prev, subject: e.target.value }))}
                placeholder="z.B. Neues aus der Hundegesundheit"
                className="w-full px-4 py-3 border border-green/20 rounded-xl focus:border-copper focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-green mb-2">
                Inhalt (HTML)
              </label>
              <textarea
                value={newsletterData.content}
                onChange={(e) => setNewsletterData(prev => ({ ...prev, content: e.target.value }))}
                placeholder="<p>Hallo liebe Hundefreunde,</p><p>heute haben wir spannende Neuigkeiten für euch...</p>"
                rows={8}
                className="w-full px-4 py-3 border border-green/20 rounded-xl focus:border-copper focus:outline-none font-mono text-sm"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-green mb-2">
                  Produkt des Monats - Name
                </label>
                <input
                  type="text"
                  value={newsletterData.featuredProduct.name}
                  onChange={(e) => setNewsletterData(prev => ({ 
                    ...prev, 
                    featuredProduct: { ...prev.featuredProduct, name: e.target.value }
                  }))}
                  placeholder="z.B. Bright Mind"
                  className="w-full px-4 py-3 border border-green/20 rounded-xl focus:border-copper focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-green mb-2">
                  Produkt-Link
                </label>
                <input
                  type="url"
                  value={newsletterData.featuredProduct.link}
                  onChange={(e) => setNewsletterData(prev => ({ 
                    ...prev, 
                    featuredProduct: { ...prev.featuredProduct, link: e.target.value }
                  }))}
                  placeholder="https://foundingpaws.de/produkte/bright-mind"
                  className="w-full px-4 py-3 border border-green/20 rounded-xl focus:border-copper focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-green mb-2">
                Produkt-Beschreibung
              </label>
              <textarea
                value={newsletterData.featuredProduct.description}
                onChange={(e) => setNewsletterData(prev => ({ 
                  ...prev, 
                  featuredProduct: { ...prev.featuredProduct, description: e.target.value }
                }))}
                placeholder="Beschreibung des Produkts..."
                rows={3}
                className="w-full px-4 py-3 border border-green/20 rounded-xl focus:border-copper focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Status Message */}
        {message && (
          <div className={`p-4 rounded-xl ${
            status === 'success' ? 'bg-green/10 text-green border border-green/20' :
            status === 'error' ? 'bg-red/10 text-red-600 border border-red/20' :
            'bg-blue/10 text-blue-600 border border-blue/20'
          }`}>
            {message}
          </div>
        )}

        {/* Email Templates Preview */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-green mb-6">E-Mail-Templates</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-green/20 rounded-xl p-6">
              <h3 className="text-lg font-bold text-green mb-3">Willkommens-E-Mail</h3>
              <p className="text-green/70 text-sm mb-4">
                Automatisch gesendet bei Newsletter-Anmeldung
              </p>
              <div className="bg-green/5 p-4 rounded-lg text-sm text-green/80">
                • Herzliche Begrüßung<br/>
                • Überblick über Vorteile<br/>
                • Call-to-Action zu Produkten<br/>
                • Social Media Links
              </div>
            </div>

            <div className="border border-green/20 rounded-xl p-6">
              <h3 className="text-lg font-bold text-green mb-3">Newsletter</h3>
              <p className="text-green/70 text-sm mb-4">
                Regelmäßige Updates und Tipps
              </p>
              <div className="bg-green/5 p-4 rounded-lg text-sm text-green/80">
                • Anpassbarer Inhalt<br/>
                • Produkt des Monats<br/>
                • Ratgeber-Artikel<br/>
                • Exklusive Angebote
              </div>
            </div>

            <div className="border border-green/20 rounded-xl p-6">
              <h3 className="text-lg font-bold text-green mb-3">Produkt-Launch</h3>
              <p className="text-green/70 text-sm mb-4">
                Bei neuen Produkt-Einführungen
              </p>
              <div className="bg-green/5 p-4 rounded-lg text-sm text-green/80">
                • Produktvorstellung<br/>
                • Vorbestellungs-Link<br/>
                • Exklusive Rabatte<br/>
                • Launch-Datum
              </div>
            </div>

            <div className="border border-green/20 rounded-xl p-6">
              <h3 className="text-lg font-bold text-green mb-3">Abandoned Cart</h3>
              <p className="text-green/70 text-sm mb-4">
                Bei unvollständigen Käufen
              </p>
              <div className="bg-green/5 p-4 rounded-lg text-sm text-green/80">
                • Warenkorb-Inhalt<br/>
                • Kaufabschluss-Link<br/>
                • Vertrauenssignale<br/>
                • Zeitbegrenzung
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
