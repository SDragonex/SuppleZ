# 📘 SuppleZ – Osobní Suplementová Wiki & Deník

**SuppleZ** je moderní, interaktivní **PWA (Progressive Web App)** aplikace určená pro sportovce a biohackery. Slouží jako encyklopedie doplňků stravy a zároveň jako osobní deník pro sledování účinků suplementace.

Projekt je postaven jako čistě klientská aplikace (Vanilla JS), je plně responzivní a díky Service Workeru funguje i **offline** jako nativní mobilní aplikace.

---

## 🚀 Obsah

1. [O projektu](#-1-o-projektu)
2. [Klíčové funkce](#-2-klíčové-funkce)
3. [Technologie](#-3-technologie)
4. [Instalace a spuštění](#-4-instalace-a-spuštění)
5. [Struktura dat](#-5-struktura-dat)
6. [Offline režim (PWA)](#-6-offline-režim-pwa)
7. [Struktura repozitáře](#-7-struktura-repozitáře)

---

## 🧠 1. O projektu

Cílem SuppleZ je poskytnout **čisté, rychlé a přehledné rozhraní** bez reklam a zbytečného balastu. Uživatel zde najde ověřené informace o dávkování, účincích a rizicích jednotlivých látek.

Aplikace nevyžaduje internet (po prvním načtení) a ukládá data uživatele (deník) pouze do lokálního úložiště prohlížeče (`localStorage`), což zaručuje **100% soukromí**.

---

## ⭐️ 2. Klíčové funkce

### 📚 Wiki Část
* **Chytré vyhledávání:** Okamžité filtrování látek podle názvu.
* **Filtrování a Řazení:** Moderní vysouvací panel (modal) pro filtrování podle kategorií (Zdraví, Síla, Spánek...) a řazení (Nejlepší hodnocení, A-Z).
* **Detailní karty:** Full-screen zobrazení s hodnocením (1-5 hvězd), dávkováním, seznamem benefitů a varováním.
* **Vizuální indikátory:** Barevné rozlišení bezpečnosti/typu (Zelená = Safe, Žlutá = Pozor, Červená = Hardcore).

### 📝 Osobní Deník
* **Tracking:** Zaznamenávání užitých látek, dávek a pocitů.
* **Barevné nálady:** Hodnocení efektu (Super / Ujde / Špatné).
* **Cyklování:** Možnost přiřadit záznam ke konkrétnímu cyklu (např. "Objem 2024").

### ⚙️ Nastavení a Data
* **Import / Export:** Možnost zálohovat deník do JSON souboru a přenést ho na jiné zařízení.
* **Dark Mode UI:** Design inspirovaný cyberpunk/sci-fi estetikou (Glassmorphism, Neon glow).

---

## 🧩 3. Technologie

| Technologie | Popis |
| :--- | :--- |
| **HTML5** | Sémantická struktura aplikace. |
| **CSS3** | Flexbox, Grid, CSS Variables, Backdrop-filter (efekt skla). |
| **Vanilla JS** | ES6+, Fetch API, History API (ovládání tlačítka zpět), LocalStorage. |
| **JSON** | Externí databáze suplementů (`database.json`). |
| **Service Worker** | Strategie "Network First" pro offline funkčnost (PWA). |

---

## 🛠️ 4. Instalace a spuštění

⚠️ **Důležité:** Protože aplikace používá `fetch()` pro načítání externí JSON databáze, **nebude fungovat správně, pokud ji otevřeš jen dvojklikem na soubor v počítači** (protokol `file://` blokuje načítání dat z bezpečnostních důvodů).

### 🖥️ Možnost A: GitHub Pages (Doporučeno)
1. Nahraj tento repozitář na GitHub.
2. V nastavení repozitáře (**Settings > Pages**) aktivuj **GitHub Pages** (vyber větev `main` nebo `master`).
3. Aplikace poběží na adrese `https://tvoje-jmeno.github.io/SuppleZ`.

### 💻 Možnost B: Lokální vývoj (VS Code)
1. Otevři složku projektu ve **VS Code**.
2. Nainstaluj rozšíření **Live Server**.
3. Klikni pravým tlačítkem na `index.html` a zvol **"Open with Live Server"**.

---

## 📊 5. Struktura dat

Veškerá data o suplementech jsou uložena v souboru `database.json`. Pro přidání nové látky zkopíruj tento vzor a vlož ho do pole:

```json
{
    "id": 1,
    "name": "Název Látky",
    "category": "Kategorie (např. Síla)",
    "rating": 5,
    "colorType": "green", 
    "shortDesc": "Krátký popisek na kartu.",
    "description": "Dlouhý detailní popis...",
    "effects": [
        "Bod 1 - účinek",
        "Bod 2 - účinek"
    ],
    "dosageShort": "5g",
    "dosageLong": "Detailní instrukce k dávkování...",
    "warning": "Na co si dát pozor."
}
```

📱 6. Offline režim (PWA)
Aplikace obsahuje soubor sw.js (Service Worker) a manifest.json.
 * Instalace: Na mobilu (Android/iOS) otevři menu prohlížeče a zvol "Přidat na plochu" (Add to Home Screen). Aplikace se nainstaluje bez horní lišty prohlížeče.
 * Aktualizace: Databáze látek se stahuje strategií Network First – pokud jsi online, stáhne se nejnovější verze databáze. Pokud jsi offline, použije se verze z paměti.
📂 7. Struktura repozitáře
SuppleZ/
├─ 📄 index.html          – Hlavní struktura (Views: Wiki, Detail, Diary, Settings)
├─ 📄 style.css           – Design (Dark theme, Animations, Responsive)
├─ 📄 script.js           – Veškerá logika (Routing, Rendering, Filters, Storage)
├─ 📄 database.json       – Data suplementů
├─ 📄 sw.js               – Service Worker (Offline logika)
├─ 📄 manifest.json       – PWA Konfigurace (Ikony, Barvy)
├─ 📄 README.md           – Dokumentace
└─ 📂 icons/              – Ikony pro PWA (volitelné)

📜 Licence
Tento projekt je open-source pod licencí Apache-2.0. Můžeš ho volně používat, upravovat a sdílet.
Autor: SDragonex
> "Built for performance, designed for knowledge." 💊
> 
