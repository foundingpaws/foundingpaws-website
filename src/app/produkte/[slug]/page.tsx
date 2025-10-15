import { notFound } from "next/navigation";
import ProductDetailPage from "@/components/ProductDetailPage";
import JsonLd from "@/components/JsonLd";

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
    heroImage: "/products/Shiny Coat.png",
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
    heroImage: "/products/lifestyle/happy-dog-beach.svg",
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
    heroImage: "/products/lifestyle/happy-dog-beach.svg",
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
  ,
  "shiny-coat": {
    key: "shiny-coat",
    title: "Shiny Coat",
    subtitle: "Fellglanz & Hautgesundheit – weniger Juckreiz",
    description: "Omega‑3, Zink und Biotin für Fellglanz und eine robuste Hautbarriere – sanft formuliert, schonend getrocknet und ohne künstliche Zusatzstoffe.",
    category: "Haut & Fell",
    accent: "green",
    comingSoon: true,
    price: "24,90",
    currency: "€",
    productImage: "/products/Shiny Coat.png",
    heroImage: "/products/Shiny Coat.png",
    benefits: [
      "Fellglanz dank Omega‑3 (Lachsöl, Leinsamen)",
      "Zink + Biotin für Keratinbildung & Haut",
      "Vitamin E & Hagebutte: antioxidativer Schutz",
      "Schonend getrocknet (40–45 °C) – Nährstoffe bleiben erhalten",
      "Hautberuhigende Rezeptur – reduziert Trockenheit & Juckreiz",
      "Ohne künstliche Aromen, Farbstoffe oder Füllstoffe"
    ],
    ingredients: [
      { name: "Lachsöl (EPA/DHA)", amount: "10%", benefit: "Omega‑3 für Haut & Fell", icon: "/products/ingredients/omega3-detail.svg" },
      { name: "Leinsamenmehl", amount: "10%", benefit: "ALA & Ballaststoffe", icon: "/products/ingredients/omega3-detail.svg" },
      { name: "Zinkgluconat", amount: "2%", benefit: "Hautbarriere & Fell", icon: "/products/ingredients/glucosamine-detail.svg" },
      { name: "Biotin", amount: "0,1%", benefit: "Keratinbildung", icon: "/products/ingredients/l-theanine-detail.svg" },
      { name: "Vitamin E", amount: "0,2%", benefit: "Zellschutz", icon: "/products/ingredients/l-theanine-detail.svg" }
    ],
    dosage: "1–3 Soft Chews je 10 kg täglich",
    targetGroup: "Hunde mit stumpfem Fell, trockener/empfindlicher Haut und Juckreiz",
    application: "Täglich, am besten zu einer Mahlzeit verabreichen.",
    science: [
      { title: "Omega‑3 und Hautgesundheit", description: "EPA/DHA stärken die Hautbarriere und unterstützen einen natürlichen Fellglanz.", link: "#", source: "Veterinary Dermatology" },
      { title: "Zink & Biotin – Keratinbildung", description: "Zink und Biotin sind essentiell für Keratin‑ und Hautstoffwechsel.", link: "#", source: "Companion Animal Nutrition" },
      { title: "Antioxidativer Schutz", description: "Vitamin E und sekundäre Pflanzenstoffe unterstützen die Zellschutzsysteme der Haut.", link: "#", source: "Journal of Nutritional Science" }
    ],
    faqs: [
      { question: "Ab welchem Alter?", answer: "Ab 6 Monaten geeignet; bei sensibler Haut langsam anfüttern." },
      { question: "Wann sehe ich Effekte?", answer: "Erste Verbesserungen oft nach 2–4 Wochen, optimale Resultate nach 6–8 Wochen." },
      { question: "Ist es getreidefrei?", answer: "Ja, die Rezeptur enthält keine Getreidebestandteile." },
      { question: "Kann ich kombinieren?", answer: "Ja, sehr gut mit dem 5‑Omega‑Öl – Skin & Vital Blend kombinierbar." }
    ],
    testimonials: []
  }
  ,
  "sensitive-skin": {
    key: "sensitive-skin",
    title: "Sensitive Skin",
    subtitle: "Hautbarriere & Entzündungsbalance",
    description: "GLA‑reiche Öle (Hanf, Nachtkerze) mit Vitamin E & Kurkuma – für eine starke Hautbarriere und ausgeglichene Entzündungsbalance.",
    category: "Haut & Fell",
    accent: "green",
    comingSoon: true,
    price: "24,90",
    currency: "€",
    productImage: "/products/Sensitive Skin.png",
    heroImage: "/products/Sensitive Skin.png",
    benefits: [
      "GLA (Hanf/Nachtkerze) unterstützt die Hautbarriere",
      "B‑Vitamine aus Bierhefe – Haut‑ und Fellstoffwechsel",
      "Kurkuma + Vitamin E: antioxidativer Zellschutz",
      "Weiche Chews – hohe Akzeptanz, einfache Gabe",
      "Sanfte Rezeptur für sensible Hauttypen",
      "Ohne künstliche Konservierungsstoffe"
    ],
    ingredients: [
      { name: "Hanföl", amount: "10%", benefit: "Omega‑3/6, GLA", icon: "/products/ingredients/omega3-detail.svg" },
      { name: "Nachtkerzenöl", amount: "3%", benefit: "GLA für Hautbarriere", icon: "/products/ingredients/omega3-detail.svg" },
      { name: "Bierhefe", amount: "5%", benefit: "B‑Vitamine für Haut", icon: "/products/ingredients/glucosamine-detail.svg" },
      { name: "Kurkuma", amount: "1%", benefit: "Antioxidativ/antiinflammatorisch", icon: "/products/ingredients/glucosamine-detail.svg" },
      { name: "Vitamin E", amount: "0,2%", benefit: "Zellschutz", icon: "/products/ingredients/l-theanine-detail.svg" }
    ],
    dosage: "1–3 Soft Chews je 10 kg täglich",
    targetGroup: "Hunde mit sensibler Haut, Schuppen, Neigung zu Entzündungen",
    application: "Täglich; bei Bedarf mit Shiny Coat alternierend einsetzen.",
    science: [
      { title: "GLA & Hautbarriere", description: "Gamma‑Linolensäure (GLA) kann die epidermale Barrierefunktion unterstützen.", link: "#", source: "Veterinary Dermatology" },
      { title: "Antioxidative Co‑Faktoren", description: "Vitamin E wirkt als Antioxidans und stabilisiert Fettsäuren in der Haut.", link: "#", source: "Journal of Veterinary Science" }
    ],
    faqs: [
      { question: "Für Allergiker geeignet?", answer: "Viele Hunde profitieren – individuelle Unverträglichkeiten bitte vorab prüfen." },
      { question: "Wann sehe ich Effekte?", answer: "Meist nach 2–4 Wochen; vollständige Ergebnisse nach 6–8 Wochen." },
      { question: "Kann ich kombinieren?", answer: "Ja, sinnvoll mit dem 5‑Omega‑Öl – Skin & Vital Blend." },
      { question: "Wie aufbewahren?", answer: "Kühl und trocken lagern; Beutel gut verschließen." }
    ],
    testimonials: []
  }
  ,
  "joint-mobility": {
    key: "joint-mobility",
    title: "Joint & Mobility",
    subtitle: "Gelenke, Beweglichkeit, entzündungshemmend",
    description: "Glucosamin, MSM und Grünlippmuschel – für spürbar mehr Gelenkkomfort.",
    category: "Gelenke & Mobilität",
    accent: "taupe",
    comingSoon: true,
    price: "29,90",
    currency: "€",
    productImage: "/products/Joint & Mobility.png",
    heroImage: "/products/Joint & Mobility.png",
    benefits: [
      "Glucosamin & MSM – Knorpelstoffwechsel unterstützen",
      "Grünlippmuschel: GAGs & Omega‑3 für Gelenkkomfort",
      "Kurkuma + Piperin: verbesserte Bioverfügbarkeit",
      "Hagebutte: natürliche Antioxidantien",
      "Sanfte Rezeptur, gut verträglich im Alltag",
      "Einfache Dosierung als Soft Chew"
    ],
    ingredients: [
      { name: "Glucosamin", amount: "8%", benefit: "Knorpelbaustein", icon: "/products/ingredients/glucosamine-detail.svg" },
      { name: "MSM", amount: "5%", benefit: "Entzündungshemmung", icon: "/products/ingredients/glucosamine-detail.svg" },
      { name: "Grünlippmuschel", amount: "3%", benefit: "GAGs & Omega‑3", icon: "/products/ingredients/Gelenk.png" },
      { name: "Kurkuma + Piperin", amount: "1%", benefit: "Bioverfügbarkeit & Wirkung", icon: "/products/ingredients/glucosamine-detail.svg" }
    ],
    dosage: "1–3 Soft Chews je 10 kg täglich; 6–8 Wochen Kur",
    targetGroup: "Senioren, große Rassen, Hunde mit Gelenkbelastung",
    application: "Täglich zum Futter; langfristig möglich.",
    science: [
      { title: "Glucosamin & Chondroitin", description: "Weit verbreitet zur Unterstützung der Gelenkfunktion bei Hunden.", link: "#", source: "Journal of Veterinary Orthopedics" },
      { title: "MSM Evidenz", description: "MSM kann entzündungshemmende Effekte aufweisen.", link: "#", source: "Veterinary Medicine Research" },
      { title: "Grünlippmuschel (GLM)", description: "GAGs und Lipide aus GLM können die Gelenkgesundheit unterstützen.", link: "#", source: "Veterinary Nutrition" }
    ],
    faqs: [
      { question: "Ab wann geben?", answer: "Präventiv ab ca. 5 Jahren oder bei Belastung; bei Beschwerden sofort starten." },
      { question: "Wann sehe ich Effekte?", answer: "Meist 4–6 Wochen; volle Wirkung 8–12 Wochen." },
      { question: "Mit Physio kombinierbar?", answer: "Ja, sehr sinnvoll – Bewegungstherapie unterstützt den Effekt." },
      { question: "Langfristige Gabe?", answer: "Ja, die Rezeptur ist für eine langfristige Unterstützung konzipiert." }
    ],
    testimonials: []
  }
  ,
  "skin-vital-omega": {
    key: "skin-vital-omega",
    title: "5‑Omega‑Öl – Skin & Vital Blend",
    subtitle: "Haut, Fell, Herz & Immunsystem – ganzheitlich",
    description: "Synergie aus Lachs-, Lein-, Hanf-, Borretsch- und Nachtkerzenöl, ergänzt mit Vitamin E.",
    category: "Haut & Vitalität",
    accent: "copper",
    comingSoon: true,
    price: "19,90",
    currency: "€",
    productImage: "/products/5-Omega-Ölflasche.png",
    heroImage: "/products/5-Omega-Ölflasche.png",
    benefits: [
      "EPA/DHA + ALA + GLA: umfassendes Omega‑Profil",
      "Vitamin E: antioxidativer Schutz",
      "Hohe Akzeptanz (natürliches Lachsaroma)",
      "Kalt gemischt, lichtgeschützt abgefüllt",
      "Synergistische Ölmischung für Haut, Fell, Herz & Immunsystem",
      "Stickstoffarm abgefüllt zur Oxidationsreduktion"
    ],
    ingredients: [
      { name: "Lachsöl", amount: "30%", benefit: "EPA/DHA", icon: "/products/ingredients/omega3-detail.svg" },
      { name: "Leinöl", amount: "25%", benefit: "ALA", icon: "/products/ingredients/omega3-detail.svg" },
      { name: "Hanföl", amount: "20%", benefit: "Omega‑3/6", icon: "/products/ingredients/omega3-detail.svg" },
      { name: "Borretschöl", amount: "10%", benefit: "GLA", icon: "/products/ingredients/omega3-detail.svg" },
      { name: "Nachtkerzenöl", amount: "10%", benefit: "GLA/LA", icon: "/products/ingredients/omega3-detail.svg" }
    ],
    dosage: "Je 10 kg KG: 2–3 ml täglich über das Futter",
    targetGroup: "Alle Hunde mit Haut-/Fellbedarf, Herz-/Immunsystem-Support",
    application: "Vor Gebrauch schütteln; kühl/gelichtgeschützt lagern.",
    science: [
      { title: "EPA/DHA & Herz/Kognition", description: "Omega‑3‑Fettsäuren unterstützen kardiovaskuläre und kognitive Funktionen.", link: "#", source: "Journal of Veterinary Internal Medicine" },
      { title: "GLA & Hautbarriere", description: "GLA trägt zu einer starken epidermalen Barriere bei.", link: "#", source: "Veterinary Dermatology" },
      { title: "Antioxidativer Schutz", description: "Vitamin E reduziert Lipidoxidation in Ölmischungen.", link: "#", source: "Journal of Nutrition" }
    ],
    faqs: [
      { question: "Aufbewahrung?", answer: "Lichtgeschützt; nach Öffnung kühl lagern und zügig verbrauchen." },
      { question: "Kombination mit Chews?", answer: "Ja, z. B. Shiny Coat (Fell) oder Sensitive Skin (Hautbarriere)." },
      { question: "Dosierung bei Welpen?", answer: "Nur nach Rücksprache mit Tierarzt/Tierärztin; Dosierung anpassen." },
      { question: "Wie geben?", answer: "Täglich über das Futter träufeln; vor Gebrauch schütteln." }
    ],
    testimonials: []
  }
  ,
  "green-lipped-mussel": {
    key: "green-lipped-mussel",
    title: "Grünlippmuschelpulver (100%)",
    subtitle: "Natürlich für Gelenke, Sehnen, Bindegewebe",
    description: "100 % Perna canaliculus, schonend getrocknet und fein vermahlen – mit GAGs & Omega‑3.",
    category: "Gelenke & Mobilität",
    accent: "taupe",
    comingSoon: true,
    price: "22,90",
    currency: "€",
    productImage: "/products/Grünlippmuschelpulver.png",
    heroImage: "/products/Grünlippmuschelpulver.png",
    benefits: [
      "GAGs ~3,3 % – Knorpelunterstützung",
      "Omega‑3 ~3,2 % – Entzündungsbalance",
      "Transparente Deklaration, hochwertige Rohware",
      "Fein vermahlen – gute Mischbarkeit",
      "Mit Messlöffel, optional COA",
      "Einzelfuttermittel – flexibel kombinierbar"
    ],
    ingredients: [
      { name: "Grünlippmuschelpulver", amount: "100%", benefit: "Einzelfuttermittel", icon: "/products/ingredients/Gelenk.png" }
    ],
    dosage: "Je 10 kg KG: 0,5 g täglich",
    targetGroup: "Hunde mit Gelenkbedarf, Sporthunde, Senioren",
    application: "Pulver unters Futter mischen; Kur über 8+ Wochen.",
    science: [
      { title: "Grünlippmuschel – Evidenz", description: "Extrakte enthalten GAGs und spezielle Lipide, die Gelenke unterstützen können.", link: "#", source: "Veterinary Nutrition" },
      { title: "Gelenkkomfort", description: "Nährstoffunterstützung kann Beweglichkeit und Wohlbefinden fördern.", link: "#", source: "Journal of Small Animal Practice" }
    ],
    faqs: [
      { question: "Kombination mit Chews?", answer: "Sehr gut kombinierbar, z. B. mit Joint & Mobility." },
      { question: "Wie lange anwenden?", answer: "Langfristig möglich; erste Effekte oft nach mehreren Wochen." },
      { question: "Qualität & Lagerung?", answer: "Schonend getrocknet; kühl, trocken und lichtgeschützt lagern." }
    ],
    testimonials: []
  }
};

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = products[slug as keyof typeof products];
  if (!product) return {};

  const title = `${product.title} – Founding Paws`;
  const description = product.description;
  const image = product.heroImage || product.productImage;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.foundingpaws.de';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [image?.startsWith('http') ? image : `${siteUrl}${image}`],
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image?.startsWith('http') ? image : `${siteUrl}${image}`]
    }
  } as any;
}
export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = products[slug as keyof typeof products];

  if (!product) {
    notFound();
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.foundingpaws.de';
  const url = `${siteUrl}/produkte/${slug}`;
  const image = product.heroImage || product.productImage;

  return (
    <>
      <JsonLd schema={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Startseite', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: 'Produkte', item: `${siteUrl}/produkte` },
          { '@type': 'ListItem', position: 3, name: product.title, item: url }
        ]
      }} />

      <JsonLd schema={{
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: product.title,
        description: product.description,
        image: [image.startsWith('http') ? image : `${siteUrl}${image}`],
        brand: { '@type': 'Brand', name: 'Founding Paws' },
        category: 'Animals & Pet Supplies > Pet Supplies > Dog Supplies > Dog Health Supplies',
        url,
      }} />

      {product.faqs?.length ? (
        <JsonLd schema={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: product.faqs.map((q) => ({
            '@type': 'Question',
            name: q.question,
            acceptedAnswer: { '@type': 'Answer', text: q.answer }
          }))
        }} />
      ) : null}

      <ProductDetailPage product={product} />
    </>
  );
}

export async function generateStaticParams() {
  return Object.keys(products).map((slug) => ({
    slug,
  }));
}
