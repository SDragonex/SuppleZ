## 🧠 1. O projektu

Cílem SuppleZ je poskytnout **čisté, rychlé a přehledné rozhraní** bez reklam a zbytečného balastu. Uživatel zde najde ověřené informace o dávkování, účincích a rizicích jednotlivých látek, založené na vědeckých zdrojích a komunitních zkušenostech.

Aplikace nevyžaduje internet (po prvním načtení) a ukládá data uživatele (deník) pouze do lokálního úložiště prohlížeče (`localStorage`), což zaručuje **100% soukromí**. Žádná data se neposílají na servery – vše zůstává na vašem zařízení.

### 🎯 Proč SuppleZ?
- **Pro sportovce:** Sledování suplementace během tréninkových cyklů.
- **Pro biohackery:** Experimentování s nootropiky, adaptogeny a dalšími látkami.
- **Pro všechny:** Bezpečné a informované rozhodování o doplňcích stravy.

---

## ⭐️ 2. Klíčové funkce

### 📚 Wiki Část
- **Chytré vyhledávání:** Okamžité filtrování látek podle názvu s podporou diakritiky a synonym.
- **Filtrování a Řazení:** Moderní vysouvací panel (modal) pro filtrování podle kategorií (Zdraví, Síla, Spánek, Nootropika, Adaptogeny atd.) a řazení (Nejlepší hodnocení, A-Z, Z-A, Nejnovější).
- **Detailní karty:** Full-screen zobrazení s hodnocením (1-5 hvězd), dávkováním, seznamem benefitů, varováním a odkazy na zdroje (např. PubMed, Examine.com).
- **Vizuální indikátory:** Barevné rozlišení bezpečnosti/typu (Zelená = Bezpečné pro běžné použití, Žlutá = Vyžaduje opatrnost, Červená = Hardcore nebo experimentální).
- **Oblíbené látky:** Možnost označit látky jako oblíbené pro rychlý přístup.

### 📝 Osobní Deník
- **Tracking:** Zaznamenávání užitých látek, dávek, času užití a pocitů (volný text).
- **Barevné nálady:** Hodnocení efektu (Zelená = Super, Žlutá = Ujde, Červená = Špatné) s možností přidat poznámky.
- **Cyklování:** Možnost přiřadit záznam ke konkrétnímu cyklu (např. "Objem 2024", "Kondice Q1") pro lepší sledování dlouhodobých efektů.
- **Statistiky:** Základní přehledy, jako počet dnů užívání, průměrné hodnocení nebo trendy v účincích.
- **Export záznamů:** Možnost exportovat deník jako CSV pro analýzu v Excelu nebo Google Sheets.

### ⚙️ Nastavení a Data
- **Import / Export:** Zálohování deníku do JSON souboru a přenos na jiné zařízení. Podpora pro synchronizaci přes cloud (volitelné, pomocí vlastního API).
- **Dark Mode UI:** Design inspirovaný cyberpunk/sci-fi estetikou (Glassmorphism, Neon glow) s možností přepínání mezi světlým a tmavým režimem.
- **Jazyková podpora:** Aktuálně čeština, plánována angličtina a další jazyky.
- **Aktualizace databáze:** Automatické stahování nových látek při připojení k internetu.

---

## 🧩 3. Technologie

| Technologie | Popis |
| :--- | :--- |
| **HTML5** | Sémantická struktura aplikace s přístupností (ARIA atributy). |
| **CSS3** | Flexbox, Grid, CSS Variables, Backdrop-filter (efekt skla), animace a responzivní design. |
| **Vanilla JS** | ES6+, Fetch API, History API (ovládání tlačítka zpět), LocalStorage, IndexedDB pro větší databáze. |
| **JSON** | Externí databáze suplementů (`database.json`) s možností rozšíření. |
| **Service Worker** | Strategie "Network First" pro offline funkčnost (PWA), caching a aktualizace. |
| **Manifest.json** | Konfigurace PWA pro instalaci jako nativní app. |

