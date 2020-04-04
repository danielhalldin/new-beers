console.log("Loaded service worker!");
const staticCacheName = "site-static-v1";
const assets = [
  "/",
  "/index.html",
  "/images/oak.jpg",
  "/images/oak-splash.jpg",
  "https://fonts.googleapis.com/css?family=Bowlby+One+SC|Hind:300,400,500,600,700"
];

// install event
self.addEventListener("install", evt => {
  evt.waitUntil(
    caches.open(staticCacheName).then(cache => {
      console.log("caching shell assets");
      cache.addAll(assets);
    })
  );
});

// activate event
self.addEventListener("activate", evt => {
  evt.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys
          .filter(key => key !== staticCacheName)
          .map(key => caches.delete(key))
      );
    })
  );
});
// fetch event
self.addEventListener("fetch", evt => {
  evt.respondWith(
    caches.open("site-dynamic-v1").then(function (cache) {
      return cache.match(evt.request).then(function (response) {
        return (
          response ||
          fetch(evt.request).then(function (response) {
            cache.put(evt.request, response.clone());
            return response;
          })
        );
      });
    })
  );
});

self.addEventListener("push", ev => {
  const data = ev.data.json();
  self.registration.showNotification(data.title, {
    body: data.body,
    icon: data.icon,
    requireInteraction: true,
    data: data.data,
    tag: data.tag
  });
});
self.addEventListener("notificationclick", function (event) {
  console.log({ event });
  const examplePage = event.notification.data.path;
  const promiseChain = clients.openWindow(examplePage);
  event.waitUntil(promiseChain);
});
