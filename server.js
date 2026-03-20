const express = require("express");

// chargement des variables d environnement
require("dotenv").config();

// import de la configuration de la base de donne
require("./config/db");

// importation des routes
const userRoutes = require("./routes/routes");

// Create an instance of the Express application
const app = express();

// creation d une port pour le serveur
const PORT = process.env.PORT || 5020;

//middleware pour parser le corps des requetes en json

app.use(express.json());

//route de teste

app.get("/", (req, res) => {
  res.send("hello word");
});

// utilisation des routes
app.use("/api", userRoutes);

// demarrage du serveur
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
