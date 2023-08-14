const mongoose = require("mongoose");
const Noticia = require("./models/Noticia.js");

const { MONGO_DB_URI } = process.env;
const connectionString =
  "mongodb+srv://cristianf22:amberbalto9@revampnews.yiogwyw.mongodb.net/?retryWrites=true&w=majority";

// conexión a Mongodb
// mongoose
//   .connect(connectionString)
//   .then(() => {
//     console.log("Database connected");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

async function conectar() {
  if (MONGO_DB_URI) {
    await mongoose
      .connect(MONGO_DB_URI)
      .then(() => console.log("connected").catch((e) => console.log(e)));
  }

  winLogger.verbose(`base de dto conectada a ${MONGODB_CNX_STR}`);
}
conectar();

// Crear Datos

const newNoticia = new Noticia({
  title:
    "Seminario de Emprendedores 2023 de la Usina de Ideas - Clase de Análisis Económico y Financiero",
  fecha: "12/08/2023",
  externalLink:
    "https://www.linkedin.com/posts/juan-ignacio-sar%C3%A1chaga-83554537_emprendedores-pymes-costos-activity-7080656856821510144-UhPr?utm_source=share&utm_medium=member_desktop",
  image:
    "https://media.licdn.com/dms/image/D4D22AQED05Ai48uc1A/feedshare-shrink_800/0/1688160146189?e=1694649600&v=beta&t=aoIwO__eYJrUW0vOhBr34T5nbs5Mddx7xP1-DYN3K44",
});

newNoticia
  .save()
  .then((result) => {
    console.log(result);
    mongoose.connection.close();
  })
  .catch((err) => {
    console.log(err);
  });

// Consultar Datos

// Note.find({}).then(result => {
//   console.log(result)
//   mongoose.connection.close()
// })

process.on("uncaughtException", () => {
  mongoose.disconnect();
});
