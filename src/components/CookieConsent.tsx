"use client";

import { useEffect, useState } from "react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem("fp-consent");
      if (!stored) setVisible(true);
    }
  }, []);

  const accept = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem("fp-consent", JSON.stringify({ analytics: true, ts: Date.now() }));
    }
    setVisible(false);
  };
  const decline = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem("fp-consent", JSON.stringify({ analytics: false, ts: Date.now() }));
    }
    setVisible(false);
  };

  if (!visible) return null;
  return (
    <div className="fixed bottom-4 left-0 right-0 z-50">
      <div className="container-wide">
        <div className="bg-green text-cream rounded-2xl border border-cream/15 shadow-2xl p-4 sm:p-6 flex flex-col sm:flex-row items-center gap-4">
          <p className="text-sm sm:text-base flex-1">
            Wir verwenden Cookies, um die Website zu verbessern. Du kannst selbst entscheiden, ob
            du Analyse-Cookies zulässt.
          </p>
          <div className="flex gap-3">
            <button onClick={decline} className="pill bg-cream/10 border border-cream/30 px-5 py-2 text-sm">
              Ablehnen
            </button>
            <button onClick={accept} className="pill bg-copper text-cream px-5 py-2 text-sm">
              Akzeptieren
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


