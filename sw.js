// Service Worker para MAIKA PORCUNA - PWA
// Versión actualizada para auto-actualización automática
const CACHE_NAME = 'maika-porcuna-v5.0.0';
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
  console.log('Service Worker: Instalando versión', CACHE_NAME);
  // Forzar activación inmediata para aplicar actualizaciones
  self.skipWaiting();
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Service Worker: Cacheando archivos');
        // No bloquear la instalación si falla el cacheo
        return cache.addAll(urlsToCache).catch((error) => {
          console.warn('Service Worker: Algunos archivos no se pudieron cachear', error);
        });
      })
  );
});

// Activación del Service Worker
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activando versión', CACHE_NAME);
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
    }).then(() => {
      // Tomar control inmediato de todas las páginas
      return self.clients.claim();
    })
  );
});

// Interceptar peticiones - Estrategia Network First para siempre obtener la versión más reciente
self.addEventListener('fetch', (event) => {
  // No cachear peticiones a Firebase (siempre usar red)
  if (event.request.url.includes('firebase') || 
      event.request.url.includes('googleapis') ||
      event.request.url.includes('gstatic')) {
    return; // Dejar que Firebase maneje su propia cache
  }

  // Solo cachear peticiones GET
  if (event.request.method !== 'GET') {
    return;
  }

  event.respondWith(
    // ESTRATEGIA NETWORK FIRST: Intentar red primero, luego cache
    fetch(event.request)
      .then((response) => {
        // Si la respuesta es válida, actualizar cache y retornar
        if (response && response.status === 200 && response.type === 'basic') {
          const responseToCache = response.clone();
          caches.open(CACHE_NAME)
            .then((cache) => {
              cache.put(event.request, responseToCache);
            });
          return response;
        }
        // Si falla, intentar desde cache
        throw new Error('Network response not ok');
      })
      .catch(() => {
        // Si falla la red, usar cache
        return caches.match(event.request)
          .then((cachedResponse) => {
            if (cachedResponse) {
              return cachedResponse;
            }
            // Si es una petición HTML y no hay cache, retornar index.html
            if (event.request.headers.get('accept') && 
                event.request.headers.get('accept').includes('text/html')) {
              return caches.match('./index.html') || 
                     caches.match('./') || 
                     caches.match('index.html');
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
  if (event.data && event.data.type === 'CHECK_UPDATE') {
    // Verificar actualizaciones cuando el cliente lo solicite
    event.ports[0].postMessage({ updateAvailable: true });
  }
});

// Verificar actualizaciones periódicamente (cada hora)
self.addEventListener('sync', (event) => {
  if (event.tag === 'check-updates') {
    event.waitUntil(
      caches.open(CACHE_NAME).then((cache) => {
        // Forzar verificación de actualizaciones
        return fetch('./sw.js', { cache: 'no-store' });
      })
    );
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

console.log('Service Worker cargado correctamente - Versión', CACHE_NAME);

