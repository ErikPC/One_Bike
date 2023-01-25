const Store = require("../models/store");

function createStore(req) {
  const storeParams = req;
  const store = new Store(storeParams);
  return store.save();
}

function getStores() {
  const store = Store.find();
  return store;
}

function getStoreByName(req) {
  const nameStore = req;
  const store = Store.find({ name: nameStore });
  return store;
}

function updateStore(name, body) {
  const nameStore = name;
  const params = body;
  const store = Store.findOneAndUpdate({ name: nameStore }, params);
  return store;
}
module.exports = {
  createStore,
  getStores,
  getStoreByName,
  updateStore,
};
