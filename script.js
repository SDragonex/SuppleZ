const cardsGrid = document.getElementById("cards-grid");
const searchInput = document.getElementById("searchInput");
const filterModal = document.getElementById("filter-modal");
const modalCategories = document.getElementById("modal-categories");
const activeFilterBar = document.getElementById("active-filters-bar");
const activeFilterLabel = document.getElementById("active-filter-label");

let globalData = [];
let displayedCount = 0;
const ITEMS_PER_BATCH = 20;
let currentCategory = "Vše";
let currentSort = "rating";

const categoryLabels = {
    "health": "Zdraví",
    "performance": "Výkon", 
    "sleep": "Spánek",
    "fatloss": "Redukce",
    "hormones": "Hormony",
    "nootropics": "Nootropika",
    "experimental": "Experimentální",
    "steroids": "Steroidy",
    "pct": "PCT & Ochrana"
};

const DATA_FILES = [
    './data/health.json',
    './data/performance.json',
    './data/sleep.json',
    './data/fatloss.json',
    './data/hormones.json',
    './data/nootropics.json',
    './data/experimental.json',
    './data/steroids.json',
    './data/pct.json'
];

Promise.all(DATA_FILES.map(url => 
    fetch(url).then(res => res.json()).catch(() => [])
))
.then(results => {
    globalData = results.flat();
    initFilters();
    loadMoreCards();
})
.catch(error => {
    console.error('Chyba:', error);
    if(cardsGrid) {
        cardsGrid.innerHTML = '<p style="color:red; text-align:center; margin-top:20px">Chyba databáze.</p>';
    }
});

function switchTab(viewId, navElement) {
    document.querySelectorAll(".view").forEach((el) => {
        el.classList.remove("active");
        el.classList.add("hidden");
    });
    
    const targetView = document.getElementById(viewId);
    if(targetView) {
        targetView.classList.remove("hidden");
        targetView.classList.add("active");
    }

    document.querySelectorAll(".nav-item").forEach((el) => el.classList.remove("active"));
    if (navElement) {
        navElement.classList.add("active");
    }
    window.scrollTo(0, 0);
}

window.addEventListener('popstate', (event) => {
    if (document.body.classList.contains('detail-active')) {
        closeDetailView(false);
    }
});

