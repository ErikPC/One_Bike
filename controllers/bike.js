const Bike = require("../models/bike");

async function createBike(req, res) {
  const bike = makebike(req);

  try {
    const bikeStore = await bike.save();

    if (!bikeStore) {
      res.status(400).send({ msg: "No se ha podido almacenar la bicicleta" });
    } else {
      res.status(200).send({ bike: bikeStore });
    }
  } catch (error) {
    res.status(500).send(error);
  }
}

async function getBike(req, res) {
  try {
    var bikes = await Bike.find();
    if (!bikes) {
      res.status(400).send({ msg: "Error al buscar bicicleta" });
    } else {
      res.status(200).send(bikes);
    }
  } catch (error) {
    res.status(500).send(error);
  }
}

module.exports = {
  createBike,
  getBike,
};
