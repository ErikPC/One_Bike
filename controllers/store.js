const repository = require("../repository/repositoryStore");

async function createStore(req, res) {
  try {
    const storeCreated = await repository.createStore(req.body);

    if (!storeCreated) {
      res.status(400).send({ msg: "No se ha podido crear la Tienda" });
    } else {
      res.status(200).send({ store: storeCreated });
    }
  } catch (error) {
    res.status(500).send(error);
  }
}

async function getStores(req, res) {
  try {
    var stores = await repository.getStores();
    res.status(200).send(stores);
  } catch (error) {
    res.status(500).send(error);
  }
}

async function getStoreByName(req, res) {
  try {
    const store = await repository.getStoreByName(req.params.name);
    if (store.length == 0) {
      res.status(400).send({ msg: "No se ha podido encontrar la Tienda" });
    } else {
      res.status(200).send(store);
    }
  } catch (error) {
    res.status(500).send(error);
  }
}

module.exports = {
  createStore,
  getStores,
  getStoreByName,
};
