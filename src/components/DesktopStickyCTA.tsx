"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function DesktopStickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const threshold = window.innerHeight * 0.35;
      setVisible(window.scrollY > threshold);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`hidden md:block fixed bottom-4 left-0 right-0 z-40 transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-24"
      }`}
      aria-hidden={!visible}
    >
      <div className="container-wide">
        <div className="pill bg-green/95 backdrop-blur-xl border border-cream/10 shadow-[0_20px_60px_-20px_rgba(0,66,37,0.5)] px-4 py-3 flex items-center justify-center gap-3">
          <Link
            href="#products"
            className="pill bg-copper text-cream px-7 py-3 text-sm font-medium shadow-[0_8px_24px_-8px_rgba(180,106,52,0.6)] hover:opacity-95"
          >
            Produkte ansehen →
          </Link>
          <Link
            href="#waitlist"
            className="pill bg-cream/10 border border-cream/30 text-cream px-7 py-3 text-sm font-medium hover:bg-cream/15"
          >
            Warteliste sichern +10%
          </Link>
        </div>
      </div>
    </div>
  );
}


