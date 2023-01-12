const request = require("supertest");
const app = require("../app");
const mongoose = require("mongoose");
const Bike = require("../models/bike");
const bikes = require("../db/bike/bike.json");
const updateBike = require("../db/bike/updateBike.json");
const bikeToPut = require("../db/bike/bikeToPut.json");

require("dotenv").config();

const uri = process.env.MONGO_URI_TEST;

describe("Test CRUD", () => {
  jest.setTimeout(10000);
  beforeAll(async () => {
    mongoose.set("strictQuery", false);
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await Bike.insertMany(bikes);
  });

  afterAll(async () => {
    // Borramos los datos de la base de datos antes de cada prueba
    await Bike.deleteMany({});
    // Desconectamos de la base de datos de pruebas
    await mongoose.connection.close();
  });

  test("create a bike", async () => {
    const response = await request(app).post("/api/bike").send(bikeToPut);
    const data = JSON.parse(response.text).bike;
    expect(data.name).toBe("Fuel EX");
    expect(response.statusCode).toBe(200);
  });

  test("get all bikes", async () => {
    const response = await request(app).get("/api/bike");
    expect(response.statusCode).toBe(200);
  });

  test("get one bike code 200", async () => {
    const response = await request(app).get("/api/bike/Bike 2");
    expect(response.statusCode).toBe(200);
  });

  test("get one bike code 400", async () => {
    const response = await request(app).get("/api/bike/Bike 5");
    expect(response.statusCode).toBe(400);
  });

  test("delete bike by name", async () => {
    const response = await request(app).delete("/api/bike/Bike 1");
    expect(response.statusCode).toBe(200);
  });

  test("update bike by name", async () => {
    const response = await request(app)
      .put("/api/bike/Bike 3")
      .send(updateBike);
    expect(response.statusCode).toBe(200);
  });

  test("get bike by maker code 200", async () => {
    const response = await request(app).get("/api/bike/maker/Trek");
    expect(response.statusCode).toBe(200);
  });

  test("get bike by maker code 400", async () => {
    const response = await request(app).get("/api/bike/maker/Scott");
    expect(response.statusCode).toBe(400);
  });
});
