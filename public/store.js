function goToStore() {
  window.location.href = "/store";
}

function alquilar(store, bike) {
  fetch("/alquilar/" + store + "/" + bike);
}

function devolver(store, bike) {
  if (confirm("¿Estás seguro de que deseas devolver la bicicleta?")) {
    fetch("api/devolver/" + store + "/" + bike).then((res) => {
      const url = `bike?bike=${bike}&store=${store}`;
      window.location.href = url;
    });
  }
}

function confirmar(store, bike) {
  if (confirm("¿Estás seguro de que deseas alquilar la bicicleta?")) {
    fetch("api/alquilar/" + store + "/" + bike).then((res) => {
      const url = `bike?bike=${bike}&store=${store}`;
      window.location.href = url;
    });
  }
}
