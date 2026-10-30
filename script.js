const cardsGrid = document.getElementById("cards-grid");
const searchInput = document.getElementById("searchInput");
const filterModal = document.getElementById("filter-modal");
const modalCategories = document.getElementById("modal-categories");
const activeFilterBar = document.getElementById("active-filters-bar");
const activeFilterLabel = document.getElementById("active-filter-label");

let globalData = [];
let displayedCount = 0;
const ITEMS_PER_BATCH = 36;
let currentCategory = "Vše";
let currentSort = "rating";

const DEFAULT_PAGE_TITLE = "SuppleZ | Wiki & Databáze Suplementů, Nootropik a Peptidů";
const DEFAULT_PAGE_DESC = "Kompletní a nezávislá encyklopedie suplementů, nootropik, peptidů a biohackingu. Vědecky podložené mechanismy účinku, poločas rozpadu, dávkování, interakce látek a osobní offline deník.";

const categoryLabels = {
    "health": "Zdraví",
    "performance": "Výkon", 
    "sleep": "Spánek",
    "fatloss": "Redukce",
    "hormones": "Hormony",
    "nootropics": "Nootropika",
    "experimental": "Peptidy",
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

function slugify(text) {
    return (text || "")
        .toString()
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
}

/**
 * Inicializace a načtení databáze suplementů
 * Preferuje IndexedDB cache / unified bundle, s fallbackem na jednotlivé JSON soubory.
 */
async function initDatabaseAndLoad() {
    // 1. Nejprve zkusit okamžitý start z IndexedDB cache pro bleskové načtení
    if (window.SuppleZ_DB) {
        try {
            await window.SuppleZ_DB.init();
            const cachedItems = await window.SuppleZ_DB.getAllSupplements();
            if (cachedItems && cachedItems.length > 0) {
                globalData = cachedItems;
                renderCategoryPills();
                initFilters();
                displayedCount = 0;
                if (cardsGrid) cardsGrid.innerHTML = "";
                loadMoreCards();
                handleUrlRouting();
            }
        } catch (dbErr) {
            console.warn('[Data] Selhal start IndexedDB cache:', dbErr);
        }
    }

    // 2. Vždy načíst čerstvá data ze sjednoceného bundlu s cache-bustingem
    try {
        let loadedData = null;
        try {
            const cacheBuster = `?v=${Date.now()}`;
            const bundleRes = await fetch(`./data/supplements.bundle.json${cacheBuster}`, { cache: 'no-cache' });
            if (bundleRes.ok) {
                const bundle = await bundleRes.json();
                if (Array.isArray(bundle) && bundle.length > 0) {
                    loadedData = bundle;
                }
            }
        } catch (e) {
            console.log('[Data] Sjednocený bundle nedostupný, použijí se jednotlivé soubory.');
        }

        if (!loadedData) {
            const cacheBuster = `?v=${Date.now()}`;
            const results = await Promise.all(DATA_FILES.map(url => 
                fetch(`${url}${cacheBuster}`, { cache: 'no-cache' }).then(res => res.json()).catch(err => {
                    console.error('Chyba čtení ' + url, err);
                    return [];
                })
            ));
            loadedData = results.flat();
        }

        if (Array.isArray(loadedData) && loadedData.length > 0) {
            globalData = loadedData;

            // Uložit / synchronizovat do IndexedDB pro okamžitý offline přístup
            if (window.SuppleZ_DB) {
                window.SuppleZ_DB.syncSupplements(globalData);
            }

            renderCategoryPills();
            initFilters();
            displayedCount = 0;
            if (cardsGrid) cardsGrid.innerHTML = "";
            loadMoreCards();
            handleUrlRouting();
        }
    } catch (error) {
        console.error('Kritická chyba načítání databáze:', error);
        if (cardsGrid && (!globalData || globalData.length === 0)) {
            cardsGrid.innerHTML = '<p style="color:var(--neon-red); text-align:center; margin-top:20px">Chyba databáze při načítání.</p>';
        }
    }
}

// Spuštění načítání databáze
initDatabaseAndLoad();

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
    } else {
        handleUrlRouting();
    }
});

window.addEventListener('hashchange', () => {
    handleUrlRouting();
});

function handleUrlRouting() {
    const hash = window.location.hash;
    if (hash.startsWith('#item=')) {
        const rawId = hash.replace('#item=', '').split('-')[0];
        const numId = Number(rawId);
        if (!isNaN(numId) && globalData.length > 0) {
            const found = globalData.find(item => item.id === numId);
            if (found) {
                openDetailView(found, false);
                return;
            }
        }
    } else if (hash.startsWith('#category=')) {
        const catKey = hash.replace('#category=', '');
        if (categoryLabels[catKey]) {
            const targetBtn = document.querySelector(`.cat-select-btn[data-key="${catKey}"]`);
            selectCategory(catKey, targetBtn || document.createElement("button"));
        }
    } else if (document.body.classList.contains('detail-active') && !hash.startsWith('#item=')) {
        closeDetailView(false);
    }
}

let currentItemInDetail = null;

