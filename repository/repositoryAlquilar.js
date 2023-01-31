const Bike = require("../models/bike");

function alquilarBikebyStore(nameStore, nameBike) {
  return Bike.find({});
}

module.exports = {
  alquilarBikebyStore,
};
