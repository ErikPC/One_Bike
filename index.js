const mongoose = require("mongoose");

require("dotenv").config();
const uri = process.env.MONGO_URI;

const app = require("./app");
const port = process.env.PORT;

mongoose.set("strictQuery", false);

mongoose.connect(uri, (err, res) => {
  try {
    if (err) {
      throw err;
    } else {
      console.log("La conexion a la base de datos ha sido correcta");
      app.listen(port, () => {
        console.log("Servidor funcionando en http://localhost:3000");
      });
    }
  } catch (error) {
    console.error(error);
  }
});
