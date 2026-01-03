# 📘 SuppleZ – Suplementová Wiki

SuppleZ je interaktivní **webová aplikace (supplement wiki)** určená k přehlednému zobrazení informací o výživových doplňcích (supletech), jejich vlastnostech a použití. Projekt je postaven jako klient-side aplikace pomocí **HTML, CSS a JavaScriptu** a může být hostován jako statická stránka (např. GitHub Pages).

---

## 🚀 Obsah dokumentace

1. **O projektu**
2. **Funkce**
3. **Instalace & spuštění**
4. **Struktura repozitáře**
5. **Technologie**
6. **Použití**
7. **Přispívání**
8. **Licence**
9. **Kontakt**

---

## 🧠 1. O projektu

SuppleZ je jednoduchá, čistá a přehledná wiki aplikace zaměřená na **výživové doplňky (suplementy)**. Umožňuje procházet databázi, zobrazovat informace o jednotlivých suplementech a může sloužit jako referenční zdroj pro uživatele, kteří chtějí rychle najít informace o konkrétních doplňcích.

Tento projekt můžeš používat:

* jako **osobní referenční web**
* jako základ pro větší suplementovou encyklopedii
* jako **frontend školního/koníčkového projektu**

---

## ⭐️ 2. Hlavní funkce

✅ Zobrazení seznamu suplementů
✅ Rychlé vyhledávání v databázi
✅ Interaktivní uživatelské rozhraní
✅ Statická webová aplikace vhodná pro publikaci (např. GitHub Pages)
✅ Podpora offline použití (service worker)

*(Detaily funkcí doplň podle reálného chování aplikace – mohu upravit, když mi pošleš ukázku výstupu.)*

---

## 🛠️ 3. Instalace a spuštění

> **Nejsou potřeba žádné složité nástroje ani backend.**
> Aplikace běží čistě z HTML/JS souborů.

### 📌 Lokální spuštění

1. Naklonuj repozitář:

   ```bash
   git clone https://github.com/SDragonex/SuppleZ.git
   ```
2. Otevři soubor `index.html` v prohlížeči

   * dvojklikem
   * nebo pomocí Live Server ve VSCode

---

## 📂 4. Struktura projektu

```
SuppleZ/
├─ 📄 index.html          – hlavní HTML stránka
├─ 📄 style.css           – styly webu
├─ 📄 script.js           – hlavní JavaScript
├─ 📄 data.js             – data suplementů
├─ 📄 database.json       – zdrojová databáze suplementů
├─ 📄 manifest.json       – konfigurace PWA
├─ 📄 sw.js               – service worker pro offline režim
├─ 📄 README.md           – tato dokumentace
├─ 📄 LICENSE             – licence projektu
```

---

## 🧩 5. Použité technologie

| Technologie    | Účel                           |
| -------------- | ------------------------------ |
| HTML           | Struktura stránky              |
| CSS            | Stylování UI                   |
| JavaScript     | Interaktivita, logika aplikace |
| JSON           | Data suplementů                |
| Service Worker | Offline podpora                |

---

## 📖 6. Jak používat

### 🔍 Procházení suplementů

* Po otevření stránky se zobrazí seznam suplementů z `data.js/json`.
* Pomocí vyhledávacího pole můžeš filtrovat suplementy podle názvu.

### 🧠 Detail suplementu

* Kliknutím na suplement získáš detailní informace (např. popis, použití, dávkování).

*(Tato sekce může být upravena podle konkrétní implementace UI.)*

---

## 🤝 7. Přispívání

Chceš přidat nové suplementy, funkce nebo upravit UI? 🛠️
Návod pro přispívání:

1. Forkni tento repozitář
2. Vytvoř novou větev:

   ```bash
   git checkout -b feature/nova-funkce
   ```
3. Udělej své úpravy
4. Pošli pull request

Prosím, přidej krátký popis změn.

---

## 📜 8. Licence

Tento projekt je licencován pod **Apache-2.0 License**.

Můžeš:

* volně používat
* šířit
* upravovat

*(Viz LICENSE soubor v repozitáři)*

---

## 📬 9. Kontakt

Autor: **SDragonex**
Repozitář: [https://github.com/SDragonex/SuppleZ](https://github.com/SDragonex/SuppleZ)

---

## 📌 Plány do budoucna

✨ Doplnit stránku s přehledem kategorií suplementů
✨ Přidat stránku „O projektu“ s filozofií suplementace
✨ Přidat dynamické načítání dat přes API
✨ Umožnit uživatelům přidávat suplementy (formulář + backend)