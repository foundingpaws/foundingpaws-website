"use client";

import { useEffect } from 'react';
import LeadCapture from './LeadCapture';

export default function GlobalLeadCapture() {
  useEffect(() => {
    // Check if user has already seen the lead capture
    const hasSeenLeadCapture = localStorage.getItem('lead-capture-shown') === 'true';
    
    if (!hasSeenLeadCapture) {
      // Show after 5 seconds
      const timer = setTimeout(() => {
        // This will be handled by the LeadCapture component itself
      }, 5000);
      
      return () => clearTimeout(timer);
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
