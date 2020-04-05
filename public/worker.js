console.log("Loaded service worker!");
const staticCacheName = "site-static-v1";
const assets = [
  "/",
  "/index.html",
  "/images/oak.jpg",
  "/images/oak-splash.jpg",
  "https://fonts.googleapis.com/css?family=Bowlby+One+SC|Hind:300,400,500,600,700",
];

// install event
self.addEventListener("install", (evt) => {
  evt.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log("caching shell assets");
      cache.addAll(assets);
    })
  );
});

// activate event
self.addEventListener("activate", (evt) => {
  evt.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys
          .filter((key) => key !== staticCacheName)
          .map((key) => caches.delete(key))
      );
    })
  );
});
// fetch event
self.addEventListener("fetch", (evt) => {
  if (evt.request.method === "POST" || evt.request.url.indexOf("http") !== 0) {
    return;
  } else {
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
  }
});

self.addEventListener("push", (ev) => {
  const data = ev.data.json();
  console.log({ data });
  self.registration.showNotification(data.title, {
    body: data.body,
    icon: data.icon,
    requireInteraction: true,
    data: data.data,
    tag: data.tag,
  });
});

// self.addEventListener("notificationclick", function (event) {
//   console.log({ event });
//   const path = event.notification.data.path;
//   const promiseChain = clients.openWindow(
//     "https://new-beers.netlify.app" + path
//   );
//   event.waitUntil(promiseChain);
// });

self.onnotificationclick = function (event) {
  const path = event.notification.data.path;
  event.notification.close();
  event.waitUntil(
    clients
      .matchAll({
        type: "window",
      })
      .then(function (clientList) {
        for (var i = 0; i < clientList.length; i++) {
          var client = clientList[i];
          if (
            client.url == "https://new-beers.netlify.app" + path &&
            "focus" in client
          )
            return client.focus();
        }
        if (clients.openWindow)
          return clients.openWindow("https://new-beers.netlify.app" + path);
      })
  );
};
