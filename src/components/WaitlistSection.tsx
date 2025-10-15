"use client";

import { useState } from "react";
import IconTarget from "@/components/icons/IconTarget";
import IconRocket from "@/components/icons/IconRocket";
import IconSparkles from "@/components/icons/IconSparkles";

interface WaitlistSectionProps {
  productKey: string;
  locale?: 'de' | 'en';
  title?: string;
  headline?: string;
  description?: string;
}

export default function WaitlistSection({
  productKey,
  locale = 'de',
  title,
  headline,
  description
}: WaitlistSectionProps) {
  const t = (key: string) => {
    const dict = {
      de: {
        title: 'Exklusive Warteliste',
        headline: 'Sei dabei, wenn es verfügbar wird',
        description: 'Melde dich an und erhalte 10% Launch‑Rabatt, Vorabzugang und Updates.',
        benefit1: '10% Launch‑Rabatt',
        benefit1Desc: 'Exklusiv für Wartelisten‑Mitglieder bei der ersten Bestellung',
        benefit2: 'Vorabzugang',
        benefit2Desc: 'Als Erste:r bestellen, bevor alle anderen Zugang haben',
        benefit3: 'Exklusive Updates',
        benefit3Desc: 'Entwicklungsfortschritte, Tipps und Neuigkeiten direkt in dein Postfach',
        ctaHeadline: 'Jetzt anmelden',
        ctaSub: 'Kostenlos und jederzeit kündbar. Keine Spam‑E‑Mails.',
        emailPlaceholder: 'deine@email.de',
        submit: 'Jetzt 10% Rabatt sichern',
        submitting: 'Wird angemeldet...',
        successHeadline: 'Perfekt! Du bist dabei',
        successText: 'Wir melden uns bald mit deinem exklusiven 10% Rabatt‑Code.'
      },
      en: {
        title: 'Exclusive Waitlist',
        headline: 'Be first when it becomes available',
        description: 'Join and get 10% launch discount, early access and updates.',
        benefit1: '10% Launch Discount',
        benefit1Desc: 'Exclusive for waitlist members on first order',
        benefit2: 'Early Access',
        benefit2Desc: 'Order before everyone else',
        benefit3: 'Exclusive Updates',
        benefit3Desc: 'Progress, tips and news straight to your inbox',
        ctaHeadline: 'Join now',
        ctaSub: 'Free and cancel anytime. No spam.',
        emailPlaceholder: 'your@email.com',
        submit: 'Claim 10% launch discount',
        submitting: 'Submitting...',
        successHeadline: 'Great! You are on the list',
        successText: 'We will be in touch with your 10% discount code.'
      }
    } as const;
    // @ts-expect-error keyed by const locales
    return dict[locale][key];
  };

  const tTitle = title || t('title');
  const tHeadline = headline || t('headline');
  const tDescription = description || t('description');
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");
    try {
      const res = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.toLowerCase().trim(), name: null, source: `${productKey}-waitlist` })
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setErrorMessage(data?.error || 'Fehler beim Anmelden. Bitte versuche es erneut.');
        setIsLoading(false);
        return;
      }
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setErrorMessage('Ein unerwarteter Fehler ist aufgetreten.');
    }
    setIsLoading(false);
  };

  return (
    <section id="waitlist" className="wv-section bg-gradient-to-br from-green to-green/90 text-cream">
      <div className="container-wide">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block pill bg-white/20 border border-white/30 px-6 py-3 wv-eyebrow wv-spacing-sm text-white font-medium">
              {tTitle}
            </div>
            <h2 className="wv-h2 text-white wv-spacing-sm">
              {tHeadline}
            </h2>
            <div className="w-16 h-1 bg-copper mx-auto rounded-full wv-spacing-md"></div>
            <p className="wv-lead text-white/90 wv-spacing-md max-w-3xl mx-auto">
              {tDescription}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Benefits */}
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-white/10 rounded-2xl border border-white/20">
                <div className="w-12 h-12 bg-copper/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <IconTarget className="w-6 h-6 text-copper" />
                </div>
                <div>
                  <h3 className="wv-h4 text-white wv-spacing-xs">{t('benefit1')}</h3>
                  <p className="wv-body text-white/80">{t('benefit1Desc')}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white/10 rounded-2xl border border-white/20">
                <div className="w-12 h-12 bg-copper/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <IconRocket className="w-6 h-6 text-copper" />
                </div>
                <div>
                  <h3 className="wv-h4 text-white wv-spacing-xs">{t('benefit2')}</h3>
                  <p className="wv-body text-white/80">{t('benefit2Desc')}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white/10 rounded-2xl border border-white/20">
                <div className="w-12 h-12 bg-copper/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <IconSparkles className="w-6 h-6 text-copper" />
                </div>
                <div>
                  <h3 className="wv-h4 text-white wv-spacing-xs">{t('benefit3')}</h3>
                  <p className="wv-body text-white/80">{t('benefit3Desc')}</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white/10 rounded-3xl p-8 border border-white/20">
              {!submitted ? (
                <div>
                  <h3 className="wv-h3 text-white wv-spacing-sm text-center">{t('ctaHeadline')}</h3>
                  <p className="wv-body text-white/80 wv-spacing-md text-center">{t('ctaSub')}</p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t('emailPlaceholder')}
                      className="w-full px-4 py-4 rounded-xl border border-cream/30 focus:border-copper focus:ring-2 focus:ring-copper/20 text-green bg-white/80 placeholder-green/50 text-lg"
                    />
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-copper text-cream px-8 py-4 rounded-xl font-medium hover:bg-copper/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed text-lg"
                    >
                      {isLoading ? (
                        <span className="flex items-center justify-center gap-2">
                          <div className="w-5 h-5 border-2 border-cream/30 border-t-cream rounded-full animate-spin"></div>
                          {t('submitting')}
                        </span>
                      ) : (
                        t('submit')
                      )}
                    </button>
                  </form>
                  {errorMessage && (
                    <div className="mt-4 p-4 bg-red/10 border border-red/20 rounded-xl">
                      <p className="text-red-600 font-medium text-center flex items-center justify-center gap-2">
                        <span className="text-xl">⚠️</span>
                        <span>{errorMessage}</span>
                      </p>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center">
                  <div className="w-16 h-16 bg-copper/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl text-copper">✓</span>
                  </div>
                  <h3 className="wv-h3 text-white wv-spacing-sm">{t('successHeadline')}</h3>
                  <p className="wv-body text-white/80">{t('successText')}</p>
                </div>
              )}
            </div>
          </div>

          {/* Trust Elements */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="flex flex-wrap justify-center gap-8 text-white/70">
              <div className="flex items-center gap-2">
                <span>🇩🇪</span>
                <span>Made in Germany</span>
              </div>
              <div className="flex items-center gap-2">
                <span>🧪</span>
                <span>Eigene Qualitätskontrolle</span>
              </div>
              <div className="flex items-center gap-2">
                <span>👩‍⚕️</span>
                <span>Tierärztlich entwickelt</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


