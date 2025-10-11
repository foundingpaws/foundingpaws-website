import FadeIn from "@/components/FadeIn";
import ScrollAnimation from "@/components/ScrollAnimation";
import { articles as allArticles } from "@/lib/articles";

const curatedSlugs = [
  "/ratgeber/stress-hund",
  "/ratgeber/gelenkprobleme-erkennen",
  "/ratgeber/omega3-hund",
  "/ratgeber/senior-hund-uebungen",
] as const;

const curatedArticles = curatedSlugs
  .map((slug) => allArticles.find((a) => a.slug === slug))
  .filter(Boolean) as typeof allArticles;

export default function KnowledgeHub() {
  return (
    <section id="knowledge" className="wv-section bg-cream">
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
          {curatedArticles.map((article, idx) => (
            <ScrollAnimation key={article.slug} animation="slide-up" delay={idx * 100}>
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
                    href={article.slug}
                    className="text-copper hover:text-green font-medium transition-colors"
                  >
                    Artikel lesen →
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
              className="bg-copper text-cream px-6 py-3 rounded-full font-medium hover:bg-copper/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 inline-block"
            >
              Bei Updates benachrichtigen
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
