import ScrollAnimation from "@/components/ScrollAnimation";
import FadeIn from "@/components/FadeIn";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import ProductsFilterGrid from "@/components/ProductsFilterGrid";
import "@/styles/product-cards.css";
import JsonLd from "@/components/JsonLd";
import IconMadeInGermany from "@/components/icons/IconMadeInGermany";
import IconLab from "@/components/icons/IconLab";
import IconStethoscope from "@/components/icons/IconStethoscope";
import IconNatural100 from "@/components/icons/IconNatural100";

const products = [
  {
    key: "shiny-coat",
    title: "Shiny Coat",
    subtitle: "Fellglanz & Hautgesundheit – weniger Juckreiz",
    description: "Omega‑3, Zink, Biotin & Vitamin E für glänzendes Fell und starke Hautbarriere.",
    category: "Haut & Fell",
    accent: "green",
    comingSoon: true,
    isNew: true,
    isBestseller: false,
    productImage: "/products/Shiny Coat.png",
    studioImage: "/products/ingredients/omega3-detail.svg",
    lifestyleImage: "/products/lifestyle/happy-dog-beach.svg",
    benefits: [
      "Fellglanz durch Omega‑3",
      "Zink & Biotin für Keratin",
      "Antioxidativer Zellschutz",
      "Schonende Herstellung"
    ],
    ingredients: [
      "Lachsöl",
      "Leinsamen",
      "Zink",
      "Biotin",
    ],
    dosage: "1–3 Chews je 10 kg täglich",
    targetGroup: "Hunde mit stumpfem Fell, trockener/empfindlicher Haut"
  },
  {
    key: "sensitive-skin",
    title: "Sensitive Skin",
    subtitle: "Hautbarriere & Entzündungsbalance",
    description: "GLA‑reiche Öle (Hanf/Nachtkerze), Vitamin E & Kurkuma – sanft für sensible Haut.",
    category: "Haut & Fell",
    accent: "green",
    comingSoon: true,
    isNew: true,
    isBestseller: false,
    productImage: "/products/Sensitive Skin.png",
    studioImage: "/products/ingredients/omega3-detail.svg",
    lifestyleImage: "/products/lifestyle/calm-dog-home.svg",
    benefits: [
      "GLA unterstützt Hautbarriere",
      "B‑Vitamine aus Bierhefe",
      "Antioxidativer Schutz",
      "Hohe Akzeptanz"
    ],
    ingredients: [
      "Hanföl",
      "Nachtkerzenöl",
      "Bierhefe",
      "Kurkuma",
    ],
    dosage: "1–3 Chews je 10 kg täglich",
    targetGroup: "Hunde mit sensibler Haut/Schuppen"
  },
  ,
  {
    key: "joint-mobility",
    title: "Joint & Mobility",
    subtitle: "Gelenke, Beweglichkeit, entzündungshemmend",
    description: "Glucosamin, MSM & Grünlippmuschel – für spürbar mehr Gelenkkomfort.",
    category: "Gelenke & Mobilität",
    accent: "taupe",
    comingSoon: true,
    isNew: true,
    isBestseller: false,
    productImage: "/products/Joint & Mobility.png",
    studioImage: "/products/ingredients/glucosamine-detail.svg",
    lifestyleImage: "/products/lifestyle/active-dog-park.svg",
    benefits: [
      "Knorpelstoffwechsel unterstützen",
      "Entzündungen reduzieren",
      "Mehr Beweglichkeit",
      "Mit Hagebutte"
    ],
    ingredients: [
      "Glucosamin",
      "MSM",
      "Grünlippmuschel",
      "Kurkuma+Piperin",
    ],
    dosage: "1–3 Chews je 10 kg täglich",
    targetGroup: "Senioren, große Rassen, Gelenkbedarf"
  }
  ,
  {
    key: "skin-vital-omega",
    title: "5‑Omega‑Öl – Skin & Vital Blend",
    subtitle: "Haut, Fell, Herz & Immunsystem",
    description: "Synergie aus Lachs‑, Lein‑, Hanf‑, Borretsch‑ & Nachtkerzenöl, mit Vitamin E.",
    category: "Haut & Vitalität",
    accent: "copper",
    comingSoon: true,
    isNew: true,
    isBestseller: false,
    productImage: "/products/5-Omega-Oelflasche.png",
    studioImage: "/products/ingredients/omega3-detail.svg",
    lifestyleImage: "/products/lifestyle/happy-dog-beach.svg",
    benefits: [
      "EPA/DHA + ALA + GLA",
      "Antioxidativer Schutz",
      "Hohe Akzeptanz",
      "Kalt gemischt"
    ],
    ingredients: [
      "Lachsöl",
      "Leinöl",
      "Hanföl",
      "Borretsch & Nachtkerze",
    ],
    dosage: "2–3 ml je 10 kg täglich",
    targetGroup: "Hunde mit Haut/Fell‑ & Vitalitätsbedarf"
  }
  ,
  {
    key: "green-lipped-mussel",
    title: "Grünlippmuschelpulver (100%)",
    subtitle: "Gelenke, Sehnen, Bindegewebe",
    description: "100 % Perna canaliculus – GAGs & Omega‑3, schonend getrocknet.",
    category: "Gelenke & Mobilität",
    accent: "taupe",
    comingSoon: true,
    isNew: true,
    isBestseller: false,
    productImage: "/products/Gruenlippmuschelpulver.png",
    studioImage: "/products/ingredients/Gelenk.png",
    lifestyleImage: "/products/lifestyle/active-dog-park.svg",
    benefits: [
      "GAGs für Knorpel",
      "Omega‑3 für Balance",
      "Transparente Qualität",
      "Mit Messlöffel"
    ],
    ingredients: [
      "Grünlippmuschelpulver 100%",
    ],
    dosage: "0,5 g je 10 kg täglich",
    targetGroup: "Gelenkbedarf, Sporthunde, Senioren"
  }
];

