# 🧠 SuppleZ v4.0

**SuppleZ** je minimalistická progresivní webová aplikace (PWA) zaměřená na **suplementy, nootropika, peptidy a biohacking**. 
Cílem je nabídnout čisté, rychlé a přehledné rozhraní bez reklam, sledování a zbytečných informací.

Aplikace funguje **offline**, nevyžaduje registraci a ukládá veškerá data pouze lokálně do prohlížeče uživatele.

> Built for performance. Designed for knowledge. 🔬

---

## ⭐ Klíčové funkce

### 📚 Wiki – Databáze suplementů
- **9 kategorií**: Zdraví, Výkon, Spánek, Redukce, Hormony, Nootropika, Experimentální, Steroidy, PCT
- **Rozšířené informace**: Mechanismus účinku, poločas, interakce, úroveň vědeckých důkazů, legální status
- **Bezpečnostní indikátory**: 🟢 Zelená (bezpečné), 🟡 Žlutá (opatrnost), 🔴 Červená (vysoké riziko)
- **Chytré vyhledávání** s diakritikou a synonymy
- **Filtrování & řazení** podle kategorií a hodnocení

### 🔬 Stack & Kontrola interakcí
- **Sestavení vlastního stacku**: Rychlé vyhledávání a předvolené biohacking stacky
- **Real-time analýza interakcí**:
  - Synergie: Látky, které se navzájem posilují (např. Kofein + Theanin, D3 + K2 + Hořčík)
  - Časové kompetice: Absorpční kolize (např. Zinek vs Železo, Vápník vs Hořčík)
  - Kritická varování: Nebezpečné lékové interakce (např. 5-HTP + SSRI, Yohimbin + stimulanty)

### ⏱️ Cirkadiánní rozvrh (Denní protokol)
- Automatické rozřazení látek z vašeho stacku do 4 časových bloků:
  - Ráno nalačno (např. Tyrosin, B-komplex, BPC-157)
  - Dopoledne se snídaní s tuky (např. Vitamín D3 + K2, Omega 3)
  - Před tréninkem / Odpolední fokus (např. Citrulin, Kofein, Alfa-GPC)
  - Večer před spaním (např. Magnesium bisglycinát, Apigenin, Glycin)

### 💉 Kalkulačka ředění peptidů (Reconstitution)
- Výpočet koncentrace, objemu dávky a počtu dávek ve vialce (BPC-157, TB-500, GHK-Cu, GLP-1)
- Interaktivní vizuální inzulínová stříkačka (U-100 / U-40) s přesným vyznačením dílků
- Odborný protokol bezpečné manipulace a skladování

### 📝 Osobní deník
- Záznamy užití s dávkou, časem a subjektivním hodnocením
- Cyklování suplementace (např. "Objem 2024")
- 1-Click přidání z detailu suplementu přímo do deníku nebo do stacku
- Export a import zálohy

### ⚙️ Nastavení & PWA
- Dark mode (cyberpunk glassmorphism design)
- Zero-tracking, 100% soukromí bez reklam
- Offline režim s IndexedDB asynchronním úložištěm
- Instalace jako nativní aplikace (Android / iOS / Desktop)

---

## 🧩 Technologie

| Technologie | Popis |
|-------------|-------|
| **HTML5** | Sémantická struktura, Open Graph, Schema.org (JSON-LD), ARIA |
| **CSS3** | Flexbox, Grid, CSS proměnné, animace, glassmorphism |
| **Vanilla JS (ES6+)** | Routing, deep-linking, rendering, lazy loading |
| **IndexedDB & LocalStorage** | Rychlé asynchronní úložiště (`db.js`) s automatickou migrací |
| **JSON Databáze** | Modulární kategorie v `data/` a sjednocený bundle (`supplements.bundle.json`) |
| **Service Worker (v4.1)** | Offline režim, Cache API, Network First strategie |
| **PWA & SEO** | Manifest, robots.txt, sitemap.xml, instalace jako nativní aplikace |

---

## 📊 Struktura databáze (`database.json`)

Každý suplement obsahuje kompletní informace:

