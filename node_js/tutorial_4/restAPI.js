const files = require("./files");
const logger = require("./logger");
const htmlGenerator = require("./api/htmlGenerator");
const jsonGenerator = require("./api/jsonGenerator");
const { catsRequestedEvListener } = require("./tasks/trends/trends");
const { dogsRequestedEvListener } = require("./tasks/trends/trends");

const Emitter = require("events");
let emitter = new Emitter();
const dogsRequestEvent = "dogsRequestEvent";
const catsRequestEvent = "catsRequestEvent";
emitter.on(dogsRequestEvent, dogsRequestedEvListener);
emitter.on(catsRequestEvent, catsRequestedEvListener);
emitter.on(catsRequestEvent, logger);
emitter.on(dogsRequestEvent, logger);

function restAPI(req, res) {
    const routes = {
        "/api/cats/html": () => {
            res.writeHead(200, { "Content-Type": "text/html" });
            const link = files("cats");
            res.write(htmlGenerator(link, "cat"));
            res.end();
            emitter.emit(catsRequestEvent, { link, pets: "cats" });
        },
        "/api/dogs/html": () => {
            res.writeHead(200, { "Content-Type": "text/html" });
            const link = files("dogs");
            res.write(htmlGenerator(link, "dog"));
            res.end();
            emitter.emit(dogsRequestEvent, { link, pets: "dogs" });
        },
        "/api/dogs/json": () => {
            res.writeHead(200, { "Content-Type": "application/json" });
            const link = files("dogs");
            res.write(jsonGenerator(link, "dog"));
            res.end();
            emitter.emit(dogsRequestEvent, { link, pets: "dogs" });
        },
        "/api/cats/json": () => {
            res.writeHead(200, { "Content-Type": "application/json" });
            const link = files("cats");
            res.write(jsonGenerator(link, "cat"));
            res.end();
            emitter.emit(catsRequestEvent, { link, pets: "cats" });
        },
        "/api/42": () => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write("42");
            res.end();
        },
    };

    routes[req.url]();
}

module.exports = restAPI;