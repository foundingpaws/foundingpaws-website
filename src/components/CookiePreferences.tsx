"use client";

import { useState, useEffect } from "react";
import { cookieManager, CookiePreferences } from "@/lib/cookie-manager";
import { COOKIE_CATEGORIES, DEFAULT_PREFERENCES } from "@/lib/cookie-config";

export default function CookiePreferences() {
  const [isOpen, setIsOpen] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(DEFAULT_PREFERENCES);
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    setHasConsent(cookieManager.hasConsent());
    setPreferences(cookieManager.getPreferences());
  }, []);

  const toggleCategory = (categoryId: string) => {
    setPreferences(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId as keyof CookiePreferences]
    }));
  };

  const savePreferences = () => {
    cookieManager.saveConsent(preferences);
    setHasConsent(true);
    setIsOpen(false);
    
    // Trigger consent update
    window.dispatchEvent(new CustomEvent('consent-updated', {
      detail: cookieManager.getConsentData()
    }));
  };

  const resetToDefaults = () => {
    setPreferences(DEFAULT_PREFERENCES);
  };

  if (!hasConsent) return null;

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="text-sm text-cream/70 hover:text-copper transition-colors"
      >
        Cookie-Einstellungen
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-2 sm:p-4">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          
          <div className="relative w-full max-w-2xl bg-white rounded-2xl sm:rounded-2xl shadow-2xl border border-gray-200 max-h-[90vh] sm:max-h-none overflow-hidden">
            <div className="p-4 sm:p-6 max-h-[90vh] sm:max-h-none overflow-y-auto">
              {/* Header */}
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h2 className="text-base sm:text-lg font-bold text-gray-900 truncate">Cookie-Präferenzen</h2>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors p-1 -mr-1 flex-shrink-0 touch-manipulation"
                  aria-label="Schließen"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Content */}
              <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                {COOKIE_CATEGORIES.map((category) => (
                  <div key={category.id} className="border border-gray-200 rounded-lg p-3 sm:p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-1">
                          <h3 className="font-medium text-gray-900 text-sm sm:text-base">{category.name}</h3>
                          {category.required && (
                            <span className="px-2 py-1 bg-green/10 text-green text-xs font-medium rounded-full self-start">
                              Erforderlich
                            </span>
                          )}
                        </div>
                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{category.description}</p>
                      </div>
                      <div className="flex-shrink-0">
                        <label className="relative inline-flex items-center cursor-pointer touch-manipulation">
                          <input
                            type="checkbox"
                            checked={preferences[category.id as keyof CookiePreferences] || false}
                            onChange={() => toggleCategory(category.id)}
                            disabled={category.required}
                            className="sr-only"
                          />
                          <div className={`w-9 h-5 sm:w-10 sm:h-5 rounded-full transition-colors ${
                            preferences[category.id as keyof CookiePreferences] || category.required
                              ? 'bg-green' 
                              : 'bg-gray-200'
                          } ${category.required ? 'opacity-50' : ''}`}>
                            <div className={`w-4 h-4 bg-white rounded-full shadow transform transition-transform ${
                              preferences[category.id as keyof CookiePreferences] || category.required
                                ? 'translate-x-4 sm:translate-x-5' 
                                : 'translate-x-0.5'
                            } mt-0.5`} />
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0 pt-3 sm:pt-4 border-t border-gray-200">
                <button
                  onClick={resetToDefaults}
                  className="text-xs sm:text-sm text-gray-600 hover:text-gray-800 transition-colors touch-manipulation px-1 -mx-1 py-1 rounded"
                >
                  Zurücksetzen
                </button>
                <div className="flex gap-2 sm:gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="px-3 sm:px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors touch-manipulation text-sm sm:text-base flex-1 sm:flex-none"
                  >
                    Abbrechen
                  </button>
                  <button
                    onClick={savePreferences}
                    className="px-3 sm:px-4 py-2 bg-green text-white rounded-lg hover:bg-green/90 transition-colors font-medium touch-manipulation text-sm sm:text-base flex-1 sm:flex-none"
                  >
                    Speichern
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
