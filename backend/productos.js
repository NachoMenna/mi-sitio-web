// productos.js (routes)
import express from "express";
import mysql from "mysql2/promise";

const router = express.Router();

// Config de conexión
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "tu_password",
  database: "mi_sitio",
});

// 1. Obtener todos los productos (para "productosEnGeneral")
router.get("/", async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM productos");
  res.json(rows);
});

// 2. Obtener detalles de un producto por código (para "productosDetalle")
router.get("/:codigo", async (req, res) => {
  const { codigo } = req.params;
  const [rows] = await pool.query("SELECT * FROM productos WHERE codigo = ?", [
    codigo,
  ]);
  if (rows.length === 0)
    return res.status(404).json({ error: "Producto no encontrado" });
  res.json(rows[0]);
});

// 3. Obtener lista resumida (para "productos")
router.get("/listado/simple", async (req, res) => {
  const [rows] = await pool.query(
    "SELECT codigo, nombre, marca, precio_usd, precio_con_iva, stock_icon, leyenda_stock FROM productos"
  );
  res.json(rows);
});

export default router;
