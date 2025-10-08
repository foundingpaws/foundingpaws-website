'use client';

import { useState } from 'react';
import Image from 'next/image';
import ScrollAnimation from './ScrollAnimation';
import GlassmorphismCard from './GlassmorphismCard';
import Transform3D from './Transform3D';

// Blog-Artikel mit echten, hilfreichen Inhalten
const blogPosts = [
  {
    id: 1,
    title: "Die 5 häufigsten Gelenkprobleme bei Hunden und wie du sie erkennst",
    excerpt: "Lahmheit, Steifheit, Schwierigkeiten beim Aufstehen – Gelenkprobleme sind bei älteren Hunden weit verbreitet. Erfahre, wie du die ersten Anzeichen erkennst und was du dagegen tun kannst.",
    image: "/blog/joint-problems.svg",
    category: "Gesundheit",
    readTime: "5 Min",
    date: "15. März 2024",
    featured: true,
    tags: ["Gelenke", "Gesundheit", "Symptome"]
  },
  {
    id: 2,
    title: "Omega-3 für Hunde: Warum es so wichtig ist und worauf du achten solltest",
    excerpt: "Omega-3-Fettsäuren sind essentiell für die Gesundheit deines Hundes. Wir erklären, welche Vorteile sie haben, wie du die richtige Qualität erkennst und warum die Quelle entscheidend ist.",
    image: "/blog/omega3-guide.svg",
    category: "Ernährung",
    readTime: "7 Min",
    date: "12. März 2024",
    featured: false,
    tags: ["Omega-3", "Ernährung", "Fettsäuren"]
  },
  {
    id: 3,
    title: "Stress bei Hunden: Anzeichen erkennen und natürlich lindern",
    excerpt: "Hunde können genauso unter Stress leiden wie wir. Erfahre, welche Faktoren Stress auslösen, wie du die Anzeichen erkennst und welche natürlichen Methoden helfen können.",
    image: "/blog/dog-stress.svg",
    category: "Verhalten",
    readTime: "6 Min",
    date: "10. März 2024",
    featured: false,
    tags: ["Stress", "Verhalten", "Entspannung"]
  },
  {
    id: 4,
    title: "Das Geheimnis gesunder Hundegelenke: Prävention ist besser als Heilung",
    excerpt: "Gelenkprobleme entstehen nicht über Nacht. Mit der richtigen Prävention kannst du deinem Hund ein schmerzfreies Leben ermöglichen. Hier sind die wichtigsten Tipps.",
    image: "/blog/joint-prevention.svg",
    category: "Prävention",
    readTime: "8 Min",
    date: "8. März 2024",
    featured: false,
    tags: ["Prävention", "Gelenke", "Bewegung"]
  },
  {
    id: 5,
    title: "Natürliche Alternativen zu Schmerzmitteln für Hunde",
    excerpt: "Wenn dein Hund Schmerzen hat, möchtest du ihm helfen – aber nicht mit starken Medikamenten. Entdecke natürliche Alternativen, die sanft und effektiv wirken.",
    image: "/blog/natural-pain-relief.svg",
    category: "Naturheilkunde",
    readTime: "9 Min",
    date: "5. März 2024",
    featured: false,
    tags: ["Schmerzlinderung", "Naturheilkunde", "Alternativen"]
  },
  {
    id: 6,
    title: "Die besten Übungen für ältere Hunde: Bewegung ohne Überlastung",
    excerpt: "Bewegung ist auch im Alter wichtig, aber sie muss an die Bedürfnisse deines Hundes angepasst werden. Hier sind die besten Übungen für Senior-Hunde.",
    image: "/blog/senior-dog-exercises.svg",
    category: "Bewegung",
    readTime: "6 Min",
    date: "3. März 2024",
    featured: false,
    tags: ["Bewegung", "Senior-Hunde", "Übungen"]
  }
];

// Downloadable Guides
const guides = [
  {
    id: 1,
    title: "Hundegesundheit von A-Z",
    description: "Der ultimative Guide für die Gesundheit deines Hundes",
    pages: 24,
    format: "PDF",
    downloadCount: "2.3k",
    image: "/guides/health-guide.svg"
  },
  {
    id: 2,
    title: "Ernährungsplan für gesunde Gelenke",
    description: "Rezepte und Tipps für gelenkfreundliche Ernährung",
    pages: 16,
    format: "PDF",
    downloadCount: "1.8k",
    image: "/guides/nutrition-guide.svg"
  },
  {
    id: 3,
    title: "Stressabbau bei Hunden",
    description: "Praktische Übungen und Techniken für entspannte Hunde",
    pages: 20,
    format: "PDF",
    downloadCount: "1.5k",
    image: "/guides/stress-guide.svg"
  }
];

