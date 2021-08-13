const files = require("./files");
const logger = require("./logger");
const htmlGenerator = require('./api/htmlGenerator');
const jsonGenerator = require('./api/jsonGenerator');

function restAPI(req, res) {

    const routes = {
        "/api/cats/html": () => {
            res.writeHead(200, { "Content-Type": "text/html" });
            const link = files("cats");
            res.write(htmlGenerator(link, "cat"));
            logger(link, "cats");
            res.end();
        },
        "/api/dogs/html": () => {
            res.writeHead(200, { "Content-Type": "text/html" });
            const link = files("dogs");
            res.write(htmlGenerator(link, "dog"));
            logger(link, "dogs");
            res.end();
        },
        "/api/dogs/json": () => {
            res.writeHead(200, { "Content-Type": 'application/json' });
            const link = files("dogs");
            res.write(jsonGenerator(link, "dog"));
            logger(link, "dogs");
            res.end();
        },
        "/api/cats/json": () => {
            res.writeHead(200, { "Content-Type": 'application/json' });
            const link = files("cats");
            res.write(jsonGenerator(link, "cat"));
            logger(link, "cats");
            res.end();
        },
        "/api/42": () => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write('42');
            res.end();
        },
    };

    routes[req.url]();
}

module.exports = restAPI;