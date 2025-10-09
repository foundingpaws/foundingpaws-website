"use client";

import { useEffect, useState } from "react";
import LeadCapture from "./LeadCapture";

export default function GlobalLeadCapture() {
  const [showLeadCapture, setShowLeadCapture] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check if user has already seen the lead capture
    const hasSeenLeadCapture = localStorage.getItem('foundingpaws-lead-capture-shown');
    if (hasSeenLeadCapture) {
      setHasShown(true);
      return;
    }

    // Show lead capture after 5 seconds on mobile, 10 seconds on desktop
    const isMobile = window.innerWidth < 1024;
    const delay = isMobile ? 5000 : 10000;

    const timer = setTimeout(() => {
      if (!hasShown) {
        setShowLeadCapture(true);
        setHasShown(true);
        localStorage.setItem('foundingpaws-lead-capture-shown', 'true');
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [hasShown]);

  const handleClose = () => {
    setShowLeadCapture(false);
  };

  const handleSuccess = () => {
    // Mark as shown after successful submission
    localStorage.setItem('foundingpaws-lead-capture-shown', 'true');
    setHasShown(true);
  };

  if (!showLeadCapture) return null;

  return (
    <LeadCapture
      variant="popup"
      trigger="manual"
      isVisible={showLeadCapture}
      onClose={handleClose}
      showCloseButton={true}
    />
  );
}
