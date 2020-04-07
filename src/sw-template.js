/*eslint-disable no-undef*/
if ("function" === typeof importScripts) {
  importScripts(
    "https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js"
  );

  self.__WB_MANIFEST;

  /* global workbox */
  if (workbox) {
    console.log("Workbox is loaded");

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([]);

    /* custom cache rules*/
    workbox.routing.registerNavigationRoute("/index.html", {
      blacklist: [/^\/_/, /\/[^/]+\.[^/]+$/],
    });

    workbox.routing.registerRoute(
      /\.(?:png|gif|jpg|jpeg)$/,
      workbox.strategies.cacheFirst({
        cacheName: "static-images",
        plugins: [
          new workbox.expiration.Plugin({
            maxEntries: 30,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
          }),
        ],
      })
    );

    workbox.router.registerRoute(
      "https://fonts.googleapis.com/(.*)",
      workbox.strategies.cacheFirst({
        cacheName: "static-font",
        cacheExpiration: {
          maxEntries: 10,
        },
        cacheableResponse: { statuses: [0, 200] },
      })
    );

    workbox.router.registerRoute(
      /\.(?:png|gif|jpg|jpeg)$/,
      workbox.strategies.staleWhileRevalidate({
        cacheName: "dynamic",
        plugins: [
          new workbox.expiration.Plugin({
            maxEntries: 300,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
          }),
        ],
        cacheableResponse: { statuses: [0, 200] },
      })
    );
  } else {
    console.log("Workbox could not be loaded. No Offline support");
  }
}

// Show notification
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
