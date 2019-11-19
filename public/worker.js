console.log("Loaded service worker!");
self.addEventListener("push", ev => {
  const data = ev.data.json();
  self.registration.showNotification(data.title, {
    body: data.body,
    icon: data.icon,
    requireInteraction: true
  });
  self.addEventListener("notificationclick", ev => {
    console.log(ev);
    const examplePage = "/checkins";
    const promiseChain = clients.openWindow(examplePage);
    event.waitUntil(promiseChain);
  });
});
