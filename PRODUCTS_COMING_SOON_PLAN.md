## FoundingPaws – Produktseiten „Coming Soon“: Plan & Content-Strategie

Ziel: Fünf neue Produktseiten live schalten (ohne Kauf), Premium-Look gemäß CI, klare Nutzenkommunikation, Social Proof, und performante Lead-Generierung via Warteliste/Merkfunktion.

### CI-Rahmen
- Farben: Green (Primary), Copper (Accent), Cream/Taupe für Flächen; starke Kontraste für CTAs
- Typo: Display/Headlines mit vorhandener Heading-Klasse, Body über DM Sans; bestehende Utility-Klassen nutzen
- Icons: Aus `src/components/icons/` (Made in Germany, Lab, Doctor, Leaf, Heart, Target, Rocket, Sparkles etc.)
- Komponenten: `ProductHero`, `ProductSections`, Trust-Badges, Sticky CTA; vorhandenes Waitlist-Muster aus bestehenden Produktseiten

### UX/Conversion-Prinzipien
- Above-the-fold: Produktname, Subline (Zielwirkung), kurze Beschreibung, Preishinweis (Optional), Badge „Coming Soon“
- Primäre Aktion: „Warteliste/Benachrichtigung“ (E-Mail Lead), optional „Pre-Order“ disabled/secondary
- Nutzen-Icons (3–4 Kernbenefits) mit kurzer Copy in Grid
- Ingredients-Teaser: Transparenz ohne Überfrachtung; Deep-Dive im Tab „Wirkstoffe“
- Sektion „Warum wir“: Made in Germany, Eigenes Labor, Tierärztlich entwickelt
- Social Proof: Expertenstatements/Testimonials (Platzhalter möglich)
- FAQ: 3–4 häufige Fragen pro Produkt
- Sticky/Late CTA: Abschnitt „Exklusive Warteliste“ mit Vorteilen (10% Launch-Rabatt, Vorabzugang, Updates)

### Waitlist/Lead Flow
- Form greift auf `/api/newsletter/subscribe` zu, `source` pro Produkt eindeutig (z. B. `shiny-coat-waitlist`)
- Bestätigung via Double-Opt-In (bestehende Logik), Erfolgsmeldung auf Seite
- DSGVO-konforme Hinweise (Kurztext), kein Spam-Versprechen

### Informationsarchitektur je Produktseite
1) Hero: Kategorie, Titel, Subline, Kurzbeschreibung, Preis/Einheit (optional), CTA „Jetzt vormerken“ → Scroll zu Waitlist
2) Benefits (Icons): 3–6 Bullet-Vorteile spezifisch zur Zielwirkung
3) Ingredients (Teaser oder Tab): Hauptwirkstoffe + Nutzen; Icons aus `/public/products/ingredients/*.svg` wenn vorhanden
4) Anwendung & Dosierung: kurz und klar, je 1–2 Sätze
5) Wissenschaft/Belege: 1–3 Einträge mit Quelle (später mit Links)
6) FAQ: 3–4 Fragen
7) Trust/Badges: Made in Germany, Labor, Tierärztlich
8) Waitlist CTA: Vorteilskommunikation (10% Launch-Rabatt, Vorabzugang, Updates) + Formular

---

## Produkte & Content-Fokus

### 1) Fell & Haut Soft Chews – „Shiny Coat“
- Ziel: Glanz, Hautgesundheit, weniger Juckreiz
- Kernbenefits:
  - Omega‑3 aus Lachsöl + Leinsamen: Fellglanz & Hautbarriere
  - Zink, Biotin, Vitamin E: Zellschutz & Keratinbildung
  - Hagebutte: Natur-Vitamin C; antioxidative Unterstützung
  - Schonende Herstellung (40–45 °C) bewahrt Nährstoffe
- Ingredients (Key): Lachsöl, Leinsamenmehl, Zinkgluconat, Biotin, Vitamin E, Hagebuttenpulver, Rosmarinextrakt
- Dosierung/Anwendung: 1–3 Chews je 10 kg täglich, mit/ohne Futter
- Wissenschaft: Kurznotizen zu Omega‑3, Zink/Biotin, Vitamin E
- FAQ: Ab welchem Alter; Verträglichkeit bei sensibler Haut; Sichtbare Effekte
- CTA-Source: `shiny-coat-waitlist`

### 2) Fell & Haut Soft Chews – „Sensitive Skin“
- Ziel: Hautbarriere, weniger Schuppen/Entzündungen
- Kernbenefits:
  - Hanföl + Nachtkerzenöl (GLA): Barriere & Entzündungsmodulation
  - Bierhefe (B‑Vitamine): Hautstoffwechsel
  - Kurkuma + Vitamin E: antioxidativ
