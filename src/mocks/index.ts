const options = { quiet: true, onUnhandledRequest: "bypass" };

if (typeof window === "undefined") {
  const { server } = require("./server");
  server.listen(options);
} else {
  const { worker } = require("./browser");
  worker.start(options);
}

export {};
