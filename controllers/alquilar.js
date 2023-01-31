const alquilarService = require("../domain/alquilar");

function getAlquilarBici(req, res) {
  alquilarService
    .alquilarBici(req.params.store, req.params.bike)
    .then(({ status, message }) => {
      res.status(status).send(message);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
}

module.exports = {
  getAlquilarBici,
};
