// --- LOGIKA APLIKACE (CLEAN VERSION) ---

// 1. GLOBÁLNÍ PROMĚNNÉ
const cardsGrid = document.getElementById('cards-grid');
const searchInput = document.getElementById('searchInput');

// 2. NAVIGACE (TABS)
function switchTab(viewId, navElement) {
    // Skrýt všechny views
    document.querySelectorAll('.view').forEach(el => {
        el.classList.remove('active');
        el.classList.add('hidden');
    });
    // Zobrazit vybraný
    document.getElementById(viewId).classList.remove('hidden');
    document.getElementById(viewId).classList.add('active');

    // Upravit menu (spodní lištu)
    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
    if(navElement) {
        navElement.classList.add('active');
    }
}

// 3. FULL SCREEN DETAIL LOGIKA
function openDetailView(item) {
    // Nastavení barev podle typu
    let themeColor = 'var(--ui-accent)';
    let glowColor = 'rgba(0, 243, 255, 0.4)';
    
    if(item.colorType === 'green') { themeColor = 'var(--neon-green)'; glowColor = 'rgba(0, 255, 65, 0.5)'; }
    if(item.colorType === 'yellow') { themeColor = 'var(--neon-yellow)'; glowColor = 'rgba(255, 234, 0, 0.5)'; }
    if(item.colorType === 'red') { themeColor = 'var(--neon-red)'; glowColor = 'rgba(255, 0, 60, 0.5)'; }

    // Plnění dat do HTML elementů v detailu
    const titleEl = document.getElementById('detail-main-title');
    titleEl.innerText = item.name;
    titleEl.style.color = themeColor;
    
    document.getElementById('detail-category-badge').innerText = item.category;
    
    const ratingEl = document.getElementById('detail-rating-big');
    ratingEl.innerText = item.rating + '/10';
    ratingEl.style.color = themeColor;
    ratingEl.style.borderColor = themeColor;

    // Nastavení "hero" záře na pozadí
    document.querySelector('.detail-hero').style.setProperty('--glow-color', glowColor);

    // Placeholder obrázku
    const placeholder = document.getElementById('detail-image-placeholder');
    placeholder.innerText = item.name.substring(0, 2).toUpperCase();
    placeholder.style.borderColor = themeColor;
    placeholder.style.color = themeColor;
    placeholder.style.boxShadow = `0 0 25px ${glowColor}`;

    // Texty a popisy
    const typeText = document.getElementById('detail-type-text');
    typeText.innerText = item.colorType.toUpperCase();
    typeText.style.color = themeColor;
    
    // Zkrácení dávkování pro hlavičku (pokud existuje)
    let shortDose = item.dosage ? item.dosage.split(' ')[0] : 'N/A';
    document.getElementById('detail-dose-short').innerText = shortDose;

    document.getElementById('detail-full-desc').innerText = item.fullDesc;
    // Pokud nemáš v datech "benefits", použijeme fullDesc nebo jiný text
    document.getElementById('detail-benefits').innerText = item.fullDesc; 
    document.getElementById('detail-dosage-long').innerText = item.dosage;
    document.getElementById('detail-warning-long').innerText = item.warning;

    // PŘEPNUTÍ POHLEDU (Z Wiki na Detail)
    document.getElementById('view-wiki').classList.remove('active');
    document.getElementById('view-wiki').classList.add('hidden');
    
    document.getElementById('view-detail').classList.remove('hidden');
    document.getElementById('view-detail').classList.add('active');
    
    // Skrytí navigace (hlavičky a patičky) pro "ponoření" do obsahu
    document.body.classList.add('detail-active');
    
    // Scroll nahoru
    window.scrollTo(0,0);
}

function closeDetailView() {
    // Zavřít detail
    document.getElementById('view-detail').classList.remove('active');
    document.getElementById('view-detail').classList.add('hidden');

    // Otevřít zpět Wiki
    document.getElementById('view-wiki').classList.remove('hidden');
    document.getElementById('view-wiki').classList.add('active');
    
    // Zobrazení navigace zpět
    document.body.classList.remove('detail-active');
}

// 4. RENDEROVÁNÍ KARET (WIKI)
function renderCards(data) {
    cardsGrid.innerHTML = '';
    
    if(!data) { console.error("Žádná data pro renderCards!"); return; }

    data.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = `card ${item.colorType}`;
        // Kaskádová animace (každá karta se objeví o trochu později)
        card.style.animationDelay = `${index * 0.05}s`; 

        // Po kliknutí otevřít detail
        card.onclick = () => openDetailView(item);
        
        // Barva ratingu
        let rateColor = '#fff';
        if(item.colorType === 'green') rateColor = 'var(--neon-green)';
        if(item.colorType === 'yellow') rateColor = 'var(--neon-yellow)';
        if(item.colorType === 'red') rateColor = 'var(--neon-red)';

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

// Vyhledávání
searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    // Filtrujeme globální proměnnou supplementsData (načtenou z data.js)
    if(typeof supplementsData !== 'undefined') {
        const filtered = supplementsData.filter(i => i.name.toLowerCase().includes(term));
        renderCards(filtered);
    }
});


