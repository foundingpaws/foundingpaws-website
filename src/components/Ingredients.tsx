import FadeIn from "@/components/FadeIn";

const highlights = [
  {
    icon: "🌿",
    title: "100% Natürlich",
    description: "Keine synthetischen Füllstoffe, nur pure, wissenschaftlich erprobte Inhaltsstoffe aus der Natur.",
  },
  {
    icon: "🔬",
    title: "Laborgeprüft",
    description: "Jede Charge wird von unabhängigen Laboren auf Reinheit, Potenz und Sicherheit geprüft.",
  },
  {
    icon: "🇩🇪",
    title: "Made in Germany",
    description: "Handgefertigt in unserer Manufaktur in Heilbronn – höchste Qualitätsstandards garantiert.",
  },
  {
    icon: "📋",
    title: "Vollständig rückverfolgbar",
    description: "Von der Quelle bis zur Verpackung: Du kannst jede Zutat bis zum Ursprung nachverfolgen.",
  },
];

export default function Ingredients() {
  return (
    <section className="py-20 sm:py-32 bg-gradient-to-br from-taupe/20 via-cream to-copper/5">
      <div className="container-wide">
        <FadeIn>
          <div className="text-center mb-16">
            <div className="inline-block pill bg-copper/15 backdrop-blur-sm border border-copper/25 px-5 py-2 text-sm font-medium mb-6 text-copper">
              Unsere Qualitätsversprechen
            </div>
            <h2 className="use-retrips text-4xl sm:text-6xl leading-tight mb-6 text-green">
              Transparenz in jedem Detail
            </h2>
            <div className="w-16 h-1 bg-copper mx-auto rounded-full mb-6"></div>
            <p className="use-fredoka text-lg sm:text-xl text-green/70 max-w-3xl mx-auto leading-relaxed">
              Wir zeigen dir genau, was in unseren Supplements steckt – und warum.
              Keine versteckten Inhaltsstoffe, keine Kompromisse.
            </p>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => (
            <FadeIn key={idx} delay={idx * 0.05}>
              <div className="bg-white/70 backdrop-blur-sm border border-taupe/20 rounded-[24px] p-8 text-center hover:shadow-[0_16px_48px_-16px_rgba(180,106,52,0.25)] transition-all hover:scale-105 group">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="use-fredoka text-xl text-green mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-green/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="mt-16 max-w-4xl mx-auto bg-white/70 backdrop-blur-sm border border-taupe/20 rounded-[28px] p-8 sm:p-12 text-center shadow-[0_16px_48px_-16px_rgba(142,127,116,0.25)]">
            <h3 className="use-retrips text-3xl sm:text-4xl mb-6 text-green">
              Von Tierärzten entwickelt
            </h3>
            <p className="text-green/75 leading-relaxed max-w-2xl mx-auto">
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

