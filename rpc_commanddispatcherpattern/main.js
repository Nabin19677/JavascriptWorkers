// RpcWorker is from rpc-worker.js which is a wrapper for underlying worker.js
const worker = new RcpWorker("worker.js");

Promise.allSettled([
  worker.exec("square_sum", 1_000_000),
  worker.exec("fibonacci", 1_000),
  worker.exec("fake_method"),
  worker.exec("bad"),
]).then(([square_sum, fibonacci, fake_method, bad]) => {
  console.log("square sum ", square_sum);
  console.log("fibonacci ", fibonacci);
  console.log("fake method ", fake_method);
  console.log("bad ", bad);
});
