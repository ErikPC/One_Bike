const mongoose = require("mongoose");

const bikeSchema = new mongoose.Schema({
  year: {
    type: String,
    required: true,
  },
  maker: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  msrp: {
    type: String,
    required: true,
  },
  weight: {
    type: String,
    required: true,
  },
  suspension: {
    type: String,
    required: true,
  },
  travel: {
    type: String,
    required: true,
  },
  frame: {
    type: String,
    required: true,
  },
  fork: {
    type: String,
    required: true,
  },
  wheels: {
    type: String,
    required: true,
  },
  drivetrain: {
    type: String,
    required: true,
  },
  groupset: {
    type: String,
    required: true,
  },
  brakes: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Bike", bikeSchema);
