/*eslint-disable no-undef*/
if ("function" === typeof importScripts) {
  /**
   * https://developers.google.com/web/tools/workbox/reference-docs/latest/workbox
   */
  importScripts(
    "https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js"
  );

  const version = 3;
  const customCacheNames = {
    graphql: "dynamic-graphql-" + version,
    images: "dynamic-images-" + version,
    other: "dynamic-other-" + version,
  };
  // Cleanup caches
  self.addEventListener("activate", function (event) {
    var cachesToKeep = Object.values(customCacheNames);

    event.waitUntil(
      caches.keys().then(function (keyList) {
        return Promise.all(
          keyList.map(function (key) {
            if (cachesToKeep.indexOf(key) === -1 && !key.includes("workbox")) {
              console.log("delete: " + key);
              return caches.delete(key);
            }
          })
        );
      })
    );
  });

  /* global workbox */
  if (workbox) {
    const { precacheAndRoute } = workbox.precaching;
    const { registerRoute } = workbox.routing;
    const { StaleWhileRevalidate } = workbox.strategies;
    const { ExpirationPlugin } = workbox.expiration;

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
