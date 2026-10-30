/**
 * SuppleZ Database & Storage Layer (db.js)
 * Modern IndexedDB storage with automatic localStorage migration,
 * repository abstractions, and resilient fallbacks.
 */

const DB_NAME = 'SuppleZ_DB';
const DB_VERSION = 1;

class SuppleZDatabase {
    constructor() {
        this.db = null;
        this.isReady = false;
        this.useFallback = false;
    }

    /**
     * Otevře IndexedDB a vytvoří potřebné object stores a indexy.
     */
    async init() {
        if (!('indexedDB' in window)) {
            console.warn('[DB] IndexedDB není podporována, aktivován localStorage fallback.');
            this.useFallback = true;
            this.isReady = true;
            return;
        }

        return new Promise((resolve, reject) => {
            const request = indexedDB.open(DB_NAME, DB_VERSION);

            request.onupgradeneeded = (event) => {
                const db = event.target.result;

                // 1. Store: Supplements (Wiki data)
                if (!db.objectStoreNames.contains('supplements')) {
                    const suppStore = db.createObjectStore('supplements', { keyPath: 'id' });
                    suppStore.createIndex('categoryKey', 'categoryKey', { unique: false });
                    suppStore.createIndex('rating', 'rating', { unique: false });
                    suppStore.createIndex('colorType', 'colorType', { unique: false });
                    suppStore.createIndex('evidenceLevel', 'evidenceLevel', { unique: false });
                    suppStore.createIndex('name', 'name', { unique: false });
                    suppStore.createIndex('slug', 'slug', { unique: false });
                }

                // 2. Store: Diary (Osobní deník a cykly)
                if (!db.objectStoreNames.contains('diary')) {
                    const diaryStore = db.createObjectStore('diary', { keyPath: 'id' });
                    diaryStore.createIndex('timestamp', 'timestamp', { unique: false });
                    diaryStore.createIndex('cycle', 'cycle', { unique: false });
                    diaryStore.createIndex('color', 'color', { unique: false });
                    diaryStore.createIndex('name', 'name', { unique: false });
                }

                // 3. Store: Settings & Metadata
                if (!db.objectStoreNames.contains('settings')) {
                    db.createObjectStore('settings', { keyPath: 'key' });
                }
            };

            request.onsuccess = async (event) => {
                this.db = event.target.result;
                this.isReady = true;
                console.log('[DB] IndexedDB úspěšně inicializována.');

                // Provedení automatické migrace z localStorage, pokud je potřeba
                try {
                    await this.migrateFromLocalStorage();
                } catch (err) {
                    console.error('[DB] Chyba při migraci z localStorage:', err);
                }

                resolve(this);
            };

            request.onerror = (event) => {
                console.warn('[DB] Nepodařilo se otevřít IndexedDB, přechod na fallback:', event.target.error);
                this.useFallback = true;
                this.isReady = true;
                resolve(this);
            };
        });
    }

    /**
     * Automatická migrace dat ze starého LocalStorage formátu do IndexedDB.
     */
    async migrateFromLocalStorage() {
        if (this.useFallback) return;

        const rawLegacy = localStorage.getItem('supplez_diary_v2');
        if (!rawLegacy) return;

        try {
            const legacyEntries = JSON.parse(rawLegacy);
            if (!Array.isArray(legacyEntries) || legacyEntries.length === 0) return;

            const currentCount = await this.countDiaryEntries();
            if (currentCount === 0) {
                console.log(`[DB] Migrace ${legacyEntries.length} záznamů z localStorage do IndexedDB...`);
                const tx = this.db.transaction(['diary'], 'readwrite');
                const store = tx.objectStore('diary');
                for (const entry of legacyEntries) {
                    store.put(entry);
                }
                await new Promise((res, rej) => {
                    tx.oncomplete = res;
                    tx.onerror = () => rej(tx.error);
                });
                console.log('[DB] Migrace záznamů deníku úspěšně dokončena.');
            }
        } catch (e) {
            console.error('[DB] Chyba parsování dat pro migraci:', e);
        }
    }

    /**
     * Uložení/synchronizace katalogu suplementů do IndexedDB pro bleskové offline vyhledávání.
     */
    async syncSupplements(items) {
        if (this.useFallback || !this.db || !Array.isArray(items)) return;

        try {
            const tx = this.db.transaction(['supplements'], 'readwrite');
            const store = tx.objectStore('supplements');
            for (const item of items) {
                store.put(item);
            }
            await new Promise((res, rej) => {
                tx.oncomplete = res;
                tx.onerror = () => rej(tx.error);
            });
            console.log(`[DB] ${items.length} suplementů uloženo do IndexedDB.`);
        } catch (err) {
            console.warn('[DB] Chyba při synchronizaci suplementů do IndexedDB:', err);
        }
    }

