"use client";

import { useEffect } from 'react';
import LeadCapture from './LeadCapture';

export default function GlobalLeadCapture() {
  useEffect(() => {
    // Check if user has already seen the lead capture
    const hasSeenLeadCapture = localStorage.getItem('lead-capture-shown') === 'true';
    
    if (!hasSeenLeadCapture) {
      // This will be handled by the LeadCapture component itself
    }
  }, []);

  return (
    <LeadCapture
      variant="popup"
      trigger="delay"
      delay={5000}
      showCloseButton={true}
    />
  );
}
