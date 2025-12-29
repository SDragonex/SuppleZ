// --- LOGIKA APLIKACE ---

const cardsGrid = document.getElementById("cards-grid");
const searchInput = document.getElementById("searchInput");
const categoryContainer = document.getElementById("category-filters");

// Proměnné
let globalData = [];
let displayedCount = 0;
const ITEMS_PER_BATCH = 20;
let activeCategory = "Vše"; // Sleduje vybraný filtr

// 2. NAČTENÍ DATABÁZE
fetch('./database.json')
    .then(res => res.json())
    .then(data => {
        globalData = data;
        generateCategoryFilters(); // Vygenerovat tlačítka filtrů
        loadMoreCards();
    })
    .catch(err => console.error(err));

// --- 3. FILTRY KATEGORIÍ ---
function generateCategoryFilters() {
    // Získáme unikátní kategorie z dat
    const categories = ["Vše", ...new Set(globalData.map(item => item.category))];
    
    categoryContainer.innerHTML = "";
    
    categories.forEach(cat => {
        const btn = document.createElement("button");
        btn.className = "filter-chip";
        if (cat === "Vše") btn.classList.add("active");
        btn.innerText = cat;
        
        btn.onclick = () => {
            // Změna aktivního tlačítka
            document.querySelectorAll(".filter-chip").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            
            activeCategory = cat;
            displayedCount = 0; // Reset lazy loadu
            cardsGrid.innerHTML = ""; // Vyčistit grid
            loadMoreCards(); // Načíst znovu s filtrem
        };
        
        categoryContainer.appendChild(btn);
    });
}

// Upravená funkce pro načítání karet (bere v potaz hledání I kategorii)
function loadMoreCards() {
    const searchTerm = searchInput.value.toLowerCase();
    
    // Filtrujeme data
    let filteredData = globalData.filter(item => {
        const matchesSearch = item.name.toLowerCase().includes(searchTerm);
        const matchesCategory = activeCategory === "Vše" || item.category === activeCategory;
        return matchesSearch && matchesCategory;
    });

    // Vezmeme jen další várku
    const nextBatch = filteredData.slice(displayedCount, displayedCount + ITEMS_PER_BATCH);
    
    if (nextBatch.length > 0) {
        renderCards(nextBatch, true);
        displayedCount += nextBatch.length;
    } else if (displayedCount === 0) {
        cardsGrid.innerHTML = '<div style="text-align:center; color:#666; margin-top:20px">Nic nenalezeno.</div>';
    }
}

// Listener pro vyhledávání
searchInput.addEventListener("input", () => {
    displayedCount = 0;
    cardsGrid.innerHTML = "";
    loadMoreCards();
});

// Listener pro Scroll (Lazy Load)
window.addEventListener('scroll', () => {
    if (document.getElementById('view-wiki').classList.contains('hidden')) return;
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100) {
        loadMoreCards();
    }
});


