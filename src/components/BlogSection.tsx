'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import ScrollAnimation from './ScrollAnimation';
import GlassmorphismCard from './GlassmorphismCard';
import Transform3D from './Transform3D';
import { articles } from '@/lib/articles';
import ArticleCard from './ArticleCard';

// Ableitung aus zentraler Datenquelle
const blogPosts = articles;

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

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  const categories = useMemo(() => {
    const set = new Set<string>();
    for (const a of blogPosts) set.add(a.category);
    return ['Alle', ...Array.from(set)];
  }, []);

  const filteredRegular = useMemo(() => {
    if (selectedCategory === 'Alle') return regularPosts;
    return regularPosts.filter(p => p.category === selectedCategory);
  }, [regularPosts, selectedCategory]);

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

            {/* Category Filter (Homepage teaser scope) */}
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

        {/* Featured Article removed to avoid interfering with filtering */}

        {/* Regular Articles */}
        <ScrollAnimation>
          <div className="mb-16">
            <h3 className="wv-h3 text-green wv-spacing-md">Weitere Artikel</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredRegular.slice(0, 6).map((post) => (
                <Transform3D key={post.slug} hoverEffect="lift">
                  <ArticleCard article={post} />
                </Transform3D>
              ))}
            </div>
            <div className="text-center mt-8">
              <a href="/ratgeber" className="bg-copper text-cream px-6 py-3 rounded-full font-medium hover:bg-copper/90 transition-colors">
                Alle Artikel ansehen
              </a>
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

      </div>
    </section>
  );
}
