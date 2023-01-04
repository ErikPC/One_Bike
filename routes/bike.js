const express = require("express");

const BikeController = require("../controllers/bike");

const api = express.Router();

api.post("/bike", BikeController.createBike);
api.get("/bike", BikeController.getBike);
api.put("/bike/:name", BikeController.updateBike);
api.delete("/bike/:name", BikeController.deleteBike);
api.get("/bike/:name", BikeController.getBikeByName);

module.exports = api;
