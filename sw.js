// Service Worker para MAIKA PORCUNA - PWA
const CACHE_NAME = 'maika-porcuna-v4.0.0';
const BASE_PATH = self.location.pathname.replace(/sw\.js$/, '');
const urlsToCache = [
  './',
  './index.html',
  './styles.css',
  './firebase-config.js',
  './auth.js',
  './dietaService.js',
  './clienteService.js',
  './base-datos-alimentos.js',
  './generador-dietas.js',
  './script.js',
  './cliente-manager.js',
  './tabla-editable.js',
  './diagnostico-tabla-editable.js',
  './ui-manager.js',
  './verificar-firestore.js',
  './manifest.json',
  './icon-192x192.png',
  './icon-512x512.png',
  // CDN externos críticos
  'https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js',
  'https://www.gstatic.com/firebasejs/9.23.0/firebase-auth-compat.js',
  'https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore-compat.js',
  'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js'
];

// Instalación del Service Worker
self.addEventListener('install', (event) => {
  console.log('Service Worker: Instalando...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Service Worker: Cacheando archivos');
        return cache.addAll(urlsToCache);
      })
      .catch((error) => {
        console.error('Service Worker: Error al cachear archivos', error);
      })
  );
  self.skipWaiting();
});

// Activación del Service Worker
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activando...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Service Worker: Eliminando cache antiguo', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  return self.clients.claim();
});

// Interceptar peticiones
self.addEventListener('fetch', (event) => {
  // Solo cachear peticiones GET
  if (event.request.method !== 'GET') {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Retornar respuesta del cache si existe
        if (response) {
          return response;
        }

        // Si no está en cache, hacer fetch y guardar en cache
        return fetch(event.request)
          .then((response) => {
            // Verificar que la respuesta es válida
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clonar la respuesta
            const responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });

            return response;
          })
          .catch(() => {
            // Si falla el fetch y es una página HTML, retornar index.html
            if (event.request.headers.get('accept') && event.request.headers.get('accept').includes('text/html')) {
              return caches.match('./index.html') || caches.match('./') || caches.match('index.html');
            }
          });
      })
  );
});

// Manejo de mensajes para actualizar la app
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Notificación push (preparado para futuro uso)
self.addEventListener('push', (event) => {
  const data = event.data ? event.data.json() : {};
  const title = data.title || 'MAIKA PORCUNA';
  const options = {
    body: data.body || 'Tienes una nueva notificación',
    icon: 'icon-192x192.png',
    badge: 'icon-72x72.png',
    vibrate: [200, 100, 200],
    tag: 'notification-tag',
    requireInteraction: true
  };

  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});

// Manejo de clics en notificaciones
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow('./')
  );
});

console.log('Service Worker cargado correctamente');

