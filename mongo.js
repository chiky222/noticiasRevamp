const mongoose = require("mongoose");

const { MONGODB_URI } = process.env;

async function conectar() {
  if (MONGODB_URI) {
    await mongoose
      .connect(MONGODB_URI)
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
