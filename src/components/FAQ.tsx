"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Wann werden die Produkte verfügbar sein?",
    answer: "Wir planen den Launch für die nächsten Wochen. Melde dich für unsere Warteliste an, um als Erster benachrichtigt zu werden und 10% Launch-Rabatt zu erhalten.",
  },
  {
    question: "Wie lange dauert es, bis ich erste Ergebnisse sehe?",
    answer: "Die meisten Hunde zeigen nach 2-4 Wochen erste Verbesserungen. Bei Gelenkproblemen kann es 6-8 Wochen dauern, bis die volle Wirkung eintritt. Konsistenz ist der Schlüssel – gib deinem Hund täglich die empfohlene Dosis.",
  },
  {
    question: "Kann ich alle drei Produkte gleichzeitig geben?",
    answer: "Ja, unsere Produkte sind darauf ausgelegt, zusammen zu wirken. Du kannst sie problemlos kombinieren oder einzeln verwenden. Bei Unsicherheiten empfehlen wir, mit einem Produkt zu beginnen und nach 2 Wochen die anderen hinzuzufügen.",
  },
  {
    question: "Sind die Supplements für Welpen geeignet?",
    answer: "Unsere aktuellen Formeln sind für Hunde ab 1 Jahr optimiert. Für Welpen entwickeln wir spezielle Produkte. Bei jungen Hunden empfehlen wir, vor der Supplementierung mit deinem Tierarzt zu sprechen.",
  },
  {
    question: "Was passiert, wenn mein Hund die Kapseln nicht mag?",
    answer: "Du kannst die Kapseln öffnen und den Inhalt über das Futter mischen. Alternativ bieten wir auch Pulver-Varianten an. Die meisten Hunde gewöhnen sich schnell an den Geschmack, da wir natürliche Aromen verwenden.",
  },
  {
    question: "Wie unterscheiden sich eure Produkte von denen im Zoofachhandel?",
    answer: "Wir verwenden nur hochwertige, pharmazeutische Rohstoffe ohne Füllstoffe. Jede Charge wird in Deutschland hergestellt und von unabhängigen Laboren getestet. Zudem arbeiten wir direkt mit Tierärzten zusammen, nicht nur mit Marketing-Abteilungen.",
  },
  {
    question: "Kann ich die Produkte bei Medikamenteneinnahme geben?",
    answer: "Bei laufender Medikamenteneinnahme empfehlen wir dringend, vor der Supplementierung mit deinem Tierarzt zu sprechen. Manche Inhaltsstoffe können Wechselwirkungen haben. Wir stellen gerne ein Attest für deinen Tierarzt zur Verfügung.",
  },
  {
    question: "Wie werden die Produkte hergestellt?",
    answer: "Alle Supplements werden in kleinen Chargen in unserer Manufaktur in Heilbronn gefertigt – mit höchsten Qualitätsstandards und regelmäßigen Laborkontrollen. Jede Kapsel wird einzeln geprüft.",
  },
  {
    question: "Gibt es Nebenwirkungen?",
    answer: "Bei korrekter Dosierung sind keine Nebenwirkungen bekannt. Bei Überdosierung kann es zu weichem Stuhl kommen. Bei allergischen Reaktionen (Juckreiz, Hautausschlag) solltest du die Einnahme stoppen und uns kontaktieren.",
  },
  {
    question: "Wie lange sind die Produkte haltbar?",
    answer: "Ungeöffnet sind unsere Produkte 3 Jahre haltbar. Nach dem Öffnen empfehlen wir, sie innerhalb von 6 Monaten zu verbrauchen. Wir verwenden keine künstlichen Konservierungsstoffe, daher ist die Haltbarkeit begrenzt.",
  },
  {
    question: "Kann ich die Produkte auch bei Katzen verwenden?",
    answer: "Unsere aktuellen Formeln sind speziell für Hunde entwickelt. Katzen haben andere Nährstoffbedürfnisse. Wir arbeiten an katzenfreundlichen Varianten – melde dich für Updates an.",
  },
  {
    question: "Was macht Founding Paws anders?",
    answer: "Transparenz, Wissenschaft und Liebe. Wir zeigen dir genau, was drin ist, woher es kommt und warum. Keine Füllstoffe, keine leeren Versprechen – nur das Beste für deinen Hund. Zudem spenden wir 1% unseres Umsatzes an Tierheime.",
  },
  {
    question: "Was passiert, wenn mein Hund die Produkte nicht mag?",
    answer: "Jeder Hund ist anders und hat individuelle Vorlieben. Falls dein Hund unsere Produkte nicht annimmt, empfehlen wir, die Dosierung schrittweise zu reduzieren oder mit einem Tierarzt zu sprechen. Wir stehen gerne mit Tipps zur Seite.",
  },
  {
    question: "Wie kann ich die richtige Dosierung für meinen Hund bestimmen?",
    answer: "Die Dosierung richtet sich nach Gewicht und Alter deines Hundes. Unser Produktfinder hilft dir dabei, die optimale Menge zu bestimmen. Bei sehr großen oder sehr kleinen Hunden empfehlen wir eine individuelle Beratung.",
  },
  {
    question: "Sind die Inhaltsstoffe bio-zertifiziert?",
    answer: "Wo möglich, verwenden wir bio-zertifizierte Inhaltsstoffe. Da nicht alle Rohstoffe in Bio-Qualität verfügbar sind, setzen wir auf höchste Reinheitsgrade und nachhaltige Beschaffung. Jeder Lieferant wird sorgfältig ausgewählt.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="wv-section bg-cream">
      <div className="container-wide max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="wv-h2 text-green mb-6">
            Häufige Fragen
          </h2>
          <div className="w-16 h-1 bg-copper mx-auto rounded-full mb-6"></div>
          <p className="wv-subhead text-green/70">
            Alles, was du über Founding Paws wissen musst.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="wv-card hover-lift overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full text-left p-6 sm:p-8 flex items-start justify-between gap-4"
              >
                <h3 className="wv-subhead text-green flex-1">
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
                <div className="px-6 sm:px-8 pb-6 sm:pb-8 wv-body text-green/75">
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

