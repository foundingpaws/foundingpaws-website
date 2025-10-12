"use client";

import { useEffect, useMemo, useState } from "react";

type Props = {
  targetISO?: string; // ISO string in UTC
  className?: string;
  compact?: boolean;
};

// Default launch date: 1 December 2025 00:00:00 local time Europe/Berlin converted to UTC by Date ctor
const DEFAULT_TARGET = "2025-12-01T00:00:00+01:00"; // CET

function getTimeParts(ms: number) {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return { days, hours, minutes, seconds };
}

export default function LaunchCountdown({ targetISO = DEFAULT_TARGET, className = "", compact = false }: Props) {
  const target = useMemo(() => new Date(targetISO).getTime(), [targetISO]);
  const [now, setNow] = useState<number>(() => Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const remainingMs = Math.max(0, target - now);
  const { days, hours, minutes, seconds } = getTimeParts(remainingMs);
  const finished = remainingMs <= 0;

  const wrapperClass = compact ? "text-center" : "text-center wv-section-sm";
  const numberClass = compact ? "text-2xl sm:text-3xl font-semibold leading-none text-cream" : "wv-h3 text-green mb-1 leading-none";
  const labelClass = compact ? "text-xs text-cream/80" : "wv-caption text-green/70";

  return (
    <div className={`w-full ${className}`} aria-live="polite" role="timer">
      <div className={wrapperClass}>
        {!compact && (
          <>
            <div className="inline-block pill bg-green/5 border border-green/15 text-green wv-caption px-4 py-1 mb-3">Launch Countdown</div>
            <h3 className="wv-h3 text-green mb-4">Unsere Produkte gehen live am 1.12.2025</h3>
          </>
        )}
        {finished ? (
          <div className={compact ? "text-cream font-medium" : "text-green font-medium"}>Wir sind live! 🎉</div>
        ) : (
          <div className={`flex items-stretch justify-center gap-3 sm:gap-4 select-none ${compact ? "" : ""}`} data-testid="countdown">
            {[{label:'Tage',value:days},{label:'Stunden',value:hours},{label:'Minuten',value:minutes},{label:'Sekunden',value:seconds}].map(({label,value}) => (
              <div key={label} className="min-w-[64px] sm:min-w-[88px] text-center">
                <div className={numberClass}>
                  {String(value).padStart(2,'0')}
                </div>
                <div className={labelClass}>{label}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}


