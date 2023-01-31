const express = require("express");
const api = express.Router();

const AlquilarController = require("../controllers/alquilar");

api.get("/alquilar/:store/:bike", AlquilarController.getAlquilarBici);
api.get("/devolver/:store/:bike", AlquilarController.getDevolverBici);

module.exports = api;
