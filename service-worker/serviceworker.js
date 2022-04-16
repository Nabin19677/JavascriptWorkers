let counter = 0;

self.oninstall = (event) => {
  console.log("Service worker is installed");
};

self.onactivate = (event) => {
  console.log("Service worker is activated");
  event.waitUntil(self.clients.claim()); //wait until service worker claim the web page
};

self.onfetch = (event) => {
  console.log("fetch", event.request.url);

  if (event.request.url.endsWith("/data.json")) {
    counter++;
    event.respondWith(
      new Response(JSON.stringify({ counter }), {
        headers: {
          "Content-Type": "application/json",
        },
      })
    );
  }

  //fallback to normal HTTP request
  event.respondWith(fetch(event.request));
};
