# Founding Paws Ratgeber – Roadmap

Ziel: Ein eigenständiger, SEO-starker Ratgeber (ähnlich mammaly.de) mit kategorisierten Artikeln, Suche/Filter, sauberer UX und messbarer Conversion.

## Phase 0 – Sofort: Alles muss funktionieren
1. Blocker beseitigen
   - Favicon-Konflikt lösen (nur `src/app/favicon.ico`).
2. UI funktionsfähig verkabeln
   - Zentrale Artikelquelle (`src/lib/articles.ts`) – erstellt.
   - `BlogSection` auf Datenquelle – umgesetzt (Filter/Featured live).
   - `KnowledgeHub` Links geprüft; optional: Umstellung auf Datenquelle (nachziehen).

## Phase 1 – Einheitliche Datenbasis & Komponentenkohärenz
1. `KnowledgeHub` auf `articles.ts` umstellen (kuratierte Auswahl pro Kategorie)
2. Einheitliche Karten-Komponente (`ArticleCard`) und Liste (`ArticleList`) extrahieren
3. Datenpflege: alle vorhandenen Artikel vollständig eintragen (tags, images, excerpts)

## Phase 2 – Content-Engine (MDX & Frontmatter)
1. MDX-Pipeline einrichten
   - `page.mdx` je Artikel mit Frontmatter (title, description, date, category, tags, ogImage).
   - Remark/rehype-Plugins für TOC, Hinweisboxen, Anchors.
2. Artikel sukzessive auf MDX migrieren
   - `articles.ts` automatisiert aus Frontmatter generieren (statt Handpflege).

## Phase 2 – IA & Navigation
1. Kategorie-Routen (`/ratgeber/kategorie/[category]`)
   - `ArticleList` mit Filter, Sort, Pagination.
2. Related Articles auf Artikelseite
   - nach Kategorie/Tags.
3. Suche (lightweight)
   - Clientseitige JSON-Indexsuche (später serverseitig/CMS möglich).

## Phase 3 – SEO & Discovery
1. JSON-LD `Article`, Breadcrumbs, OG/Twitter Cards
2. `sitemap.ts` aus Datenquelle/Frontmatter generieren
3. RSS/Atom-Feed (optional)

## Phase 4 – Conversion & Analytics
1. Inline-CTAs (Newsletter, passende Produkte)
2. Scroll-Progress, Outbound-Tracking, Events
3. A/B-Test-Hooks für Hero/CTA

## Phase 5 – Performance & QA
1. SSG für alle Artikel, Bildoptimierung
2. Lighthouse/CLS-Checks, Link-Validator
3. E2E-Sanity: Artikel öffnen, Filter, Kategorie, 404

---

## Nächste Schritte (Sprint 0)
- [x] Phase 0.1: Favicon-Konflikt fixen
- [x] Phase 0.2: `articles.ts` anlegen
- [x] Phase 0.3: `BlogSection` auf Datenquelle + Filter/Featured
- [ ] Phase 1.1: `KnowledgeHub` auf Datenquelle (kuratierte Auswahl)
- [ ] Phase 1.2: Einheitliche `ArticleCard`/`ArticleList`


