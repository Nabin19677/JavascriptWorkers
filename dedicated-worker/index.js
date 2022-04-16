const worker = new Worker("worker.js");

worker.onmessage = (msg) => {
  console.log("Worker : ", msg.data);
};

worker.postMessage("Hey");
