const staticCacheName = "site-static-v1";
const assets = [
  "/",
  "/index.html",
  "https://fonts.googleapis.com/css?family=Bowlby+One+SC|Hind:300,400,500,600,700",
];

self.addEventListener("install", (evt) => {
  evt.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log("caching shell assets");
      cache.addAll(assets);
    })
  );
});

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

self.addEventListener("fetch", (evt) => {
  if (evt.request.method !== "GET" || evt.request.url.indexOf("http") !== 0) {
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

  self.registration.showNotification(data.title, {
    body: data.body,
    icon: data.icon,
    requireInteraction: true,
    data: data.data,
    tag: data.tag,
  });
});

self.onnotificationclick = function (event) {
  event.notification.close();
  const path = event.notification.data.path;

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
