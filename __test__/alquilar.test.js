const request = require("supertest");
const app = require("../app");
const mongoose = require("mongoose");
const Bike = require("../models/bike");
const bikes = require("../db/bike.json");
const Store = require("../models/store");
const stores = require("../db/store/store.json");
require("dotenv").config();

const uri = process.env.MONGO_URI_TEST;

jest.setTimeout(10000);

beforeAll(async () => {
  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  await Store.deleteMany({});
  await Bike.deleteMany({});
  await Store.insertMany(stores);
  await Bike.insertMany(bikes);
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe("Test CRUD", () => {
  test("alquilar bike", async () => {
    const response = await request(app).get("/api/alquilar/Canyon/Bike 1");
    const data = JSON.parse(response.text)[0];
    expect(response.statusCode).toBe(200);
    expect(data.disponibilidad).toBe(false);
  });
});
