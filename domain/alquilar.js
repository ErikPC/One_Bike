const repository = require("../repository/repositoryAlquilar");

async function alquilarBici(store, bike) {
  try {
    const alquilar = await repository.alquilarBikebyStore(store, bike);
    if (!alquilar) {
      return { status: 400, message: "Bicycle not found for rental" };
    }
    const [bikeAlquilada] = alquilar;
    bikeAlquilada.disponibilidad = false;
    return { status: 200, message: alquilar };
  } catch (error) {
    return { status: 500, message: error.message };
  }
}

module.exports = {
  alquilarBici,
};
