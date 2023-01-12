const Store = require("../models/store.js");

async function createStore(req, res) {
  const storeParams = req.body;
  const store = new Bike(storeParams);

  try {
    const storeCreated = await store.save();

    if (!storeCreated) {
      res.status(400).send({ msg: "No se ha podido crear la Tienda" });
    } else {
      res.status(200).send({ store: storeCreated });
    }
  } catch (error) {
    res.status(500).send(error);
  }
}

module.exports = {
  createStore,
};
