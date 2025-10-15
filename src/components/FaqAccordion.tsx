"use client";

import { useState } from "react";

export type FaqItem = { question: string; answer: string };

type FaqAccordionProps = {
  items: FaqItem[];
  title?: string;
  subtitle?: string;
};

export default function FaqAccordion({ items, title = "Häufige Fragen", subtitle }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="wv-section bg-cream">
      <div className="container-wide max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="wv-h2 text-green mb-6">{title}</h2>
          <div className="w-16 h-1 bg-copper mx-auto rounded-full mb-6"></div>
          {subtitle && <p className="wv-subhead text-green/70">{subtitle}</p>}
        </div>

        <div className="space-y-4">
          {items.map((faq, idx) => (
            <div key={idx} className="wv-card hover-lift overflow-hidden transition-all">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full text-left p-6 sm:p-8 flex items-start justify-between gap-4"
              >
                <h3 className="wv-subhead text-green flex-1">{faq.question}</h3>
                <span className={`text-copper text-2xl transition-transform ${openIndex === idx ? "rotate-45" : ""}`}>+</span>
              </button>
              {openIndex === idx && (
                <div className="px-6 sm:px-8 pb-6 sm:pb-8 wv-body text-green/75">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