    /**
     * Získání všech suplementů z IndexedDB.
     */
    async getAllSupplements() {
        if (this.useFallback || !this.db) return null;

        return new Promise((resolve) => {
            const tx = this.db.transaction(['supplements'], 'readonly');
            const store = tx.objectStore('supplements');
            const request = store.getAll();

            request.onsuccess = () => resolve(request.result);
            request.onerror = () => resolve(null);
        });
    }

    /**
     * Vyhledání suplementu podle ID.
     */
    async getSupplementById(id) {
        if (this.useFallback || !this.db) return null;

        return new Promise((resolve) => {
            const tx = this.db.transaction(['supplements'], 'readonly');
            const store = tx.objectStore('supplements');
            const request = store.get(Number(id));

            request.onsuccess = () => resolve(request.result || null);
            request.onerror = () => resolve(null);
        });
    }

    // --- METODY PRO DENÍK (DIARY) ---

    async getDiaryEntries() {
        if (this.useFallback || !this.db) {
            try {
                return JSON.parse(localStorage.getItem('supplez_diary_v2')) || [];
            } catch {
                return [];
            }
        }

        return new Promise((resolve) => {
            const tx = this.db.transaction(['diary'], 'readonly');
            const store = tx.objectStore('diary');
            const request = store.getAll();

            request.onsuccess = () => {
                const entries = request.result || [];
                // Seřadit od nejnovějšího (timestamp sestupně)
                entries.sort((a, b) => (b.timestamp || b.id || 0) - (a.timestamp || a.id || 0));
                resolve(entries);
            };
            request.onerror = () => {
                // Fallback na localStorage
                try {
                    resolve(JSON.parse(localStorage.getItem('supplez_diary_v2')) || []);
                } catch {
                    resolve([]);
                }
            };
        });
    }

    async countDiaryEntries() {
        if (this.useFallback || !this.db) {
            const items = JSON.parse(localStorage.getItem('supplez_diary_v2')) || [];
            return items.length;
        }

        return new Promise((resolve) => {
            const tx = this.db.transaction(['diary'], 'readonly');
            const store = tx.objectStore('diary');
            const request = store.count();
            request.onsuccess = () => resolve(request.result);
            request.onerror = () => resolve(0);
        });
    }

    async saveDiaryEntry(entry) {
        // Zároveň ukládáme do localStorage jako bezpečnostní backup
        this._syncToLocalStorageFallback(entry, 'add');

        if (this.useFallback || !this.db) return entry;

        return new Promise((resolve, reject) => {
            const tx = this.db.transaction(['diary'], 'readwrite');
            const store = tx.objectStore('diary');
            const req = store.put(entry);

            req.onsuccess = () => resolve(entry);
            req.onerror = () => reject(req.error);
        });
    }

    async deleteDiaryEntry(id) {
        this._syncToLocalStorageFallback(id, 'delete');

        if (this.useFallback || !this.db) return;

        return new Promise((resolve, reject) => {
            const tx = this.db.transaction(['diary'], 'readwrite');
            const store = tx.objectStore('diary');
            const req = store.delete(Number(id));

            req.onsuccess = () => resolve();
            req.onerror = () => reject(req.error);
        });
    }

    async clearAllDiaryEntries() {
        localStorage.removeItem('supplez_diary_v2');

        if (this.useFallback || !this.db) return;

        return new Promise((resolve, reject) => {
            const tx = this.db.transaction(['diary'], 'readwrite');
            const store = tx.objectStore('diary');
            const req = store.clear();

            req.onsuccess = () => resolve();
            req.onerror = () => reject(req.error);
        });
    }

    async importDiaryData(entries) {
        if (!Array.isArray(entries)) throw new Error('Data pro import musí být pole');

        // Uložení do localStorage
        localStorage.setItem('supplez_diary_v2', JSON.stringify(entries));

        if (this.useFallback || !this.db) return;

        const tx = this.db.transaction(['diary'], 'readwrite');
        const store = tx.objectStore('diary');
        await new Promise((res, rej) => {
            const clearReq = store.clear();
            clearReq.onsuccess = res;
            clearReq.onerror = () => rej(clearReq.error);
        });

        for (const entry of entries) {
            store.put(entry);
        }

        return new Promise((res, rej) => {
            tx.oncomplete = res;
            tx.onerror = () => rej(tx.error);
        });
    }

    // Pomocná synchronizace do localStorage
    _syncToLocalStorageFallback(itemOrId, action) {
        try {
            let list = JSON.parse(localStorage.getItem('supplez_diary_v2')) || [];
            if (action === 'add') {
                list = list.filter(e => e.id !== itemOrId.id);
                list.unshift(itemOrId);
            } else if (action === 'delete') {
                list = list.filter(e => e.id !== itemOrId);
            }
            localStorage.setItem('supplez_diary_v2', JSON.stringify(list));
        } catch (e) {
            console.warn('[DB] Chyba synchronizace localStorage backupu:', e);
        }
    }
}

// Globální instance databázové služby
const dbService = new SuppleZDatabase();
window.SuppleZ_DB = dbService;
