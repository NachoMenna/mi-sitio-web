import express from "express";
import cors from "cors";

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Simulación de base de datos
let productos = [
  {
    id: 123,
    nombre: "Fresa de Carburo Sólido 6mm",
    codigo: "FC-6MM-123",
    marca: "Walter Tools",
    logo: "https://tuservidor.com/uploads/marcas/walter.png",
    imagenes: [
      "https://tuservidor.com/uploads/productos/fresa1.jpg",
      "https://tuservidor.com/uploads/productos/fresa2.jpg",
    ],
    precioSinIVA: 1000.0,
    iva: 21,
    precioIVA: 210.0,
    precioFinal: 1210.0,
    stock: true,
    descripcion: "Fresa de carburo sólido para corte de acero y aluminio.",
  },
];

// Obtener producto por ID
app.get("/api/productos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const producto = productos.find((p) => p.id === id);
  if (!producto) {
    return res.status(404).json({ error: "Producto no encontrado" });
  }
  res.json(producto);
});

// Endpoint para agregar productos (simulación de formulario)
app.post("/api/productos", (req, res) => {
  const {
    nombre,
    codigo,
    marca,
    logo,
    imagenes,
    precioSinIVA,
    iva,
    stock,
    descripcion,
  } = req.body;

  const precioIVA = precioSinIVA * (iva / 100);
  const precioFinal = precioSinIVA + precioIVA;

  const nuevoProducto = {
    id: Date.now(),
    nombre,
    codigo,
    marca,
    logo,
    imagenes,
    precioSinIVA,
    iva,
    precioIVA,
    precioFinal,
    stock,
    descripcion,
  };

  productos.push(nuevoProducto);
  res.status(201).json(nuevoProducto);
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor API escuchando en http://localhost:${PORT}`);
});
