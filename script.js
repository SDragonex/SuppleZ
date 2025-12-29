// ==========================================
// 1. GLOBÁLNÍ PROMĚNNÉ A NASTAVENÍ
// ==========================================
const cardsGrid = document.getElementById("cards-grid");
const searchInput = document.getElementById("searchInput");
const categoryContainer = document.getElementById("category-filters");

// Lazy Load a Data proměnné
let globalData = [];
let displayedCount = 0;
const ITEMS_PER_BATCH = 20;
let activeCategory = "Vše";

// ==========================================
// 2. NAČTENÍ DATABÁZE (FETCH)
// ==========================================
fetch('./database.json')
    .then(response => {
        if (!response.ok) throw new Error("Nelze načíst database.json");
        return response.json();
    })
    .then(data => {
        globalData = data;
        generateCategoryFilters(); // Vygeneruje tlačítka filtrů
        loadMoreCards();           // Načte první karty
    })
    .catch(error => {
        console.error('Chyba:', error);
        if(cardsGrid) {
            cardsGrid.innerHTML = '<p style="color:red; text-align:center; margin-top:20px">Chyba databáze. Zkontroluj JSON soubor.</p>';
        }
    });

// ==========================================
// 3. NAVIGACE (SPODNÍ LIŠTA)
// ==========================================
function switchTab(viewId, navElement) {
    // 1. Skrýt všechny sekce
    document.querySelectorAll(".view").forEach((el) => {
        el.classList.remove("active");
        el.classList.add("hidden");
    });
    
    // 2. Zobrazit vybranou sekci
    const targetView = document.getElementById(viewId);
    if(targetView) {
        targetView.classList.remove("hidden");
        targetView.classList.add("active");
    }

    // 3. Přebarvit aktivní tlačítko v menu
    document.querySelectorAll(".nav-item").forEach((el) => el.classList.remove("active"));
    if (navElement) {
        navElement.classList.add("active");
    }

    // 4. Scroll nahoru
    window.scrollTo(0, 0);
}

// ==========================================
// 4. LOGIKA DETAILU (Full Screen & Zpět)
// ==========================================

// Posluchač pro tlačítko Zpět na mobilu
window.addEventListener('popstate', (event) => {
    if (document.body.classList.contains('detail-active')) {
        closeDetailView(false); // false = nevolat history.back, protože uživatel už ho zmáčkl
    }
});

function openDetailView(item) {
    // Přidat záznam do historie (aby fungovalo tlačítko Zpět)
    window.history.pushState({ view: 'detail' }, '', '#detail');

    // Nastavení barev
    let themeColor = "var(--ui-accent)";
    let glowColor = "rgba(0, 243, 255, 0.4)";

    if (item.colorType === "green") { themeColor = "var(--neon-green)"; glowColor = "rgba(0, 255, 65, 0.5)"; }
    if (item.colorType === "yellow") { themeColor = "var(--neon-yellow)"; glowColor = "rgba(255, 234, 0, 0.5)"; }
    if (item.colorType === "red") { themeColor = "var(--neon-red)"; glowColor = "rgba(255, 0, 60, 0.5)"; }

    // -- HLAVIČKA --
    const titleEl = document.getElementById("detail-main-title");
    titleEl.innerText = item.name;
    titleEl.style.color = themeColor;

    // -- HVĚZDY --
    const starContainer = document.getElementById("detail-stars-hero");
    let r = Math.round(item.rating);
    if (r > 5) r = 5; if (r < 0) r = 0;
    const stars = '★'.repeat(r) + '☆'.repeat(5 - r);
    
    starContainer.innerHTML = stars;
    starContainer.style.setProperty('--glow-text-color', themeColor);
    starContainer.style.setProperty('--glow-color', glowColor);

    // Glow efekt pozadí
    document.querySelector(".detail-hero").style.setProperty("--glow-color", glowColor);

    // -- STAT BOXY --
    // Kategorie
    const categoryBox = document.getElementById("detail-type-text");
    if(categoryBox) {
        categoryBox.innerText = item.category;
        categoryBox.style.color = themeColor;
        categoryBox.style.fontWeight = "bold";
        categoryBox.style.textTransform = "uppercase";
    }
    
    // Barva odrážek
    document.documentElement.style.setProperty('--list-bullet-color', themeColor);

    // Dávka (krátká)
    const shortDoseEl = document.getElementById("detail-dose-short");
    if(shortDoseEl) shortDoseEl.innerText = item.dosageShort || "Viz popis";

    // -- TEXTY --
    document.getElementById("detail-full-desc").innerText = item.description || item.fullDesc || "Popis chybí.";

    // Efekty (Seznam)
    const benefitsContainer = document.getElementById("detail-benefits");
    if (Array.isArray(item.effects)) {
        let htmlList = '<ul class="effects-list">';
        item.effects.forEach(ef => htmlList += `<li style="--ui-accent: ${themeColor}">${ef}</li>`);
        htmlList += '</ul>';
        benefitsContainer.innerHTML = htmlList;
    } else {
        benefitsContainer.innerText = item.effects || "Žádné specifické efekty.";
    }

    document.getElementById("detail-dosage-long").innerText = item.dosageLong || item.dosage || "Neuvedeno";
    document.getElementById("detail-warning-long").innerText = item.warning || "Žádné";

    // -- PŘEPNUTÍ POHLEDU --
    document.getElementById("view-wiki").classList.remove("active");
    document.getElementById("view-wiki").classList.add("hidden");
    
    document.getElementById("view-detail").classList.remove("hidden");
    document.getElementById("view-detail").classList.add("active");
    
    document.body.classList.add("detail-active");
    window.scrollTo(0, 0);
}

