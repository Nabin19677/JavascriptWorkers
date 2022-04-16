self.onmessage = (msg) => {
  console.log("Main : ", msg.data);
  postMessage("Hello");
};
