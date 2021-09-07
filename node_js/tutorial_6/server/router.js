const express = require("express");

const CitiesController = require("./api/controllers");

const citiesRouter = express.Router();

citiesRouter.post("/cities", CitiesController.addNewCity);
citiesRouter.get("/cities/:id", CitiesController.getCityById);

citiesRouter.delete("/cities/:id", CitiesController.deleteCity);
citiesRouter.get("/cities", CitiesController.getCities);
citiesRouter.put("/cities/:id", CitiesController.updateCity);

module.exports = citiesRouter;