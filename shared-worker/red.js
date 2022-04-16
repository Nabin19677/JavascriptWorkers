console.log("red.js");

const shared = new SharedWorker("shared.js");

shared.port.onmessage = (event) => {
  console.log(event.data);
};
