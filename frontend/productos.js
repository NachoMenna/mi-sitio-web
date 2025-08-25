// products.js

const productos = [
  // Fresas
  {
    id: 1,
    nombre: "Fresa de Carburo 6mm",
    categoria: "fresas",
    precio: 2500,
    imagen: "img/productos/fresa6mm.jpg",
    descripcion: "Fresa de carburo sólido para mecanizado de acero inoxidable.",
    href: "./productoDetalle/productoDetalles.html",
  },
  {
    id: 2,
    nombre: "Fresa de Carburo 12mm",
    categoria: "fresas",
    precio: 4200,
    imagen: "img/productos/fresa12mm.jpg",
    descripcion: "Fresa de carburo sólido de 4 labios para mecanizado general.",
  },
  {
    id: 3,
    nombre: "Fresa Esférica 8mm",
    categoria: "fresas",
    precio: 3800,
    imagen: "img/productos/fresaEsferica8mm.jpg",
    descripcion: "Fresa esférica para moldes y matricería.",
  },

  // Brocas
  {
    id: 4,
    nombre: "Broca HSS 5mm",
    categoria: "brocas",
    precio: 900,
    imagen: "img/productos/broca5mm.jpg",
    descripcion: "Broca de acero rápido (HSS) para uso general.",
  },
  {
    id: 5,
    nombre: "Broca HSS 10mm",
    categoria: "brocas",
    precio: 1500,
    imagen: "img/productos/broca10mm.jpg",
    descripcion: "Broca de acero rápido (HSS) para mecanizado en acero.",
  },
  {
    id: 6,
    nombre: "Broca de Carburo 6mm",
    categoria: "brocas",
    precio: 3200,
    imagen: "img/productos/brocaCarburo6mm.jpg",
    descripcion: "Broca de carburo sólido recubierta TiAlN.",
  },

  // Torneado
  {
    id: 7,
    nombre: "Inserto CNMG120404",
    categoria: "torneado",
    precio: 750,
    imagen: "img/productos/insertoCNMG.jpg",
    descripcion: "Inserto CNMG para torneado de acero.",
  },
  {
    id: 8,
    nombre: "Inserto DNMG150404",
    categoria: "torneado",
    precio: 820,
    imagen: "img/productos/insertoDNMG.jpg",
    descripcion: "Inserto DNMG para torneado de acero inoxidable.",
  },
  {
    id: 9,
    nombre: "Inserto SNMG120404",
    categoria: "torneado",
    precio: 790,
    imagen: "img/productos/insertoSNMG.jpg",
    descripcion: "Inserto SNMG para desbaste en fundición.",
  },

  // Sierras
  {
    id: 10,
    nombre: "Sierra Bimetálica 14TPI",
    categoria: "sierras",
    precio: 5500,
    imagen: "img/productos/sierra14tpi.jpg",
    descripcion: "Sierra bimetálica de 300mm con 14 dientes por pulgada.",
  },
  {
    id: 11,
    nombre: "Sierra Bimetálica 18TPI",
    categoria: "sierras",
    precio: 5800,
    imagen: "img/productos/sierra18tpi.jpg",
    descripcion: "Sierra bimetálica de 300mm con 18 dientes por pulgada.",
  },

  // Portaherramientas
  {
    id: 12,
    nombre: "Portaherramientas SCLCR 1212H09",
    categoria: "torneado",
    precio: 9500,
    imagen: "img/productos/portaherramientasSCLCR.jpg",
    descripcion: "Portaherramientas para insertos CCMT.",
  },
  {
    id: 13,
    nombre: "Portaherramientas SDNCN 1616H11",
    categoria: "torneado",
    precio: 11200,
    imagen: "img/productos/portaherramientasSDNCN.jpg",
    descripcion: "Portaherramientas para insertos DNMG.",
  },

  // Accesorios
  {
    id: 14,
    nombre: "Llave Torx T15",
    categoria: "accesorios",
    precio: 500,
    imagen: "img/productos/llaveTorxT15.jpg",
    descripcion: "Llave Torx T15 para ajuste de insertos.",
  },
  {
    id: 15,
    nombre: "Tornillo para Inserto M2.5",
    categoria: "accesorios",
    precio: 150,
    imagen: "img/productos/tornilloInserto.jpg",
    descripcion: "Tornillo de repuesto para insertos de torneado.",
  },
];

// Función para mostrar productos
function mostrarProductos(filtroCat = null) {
  const grid = document.getElementById("productos-grid");
  if (!grid) {
    console.error("No se encontró el elemento con el ID 'productos-grid'.");
    return;
  }

  grid.innerHTML = "";

  // Filtra los productos. El filtro lo pasamos a minúsculas para que coincida con el array.
  let filtrados = filtroCat
    ? productos.filter((p) => p.categoria === filtroCat.toLowerCase())
    : productos;

  if (filtrados.length === 0) {
    grid.innerHTML = "<p>No hay productos en esta categoría.</p>";
    return;
  }

  filtrados.forEach((prod) => {
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
      <div class="producto card h-100 shadow-sm">
        <img src="${prod.imagen}" alt="${prod.nombre}" class="card-img-top" />
        <div class="card-body">
          <h5 class="card-title">${prod.nombre}</h5>
          <p class="card-text">${prod.descripcion}</p>
          <p class="text-primary fw-bold">$${prod.precio}</p>
        </div>
      </div>
    `;
    grid.appendChild(div);
  });
}

// Escucha el evento de carga de la página
document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const categoria = params.get("categoria");
  mostrarProductos(categoria);
});