export default function ProduktePage() {
  return (
    <main className="bg-cream text-green">
      <JsonLd schema={{
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.foundingpaws.de'}/produkte/shiny-coat` },
          { '@type': 'ListItem', position: 2, url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.foundingpaws.de'}/produkte/sensitive-skin` },
          { '@type': 'ListItem', position: 3, url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.foundingpaws.de'}/produkte/joint-mobility` },
          { '@type': 'ListItem', position: 4, url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.foundingpaws.de'}/produkte/skin-vital-omega` },
          { '@type': 'ListItem', position: 5, url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.foundingpaws.de'}/produkte/green-lipped-mussel` },
        ],
      }} />
      {/* Hero Section */}
      <section className="wv-section bg-green text-cream">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <FadeIn>
              <div>
                <div className="inline-block pill bg-cream/15 border border-cream/25 px-5 py-2 wv-eyebrow wv-spacing-md" style={{color: 'white'}}>
                  Unsere Produkte
                </div>
                <h1 className="wv-h1 wv-spacing-sm" style={{color: 'white'}}>
                  Premium-Supplements – Coming Soon
                </h1>
                <div className="w-16 h-1 bg-copper rounded-full wv-spacing-md"></div>
                <p className="wv-lead wv-spacing-md max-w-2xl" style={{color: 'rgba(255, 255, 255, 0.9)'}}>
                  Evidenzbasiert, mit Tierärzten entwickelt und in Deutschland gefertigt.
                  Sichere dir jetzt Zugang zur Warteliste und 10% Launch-Rabatt.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 wv-spacing-md">
                  <a href="/bedarfsfinder" className="bg-white text-green px-8 py-4 rounded-full font-medium hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-base text-center">
                    Bedarfsfinder starten
                  </a>
                  <a href="#waitlist" className="bg-copper text-cream px-8 py-4 rounded-full font-medium hover:bg-copper/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-base text-center">
                    Warteliste sichern
                  </a>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="relative aspect-[4/3] rounded-[28px] overflow-hidden shadow-2xl bg-white/5 border border-white/10 max-w-xl mx-auto">
                <Image
                  src="/products/Omega3mitHund.png"
                  alt="Omega‑3 mit Hund"
                  fill
                  className="object-cover"
                  priority
                  sizes="(min-width: 1024px) 600px, 100vw"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="wv-section bg-cream">
        <div className="container-wide">
          <ScrollAnimation>
            <div className="text-center wv-spacing-2xl">
              <h2 className="wv-h2 text-green wv-spacing-sm">
                Unsere Formeln
              </h2>
              <div className="w-16 h-1 bg-copper mx-auto rounded-full wv-spacing-md"></div>
              <p className="wv-lead text-green/70 wv-spacing-md max-w-3xl mx-auto">
                Jede Formel ist speziell für einen Gesundheitsbereich entwickelt und 
                enthält nur die besten, wissenschaftlich validierten Inhaltsstoffe.
              </p>
            </div>
          </ScrollAnimation>

          <ProductsFilterGrid products={products as any} />
        </div>
      </section>


      {/* Quality Promise */}
      <section className="wv-section bg-green text-cream">
        <div className="container-wide">
          <ScrollAnimation>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="wv-h2 wv-spacing-sm" style={{color: 'white'}}>
                Unsere Qualitätsversprechen
              </h2>
              <div className="w-16 h-1 bg-copper mx-auto rounded-full wv-spacing-md"></div>
              <p className="wv-lead wv-spacing-md" style={{color: 'rgba(255, 255, 255, 0.9)'}}>
                Jedes Produkt wird nach höchsten Standards entwickelt und hergestellt.
              </p>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 wv-spacing-md">
                <div className="text-center">
                  <IconLab className="w-8 h-8 mx-auto wv-spacing-sm text-white" />
                  <h3 className="wv-h4 wv-spacing-xs" style={{color: 'white'}}>Laborgeprüft</h3>
                  <p className="wv-body" style={{color: 'rgba(255, 255, 255, 0.8)'}}>Jede Charge wird von unabhängigen Laboren geprüft</p>
                </div>
                <div className="text-center">
                  <IconMadeInGermany className="w-8 h-8 mx-auto wv-spacing-sm text-white" />
                  <h3 className="wv-h4 wv-spacing-sm" style={{color: 'white'}}>Made in Germany</h3>
                  <p className="wv-body" style={{color: 'rgba(255, 255, 255, 0.8)'}}>Handgefertigt in Heilbronn</p>
                </div>
                <div className="text-center">
                  <IconNatural100 className="w-8 h-8 mx-auto wv-spacing-sm text-white" />
                  <h3 className="wv-h4 wv-spacing-sm" style={{color: 'white'}}>100% Natürlich</h3>
                  <p className="wv-body" style={{color: 'rgba(255, 255, 255, 0.8)'}}>Keine künstlichen Zusatzstoffe</p>
                </div>
                <div className="text-center">
                  <IconStethoscope className="w-8 h-8 mx-auto wv-spacing-sm text-white" />
                  <h3 className="wv-h4 wv-spacing-sm" style={{color: 'white'}}>Tierärztlich entwickelt</h3>
                  <p className="wv-body" style={{color: 'rgba(255, 255, 255, 0.8)'}}>Von Experten für Hunde entwickelt</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center wv-spacing-md">
                <a href="#finder-mvp" className="btn-primary pill text-cream px-8 py-4 font-medium">
                  Bedarfsfinder starten
                </a>
                <a href="mailto:info@foundingpaws.de" className="btn-secondary pill text-cream px-8 py-4 font-medium">
                  Fragen stellen
                </a>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Waitlist Banner */}
      <section id="waitlist" className="wv-section bg-gradient-to-br from-green to-green/90 text-white">
        <div className="container-wide">
          <ScrollAnimation>
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-block pill bg-white/20 border border-white/30 px-6 py-3 wv-eyebrow wv-spacing-sm text-white font-medium">Exklusive Warteliste</div>
              <h2 className="wv-h2 text-white wv-spacing-sm">Sei beim Launch dabei</h2>
              <div className="w-16 h-1 bg-copper mx-auto rounded-full wv-spacing-md"></div>
              <p className="wv-lead text-white wv-spacing-md max-w-3xl mx-auto">
                Melde dich an und erhalte 10% Launch‑Rabatt, Vorabzugang und Updates.
              </p>

              <form className="max-w-lg mx-auto grid sm:grid-cols-[1fr_auto] gap-3">
                <input type="email" required placeholder="deine@email.de" className="w-full px-4 py-4 rounded-xl border border-cream/30 focus:border-copper focus:ring-2 focus:ring-copper/20 text-green bg-white/90 placeholder-green/50 text-lg" />
                <button className="bg-copper text-white px-8 py-4 rounded-xl font-medium hover:bg-copper/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">Jetzt 10% sichern</button>
              </form>

              <div className="mt-6 text-white/80 text-sm">🔒 Keine Sorge, kein Spam. Jederzeit kündbar.</div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </main>
  );
}
