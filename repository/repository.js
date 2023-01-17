const Bike = require("../models/bike");

function createBike(req) {
  const bikeParams = req;
  const bike = new Bike(bikeParams);
  return bike.save();
}

function getBikeByName(req) {
  const nameBike = req;
  const bike = Bike.find({ name: nameBike });
  return bike;
}

module.exports = {
  getBikeByName,
  createBike,
};
