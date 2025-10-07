import FadeIn from "@/components/FadeIn";
import ScrollAnimation from "@/components/ScrollAnimation";

const highlights = [
  {
    icon: "Natur",
    title: "100% Natürlich",
    description: "Keine synthetischen Füllstoffe, nur pure, wissenschaftlich erprobte Inhaltsstoffe aus der Natur.",
  },
  {
    icon: "Labor",
    title: "Laborgeprüft",
    description: "Jede Charge wird von unabhängigen Laboren auf Reinheit, Potenz und Sicherheit geprüft.",
  },
  {
    icon: "DE",
    title: "Made in Germany",
    description: "Handgefertigt in unserer Manufaktur in Heilbronn – höchste Qualitätsstandards.",
  },
  {
    icon: "Dok",
    title: "Vollständig transparent",
    description: "Von der Quelle bis zur Verpackung: Transparente Herkunft aller Zutaten.",
  },
];

export default function Ingredients() {
  return (
    <section className="wv-section bg-cream">
      <div className="container-wide">
        <ScrollAnimation animation="fade-in">
          <div className="text-center wv-spacing-2xl">
            <div className="inline-block pill bg-copper/15 border border-copper/25 px-5 py-2 wv-eyebrow wv-spacing-md text-copper">
              Unsere Qualitätsversprechen
            </div>
            <h2 className="wv-h2 text-green wv-spacing-md">
              Transparenz in jedem Detail
            </h2>
            <div className="w-16 h-1 bg-copper mx-auto rounded-full wv-spacing-md"></div>
            <p className="wv-lead text-green/70 max-w-3xl mx-auto">
              Wir zeigen dir genau, was in unseren Supplements steckt – und warum.
              Keine versteckten Inhaltsstoffe, keine Kompromisse.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => (
            <ScrollAnimation key={idx} animation="scale-in" delay={idx * 100}>
              <div className="wv-card-premium hover-lift-premium p-8 text-center group">
                <div className="text-5xl wv-spacing-md group-hover:scale-110 transition-transform icon-hover">
                  {item.icon}
                </div>
                <h3 className="wv-h4 text-green wv-spacing-xs">
                  {item.title}
                </h3>
                <p className="wv-body text-green/75">
                  {item.description}
                </p>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="mt-16 max-w-4xl mx-auto wv-card p-8 sm:p-12 text-center">
            <h3 className="wv-h3 mb-6 text-green">
              Von Tierärzten entwickelt
            </h3>
            <p className="wv-body text-green/75 max-w-2xl mx-auto">
              Unsere Formeln entstehen in enger Zusammenarbeit mit führenden Tierärzten und 
              Ernährungswissenschaftlern. Jedes Supplement basiert auf aktueller Forschung und 
              klinischer Erfahrung – für messbare Ergebnisse, denen du vertrauen kannst.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