function openDetailView(item) {
    window.history.pushState({ view: 'detail' }, '', '#detail');

    let themeColor = "var(--ui-accent)";
    let glowColor = "rgba(0, 243, 255, 0.4)";

    if (item.colorType === "green") { themeColor = "var(--neon-green)"; glowColor = "rgba(0, 255, 65, 0.5)"; }
    if (item.colorType === "yellow") { themeColor = "var(--neon-yellow)"; glowColor = "rgba(255, 234, 0, 0.5)"; }
    if (item.colorType === "red") { themeColor = "var(--neon-red)"; glowColor = "rgba(255, 0, 60, 0.5)"; }

    const titleEl = document.getElementById("detail-main-title");
    titleEl.innerText = item.name;
    titleEl.style.color = themeColor;

    const starContainer = document.getElementById("detail-stars-hero");
    let r = Math.round(item.rating);
    if (r > 5) r = 5; if (r < 0) r = 0;
    const stars = '★'.repeat(r) + '☆'.repeat(5 - r);
    
    starContainer.innerHTML = stars;
    starContainer.style.setProperty('--glow-text-color', themeColor);
    starContainer.style.setProperty('--glow-color', glowColor);
    document.querySelector(".detail-hero").style.setProperty("--glow-color", glowColor);

    const categoryBox = document.getElementById("detail-type-text");
    if(categoryBox) {
        const catKey = item.categoryKey || item.category || "unknown";
        categoryBox.innerText = categoryLabels[catKey] || catKey;
        categoryBox.style.color = themeColor;
        categoryBox.style.fontWeight = "bold";
        categoryBox.style.textTransform = "uppercase";
    }
    document.documentElement.style.setProperty('--list-bullet-color', themeColor);

    const shortDoseEl = document.getElementById("detail-dose-short");
    if(shortDoseEl) shortDoseEl.innerText = item.dosage?.short || "Viz popis";

    document.getElementById("detail-full-desc").innerText = item.description || item.fullDesc || "Popis chybí.";

    const benefitsContainer = document.getElementById("detail-benefits");
    if (Array.isArray(item.effects)) {
        let htmlList = '<ul class="effects-list">';
        item.effects.forEach(ef => htmlList += `<li style="--ui-accent: ${themeColor}">${ef}</li>`);
        htmlList += '</ul>';
        benefitsContainer.innerHTML = htmlList;
    } else {
        benefitsContainer.innerText = item.effects || "Žádné specifické efekty.";
    }

    const dosageLongEl = document.getElementById("detail-dosage-long");
    if (item.dosage?.long) {
        dosageLongEl.innerText = item.dosage.long;
    } else if (item.dosageLong) {
        dosageLongEl.innerText = item.dosageLong;
    } else if (item.dosage) {
        dosageLongEl.innerText = item.dosage;
    } else {
        dosageLongEl.innerText = "Neuvedeno";
    }

    document.getElementById("detail-warning-long").innerText = item.warning || "Žádné specifické varování.";

    const mechanismEl = document.getElementById("detail-mechanism");
    if(mechanismEl) {
        mechanismEl.innerText = item.mechanism || "Mechanismus účinku není detailně popsán.";
        mechanismEl.style.color = themeColor;
    }

    const halflifeEl = document.getElementById("detail-halflife");
    if(halflifeEl) {
        halflifeEl.innerText = item.halfLife || "N/A";
        halflifeEl.style.color = themeColor;
    }

    const evidenceEl = document.getElementById("detail-evidence");
    if(evidenceEl) {
        const evidence = item.evidenceLevel || "C";
        let evidenceText = evidence;
        if(evidence === "A") evidenceText = "A - Silné důkazy";
        if(evidence === "B") evidenceText = "B - Střední důkazy";
        if(evidence === "C") evidenceText = "C - Omezené důkazy";
        evidenceEl.innerText = evidenceText;
        evidenceEl.style.color = themeColor;
    }

    const legalEl = document.getElementById("detail-legal");
    if(legalEl) {
        const status = item.bannedStatus || "unknown";
        const statusMap = {
            "legal": "Legální",
            "controlled": "Kontrolované",
            "prescription-only": "Na předpis",
            "banned-sport": "Zakázáno ve sportu",
            "banned": "Nelegální"
        };
        legalEl.innerText = statusMap[status] || status;
        legalEl.style.color = themeColor;
    }

    const interactionsSection = document.getElementById("interactions-section");
    const interactionsList = document.getElementById("detail-interactions");
    if(interactionsSection && interactionsList) {
        if(Array.isArray(item.interactions) && item.interactions.length > 0) {
            interactionsSection.style.display = "block";
            let htmlList = '';
            item.interactions.forEach(inter => htmlList += `<li style="--ui-accent: ${themeColor}">${inter}</li>`);
            interactionsList.innerHTML = htmlList;
        } else {
            interactionsSection.style.display = "none";
        }
    }

    const sourcesSection = document.getElementById("sources-section");
    const sourcesList = document.getElementById("detail-sources");
    if(sourcesSection && sourcesList) {
        if(Array.isArray(item.naturalSources) && item.naturalSources.length > 0) {
            sourcesSection.style.display = "block";
            let htmlList = '';
            item.naturalSources.forEach(src => htmlList += `<li style="--ui-accent: ${themeColor}">${src}</li>`);
            sourcesList.innerHTML = htmlList;
        } else {
            sourcesSection.style.display = "none";
        }
    }

    document.getElementById("view-wiki").classList.remove("active");
    document.getElementById("view-wiki").classList.add("hidden");
    document.getElementById("view-detail").classList.remove("hidden");
    document.getElementById("view-detail").classList.add("active");
    document.body.classList.add("detail-active");
    window.scrollTo(0, 0);
}

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