function addCurrentItemToStack() {
    if (!currentItemInDetail) return;
    addToStack(currentItemInDetail);
    closeDetailView(false);
    switchTab('view-stack', document.querySelectorAll('.nav-item')[1]);
}

function addCurrentItemToDiary() {
    if (!currentItemInDetail) return;
    closeDetailView(false);
    switchTab('view-diary', document.querySelectorAll('.nav-item')[3]);
    const nameInput = document.getElementById("diary-name");
    const doseInput = document.getElementById("diary-dose");
    if (nameInput) nameInput.value = currentItemInDetail.name;
    if (doseInput) doseInput.value = currentItemInDetail.dosage?.short || "Doporučená dávka";
    if (nameInput) nameInput.focus();
}

function openCurrentItemInCalculator() {
    if (!currentItemInDetail) return;
    const item = currentItemInDetail;
    const nameLower = item.name.toLowerCase();

    closeDetailView(false);
    switchTab('view-calculator', document.querySelectorAll('.nav-item')[2]);

    if (nameLower.includes('bpc-157') || nameLower.includes('bpc 157')) {
        applyPeptideFullPreset(5, 2, 250, 'u100_1ml');
    } else if (nameLower.includes('tb-500') || nameLower.includes('tb 500')) {
        applyPeptideFullPreset(5, 2, 2000, 'u100_1ml');
    } else if (nameLower.includes('retatrutid') || nameLower.includes('tirzepatid')) {
        applyPeptideFullPreset(5, 2, 2000, 'u100_1ml');
    } else if (nameLower.includes('semaglutid')) {
        applyPeptideFullPreset(5, 2, 500, 'u100_1ml');
    } else if (nameLower.includes('ghk')) {
        applyPeptideFullPreset(50, 3, 1500, 'u100_1ml');
    } else if (nameLower.includes('epithalon')) {
        applyPeptideFullPreset(10, 2, 5000, 'u100_1ml');
    } else if (nameLower.includes('ipamorelin') || nameLower.includes('cjc')) {
        applyPeptideFullPreset(5, 2, 100, 'u100_1ml');
    } else {
        let doseMcg = 250;
        const doseText = (item.dosage?.short || "").toLowerCase();
        if (doseText.includes('mcg')) {
            const m = doseText.match(/(\d+)\s*mcg/);
            if (m) doseMcg = parseInt(m[1]);
        } else if (doseText.includes('mg')) {
            const m = doseText.match(/([\d\.]+)\s*mg/);
            if (m) doseMcg = parseFloat(m[1]) * 1000;
        }
        applyPeptideFullPreset(5, 2, doseMcg, 'u100_1ml');
    }
}

function openDetailView(item, updateHistory = true) {
    currentItemInDetail = item;
    const slug = item.slug || slugify(item.name);
    const targetHash = `#item=${item.id}-${slug}`;

    if (updateHistory && window.location.hash !== targetHash) {
        window.history.pushState({ view: 'detail', id: item.id }, '', targetHash);
    }

    // SEO: Dynamická úprava titulku a popisku stránky
    document.title = `${item.name} – Dávkování, účinky a rizika | SuppleZ`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && item.shortDesc) {
        metaDesc.setAttribute('content', item.shortDesc);
    }

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

    // Detekce peptidu pro kalkulačku a přípravný protokol (inspirováno PeptideWiki)
    const cat = item.categoryKey || item.category || '';
    const isPeptide = cat === 'experimental' || 
                      (Array.isArray(item.tags) && item.tags.some(t => (t || '').toLowerCase().includes('peptid'))) ||
                      ['bpc-157', 'tb-500', 'ghk-cu', 'retatrutid', 'tirzepatid', 'semaglutid', 'ipamorelin', 'cjc-1295', 'epithalon', 'kpv', 'mots-c', 'ss-31', 'dihexa', 'semax', 'selank', 'follistatin', 'aod-9604'].some(p => (item.name || '').toLowerCase().includes(p));

    const calcBtn = document.getElementById("detail-calc-btn");
    if (calcBtn) {
        calcBtn.style.display = isPeptide ? "inline-flex" : "none";
    }

    const prepSection = document.getElementById("peptide-prep-section");
    if (prepSection) {
        prepSection.style.display = isPeptide ? "block" : "none";
    }

    document.getElementById("view-wiki").classList.remove("active");
    document.getElementById("view-wiki").classList.add("hidden");
    document.getElementById("view-detail").classList.remove("hidden");
    document.getElementById("view-detail").classList.add("active");
    document.body.classList.add("detail-active");
    window.scrollTo(0, 0);
}

function closeDetailView(goBack = true) {
    // SEO: Návrat k původnímu titulku a popisu
    document.title = DEFAULT_PAGE_TITLE;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', DEFAULT_PAGE_DESC);

    if (goBack) {
        if (window.location.hash.startsWith('#item=')) {
            window.history.back();
            return;
        }
    }

    document.getElementById("view-detail").classList.remove("active");
    document.getElementById("view-detail").classList.add("hidden");
    document.getElementById("view-wiki").classList.remove("hidden");
    document.getElementById("view-wiki").classList.add("active");
    document.body.classList.remove("detail-active");
}

