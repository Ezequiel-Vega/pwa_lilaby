import { precacheAndRoute } from "workbox-precaching";

precacheAndRoute(self.__WB_MANIFEST);

const cacheName = "pwa-lilaby-v2";

// URLs de los assets a guardar
const urlsToCache = [
  "/static/js/main.24e518b6.chunk.js",
  "/static/js/2.2d228acf.chunk.js",
  "/static/js/runtime-main.1cbf4b4c.js",
  "/index.html",
  "/manifest.json",
];

// Instalar Service Worker
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(cacheName)
      .then((cache) => {
        cache.addAll(urlsToCache);
      })
      .catch((err) => console.error(err))
  );
});

// Actualizar Cache
self.addEventListener("activate", (event) => {
  // Actualiza y elimina los cache que no estan en la lista
  const cacheAllowList = ["pwa-lilaby-v2"];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheAllowList.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Comprobar si hay algo guardado en el cache
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((res) => {
      if (res) {
        return res;
      }
      // Si lo pedido no es igual a lo que esta en el cache
      // hacer la peticion a la red
      return fetch(event.request);
    })
  );
});
