# 📘 SuppleZ – Osobní Suplementová Wiki & Deník

SuppleZ je moderní, interaktivní **PWA (Progressive Web App)** aplikace určená pro sportovce a biohackery. Slouží jako encyklopedie doplňků stravy a zároveň jako osobní deník pro sledování účinků suplementace.

Projekt je postaven jako čistě klientská aplikace (Vanilla JS), je plně responzivní a díky Service Workeru funguje i **offline** jako nativní mobilní aplikace.


---

## 🚀 Obsah dokumentace

1. **O projektu**
2. **Klíčové funkce**
3. **Technologie**
4. **Instalace a spuštění**
5. **Struktura dat (Jak přidat látky)**
6. **Offline režim (PWA)**
7. **Správa dat (Deník)**
8. **Struktura repozitáře**
9. **Licence**

---

## 🧠 1. O projektu

Cílem SuppleZ je poskytnout **čisté, rychlé a přehledné rozhraní** bez reklam a zbytečného balastu. Uživatel zde najde ověřené informace o dávkování, účincích a rizicích jednotlivých látek.

Aplikace nevyžaduje internet (po prvním načtení) a ukládá data uživatele (deník) pouze do lokálního úložiště prohlížeče, což zaručuje **100% soukromí**.

---

## ⭐️ 2. Klíčové funkce

### 📚 Wiki Část
* **Chytré vyhledávání:** Okamžité filtrování látek podle názvu.
* **Filtrování a Řazení:** Moderní "Bottom Sheet" panel pro filtrování podle kategorií (Zdraví, Síla, Spánek...) a řazení (Nejlepší hodnocení, A-Z).
* **Detailní karty:** Full-screen zobrazení s hodnocením (1-5 hvězd), dávkováním, seznamem benefitů a varováním.
* **Vizuální indikátory:** Barevné rozlišení bezpečnosti/typu (Zelená = Safe, Žlutá = Pozor, Červená = Hardcore).

### 📝 Osobní Deník
* **Tracking:** Zaznamenávání užitých látek, dávek a pocitů.
* **Barevné nálady:** Hodnocení efektu (Super / Ujde / Špatné).
* **Cyklování:** Možnost přiřadit záznam ke konkrétnímu cyklu (např. "Objem 2024").

### ⚙️ Nastavení a Data
* **Import / Export:** Možnost zálohovat deník do JSON souboru a přenést ho na jiné zařízení.
* **Dark Mode UI:** Design inspirovaný cyberpunk/sci-fi estetikou (Glassmorphism).

---

## 🧩 3. Technologie

| Technologie | Popis |
| :--- | :--- |
| **HTML5** | Sémantická struktura |
| **CSS3** | Flexbox, Grid, CSS Variables, Backdrop-filter |
| **Vanilla JS** | ES6+, Fetch API, History API, LocalStorage |
| **JSON** | Externí databáze suplementů |
| **Service Worker** | Cache strategie (Network First) pro offline běh |

---

## 🛠️ 4. Instalace a spuštění

Protože aplikace používá `fetch()` pro načítání JSON databáze, **nebude fungovat správně, pokud ji otevřeš jen dvojklikem na soubor** (protokol `file://` blokuje externí zdroje).

### 🖥️ Možnost A: GitHub Pages (Doporučeno)
1. Nahraj repozitář na GitHub.
2. V nastavení repozitáře aktivuj **GitHub Pages**.
3. Aplikace poběží na adrese `https://tvoje-jmeno.github.io/SuppleZ`.

### 💻 Možnost B: Lokální vývoj (VS Code)
1. Naklonuj repozitář:
   ```bash
   git clone [https://github.com/SDragonex/SuppleZ.git](https://github.com/SDragonex/SuppleZ.git)

 * Nainstaluj rozšíření Live Server do VS Code.
 * Klikni pravým na index.html a zvol "Open with Live Server".
📊 5. Struktura dat (Jak přidat látky)
Veškerá data o suplementech jsou v souboru database.json. Pro přidání nové látky zkopíruj tento vzor a vlož ho do pole:
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

Poznámka: colorType může být green, yellow nebo red.
📱 6. Offline režim (PWA)
Aplikace obsahuje soubor sw.js (Service Worker) a manifest.json.
 * Instalace: Na mobilu (Android/iOS) můžeš v prohlížeči zvolit "Přidat na plochu". Aplikace se nainstaluje jako nativní appka.
 * Aktualizace: Databáze látek se stahuje strategií Network First – pokud jsi online, stáhne se nejnovější verze. Pokud jsi offline, použije se verze z paměti.
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

📜 8. Licence
Tento projekt je open-source pod licencí Apache-2.0.
Můžeš ho volně používat, upravovat a sdílet.
📬 Kontakt
Dev: SDragonex
Web: https://sdragonex.github.io/SuppleZ/
> "Built for performance, designed for knowledge." 💊
> 