function renderCategoryPills() {
    const pillsContainer = document.getElementById("wiki-category-pills");
    if (!pillsContainer || !globalData || globalData.length === 0) return;

    const counts = {};
    globalData.forEach(item => {
        const cat = item.categoryKey || item.category || 'unknown';
        counts[cat] = (counts[cat] || 0) + 1;
    });

    const orderedCategories = [
        { key: "Vše", label: "Vše", count: globalData.length },
        { key: "health", label: categoryLabels["health"] || "Zdraví", count: counts["health"] || 0 },
        { key: "performance", label: categoryLabels["performance"] || "Výkon", count: counts["performance"] || 0 },
        { key: "sleep", label: categoryLabels["sleep"] || "Spánek", count: counts["sleep"] || 0 },
        { key: "fatloss", label: categoryLabels["fatloss"] || "Redukce", count: counts["fatloss"] || 0 },
        { key: "hormones", label: categoryLabels["hormones"] || "Hormony", count: counts["hormones"] || 0 },
        { key: "nootropics", label: categoryLabels["nootropics"] || "Nootropika", count: counts["nootropics"] || 0 },
        { key: "experimental", label: categoryLabels["experimental"] || "Peptidy", count: counts["experimental"] || 0 },
        { key: "steroids", label: categoryLabels["steroids"] || "Steroidy", count: counts["steroids"] || 0 },
        { key: "pct", label: categoryLabels["pct"] || "PCT & Ochrana", count: counts["pct"] || 0 }
    ];

    pillsContainer.innerHTML = "";
    orderedCategories.forEach(cat => {
        const pill = document.createElement("button");
        pill.className = `category-pill ${currentCategory === cat.key ? "active" : ""}`;
        pill.dataset.key = cat.key;
        pill.innerHTML = `<span class="pill-title">${cat.label}</span><span class="pill-count">${cat.count}</span>`;
        pill.onclick = () => {
            selectCategory(cat.key);
            pill.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        };
        pillsContainer.appendChild(pill);
    });
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
        const orderedCategories = ["health", "performance", "sleep", "fatloss", "hormones", "nootropics", "experimental", "steroids", "pct"];
        modalCategories.innerHTML = "";
        
        const allBtn = document.createElement("button");
        allBtn.className = `cat-select-btn ${currentCategory === "Vše" ? "active" : ""}`;
        allBtn.dataset.key = "Vše";
        allBtn.innerText = "Vše";
        allBtn.onclick = () => selectCategory("Vše", allBtn);
        modalCategories.appendChild(allBtn);
        
        orderedCategories.forEach(catKey => {
            const btn = document.createElement("button");
            btn.className = `cat-select-btn ${currentCategory === catKey ? "active" : ""}`;
            btn.innerText = categoryLabels[catKey] || catKey;
            btn.dataset.key = catKey;
            
            btn.onclick = () => selectCategory(catKey, btn);
            modalCategories.appendChild(btn);
        });
    }
}

