## Ratgeber SEO- und Content-Plan (Founding Paws)

### Ziele & KPIs
- **Organischer Traffic**: +100% in 6–9 Monaten (Sessions auf `/ratgeber/*`).
- **Top-3 Rankings**: 20 Keywords in 6 Monaten (DE, informational intent).
- **CTR**: +2–3 pp für Ratgeber-Artikel (GSC) via bessere Titles/Meta/FAQ-Snippets.
- **Verweildauer**: +20% (TOC, interne Verlinkung, bessere Struktur).
- **Newsletter-Leads**: +30% durch In-Content-CTAs.

---

## Phase 0 – Baseline & Tracking (Woche 1)
- Google Search Console Property anlegen und **Sitemap** prüfen (`src/app/sitemap.ts`).
- Metriken definieren: Impressions, Klicks, CTR, Position, Sessions, Scroll-Depth, Newsletter-Submits.
- Content-Inventur: Mapping bestehender Artikel aus `src/lib/articles.ts` (Kategorie/Tags/Intent/Rankingstatus).
- Set „Last Updated“-Feld pro Artikel (UI + JSON-LD) für Freshness.

Deliverables:
- Tracking-Plan, Ranking-Baseline (Top 50 Keywords), Content-Inventur-Sheet.

---

## Phase 1 – Technische SEO Quick Wins (Woche 1–2)
- Listing-Seite `/ratgeber` erhält individuelles `generateMetadata` (Title, Description, Canonical, OG) in `src/app/ratgeber/page.tsx`.
- Paginierung für `ArticleList` (z. B. `?page=2`); Canonical nur auf Seite 1, `rel=prev/next` optional.
- `hreflang` nur falls EN-Content aktiv; andernfalls DE-only sauber halten.
- `robots` sicherstellen: index/follow für Artikel; Noindex für Paginierungsseiten >1 optional.
- `sitemap.ts`: enthält bereits Artikel und Kategorien. Ergänzung: `lastModified` pro Artikel wenn verfügbar.
- Performance: Bilder sind bereits Next/Image-basiert. Prüfen: WebP/AVIF, `priority` für Above-the-fold, LCP-Bildgrößen.

Deliverables:
- Sauberes Metadata für `/ratgeber`, optionale Pagination, konsistente Canonicals.

---

## Phase 2 – Informationsarchitektur & Topical Authority (Woche 2–3)
- Pillar-Cluster-Struktur pro Kategorie (Hubs):
  - Gelenke & Mobilität, Stress & Entspannung, Ernährung & Verdauung, Haut & Fell, Herz & Kreislauf, Kognition & Gehirn, Senior & Vitalität, Naturheilkunde.
- Kategorie-Hub-Seiten unter `/ratgeber/kategorie/[category]` sind vorhanden – aufwerten mit:
  - Einleitung mit Suchintention, „Wichtigste Fragen“-Box, kuratierte Top-Artikel, FAQ-Sektion mit Schema, interne Weiterleitungen.
- Cluster-Plan (Beispiele neuer Artikel):
  - Gelenke: „Arthrose beim Hund – kompletter Leitfaden“, „UC-II vs. GLM“, „Physio-Übungen Woche 1–4“.
  - Stress: „Trennungsangst Training-Plan“, „Silvester-Checkliste“, „L-Theanin Dosierungsrechner“.
  - Ernährung: „Durchfall-Protokoll“, „Probiotika-Stämme erklärt“, „Omega-3-Rechner“.
  - Haut: „Hot Spots“, „Flohbekämpfung Schritt-für-Schritt“.

Deliverables:
- IA-Diagramm, priorisierte Themenliste mit Intent (TOFU/MOFU/BOFU), Content-Kalender (12 Wochen).

---

## Phase 3 – Keyword- & SERP-Strategie (Woche 3–4)
- SERP-Analyse pro Zielthema: Ranking-Tiefe, Snippet-Typen (FAQ/HowTo/People also ask), Content-Lücken.
- Keyword-Mapping pro URL: Hauptkeyword + 3–5 sekundäre Entitäten; Title/Meta/URL festlegen.
- „Antwort in 50 Wörtern“-Abschnitte (Featured Snippet-Optimierung) + FAQ-Blöcke.

