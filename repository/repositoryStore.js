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

module.exports = {
  createStore,
  getStores,
};
