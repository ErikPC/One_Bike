const Bike = require("../models/bike");

function getBikeByName(req) {
  const nameBike = req;
  const bike = Bike.find({ name: nameBike });
  return bike;
}

module.exports = {
  getBikeByName,
};