Deliverables:
- Keyword-Briefs pro Artikel, Snippet-Strategie (FAQ, HowTo, List, Tabelle).

---

## Phase 4 – On-Page-Template Upgrades (Woche 4–5)
- Komponenten ergänzen (UX & SEO):
  - `TableOfContents` (autom. Überschriften-Index, Sticky on desktop).
  - `FAQAccordion` mit JSON-LD `FAQPage` pro Artikel.
  - `KeyTakeaways` (3–5 Bullets am Anfang) und „Das Wichtigste in Kürze“.
  - Autor-/Reviewer-Box (E‑E‑A‑T): Kurzvita, Qualifikation, LinkedIn, „medizinisch geprüft“. JSON-LD `Person`/`Organization`.
  - Related-Articles (algorithmisch: gleiche Kategorie/Tags; editorial Override möglich).
  - „Letztes Update“-Hinweis unter H1 (gleicher Timestamp in JSON-LD `dateModified`).
- CTA-Module: In-Content Newsletter-Box (ab Abschnitt 2), Outbound-Links sparsam, interne Links prominent.

Deliverables:
- Wiederverwendbares Artikel-Template; Design-Dokument der neuen Komponenten.

---

## Phase 5 – Strukturierte Daten (Woche 5)
- Listing `/ratgeber`: `ItemList` vorhanden – prüfen Position/URLs.
- Artikel: `Article` + `BreadcrumbList` (Root → Ratgeber → Kategorie → Artikel).
- FAQs: `FAQPage` (nur sichtbare Fragen), How-To-Inhalte als `HowTo` (bei Schrittketten).
- Organisation/Website-Schema bereits in Root-Layout – Autoren ergänzen.

Deliverables:
- Validierte JSON-LD (Rich Results Test), Dokumentation der Schema-Richtlinien.

---

## Phase 6 – Interne Verlinkung (Woche 5–6)
- Kategorie-Hubs verlinken auf alle Cluster-Artikel mit beschreibenden Ankertexten.
- Jeder Artikel: 3–5 interne Links (Hub, Sibling, tieferführend). „Weiterführende Themen“-Box am Ende.
- Breadcrumbs für alle Ratgeber-Seiten.

Deliverables:
- Interlinking-Playbook, Checkliste für Redakteure, Link-Audit vor/nach Release.

---

## Phase 7 – Medien & Performance (Woche 6)
- Bild-Alt-Texte mit Entitäten/Intent versehen; Dateinamen sprechend.
- Größen sauber defineieren, `priority` nur bei Hero; Lazy-Loading überall sonst.
- Optional: Eigenes `ImagePreset`-Wrapper für konsistente Qualität/Formats.

Deliverables:
- Media-Guidelines, Lighthouse-Report (Mobil), Core Web Vitals-Ziele.

---

## Phase 8 – Content Operations (laufend)
- Workflow: Brief → Entwurf → Review (Fachcheck) → SEO-Check → Veröffentlichung → Update-Rhythmus (90 Tage).
- Redaktionsrichtlinien: Tonalität (vertrauensvoll, evidenzbasiert), Lesbarkeit (Flesch DE), Strukturelemente pro Artikel.
- Quellenpolitik: Primärliteratur/Reviews zitieren; medizinischer Reviewer ausgewiesen.

Deliverables:
- Styleguide, Briefing-Template, Review-Checkliste.

---

## Phase 9 – Distribution & Linkaufbau (Woche 6–12)
- Outreach: Tierärzte/Physiotherapeuten/Trainer (Gastbeiträge, Review-Zitate).
- Branchenportale/Verbände: Fachartikel, Ressourcen-Links.
- Digital PR: Daten-/Studienbasierte Inhalte (z. B. „Häufigste Gelenkprobleme 2025“).
- Community/Foren/Quora/Reddit: Antworten mit Mehrwert, deeplinks zu Guides.

Deliverables:
- Outreach-Liste, Kampagnenkalender, Linkziel-Report (monatlich).

---

## Phase 10 – Monitoring & Iteration (laufend)
- Wöchentlich: GSC-Keywords, CTR-Tests (Title/Meta), Snippet-Gewinne.
- Monatlich: Rankings/KW-Coverage je Kategorie, Traffic je Intent-Stufe, Assisted Conversions (Newsletter/Shop-Besuche).
- Quartalsweise: Content-Gap-Analyse und Refresh-Plan.

