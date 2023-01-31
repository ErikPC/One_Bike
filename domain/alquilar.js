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

async function devolverBici(store, bike) {
  try {
    const devolver = await repository.devolverBikeByStore(store, bike);
    if (!devolver) {
      return { status: 400, message: "Bicycle not found for return" };
    }
    const [bikeDevuelta] = devolver;
    bikeDevuelta.disponibilidad = true;
    return { status: 200, message: devolver };
  } catch (error) {
    return { status: 500, message: error.message };
  }
}

module.exports = {
  alquilarBici,
  devolverBici,
};
