import FadeIn from "@/components/FadeIn";

const articles = [
  {
    id: "stress-angst",
    title: "Stress & Angst beim Hund",
    excerpt: "Was hilft wirklich? Die wichtigsten Tipps für entspannte Vierbeiner.",
    category: "😌 Verhalten",
    readTime: "3 Min",
    href: "#",
  },
  {
    id: "gelenke-mobilität",
    title: "Gelenke & Mobilität",
    excerpt: "So unterstützt du die Beweglichkeit deines Hundes bis ins hohe Alter.",
    category: "🦴 Gesundheit",
    readTime: "4 Min",
    href: "#",
  },
  {
    id: "kognition-herz",
    title: "Kognitive Gesundheit",
    excerpt: "Geistige Fitness fördern – für ein waches, vitales Hundeleben.",
    category: "🧠 Gehirn",
    readTime: "3 Min",
    href: "#",
  },
  {
    id: "haut-fell",
    title: "Haut & Fellgesundheit",
    excerpt: "Glänzendes Fell von innen – die besten Tipps für schöne Haut.",
    category: "✨ Schönheit",
    readTime: "2 Min",
    href: "#",
  },
];

export default function KnowledgeHub() {
  return (
    <section className="py-20 sm:py-32 bg-gradient-to-br from-taupe/10 via-cream to-copper/5">
      <div className="container-wide">
        <FadeIn>
          <div className="text-center mb-16">
            <div className="inline-block pill bg-copper/15 border border-copper/25 px-5 py-2 text-sm font-medium mb-6 text-copper">
              Wissen & Ratgeber
            </div>
            <h2 className="use-retrips text-4xl sm:text-6xl leading-tight mb-6 text-green">
              Für ein gesundes Hundeleben
            </h2>
            <div className="w-16 h-1 bg-copper mx-auto rounded-full mb-6"></div>
            <p className="use-fredoka text-lg sm:text-xl text-green/70 max-w-3xl mx-auto leading-relaxed">
              Wissenschaftlich fundierte Tipps und Ratgeber – entwickelt mit Tierärzten für die Gesundheit deines Hundes.
            </p>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {articles.map((article, idx) => (
            <FadeIn key={article.id} delay={idx * 0.1}>
              <article className="group bg-white/70 backdrop-blur-sm border border-taupe/20 rounded-[24px] p-6 hover:shadow-[0_16px_48px_-16px_rgba(180,106,52,0.25)] transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1">
                {/* Category Badge */}
                <div className="pill bg-green/10 border border-green/20 text-green text-xs px-3 py-1 font-medium mb-4 inline-block">
                  {article.category}
                </div>

                {/* Content */}
                <h3 className="use-retrips text-xl sm:text-2xl text-green mb-3 group-hover:text-copper transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-green/70 leading-relaxed mb-4">
                  {article.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-xs text-green/60">
                  <span>{article.readTime} Lesezeit</span>
                  <a 
                    href={article.href}
                    className="text-copper hover:text-green font-medium transition-colors"
                  >
                    Bald verfügbar →
                  </a>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        {/* CTA */}
        <FadeIn delay={0.4}>
          <div className="text-center">
            <p className="text-green/70 mb-6">Weitere Ratgeber und Tipps folgen zum Launch</p>
            <a 
              href="#waitlist"
              className="pill bg-copper text-cream px-6 py-3 inline-block font-medium shadow-[0_8px_24px_-8px_rgba(180,106,52,0.6)] hover:opacity-95 hover:scale-105 transition-all"
            >
              Bei Updates benachrichtigen
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
