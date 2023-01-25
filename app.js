const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const bike_routes = require("./routes/bike");
const store_routes = require("./routes/store");

app.use("/api", bike_routes);
app.use("/api", store_routes);

module.exports = app;
