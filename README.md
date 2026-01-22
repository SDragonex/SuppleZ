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
  "id": "<number – unikátní ID dle kategoriálního rozsahu>",
  "name": "<string – název látky>",
  "categoryKey": "<string – hlavní kategorie (health | performance | sleep | ...)>",
  "tags": [
    "<string – efekt / vlastnost>",
    "<string – efekt / vlastnost>"
  ],
  "rating": "<number 1–5 – celkové hodnocení>",
  "colorType": "<string – green | yellow | red (bezpečnost)>",
  "shortDesc": "<string – krátký popis zobrazený na kartě>",
  "description": "<string – detailní popis látky>",
  "effects": [
    "<string – hlavní účinek>",
    "<string – hlavní účinek>"
  ],
  "dosage": {
    "short": "<string – stručné dávkování>",
    "long": "<string – detailní dávkování a kontext>"
  },
  "warning": "<string – upozornění, rizika, kontraindikace>"
}
```

---

## 🧩 Popis polí

| Pole           | Typ    | Popis                                         |
| -------------- | ------ | --------------------------------------------- |
| `id`           | number | Unikátní ID (viz ID rozsahy níže)             |
| `name`         | string | Název látky                                   |
| `categoryKey`  | string | Hlavní kategorie suplementu                   |
| `tags`         | array  | Tagy / efekty (stimulant, adaptogen, pumpa…)  |
| `rating`       | number | Hodnocení 1–5 ⭐                               |
| `colorType`    | string | `green / yellow / red` (indikace bezpečnosti) |
| `shortDesc`    | string | Krátký popis na kartu                         |
| `description`  | string | Detailní informace                            |
| `effects`      | array  | Seznam hlavních účinků                        |
| `dosage.short` | string | Stručné dávkování                             |
| `dosage.long`  | string | Detailní dávkování                            |
| `warning`      | string | Upozornění a rizika                           |

### ➡️ Pro přidání nové látky vytvoř **pull request**.

---

## 🧠 Logika ID (kategoriální rozsahy)

ID určuje hlavní kategorii suplementu.
Každý nový záznam musí spadat do odpovídajícího rozsahu.

| Rozsah ID | Kategorie (`categoryKey`) | Popis                                  |
| --------- | ------------------------- | -------------------------------------- |
| 100–199   | `health`                  | Základní zdraví, imunita, dlouhověkost |
| 200–299   | `performance`             | Síla, výkon, energie, svalový růst     |
| 300–399   | `sleep`                   | Spánek, regenerace, nervová soustava   |
| 400–499   | `fatloss`                 | Metabolismus, redukce tuku             |
| 500–599   | `hormones`                | Přirozená hormonální optimalizace      |
| 600–699   | `nootropics`              | Mozek, paměť, focus, produktivita      |
| 700–799   | `experimental`            | SARMs, experimentální látky            |
| 800–899   | `steroids`                | Anabolické steroidy (vysoké riziko)    |
| 900–999   | `pct`                     | PCT, ochrana zdraví                    |

---

## 🏷️ Tagy (detailní filtrování)

Tagy slouží k popisu **konkrétních efektů** a nahrazují původní jemné kategorie.

Příklady tagů:

* `stimulant`
* `pumpa`
* `adaptogen`
* `imunita`
* `protein`
* `focus`
* `regenerace`
* `pre-workout`
* `post-workout`
* `beginner-friendly`

> 🔎 Jeden suplement může mít **více tagů**, ale **pouze jednu hlavní kategorii**.

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

**Autor:** [SDragonex](https://github.com/SDragonex) & [MarekPolak3](https://github.com/marekpolak3)

---