```json
{
  "id": 101,
  "name": "Vitamín D3",
  "categoryKey": "health",
  "tags": ["imunita", "kosti", "hormony"],
  "rating": 5,
  "colorType": "green",
  "shortDesc": "Esenciální vitamín pro imunitu a hormonální rovnováhu.",
  "description": "Podrobný popis...",
  "effects": ["posílení imunity", "absorbce vápníku"],
  "dosage": {
    "short": "2000–4000 IU denně",
    "long": "2000–4000 IU denně s jídlem..."
  },
  "warning": "Hyperkalcémie při předávkování...",
  "mechanism": "Váže se na VDR receptor, reguluje transkripci genů...",
  "halfLife": "15–20 dní",
  "interactions": ["antikoagulancia", "kortikosteroidy"],
  "evidenceLevel": "A",
  "naturalSources": ["sluneční expozice", "tučné ryby"],
  "bannedStatus": "legal"
}
```

### Popis polí

| Pole | Typ | Popis |
|------|-----|-------|
| `id` | number | Unikátní ID (viz rozsahy níže) |
| `name` | string | Název látky |
| `categoryKey` | string | Klíč kategorie |
| `tags` | array | Efekty/vlastnosti |
| `rating` | number | 1–5 ⭐ |
| `colorType` | string | `green`/`yellow`/`red` |
| `shortDesc` | string | Krátký popis |
| `description` | string | Detailní popis |
| `effects` | array | Seznam účinků |
| `dosage.short` | string | Stručné dávkování |
| `dosage.long` | string | Detailní dávkování |
| `warning` | string | Varování a rizika |
| `mechanism` | string | Mechanismus účinku |
| `halfLife` | string | Poločas látky |
| `interactions` | array | Interakce s léky/suplementy |
| `evidenceLevel` | string | `A`/`B`/`C` (úroveň důkazů) |
| `naturalSources` | array | Přírodní zdroje |
| `bannedStatus` | string | `legal`/`controlled`/`prescription-only`/`banned-sport` |

### ID rozsahy (kategorie)

| Rozsah | Kategorie | Popis |
|--------|-----------|-------|
| 100–199 | `health` | Základní zdraví, vitamíny, minerály |
| 200–299 | `performance` | Sportovní výkon, pre-workout |
| 300–399 | `sleep` | Spánek, relaxace |
| 400–499 | `fatloss` | Redukce tuku, termogeneze |
| 500–599 | `hormones` | Hormonální optimalizace |
| 600–699 | `nootropics` | Kognice, mozek, focus |
| 700–799 | `experimental` | Peptidy, SARMs, výzkumné látky |
| 800–899 | `steroids` | Anabolické steroidy |
| 900–999 | `pct` | PCT, ochrana zdraví |

---

## 🏷️ Tagy

- `stimulant`, `adaptogen`, `nootropic`
- `pumpa`, `síla`, `vytrvalost`
- `imunita`, `zánět`, `antioxidant`
- `spánek`, `relaxace`, `stres`
- `testosteron`, `estrogen`, `prolaktin`
- `sarm`, `peptid`, `steroid`, `oral`

---

## 📱 Offline režim (PWA)

1. **Instalace**: "Přidat na plochu" v prohlížeči
2. **Strategie**: 
   - Statické soubory (CSS/JS): Cache First
   - Database.json: Network First (aktualizace při připojení)
3. **Záloha**: Export JSON před vymazáním prohlížeče

---

## 📂 Struktura repozitáře

```
SuppleZ/
├─ index.html               # Hlavní UI s kompletním SEO a Schema.org
├─ style.css                # Design (glassmorphism & neonové indikátory)
├─ script.js                # Aplikační logika a hash routing
├─ db.js                    # IndexedDB úložiště a migrační vrstva
├─ sw.js                    # Service Worker (Cache API, v4.1)
├─ manifest.json            # PWA konfigurace
├─ robots.txt               # SEO indexační pravidla
├─ sitemap.xml              # XML mapa stránek pro vyhledávače
├─ data/                    # JSON databáze (9 kategorií + supplements.bundle.json)
└─ tools/                   # Skripty pro validaci a sestavení databáze
```

---

## 🗺️ Roadmap

- [x] Rozšířená databáze s mechanismy a interakcemi
- [x] Offline režim s aktualizací dat
- [ ] Anglická lokalizace
- [ ] Pokročilé statistiky v deníku
- [ ] Volitelná cloud synchronizace (end-to-end encrypted)
- [ ] AI doporučení na základě deníku

---

## 📜 Licence

**Autor:** [Dany Chaker](https://github.com/SDragonex) & [Marek Polák](https://github.com/marekpolak3)

**Upozornění:** Informace v aplikaci mají pouze informativní charakter. Nejedná se o lékařskou radu. Před užíváním jakýchkoli suplementů konzultujte lékaře.
