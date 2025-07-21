const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

const productosPath = path.join(__dirname, "../data/productos.json");

router.get("/", (req, res) => {
  const productos = JSON.parse(fs.readFileSync(productosPath));
  res.json(productos);
});

router.get("/:categoria", (req, res) => {
  const { categoria } = req.params;
  const productos = JSON.parse(fs.readFileSync(productosPath));
  const filtrados = productos.filter((p) => p.categoria === categoria);
  res.json(filtrados);
});

module.exports = router;
