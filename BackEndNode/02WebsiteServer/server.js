const http = require("http");
const url = require("url");
const fs = require("fs");
const path = require("path");

const hostname = "127.0.0.1";
const port = 5000;

const mimeTypes = {
  html: "text/html",
  css: "text/css",
  js: "text/javascript",
  png: "image/png",
  jpeg: "image/jpeg",
  jpg: "image/jpg"
};

http
  .createServer((req, res) => {
    var myUri = url.parse(req.url).pathname;
    var fileName = path.join(process.cwd(), unescape(myUri));
    console.log("File you are looking for is: " + fileName);
    var loadFile;

    try {
      loadFile = fs.lstatSync(fileName);
    } catch (error) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.write("404 page not found");
      res.end();
      return;
    }

    if (loadFile.isFile()) {
      var mimeType =
        mimeTypes[
          path
            .extname(fileName)
            .split(".")
            .reverse()[0]
        ];
      res.writeHead(200, { "Content-Type": mimeType });
      var fileStream = fs.createReadStream(fileName);
      fileStream.pipe(res);
    } else if (loadFile.isDirectory()) {
      res.writeHead(302, { Location: "index.html" });
      res.end();
    } else {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.write("500 internal error");
      res.end();
    }
  })
  .listen(port, hostname, () => {
    console.log(`Server is running ${port}`);
  });
