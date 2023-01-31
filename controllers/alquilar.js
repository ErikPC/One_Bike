const alquilarService = require("../domain/alquilar");

function getAlquilarBici(req, res) {
  alquilarService
    .alquilarBici(req.params.store, req.params.bike)
    .then((result) => {
      res.status(result.status).send(result.message);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
}

module.exports = {
  getAlquilarBici,
};
