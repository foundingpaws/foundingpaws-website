import Image from "next/image";
import ScrollAnimation from "@/components/ScrollAnimation";
import FadeIn from "@/components/FadeIn";
import GlassmorphismCard from "@/components/GlassmorphismCard";
import OptimizedImage from "@/components/OptimizedImage";

const products = [
  {
    key: "bright-mind",
    title: "Bright Mind",
    subtitle: "Kognitive Unterstützung & Herzgesundheit",
    description: "Fördert geistige Klarheit und unterstützt die Herzfunktion – für ein waches, vitales Hundeleben.",
    category: "Kognition & Herz",
    accent: "copper",
    comingSoon: true,
    productImage: "/products/bright-mind/Bright Mind.png",
    studioImage: "/products/bright-mind/product-studio.svg",
    lifestyleImage: "/products/lifestyle/happy-dog-beach.svg",
    benefits: [
      "Omega-3 Fettsäuren für Gehirnfunktion",
      "Antioxidantien gegen freie Radikale",
      "Unterstützt Herz-Kreislauf-System",
      "Fördert Konzentration und Lernfähigkeit"
    ],
    ingredients: [
      "EPA & DHA aus Fischöl",
      "Curcumin aus Kurkuma",
      "Vitamin E",
      "L-Carnitin"
    ],
    dosage: "1-2 Kapseln täglich je nach Gewicht",
    targetGroup: "Hunde ab 7 Jahren, besonders aktive und lernende Hunde"
  },
  {
    key: "gentle-calm",
    title: "Gentle Calm",
    subtitle: "Stresslinderung & Emotionale Balance",
    description: "Natürliche Beruhigung für ängstliche Momente – damit dein Hund entspannt durch den Alltag geht.",
    category: "Stress & Angst",
    accent: "green",
    comingSoon: true,
    productImage: "/products/gentle-calm/ObjectID6a.png",
    studioImage: "/products/gentle-calm/product-studio.svg",
    lifestyleImage: "/products/lifestyle/calm-dog-home.svg",
    benefits: [
      "Reduziert Stress und Angst",
      "Fördert entspannten Schlaf",
      "Unterstützt emotionale Balance",
      "Natürliche Beruhigung ohne Sedierung"
    ],
    ingredients: [
      "L-Theanin aus grünem Tee",
      "Kamillenextrakt",
      "Passionsblume",
      "Magnesium"
    ],
    dosage: "1 Kapsel 30 Min vor stressigen Situationen",
    targetGroup: "Ängstliche Hunde, bei Gewitter, Feuerwerk, Tierarztbesuchen"
  },
  {
    key: "vital-joints",
    title: "Vital Joints",
    subtitle: "Gelenkgesundheit & Mobilität",
    description: "Unterstützt Gelenke und Beweglichkeit – für schmerzfreie Spaziergänge bis ins hohe Alter.",
    category: "Gelenke & Mobilität",
    accent: "taupe",
    comingSoon: true,
    productImage: "/products/vital-joints/VitalJoints.png",
    studioImage: "/products/vital-joints/product-studio.svg",
    lifestyleImage: "/products/lifestyle/active-dog-park.svg",
    benefits: [
      "Fördert Gelenkgesundheit",
      "Reduziert Entzündungen",
      "Unterstützt Knorpelaufbau",
      "Verbessert Beweglichkeit"
    ],
    ingredients: [
      "Glucosamin HCl",
      "Chondroitinsulfat",
      "MSM (Methylsulfonylmethan)",
      "Hyaluronsäure"
    ],
    dosage: "2-3 Kapseln täglich je nach Gewicht",
    targetGroup: "Hunde mit Gelenkproblemen, Senioren, große Rassen"
  }
];

const comingSoonProducts = [
  {
    name: "Skin & Coat",
    description: "Für glänzendes Fell und gesunde Haut",
    status: "In Entwicklung"
  },
  {
    name: "Immune Boost",
    description: "Stärkt die Abwehrkräfte",
    status: "In Planung"
  },
  {
    name: "Digestive Care",
    description: "Unterstützt die Verdauung",
    status: "In Planung"
  }
];

