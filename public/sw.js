// Simple Service Worker for Founding Paws
const CACHE_NAME = 'founding-paws-v1';
const urlsToCache = [
  '/',
  '/static/css/app/layout.css',
  '/_next/static/chunks/webpack.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      }
    )
  );
});
