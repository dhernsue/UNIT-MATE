// sw.js (Service Worker)

// ✅ Install event: Cache files
self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("unitmate-cache").then(cache => {
      return cache.addAll([
        "./",
        "./index.html",
        "./manifest.json",
        "./logo-150x150.png"
      ]);
    })
  );
  console.log("Service Worker: Installed");
});

// ✅ Fetch event: Serve from cache, fallback to network
self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
