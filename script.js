// NAVIGACE
function switchTab(viewId, navElement) {
    document.querySelectorAll('.view').forEach(el => {
        el.classList.remove('active');
        el.classList.add('hidden'); // Zajistí skrytí
    });
    document.getElementById(viewId).classList.remove('hidden');
    document.getElementById(viewId).classList.add('active');

    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
    navElement.classList.add('active');
}

// WIKI RENDER
const cardsGrid = document.getElementById('cards-grid');
const searchInput = document.getElementById('searchInput');

function renderCards(data) {
    cardsGrid.innerHTML = '';
    data.forEach(item => {
        const card = document.createElement('div');
        card.className = `card ${item.colorType}`;
        card.onclick = () => openModal(item);
        
        // Barva ratingu
        let rateColor = '#fff';
        if(item.colorType === 'green') rateColor = 'var(--neon-green)';
        if(item.colorType === 'yellow') rateColor = 'var(--neon-yellow)';
        if(item.colorType === 'red') rateColor = 'var(--neon-red)';

        card.innerHTML = `
            <div class="rating-badge" style="color:${rateColor}">${item.rating}</div>
            <h3>${item.name}</h3>
            <p class="card-desc">${item.shortDesc}</p>
        `;
        cardsGrid.appendChild(card);
    });
}

searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = supplementsData.filter(i => i.name.toLowerCase().includes(term));
    renderCards(filtered);
});

// MODAL LOGIC
const detailOverlay = document.getElementById('detail-overlay');
function openModal(item) {
    document.getElementById('detail-title').innerText = item.name;
    document.getElementById('detail-category').innerText = item.category;
    
    // Barvení detailů
    let themeColor = 'var(--ui-accent)';
    if(item.colorType === 'green') themeColor = 'var(--neon-green)';
    if(item.colorType === 'yellow') themeColor = 'var(--neon-yellow)';
    if(item.colorType === 'red') themeColor = 'var(--neon-red)';

    document.querySelector('.detail-container').style.borderTop = `4px solid ${themeColor}`;
    document.getElementById('detail-rating').style.color = themeColor;
    document.getElementById('detail-rating').innerText = `${item.rating}/10`;

    document.getElementById('detail-desc').innerText = item.fullDesc;
    document.getElementById('detail-dosage').innerText = item.dosage;
    document.getElementById('detail-warning').innerText = item.warning;
    
    detailOverlay.classList.remove('hidden');
}
document.getElementById('close-btn').onclick = () => detailOverlay.classList.add('hidden');
detailOverlay.onclick = (e) => { if(e.target === detailOverlay) detailOverlay.classList.add('hidden'); };


// DENÍK & CYKLY
let myDiary = JSON.parse(localStorage.getItem('supplez_diary_v2')) || [];

function addDiaryEntry(moodColor) {
    const name = document.getElementById('diary-name').value;
    const dose = document.getElementById('diary-dose').value;
    const cycle = document.getElementById('diary-cycle').value || "Obecné"; // Default tag
    const note = document.getElementById('diary-note').value;

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
    
    // Reset polí (kromě cyklu, ten asi chceš nechat stejný)
    document.getElementById('diary-name').value = '';
    document.getElementById('diary-dose').value = '';
    document.getElementById('diary-note').value = '';
}

function deleteEntry(id) {
    if(confirm("Smazat záznam?")) {
        myDiary = myDiary.filter(e => e.id !== id);
        saveData();
        renderDiary();
    }
}

// Renderování deníku s filtrem
function renderDiary() {
    const list = document.getElementById('diary-list');
    const filterVal = document.getElementById('cycle-filter').value;
    
    // Aktualizace filtru (dropdownu)
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

// Dynamické naplnění dropdownu podle existujících cyklů
function updateFilterDropdown() {
    const select = document.getElementById('cycle-filter');
    const currentVal = select.value;
    const uniqueCycles = [...new Set(myDiary.map(item => item.cycle))];
    
    // Zachováme "Vše", smažeme zbytek a znovu naplníme
    select.innerHTML = '<option value="all">Zobrazit vše</option>';
    
    uniqueCycles.forEach(c => {
        const opt = document.createElement('option');
        opt.value = c;
        opt.innerText = c;
        select.appendChild(opt);
    });

    // Pokud vybraná hodnota stále existuje, nastavíme ji zpět
    if(uniqueCycles.includes(currentVal) || currentVal === 'all') {
        select.value = currentVal;
    }
}

function saveData() {
    localStorage.setItem('supplez_diary_v2', JSON.stringify(myDiary));
}


// NASTAVENÍ (EXPORT / IMPORT)

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

// INIT
renderCards(supplementsData);
renderDiary();