function closeDetailView(goBack = true) {
    // Pokud klikl na tlačítko v aplikaci, zavoláme history.back()
    if (goBack) {
        window.history.back();
        return; 
    }

    // Zavření detailu
    document.getElementById("view-detail").classList.remove("active");
    document.getElementById("view-detail").classList.add("hidden");
    
    // Otevření Wiki
    document.getElementById("view-wiki").classList.remove("hidden");
    document.getElementById("view-wiki").classList.add("active");
    
    document.body.classList.remove("detail-active");
}

// ==========================================
// 5. FILTRY A KARTY
// ==========================================

function generateCategoryFilters() {
    if (!categoryContainer) return;
    
    // Získat unikátní kategorie
    const categories = ["Vše", ...new Set(globalData.map(item => item.category))];
    categoryContainer.innerHTML = "";
    
    categories.forEach(cat => {
        const btn = document.createElement("button");
        btn.className = "filter-chip";
        if (cat === "Vše") btn.classList.add("active");
        btn.innerText = cat;
        
        btn.onclick = () => {
            document.querySelectorAll(".filter-chip").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            
            activeCategory = cat;
            displayedCount = 0;
            cardsGrid.innerHTML = "";
            loadMoreCards();
        };
        
        categoryContainer.appendChild(btn);
    });
}

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

        // Ošetření ratingu
        const r = Math.round(item.rating || 0);

        card.innerHTML = `
            <div class="card-header">
                <span class="card-category">${item.category}</span>
                <div class="card-rating" style="color:${rateColor}; border-color:${rateColor}">
                    ${r}/5
                </div>
            </div>
            <h3>${item.name}</h3>
            <p class="card-desc">${item.shortDesc}</p>
        `;
        cardsGrid.appendChild(card);
    });
}

function loadMoreCards() {
    const term = searchInput ? searchInput.value.toLowerCase() : "";
    
    // Filtrace
    let filteredData = globalData.filter(item => {
        const matchesSearch = item.name.toLowerCase().includes(term);
        const matchesCategory = activeCategory === "Vše" || item.category === activeCategory;
        return matchesSearch && matchesCategory;
    });

    const nextBatch = filteredData.slice(displayedCount, displayedCount + ITEMS_PER_BATCH);
    
    if (nextBatch.length > 0) {
        renderCards(nextBatch, true);
        displayedCount += nextBatch.length;
    } else if (displayedCount === 0) {
        cardsGrid.innerHTML = '<div style="text-align:center; color:#666; margin-top:20px">Nic nenalezeno.</div>';
    }
}

// Event Listenery pro Scroll a Search
window.addEventListener('scroll', () => {
    if (document.getElementById('view-wiki').classList.contains('hidden')) return;
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100) {
        loadMoreCards();
    }
});

if(searchInput) {
    searchInput.addEventListener("input", () => {
        displayedCount = 0;
        cardsGrid.innerHTML = "";
        loadMoreCards();
    });
}

// ==========================================
// 6. DENÍK (LocalStorage)
// ==========================================
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
    const filterSelect = document.getElementById("cycle-filter");
    
    if(!list) return; // Ochrana pokud jsme na jiné stránce

    const filterVal = filterSelect ? filterSelect.value : "all";
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
    if(!select) return;

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

// ==========================================
// 7. NASTAVENÍ (Export/Import/Reset)
// ==========================================
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

// ==========================================
// 8. INICIALIZACE
// ==========================================
// Spustíme render deníku, pokud jsme na stránce
renderDiary();