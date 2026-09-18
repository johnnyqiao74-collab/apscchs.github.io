importScripts("https://www.gstatic.com/firebasejs/12.15.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/12.15.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyALuJUoYii0O4E_N6YbudIT7AJfQbrr4fQ",
  authDomain: "apsc-portal.firebaseapp.com",
  databaseURL: "https://apsc-portal-default-rtdb.firebaseio.com",
  projectId: "apsc-portal",
  storageBucket: "apsc-portal.firebasestorage.app",
  messagingSenderId: "529134889932",
  appId: "1:529134889932:web:9977ddcc49832decbe8b69"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const title = payload.notification?.title || "My APSC Portal";
  const options = {
    body: payload.notification?.body || "You have a new portal update.",
    icon: "/app/favicon.svg",
    data: { url: payload.fcmOptions?.link || "/app/" }
  };

  self.registration.showNotification(title, options);
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  const url = new URL(event.notification.data?.url || "/app/", self.location.origin).href;
  event.waitUntil(clients.matchAll({ type: "window", includeUncontrolled: true }).then((clientList) => {
    const existing = clientList.find((client) => "focus" in client);
    if (existing) {
      existing.navigate(url);
      return existing.focus();
    }
    return clients.openWindow(url);
  }));
});