// --- DETAIL VIEW (Upravený pro hvězdy nahoře) ---
function openDetailView(item) {
    window.history.pushState({ view: 'detail' }, '', '#detail');

    let themeColor = "var(--ui-accent)";
    let glowColor = "rgba(0, 243, 255, 0.4)";

    if (item.colorType === "green") { themeColor = "var(--neon-green)"; glowColor = "rgba(0, 255, 65, 0.6)"; }
    if (item.colorType === "yellow") { themeColor = "var(--neon-yellow)"; glowColor = "rgba(255, 234, 0, 0.6)"; }
    if (item.colorType === "red") { themeColor = "var(--neon-red)"; glowColor = "rgba(255, 0, 60, 0.6)"; }

    // Nadpis
    const titleEl = document.getElementById("detail-main-title");
    titleEl.innerText = item.name;
    titleEl.style.color = themeColor; // Barva nadpisu

    // --- HVĚZDY MÍSTO OBRÁZKU ---
    const starContainer = document.getElementById("detail-stars-hero");
    let r = Math.round(item.rating);
    if (r > 5) r = 5; if (r < 0) r = 0;
    const stars = '★'.repeat(r) + '☆'.repeat(5 - r);
    
    starContainer.innerHTML = stars;
    // Nastavíme barvu textu hvězd a barvu záře (text-shadow)
    starContainer.style.setProperty('--glow-text-color', themeColor);
    starContainer.style.setProperty('--glow-color', glowColor);

    // Glow pozadí Hero sekce
    document.querySelector(".detail-hero").style.setProperty("--glow-color", glowColor);

    // --- TEXTY ---
    document.getElementById("detail-type-text").innerText = item.category;
    document.getElementById("detail-type-text").style.color = themeColor;
    document.documentElement.style.setProperty('--list-bullet-color', themeColor); // Odrážky

    document.getElementById("detail-dose-short").innerText = item.dosageShort || "Viz popis";
    document.getElementById("detail-full-desc").innerText = item.description || item.fullDesc;
    
    // Efekty
    const benefitsContainer = document.getElementById("detail-benefits");
    if (Array.isArray(item.effects)) {
        let htmlList = '<ul class="effects-list">';
        item.effects.forEach(ef => htmlList += `<li style="--ui-accent: ${themeColor}">${ef}</li>`);
        htmlList += '</ul>';
        benefitsContainer.innerHTML = htmlList;
    } else {
        benefitsContainer.innerText = item.effects;
    }

    document.getElementById("detail-dosage-long").innerText = item.dosageLong || item.dosage;
    document.getElementById("detail-warning-long").innerText = item.warning;

    // Zobrazit detail
    document.getElementById("view-wiki").classList.remove("active");
    document.getElementById("view-wiki").classList.add("hidden");
    document.getElementById("view-detail").classList.remove("hidden");
    document.getElementById("view-detail").classList.add("active");
    document.body.classList.add("detail-active");
    window.scrollTo(0, 0);
}

// Funkce pro zavření
function closeDetailView(goBack = true) {
    if (goBack) {
        window.history.back();
        return;
    }

    document.getElementById("view-detail").classList.remove("active");
    document.getElementById("view-detail").classList.add("hidden");
    document.getElementById("view-wiki").classList.remove("hidden");
    document.getElementById("view-wiki").classList.add("active");
    document.body.classList.remove("detail-active");
}

// 6. RENDEROVÁNÍ KARET
function renderCards(dataToRender, append = false) {
    if (!append) cardsGrid.innerHTML = "";
    if (!dataToRender) return;

    dataToRender.forEach((item, index) => {
        const card = document.createElement("div");
        card.className = `card ${item.colorType}`;
        card.style.animationDelay = `${index * 0.03}s`;
        card.onclick = () => openDetailView(item);

        let rateColor = "#fff";
        if (item.colorType === "green") rateColor = "var(--neon-green)";
        if (item.colorType === "yellow") rateColor = "var(--neon-yellow)";
        if (item.colorType === "red") rateColor = "var(--neon-red)";

        // Ošetření ratingu pro kartu (aby to nepsalo undefined)
        const displayRating = item.rating ? item.rating : "?";

        card.innerHTML = `
            <div class="card-header">
                <span class="card-category">${item.category}</span>
                <div class="card-rating" style="color:${rateColor}; border-color:${rateColor}">
                    ${displayRating}/5
                </div>
            </div>
            <h3>${item.name}</h3>
            <p class="card-desc">${item.shortDesc}</p>
        `;
        cardsGrid.appendChild(card);
    });
}

function loadMoreCards() {
    if (searchInput.value.length > 0) return;
    const nextBatch = globalData.slice(displayedCount, displayedCount + ITEMS_PER_BATCH);
    if (nextBatch.length > 0) {
        renderCards(nextBatch, true);
        displayedCount += nextBatch.length;
    }
}

window.addEventListener('scroll', () => {
    if (document.getElementById('view-wiki').classList.contains('hidden')) return;
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100) {
        loadMoreCards();
    }
});

searchInput.addEventListener("input", (e) => {
    const term = e.target.value.toLowerCase();
    cardsGrid.innerHTML = "";
    if (term === '') {
        displayedCount = 0;
        loadMoreCards();
    } else {
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