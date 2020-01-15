const http = require("http");

const hostName = "127.0.0.1";
const port = 5000;

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello World");
  })
  .listen(port, hostName, () => {
    console.log(`server is running at ${hostName} and port ${port} `);
  });
