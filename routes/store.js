const express = require("express");
const api = express.Router();

const StoreController = require("../controllers/store");

api.post("/bike", StoreController.createStore);

module.exports = api;
