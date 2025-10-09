import { notFound } from "next/navigation";
import ProductDetailPage from "@/components/ProductDetailPage";

// Produktdaten - später aus Datenbank
const products = {
  "bright-mind": {
    key: "bright-mind",
    title: "Bright Mind",
    subtitle: "Kognitive Unterstützung & Herzgesundheit",
    description: "Fördert geistige Klarheit und unterstützt die Herzfunktion – für ein waches, vitales Hundeleben.",
    category: "Kognition & Herz",
    accent: "copper",
    comingSoon: true,
    price: "29,90",
    currency: "€",
    productImage: "/products/bright-mind/Bright Mind.png",
    heroImage: "/products/bright-mind/product-3d.svg",
    benefits: [
      "Omega-3 Fettsäuren für optimale Gehirnfunktion",
      "Antioxidantien schützen vor freien Radikalen",
      "Unterstützt das Herz-Kreislauf-System",
      "Fördert Konzentration und Lernfähigkeit",
      "Verbessert die Gedächtnisleistung",
      "Reduziert geistige Ermüdung"
    ],
    ingredients: [
      {
        name: "EPA & DHA aus Fischöl",
        amount: "500mg",
        benefit: "Essentielle Omega-3-Fettsäuren für Gehirn und Herz",
        icon: "/products/ingredients/omega3-detail.svg"
      },
      {
        name: "Curcumin aus Kurkuma",
        amount: "200mg",
        benefit: "Starkes Antioxidans mit entzündungshemmender Wirkung",
        icon: "/products/ingredients/glucosamine-detail.svg"
      },
      {
        name: "Vitamin E",
        amount: "50mg",
        benefit: "Schützt Zellen vor oxidativem Stress",
        icon: "/products/ingredients/l-theanine-detail.svg"
      },
      {
        name: "L-Carnitin",
        amount: "100mg",
        benefit: "Unterstützt die Energieproduktion in den Zellen",
        icon: "/products/ingredients/omega3-detail.svg"
      }
    ],
    dosage: "1-2 Kapseln täglich je nach Gewicht",
    targetGroup: "Hunde ab 7 Jahren, besonders aktive und lernende Hunde",
    application: "Die Kapseln können direkt oder mit dem Futter verabreicht werden. Für beste Ergebnisse täglich zur gleichen Zeit geben.",
    science: [
      {
        title: "Omega-3-Fettsäuren und kognitive Funktion",
        description: "Studien zeigen, dass EPA und DHA die Gehirnfunktion bei Hunden verbessern können.",
        link: "#",
        source: "Journal of Veterinary Internal Medicine, 2023"
      },
      {
        title: "Curcumin und Entzündungshemmung",
        description: "Forschung bestätigt die entzündungshemmenden Eigenschaften von Curcumin.",
        link: "#",
        source: "Veterinary Research, 2022"
      }
    ],
    faqs: [
      {
        question: "Ab welchem Alter kann ich Bright Mind geben?",
        answer: "Bright Mind ist für Hunde ab 7 Jahren geeignet. Bei jüngeren Hunden empfehlen wir eine Rücksprache mit dem Tierarzt."
      },
      {
        question: "Wie lange dauert es, bis ich erste Wirkungen sehe?",
        answer: "Erste positive Effekte können bereits nach 2-3 Wochen sichtbar werden. Die volle Wirkung entfaltet sich nach 6-8 Wochen regelmäßiger Anwendung."
      },
      {
        question: "Kann ich Bright Mind mit anderen Nahrungsergänzungsmitteln kombinieren?",
        answer: "Ja, Bright Mind kann problemlos mit anderen Founding Paws Produkten kombiniert werden. Bei anderen Marken empfehlen wir eine Rücksprache mit dem Tierarzt."
      }
    ],
    testimonials: [
      {
        name: "Dr. Sarah Müller",
        role: "Tierärztin",
        content: "Die Kombination aus Omega-3-Fettsäuren und Curcumin in Bright Mind ist wissenschaftlich fundiert und zeigt bei meinen Patienten sichtbare Verbesserungen der kognitiven Funktion.",
        rating: 5
      },
      {
        name: "Michael K.",
        role: "Hundebesitzer",
        content: "Mein 9-jähriger Labrador ist seit der Einnahme von Bright Mind viel aufmerksamer und lernt neue Tricks schneller. Wir sind begeistert!",
        rating: 5
      }
    ]
  },
  "gentle-calm": {
    key: "gentle-calm",
    title: "Gentle Calm",
    subtitle: "Stresslinderung & Emotionale Balance",
    description: "Natürliche Beruhigung für ängstliche Momente – damit dein Hund entspannt durch den Alltag geht.",
    category: "Stress & Angst",
    accent: "green",
    comingSoon: true,
    price: "24,90",
    currency: "€",
    productImage: "/products/gentle-calm/ObjectID6a.png",
    heroImage: "/products/gentle-calm/product-3d.svg",
    benefits: [
      "Reduziert Stress und Angst natürlich",
      "Fördert entspannten und erholsamen Schlaf",
      "Unterstützt die emotionale Balance",
      "Natürliche Beruhigung ohne Sedierung",
      "Verbessert die Anpassungsfähigkeit",
      "Reduziert Reaktivität bei Stressoren"
    ],
    ingredients: [
      {
        name: "L-Theanin aus grünem Tee",
        amount: "100mg",
        benefit: "Natürliche Aminosäure mit beruhigender Wirkung",
        icon: "/products/ingredients/l-theanine-detail.svg"
      },
      {
        name: "Kamillenextrakt",
        amount: "150mg",
        benefit: "Traditionelle Heilpflanze mit entspannenden Eigenschaften",
        icon: "/products/ingredients/glucosamine-detail.svg"
      },
      {
        name: "Passionsblume",
        amount: "100mg",
        benefit: "Natürliches Beruhigungsmittel ohne Abhängigkeitsrisiko",
        icon: "/products/ingredients/omega3-detail.svg"
      },
      {
        name: "Magnesium",
        amount: "50mg",
        benefit: "Wichtiges Mineral für die Nervenfunktion",
        icon: "/products/ingredients/l-theanine-detail.svg"
      }
    ],
    dosage: "1 Kapsel 30 Min vor stressigen Situationen",
    targetGroup: "Ängstliche Hunde, bei Gewitter, Feuerwerk, Tierarztbesuchen",
    application: "Bei akutem Stress 30 Minuten vor der Situation geben. Bei chronischer Angst täglich zur gleichen Zeit verabreichen.",
    science: [
      {
        title: "L-Theanin und Stressreduktion",
        description: "Studien belegen die stressreduzierende Wirkung von L-Theanin bei Tieren.",
        link: "#",
        source: "Animal Behavior Science, 2023"
      },
      {
        title: "Pflanzliche Beruhigungsmittel in der Tiermedizin",
        description: "Forschung zu natürlichen Alternativen zu chemischen Beruhigungsmitteln.",
        link: "#",
        source: "Veterinary Pharmacology, 2022"
      }
    ],
    faqs: [
      {
        question: "Ist Gentle Calm für alle Hunde geeignet?",
        answer: "Gentle Calm ist für Hunde ab 6 Monaten geeignet. Bei trächtigen oder laktierenden Hündinnen empfehlen wir eine Rücksprache mit dem Tierarzt."
      },
      {
        question: "Wie schnell wirkt Gentle Calm?",
        answer: "Die beruhigende Wirkung setzt nach 30-45 Minuten ein. Bei regelmäßiger Anwendung kann sich die Grundentspannung nach 1-2 Wochen verbessern."
      },
      {
        question: "Kann ich Gentle Calm dauerhaft geben?",
        answer: "Ja, Gentle Calm ist für eine dauerhafte Anwendung konzipiert. Die natürlichen Inhaltsstoffe sind gut verträglich und nicht abhängigkeitsfördernd."
      }
    ],
    testimonials: [
      {
        name: "Dr. Anna Weber",
        role: "Tierverhaltenstherapeutin",
        content: "Gentle Calm ist eine wunderbare Ergänzung zu meiner verhaltenstherapeutischen Arbeit. Die natürlichen Inhaltsstoffe unterstützen die Entspannung ohne Nebenwirkungen.",
        rating: 5
      },
      {
        name: "Lisa M.",
        role: "Hundebesitzerin",
        content: "Mein Hund hat extreme Angst vor Gewittern. Mit Gentle Calm kann er jetzt viel entspannter durch die Gewittersaison kommen. Ein Segen!",
        rating: 5
      }
    ]
  },
  "vital-joints": {
    key: "vital-joints",
    title: "Vital Joints",
    subtitle: "Gelenkgesundheit & Mobilität",
    description: "Unterstützt Gelenke und Beweglichkeit – für schmerzfreie Spaziergänge bis ins hohe Alter.",
    category: "Gelenke & Mobilität",
    accent: "taupe",
    comingSoon: true,
    price: "34,90",
    currency: "€",
    productImage: "/products/vital-joints/VitalJoints.png",
    heroImage: "/products/vital-joints/product-3d.svg",
    benefits: [
      "Fördert die Gelenkgesundheit aktiv",
      "Reduziert Entzündungen in den Gelenken",
      "Unterstützt den Knorpelaufbau",
      "Verbessert die Beweglichkeit spürbar",
      "Reduziert Gelenkschmerzen",
      "Verlangsamt den Gelenkverschleiß"
    ],
    ingredients: [
      {
        name: "Glucosamin HCl",
        amount: "750mg",
        benefit: "Grundbaustein für gesunden Knorpel",
        icon: "/products/ingredients/glucosamine-detail.svg"
      },
      {
        name: "Chondroitinsulfat",
        amount: "600mg",
        benefit: "Erhält die Elastizität des Knorpels",
        icon: "/products/ingredients/omega3-detail.svg"
      },
      {
        name: "MSM (Methylsulfonylmethan)",
        amount: "400mg",
        benefit: "Natürliches Schwefelpräparat gegen Entzündungen",
        icon: "/products/ingredients/l-theanine-detail.svg"
      },
      {
        name: "Hyaluronsäure",
        amount: "50mg",
        benefit: "Verbessert die Gelenkschmierung",
        icon: "/products/ingredients/glucosamine-detail.svg"
      }
    ],
    dosage: "2-3 Kapseln täglich je nach Gewicht",
    targetGroup: "Hunde mit Gelenkproblemen, Senioren, große Rassen",
    application: "Die Kapseln sollten mit dem Futter verabreicht werden. Für beste Ergebnisse über mindestens 8 Wochen anwenden.",
    science: [
      {
        title: "Glucosamin und Chondroitin bei Gelenkerkrankungen",
        description: "Umfangreiche Studien belegen die Wirksamkeit dieser Kombination bei Hunden.",
        link: "#",
        source: "Journal of Veterinary Orthopedics, 2023"
      },
      {
        title: "MSM in der Gelenktherapie",
        description: "Forschung zu den entzündungshemmenden Eigenschaften von MSM.",
        link: "#",
        source: "Veterinary Medicine Research, 2022"
      }
    ],
    faqs: [
      {
        question: "Ab wann sollte ich Vital Joints geben?",
        answer: "Vital Joints kann bereits präventiv ab dem 5. Lebensjahr gegeben werden. Bei bestehenden Gelenkproblemen sofort mit der Anwendung beginnen."
      },
      {
        question: "Wie lange dauert es, bis ich Verbesserungen sehe?",
        answer: "Erste positive Effekte zeigen sich nach 4-6 Wochen. Die volle Wirkung entfaltet sich nach 8-12 Wochen regelmäßiger Anwendung."
      },
      {
        question: "Ist Vital Joints für große Hunde geeignet?",
        answer: "Ja, die Dosierung kann je nach Gewicht angepasst werden. Große Rassen profitieren besonders von der präventiven Gelenkunterstützung."
      }
    ],
    testimonials: [
      {
        name: "Dr. Thomas Schmidt",
        role: "Tierarzt für Orthopädie",
        content: "Vital Joints ist eine ausgezeichnete Ergänzung zur orthopädischen Behandlung. Die Kombination der Wirkstoffe ist optimal aufeinander abgestimmt.",
        rating: 5
      },
      {
        name: "Petra L.",
        role: "Hundebesitzerin",
        content: "Mein 12-jähriger Schäferhund läuft wieder wie ein junger Hund! Vital Joints hat seine Lebensqualität deutlich verbessert.",
        rating: 5
      }
    ]
  }
};

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}
export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = products[slug as keyof typeof products];

  if (!product) {
    notFound();
  }

  return <ProductDetailPage product={product} />;
}

export async function generateStaticParams() {
  return Object.keys(products).map((slug) => ({
    slug,
  }));
}
