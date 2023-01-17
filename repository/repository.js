const Bike = require("../models/bike");

function createBike(req) {
  const bikeParams = req;
  const bike = new Bike(bikeParams);
  return bike.save();
}

function getallBikes() {
  const bike = Bike.find();
  return bike;
}

function getBikeByName(req) {
  const nameBike = req;
  const bike = Bike.find({ name: nameBike });
  return bike;
}

module.exports = {
  getBikeByName,
  createBike,
  getallBikes,
};
