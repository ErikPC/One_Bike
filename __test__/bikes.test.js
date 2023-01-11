const request = require("supertest");
const app = require("../app");
const mongoose = require("mongoose");
const Bike = require("../models/bike");
const bikes = require("./bike.json");
const updateBike = require("./updateBike.json");

require("dotenv").config();

const uri = process.env.MONGO_URI_TEST;

describe("Test CRUD", () => {
  jest.setTimeout(10000);
  beforeAll(async () => {
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
    const response = await request(app).post("/api/bike").send({
      year: "2023",
      maker: "yes",
      name: "yes",
      description: "yes",
      msrp: "$999",
      weight: "yes",
      suspension: "yes",
      travel: "yes",
      frame: "yes",
      fork: "yes",
      wheels: "yes",
      drivetrain: "yes",
      groupset: "yes",
      brakes: "yes",
    });
    const data = JSON.parse(response.text).bike;
    expect(data.name).toBe("yes");
    expect(response.statusCode).toBe(200);
  });

  test("get all bikes", async () => {
    const response = await request(app).get("/api/bike");
    expect(response.statusCode).toBe(200);
  });

  test("get one bike", async () => {
    const response = await request(app).get("/api/bike/yes");
    expect(response.statusCode).toBe(200);
  });

  test("delete bike by name", async () => {
    const response = await request(app).delete("/api/bike/yes");
    expect(response.statusCode).toBe(200);
  });

  test("update bike by name", async () => {
    const response = await request(app)
      .put("/api/bike/Bike 3")
      .send(updateBike);
    expect(response.statusCode).toBe(200);
  });
});