function selectCategory(catKey, btnElement) {
    currentCategory = catKey;

    // Synchronizovat tlačítka v modalu i v horizontální liště pills
    document.querySelectorAll(".cat-select-btn").forEach(b => {
        b.classList.toggle("active", b.dataset.key === catKey || (catKey === "Vše" && b.innerText === "Vše"));
    });
    document.querySelectorAll(".category-pill").forEach(p => {
        p.classList.toggle("active", p.dataset.key === catKey);
    });
    
    updateActiveFilterUI();
    
    displayedCount = 0;
    if (cardsGrid) cardsGrid.innerHTML = "";
    loadMoreCards();
    
    const filterModal = document.getElementById("filter-modal");
    if(filterModal && filterModal.classList.contains("open")) {
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
    if (cardsGrid) cardsGrid.innerHTML = "";
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
    selectCategory("Vše");
}

function getFilteredData() {
    const term = searchInput ? searchInput.value.toLowerCase().trim() : "";
    
    let filteredData = globalData.filter(item => {
        const matchesSearch = item.name.toLowerCase().includes(term) ||
                              (Array.isArray(item.tags) && item.tags.some(t => t.toLowerCase().includes(term))) ||
                              (item.shortDesc && item.shortDesc.toLowerCase().includes(term));
        const itemCat = item.categoryKey || item.category;
        const matchesCategory = currentCategory === "Vše" || itemCat === currentCategory;
        return matchesSearch && matchesCategory;
    });

    if (currentSort === 'rating') {
        filteredData.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    } else if (currentSort === 'az') {
        filteredData.sort((a, b) => a.name.localeCompare(b.name, 'cs'));
    }

    return filteredData;
}

function updatePaginationStatus(totalFiltered) {
    const statusEl = document.getElementById("wiki-count-status");
    const loadMoreBtn = document.getElementById("load-more-btn");
    const loadAllBtn = document.getElementById("load-all-btn");

    if (statusEl) {
        if (totalFiltered === 0) {
            statusEl.innerText = "Nebyly nalezeny žádné látky odpovídající filtru.";
        } else {
            statusEl.innerText = `Zobrazeno ${Math.min(displayedCount, totalFiltered)} z ${totalFiltered} látek`;
        }
    }

    const hasMore = displayedCount < totalFiltered;
    if (loadMoreBtn) {
        loadMoreBtn.style.display = hasMore ? "inline-flex" : "none";
        if (hasMore) {
            const nextCount = Math.min(ITEMS_PER_BATCH, totalFiltered - displayedCount);
            loadMoreBtn.innerHTML = `<span class="material-icons">expand_more</span> Načíst dalších ${nextCount} látek`;
        }
    }
    if (loadAllBtn) {
        loadAllBtn.style.display = (hasMore && totalFiltered > ITEMS_PER_BATCH) ? "inline-flex" : "none";
    }
}

function loadMoreCards() {
    const filteredData = getFilteredData();
    const nextBatch = filteredData.slice(displayedCount, displayedCount + ITEMS_PER_BATCH);
    
    if (nextBatch.length > 0) {
        renderCards(nextBatch, true);
        displayedCount += nextBatch.length;
    } else if (displayedCount === 0) {
        if(cardsGrid) cardsGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align:center; padding: 40px 20px; color:#666;">
                <span class="material-icons" style="font-size: 3rem; margin-bottom: 10px; color: #444;">search_off</span>
                <p style="font-size: 1.1rem; color: #888;">Žádná látka neodpovídá zadání.</p>
                <button onclick="resetFilters()" class="btn-outline" style="margin-top: 15px;">Zobrazit vše</button>
            </div>
        `;
    }

    updatePaginationStatus(filteredData.length);

    // Auto-fill: pokud je obrazovka vysoká (např. desktop 1440p) a ještě nevznikl posuvník,
    // načíst další várku, aby uživatel neviděl useknutou stránku bez možnosti scrollovat.
    if (displayedCount < filteredData.length && document.body.offsetHeight < window.innerHeight + 150) {
        setTimeout(loadMoreCards, 40);
    }
}

function loadAllCards() {
    const filteredData = getFilteredData();
    const remainingBatch = filteredData.slice(displayedCount);
    
    if (remainingBatch.length > 0) {
        renderCards(remainingBatch, true);
        displayedCount = filteredData.length;
    }
    updatePaginationStatus(filteredData.length);
}

function renderCards(dataToRender, append = false) {
    if (!cardsGrid) return;
    if (!append) cardsGrid.innerHTML = "";
    if (!dataToRender || dataToRender.length === 0) return;

    const fragment = document.createDocumentFragment();

    dataToRender.forEach((item) => {
        const card = document.createElement("div");
        card.className = `card ${item.colorType || 'green'}`;
        card.onclick = () => openDetailView(item);

        let rateColor = "#fff";
        if (item.colorType === "green") rateColor = "var(--neon-green)";
        if (item.colorType === "yellow") rateColor = "var(--neon-yellow)";
        if (item.colorType === "red") rateColor = "var(--neon-red)";

        const r = Math.round(item.rating || 0);
        const catKey = item.categoryKey || item.category;
        const catLabel = categoryLabels[catKey] || catKey;

        // Dávkování nebo poločas
        const doseHint = item.dosage?.short || (typeof item.dosage === 'string' ? item.dosage : '');
        const doseHtml = doseHint ? `<span class="card-chip dose"><span class="material-icons">medication</span>${doseHint}</span>` : '';
        const halfLifeHtml = item.halfLife ? `<span class="card-chip timer"><span class="material-icons">timer</span>${item.halfLife}</span>` : '';

        // První štítek / tag
        const tag = (Array.isArray(item.tags) && item.tags.length > 0) ? item.tags[0] : '';
        const tagHtml = tag ? `<span class="card-chip tag">#${tag}</span>` : '';

        card.innerHTML = `
            <div class="card-header">
                <div class="card-badges">
                    <span class="card-category">${catLabel}</span>
                </div>
                <div class="card-rating" style="color:${rateColor}; border-color:${rateColor}">
                    ${r}/5
                </div>
            </div>
            <h3>${item.name}</h3>
            <p class="card-desc">${item.shortDesc || ''}</p>
            <div class="card-footer">
                ${doseHtml || halfLifeHtml}
                ${tagHtml}
            </div>
        `;
        fragment.appendChild(card);
    });

    cardsGrid.appendChild(fragment);
}

// Vysoce optimalizovaný plynulý scroll (throttled přes requestAnimationFrame s passive listenerem)
let isScrollThrottled = false;
window.addEventListener('scroll', () => {
    if (isScrollThrottled) return;
    isScrollThrottled = true;
    requestAnimationFrame(() => {
        const wikiView = document.getElementById('view-wiki');
        if (wikiView && !wikiView.classList.contains('hidden')) {
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 250) {
                loadMoreCards();
            }
        }
        isScrollThrottled = false;
    });
}, { passive: true });

// Plynulé vyhledávání s debouncem 120ms (nulový lag při psaní)
let searchDebounceTimer = null;
if (searchInput) {
    searchInput.addEventListener("input", () => {
        clearTimeout(searchDebounceTimer);
        searchDebounceTimer = setTimeout(() => {
            displayedCount = 0;
            if (cardsGrid) cardsGrid.innerHTML = "";
            loadMoreCards();
        }, 120);
    });
}

