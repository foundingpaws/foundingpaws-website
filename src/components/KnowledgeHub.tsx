import FadeIn from "@/components/FadeIn";
import ScrollAnimation from "@/components/ScrollAnimation";

const articles = [
  {
    id: "stress-angst",
    title: "Stress & Angst beim Hund",
    excerpt: "Was hilft wirklich? Die wichtigsten Tipps für entspannte Vierbeiner.",
    category: "Verhalten",
    readTime: "3 Min",
    href: "/produkte/gentle-calm",
  },
  {
    id: "gelenke-mobilitaet",
    title: "Gelenke & Mobilität",
    excerpt: "So unterstützt du die Beweglichkeit deines Hundes bis ins hohe Alter.",
    category: "Gesundheit",
    readTime: "4 Min",
    href: "/produkte/vital-joints",
  },
  {
    id: "kognition-herz",
    title: "Kognitive Gesundheit",
    excerpt: "Geistige Fitness fördern – für ein waches, vitales Hundeleben.",
    category: "Gehirn",
    readTime: "3 Min",
    href: "/produkte/bright-mind",
  },
  {
    id: "haut-fell",
    title: "Haut & Fellgesundheit",
    excerpt: "Glänzendes Fell von innen – die besten Tipps für schöne Haut.",
    category: "Schönheit",
    readTime: "2 Min",
    href: "/produkte",
  },
];

export default function KnowledgeHub() {
  return (
    <section className="wv-section bg-cream">
      <div className="container-wide">
        <ScrollAnimation animation="fade-in">
          <div className="text-center mb-16">
            <div className="inline-block pill bg-copper/15 border border-copper/25 px-5 py-2 wv-eyebrow mb-6 text-copper">
              Gut für
            </div>
            <h2 className="wv-h2 mb-6 text-green">
              Für ein gesundes Hundeleben
            </h2>
            <div className="w-16 h-1 bg-copper mx-auto rounded-full mb-6"></div>
            <p className="wv-subhead text-green/70 max-w-3xl mx-auto">
              Praktische Tipps und Empfehlungen – entwickelt mit Tierärzten für die Gesundheit deines Hundes.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {articles.map((article, idx) => (
            <ScrollAnimation key={article.id} animation="slide-up" delay={idx * 100}>
              <article className="group wv-card-minimal hover-lift-minimal p-6 cursor-pointer">
                {/* Category Badge */}
                <div className="pill bg-green/10 border border-green/20 text-green wv-caption px-3 py-1 font-medium wv-spacing-sm inline-block">
                  {article.category}
                </div>

                {/* Content */}
                <h3 className="wv-h3 text-green wv-spacing-xs group-hover:text-copper transition-colors">
                  {article.title}
                </h3>
                <p className="wv-body text-green/75 wv-spacing-sm">
                  {article.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between wv-small text-green/60">
                  <span>{article.readTime} Lesezeit</span>
                  <a 
                    href={article.href}
                    className="text-copper hover:text-green font-medium transition-colors"
                  >
                    Bald verfügbar →
                  </a>
                </div>
              </article>
            </ScrollAnimation>
          ))}
        </div>

        {/* CTA */}
        <FadeIn delay={0.4}>
          <div className="text-center">
            <p className="text-green/70 mb-6">Weitere Ratgeber und Tipps folgen zum Launch</p>
            <a 
              href="#waitlist"
              className="btn-primary pill text-cream px-6 py-3 inline-block font-medium"
            >
              Bei Updates benachrichtigen
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
