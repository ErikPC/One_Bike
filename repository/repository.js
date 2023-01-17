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
function updateBike(name, body) {
  const nameBike = name;
  const params = body;
  const bike = Bike.findOneAndUpdate({ name: nameBike }, params);
  return bike;
}

function deleteBike(req) {
  const nameBike = req;
  const bike = Bike.findOneAndDelete({ name: nameBike });
  return bike;
}

function getBikeByName(req) {
  const nameBike = req;
  const bike = Bike.find({ name: nameBike });
  return bike;
}

function getBikeByMark(req) {
  const markBike = req;
  const bike = Bike.find({ maker: markBike });
  return bike;
}

module.exports = {
  getBikeByName,
  createBike,
  updateBike,
  deleteBike,
  getallBikes,
  getBikeByMark,
};
