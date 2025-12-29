// --- LOGIKA APLIKACE (FETCH & LAZY LOAD VERZE) ---

// 1. GLOBÁLNÍ PROMĚNNÉ
const cardsGrid = document.getElementById("cards-grid");
const searchInput = document.getElementById("searchInput");

// Proměnné pro Lazy Loading (postupné načítání)
let globalData = [];       // Sem se stáhnou všechna data z JSONu
let displayedCount = 0;    // Kolik karet už vidíme
const ITEMS_PER_BATCH = 20; // Kolik karet načíst naráz

// 2. NAČTENÍ DATABÁZE (FETCH) - Toto nahrazuje starou inicializaci
fetch('./database.json')
    .then(response => {
        if (!response.ok) throw new Error("Nelze načíst database.json");
        return response.json();
    })
    .then(data => {
        globalData = data; // Uložíme data do paměti
        loadMoreCards();   // Vykreslíme první dávku
    })
    .catch(error => {
        console.error('Chyba:', error);
        cardsGrid.innerHTML = '<p style="color:red; text-align:center; margin-top:20px">Chyba načítání databáze.<br>Zkontroluj, zda existuje soubor "database.json".</p>';
    });


// 3. NAVIGACE (TABS)
function switchTab(viewId, navElement) {
    document.querySelectorAll(".view").forEach((el) => {
        el.classList.remove("active");
        el.classList.add("hidden");
    });
    document.getElementById(viewId).classList.remove("hidden");
    document.getElementById(viewId).classList.add("active");

    document.querySelectorAll(".nav-item").forEach((el) => el.classList.remove("active"));
    if (navElement) {
        navElement.classList.add("active");
    }
}

// 4. FULL SCREEN DETAIL LOGIKA
function openDetailView(item) {
    let themeColor = "var(--ui-accent)";
    let glowColor = "rgba(0, 243, 255, 0.4)";

    if (item.colorType === "green") { themeColor = "var(--neon-green)"; glowColor = "rgba(0, 255, 65, 0.5)"; }
    if (item.colorType === "yellow") { themeColor = "var(--neon-yellow)"; glowColor = "rgba(255, 234, 0, 0.5)"; }
    if (item.colorType === "red") { themeColor = "var(--neon-red)"; glowColor = "rgba(255, 0, 60, 0.5)"; }

    const titleEl = document.getElementById("detail-main-title");
    titleEl.innerText = item.name;
    titleEl.style.color = themeColor;

    document.getElementById("detail-category-badge").innerText = item.category;

    const ratingEl = document.getElementById("detail-rating-big");
    ratingEl.innerText = item.rating + "/10";
    ratingEl.style.color = themeColor;
    ratingEl.style.borderColor = themeColor;

    document.querySelector(".detail-hero").style.setProperty("--glow-color", glowColor);

    const placeholder = document.getElementById("detail-image-placeholder");
    placeholder.innerText = item.name.substring(0, 2).toUpperCase();
    placeholder.style.borderColor = themeColor;
    placeholder.style.color = themeColor;
    placeholder.style.boxShadow = `0 0 25px ${glowColor}`;

    const typeText = document.getElementById("detail-type-text");
    typeText.innerText = item.colorType.toUpperCase();
    typeText.style.color = themeColor;

    let shortDose = item.dosage ? item.dosage.split(" ")[0] : "N/A";
    document.getElementById("detail-dose-short").innerText = shortDose;

    document.getElementById("detail-full-desc").innerText = item.fullDesc;
    document.getElementById("detail-benefits").innerText = item.fullDesc;
    document.getElementById("detail-dosage-long").innerText = item.dosage;
    document.getElementById("detail-warning-long").innerText = item.warning;

    document.getElementById("view-wiki").classList.remove("active");
    document.getElementById("view-wiki").classList.add("hidden");
    document.getElementById("view-detail").classList.remove("hidden");
    document.getElementById("view-detail").classList.add("active");
    document.body.classList.add("detail-active");
    window.scrollTo(0, 0);
}

function closeDetailView() {
    document.getElementById("view-detail").classList.remove("active");
    document.getElementById("view-detail").classList.add("hidden");
    document.getElementById("view-wiki").classList.remove("hidden");
    document.getElementById("view-wiki").classList.add("active");
    document.body.classList.remove("detail-active");
}

// 5. RENDEROVÁNÍ KARET (LAZY LOAD VERZE)
function renderCards(dataToRender, append = false) {
    if (!append) {
        cardsGrid.innerHTML = ""; // Vymazat jen pokud neappendujeme
    }

    if (!dataToRender) return;

    dataToRender.forEach((item, index) => {
        const card = document.createElement("div");
        card.className = `card ${item.colorType}`;
        // Rychlejší animace pro plynulejší scroll
        card.style.animationDelay = `${index * 0.03}s`;

        card.onclick = () => openDetailView(item);

        let rateColor = "#fff";
        if (item.colorType === "green") rateColor = "var(--neon-green)";
        if (item.colorType === "yellow") rateColor = "var(--neon-yellow)";
        if (item.colorType === "red") rateColor = "var(--neon-red)";

        card.innerHTML = `
            <div class="card-header">
                <span class="card-category">${item.category}</span>
                <div class="card-rating" style="color:${rateColor}; border-color:${rateColor}">
                    ${item.rating}
                </div>
            </div>
            <h3>${item.name}</h3>
            <p class="card-desc">${item.shortDesc}</p>
        `;
        cardsGrid.appendChild(card);
    });
}

