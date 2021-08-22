const http = require("http");
const env = require("dotenv").config({ path: "../.env" });
const processStaticFile = require("./processStaticFile");
const { CONTENT_TYPES } = require("./config");
const fs = require("fs");
const restAPI = require("./restAPI");
const compressPetsLinks = require("./tasks/readableStream.js");
const microtasks = require("./tasks/microtasks");
const macrotasks = require("./tasks/macrotasks");

let pageNotFound;

fs.readFile("./static/pageNotFound.html", function(err, page) {
    if (err) {
        throw err;
    }
    pageNotFound = page;
});

http
    .createServer((req, res) => {
        if (req.url === "/") {
            res.writeHead(302, { Location: "/static/index.html" });
            res.end();
        } else if (req.url.startsWith("/api/")) {
            restAPI(req, res);
        } else if (req.url.startsWith("/static/")) {
            processStaticFile(req, res);
        } else if (req.url.startsWith("/compress/")) {
            compressPetsLinks();
            res.writeHead(302, { Location: "/static/index.html" });
            res.end();
        } else if (req.url === "/microtasks/") {
            microtasks();
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write("Microtasks");
            res.end();
        } else if (req.url === "/macrotasks/") {
            macrotasks();
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write("Macrotasks");
            res.end();
        } else {
            res.writeHead(404, { "Content-Type": "text/html" });
            res.write(pageNotFound);
            res.end();
        }
    })

.listen(env.parsed.PORT, () =>
    console.log(`Server started on: http://localhost:${env.parsed.PORT}`)
);