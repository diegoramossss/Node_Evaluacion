const express = require("express");
const path = require("path");
const fs = require("fs");
console.log("Contenido de public:", fs.readdirSync("public"));

const app = express();

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, "public")));

// Rutas GET
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "public/about.html"));
});

app.get("/back", (req, res) => {
  res.redirect("/");
});


const PORT = process.env.PORT || 3000;
app.get("/test", (req, res) => {
  res.send("SERVIDOR FUNCIONANDO");
});

app.listen(PORT, () => {
  console.log("Servidor funcionando en puerto " + PORT);
});
