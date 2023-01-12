const express = require("express");
const api = express.Router();

const StoreController = require("../controllers/store");

api.post("/store", StoreController.createStore);

module.exports = api;
