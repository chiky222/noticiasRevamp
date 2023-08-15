const { model, Schema } = require("mongoose");

const noticiaSchema = new Schema({
  titulo: String,
  fecha: String,
  externalLink: String,
  image: String,
});

noticiaSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Noticia = model("Noticia", noticiaSchema);

module.exports = Noticia;
