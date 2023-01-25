const request = require("supertest");
require("dotenv").config();
const uri = process.env.MONGO_URI_TEST;
const app = require("../app");
const mongoose = require("mongoose");
const Store = require("../models/store");

const stores = require("../db/store/store.json");
const storeToPut = require("../db/store/storeToPut.json");
const updateStore = require("../db/store/updateStore.json");

jest.setTimeout(10000);
beforeAll(async () => {
  mongoose.set("strictQuery", false);
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await Store.insertMany(stores);
});

afterAll(async () => {
  // Borramos los datos de la base de datos antes de cada prueba
  await Store.deleteMany({});
  // Desconectamos de la base de datos de pruebas
  await mongoose.connection.close();
});
describe("Test CRUD", () => {
  test("create a store", async () => {
    const response = await request(app).post("/api/store").send(updateStore);
    const data = JSON.parse(response.text).store;
    expect(data.name).toBe("Mi tienda");
    expect(response.statusCode).toBe(200);
  });

  test("get all stores", async () => {
    const response = await request(app).get("/api/store");
    expect(response.statusCode).toBe(200);
  });
  test("get store by name", async () => {
    const response = await request(app).get("/api/store/Mi tienda");
    const data = JSON.parse(response.text);
    expect(data[0].name).toBe("Mi tienda");
    expect(response.statusCode).toBe(200);
  });
  test("update store", async () => {
    const response = await request(app)
      .put("/api/store/Mi tienda")
      .send(storeToPut);
    expect(response.statusCode).toBe(200);
  });
  test("delete store", async () => {
    const response = await request(app).delete("/api/store/Canyon");
    expect(response.statusCode).toBe(200);
    const response2 = await request(app).get("/api/bike/Canyon");
    expect(response2.statusCode).toBe(400);
  });
});
