/*eslint-disable no-undef*/
/**
 * https://developers.google.com/web/tools/workbox/reference-docs/latest/workbox
 */
if ("function" === typeof importScripts) {
  importScripts(
    "https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js"
  );

  /* global workbox */
  if (workbox) {
    const { precacheAndRoute } = workbox.precaching;
    const { registerRoute } = workbox.routing;
    const { StaleWhileRevalidate } = workbox.strategies;
    const { ExpirationPlugin } = workbox.expiration;

    /* Precacheing */
    precacheAndRoute(self.__WB_MANIFEST);

    /* Dynamic cache */
    registerRoute(
      new RegExp("https://untappd\\.akamaized\\.net/.*"),
      new StaleWhileRevalidate({
        cacheName: "dynamic-images",
        plugins: [
          new ExpirationPlugin({
            maxEntries: 500,
            maxAgeSeconds: 7 * 24 * 60 * 60, // 7 Days
          }),
        ],
      })
    );
    registerRoute(
      new RegExp(".*"),
      new StaleWhileRevalidate({
        cacheName: "dynamic-other",
      })
    );
    registerRoute(
      new RegExp("https://new-beers.netlify.app/graphql"),
      new StaleWhileRevalidate({
        cacheName: "graphql",
        plugins: [
          new ExpirationPlugin({
            maxEntries: 500,
            maxAgeSeconds: 10 * 60, // 10 minutes
          }),
        ],
      }),
      "POST"
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
