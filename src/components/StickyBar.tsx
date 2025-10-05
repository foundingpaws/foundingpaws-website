"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function StickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Show after first viewport scrolled
      setVisible(window.scrollY > window.innerHeight * 0.6);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`fixed inset-x-0 bottom-4 z-50 px-4 sm:hidden transition-transform ${visible ? "translate-y-0" : "translate-y-24"}`}>
      <div className="mx-auto max-w-md rounded-full bg-green text-cream shadow-[0_14px_40px_-16px_rgba(0,66,37,0.5)] border border-cream/10 flex items-center justify-between gap-3 px-4 py-2">
        <span className="text-sm">Warteliste sichern +10%</span>
        <Link href="#waitlist" className="pill bg-copper text-cream px-4 py-2 text-sm font-medium">
          Jetzt anmelden
        </Link>
      </div>
    </div>
  );
}


