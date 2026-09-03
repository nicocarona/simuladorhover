// Service Worker para AeroHover — Prefectura Aérea de Carabineros de Chile
// Permite ejecución 100% offline en hangares y terreno sin conectividad.

const CACHE_NAME = 'aerohover-carabineros-v2';

// Recursos locales críticos (mismo origen)
const CORE_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './simulator.js',
  './logo_nuevo.png',
  './icons/icon-192x192.png',
  './icons/icon-512x512.png',
  './icons/apple-touch-icon.png'
];

// Recursos externos (tipografías). Se cachean best-effort: si fallan,
// la instalación NO se aborta.
const EXTERNAL_ASSETS = [
  'https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@500;600;700&family=Rajdhani:wght@600;700&family=Inter:wght@400;500;600&family=Space+Grotesk:wght@600;700&display=swap'
];

// Instalación: pre-caching tolerante a fallos individuales
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      console.log('[AeroHover SW] Pre-cacheando assets tácticos...');
      // Los locales son obligatorios
      await cache.addAll(CORE_ASSETS);
      // Los externos son opcionales
      await Promise.all(EXTERNAL_ASSETS.map((url) =>
        cache.add(new Request(url, { mode: 'no-cors' }))
          .catch((err) => console.warn('[AeroHover SW] Recurso externo omitido:', url, err))
      ));
    }).then(() => self.skipWaiting())
  );
});

// Activación y purga de cachés antiguas
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((names) => Promise.all(
      names.map((name) => {
        if (name !== CACHE_NAME) {
          console.log('[AeroHover SW] Limpiando caché anterior:', name);
          return caches.delete(name);
        }
      })
    )).then(() => self.clients.claim())
  );
});

// Estrategia Cache-First con respaldo de red (telemetría offline de cabina)
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;

      return fetch(event.request).then((response) => {
        if (response && response.status === 200 &&
            (response.type === 'basic' || response.type === 'cors')) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        }
        return response;
      }).catch(() => {
        const accept = event.request.headers.get('accept') || '';
        if (event.request.mode === 'navigate' || accept.includes('text/html')) {
          return caches.match('./index.html');
        }
        return Response.error();
      });
    })
  );
});
