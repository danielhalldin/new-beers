/*eslint-disable no-undef*/
if ("function" === typeof importScripts) {
  /**
   * https://developers.google.com/web/tools/workbox/reference-docs/latest/workbox
   */
  importScripts(
    "https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js"
  );

  const version = "__VERSION";
  const customCacheNames = {
    graphql: "new-beers-dynamic-graphql-" + version,
    images: "new-beers-dynamic-images-" + version,
    other: "new-beers-dynamic-other-" + version,
  };

  // Cleanup dynamic caches
  self.addEventListener("activate", function (event) {
    event.waitUntil(
      caches.keys().then(function (keyList) {
        return Promise.all(
          keyList.map(function (key) {
            if (!key.includes(version)) {
              return caches.delete(key);
            }
          })
        );
      })
    );
  });

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

  /* global workbox */
  if (workbox) {
    const { precacheAndRoute } = workbox.precaching;
    const { registerRoute } = workbox.routing;
    const { StaleWhileRevalidate } = workbox.strategies;
    const { ExpirationPlugin } = workbox.expiration;
    const { setCacheNameDetails } = workbox.core;

    setCacheNameDetails({
      prefix: "new-beers",
      suffix: version,
      precache: "precache",
      runtime: "runtime",
      googleAnalytics: "googleAnalytics",
    });

    const maxAgeSeconds = {
      week: 7 * 24 * 60 * 60,
      tenMinutes: 10 * 60,
    };

    const matches = {
      images: new RegExp("https://untappd\\.akamaized\\.net/.*"),
      graph: new RegExp(".*/graphql.*"),
      other: new RegExp(".*"),
    };

    /* Precacheing */
    precacheAndRoute(self.__WB_MANIFEST);

    /* Dynamic cache */
    registerRoute(
      matches.images,
      new StaleWhileRevalidate({
        cacheName: customCacheNames.images,
        plugins: [
          new ExpirationPlugin({
            maxEntries: 500,
            maxAgeSeconds: maxAgeSeconds.week,
          }),
        ],
      })
    );
    registerRoute(
      matches.graph,
      new StaleWhileRevalidate({
        cacheName: customCacheNames.graphql,
        plugins: [
          new ExpirationPlugin({
            maxEntries: 10,
            maxAgeSeconds: maxAgeSeconds.tenMinutes,
          }),
        ],
      })
    );
    registerRoute(
      matches.other,
      new StaleWhileRevalidate({
        cacheName: customCacheNames.other,
        plugins: [
          new ExpirationPlugin({
            maxEntries: 100,
            maxAgeSeconds: maxAgeSeconds.tenMinutes,
          }),
        ],
      })
    );
  }
}
