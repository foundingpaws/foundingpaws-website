"use client";

import { useState } from "react";

type Answer = string | null;

export default function FinderMVP() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<{size: Answer; goal: Answer; age: Answer}>({ size: null, goal: null, age: null });

  const next = () => setStep((s) => Math.min(4, s + 1));
  const back = () => setStep((s) => Math.max(1, s - 1));

  const select = (key: keyof typeof answers, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
    next();
  };

  const recommend = () => {
    // Very light heuristic
    if (answers.goal === 'Kognition & Herz') return { href: '/kognition-herz', title: 'Bright Mind' };
    if (answers.goal === 'Stress & Angst') return { href: '/stress-angst', title: 'Gentle Calm' };
    if (answers.goal === 'Gelenke & Mobilität') return { href: '/gelenke-mobilitaet', title: 'Vital Joints' };
    return { href: '#products', title: 'Unsere Formeln' };
  };

  const rec = recommend();

  return (
    <section className="wv-section bg-cream" id="finder-mvp">
      <div className="container-wide">
        <div className="text-center wv-spacing-2xl">
          <div className="inline-block pill bg-copper/15 border border-copper/25 px-5 py-2 wv-eyebrow wv-spacing-md text-copper">Bedarfsfinder</div>
          <h2 className="wv-h2 text-green wv-spacing-sm">Finde die perfekte Formel</h2>
          <div className="w-16 h-1 bg-copper mx-auto rounded-full wv-spacing-md"></div>
          <p className="wv-lead text-green/70 wv-spacing-md">Beantworte 3 Fragen – wir empfehlen dir das Richtige.</p>
        </div>

        <div className="max-w-2xl mx-auto bg-white/70 backdrop-blur-sm border border-taupe/20 rounded-[24px] p-6 sm:p-8">
          {/* Progress */}
          <div className="mb-6">
            <div className="h-1 bg-green/10 rounded">
              <div className="h-1 bg-copper rounded" style={{width: `${(step-1)/3*100}%`}} />
            </div>
            <div className="text-right wv-caption text-green/60 wv-spacing-xs">Schritt {step} / 4</div>
          </div>
          {step === 1 && (
            <div>
              <div className="wv-h4 text-green wv-spacing-sm">Größe deines Hundes</div>
              <div className="grid grid-cols-3 gap-3">
                {['Klein', 'Mittel', 'Groß'].map((s) => (
                  <button key={s} onClick={() => select('size', s)} className={`pill px-4 py-3 border ${answers.size===s?'bg-green text-cream border-green':'bg-cream text-green border-taupe/20'}`}>{s}</button>
                ))}
              </div>
            </div>
          )}
          {step === 2 && (
            <div>
              <div className="wv-h4 text-green wv-spacing-sm">Ziel</div>
              <div className="grid sm:grid-cols-3 gap-3">
                {['Kognition & Herz', 'Stress & Angst', 'Gelenke & Mobilität'].map((g) => (
                  <button key={g} onClick={() => select('goal', g)} className={`pill px-4 py-3 border ${answers.goal===g?'bg-green text-cream border-green':'bg-cream text-green border-taupe/20'}`}>{g}</button>
                ))}
              </div>
            </div>
          )}
          {step === 3 && (
            <div>
              <div className="wv-h4 text-green wv-spacing-sm">Alter</div>
              <div className="grid grid-cols-3 gap-3">
                {['Jung', 'Erwachsen', 'Senior'].map((a) => (
                  <button key={a} onClick={() => select('age', a)} className={`pill px-4 py-3 border ${answers.age===a?'bg-green text-cream border-green':'bg-cream text-green border-taupe/20'}`}>{a}</button>
                ))}
              </div>
            </div>
          )}
          {step === 4 && (
            <div className="text-center">
              <div className="wv-h4 text-green wv-spacing-sm">Unsere Empfehlung</div>
              <div className="wv-card p-5 mb-4 inline-block text-left max-w-md">
                <div className="text-green font-medium mb-1">{rec.title}</div>
                <div className="text-green/70 wv-body">Warum diese Empfehlung: passt zu „{answers.goal ?? 'deinem Ziel'}"{answers.age?`, Alter ${answers.age}`:''}{answers.size?`, Größe ${answers.size}`:''}.</div>
              </div>
              <a href={rec.href} className="pill bg-copper text-cream px-6 py-3 inline-block">{rec.title} ansehen →</a>
              <div className="text-green/60 wv-caption wv-spacing-sm">Vorläufige Empfehlung – MVP</div>
            </div>
          )}

          <div className="flex justify-between mt-6">
            <button onClick={back} className="text-green/60 wv-caption" disabled={step===1}>Zurück</button>
            <button onClick={next} className="text-green/60 wv-caption" disabled={step===4}>Weiter</button>
          </div>
        </div>
      </div>
    </section>
  );
}


