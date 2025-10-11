import Image from "next/image";
import ScrollAnimation from "@/components/ScrollAnimation";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";
import IconBook from "@/components/icons/IconBook";
import IconBone from "@/components/icons/IconBone";
import IconSparkles from "@/components/icons/IconSparkles";
import IconBrainHeart from "@/components/icons/IconBrainHeart";
import IconShield from "@/components/icons/IconShield";
import { getAllCategories } from "@/lib/articles";
import { articles as allArticles } from "@/lib/articles";
import ArticleList from "@/components/ArticleList";
import JsonLd from "@/components/JsonLd";

const categoryIconMap: Record<string, any> = {
  Gesundheit: IconShield,
  Ernährung: IconSparkles,
  Verhalten: IconSparkles,
  Prävention: IconShield,
  Naturheilkunde: IconSparkles,
  Bewegung: IconBone,
};

const categories = getAllCategories()
  .filter((c) => c !== "Alle")
  .map((name) => ({
    name,
    description: "",
    Icon: categoryIconMap[name] || IconShield,
  }));

const featuredArticles = [
  {
    id: 1,
    title: "Omega‑3 für Hunde: Warum so wichtig – und worauf achten?",
    excerpt: "EPA/DHA modulieren Entzündungen – Evidenz bei OA, Haut, Herz, Niere. Dosierung und Qualität im Überblick.",
    category: "Ernährung",
    readTime: "9 Min",
    image: "/blog/omega3-guide.jpg",
    date: "11. Januar 2025",
    featured: true,
    url: "/ratgeber/omega3-hund"
  },
  {
    id: 2,
    title: "Übungen für Senior‑Hunde: Bewegung ohne Überlastung",
    excerpt: "Schonende Aktivitäten, Kraft & Balance zu Hause und ein Wochenplan – so bleibt dein Senior mobil.",
    category: "Gelenke & Mobilität",
    readTime: "9 Min",
    image: "/blog/senior-dog-exercises.jpg",
    date: "10. Januar 2025",
    featured: true,
    url: "/ratgeber/senior-hund-uebungen"
  },
  {
    id: 3,
    title: "Glucosamin & Chondroitin vs. marine Lipide – was hilft wirklich?",
    excerpt: "Studie: PCSO‑524/EAB‑277 und Carprofen verbessern objektive Belastungsmaße – Glucosamin/Chondroitin nicht.",
    category: "Gelenke & Mobilität",
    readTime: "8 Min",
    image: "/blog/joint-problems.jpg",
    date: "9. Januar 2025",
    featured: true,
    url: "/ratgeber/glucosamin-vs-marine-lipide"
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
    id: 10,
    title: "Natürliche Alternativen zu Schmerzmitteln: Was hilft wirklich?",
    excerpt: "Evidenz zu Omega‑3, Grünlippmuschel und UC‑II/Boswellia – sicher einsetzen und richtig dosieren.",
    category: "Gelenke & Mobilität",
    readTime: "8 Min",
    image: "/blog/natural-pain-relief.jpg",
    date: "9. Januar 2025",
    url: "/ratgeber/natuerliche-schmerzmittel-hund"
  },
  {
    id: 11,
    title: "Prävention ist King: So schützt du Hundegelenke frühzeitig",
    excerpt: "Die 6 Säulen: Gewicht, Bewegung, Umfeld, Früherkennung, Ernährung, Reha – mit Checkliste.",
    category: "Gelenke & Mobilität",
    readTime: "7 Min",
    image: "/blog/joint-prevention.jpg",
    date: "8. Januar 2025",
    url: "/ratgeber/gelenk-praevention"
  },
  {
    id: 12,
    title: "Stress bei Hunden erkennen – und natürlich unterstützen",
    excerpt: "Signale deuten, Training & Management kombinieren – Evidenz zu L‑Theanin, DAP & Co.",
    category: "Stress & Entspannung",
    readTime: "7 Min",
    image: "/blog/dog-stress.jpg",
    date: "7. Januar 2025",
    url: "/ratgeber/stress-hund"
  },
  {
    id: 13,
    title: "Die 5 häufigsten Gelenkprobleme – und wie du sie erkennst",
    excerpt: "OA, Hüft‑/Ellenbogendysplasie, Kreuzband, Patellaluxation – typische Anzeichen & Tierarzt‑Check.",
    category: "Gelenke & Mobilität",
    readTime: "8 Min",
    image: "/blog/joint-problems.jpg",
    date: "6. Januar 2025",
    url: "/ratgeber/gelenkprobleme-erkennen"
  },
  {
    id: 14,
    title: "Die besten Übungen für ältere Hunde: Praxis‑Anleitung (4 Wochen)",
    excerpt: "Warm‑up, Progression, Cool‑down – sicher trainieren ohne Überlastung.",
    category: "Gelenke & Mobilität",
    readTime: "8 Min",
    image: "/blog/senior-dog-exercises.jpg",
    date: "5. Januar 2025",
    url: "/ratgeber/senior-uebungen-anleitung"
  },
  {
    id: 15,
    title: "L‑Theanin: Sanfte Hilfe bei Stress und Angst",
    excerpt: "Studien zeigen beruhigende Effekte – Dosierung 50/100/200 mg je nach Gewicht.",
    category: "Stress & Entspannung",
    readTime: "6 Min",
    image: "/blog/stress-guide.jpg",
    date: "4. Januar 2025",
    url: "/ratgeber/l-theanin-hund"
  },
  {
    id: 16,
    title: "Probiotika & Präbiotika: Darm & Immunsystem stärken",
    excerpt: "Ausgewählte Stämme verbessern Verdauung, Stressmarker & IgA – so setzt du sie ein.",
    category: "Ernährung & Verdauung",
    readTime: "7 Min",
    image: "/guides/nutrition-guide.jpg",
    date: "4. Januar 2025",
    url: "/ratgeber/probiotika-hund"
  },
  {
    id: 17,
    title: "Antioxidantien & Polyphenole – pflanzliche Helden",
    excerpt: "Gallic Acid, Tannine, Granatapfel, Curcumin: wo sie sinnvoll sind.",
    category: "Ernährung",
    readTime: "6 Min",
    image: "/guides/health-guide.jpg",
    date: "3. Januar 2025",
    url: "/ratgeber/polyphenole-hund"
  },
  {
    id: 18,
    title: "Grünlippmuschel – naturbelassene Unterstützung für Gelenke",
    excerpt: "Perna canaliculus: bessere Aktivität, geringere Schmerzen – Anwendung & Tipps.",
    category: "Gelenke & Mobilität",
    readTime: "7 Min",
    image: "/blog/joint-problems.jpg",
    date: "3. Januar 2025",
    url: "/ratgeber/gruenlippmuschel-hund"
  },
  {
    id: 19,
    title: "Palmitoyl‑Glucosamin + Curcumin: natürliche Schmerztherapie",
    excerpt: "Studie: 90% konnten Meloxicam reduzieren – so könnte die Kombination helfen.",
    category: "Gelenke & Mobilität",
    readTime: "7 Min",
    image: "/blog/natural-pain-relief.jpg",
    date: "2. Januar 2025",
    url: "/ratgeber/palmitoyl-glucosamin-curcumin"
  },
  {
    id: 20,
    title: "Ashwagandha – Adaptogen für alternde Hunde",
    excerpt: "Randomisierte Daten: weniger Cortisol/TNF‑α/IFN‑γ, bessere Lebensqualität.",
    category: "Senior & Vitalität",
    readTime: "6 Min",
    image: "/guides/health-guide.jpg",
    date: "2. Januar 2025",
    url: "/ratgeber/ashwagandha-hund"
  },
  {
    id: 21,
    title: "Taurin & Herzgesundheit: Vorbeugung gegen DCM",
    excerpt: "Ernährung & Supplemente sinnvoll nutzen – Warnzeichen, Diagnose, Empfehlungen.",
    category: "Herz & Kreislauf",
    readTime: "7 Min",
    image: "/blog/stress-guide.jpg",
    date: "1. Januar 2025",
    url: "/ratgeber/taurin-herz-hund"
  },
  {
    id: 22,
    title: "Coenzym Q10 – antioxidativer Schutz fürs Herz",
    excerpt: "Studie: reduzierte Entzündungsmarker – sinnvoll als Ergänzung, keine Monotherapie.",
    category: "Herz & Kreislauf",
    readTime: "6 Min",
    image: "/guides/health-guide.jpg",
    date: "1. Januar 2025",
    url: "/ratgeber/coq10-herz-hund"
  },
  {
    id: 23,
    title: "MCTs & kognitive Dysfunktion beim Hund",
    excerpt: "Diät mit 6,5% MCT + BPB: klinische Verbesserungen nach 30–90 Tagen.",
    category: "Kognition & Gehirn",
    readTime: "7 Min",
    image: "/blog/omega3-guide.jpg",
    date: "31. Dezember 2024",
    url: "/ratgeber/mct-kognition-hund"
  },
  {
    id: 24,
    title: "Dental‑Chews: mehr als nur Kauen",
    excerpt: "12–17% weniger Plaque/Zahnstein; 20–35% weniger Calculus – Evidenz & Tipps.",
    category: "Zähne & Mundgesundheit",
    readTime: "6 Min",
    image: "/blog/joint-problems.jpg",
    date: "30. Dezember 2024",
    url: "/ratgeber/dental-chews-hund"
  },
  {
    id: 25,
    title: "Feuerwerksangst: Tryptophan, Baldrian & Passionsblume",
    excerpt: "Placebokontrollierte Daten: Verbesserungen 33–41% – rechtzeitig beginnen.",
    category: "Stress & Entspannung",
    readTime: "6 Min",
    image: "/blog/dog-stress.jpg",
    date: "29. Dezember 2024",
    url: "/ratgeber/feuerwerksangst-hund"
  },
  {
    id: 26,
    title: "Melatonin – Beruhigung & Hilfe bei Alopezie",
    excerpt: "Einsatz bei Geräuschphobie/Schlaf; teils Haarneubildung bei saisonaler Alopezie.",
    category: "Stress & Entspannung",
    readTime: "6 Min",
    image: "/guides/health-guide.jpg",
    date: "28. Dezember 2024",
    url: "/ratgeber/melatonin-hund"
  },
  {
    id: 27,
    title: "Giardien – wenn der Darm rebelliert",
    excerpt: "Therapie + Hygiene; Zoonose beachten – Symptome, Behandlung, Prävention.",
    category: "Ernährung & Verdauung",
    readTime: "6 Min",
    image: "/guides/nutrition-guide.jpg",
    date: "27. Dezember 2024",
    url: "/ratgeber/giardien-hund"
  },
  {
    id: 28,
    title: "Flöhe – kleine Plagegeister mit großer Wirkung",
    excerpt: "Prophylaxe, Umgebungshygiene und Behandlung – so gehst du vor.",
    category: "Haut & Fell",
    readTime: "6 Min",
    image: "/blog/joint-problems.jpg",
    date: "26. Dezember 2024",
    url: "/ratgeber/floehe-hund"
  },
  {
    id: 29,
    title: "Räude (Sarcoptes) – hoch ansteckender Juckreiz",
    excerpt: "Erkennen, sicher behandeln, Reinfektion vermeiden – Hygiene ist entscheidend.",
    category: "Haut & Fell",
    readTime: "6 Min",
    image: "/blog/joint-problems.jpg",
    date: "25. Dezember 2024",
    url: "/ratgeber/raeude-hund"
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
    image: "/blog/omega3-guide.jpg",
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
      <JsonLd schema={{
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        itemListElement: allArticles.map((a, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.foundingpaws.de'}${a.slug}`,
        })),
      }} />
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

      

      

      {/* Quick Tips entfernt für ruhigeren Premium-Look */}

      

      {/* All Articles with Filter */}
      <section className="wv-section bg-cream">
        <div className="container-wide">
          <ScrollAnimation>
            <div className="text-center wv-spacing-2xl">
              <h2 className="wv-h2 text-green wv-spacing-sm">
                Alle Artikel
              </h2>
              <div className="w-16 h-1 bg-copper mx-auto rounded-full wv-spacing-md"></div>
              <p className="wv-lead text-green/70 wv-spacing-md max-w-3xl mx-auto">
                Filtere nach Kategorien und stöbere durch unseren gesamten Ratgeber.
              </p>
            </div>
          </ScrollAnimation>

          <ArticleList articles={allArticles} pageSize={9} showFilter={true} showSearch={true} />
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