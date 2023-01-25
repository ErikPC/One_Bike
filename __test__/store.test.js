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
});
