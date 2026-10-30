/**
 * SuppleZ Service Worker (sw.js)
 * Verze: 6.1 (Peptide protocol bridge & interactive reconstitution integration)
 * Strategie: Network-First pro aplikaci a data (vždy čerstvé změny),
 * s okamžitou zálohou v mezipaměti pro spolehlivý offline provoz.
 */

const CACHE_NAME = 'supplez-cache-v6.1';

const STATIC_ASSETS = [
    './',
    './index.html',
    './style.css',
    './script.js',
    './db.js',
    './interactions.js',
    './calculator.js',
    './manifest.json',
    './robots.txt',
    './sitemap.xml',
    './data/supplements.bundle.json',
    './data/health.json',
    './data/performance.json',
    './data/sleep.json',
    './data/fatloss.json',
    './data/hormones.json',
    './data/nootropics.json',
    './data/experimental.json',
    './data/steroids.json',
    './data/pct.json',
    'https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;600;700&family=Roboto:wght@300;400;500&display=swap',
    'https://fonts.googleapis.com/icon?family=Material+Icons'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(STATIC_ASSETS);
        })
    );
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== CACHE_NAME) {
                        console.log('[SW] Odstraněna stará mezipaměť:', cache);
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
    self.clients.claim();
});

// Zpracování zpráv z klientské aplikace (např. ruční vymazání mezipaměti nebo skipWaiting)
self.addEventListener('message', (event) => {
    if (!event.data) return;
    if (event.data.action === 'SKIP_WAITING') {
        self.skipWaiting();
    } else if (event.data.action === 'CLEAR_CACHE') {
        caches.delete(CACHE_NAME).then(() => {
            if (event.ports && event.ports[0]) {
                event.ports[0].postMessage({ success: true });
            }
        });
    }
});

self.addEventListener('fetch', (event) => {
    const request = event.request;
    const url = new URL(request.url);

    // 1. Externí statické fonty (Google Fonts a Material Icons) -> Cache-First
    if (url.origin.includes('fonts.googleapis.com') || url.origin.includes('fonts.gstatic.com')) {
        event.respondWith(
            caches.match(request).then((cachedResponse) => {
                if (cachedResponse) return cachedResponse;
                return fetch(request).then((networkResponse) => {
                    if (networkResponse && networkResponse.status === 200) {
                        const copy = networkResponse.clone();
                        caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
                    }
                    return networkResponse;
                }).catch(() => cachedResponse);
            })
        );
        return;
    }

    // 2. Všechny aplikační soubory a data (HTML, JS, CSS, JSON) -> NETWORK-FIRST
    // Zkusit stáhnout čerstvou verzi ze sítě. Při úspěchu uložit do cache a vrátit.
    // Při výpadku sítě nebo offline režimu okamžitě použít verzi z mezipaměti.
    event.respondWith(
        fetch(request)
            .then((networkResponse) => {
                if (networkResponse && networkResponse.status === 200) {
                    const responseClone = networkResponse.clone();
                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(request, responseClone);
                    });
                }
                return networkResponse;
            })
            .catch(() => {
                return caches.match(request).then((cachedResponse) => {
                    if (cachedResponse) {
                        return cachedResponse;
                    }
                    // Pokud je požadavek na navigaci v aplikaci a není v cache, vrátit hlavní index.html
                    if (request.mode === 'navigate' || request.destination === 'document') {
                        return caches.match('./index.html') || caches.match('./');
                    }
                    // Pro datové soubory vrátit prázdné pole místo chyby
                    if (url.pathname.endsWith('.json')) {
                        return new Response('[]', {
                            headers: { 'Content-Type': 'application/json' }
                        });
                    }
                });
            })
    );
});
