const express = require("express");

const StoreController = require("../controllers/store");

const api = express.Router();

api.post("/store", StoreController.createStore);
api.get("/store", StoreController.getStores);
api.get("/store/:name", StoreController.getStoreByName);
api.put("/store/:name", StoreController.updateStore);
api.delete("/store/:name", StoreController.deleteStore);

module.exports = api;
