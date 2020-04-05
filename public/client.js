const publicVapidKey =
  "BNyyG0E44DGl86-QHbY8-S1CJUl76JpuATcnP-soJHD5jEV2J5-LFsdBOaa55du0Zi-V7Kb82UkDGIe0dGEhth0";

if ("serviceWorker" in navigator) {
  run().catch((error) => console.error(error));
}

function urlBase64ToUint8Array(base64String) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");
  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }

  return outputArray;
}

async function run() {
  const registration = await navigator.serviceWorker.register("/worker.js", {
    scope: "/",
  });
  const subscription = await registration.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: urlBase64ToUint8Array(publicVapidKey),
  });

  await fetch("/subscribe", {
    method: "POST",
    body: JSON.stringify(subscription),
    headers: {
      "content-type": "application/json",
    },
  });
}
