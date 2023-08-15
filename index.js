const express = require("express");
const bodyParser = require("body-parser");
require("dotenv/config");
require("./mongo.js");
const cors = require("cors");

const newsRoutes = require("./routes/news.js");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.use("/api/news", newsRoutes);

app.get("/api", (req, res) => {
  res.send("Ir a /api/news para obtener las Noticias");
});

app.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});
