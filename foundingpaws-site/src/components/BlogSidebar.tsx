"use client";

import { useState } from "react";
import { Mail, Heart, ArrowRight } from "lucide-react";
import LeadCapture from "./LeadCapture";

interface BlogSidebarProps {
  className?: string;
}

export default function BlogSidebar({ className = '' }: BlogSidebarProps) {
  const [showLeadCapture, setShowLeadCapture] = useState(false);

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Lead Capture Card */}
      <div className="bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 rounded-2xl p-6 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full -translate-y-10 translate-x-10" />
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-accent/10 rounded-full translate-y-8 -translate-x-8" />
        
        <div className="relative">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
              <Heart className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-heading text-lg text-charcoal">
              Exklusive Angebote
            </h3>
          </div>
          
          <p className="text-taupe text-sm mb-4 leading-relaxed">
            Erhalte als Erste*r Zugang zu unseren Pre-Launch-Angeboten und wissenschaftlichen Insights zur Hundegesundheit.
          </p>
          
          <button
            onClick={() => setShowLeadCapture(true)}
            className="w-full bg-primary hover:bg-primary-dark text-white py-3 px-4 rounded-xl font-medium transition-all duration-200 flex items-center justify-center gap-2 group"
          >
            <Mail className="w-4 h-4" />
            Jetzt anmelden
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="bg-secondary/50 rounded-xl p-4">
        <div className="flex items-center gap-2 text-sm text-taupe mb-2">
          <div className="w-2 h-2 bg-success rounded-full" />
          <span>Über 1.000 zufriedene Hundebesitzer</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-taupe mb-2">
          <div className="w-2 h-2 bg-success rounded-full" />
          <span>Wissenschaftlich fundiert</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-taupe">
          <div className="w-2 h-2 bg-success rounded-full" />
          <span>Jederzeit abmeldbar</span>
        </div>
      </div>

      {/* Lead Capture Modal */}
      <LeadCapture
        variant="popup"
        trigger="manual"
        isVisible={showLeadCapture}
        onClose={() => setShowLeadCapture(false)}
      />
    </div>
  );
}
