import { precacheAndRoute } from "workbox-precaching";

precacheAndRoute(self.__WB_MANIFEST);

const cacheName = "pwa-lilaby-v1";

// URLs de los assets a guardar
const urlsToCache = [
  "/static/js/main.47c86369.chunk.js",
  "/static/js/2.2d228acf.chunk.js",
  "/static/js/runtime-main.be322562.js",
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
