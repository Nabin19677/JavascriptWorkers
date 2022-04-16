navigator.serviceWorker.register("serviceworker.js", {
  scope: "/",
});

navigator.serviceWorker.oncontrollerchange = () => {
  console.log("Controller Changed");
};

async function makeRequest() {
  const result = await fetch("/data.json");
  const payload = await result.json();
  console.log(payload);
}
