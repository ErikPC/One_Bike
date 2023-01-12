const request = require("supertest");
require("dotenv").config();
const uri = process.env.MONGO_URI_TEST;
const app = require("../app");
const mongoose = require("mongoose");
const Store = require("../models/store");

const store = require("../db/store/store.json");
const updateStore = require("../db/store/updateStore.json");
const storeToPut = require("../db/store/storeToPut.json");

describe("Test CRUD", () => {
  jest.setTimeout(10000);
  beforeAll(async () => {
    mongoose.set("strictQuery", false);
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await Store.insertMany(store);
  });

  afterAll(async () => {
    // Borramos los datos de la base de datos antes de cada prueba
    await Store.deleteMany({});
    // Desconectamos de la base de datos de pruebas
    await mongoose.connection.close();
  });
});
