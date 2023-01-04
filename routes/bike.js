const express = require("express");

const BikeController = require("../controllers/bike");

const api = express.Router();

api.post("/bike", BikeController.createBike);
api.get("/bike", BikeController.getBike);
api.put("/bike/:name", BikeController.updateBike);

module.exports = api;