Deliverables:
- KPI-Dashboard, Quartalsreview mit Maßnahmenliste.

---

## Umsetzungs-Backlog (konkret, nach Priorität)
1) `src/app/ratgeber/page.tsx`: individuelles `generateMetadata` + prägnante Copy, eigene OG.
2) `src/app/ratgeber/kategorie/[category]/page.tsx`: Hub-Intro + FAQ + curated Top-Links.
3) Artikel-Template:
   - `TableOfContents`, `KeyTakeaways`, `FAQAccordion`, AuthorBox, RelatedArticles, Updated-Label.
   - JSON-LD: `Article`, `BreadcrumbList`, optional `FAQPage`/`HowTo`.
4) Interne Verlinkung: Komponente „Weiterführende Themen“; Related-Algorithmus via Kategorie/Tags.
5) Pagination für `/ratgeber` mit Canonical-Strategie.
6) `sitemap.ts`: Optional `lastModified` aus Artikel-Metadaten.
7) Newsletter-CTA in Artikelkörper (A/B-Position: nach Abschnitt 2 vs. Ende).

---

## Wettbewerbs-Benchmark (DE, Hund Ratgeber – Muster)
- Große Händler/Marken (z. B. Fressnapf, ZooRoyal, Josera, AniForte):
  - Starke Kategorie-Hubs mit Filter/Facetten und FAQ-Abschnitten.
  - Lange Leitfäden (2.000–4.000 Wörter) mit TOC und Sprungmarken.
  - Aggressive interne Verlinkung und modulare Inhaltsblöcke (FAQ/Checklisten/HowTo).
  - Rich Results-Optimierung (FAQ/HowTo/Recipe-ähnliche Strukturen bei Ernährungscontent).
  - Regelmäßige Updates (Freshness), klare Autorenschaft/Review.

Chancen für Founding Paws:
- Höhere inhaltliche Qualität (Evidenz-Zitate, Dosierungsrechner, klare Handlungsanweisungen).
- Bessere UX auf Mobil (Sticky TOC, klare CTAs, reduzierte Ablenkungen).
- Schlankes, konsistentes Schema-Markup ohne Spam – Fokus auf FAQ/Article/Breadcrumb.

---

## Content-Kalender (12 Wochen – Beispiel)
- Woche 1–2: Pillar „Gelenke Leitfaden“, Cluster „Arthrose“, „UC-II vs. GLM“, Update „Gelenkprävention“.
- Woche 3–4: Pillar „Stress Leitfaden“, Cluster „Trennungsangst Plan“, „Silvester Angst“, Update „L‑Theanin“.
- Woche 5–6: Pillar „Ernährung Leitfaden“, Cluster „Durchfall-Protokoll“, „Probiotika-Stämme“, Update „Omega‑3“.
- Woche 7–8: Pillar „Haut & Fell“, Cluster „Hot Spots“, „Floh Guide“, Update „Räude“.
- Woche 9–10: Pillar „Senior & Vitalität“, Cluster „Übungen Woche 1–4“, Update „Senior Übungen“.
- Woche 11–12: Refresh-Runde auf Basis GSC & Nutzerfragen (FAQ-Erweiterungen).

---

## Redaktionsrichtlinien (Kurz)
- Überschriften-Hierarchie strikt (H1 einmalig, H2/H3 logisch, klare Fragestellungen für PAA).
- Abschnitte ≤ 300 Wörter, Bullet-Listen, Tabellen wo sinnvoll.
- Jede Behauptung mit Quelle (Primärliteratur/Reviews); Marken-/Produktbezug klar trennen.
- Lesbarkeit: kurze Sätze, aktive Sprache, klare Handlungsempfehlungen.

---

## Nächste Schritte (Diese Woche)
- Metadata-Upgrade für `/ratgeber` und Kategorie-Hubs umsetzen.
- Artikel-Template-Komponenten entwerfen (TOC, FAQ, AuthorBox, Related).
- Keyword-Briefs für Top 6 Ziele (Gelenke/Stress/Ernährung/Haut/Herz/Senior) erstellen.
- Content-Kalender finalisieren und Produktionsslots einplanen.

—
Stand: Oktober 2025

