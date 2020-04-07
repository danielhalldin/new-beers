/*eslint-disable no-undef*/
if ("function" === typeof importScripts) {
  importScripts(
    "https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js"
  );

  /* global workbox */
  if (workbox) {
    console.log("Workbox is loaded");
    workbox.routing.registerRoute(
      /.*/,
      workbox.strategies.staleWhileRevalidate({
        cacheName: "dynamic",
      })
    );

    /* custom cache rules*/
    workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);
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