function initFilters() {
    const openBtn = document.getElementById("open-filter-btn");
    if(openBtn) {
        openBtn.onclick = () => {
            filterModal.classList.remove("hidden");
            setTimeout(() => filterModal.classList.add("open"), 10);
        };
    }

    const closeModal = () => {
        filterModal.classList.remove("open");
        setTimeout(() => filterModal.classList.add("hidden"), 300);
    };
    const closeBtn = document.getElementById("close-filter-btn");
    const applyBtn = document.getElementById("apply-filters-btn");
    
    if(closeBtn) closeBtn.onclick = closeModal;
    if(applyBtn) applyBtn.onclick = closeModal;

    if(modalCategories) {
        const categoriesKeys = [...new Set(globalData.map(item => item.categoryKey || item.category))].filter(Boolean);
        const orderedCategories = ["health", "performance", "sleep", "fatloss", "hormones", "nootropics", "experimental", "steroids", "pct"];
        const sortedKeys = categoriesKeys.sort((a, b) => {
            const idxA = orderedCategories.indexOf(a);
            const idxB = orderedCategories.indexOf(b);
            if(idxA === -1) return 1;
            if(idxB === -1) return -1;
            return idxA - idxB;
        });
        
        modalCategories.innerHTML = "";
        
        const allBtn = document.createElement("button");
        allBtn.className = "cat-select-btn active";
        allBtn.innerText = "Vše";
        allBtn.onclick = () => selectCategory("Vše", allBtn);
        modalCategories.appendChild(allBtn);
        
        sortedKeys.forEach(catKey => {
            const btn = document.createElement("button");
            btn.className = "cat-select-btn";
            btn.innerText = categoryLabels[catKey] || catKey;
            btn.dataset.key = catKey;
            
            btn.onclick = () => selectCategory(catKey, btn);
            modalCategories.appendChild(btn);
        });
    }
}

function selectCategory(catKey, btnElement) {
    document.querySelectorAll(".cat-select-btn").forEach(b => b.classList.remove("active"));
    btnElement.classList.add("active");
    
    currentCategory = catKey;
    updateActiveFilterUI();
    
    displayedCount = 0;
    cardsGrid.innerHTML = "";
    loadMoreCards();
    
    const filterModal = document.getElementById("filter-modal");
    if(filterModal) {
        filterModal.classList.remove("open");
        setTimeout(() => filterModal.classList.add("hidden"), 300);
    }
}

function setSort(type) {
    currentSort = type;
    document.querySelectorAll(".sort-btn").forEach(b => b.classList.remove("active"));
    
    const btns = document.querySelectorAll(".sort-btn");
    if(btns.length > 0) {
        if(type === 'rating') btns[0].classList.add("active");
        else if(btns[1]) btns[1].classList.add("active");
    }

    displayedCount = 0;
    cardsGrid.innerHTML = "";
    loadMoreCards();
}

function updateActiveFilterUI() {
    if(!activeFilterBar) return;
    
    if (currentCategory === "Vše") {
        activeFilterBar.classList.add("hidden");
    } else {
        activeFilterBar.classList.remove("hidden");
        const label = categoryLabels[currentCategory] || currentCategory;
        if(activeFilterLabel) activeFilterLabel.innerText = label;
    }
}

function resetFilters() {
    currentCategory = "Vše";
    updateActiveFilterUI();
    
    document.querySelectorAll(".cat-select-btn").forEach(b => {
        b.classList.remove("active");
        if(b.innerText === "Vše") b.classList.add("active");
    });

    displayedCount = 0;
    cardsGrid.innerHTML = "";
    loadMoreCards();
}

function loadMoreCards() {
    const term = searchInput ? searchInput.value.toLowerCase() : "";
    
    let filteredData = globalData.filter(item => {
        const matchesSearch = item.name.toLowerCase().includes(term);
        const itemCat = item.categoryKey || item.category;
        const matchesCategory = currentCategory === "Vše" || itemCat === currentCategory;
        return matchesSearch && matchesCategory;
    });

    if (currentSort === 'rating') {
        filteredData.sort((a, b) => b.rating - a.rating);
    } else if (currentSort === 'az') {
        filteredData.sort((a, b) => a.name.localeCompare(b.name));
    }

    const nextBatch = filteredData.slice(displayedCount, displayedCount + ITEMS_PER_BATCH);
    
    if (nextBatch.length > 0) {
        renderCards(nextBatch, true);
        displayedCount += nextBatch.length;
    } else if (displayedCount === 0) {
        if(cardsGrid) cardsGrid.innerHTML = '<div style="text-align:center; color:#666; margin-top:20px">Nic nenalezeno.</div>';
    }
}

function renderCards(dataToRender, append = false) {
    if (!cardsGrid) return;
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

        const r = Math.round(item.rating || 0);
        const catLabel = categoryLabels[item.categoryKey || item.category] || (item.categoryKey || item.category);

        card.innerHTML = `
            <div class="card-header">
                <span class="card-category">${catLabel}</span>
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

window.addEventListener('scroll', () => {
    if (document.getElementById('view-wiki') && document.getElementById('view-wiki').classList.contains('hidden')) return;
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
    
    if(!list) return;

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

renderDiary();
