// products.js

const productos = [
  // Fresas
  {
    id: 1,
    nombre: "Fresado de engranajes",
    categoria: "fresado",
    imagen: "files/img_categoria/fresado/fresado.jpg",
    descripcion: "Fresado de Engranajes",
    href: "https://book.yunzhan365.com/bolny/qdiv/mobile/index.html?maxwidthtosmallmode=0&maxheighttosmallmode=0#p=1",
  },
  {
    id: 2,
    nombre: "SM Series",
    categoria: "fresado",
    imagen: "files/img_categoria/fresado/fresado_1.jpg",
    descripcion: "Fresado de ranuras",
  },
  {
    id: 3,
    nombre: "HML Series",
    categoria: "fresado",
    imagen: "files/img_categoria/fresado/fresado_2.jpg",
    descripcion: "Fresado de Alto Avance",
  },

  {
    id: 4,
    nombre: "OMT Endmill Series",
    categoria: "fresado",
    imagen: "files/img_categoria/fresado/fresado_3.jpg",
    descripcion: "Mecanizado de Alta Eficiencia en Titánio",
  },

  {
    id: 4,
    nombre: "End Mills and Drills",
    categoria: "fresado",
    imagen: "files/img_categoria/fresado/fresado_5.jpg",
    descripcion: "Fresado y Perforado",
  },

  // Brocas

  {
    id: 5,
    nombre: "RHD Modular Drills",
    categoria: "perforado",
    imagen: "files/img_categoria/perforado/perforado.jpg",
    descripcion: "Perforado con Mechas Modulares",
  },
  {
    id: 6,
    nombre: "ODP Series",
    categoria: "perforado",
    imagen: "files/img_categoria/perforado/perforado_1.jpg",
    descripcion:
      "Perforado de alta eficiencia - diámetros pequeños - agujeros profundos",
  },

  {
    id: 7,
    nombre: "End Mills and Drills",
    categoria: "perforado",
    imagen: "files/img_categoria/perforado/perforado_2.jpg",
    descripcion: "Perforado y fresado",
  },

  // Torneado
  {
    id: 8,
    nombre: "ISO PCD Turning Insert",
    categoria: "torneado",
    imagen: "files/img_categoria/Torneado/torneado_1.jpg",
    descripcion: "Inserto de Torneado PCD ISO",
  },

  {
    id: 9,
    nombre: "ISO PCBN Turning Inserts",
    categoria: "torneado",
    imagen: "files/img_categoria/Torneado/torneado_2.jpg",
    descripcion: "Inserto de Torneado PCBN ISO",
  },

  {
    id: 10,
    nombre: "Series Product For Turning Exotic Alloy",
    categoria: "torneado",
    imagen: "files/img_categoria/Torneado/torneado_3.jpg",
    descripcion: "Torneado de Aceros Exóticos: OP6105A/OP6115A/OP6125A",
  },

  {
    id: 11,
    nombre: "High-hardness Steel Turning Products Series",
    categoria: "torneado",
    imagen: "files/img_categoria/Torneado/torneado_4.jpg",
    descripcion: "Torneado de Aceros Endurecidos: OPH120",
  },
  {
    id: 12,
    nombre: "TiCN Cermet Inserts",
    categoria: "torneado",
    imagen: "files/img_categoria/Torneado/torneado_5.jpg",
    descripcion: "Insertos de Cermet con Recubrimiento TiCN",
  },

  {
    id: 13,
    nombre: "Small Part Machining Catalog",
    categoria: "torneado",
    imagen: "files/img_categoria/Torneado/torneado_7.jpg",
    descripcion: "Mecanizado de Pequeñas Partes",
  },

  // Líneas Generales
  {
    id: 14,
    nombre: "2023 New Products Brochure",
    categoria: "lineasgenerales",
    imagen: "files/img_categoria/general/perforado_3.jpg",
    descripcion: "Nuevos Lanzamientos Año 2023",
  },
  {
    id: 15,
    nombre: "Cutting Inserts Catalog",
    categoria: "lineasgenerales",
    imagen: "files/img_categoria/general/torneado_6.jpg",
    descripcion: "Catálogo de Insertos",
  },
  {
    id: 16,
    nombre: "Cutting Tools Catalog",
    categoria: "lineasgenerales",
    imagen: "files/img_categoria/general/torneado_8.jpg",
    descripcion: "Catálogo de Herramientas de Corte",
  },

  /* 


  // Portaherramientas
  {
    id: ,
    nombre: "Portaherramientas SCLCR 1212H09",
    categoria: "torneado",
    imagen: "img/productos/portaherramientasSCLCR.jpg",
    descripcion: "Portaherramientas para insertos CCMT.",
  },
  {
    id: ,
    nombre: "Portaherramientas SDNCN 1616H11",
    categoria: "torneado",
    imagen: "img/productos/portaherramientasSDNCN.jpg",
    descripcion: "Portaherramientas para insertos DNMG.",
  },

  // Accesorios
  {
    id: ,
    nombre: "Llave Torx T15",
    categoria: "accesorios",
    imagen: "img/productos/llaveTorxT15.jpg",
    descripcion: "Llave Torx T15 para ajuste de insertos.",
  },
  {
    id: ,
    nombre: "Tornillo para Inserto M2.5",
    categoria: "accesorios",
    imagen: "img/productos/tornilloInserto.jpg",
    descripcion: "Tornillo de repuesto para insertos de torneado.",
  },

  */
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

    // Si el producto tiene href, le pongo un <a> envolviendo el contenido
    const contenido = `
    <div class="producto card h-100 shadow-sm">
      <img src="${prod.imagen}" alt="${prod.nombre}" class="card-img-top" />
      <div class="card-body">
        <h5 class="card-title">${prod.nombre}</h5>
        <p class="card-text">${prod.descripcion}</p>
        ${
          prod.precio
            ? `<p class="text-primary fw-bold">$${prod.precio}</p>`
            : ""
        }
      </div>
    </div>
  `;

    if (prod.href) {
      div.innerHTML = `<a href="${prod.href}" target="_blank" class="text-decoration-none text-dark">${contenido}</a>`;
    } else {
      div.innerHTML = contenido;
    }

    grid.appendChild(div);
  });
}

// Escucha el evento de carga de la página
document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const categoria = params.get("categoria");
  mostrarProductos(categoria);
});