// Toast notifikace pro systémové hlášky
function showToast(message, icon = 'info', color = 'var(--ui-accent)') {
    let toast = document.getElementById('app-toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'app-toast';
        toast.className = 'app-toast';
        document.body.appendChild(toast);
    }
    toast.innerHTML = `<span class="material-icons" style="color:${color}">${icon}</span><span>${message}</span>`;
    toast.classList.add('visible');
    clearTimeout(toast.hideTimeout);
    toast.hideTimeout = setTimeout(() => {
        toast.classList.remove('visible');
    }, 3500);
}

// Zkontrolovat dostupnost aktualizace ze sítě
async function checkAppUpdate() {
    showToast('Kontrola dostupnosti nové verze...', 'sync', 'var(--ui-accent)');
    if ('serviceWorker' in navigator) {
        try {
            const reg = await navigator.serviceWorker.getRegistration();
            if (reg) {
                await reg.update();
                setTimeout(() => {
                    showToast('Aplikace je aktuální (Verze 5.0).', 'check_circle', 'var(--neon-green)');
                }, 800);
                return;
            }
        } catch (e) {
            console.warn('[Update] Kontrola selhala:', e);
        }
    }
    showToast('Aplikace běží v nejnovější verzi.', 'check_circle', 'var(--neon-green)');
}

// Vyčistit veškerou mezipaměť (CacheStorage + IndexedDB) a stáhnout čerstvá data
async function clearCacheAndReload() {
    showToast('Čištění mezipaměti a stahování čerstvých dat...', 'delete_sweep', 'var(--neon-yellow)');
    try {
        if ('caches' in window) {
            const keys = await caches.keys();
            await Promise.all(keys.map(k => caches.delete(k)));
        }
        if (window.SuppleZ_DB && window.SuppleZ_DB.db) {
            try {
                const tx = window.SuppleZ_DB.db.transaction(['supplements'], 'readwrite');
                tx.objectStore('supplements').clear();
            } catch (err) {
                console.warn('[DB] Clear store:', err);
            }
        }
        if (navigator.serviceWorker && navigator.serviceWorker.controller) {
            navigator.serviceWorker.controller.postMessage({ action: 'CLEAR_CACHE' });
        }
        setTimeout(() => {
            window.location.reload(true);
        }, 600);
    } catch (err) {
        console.error('Chyba při čištění mezipaměti:', err);
        window.location.reload(true);
    }
}

// --- LOGIKA DENÍKU (S IndexedDB PODPOROU) ---

async function addDiaryEntry(moodColor) {
    const nameInput = document.getElementById("diary-name");
    const doseInput = document.getElementById("diary-dose");
    const cycleInput = document.getElementById("diary-cycle");
    const noteInput = document.getElementById("diary-note");

    const name = nameInput.value.trim();
    const dose = doseInput.value.trim();
    const cycle = cycleInput.value.trim() || "Obecné";
    const note = noteInput.value.trim();

    if (!name) { alert("Napiš název látky!"); return; }

    const entry = {
        id: Date.now(),
        date: new Date().toLocaleString("cs-CZ"),
        timestamp: Date.now(),
        name, dose, cycle, note, color: moodColor,
    };

    if (window.SuppleZ_DB) {
        await window.SuppleZ_DB.saveDiaryEntry(entry);
    } else {
        let diary = JSON.parse(localStorage.getItem("supplez_diary_v2")) || [];
        diary.unshift(entry);
        localStorage.setItem("supplez_diary_v2", JSON.stringify(diary));
    }

    await renderDiary();

    nameInput.value = "";
    doseInput.value = "";
    noteInput.value = "";
}

async function deleteEntry(id) {
    if (confirm("Smazat záznam?")) {
        if (window.SuppleZ_DB) {
            await window.SuppleZ_DB.deleteDiaryEntry(id);
        } else {
            let diary = JSON.parse(localStorage.getItem("supplez_diary_v2")) || [];
            diary = diary.filter((e) => e.id !== id);
            localStorage.setItem("supplez_diary_v2", JSON.stringify(diary));
        }
        await renderDiary();
    }
}

