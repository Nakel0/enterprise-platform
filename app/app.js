const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.end("I will be successful and everything will align well for me 🚀");
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});