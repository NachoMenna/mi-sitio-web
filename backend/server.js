const express = require("express");
const cors = require("cors");
const productosRoutes = require("./routes/productos");
const authRoutes = require("./routes/auth");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Rutas
app.use("/api/productos", productosRoutes);
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
