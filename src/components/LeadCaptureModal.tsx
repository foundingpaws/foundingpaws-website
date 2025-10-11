"use client";

import { useState } from "react";
import { useLeadCapture } from "@/hooks/useLeadCapture";

type LeadCaptureModalProps = {
  delayMs?: number;
};

export default function LeadCaptureModal({ delayMs = 3000 }: LeadCaptureModalProps) {
  const { isVisible, hideLeadCapture } = useLeadCapture({ trigger: "delay", delay: delayMs, showOnce: true, storageKey: "lead-capture-welcome" });
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  if (!isVisible) return null;

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name, source: "homepage-modal" }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data?.error || "Fehler. Bitte erneut versuchen.");
        setLoading(false);
        return;
      }
      setSuccess(true);
      setLoading(false);
    } catch (err) {
      setError("Netzwerkfehler. Bitte später erneut versuchen.");
      setLoading(false);
    }
  };

  return (
    <div role="dialog" aria-modal="true" className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40" onClick={hideLeadCapture} />
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden">
        <button aria-label="Schließen" onClick={hideLeadCapture} className="absolute top-3 right-3 w-10 h-10 rounded-full bg-green/10 text-green hover:bg-green/15">
          ×
        </button>
        <div className="p-8 text-center">
          <div className="pill mx-auto mb-4 px-4 py-2 bg-copper/15 text-copper font-semibold w-max">Exklusiv</div>
          <h2 className="wv-h2 text-green mb-2">10% auf deine 1. Bestellung</h2>
          <p className="wv-body text-green/70 mb-6">1% deiner Bestellung geht an ein Tierheim.</p>
          {!success ? (
            <form onSubmit={onSubmit} className="space-y-3 text-left">
              <div>
                <label htmlFor="name" className="wv-caption text-green/70">Vorname (optional)</label>
                <input id="name" value={name} onChange={(e) => setName(e.target.value)} className="w-full mt-1 px-4 py-3 rounded-xl border border-green/20 focus:border-copper focus:ring-2 focus:ring-copper/20" placeholder="Vorname" />
              </div>
              <div>
                <label htmlFor="email" className="wv-caption text-green/70">E-Mail Adresse</label>
                <input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full mt-1 px-4 py-3 rounded-xl border border-green/20 focus:border-copper focus:ring-2 focus:ring-copper/20" placeholder="deine@email.de" />
              </div>
              {error && <div className="text-red-600 wv-caption">{error}</div>}
              <button type="submit" disabled={loading} className="w-full bg-copper text-cream px-6 py-3 rounded-xl font-semibold hover:bg-copper/90 disabled:opacity-60">
                {loading ? "Wird angemeldet..." : "Jetzt anmelden & Code erhalten"}
              </button>
              <p className="wv-caption text-green/60 text-center">* Nur für Neukunden. Abmeldung jederzeit möglich.</p>
            </form>
          ) : (
            <div className="py-8">
              <div className="text-4xl mb-2">🎉</div>
              <p className="wv-h4 text-green mb-2 text-center">Fast geschafft!</p>
              <p className="wv-body text-green/70 text-center">Bitte bestätige deine Anmeldung in der E‑Mail. Danach erhältst du deinen 10%-Code.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}


