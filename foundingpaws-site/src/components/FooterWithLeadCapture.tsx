"use client";

import { useState } from "react";
import { Mail, Heart, ArrowRight } from "lucide-react";
import LeadCapture from "./LeadCapture";

export default function FooterWithLeadCapture() {
  const [showLeadCapture, setShowLeadCapture] = useState(false);

  return (
    <>
      {/* Footer Content */}
      <footer className="bg-charcoal text-cream py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            
            {/* Company Info */}
            <div className="md:col-span-1">
              <h3 className="text-xl font-heading mb-4">Founding Paws</h3>
              <p className="text-cream/70 text-sm mb-4">
                Wissenschaft mit Herz – Premium-Ergänzungen für deinen Hund.
              </p>
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                  <Heart className="w-4 h-4 text-primary" />
                </div>
                <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center">
                  <Mail className="w-4 h-4 text-accent" />
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-1">
              <h4 className="font-medium mb-4">Produkte</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/produkte/bright-mind" className="text-cream/70 hover:text-cream transition-colors">Bright Mind</a></li>
                <li><a href="/produkte/gentle-calm" className="text-cream/70 hover:text-cream transition-colors">Gentle Calm</a></li>
                <li><a href="/produkte/vital-joints" className="text-cream/70 hover:text-cream transition-colors">Vital Joints</a></li>
                <li><a href="/bedarfsfinder" className="text-cream/70 hover:text-cream transition-colors">Bedarfsfinder</a></li>
              </ul>
            </div>

            {/* Knowledge */}
            <div className="md:col-span-1">
              <h4 className="font-medium mb-4">Wissen</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/ratgeber" className="text-cream/70 hover:text-cream transition-colors">Ratgeber</a></li>
                <li><a href="/team" className="text-cream/70 hover:text-cream transition-colors">Über uns</a></li>
                <li><a href="/impressum" className="text-cream/70 hover:text-cream transition-colors">Impressum</a></li>
                <li><a href="/datenschutz" className="text-cream/70 hover:text-cream transition-colors">Datenschutz</a></li>
              </ul>
            </div>

            {/* Newsletter & Lead Capture */}
            <div className="md:col-span-1">
              <h4 className="font-medium mb-4">Newsletter</h4>
              <p className="text-cream/70 text-sm mb-4">
                Exklusive Pre-Launch-Angebote und wissenschaftliche Insights.
              </p>
              
              <button
                onClick={() => setShowLeadCapture(true)}
                className="w-full bg-accent hover:bg-accent-dark text-white py-3 px-4 rounded-xl font-medium transition-all duration-200 flex items-center justify-center gap-2 group mb-4"
              >
                <Mail className="w-4 h-4" />
                Jetzt anmelden
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="text-xs text-cream/50">
                <p>🔒 Keine Sorge, wir spammen nicht!</p>
                <p>Du kannst dich jederzeit abmelden.</p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-cream/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-cream/50 text-sm">
              © 2024 Founding Paws. Alle Rechte vorbehalten.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="/agb" className="text-cream/50 hover:text-cream text-sm transition-colors">AGB</a>
              <a href="/widerruf" className="text-cream/50 hover:text-cream text-sm transition-colors">Widerruf</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Lead Capture Modal */}
      <LeadCapture
        variant="popup"
        trigger="manual"
        isVisible={showLeadCapture}
        onClose={() => setShowLeadCapture(false)}
      />
    </>
  );
}
