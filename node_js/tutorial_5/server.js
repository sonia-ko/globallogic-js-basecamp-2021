const express = require("express");
const fs = require("fs");
const env = require("dotenv").config({ path: "../.env" });
const app = express();
const jsonParser = express.json();
// use npm i @react-ssr/express to install
const register = require("@react-ssr/express/register");
app.use(express.static(__dirname + "/public"));
const contentPages = ["dogs", "cats", "birds"];
// const bodyParser = require("body-parser");
// app.use(bodyParser.json({ type: "*/*" }));

// defining cats data
const catsContent = fs.readFileSync("./api/cats.json", "utf8");
const cats = JSON.parse(catsContent);

//defining dogs data
const dogsContent = fs.readFileSync("./api/dogs.json", "utf8");
const dogs = JSON.parse(dogsContent);

//defining birds data
const birdsContent = fs.readFileSync("./api/birds.json", "utf8");
const birds = JSON.parse(birdsContent);

(async() => {
    // register `.jsx`  as a view template engine
    await register(app);

    //////////// GET requests ////////////

    // Home page
    app.get("/", function(req, res) {
        res.render("index", { contentPages });
    });

    // Galleries

    app.get("/cats", (req, res) => {
        res.render("pets", {
            items: cats,
            petName: "cats",
            contentPages: contentPages,
        });
    });

    app.get("/dogs", (req, res) => {
        res.render("pets", {
            items: dogs,
            petName: "dogs",
            contentPages: contentPages,
        });
    });

    app.get("/birds", (req, res) => {
        res.render("pets", {
            items: birds,
            petName: "birds",
            contentPages: contentPages,
        });
    });

    // Choose a pet by ID
    app.get("/pets/cats/:id", (req, res) => {
        const id = req.params.id;
        let cat = cats.find((cat) => cat.id === +id);
        if (cat) {
            res.send(cat);
        } else {
            res.status(404).send();
        }
    });

    app.get("/pets/dogs/:id", (req, res) => {
        const id = req.params.id;
        let dog = dogs.find((dog) => dog.id === +id);
        if (dog) {
            res.send(dog);
        } else {
            res.status(404).send();
        }
    });

    app.get("/pets/birds/:id", (req, res) => {
        const id = req.params.id;
        let bird = birds.find((bird) => bird.id === +id);
        if (bird) {
            res.send(bird);
        } else {
            res.status(404).send();
        }
    });

    //The 404 Route
    app.get("*", function(req, res) {
        res.status(404).render("pageNotFound", { contentPages });
    });

    app.listen(env.parsed.PORT, () =>
        console.log(`Server started on: http://localhost:${env.parsed.PORT}`)
    );
})();