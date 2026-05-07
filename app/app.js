const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3000;

const client = require('prom-client');

// collect default metrics (CPU, memory, etc.)
client.collectDefaultMetrics();

// custom metric
const requestCounter = new client.Counter({
  name: 'app_requests_total',
  help: 'Total number of requests',
});

const server = http.createServer(async (req, res) => {

    // 🔹 Metrics endpoint
    if (req.url === "/metrics") {
      res.writeHead(200, { "Content-Type": client.register.contentType });
      res.end(await client.register.metrics());
    }
  
    // 🔹 Home page
    else if (req.url === "/") {
      requestCounter.inc(); // count requests
      res.end("Kosmani App 🚀");
    }
  
    else {
      res.writeHead(404);
      res.end("Not Found");
    }
  });

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
