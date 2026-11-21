const CACHE_NAME = 'meu-lugar-guide-v186';
const ASSETS = [
  './',
  './index.html',
  './logo.png',
  './icon-192.png',
  './icon-512.png',
  './saopaulo.png',
  './passaros.png',
  './azure.png',
  './concret.png',
  './provance.png',
  './manual-do-sofa-cama.jpg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)).catch(() => {})
  );
  self.skipWaiting();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
