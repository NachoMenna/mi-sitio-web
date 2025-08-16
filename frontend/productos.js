// Simulación de productos (puedes reemplazar con fetch a tu API)
const productos = [
  {
    id: 1,
    nombre: "Inserto TNMG160408",
    categoria: "Torneado",
    imagen: "img/torneado1.jpg",
    stock: true,
  },
  {
    id: 2,
    nombre: "Portaherramientas",
    categoria: "Torneado",
    imagen: "img/torneado2.jpg",
    stock: false,
  },
  {
    id: 3,
    nombre: "Fresa Integral",
    categoria: "Fresado",
    imagen: "img/fresado1.jpg",
    stock: true,
  },
  {
    id: 4,
    nombre: "Inserto Fresado",
    categoria: "Fresado",
    imagen: "img/fresado2.jpg",
    stock: false,
  },
  {
    id: 5,
    nombre: "Machuelo",
    categoria: "Roscado",
    imagen: "img/roscado1.jpg",
    stock: true,
  },
];

// Elementos
const grid = document.getElementById("productosGrid");
const categorias = document.querySelectorAll(".categoria");

// Función para mostrar productos
function mostrarProductos(filtroCat = null) {
  grid.innerHTML = "";
  let filtrados = filtroCat
    ? productos.filter((p) => p.categoria === filtroCat)
    : productos;

  filtrados.forEach((prod) => {
    const div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
      <img src="${prod.imagen}" alt="${prod.nombre}">
      <h3>${prod.nombre}</h3>
      <p>${
        prod.stock
          ? '<span style="color:green;">Stock ✔</span>'
          : '<span style="color:red;">Sin stock ✘</span>'
      }</p>
      <button class="btn-ver" data-id="${prod.id}">Ver detalle</button>
    `;
    grid.appendChild(div);
  });

  // Agregar eventos a botones de detalle
  document.querySelectorAll(".btn-ver").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = e.target.getAttribute("data-id");
      window.location.href = `../productoDetalle/productoDetalles.html?id=${id}`;
    });
  });
}

// Evento en categorías
categorias.forEach((cat) => {
  cat.addEventListener("click", (e) => {
    e.preventDefault();
    const categoria = e.target.getAttribute("data-cat");
    mostrarProductos(categoria);
  });
});

// Mostrar todos al inicio
mostrarProductos();
