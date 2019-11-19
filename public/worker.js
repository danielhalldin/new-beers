console.log("Loaded service worker!");
self.addEventListener("push", ev => {
  const data = ev.data.json();
  self.registration.showNotification(data.title, {
    body: data.body,
    icon: data.icon,
    requireInteraction: true
  });
  self.addEventListener("notificationclick", ev => {
    const data = ev.data.json();
    const examplePage = data.path;
    const promiseChain = clients.openWindow(examplePage);
    event.waitUntil(promiseChain);
  });
});
