const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();

//app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

const bike_routes = require("./routes/bike");
const store_routes = require("./routes/store");
const alquilar_routes = require("./routes/alquilar");

app.use("/api", bike_routes);
app.use("/api", store_routes);
app.use("/api", alquilar_routes);
app.get("/:pagina", (req, res) => {
  const htmlPath = path.join(__dirname, "public", req.params.pagina + ".html");
  res.sendFile(htmlPath);
});
app.get("/", (req, res) => {
  const htmlPath = path.join(__dirname, "public", "index.html");
  res.sendFile(htmlPath);
});

module.exports = app;
