// Unicorn Duel service worker: app shell cache-first, Google Fonts stale-while-revalidate.
const VERSION = "unicornduel-v3";
const SHELL = ["./", "index.html", "manifest.webmanifest", "icons/icon-192.png", "icons/icon-512.png", "icons/icon-maskable-512.png", "icons/apple-touch-icon.png",
  "voice/ready.mp3", "voice/set.mp3", "voice/go.mp3", "voice/c0.mp3", "voice/c1.mp3", "voice/c2.mp3", "voice/c3.mp3", "voice/golden.mp3", "voice/star-rosie.mp3", "voice/star-luna.mp3", "voice/star-sunny.mp3", "voice/star-pip.mp3", "voice/star-snowy.mp3", "voice/star-starla.mp3", "voice/win-rosie.mp3", "voice/win-luna.mp3", "voice/win-sunny.mp3", "voice/win-pip.mp3", "voice/win-snowy.mp3", "voice/win-starla.mp3", "voice/sup-hearts.mp3", "voice/sup-rainbow.mp3", "voice/sup-wave.mp3", "voice/sup-lullaby.mp3", "voice/sup-globe.mp3", "voice/sup-star.mp3"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com") {
    e.respondWith(caches.open(VERSION).then(async c => {
      const hit = await c.match(req);
      const net = fetch(req).then(r => { c.put(req, r.clone()); return r; }).catch(() => hit);
      return hit || net;
    }));
    return;
  }
  if (url.origin !== location.origin) return;
  e.respondWith(caches.match(req, { ignoreSearch: true }).then(hit => hit || fetch(req).then(r => {
    if (r.ok) { const copy = r.clone(); caches.open(VERSION).then(c => c.put(req, copy)); }
    return r;
  }).catch(() => req.mode === "navigate" ? caches.match("index.html") : undefined)));
});
