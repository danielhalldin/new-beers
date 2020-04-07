/*eslint-disable no-undef*/
if ("function" === typeof importScripts) {
  importScripts(
    "https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js"
  );

  /* global workbox */
  if (workbox) {
    /* Dynamic cache */
    workbox.routing.registerRoute(
      /https:\/\/untappd\.akamaized\.net\/site\/beer_logos/,
      workbox.strategies.cacheFirst({
        cacheName: "beer_logos",
        plugins: [
          new workbox.expiration.Plugin({
            maxEntries: 500,
            maxAgeSeconds: 7 * 24 * 60 * 60, // 1 week
          }),
        ],
      })
    );

    /* Precacheing */
    workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);
  }
}

// Show notification
self.addEventListener("push", (event) => {
  const data = event.data.json();

  self.registration.showNotification(data.title, {
    body: data.body,
    icon: data.icon,
    requireInteraction: true,
    data: data.data,
    tag: data.tag,
  });
});

// Handle notification click
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