// 5. DENÍK & CYKLY (Logika)
let myDiary = JSON.parse(localStorage.getItem('supplez_diary_v2')) || [];

function addDiaryEntry(moodColor) {
    const nameInput = document.getElementById('diary-name');
    const doseInput = document.getElementById('diary-dose');
    const cycleInput = document.getElementById('diary-cycle');
    const noteInput = document.getElementById('diary-note');

    const name = nameInput.value;
    const dose = doseInput.value;
    const cycle = cycleInput.value || "Obecné"; 
    const note = noteInput.value;

    if(!name) { alert("Napiš název látky!"); return; }

    const entry = {
        id: Date.now(),
        date: new Date().toLocaleString('cs-CZ'),
        timestamp: Date.now(),
        name, dose, cycle, note, color: moodColor
    };

    myDiary.unshift(entry);
    saveData();
    renderDiary();
    
    // Vyčistit pole (kromě cyklu)
    nameInput.value = '';
    doseInput.value = '';
    noteInput.value = '';
}

function deleteEntry(id) {
    if(confirm("Smazat záznam?")) {
        myDiary = myDiary.filter(e => e.id !== id);
        saveData();
        renderDiary();
    }
}

function renderDiary() {
    const list = document.getElementById('diary-list');
    const filterVal = document.getElementById('cycle-filter').value;
    
    updateFilterDropdown();

    list.innerHTML = '';
    
    const filteredData = filterVal === 'all' 
        ? myDiary 
        : myDiary.filter(e => e.cycle === filterVal);

    if(filteredData.length === 0) {
        list.innerHTML = '<div style="text-align:center; color:#555; margin-top:20px;">Žádné záznamy.</div>';
        return;
    }

    filteredData.forEach(e => {
        const div = document.createElement('div');
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
            ${e.note ? `<div class="entry-note">"${e.note}"</div>` : ''}
            <button class="delete-btn" onclick="deleteEntry(${e.id})">
                <span class="material-icons" style="font-size:1.2rem">delete</span>
            </button>
        `;
        list.appendChild(div);
    });
}

function updateFilterDropdown() {
    const select = document.getElementById('cycle-filter');
    const currentVal = select.value;
    const uniqueCycles = [...new Set(myDiary.map(item => item.cycle))];
    
    select.innerHTML = '<option value="all">Zobrazit vše</option>';
    
    uniqueCycles.forEach(c => {
        const opt = document.createElement('option');
        opt.value = c;
        opt.innerText = c;
        select.appendChild(opt);
    });

    if(uniqueCycles.includes(currentVal) || currentVal === 'all') {
        select.value = currentVal;
    }
}

function saveData() {
    localStorage.setItem('supplez_diary_v2', JSON.stringify(myDiary));
}

// 6. NASTAVENÍ (EXPORT / IMPORT / CLEAR)
function exportData() {
    const dataStr = JSON.stringify(myDiary, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = `supplez_zaloha_${new Date().toISOString().slice(0,10)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

function importData(inputElement) {
    const file = inputElement.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const importedData = JSON.parse(e.target.result);
            if(Array.isArray(importedData)) {
                if(confirm("Tímto přepíšeš aktuální deník nahranými daty. Pokračovat?")) {
                    myDiary = importedData;
                    saveData();
                    renderDiary();
                    alert("Data úspěšně nahrána!");
                }
            } else {
                alert("Špatný formát souboru.");
            }
        } catch (err) {
            alert("Chyba při čtení souboru.");
        }
    };
    reader.readAsText(file);
}

function clearAllData() {
    if(confirm("OPRAVDU SMAZAT VŠE? (Nelze vrátit)")) {
        localStorage.removeItem('supplez_diary_v2');
        myDiary = [];
        renderDiary();
    }
}

// 7. INICIALIZACE APLIKACE
// Kontrola, zda jsou data načtena ze souboru data.js
if(typeof supplementsData !== 'undefined') {
    renderCards(supplementsData);
} else {
    cardsGrid.innerHTML = '<p style="color:red; text-align:center; margin-top:20px;">Chyba: Data nenačtena.<br>Ujisti se, že "data.js" je v index.html načten PŘED "script.js".</p>';
    console.error("supplementsData is not defined");
}

// Inicializace deníku
renderDiary();