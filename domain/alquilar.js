const repository = require("../repository/repositoryAlquilar");

async function alquilarBici(store, bike) {
  try {
    const alquilar = await repository.alquilarBikebyStore(store, bike);
    if (!alquilar) {
      return { status: 400, message: "Bicycle not found for rental" };
    }
    const disponibles = alquilar.filter((b) => b.disponibilidad);
    if (disponibles.length === 0) {
      return { status: 400, message: "Bicycle not available for rental" };
    }
    const [bikeAlquilada] = disponibles;
    bikeAlquilada.disponibilidad = false;
    bikeAlquilada.save();
    return { status: 200, message: bikeAlquilada };
  } catch (error) {
    return { status: 500, message: error.message };
  }
}

async function devolverBici(store, bike) {
  // try {
  //   const devolver = await repository.devolverBikeByStore(store, bike);
  //   if (!devolver) {
  //     return { status: 400, message: "Bicycle not found for return" };
  //   }
  //   const [bikeDevuelta] = devolver;
  //   bikeDevuelta.disponibilidad = true;
  //   return { status: 200, message: devolver };
  // } catch (error) {
  //   return { status: 500, message: error.message };
  // }
  try {
    const alquilar = await repository.devolverBikeByStore(store, bike);
    if (!alquilar) {
      return { status: 400, message: "Bicycle not found for return" };
    }
    const alquiladas = alquilar.filter((b) => !b.disponibilidad);
    if (alquiladas.length === 0) {
      return { status: 400, message: "Bicycle not available for return" };
    }
    const [bikeAlquilada] = alquiladas;
    bikeAlquilada.disponibilidad = true;
    bikeAlquilada.save();
    return { status: 200, message: bikeAlquilada };
  } catch (error) {
    return { status: 500, message: error.message };
  }
}

module.exports = {
  alquilarBici,
  devolverBici,
};
