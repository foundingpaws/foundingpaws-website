"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Wann werden die Produkte verfügbar sein?",
    answer: "Wir planen den Launch für die nächsten Wochen. Melde dich für unsere Warteliste an, um als Erster benachrichtigt zu werden und 10% Launch-Rabatt zu erhalten.",
  },
  {
    question: "Wie lange dauert es, bis ich erste Ergebnisse sehe?",
    answer: "Jeder Hund reagiert individuell auf Nahrungsergänzungsmittel. Manche Besitzer berichten von ersten Beobachtungen nach 2-4 Wochen, andere benötigen länger. Konsistenz in der Anwendung ist wichtig. Wir empfehlen, die Entwicklung mit deinem Tierarzt zu besprechen.",
  },
  {
    question: "Kann ich alle drei Produkte gleichzeitig geben?",
    answer: "Unsere Produkte sind so formuliert, dass sie sich ergänzen können. Du kannst sie einzeln oder in Kombination verwenden. Wir empfehlen, mit einem Produkt zu beginnen und die Reaktion deines Hundes zu beobachten, bevor du weitere hinzufügst. Sprich bei Fragen mit deinem Tierarzt.",
  },
  {
    question: "Sind die Supplements für Welpen geeignet?",
    answer: "Unsere aktuellen Formeln sind für Hunde ab 1 Jahr optimiert. Für Welpen entwickeln wir spezielle Produkte. Bei jungen Hunden empfehlen wir, vor der Supplementierung mit deinem Tierarzt zu sprechen.",
  },
  {
    question: "Was passiert, wenn mein Hund die Produkte nicht mag?",
    answer: "Du kannst die Produkte über das Futter mischen oder in Pulverform verabreichen. Die meisten Hunde gewöhnen sich schnell an den Geschmack, da wir natürliche Aromen verwenden. Bei Problemen empfehlen wir, die Dosierung schrittweise zu reduzieren.",
  },
  {
    question: "Wie unterscheiden sich eure Produkte von denen im Zoofachhandel?",
    answer: "Unsere Produkte werden handgemacht in kleinen Chargen mit höchster Sorgfalt hergestellt. Wir verwenden ausschließlich natürliche, hochwertige Rohstoffe ohne künstliche Zusätze oder Füllstoffe. Jede Charge wird in unserem eigenen Labor auf Qualität und Reinheit geprüft. Wir arbeiten eng mit Tierärzten zusammen, um fundierte Formulierungen zu entwickeln.",
  },
  {
    question: "Kann ich die Produkte bei Medikamenteneinnahme geben?",
    answer: "Bei laufender Medikamenteneinnahme empfehlen wir dringend, vor der Supplementierung mit deinem Tierarzt zu sprechen. Manche Inhaltsstoffe können Wechselwirkungen haben. Wir stellen gerne ein Attest für deinen Tierarzt zur Verfügung.",
  },
  {
    question: "Wie werden die Produkte hergestellt?",
    answer: "Alle Supplements werden in kleinen Chargen in unserer Manufaktur in Heilbronn gefertigt – mit höchsten Qualitätsstandards und regelmäßigen Laborkontrollen. Jede Charge wird sorgfältig geprüft und dokumentiert.",
  },
  {
    question: "Gibt es Nebenwirkungen?",
    answer: "Unsere Produkte sind als Nahrungsergänzungsmittel konzipiert und bei bestimmungsgemäßer Anwendung gut verträglich. Bei Überdosierung kann es zu Verdauungsbeschwerden kommen. Bei ungewöhnlichen Reaktionen solltest du die Anwendung stoppen und einen Tierarzt konsultieren.",
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
    question: "Wie funktioniert die 1%-Spende an Tierheime?",
    answer: "Sobald wir starten, spenden wir jeden Monat 1% unseres Umsatzes an lokale Tierheime in Deutschland. Die Spenden werden transparent auf unserer Website veröffentlicht. Jeder Kauf unterstützt also nicht nur die Gesundheit deines Hundes, sondern hilft auch anderen Hunden in Not.",
  },
  {
    question: "Was macht Founding Paws anders?",
    answer: "Transparenz, Qualität und Verantwortung. Wir zeigen dir genau, was in unseren Produkten enthalten ist und woher die Rohstoffe stammen. Wir verzichten auf unnötige Zusätze und setzen auf ausgewählte, hochwertige Inhaltsstoffe. Zudem spenden wir ab dem ersten Verkauf 1% unseres Umsatzes an Tierheime und arbeiten eng mit Tierärzten zusammen.",
  },
  {
    question: "Was passiert, wenn mein Hund die Produkte nicht mag?",
    answer: "Jeder Hund ist anders und hat individuelle Vorlieben. Falls dein Hund unsere Produkte nicht annimmt, empfehlen wir, die Dosierung schrittweise zu reduzieren oder mit einem Tierarzt zu sprechen. Wir stehen gerne mit Tipps zur Seite.",
  },
  {
    question: "Wie kann ich die richtige Dosierung für meinen Hund bestimmen?",
    answer: "Die Dosierung orientiert sich an Gewicht und Alter deines Hundes. Unser Produktfinder kann dir als Orientierungshilfe dienen. Bei sehr großen oder sehr kleinen Hunden sowie bei gesundheitlichen Besonderheiten empfehlen wir eine individuelle Beratung mit deinem Tierarzt.",
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

      </div>
    </section>
  );
}

