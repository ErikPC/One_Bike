const Bike = require("../models/bike");

async function alquilarBikebyStore(store, name) {
  const bike = await Bike.find({
    store,
    name,
  });
  return bike;
}

function devolverBikeByStore(store, name) {
  const bike = Bike.find({ store, name });
  return bike;
}

module.exports = {
  alquilarBikebyStore,
  devolverBikeByStore,
};
