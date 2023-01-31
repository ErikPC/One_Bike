const Bike = require("../models/bike");

function alquilarBikebyStore(nameStore, nameBike) {
  const bike = Bike.find({ nameStore, nameBike, disponibilidad: true });
  Bike.updateOne(
    { nameStore, nameBike, disponibilidad: true },
    { disponibilidad: false }
  );
  return bike;
}

module.exports = {
  alquilarBikebyStore,
};