Aplikace je optimalizována pro výkon: Lazy loading obrázků, minimalizace bundle a podpora pro moderní prohlížeče (Chrome, Firefox, Safari, Edge).

---


## 📊 5. Struktura dat

Veškerá data o suplementech jsou uložena v souboru `database.json`. Pro přidání nové látky zkopíruj tento vzor a vlož ho do pole `supplements`:

```json
{
    "id": 1,
    "name": "Název Látky",
    "category": "Kategorie (např. Síla)",
    "rating": Počet hvězdiček (1 - 5),
    "colorType": "Barva (green / yellow / red)", 
    "shortDesc": "Krátký popisek na kartu.",
    "description": "Dlouhý detailní popis...",
    "effects": [
        "Bod 1 - účinek",
        "Bod 2 - účinek"
    ],
    "dosageShort": "dávka (10mg / 5g)",
    "dosageLong": "Detailní instrukce k dávkování...",
    "warning": "Na co si dát pozor."
}
```

- **Pole:**
  - `id`: Unikátní číslo.
  - `name`: Název látky.
  - `category`: Kategorie (např. Síla, Zdraví).
  - `rating`: Hodnocení 1-5.
  - `colorType`: green/yellow/red.
  - `shortDesc`: Krátký popis.
  - `description`: Detailní popis.
  - `effects`: Pole benefitů.
  - `dosageShort/Long`: Dávkování.
  - `warning`: Varování.

Pro rozšíření databáze vytvořte pull request na GitHubu.

---

## 📱 6. Offline režim (PWA)

Aplikace obsahuje `sw.js` (Service Worker) a `manifest.json`.
- **Instalace:** Na mobilu otevři menu prohlížeče a zvol "Přidat na plochu". Aplikace se nainstaluje bez lišty prohlížeče.
- **Aktualizace:** Databáze se stahuje strategií "Network First" – online stáhne nejnovější verzi, offline použije cache.
- **Cache strategie:** Statické soubory (HTML, CSS, JS) se cachují pro okamžité načtení. Databáze se aktualizuje při připojení.
- **Výhody:** Funguje bez internetu, rychlé načítání, podobné nativní app.

---

## 📂 7. Struktura repozitáře

```
SuppleZ/
├─ 📄 index.html          – Hlavní struktura (Views: Wiki, Detail, Diary, Settings)
├─ 📄 style.css           – Design (Dark theme, Animations, Responsive)
├─ 📄 script.js           – Logika (Routing, Rendering, Filters, Storage)
├─ 📄 database.json       – Data suplementů
├─ 📄 sw.js               – Service Worker (Offline logika)
├─ 📄 manifest.json       – PWA Konfigurace (Ikony, Barvy)
├─ 📄 README.md           – Tato dokumentace
├─ 📂 icons/              – Ikony pro PWA (různé velikosti)
├─ 📂 assets/             – Obrázky, fonty (volitelné)
└─ 📂 tests/              – Jednotkové testy (volitelné, pro budoucí vývoj)
```

---

## ❓ 9. Často kladené otázky (FAQ)

- **Je aplikace bezpečná?** Ano, všechny data zůstávají lokálně. Žádné sledování ani reklamy.
- **Jak přidat novou látku?** Uprav `database.json` a vytvoř pull request.
- **Funguje na starších prohlížečích?** Podporuje moderní prohlížeče; pro starší verze může být omezená funkcionalita.
- **Co když ztratím data?** Exportujte deník pravidelně jako JSON.

---

## 🗺️ 10. Roadmap a budoucí funkce

- **Q2 2024:** Přidání anglické lokalizace a rozšířené statistiky v deníku.
- **Q3 2024:** Integrace s API pro synchronizaci dat (volitelné).
- **Q4 2024:** Mobilní app verze (React Native) a pokročilé filtry.
- **Dlouhodobě:** AI doporučení na základě deníku, integrace s fitness trackery.

Nápady? Otevři issue na GitHubu!

---

## 📜 11. Licence

Tento projekt není open-source.

**Autor:** [SDragonex](https://github.com/SDragonex)
> "Built for performance, designed for knowledge." 💊
