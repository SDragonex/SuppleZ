# Project Memory & Context

> **Last Updated:** 2026-10-30
> **Project:** SuppleZ v4.0 – PWA Encyklopedie suplementů, nootropik a biohackingu

---

## 1. Core Architecture & Tech Stack
- **Frontend / Runtime:** Pure Vanilla HTML5, modern CSS3 (Custom Properties, Flexbox, Grid, Glassmorphism, animations), Vanilla JavaScript (ES6+).
- **Offline / PWA:** Service Worker (`sw.js`) s Cache API (Cache First pro statiku, Network First pro data), `manifest.json`.
- **Data & Storage:** 
  - Suplementy: JSON soubory v `data/` (9 kategorií: health, performance, sleep, fatloss, hormones, nootropics, experimental/peptides, steroids, pct).
  - Uživatelský deník: `localStorage` (`supplez_diary_v2`), přechod na IndexedDB (`SuppleZ_DB_v1`).
- **Hosting & Deployment:** GitHub Pages (`https://sdragonex.github.io/SuppleZ/`). Zero build-step requirement pro prohlížeč; Node.js skripty pro údržbu dat.

## 2. User Preferences & Working Style
- **Jazyk komunikace:** Čeština (přesné odborné termíny, vědecky podložený tón, biohacking).
- **Design Taste:** Cyberpunk glassmorphism, čistý dark mode (`#000000`, `#0a0a0a`), neonové akcenty (`--ui-accent: #00f3ff`, `--neon-green: #00ff41`, `--neon-yellow: #ffea00`, `--neon-red: #ff003c`).
- **Principy:** Maximální rychlost, soukromí (žádný tracking, žádné reklamy), offline-first funkčnost, nulová závislost na těžkých polyfillech.

## 3. Design System & Tokens
- **Typografie:**
  - Display / Nadpisy / Logo: `Rajdhani` (wght 400, 600, 700)
  - Body text: `Roboto` (wght 300, 400, 500)
  - Ikony: Google Material Icons
- **Barevná paleta:**
  - Background: `#000000`
  - Card Background: `#0a0a0a`
  - Accent / Primary UI: `#00f3ff` (cyan)
  - Bezpečnostní indikátory: Green `#00ff41`, Yellow `#ffea00`, Red `#ff003c`

## 4. Key Architectural Decisions Log
| Datum | Rozhodnutí | Důvod / Racionalita |
|---|---|---|
| 2026-10-30 | Oprava poškozených dat v `data/` | `hormones.json` (chybné spojení polí), `nootropics.json` (syntax závorky) a `experimental.json` (prázdný soubor, data byla v `peptides.json`) způsobovaly tichou ztrátu 162 položek. |
| 2026-10-30 | Implementace SEO architektury | Doplnění Open Graph, Twitter Cards, Schema.org (JSON-LD), `robots.txt`, `sitemap.xml` a dynamického deep-linkingu (#item/ID). |
| 2026-10-30 | Přechod na nový systém databáze (IndexedDB + Storage Layer) | Náhrada omezeného `localStorage` (limit 5 MB, blokování vlákna) za IndexedDB s automatickou migrací a Repository abstrakcí. |
| 2026-10-30 | Zavedení `tools/build-database.js` | Automatická validace schématu všech JSON souborů, generování jednotného bundlu a sitemap. |
| 2026-10-30 | Implementace Interaktivního Stack Builderu & Analýzy interakcí (`interactions.js`) | Reálná analýza synergií, absorpčních kompetic a kritických lékových varování bez emoji (čisté Material Icons). |
| 2026-10-30 | Implementace Kalkulačky ředění peptidů (`calculator.js`) | Dynamický výpočet dávek a koncentrace s interaktivní SVG vizualizací inzulínové stříkačky U-100 a U-40. |
| 2026-10-30 | Implementace Cirkadiánního rozvrhu (Denní protokol) | Automatické rozřazení látek ze stacku do 4 denních bloků (nalačno, s tuky, před tréninkem, před spaním). |

## 5. Work State & Roadmap
- [x] Hloubková analýza architektury a odhalení skrytých vad databáze
- [x] Oprava integrity JSON souborů (`hormones.json`, `nootropics.json`, `experimental.json`)
- [x] Kompletní SEO optimalizace (`index.html`, meta, Open Graph, Schema.org)
- [x] Vytvoření `robots.txt` a `sitemap.xml`
- [x] URL deep-linking a dynamická změna titulku stránky pro vyhledávače i uživatele
- [x] Databázová vrstva IndexedDB (`db.js`) s automatickou migrací z `localStorage`
- [x] Validační a bundle skript `tools/build-database.js`
- [x] Interaktivní Stack Builder s kontrolou synergií, kompetic a varování
- [x] Kalkulačka ředění peptidů s interaktivní SVG stříkačkou
- [x] Cirkadiánní rozvrh denního protokolu
- [x] 1-Click akce v detailu suplementu (Přidat do stacku, Zapsat do deníku)
- [ ] Volitelná E2EE cloud synchronizace (Supabase / Cloudflare D1)

## 6. Gotchas & Known Constraints
- Žádné emoji v UI: striktní zákaz emoji ikon (🟢, 🟡, 🔴, 🌅, 💊 atd.) v rozhraní; vždy používat sémantické Material Icons s přesnými neonovými barvami (`--neon-green`, `--neon-yellow`, `--neon-red`, `--ui-accent`).
- GitHub Pages nepodporuje server-side rendering (SSR). Veškeré SEO pro jednotlivé položky je podpořeno statickou sitemapou a hash/param routováním s dynamickým DOM updatem.
- Při úpravách souborů je nutné inkrementovat verzi cache v `sw.js` (nyní `supplez-cache-v4.2`), aby se uživatelům projevily změny.
