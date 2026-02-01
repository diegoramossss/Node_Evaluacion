const express = require("express");
const path = require("path");
const app = express();

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, "public")));

// Endpoint raíz (opcional, porque express.static sirve index.html automáticamente)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

// Opcional: definir ruta /about sin .html
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "public/about.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));

