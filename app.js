const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const bike_routes = require("./routes/bike");

app.use("/api", bike_routes);

module.exports = app;
