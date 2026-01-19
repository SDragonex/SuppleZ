# 🧠 SuppleZ

**SuppleZ** je minimalistická webová aplikace (PWA) zaměřená na **suplementy, nootropika a biohacking**.
Cílem projektu je nabídnout **čisté, rychlé a přehledné rozhraní** bez reklam, sledování a zbytečných informací.

Aplikace funguje **offline**, nevyžaduje registraci a **ukládá veškerá data pouze lokálně** do prohlížeče uživatele.
Žádná data nejsou odesílána na servery – **100% soukromí**.

> Built for performance. Designed for knowledge. 💊

---

## 🎯 Proč SuppleZ?

* **Sportovci** – sledování suplementace během tréninkových cyklů
* **Biohackeři** – experimentování s nootropiky, adaptogeny a dalšími látkami
* **Běžní uživatelé** – bezpečné a informované rozhodování o doplňcích stravy

---

## ⭐ Klíčové funkce

### 📚 Wiki – Databáze suplementů

* 🔍 **Chytré vyhledávání** – okamžité filtrování podle názvu (včetně diakritiky a synonym)
* 🧩 **Filtrování & řazení** – kategorie (Zdraví, Síla, Spánek, Nootropika, Adaptogeny…) + řazení (A–Z, Z–A, hodnocení, nejnovější)
* 📄 **Detail látky (fullscreen)**:

  * hodnocení (1–5 ⭐)
  * dávkování (stručné i detailní)
  * účinky (benefity)
  * varování a rizika
* 🎨 **Vizuální indikátory bezpečnosti**:

  * 🟢 zelená – běžně bezpečné
  * 🟡 žlutá – vyžaduje opatrnost
  * 🔴 červená – hardcore / experimentální
* ⭐ **Oblíbené látky** – rychlý přístup k často používaným suplementům

---

### 📝 Osobní deník

* 📅 **Záznam užití** – látka, dávka, čas, subjektivní pocity
* 🎭 **Barevné hodnocení efektu**:

  * 🟢 super
  * 🟡 ujde
  * 🔴 špatné
* 🔁 **Cyklování** – přiřazení záznamů ke konkrétním cyklům (např. „Objem 2024“)
* 📊 **Statistiky**:

  * počet dnů užívání
  * průměrné hodnocení
  * základní trendy účinků
* 📤 **Export dat** – CSV pro Excel / Google Sheets

---

### ⚙️ Nastavení & data

* 🔐 **Import / Export** – záloha deníku do JSON
* 🌙 **Dark Mode** – cyberpunk / sci-fi styl (glassmorphism, neon glow)
* 🌍 **Vícejazyčnost** – aktuálně čeština, plánována angličtina
* 🔄 **Aktualizace databáze** – nové látky se stáhnou při připojení k internetu

---

## 🧩 Technologie

| Technologie           | Popis                                             |
| --------------------- | ------------------------------------------------- |
| **HTML5**             | Sémantická struktura, přístupnost (ARIA)          |
| **CSS3**              | Flexbox, Grid, CSS proměnné, animace, glass efekt |
| **Vanilla JS (ES6+)** | Routing, rendering, filtry, LocalStorage          |
| **JSON**              | Databáze suplementů                               |
| **Service Worker**    | Offline režim, cache strategie                    |
| **PWA**               | Instalace jako aplikace (Android / Desktop)       |

Optimalizováno pro výkon:

* lazy loading
* minimální JS
* podpora moderních prohlížečů (Chrome, Firefox, Safari, Edge)

---

## 📊 Struktura dat (`database.json`)

Každý suplement je uložen jako objekt v poli `supplements`.

```json
{
  "id": 1,
  "name": "Název látky",
  "category": "Síla",
  "rating": 4,
  "colorType": "green",
  "shortDesc": "Krátký popisek na kartu.",
  "description": "Detailní popis látky.",
  "effects": [
    "Zlepšení výkonu",
    "Rychlejší regenerace"
  ],
  "dosageShort": "5 g",
  "dosageLong": "5 g denně před tréninkem.",
  "warning": "Nevhodné pro děti a těhotné."
}
```

### Pole:

* `id` – unikátní ID
* `name` – název látky
* `category` – typ (Síla, Zdraví…)
* `rating` – 1 až 5
* `colorType` – `green / yellow / red`
* `shortDesc` – krátký popis
* `description` – detailní informace
* `effects` – seznam účinků
* `dosageShort / dosageLong` – dávkování
* `warning` – upozornění

### ➡️ Pro přidání nové látky vytvoř **pull request**.

---

## 🧠 Logika ID (kategoriální rozsahy)

| Rozsah ID | Kategorie               | Popis |
|----------|--------------------------|-------|
| 100–199  | Zdraví                   | Dlouhodobá podpora zdraví, imunity, srdce a mozku |
| 200–299  | Síla & Výkon             | Výkon, síla, energie, svalový růst |
| 300–399  | Spánek & Regenerace      | Spánek, relaxace, nervová soustava, regenerace |
| 400–499  | Spalování tuku           | Metabolismus, redukce tuku |
| 500–599  | Hormony (natural)        | Přirozená hormonální optimalizace |
| 600–699  | Nootropika               | Mozek, paměť, focus, produktivita |
| 700–799  | SARMs                    | Experimentální výkonnostní látky |
| 800–899  | Steroidy                 | Anabolické steroidy, vysoké riziko |
| 900–999  | PCT / Ochrana            | Post-cycle terapie, ochrana zdraví |

---

## 📱 Offline režim (PWA)

* 📥 **Instalace** – „Přidat na plochu“ v prohlížeči
* 🌐 **Network First strategie** – online stáhne nová data, offline použije cache
* ⚡ **Rychlé načítání** – statické soubory uložené v cache
* 📦 **Plně funkční bez internetu**

---

## 📂 Struktura repozitáře

```
SuppleZ/
├─ index.html        # Hlavní UI (Wiki, Detail, Deník, Nastavení)
├─ style.css         # Design a animace
├─ script.js         # Logika aplikace
├─ database.json     # Databáze suplementů
├─ sw.js             # Service Worker
├─ manifest.json     # PWA konfigurace
├─ assets/           # Obrázky / fonty
└─ README.md
```

---

## ❓ FAQ

**Je aplikace bezpečná?**
Ano. Všechna data zůstávají lokálně, bez sledování a reklam.

**Mohu data ztratit?**
Ano, při vymazání úložiště prohlížeče – doporučeno pravidelně exportovat JSON.

**Je projekt open-source?**
Ne.

---

## 🗺️ Roadmap

* 🌍 Anglická lokalizace
* 📊 Pokročilé statistiky
* ☁️ Volitelná cloud synchronizace
* 🤖 AI doporučení na základě deníku
* 📱 Mobilní app

---

## 📜 Licence

Tento projekt **není open-source**.
Veškerá práva vyhrazena.

**Autor:** [SDragonex](https://github.com/SDragonex)

---