export default function ProduktePage() {
  return (
    <main className="bg-cream text-green">
      {/* Hero Section */}
      <section className="wv-section bg-green text-cream">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <div className="inline-block pill bg-cream/15 border border-cream/25 px-5 py-2 wv-eyebrow wv-spacing-md" style={{color: 'white'}}>
                Unsere Produkte
              </div>
              <h1 className="wv-h1 wv-spacing-sm" style={{color: 'white'}}>
                Wissenschaftlich entwickelte Supplements
              </h1>
              <div className="w-16 h-1 bg-copper mx-auto rounded-full wv-spacing-md"></div>
              <p className="wv-lead wv-spacing-md max-w-3xl mx-auto" style={{color: 'rgba(255, 255, 255, 0.9)'}}>
                Drei gezielte Formeln für die wichtigsten Gesundheitsbereiche deines Hundes. 
                Entwickelt mit Tierärzten, hergestellt in Deutschland.
              </p>
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

          <div className="grid lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ScrollAnimation key={product.key} animation="slide-up" delay={index * 100}>
                <a href={`/produkte/${product.key}`} className="block">
                  <GlassmorphismCard className="p-8 hover-lift-feature cursor-pointer">
                  {/* Coming Soon Badge */}
                  <div className="absolute top-4 right-4 pill bg-copper/15 border border-copper/25 text-copper text-xs px-3 py-1 font-medium">
                    Coming Soon
                  </div>

                  {/* Product Image */}
                  <div className="w-24 h-24 rounded-2xl overflow-hidden bg-gradient-to-br from-cream to-taupe/20 border border-taupe/20 flex items-center justify-center wv-spacing-md mx-auto">
                    <OptimizedImage
                      src={product.productImage}
                      alt={`${product.title} Produktbild`}
                      width={80}
                      height={80}
                      className="w-full h-full object-contain"
                      placeholder="blur"
                      quality={90}
                    />
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <div className="pill bg-green/5 border border-green/15 text-green wv-caption px-3 py-1 font-medium wv-spacing-sm inline-block">
                      {product.category}
                    </div>
                    
                    <h3 className="wv-h3 text-green wv-spacing-xs">
                      {product.title}
                    </h3>
                    <p className="wv-subhead text-copper wv-spacing-sm">
                      {product.subtitle}
                    </p>
                    <p className="wv-body text-green/75 wv-spacing-sm">
                      {product.description}
                    </p>

                    {/* Benefits */}
                    <div className="wv-spacing-sm">
                      <h4 className="wv-h4 text-green wv-spacing-xs">Wirkung:</h4>
                      <ul className="text-green/70 wv-body text-left">
                        {product.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-2 mb-1">
                            <span className="text-copper text-sm mt-0.5">•</span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Ingredients */}
                    <div className="wv-spacing-sm">
                      <h4 className="wv-h4 text-green wv-spacing-xs">Inhaltsstoffe:</h4>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {product.ingredients.map((ingredient, idx) => (
                          <span key={idx} className="pill bg-taupe/10 text-green px-3 py-1 text-xs">
                            {ingredient}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Dosage & Target */}
                    <div className="border-t border-taupe/15 pt-4 wv-spacing-sm">
                      <div className="wv-caption text-green/60 wv-spacing-xs">
                        <strong>Dosierung:</strong> {product.dosage}
                      </div>
                      <div className="wv-caption text-green/60">
                        <strong>Für:</strong> {product.targetGroup}
                      </div>
                    </div>
                  </div>
                </GlassmorphismCard>
                </a>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Products */}
      <section className="wv-section bg-gradient-to-b from-cream to-taupe/5">
        <div className="container-wide">
          <ScrollAnimation>
            <div className="text-center wv-spacing-2xl">
              <h2 className="wv-h2 text-green wv-spacing-sm">
                Weitere Formeln in Entwicklung
              </h2>
              <div className="w-16 h-1 bg-copper mx-auto rounded-full wv-spacing-md"></div>
              <p className="wv-lead text-green/70 wv-spacing-md max-w-3xl mx-auto">
                Wir arbeiten kontinuierlich an neuen Formeln, um alle Aspekte 
                der Hundegesundheit abzudecken.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid sm:grid-cols-3 gap-6">
            {comingSoonProducts.map((product, index) => (
              <ScrollAnimation key={product.name} animation="fade-in" delay={index * 100}>
                <GlassmorphismCard className="p-6 text-center hover-lift-feature">
                  <div className="text-3xl wv-spacing-sm">🔬</div>
                  <h3 className="wv-h4 text-green wv-spacing-xs">
                    {product.name}
                  </h3>
                  <p className="wv-body text-green/75 wv-spacing-sm">
                    {product.description}
                  </p>
                  <div className="pill bg-copper/15 text-copper px-3 py-1 text-xs font-medium">
                    {product.status}
                  </div>
                </GlassmorphismCard>
              </ScrollAnimation>
            ))}
          </div>
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
                  <div className="text-3xl wv-spacing-sm">🔬</div>
                  <h3 className="wv-h4 wv-spacing-xs" style={{color: 'white'}}>Laborgeprüft</h3>
                  <p className="wv-body" style={{color: 'rgba(255, 255, 255, 0.8)'}}>Jede Charge wird von unabhängigen Laboren geprüft</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl wv-spacing-sm">🇩🇪</div>
                  <h3 className="wv-h4 wv-spacing-sm" style={{color: 'white'}}>Made in Germany</h3>
                  <p className="wv-body" style={{color: 'rgba(255, 255, 255, 0.8)'}}>Handgefertigt in Heilbronn</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl wv-spacing-sm">🌿</div>
                  <h3 className="wv-h4 wv-spacing-sm" style={{color: 'white'}}>100% Natürlich</h3>
                  <p className="wv-body" style={{color: 'rgba(255, 255, 255, 0.8)'}}>Keine künstlichen Zusatzstoffe</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl wv-spacing-sm">🩺</div>
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
    </main>
  );
}
