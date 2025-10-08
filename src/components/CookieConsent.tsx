"use client";

import { useEffect, useState } from "react";
import { updateAdvancedConsent } from "@/lib/analytics";
import { cookieManager, CookiePreferences } from "@/lib/cookie-manager";
import { COOKIE_CATEGORIES, DEFAULT_PREFERENCES } from "@/lib/cookie-config";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(DEFAULT_PREFERENCES);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (!cookieManager.hasConsent()) {
        setVisible(true);
      }
      setPreferences(cookieManager.getPreferences());
    }
  }, []);

  const handleAcceptAll = () => {
    setIsAnimating(true);
    const allPreferences: CookiePreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
      personalization: true,
      functional: true
    };
    
    saveConsent(allPreferences);
  };

  const handleRejectAll = () => {
    setIsAnimating(true);
    const minimalPreferences: CookiePreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
      personalization: false,
      functional: false
    };
    
    saveConsent(minimalPreferences);
  };

  const handleSavePreferences = () => {
    setIsAnimating(true);
    saveConsent(preferences);
  };

  const saveConsent = (newPreferences: CookiePreferences) => {
    if (typeof window !== 'undefined') {
      cookieManager.saveConsent(newPreferences);
      
      // Update Google Analytics consent
      updateAdvancedConsent(newPreferences);
      
      // Trigger consent update event
      window.dispatchEvent(new CustomEvent('consent-updated', {
        detail: cookieManager.getConsentData()
      }));
    }
    
    setTimeout(() => {
      setVisible(false);
      setIsAnimating(false);
    }, 300);
  };

  const toggleCategory = (categoryId: string) => {
    setPreferences(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId as keyof CookiePreferences]
    }));
  };

  if (!visible) return null;

  return (
    <div className="cookie-modal-container fixed inset-0 z-50 flex items-end sm:items-center justify-center p-2 sm:p-4">
      {/* Backdrop */}
      <div 
        className="cookie-banner-backdrop absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleRejectAll}
      />
      
      {/* Banner */}
      <div className={`cookie-banner cookie-animation relative w-full max-w-4xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-200 transform transition-all duration-300 ${
        isAnimating ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
      }`}>
        <div className="p-4 sm:p-6 lg:p-8">
          {/* Header */}
          <div className="flex items-start justify-between mb-4 sm:mb-6">
            <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 truncate">Cookie-Einstellungen</h2>
                <p className="text-xs sm:text-sm text-gray-600">Wir respektieren Ihre Privatsphäre</p>
              </div>
            </div>
            <button
              onClick={handleRejectAll}
              className="text-gray-400 hover:text-gray-600 transition-colors p-1 -mr-1 flex-shrink-0 touch-manipulation"
              aria-label="Schließen"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Main Content */}
          <div className="mb-4 sm:mb-6">
            <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4 leading-relaxed">
              Wir verwenden Cookies, um Ihre Erfahrung zu verbessern, unsere Website zu analysieren und personalisierte Inhalte bereitzustellen. 
              Sie können Ihre Präferenzen jederzeit anpassen.
            </p>
            
            {!showDetails ? (
              <div className="bg-gray-50 rounded-lg sm:rounded-xl p-3 sm:p-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Schnelle Auswahl</h3>
                    <p className="text-xs sm:text-sm text-gray-600">Wählen Sie eine vordefinierte Option</p>
                  </div>
                  <button
                    onClick={() => setShowDetails(true)}
                    className="text-green hover:text-green/80 text-xs sm:text-sm font-medium transition-colors touch-manipulation px-2 py-1 -mx-2 -my-1 rounded"
                  >
                    Details anpassen →
                  </button>
                </div>
              </div>
            ) : (
              <div className="cookie-content-scrollable space-y-3 sm:space-y-4 max-h-96 sm:max-h-none overflow-y-auto">
                {COOKIE_CATEGORIES.map((category) => (
                  <div key={category.id} className="border border-gray-200 rounded-lg sm:rounded-xl p-3 sm:p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                          <h3 className="font-semibold text-gray-900 text-sm sm:text-base">{category.name}</h3>
                          {category.required && (
                            <span className="px-2 py-1 bg-green/10 text-green text-xs font-medium rounded-full self-start">
                              Erforderlich
                            </span>
                          )}
                        </div>
                        <p className="text-xs sm:text-sm text-gray-600 mb-2 leading-relaxed">{category.description}</p>
                        <div className="text-xs text-gray-500 space-y-1">
                          <div><strong>Zweck:</strong> {category.purpose}</div>
                          <div><strong>Speicherdauer:</strong> {category.retention}</div>
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        <label className="cookie-toggle relative inline-flex items-center cursor-pointer touch-manipulation">
                          <input
                            type="checkbox"
                            checked={preferences[category.id as keyof CookiePreferences] || false}
                            onChange={() => toggleCategory(category.id)}
                            disabled={category.required}
                            className="sr-only"
                          />
                          <div className={`w-10 h-5 sm:w-11 sm:h-6 rounded-full transition-colors ${
                            preferences[category.id as keyof CookiePreferences] || category.required
                              ? 'bg-green' 
                              : 'bg-gray-200'
                          } ${category.required ? 'opacity-50' : ''}`}>
                            <div className={`w-4 h-4 sm:w-5 sm:h-5 bg-white rounded-full shadow transform transition-transform ${
                              preferences[category.id as keyof CookiePreferences] || category.required
                                ? 'translate-x-5 sm:translate-x-5' 
                                : 'translate-x-0.5'
                            } mt-0.5`} />
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="flex flex-col gap-4 pt-3 sm:pt-4 border-t border-gray-200">
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-600">
              <a href="/datenschutz" className="hover:text-green transition-colors touch-manipulation px-1 -mx-1 py-1 rounded">
                Datenschutzerklärung
              </a>
              <a href="/impressum" className="hover:text-green transition-colors touch-manipulation px-1 -mx-1 py-1 rounded">
                Impressum
              </a>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              {showDetails ? (
                <>
                  <button
                    onClick={() => setShowDetails(false)}
                    className="px-4 sm:px-6 py-2.5 sm:py-2 text-gray-600 hover:text-gray-800 transition-colors touch-manipulation text-sm sm:text-base"
                  >
                    Zurück
                  </button>
                  <button
                    onClick={handleSavePreferences}
                    className="px-4 sm:px-6 py-2.5 sm:py-2 bg-green text-white rounded-lg hover:bg-green/90 transition-colors font-medium touch-manipulation text-sm sm:text-base"
                  >
                    Präferenzen speichern
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={handleRejectAll}
                    className="px-4 sm:px-6 py-2.5 sm:py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors touch-manipulation text-sm sm:text-base"
                  >
                    Nur notwendige
                  </button>
                  <button
                    onClick={handleAcceptAll}
                    className="cookie-button px-4 sm:px-6 py-2.5 sm:py-2 bg-green text-white rounded-lg hover:bg-green/90 transition-colors font-medium touch-manipulation text-sm sm:text-base"
                  >
                    Alle akzeptieren
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


