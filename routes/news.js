const express = require("express");
const Noticia = require("../models/Noticia.js");
const mongoose = require("mongoose");

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

// all routes in here are starting with /news

router.get("/", (req, res) => {
  const model = Noticia.find({}).then((data) => console.log(data));
  mongoose.disconnect();
  console.log("closed");
});

router.post("/", (req, res) => {
  const user = new Noticia({ ...req.body });
  user
    .save()
    .then((data) => console.log("se guardó bien"))
    .catch((err) => console.log(err));

  res.send(`Se ha agregado la noticia n° ${user.titulo}.`);
});

module.exports = router;