// Funkce pro načtení další dávky karet
function loadMoreCards() {
    // Pokud vyhledáváme, lazy loading je vypnutý
    if (searchInput.value.length > 0) return;

    const nextBatch = globalData.slice(displayedCount, displayedCount + ITEMS_PER_BATCH);
    
    if (nextBatch.length > 0) {
        renderCards(nextBatch, true); // true = přidat nakonec
        displayedCount += nextBatch.length;
    }
}

// Infinite Scroll Listener
window.addEventListener('scroll', () => {
    // Funguje jen na Wiki záložce
    if (document.getElementById('view-wiki').classList.contains('hidden')) return;

    // Pokud jsme 100px od spodku stránky, načti další
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100) {
        loadMoreCards();
    }
});

// Vyhledávání (Filtruje nad všemi daty)
searchInput.addEventListener("input", (e) => {
    const term = e.target.value.toLowerCase();
    
    // Reset gridu
    cardsGrid.innerHTML = "";

    if (term === '') {
        // Pokud smazal hledání, resetujeme lazy loading
        displayedCount = 0;
        loadMoreCards();
    } else {
        // Filtrujeme ze všech stažených dat
        const filtered = globalData.filter((i) => i.name.toLowerCase().includes(term));
        renderCards(filtered, false);
    }
});

// 6. DENÍK & CYKLY (Zůstává stejné)
let myDiary = JSON.parse(localStorage.getItem("supplez_diary_v2")) || [];

function addDiaryEntry(moodColor) {
    const nameInput = document.getElementById("diary-name");
    const doseInput = document.getElementById("diary-dose");
    const cycleInput = document.getElementById("diary-cycle");
    const noteInput = document.getElementById("diary-note");

    const name = nameInput.value;
    const dose = doseInput.value;
    const cycle = cycleInput.value || "Obecné";
    const note = noteInput.value;

    if (!name) { alert("Napiš název látky!"); return; }

    const entry = {
        id: Date.now(),
        date: new Date().toLocaleString("cs-CZ"),
        timestamp: Date.now(),
        name, dose, cycle, note, color: moodColor,
    };

    myDiary.unshift(entry);
    saveData();
    renderDiary();

    nameInput.value = "";
    doseInput.value = "";
    noteInput.value = "";
}

function deleteEntry(id) {
    if (confirm("Smazat záznam?")) {
        myDiary = myDiary.filter((e) => e.id !== id);
        saveData();
        renderDiary();
    }
}

function renderDiary() {
    const list = document.getElementById("diary-list");
    const filterVal = document.getElementById("cycle-filter").value;
    updateFilterDropdown();
    list.innerHTML = "";

    const filteredData = filterVal === "all" ? myDiary : myDiary.filter((e) => e.cycle === filterVal);

    if (filteredData.length === 0) {
        list.innerHTML = '<div style="text-align:center; color:#555; margin-top:20px;">Žádné záznamy.</div>';
        return;
    }

    filteredData.forEach((e) => {
        const div = document.createElement("div");
        div.className = `diary-entry ${e.color}`;
        div.innerHTML = `
            <div class="entry-header">
                <div>
                    <span class="entry-name">${e.name}</span>
                    <span class="entry-cycle">${e.cycle}</span>
                </div>
                <div class="entry-meta">${e.dose}</div>
            </div>
            <div class="entry-meta">${e.date}</div>
            ${e.note ? `<div class="entry-note">"${e.note}"</div>` : ""}
            <button class="delete-btn" onclick="deleteEntry(${e.id})">
                <span class="material-icons" style="font-size:1.2rem">delete</span>
            </button>
        `;
        list.appendChild(div);
    });
}

function updateFilterDropdown() {
    const select = document.getElementById("cycle-filter");
    const currentVal = select.value;
    const uniqueCycles = [...new Set(myDiary.map((item) => item.cycle))];
    select.innerHTML = '<option value="all">Zobrazit vše</option>';
    uniqueCycles.forEach((c) => {
        const opt = document.createElement("option");
        opt.value = c;
        opt.innerText = c;
        select.appendChild(opt);
    });
    if (uniqueCycles.includes(currentVal) || currentVal === "all") {
        select.value = currentVal;
    }
}

function saveData() { localStorage.setItem("supplez_diary_v2", JSON.stringify(myDiary)); }

// 7. NASTAVENÍ
function exportData() {
    const dataStr = JSON.stringify(myDiary, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `supplez_zaloha_${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

function importData(inputElement) {
    const file = inputElement.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function (e) {
        try {
            const importedData = JSON.parse(e.target.result);
            if (Array.isArray(importedData)) {
                if (confirm("Tímto přepíšeš aktuální deník. Pokračovat?")) {
                    myDiary = importedData;
                    saveData();
                    renderDiary();
                    alert("Data nahrána!");
                }
            } else { alert("Špatný formát."); }
        } catch (err) { alert("Chyba souboru."); }
    };
    reader.readAsText(file);
}

function clearAllData() {
    if (confirm("OPRAVDU SMAZAT VŠE?")) {
        localStorage.removeItem("supplez_diary_v2");
        myDiary = [];
        renderDiary();
    }
}

// Inicializace deníku
renderDiary();