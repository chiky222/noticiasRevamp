const mongoose = require("mongoose");

const { MONGO_DB_URI } = process.env;

async function conectar() {
  if (MONGO_DB_URI) {
    await mongoose
      .connect(MONGO_DB_URI)
      .then(() => console.log("connected"))
      .catch((e) => console.log(e));
  }
}
conectar();

// Consultar Datos

// Note.find({}).then(result => {
//   console.log(result)
//   mongoose.connection.close()
// })

process.on("uncaughtException", () => {
  mongoose.disconnect();
  console.log("closed");
});
