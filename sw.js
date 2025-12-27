const CACHE_NAME = 'supplez-cache';
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './style.css',
    './script.js',
    './data.js',
    './manifest.json',
    'https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;600;700&family=Roboto:wght@300;400;500&display=swap',
    'https://fonts.googleapis.com/icon?family=Material+Icons'
];

// 1. Instalace Service Workeru a uložení souborů do cache
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Otevírám cache a ukládám soubory...');
                return cache.addAll(ASSETS_TO_CACHE);
            })
    );
});

// 2. Aktivace a smazání staré cache (pokud změníš verzi)
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== CACHE_NAME) {
                        console.log('Mažu starou cache:', cache);
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});

// 3. Interceptování požadavků (Offline logika)
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                // Pokud je soubor v cache, vrať ho (Offline mode)
                if (response) {
                    return response;
                }
                // Jinak zkus internet
                return fetch(event.request);
            })
    );
});