"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Wann werden die Produkte verfügbar sein?",
    answer: "Wir planen den Launch für die nächsten Wochen. Melde dich für unsere Warteliste an, um als Erster benachrichtigt zu werden und 10% Launch-Rabatt zu erhalten.",
  },
  {
    question: "Warum Founding Paws?",
    answer: "Wir kombinieren wissenschaftliche Exzellenz mit echter Hundeliebe. Jedes Supplement wird in Zusammenarbeit mit Tierärzten entwickelt und in unserer Manufaktur in Heilbronn handgefertigt – mit 100% natürlichen, rückverfolgbaren Inhaltsstoffen.",
  },
  {
    question: "Sind die Supplements sicher für alle Hunde?",
    answer: "Unsere Formeln sind für gesunde, erwachsene Hunde konzipiert. Bei spezifischen Gesundheitsproblemen oder Medikamenteneinnahme empfehlen wir, vor der Anwendung mit deinem Tierarzt zu sprechen.",
  },
  {
    question: "Wie werden die Produkte hergestellt?",
    answer: "Alle Supplements werden in kleinen Chargen in unserer Manufaktur in Heilbronn gefertigt – mit höchsten Qualitätsstandards, regelmäßigen Laborkontrollen und vollständiger Rückverfolgbarkeit jeder Zutat.",
  },
  {
    question: "Was macht Founding Paws anders?",
    answer: "Transparenz, Wissenschaft und Liebe. Wir zeigen dir genau, was drin ist, woher es kommt und warum. Keine Füllstoffe, keine leeren Versprechen – nur das Beste für deinen Hund.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 sm:py-32 bg-cream">
      <div className="container-wide max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="use-retrips text-4xl sm:text-6xl text-green mb-6">
            Häufige Fragen
          </h2>
          <div className="w-16 h-1 bg-copper mx-auto rounded-full mb-6"></div>
          <p className="use-fredoka text-lg text-green/70">
            Alles, was du über Founding Paws wissen musst.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white/70 backdrop-blur-sm border border-taupe/20 rounded-[24px] hover-lift overflow-hidden transition-all shadow-[0_8px_32px_-12px_rgba(142,127,116,0.2)]"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full text-left p-6 sm:p-8 flex items-start justify-between gap-4"
              >
                <h3 className="use-fredoka text-lg sm:text-xl text-green flex-1">
                  {faq.question}
                </h3>
                <span
                  className={`text-copper text-2xl transition-transform ${
                    openIndex === idx ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              {openIndex === idx && (
                <div className="px-6 sm:px-8 pb-6 sm:pb-8 text-green/75 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-green/70 mb-4">Noch Fragen?</p>
          <a
            href="mailto:hallo@foundingpaws.de"
            className="pill bg-green text-cream px-6 py-3 inline-block font-medium hover:opacity-95 hover:scale-105 transition-all"
          >
            Schreib uns
          </a>
        </div>
      </div>
    </section>
  );
}

