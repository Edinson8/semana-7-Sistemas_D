let productos = [
  { nombre: "Camiseta", precio: 15.99, descripcion: "Camiseta de algodón 100%" },
  { nombre: "Pantalón", precio: 29.99, descripcion: "Pantalón de mezclilla azul" },
  { nombre: "Zapatos", precio: 49.99, descripcion: "Zapatos deportivos unisex" }
];

const cuerpoTabla = document.querySelector("#tabla-productos tbody");

function renderizarProductos() {
  cuerpoTabla.innerHTML = "";

  productos.forEach(producto => {
    const fila = document.createElement("tr");

    fila.innerHTML = `
      <td>${producto.nombre}</td>
      <td>$${producto.precio.toFixed(2)}</td>
      <td>${producto.descripcion}</td>
    `;

    cuerpoTabla.appendChild(fila);
  });
}

document.getElementById("btn-agregar").addEventListener("click", () => {
  const nuevoProducto = {
    nombre: "Nuevo Producto",
    precio: 9.99,
    descripcion: "Producto agregado manualmente"
  };
  productos.push(nuevoProducto);
  renderizarProductos();
});

window.onload = renderizarProductos;

