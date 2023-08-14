import express from "express";
import { v4 as uuidv4 } from "uuid";

import Noticia from "../models/Noticia.js";

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

// all routes in here are starting with /news

// const news = [
//   {
//     id: uuidv4(),
//     title:
//       "Seminario de Emprendedores 2023 de la Usina de Ideas - Clase de Análisis Económico y Financiero",
//     fecha: "12/08/2023",
//     externalLink:
//       "https://www.linkedin.com/posts/juan-ignacio-sar%C3%A1chaga-83554537_emprendedores-pymes-costos-activity-7080656856821510144-UhPr?utm_source=share&utm_medium=member_desktop",
//     image:
//       "https://media.licdn.com/dms/image/D4D22AQED05Ai48uc1A/feedshare-shrink_800/0/1688160146189?e=1694649600&v=beta&t=aoIwO__eYJrUW0vOhBr34T5nbs5Mddx7xP1-DYN3K44",
//   },
// ];

router.get("/", (req, res) => {
  res.send(news);
});

router.post("/", (req, res) => {
  const user = req.body;
  news.push({
    id: uuidv4(),
    ...user,
  });
  res.send(`Se ha agregado la noticia n° ${user.titulo}.`);
});

export default router;
