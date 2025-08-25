const express = require("express");
const app = express();
const productosRouter = require("./routes/productos");

app.use("/api/productos", productosRouter);

app.listen(3000, () => console.log("Servidor en http://localhost:3000"));