async function renderDiary() {
    const list = document.getElementById("diary-list");
    const filterSelect = document.getElementById("cycle-filter");
    
    if(!list) return;

    let myDiary = [];
    if (window.SuppleZ_DB) {
        myDiary = await window.SuppleZ_DB.getDiaryEntries();
    } else {
        myDiary = JSON.parse(localStorage.getItem("supplez_diary_v2")) || [];
    }

    const filterVal = filterSelect ? filterSelect.value : "all";
    updateFilterDropdown(myDiary);

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

function updateFilterDropdown(diaryList) {
    const select = document.getElementById("cycle-filter");
    if(!select) return;
    const currentVal = select.value;
    const uniqueCycles = [...new Set((diaryList || []).map((item) => item.cycle))];
    
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

async function exportData() {
    let entries = [];
    if (window.SuppleZ_DB) {
        entries = await window.SuppleZ_DB.getDiaryEntries();
    } else {
        entries = JSON.parse(localStorage.getItem("supplez_diary_v2")) || [];
    }

    const dataStr = JSON.stringify(entries, null, 2);
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
    reader.onload = async function (e) {
        try {
            const importedData = JSON.parse(e.target.result);
            if (Array.isArray(importedData)) {
                if (confirm("Tímto přepíšeš aktuální deník. Pokračovat?")) {
                    if (window.SuppleZ_DB) {
                        await window.SuppleZ_DB.importDiaryData(importedData);
                    } else {
                        localStorage.setItem("supplez_diary_v2", JSON.stringify(importedData));
                    }
                    await renderDiary();
                    alert("Data úspěšně nahrána!");
                }
            } else { alert("Špatný formát (očekáváno pole)."); }
        } catch (err) { alert("Chyba souboru: " + err.message); }
    };
    reader.readAsText(file);
}

async function clearAllData() {
    if (confirm("OPRAVDU SMAZAT VŠECHNA DATA?")) {
        if (window.SuppleZ_DB) {
            await window.SuppleZ_DB.clearAllDiaryEntries();
        } else {
            localStorage.removeItem("supplez_diary_v2");
        }
        await renderDiary();
    }
}

// Počáteční vykreslení deníku
renderDiary();

// ==========================================
// --- STACK BUILDER & INTERAKCE & ROZVRH ---
// ==========================================

let activeStack = JSON.parse(localStorage.getItem("supplez_user_stack_v1")) || [];
let currentStackSubtab = 'interactions';

function initStackUI() {
    renderPresetChips();
    renderActiveStack();
    setupStackSearch();
}

function switchStackSubtab(subtab) {
    currentStackSubtab = subtab;
    const interBtn = document.getElementById("subtab-interactions-btn");
    const circBtn = document.getElementById("subtab-circadian-btn");
    const interView = document.getElementById("stack-subview-interactions");
    const circView = document.getElementById("stack-subview-circadian");

    if (subtab === 'interactions') {
        if (interBtn) interBtn.classList.add("active");
        if (circBtn) circBtn.classList.remove("active");
        if (interView) interView.classList.remove("hidden");
        if (circView) circView.classList.add("hidden");
        runInteractionAnalysis();
    } else {
        if (interBtn) interBtn.classList.remove("active");
        if (circBtn) circBtn.classList.add("active");
        if (interView) interView.classList.add("hidden");
        if (circView) circView.classList.remove("hidden");
        renderCircadianTimeline();
    }
}

function renderPresetChips() {
    const container = document.getElementById("preset-chips-container");
    if (!container || !window.SuppleZ_Interactions) return;

    container.innerHTML = "";
    window.SuppleZ_Interactions.PRESET_STACKS.forEach(preset => {
        const chip = document.createElement("button");
        chip.className = "preset-chip";
        chip.innerText = preset.name;
        chip.title = preset.desc;
        chip.onclick = () => loadPresetStack(preset);
        container.appendChild(chip);
    });
}

function loadPresetStack(preset) {
    if (!preset || !Array.isArray(preset.items)) return;
    activeStack = [...preset.items];
    saveActiveStack();
    renderActiveStack();
}

function setupStackSearch() {
    const input = document.getElementById("stack-search-input");
    const suggestions = document.getElementById("stack-suggestions");
    if (!input || !suggestions) return;

    input.addEventListener("input", () => {
        const query = input.value.trim().toLowerCase();
        if (query.length < 2) {
            suggestions.classList.add("hidden");
            suggestions.innerHTML = "";
            return;
        }

        const matches = globalData.filter(item => {
            const matchesName = item.name.toLowerCase().includes(query);
            const matchesTags = Array.isArray(item.tags) && item.tags.some(t => t.toLowerCase().includes(query));
            const alreadyInStack = activeStack.some(s => s.id === item.id);
            return (matchesName || matchesTags) && !alreadyInStack;
        }).slice(0, 8);

        if (matches.length === 0) {
            suggestions.classList.add("hidden");
            return;
        }

        suggestions.innerHTML = "";
        matches.forEach(item => {
            const div = document.createElement("div");
            div.className = "suggestion-item";
            const catLabel = categoryLabels[item.categoryKey] || item.categoryKey;
            div.innerHTML = `
                <span>${item.name}</span>
                <span class="suggestion-cat">${catLabel}</span>
            `;
            div.onclick = () => {
                addToStack(item);
                input.value = "";
                suggestions.classList.add("hidden");
            };
            suggestions.appendChild(div);
        });
        suggestions.classList.remove("hidden");
    });

    document.addEventListener("click", (e) => {
        if (!input.contains(e.target) && !suggestions.contains(e.target)) {
            suggestions.classList.add("hidden");
        }
    });
}

function addToStack(item) {
    if (!item) return;
    const exists = activeStack.some(s => s.id === item.id || s.name.toLowerCase() === item.name.toLowerCase());
    if (exists) return;

    activeStack.push({
        id: item.id,
        name: item.name,
        categoryKey: item.categoryKey || item.category,
        colorType: item.colorType || 'green'
    });

    saveActiveStack();
    renderActiveStack();
}

function removeFromStack(id) {
    activeStack = activeStack.filter(s => s.id !== id);
    saveActiveStack();
    renderActiveStack();
}

function clearStack() {
    activeStack = [];
    saveActiveStack();
    renderActiveStack();
}

function saveActiveStack() {
    localStorage.setItem("supplez_user_stack_v1", JSON.stringify(activeStack));
}

function renderActiveStack() {
    const list = document.getElementById("stack-chips-list");
    const countEl = document.getElementById("stack-count");
    if (!list) return;

    if (countEl) countEl.innerText = activeStack.length;

    if (activeStack.length === 0) {
        list.innerHTML = '<span style="color:#666; font-size:0.85rem;">Žádné látky ve stacku. Přidejte látky vyhledáním nebo vyberte předvolený stack výše.</span>';
    } else {
        list.innerHTML = "";
        activeStack.forEach(item => {
            const chip = document.createElement("div");
            chip.className = "stack-item-chip";
            chip.innerHTML = `
                <span>${item.name}</span>
                <button class="remove-chip-btn" onclick="removeFromStack(${item.id})">
                    <span class="material-icons" style="font-size:1.1rem">close</span>
                </button>
            `;
            list.appendChild(chip);
        });
    }

    if (currentStackSubtab === 'interactions') {
        runInteractionAnalysis();
    } else {
        renderCircadianTimeline();
    }
}

function runInteractionAnalysis() {
    const container = document.getElementById("interactions-results-container");
    const summaryText = document.getElementById("interaction-summary-text");
    if (!container || !window.SuppleZ_Interactions) return;

    container.innerHTML = "";

    if (activeStack.length < 2) {
        if (summaryText) summaryText.innerText = "Vyberte alespoň 2 látky pro spuštění analýzy interakcí.";
        return;
    }

    const analysis = window.SuppleZ_Interactions.analyzeStackInteractions(activeStack);

    if (summaryText) {
        summaryText.innerText = `Nalezeno: ${analysis.synergies.length} synergií, ${analysis.conflicts.length} časových kompetic, ${analysis.warnings.length} varování.`;
    }

    // Žádné problémy a žádné synergie
    if (analysis.synergies.length === 0 && analysis.conflicts.length === 0 && analysis.warnings.length === 0) {
        container.innerHTML = `
            <div class="interaction-card synergy">
                <div class="interaction-card-header">
                    <span class="material-icons">verified_user</span>
                    <h4>Čistý stack (žádné známé kolize)</h4>
                </div>
                <p>Mezi vybranými látkami nebyly nalezeny žádné známé negativní lékové interakce ani absorpční kompetice.</p>
            </div>
        `;
        return;
    }

    // 1. Kritická varování (červená)
    analysis.warnings.forEach(warn => {
        const card = document.createElement("div");
        card.className = "interaction-card warning";
        card.innerHTML = `
            <div class="interaction-card-header">
                <span class="material-icons">warning</span>
                <h4>${warn.title}</h4>
            </div>
            <p>${warn.warning}</p>
        `;
        container.appendChild(card);
    });

    // 2. Časové kompetice (žlutá)
    analysis.conflicts.forEach(conf => {
        const card = document.createElement("div");
        card.className = "interaction-card conflict";
        card.innerHTML = `
            <div class="interaction-card-header">
                <span class="material-icons">schedule</span>
                <h4>${conf.title}</h4>
            </div>
            <p>${conf.conflict}</p>
            <div class="interaction-advice">Doporučení: ${conf.advice}</div>
        `;
        container.appendChild(card);
    });

    // 3. Synergie (zelená)
    analysis.synergies.forEach(syn => {
        const card = document.createElement("div");
        card.className = "interaction-card synergy";
        card.innerHTML = `
            <div class="interaction-card-header">
                <span class="material-icons">check_circle</span>
                <h4>${syn.title}</h4>
            </div>
            <p>${syn.mechanism}</p>
        `;
        container.appendChild(card);
    });
}

function renderCircadianTimeline() {
    const container = document.getElementById("circadian-timeline-container");
    if (!container || !window.SuppleZ_Interactions) return;

    container.innerHTML = "";

    if (activeStack.length === 0) {
        container.innerHTML = '<div style="text-align:center; color:#666; padding:20px;">Přidejte látky do vašeho stacku pro sestavení rozvrhu.</div>';
        return;
    }

    const schedule = window.SuppleZ_Interactions.buildCircadianSchedule(activeStack);

    Object.keys(schedule).forEach(slotKey => {
        const slot = schedule[slotKey];
        if (slot.items.length === 0) return;

        const slotCard = document.createElement("div");
        slotCard.className = "timeline-slot";

        let itemsHtml = '';
        slot.items.forEach(item => {
            itemsHtml += `
                <div class="slot-item-card">
                    <span class="slot-item-name">${item.name}</span>
                    <span class="slot-item-reason">${slot.rule.reason}</span>
                </div>
            `;
        });

        slotCard.innerHTML = `
            <div class="slot-header">
                <span class="material-icons" style="color:${slot.rule.color}">${slot.rule.icon}</span>
                <h3>${slot.rule.label}</h3>
                <span class="slot-time-badge">${slot.rule.timeHint}</span>
            </div>
            <div class="slot-items-list">
                ${itemsHtml}
            </div>
        `;
        container.appendChild(slotCard);
    });
}

// ==========================================
// --- KALKULAČKA ŘEDĚNÍ PEPTIDŮ (UI) ---
// ==========================================

function initCalculatorUI() {
    const vialInput = document.getElementById("calc-vial-mg");
    const waterInput = document.getElementById("calc-water-ml");
    const doseInput = document.getElementById("calc-dose-mcg");
    const syringeSelect = document.getElementById("calc-syringe-type");

    if (vialInput) vialInput.addEventListener("input", runPeptideCalculation);
    if (waterInput) waterInput.addEventListener("input", runPeptideCalculation);
    if (doseInput) doseInput.addEventListener("input", runPeptideCalculation);
    if (syringeSelect) syringeSelect.addEventListener("change", runPeptideCalculation);

    runPeptideCalculation();
}

function setCalcPreset(type, value) {
    if (type === 'vial') {
        const el = document.getElementById("calc-vial-mg");
        if (el) el.value = value;
    } else if (type === 'water') {
        const el = document.getElementById("calc-water-ml");
        if (el) el.value = value;
    } else if (type === 'dose') {
        const el = document.getElementById("calc-dose-mcg");
        if (el) el.value = value;
    }
    runPeptideCalculation();
}

function applyPeptideFullPreset(vialMg, waterMl, doseMcg, syringeType = 'u100_1ml') {
    const vialEl = document.getElementById("calc-vial-mg");
    const waterEl = document.getElementById("calc-water-ml");
    const doseEl = document.getElementById("calc-dose-mcg");
    const syringeEl = document.getElementById("calc-syringe-type");

    if (vialEl) vialEl.value = vialMg;
    if (waterEl) waterEl.value = waterMl;
    if (doseEl) doseEl.value = doseMcg;
    if (syringeEl) syringeEl.value = syringeType;

    runPeptideCalculation();
    if (typeof showToast === 'function') {
        const displayDose = doseMcg >= 1000 ? (doseMcg / 1000) + ' mg' : doseMcg + ' mcg';
        showToast(`Předvolba: vialka ${vialMg} mg, dávka ${displayDose}`, "tune", "var(--ui-accent)");
    }
}

function runPeptideCalculation() {
    if (!window.SuppleZ_Calculator) return;

    const vialMg = parseFloat(document.getElementById("calc-vial-mg")?.value) || 0;
    const waterMl = parseFloat(document.getElementById("calc-water-ml")?.value) || 1;
    const doseMcg = parseFloat(document.getElementById("calc-dose-mcg")?.value) || 0;
    const syringeType = document.getElementById("calc-syringe-type")?.value || 'u100_1ml';

    window.SuppleZ_Calculator.vialMg = vialMg;
    window.SuppleZ_Calculator.waterMl = waterMl;
    window.SuppleZ_Calculator.doseMcg = doseMcg;
    window.SuppleZ_Calculator.syringeType = syringeType;

    const results = window.SuppleZ_Calculator.calculate();

    // Render SVG
    const svgContainer = document.getElementById("syringe-svg-container");
    if (svgContainer) {
        svgContainer.innerHTML = window.SuppleZ_Calculator.renderSvgSyringe(results);
    }

    // Výsledný text
    const unitsOut = document.getElementById("syringe-units-output");
    const subOut = document.getElementById("syringe-sub-output");

    if (results.isOverflow) {
        if (unitsOut) {
            unitsOut.innerText = `Překročena kapacita (${results.units} IU)`;
            unitsOut.style.color = "var(--neon-red)";
        }
        if (subOut) subOut.innerText = `Dávka ${results.doseVolumeMl} ml přesahuje kapacitu stříkačky. Zvyšte objem vody nebo zvolte větší stříkačku.`;
    } else {
        if (unitsOut) {
            unitsOut.innerText = `Natáhněte přesně ${results.units} jednotek`;
            unitsOut.style.color = "var(--neon-green)";
        }
        if (subOut) {
            subOut.innerText = `Ryska ${results.units} na stříkačce (${results.doseVolumeMl} ml roztoku)`;
        }
    }

    // Metriky
    const concEl = document.getElementById("metric-concentration");
    const volEl = document.getElementById("metric-volume");
    const dosesEl = document.getElementById("metric-doses");

    if (concEl) concEl.innerText = `${results.concentrationMcgPerMl.toLocaleString("cs-CZ")} mcg / ml`;
    if (volEl) volEl.innerText = `${results.doseVolumeMl} ml`;
    if (dosesEl) dosesEl.innerText = `${results.totalDoses} dávek`;
}

// Inicializace modulů po načtení
window.addEventListener("DOMContentLoaded", () => {
    initStackUI();
    initCalculatorUI();
});
// Fallback spuštění pokud už byl DOM ready
if (document.readyState === "complete" || document.readyState === "interactive") {
    initStackUI();
    initCalculatorUI();
}