export default function BlogSection() {
  const [selectedCategory, setSelectedCategory] = useState('Alle');
  
  const categories = ['Alle', 'Gesundheit', 'Ernährung', 'Verhalten', 'Prävention', 'Naturheilkunde', 'Bewegung'];
  
  const filteredPosts = selectedCategory === 'Alle' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <section className="wv-section bg-gradient-to-b from-white to-cream">
      <div className="container-wide">
        {/* Header */}
        <ScrollAnimation>
          <div className="text-center wv-spacing-2xl">
            <div className="inline-block pill bg-copper/15 border border-copper/25 px-5 py-2 wv-eyebrow wv-spacing-md text-copper">
              Wissen & Ratgeber
            </div>
            <h2 className="wv-h2 text-green wv-spacing-sm">
              Hundegesundheit verstehen
            </h2>
            <div className="w-16 h-1 bg-copper mx-auto rounded-full wv-spacing-md"></div>
            <p className="wv-lead text-green/70 max-w-3xl mx-auto wv-spacing-md">
              Tiefgreifende Artikel, Expertenwissen und kostenlose Guides für informierte Hundebesitzer
            </p>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 wv-spacing-md">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`pill px-4 py-2 wv-caption font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-copper text-cream'
                      : 'bg-green/10 text-green hover:bg-green/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </ScrollAnimation>

        {/* Featured Article */}
        {featuredPost && (
          <ScrollAnimation>
            <div className="mb-16">
              <h3 className="wv-h3 text-green wv-spacing-md">Empfohlener Artikel</h3>
              <GlassmorphismCard className="overflow-hidden">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-copper text-cream px-3 py-1 rounded-full text-sm font-medium">
                        {featuredPost.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-4 text-sm text-green/60 mb-4">
                      <span>{featuredPost.date}</span>
                      <span>•</span>
                      <span>{featuredPost.readTime} Lesezeit</span>
                    </div>
                    <h4 className="text-2xl font-bold text-green mb-4">
                      {featuredPost.title}
                    </h4>
                    <p className="text-green/70 mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {featuredPost.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-green/10 text-green px-2 py-1 rounded text-xs"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <button className="bg-copper text-cream px-6 py-3 rounded-lg font-medium hover:bg-copper/90 transition-colors self-start">
                      Artikel lesen
                    </button>
                  </div>
                </div>
              </GlassmorphismCard>
            </div>
          </ScrollAnimation>
        )}

        {/* Regular Articles */}
        <ScrollAnimation>
          <div className="mb-16">
            <h3 className="wv-h3 text-green wv-spacing-md">Weitere Artikel</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <Transform3D key={post.id} hoverEffect="lift">
                  <GlassmorphismCard className="overflow-hidden h-full">
                    <div className="relative aspect-[16/10]">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-copper text-cream px-2 py-1 rounded text-xs font-medium">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-xs text-green/60 mb-3">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h4 className="wv-h4 text-green wv-spacing-xs line-clamp-2">
                        {post.title}
                      </h4>
                      <p className="wv-body text-green/70 wv-spacing-sm line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="bg-green/10 text-green px-2 py-1 rounded text-xs"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                      <button className="text-copper font-medium text-sm hover:underline">
                        Weiterlesen →
                      </button>
                    </div>
                  </GlassmorphismCard>
                </Transform3D>
              ))}
            </div>
          </div>
        </ScrollAnimation>

        {/* Downloadable Guides */}
        <ScrollAnimation>
          <div className="mb-16">
            <h3 className="wv-h3 text-green wv-spacing-md">Kostenlose Guides</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {guides.map((guide) => (
                <Transform3D key={guide.id} hoverEffect="tilt">
                  <GlassmorphismCard className="text-center p-8">
                    <div className="relative w-20 h-20 mx-auto mb-6">
                      <Image
                        src={guide.image}
                        alt={guide.title}
                        fill
                        className="object-cover rounded-lg"
                        unoptimized
                      />
                    </div>
                    <h4 className="wv-h4 text-green wv-spacing-xs">
                      {guide.title}
                    </h4>
                    <p className="wv-body text-green/70 wv-spacing-sm">
                      {guide.description}
                    </p>
                    <div className="flex items-center justify-center gap-4 text-xs text-green/60 mb-6">
                      <span>{guide.pages} Seiten</span>
                      <span>•</span>
                      <span>{guide.format}</span>
                      <span>•</span>
                      <span>{guide.downloadCount} Downloads</span>
                    </div>
                    <button className="bg-green text-cream px-6 py-3 rounded-lg font-medium hover:bg-green/90 transition-colors w-full">
                      Kostenlos herunterladen
                    </button>
                  </GlassmorphismCard>
                </Transform3D>
              ))}
            </div>
          </div>
        </ScrollAnimation>

        {/* Newsletter Signup */}
        <ScrollAnimation>
          <GlassmorphismCard className="text-center p-8 md:p-12">
            <h3 className="wv-h3 text-green wv-spacing-sm">
              Verpasse keine neuen Artikel
            </h3>
            <p className="wv-body text-green/70 wv-spacing-md max-w-2xl mx-auto">
              Erhalte wöchentlich die neuesten Artikel über Hundegesundheit direkt in dein Postfach. 
              Plus: Exklusive Tipps und frühzeitigen Zugang zu neuen Guides.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Deine E-Mail-Adresse"
                className="flex-1 px-4 py-3 rounded-lg border border-green/20 focus:outline-none focus:ring-2 focus:ring-copper text-green placeholder-green/50"
              />
              <button className="bg-copper text-cream px-6 py-3 rounded-lg font-medium hover:bg-copper/90 transition-colors">
                Anmelden
              </button>
            </div>
            <p className="text-xs text-green/50 mt-4">
              Keine Spam-Mails. Jederzeit abmeldbar.
            </p>
          </GlassmorphismCard>
        </ScrollAnimation>
      </div>
    </section>
  );
}
