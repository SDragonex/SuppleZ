const CACHE_NAME = 'supplez-cache-v4';

const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './style.css',
    './script.js',
    './manifest.json',
    'https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;600;700&family=Roboto:wght@300;400;500&display=swap',
    'https://fonts.googleapis.com/icon?family=Material+Icons'
];

// 1. INSTALACE
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
});

// 2. AKTIVACE (Mazání staré cache)
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== CACHE_NAME) {
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});

// 3. CHYTRÉ STAHOVÁNÍ (FETCH)
self.addEventListener('fetch', (event) => {
    
    // A) Pokud jde o databázi (JSON), zkus nejdřív INTERNET (Network First)
    if (event.request.url.includes('database.json')) {
        event.respondWith(
            fetch(event.request)
                .then((response) => {
                    // Pokud se to podařilo stáhnout, uložíme si kopii do cache na příště
                    const responseClone = response.clone();
                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(event.request, responseClone);
                    });
                    return response;
                })
                .catch(() => {
                    // Pokud jsme OFFLINE, vrátíme verzi z cache
                    return caches.match(event.request);
                })
        );
    } 
    // B) Pro všechno ostatní (CSS, JS, Fonty) zkus nejdřív CACHE (Cache First)
    else {
        event.respondWith(
            caches.match(event.request).then((response) => {
                return response || fetch(event.request);
            })
        );
    }
});