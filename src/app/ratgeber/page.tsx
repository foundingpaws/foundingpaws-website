import Image from "next/image";
import ScrollAnimation from "@/components/ScrollAnimation";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";
import IconBook from "@/components/icons/IconBook";

const categories = [
  {
    name: "Gelenke & Mobilität",
    description: "Bandscheibenvorfälle, Spondylose und Bewegung",
    icon: "🦴",
    color: "copper",
    articles: 12
  },
  {
    name: "Stress & Entspannung",
    description: "Trennungsangst, Bellen und Gelassenheit",
    icon: "🧘",
    color: "green",
    articles: 8
  },
  {
    name: "Kognition & Gehirn",
    description: "Epilepsie und geistige Fitness",
    icon: "🧠",
    color: "taupe",
    articles: 6
  },
  {
    name: "Ernährung & Verdauung",
    description: "Gastritis, Kot-Probleme und gesunde Ernährung",
    icon: "🥗",
    color: "copper",
    articles: 10
  },
  {
    name: "Haut & Fell",
    description: "Ohrenprobleme, Juckreiz und Fellpflege",
    icon: "✨",
    color: "green",
    articles: 7
  },
  {
    name: "Senior & Vitalität",
    description: "Nierenprobleme und Altersbeschwerden",
    icon: "🐕",
    color: "taupe",
    articles: 9
  }
];

const featuredArticles = [
  {
    id: 1,
    title: "Bandscheibenvorfall beim Hund: Symptome, Behandlung und was du tun kannst",
    excerpt: "Wenn dein Hund plötzlich lahmt oder Schmerzen hat - alles über Bandscheibenvorfälle, ihre Ursachen und wie du deinem Liebling helfen kannst.",
    category: "Gelenke & Mobilität",
    readTime: "12 Min",
    image: "/blog/joint-problems.jpg",
    date: "15. Januar 2025",
    featured: true,
    url: "/ratgeber/bandscheibenvorfall-hund"
  },
  {
    id: 2,
    title: "Hund kann nicht alleine bleiben? So kannst du ihm helfen",
    excerpt: "Trennungsangst beim Hund verstehen und überwinden - bewährte Methoden für mehr Gelassenheit und Selbstvertrauen.",
    category: "Stress & Entspannung",
    readTime: "10 Min",
    image: "/blog/dog-stress.jpg",
    date: "12. Januar 2025",
    featured: true,
    url: "/ratgeber/trennungsangst-hund"
  },
  {
    id: 3,
    title: "Epilepsie beim Hund verstehen und liebevoll begleiten",
    excerpt: "Wenn das Gehirn stolpert - alles über Epilepsie bei Hunden, Anfallsmanagement und wie du deinem Hund ein normales Leben ermöglichen kannst.",
    category: "Kognition & Gehirn",
    readTime: "15 Min",
    image: "/blog/senior-dog-exercises.jpg",
    date: "10. Januar 2025",
    featured: true,
    url: "/ratgeber/epilepsie-hund"
  }
];

const recentArticles = [
  {
    id: 4,
    title: "Gastritis beim Hund: Was tun, wenn der Hunde-Magen rebelliert?",
    excerpt: "Wenn dein Hund erbricht oder keinen Appetit hat - alles über Magenentzündungen und wie du deinem Hund helfen kannst.",
    category: "Ernährung & Verdauung",
    readTime: "8 Min",
    image: "/blog/omega3-guide.jpg",
    date: "8. Januar 2025",
    url: "/ratgeber/gastritis-hund"
  },
  {
    id: 5,
    title: "Hund schüttelt ständig den Kopf? Was dahintersteckt",
    excerpt: "Von Ohrenentzündungen bis zu Fremdkörpern - die häufigsten Ursachen und was wirklich hilft.",
    category: "Haut & Fell",
    readTime: "6 Min",
    image: "/blog/natural-pain-relief.jpg",
    date: "5. Januar 2025",
    url: "/ratgeber/bandscheibenvorfall-hund"
  },
  {
    id: 6,
    title: "Schleimiger Hundekot – was steckt dahinter und was hilft wirklich?",
    excerpt: "Wenn der Kot deines Hundes verändert aussieht - Ursachen erkennen und richtig handeln.",
    category: "Ernährung & Verdauung",
    readTime: "7 Min",
    image: "/blog/puppy-nutrition.jpg",
    date: "3. Januar 2025",
    url: "/ratgeber/trennungsangst-hund"
  },
  {
    id: 7,
    title: "Hund bellt ständig – warum das so ist und wie du ihm helfen kannst",
    excerpt: "Exzessives Bellen verstehen und mit Geduld und Training in den Griff bekommen.",
    category: "Stress & Entspannung",
    readTime: "9 Min",
    image: "/blog/dog-stress.jpg",
    date: "1. Januar 2025",
    url: "/ratgeber/bellen-hund"
  },
  {
    id: 8,
    title: "Niereninsuffizienz beim Hund: Alles, was du wissen musst",
    excerpt: "Chronische Nierenerkrankungen früh erkennen und deinem Hund ein langes, glückliches Leben ermöglichen.",
    category: "Senior & Vitalität",
    readTime: "11 Min",
    image: "/blog/senior-dog-exercises.jpg",
    date: "28. Dezember 2024",
    url: "/ratgeber/epilepsie-hund"
  },
  {
    id: 9,
    title: "Spondylose beim Hund – Symptome, Behandlung und Alltag",
    excerpt: "Wenn die Wirbelsäule altert - wie du deinem Hund mit Spondylose ein schmerzfreies Leben ermöglichst.",
    category: "Gelenke & Mobilität",
    readTime: "10 Min",
    image: "/blog/joint-problems.jpg",
    date: "25. Dezember 2024",
    url: "/ratgeber/bandscheibenvorfall-hund"
  }
];

