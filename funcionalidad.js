const productos = [
    { nombre: "Waffle with berries", precio: 6.5, Image: waffle.jpg },
    { nombre: "Vanilla bean cream brulee ", precio: 7 , Image: cream.jpg },
    { nombre: "Macaron mix of five", precio: 8, Image:imagemacarontablet.jpg  },
    { nombre: "Clasicc tiramisu", precio: 5.5, Image: tiramisu.jpg},
    { nombre:"pistachio Baklaba", precio: 4.0, Image:baklaba.jpg},
    { nombre: "Lemon Meringe pie", precio:5, Image: merengue.jgg},
    { nombre: "Brownie", precio:5, Image:brownie.jpg },
    { nombre: "strawberycake", precio:3.5, Image: cake.jpg },
    { nombre: "jabonrey", precio:2, Image: panna.jpg },
  ];


let carrito = [];
let total = 0;

function agregarAlCarrito(precio) {
  carrito.push({ precio, cantidad: 1 });
  total += precio;
  mostrarCarrito();
}

function restarDelCarrito(index, precio) {
  if (carrito[index].cantidad > 1) {
    carrito[index].cantidad -= 1;
    total -= precio;
  } else {
    carrito.splice(index, 1);
    total -= precio;
  }
  mostrarCarrito();
}

function aumentarEnCarrito(index, precio) {
  carrito[index].cantidad += 1;
  total += precio;
  mostrarCarrito();
}

function mostrarProductos() {
  const productosDiv = document.getElementById("productos");
  productosDiv.innerHTML = ""; 

  productos.forEach(producto => {
    const productoDiv = document.createElement("div");
    productoDiv.classList.add("producto");
    
    productoDiv.innerHTML = `
      <h2>${producto.nombre}</h2>
      <p>Precio: $${producto.precio}</p>
      <button onclick="agregarAlCarrito(${producto.precio})">Agregar al carrito</button>
    `;
    
    productosDiv.appendChild(productoDiv);
  });
}


function mostrarCarrito() {
  const carritoDiv = document.getElementById("carrito");
  const totalSpan = document.getElementById("total");

  if (carrito.length === 0) {
    carritoDiv.innerHTML = "<p>No hay productos en el carrito.</p>";
  } else {
    carritoDiv.innerHTML = "<ul>" + carrito.map((item, index) => 
      `<li>${productos[index].nombre} - $${item.precio} x 
        <button class="flecha" onclick="restarDelCarrito(${index}, ${item.precio})">←</button>
        <span class="cantidad">${item.cantidad}</span>
        <button class="flecha" onclick="aumentarEnCarrito(${index}, ${item.precio})">→</button>
      </li>`
    ).join("") + "</ul>";
  }

  totalSpan.textContent = total;
}

// Inicializar la página con los productos
mostrarProductos();