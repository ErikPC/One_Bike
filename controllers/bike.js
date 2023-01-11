const Bike = require("../models/bike");

async function createBike(req, res) {
  const bikeParams = req.body;
  const bike = new Bike(bikeParams);

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
    res.status(200).send(bikes);
  } catch (error) {
    res.status(500).send(error);
  }
}

async function updateBike(req, res) {
  const nameBike = req.params.name;
  const params = req.body;

  try {
    const bike = await Bike.findOneAndUpdate({ name: nameBike }, params);
    if (!bike) {
      res.status(400).send({ msg: "Error al buscar bicicleta" });
    } else {
      res.status(200).send({ msg: "Se ha actualizado correcatemnte" });
    }
  } catch (error) {
    res.status(500).send(error);
  }
}

async function deleteBike(req, res) {
  const nameBike = req.params.name;

  try {
    const bike = await Bike.findOneAndDelete({ name: nameBike });
    if (!bike) {
      res.status(400).send({ msg: "No se ha podido eliminar la tarea" });
    } else {
      res.status(200).send({ msg: "Se ha eliminado correctamente" });
    }
  } catch (error) {
    res.status(500).send(error);
  }
}

async function getBikeByName(req, res) {
  const nameBike = req.params.name;
  try {
    const bike = await Bike.find({ name: nameBike });
    if (!bike) {
      res.status(400).send({ msg: "No se ha podido encontrar la bicicleta" });
    } else {
      res.status(200).send(bike);
    }
  } catch (error) {
    res.status(500).send(error);
  }
}

async function getBikeByMark(req, res) {
  const makerBike = req.params.maker;
  try {
    const bike = await Bike.find({ maker: makerBike });
    if (!bike) {
      res.status(400).send({ msg: "No se ha podido encontrar la bicicleta" });
    } else {
      res.status(200).send(bike);
    }
  } catch (error) {
    res.status(500).send(error);
  }
}

module.exports = {
  createBike,
  getBike,
  updateBike,
  deleteBike,
  getBikeByName,
  getBikeByMark,
};