- Ingredients (Key): Hanföl, Nachtkerzenöl, Bierhefe, Kurkuma, Vitamin E
- Dosierung/Anwendung: 1–3 Chews je 10 kg täglich; gut akzeptiert
- Wissenschaft: GLA bei Haut; antioxidative Effekte von Kurkuma/Vit E
- FAQ: Eignung bei Allergikern; Dauer bis Effekt; Kombination mit Shampoos
- CTA-Source: `sensitive-skin-waitlist`

### 3) Joint & Mobility Soft Chews
- Ziel: Gelenkkomfort, Beweglichkeit, Entzündungshemmung
- Kernbenefits:
  - Glucosamin + MSM: Knorpelstoffwechsel & Entzündungshemmung
  - Grünlippmuschel + Hagebutte: GAGs/Omega‑3 & antioxidativ
  - Kurkuma + Piperin: Bioverfügbarkeit, antiinflammatorisch
- Ingredients (Key): Glucosamin, MSM, Grünlippmuschel, Kurkuma+Piperin, Hagebutte
- Dosierung/Anwendung: 1–3 Chews je 10 kg täglich, über 6–8 Wochen
- Wissenschaft: Glucosamin/MSM; GLM (GAGs, Omega‑3)
- FAQ: Ab wann geben; Kombination mit Physio; sichtbare Verbesserungen
- CTA-Source: `joint-mobility-waitlist`

### 4) 5‑Omega‑Öl „Skin & Vital Blend“
- Ziel: Haut/Fell, Herz, Immunsystem – ganzheitlich
- Kernbenefits:
  - 5‑Öl‑Synergie: Lachsöl (EPA/DHA), Leinöl (ALA), Hanföl (Omega‑3/6), Borretsch‑ & Nachtkerzenöl (GLA)
  - Antioxidativer Schutz via Vitamin E, Rosmarinextrakt
  - Hohe Akzeptanz (natürliches Lachsaroma)
- Kennzahlen: Rohfett ~99 %, Omega‑3 ~25 %, Omega‑6 ~15 %
- Dosierung: je 10 kg KG 2–3 ml/Tag, schütteln
- Herstellung/Qualität: kalt gemischt (<35 °C), lichtgeschützt, inertisiert
- Wissenschaft: EPA/DHA für Herz/Gehirn; GLA für Hautbarriere
- FAQ: Aufbewahrung; Verträglichkeit; Mischbarkeit mit Chews
- CTA-Source: `skin-vital-omega-waitlist`

### 5) Grünlippmuschelpulver (100 %)
- Ziel: Gelenke, Sehnen, Bindegewebe
- Kernbenefits:
  - 100 % Perna canaliculus; GAGs ~3,3 %; Omega‑3 ~3,2 %
  - Schonend getrocknet, fein vermahlen; transparent deklariert
  - Messlöffel/COA optional; handliche Dosen/Doypacks
- Dosierung: je 10 kg KG 0,5 g/Tag
- Wissenschaft: GAGs & Lipide bei Gelenkgesundheit
- FAQ: Kombinierbarkeit mit Joint‑Chews; Dauer; Qualität/COA
- CTA-Source: `green-lipped-mussel-waitlist`

---

## Technische Umsetzung
- Routing: dynamische Route `src/app/produkte/[slug]/page.tsx` – Ergänzung um 5 neue Produkte (comingSoon: true)
- Komponenten: `ProductHero` zeigt „Coming Soon“ + Primär-CTA zur Warteliste; `ProductSections` für Tabs
- Icons/Assets: vorhandene Icons nutzen; Platzhalterbilder in `/public/products/...` falls nötig
- Waitlist: Formular postet an `/api/newsletter/subscribe` mit `source`; Erfolgsmeldung inline
- SEO: `JsonLd` Breadcrumbs/Product/FAQ optional; Metadaten per Seite

## Copy/CTA Muster
- Primary CTA: „Jetzt vormerken“ oder „Jetzt 10% Launch-Rabatt sichern“ → Scroll zu `#waitlist`
- Secondary CTA: „Mehr erfahren“ → Scroll zu Details
- Badge: „Coming Soon“ im Hero-Bild

## Open Points
- Finale Bilder/3D Assets je Produkt
- Exakte Preise/Einheiten je Darreichung (Platzhalter ok)
- Launch-Zeitraum Badge aktualisieren