const tips = [
  {
    icon: "🚨",
    title: "Notfall erkennen",
    description: "Bei plötzlicher Lähmung sofort zum Tierarzt"
  },
  {
    icon: "🌿",
    title: "Natürliche Beruhigung",
    description: "Baldrian und L-Theanin für entspannte Hunde"
  },
  {
    icon: "🧠",
    title: "Anfall dokumentieren",
    description: "Epileptische Anfälle filmen für den Tierarzt"
  },
  {
    icon: "💧",
    title: "Flüssigkeit wichtig",
    description: "Bei Nierenproblemen viel trinken lassen"
  }
];

export default function RatgeberPage() {
  return (
    <main className="bg-cream text-green">
      {/* Hero Section */}
      <section className="wv-section bg-green text-cream">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <div className="inline-block pill bg-cream/20 border border-cream/30 px-6 py-3 wv-eyebrow wv-spacing-md backdrop-blur-sm" style={{color: 'white'}}>
                Hundegesundheit verstehen
              </div>
              <h1 className="wv-h1 wv-spacing-sm" style={{color: 'white'}}>
                Der Founding Paws Ratgeber
              </h1>
              <div className="w-20 h-1 bg-copper mx-auto rounded-full wv-spacing-md"></div>
              <p className="wv-lead wv-spacing-md max-w-3xl mx-auto" style={{color: 'rgba(255, 255, 255, 0.95)'}}>
                Wissenschaftlich fundierte Tipps und Ratschläge für ein langes, 
                gesundes Hundeleben. Von Experten für Hundebesitzer.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="wv-section bg-gradient-to-b from-cream to-taupe/5">
        <div className="container-wide">
          <ScrollAnimation>
            <div className="text-center wv-spacing-2xl">
              <h2 className="wv-h2 text-green wv-spacing-sm">
                Wähle dein Thema
              </h2>
              <div className="w-16 h-1 bg-copper mx-auto rounded-full wv-spacing-md"></div>
              <p className="wv-lead text-green/70 wv-spacing-md max-w-3xl mx-auto">
                Finde die richtigen Informationen für die Gesundheit deines Hundes.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <ScrollAnimation key={category.name} animation="fade-in" delay={index * 100}>
                <div className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2 border border-green/10">
                  <div className="p-8">
                    <div className="text-4xl wv-spacing-sm">{category.icon}</div>
                    <h3 className="wv-h3 text-green wv-spacing-sm group-hover:text-copper transition-colors">
                      {category.name}
                    </h3>
                    <p className="wv-body text-green/70 wv-spacing-md">
                      {category.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-green/60">
                        {category.articles} Artikel
                      </span>
                      <span className="text-copper text-sm font-medium group-hover:text-copper/80 transition-colors">
                        Lesen →
                      </span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-copper/5 via-transparent to-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="wv-section bg-cream">
        <div className="container-wide">
          <ScrollAnimation>
            <div className="text-center wv-spacing-2xl">
              <h2 className="wv-h2 text-green wv-spacing-sm">
                Empfohlene Artikel
              </h2>
              <div className="w-16 h-1 bg-copper mx-auto rounded-full wv-spacing-md"></div>
              <p className="wv-lead text-green/70 wv-spacing-md max-w-3xl mx-auto">
                Unsere beliebtesten und wichtigsten Artikel für die Hundegesundheit.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid lg:grid-cols-3 gap-12 wv-spacing-2xl">
            {featuredArticles.map((article, index) => (
              <ScrollAnimation key={article.id} animation="slide-up" delay={index * 150}>
                <article className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2 border border-green/10">
                  {/* Article Image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                    
                    {/* Featured Badge */}
                    {article.featured && (
                      <div className="absolute top-4 left-4">
                        <div className="bg-copper text-cream px-3 py-1 rounded-full text-sm font-bold">
                          Empfohlen
                        </div>
                      </div>
                    )}
                    
                    {/* Category */}
                    <div className="absolute top-4 right-4">
                      <div className="bg-white/90 text-green px-3 py-1 rounded-full text-sm font-medium">
                        {article.category}
                      </div>
                    </div>
                  </div>
                  
                  {/* Article Content */}
                  <div className="p-8">
                    <div className="flex items-center gap-4 text-sm text-green/60 wv-spacing-sm">
                      <span>{article.date}</span>
                      <span>•</span>
                      <span>{article.readTime} Lesezeit</span>
                    </div>
                    
                    <h3 className="wv-h3 text-green wv-spacing-sm group-hover:text-copper transition-colors">
                      {article.title}
                    </h3>
                    
                    <p className="wv-body text-green/70 wv-spacing-md leading-relaxed">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <Link href={article.url} className="text-copper text-sm font-medium group-hover:text-copper/80 transition-colors">
                        Artikel lesen →
                      </Link>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-copper rounded-full"></div>
                        <span className="text-xs text-green/60">Verfügbar</span>
                      </div>
                    </div>
                  </div>
                </article>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Tips */}
      <section className="wv-section bg-green text-cream">
        <div className="container-wide">
          <ScrollAnimation>
            <div className="text-center wv-spacing-2xl">
              <h2 className="wv-h2 wv-spacing-sm" style={{color: 'white'}}>
                Schnelle Tipps für den Alltag
              </h2>
              <div className="w-16 h-1 bg-copper mx-auto rounded-full wv-spacing-md"></div>
              <p className="wv-lead wv-spacing-md max-w-3xl mx-auto" style={{color: 'rgba(255, 255, 255, 0.9)'}}>
                Einfache Maßnahmen, die sofort wirken.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {tips.map((tip, index) => (
              <ScrollAnimation key={tip.title} animation="fade-in" delay={index * 100}>
                <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-cream/20 hover:bg-white/20 transition-all duration-300">
                  <div className="text-3xl wv-spacing-sm">{tip.icon}</div>
                  <h3 className="wv-h4 wv-spacing-xs" style={{color: 'white'}}>
                    {tip.title}
                  </h3>
                  <p className="wv-body" style={{color: 'rgba(255, 255, 255, 0.8)'}}>
                    {tip.description}
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="wv-section bg-gradient-to-b from-taupe/5 to-cream">
        <div className="container-wide">
          <ScrollAnimation>
            <div className="text-center wv-spacing-2xl">
              <h2 className="wv-h2 text-green wv-spacing-sm">
                Neueste Artikel
              </h2>
              <div className="w-16 h-1 bg-copper mx-auto rounded-full wv-spacing-md"></div>
              <p className="wv-lead text-green/70 wv-spacing-md max-w-3xl mx-auto">
                Frische Inhalte und aktuelle Erkenntnisse zur Hundegesundheit.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentArticles.map((article, index) => (
              <ScrollAnimation key={article.id} animation="slide-up" delay={index * 100}>
                <article className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1 border border-green/10">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      unoptimized
                    />
                    <div className="absolute top-3 right-3">
                      <div className="bg-white/90 text-green px-2 py-1 rounded-full text-xs font-medium">
                        {article.category}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-green/60 wv-spacing-xs">
                      <span>{article.date}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>
                    
                    <h3 className="wv-h4 text-green wv-spacing-sm group-hover:text-copper transition-colors">
                      {article.title}
                    </h3>
                    
                    <p className="wv-body text-green/70 wv-spacing-sm text-sm">
                      {article.excerpt}
                    </p>
                    
                    <Link href={article.url} className="text-copper text-sm font-medium group-hover:text-copper/80 transition-colors">
                      Lesen →
                    </Link>
                  </div>
                </article>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="wv-section bg-gradient-to-b from-cream to-taupe/10">
        <div className="container-wide">
          <ScrollAnimation>
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-white rounded-3xl shadow-2xl p-12 border border-green/10">
                <h2 className="wv-h2 text-green wv-spacing-sm">
                  Bleib auf dem Laufenden
                </h2>
                <div className="w-16 h-1 bg-copper mx-auto rounded-full wv-spacing-md"></div>
                <p className="wv-lead text-green/70 wv-spacing-md max-w-2xl mx-auto">
                  Erhalte regelmäßig neue Ratgeber-Artikel und Tipps direkt in dein Postfach.
                </p>
                
                <div className="wv-spacing-xl">
                  <form className="max-w-lg mx-auto">
                    <div className="flex gap-4">
                      <input 
                        type="email" 
                        placeholder="Deine E-Mail-Adresse" 
                        className="flex-1 px-6 py-4 rounded-2xl border-2 border-green/20 focus:border-copper focus:outline-none text-green placeholder-green/60 text-lg bg-white shadow-lg"
                        required
                      />
                      <button 
                        type="submit"
                        className="btn-primary pill text-cream px-8 py-4 text-lg font-bold whitespace-nowrap hover:scale-105 transition-all duration-300"
                      >
                        Abonnieren
                      </button>
                    </div>
                    <p className="wv-body text-green/60 wv-spacing-sm">
                      Keine Sorge, wir spammen nicht. Du kannst dich jederzeit abmelden.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </main>
  );
}