const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const db = require("./data/mongoose");
// const productRouter = require("./routes/product-router");
// const orderRouter = require("./routes/order-router");
const citiesRouter = require("./router");

const app = express();
const apiPort = 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use("/api", citiesRouter);

app.listen(apiPort, () =>
    console.log(`Server running at http://localhost:${apiPort}`)
);