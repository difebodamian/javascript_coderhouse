const catalogo = [
  {nombre: "Resident Evil Village", genero: "terror", valor: 60},
  {nombre: "GTA V", genero: "acción - mundo abierto", valor: 15},
  {nombre: "Assassin's Creed Origins", genero: "acción - mundo abierto", valor: 30},
  {nombre: "The Sims 4", genero: "simulación", valor: 5},
  {nombre: "Cyberpunk 2077", genero: "fps - mundo abierto", valor: 70}
]

function mostrarCatalogo() {
  let resultado = catalogo.forEach((producto, indice) => `${indice}: ${producto}`)
  return resultado;
}

function agregarVideojuego(name) {
  carrito.push(name);
}

function mostrarCarrito() {
  `${carrito.join(`\n`)}`;
}

function eliminarVideojuego(pos) {
  pos -= 1;
  carrito.splice(pos, 1);
}
let carrito = [];
let continuar = true;
let agregar;
let consultaEliminar;
// Un ciclo que se repite siempre que el usuario quiera seguir eligiendo juegos
while (continuar == true) {
  mostrarCatalogo()
  agregar = prompt(`Ingrese la inicial del juego que quiere agregar a su carrito \n${mostrarCatalogo()}`);
  switch (agregar) {
    case "r":
      agregarVideojuego(juego1.nombre);
      break;
    case "g":
      agregarVideojuego(juego2.nombre);
      break;
    case "a":
      agregarVideojuego(juego3.nombre);
      break;
    case "t":
      agregarVideojuego(juego4.nombre);
      break;
    case "c":
      agregarVideojuego(juego5.nombre);
      break;
    default:
      alert("No seleccionaste ningún videojuego");
      break;
  }
  //Condicional para definir si el usuario quiere agregar otro videojuego
  let consultaContinuar = prompt("Desea agregar otro videojuego? s/n");
  if (consultaContinuar == "s") {
    continuar = true;
  } else if (consultaContinuar == "n") {
    mostrarCarrito();
    break;
  } else {
    alert("Ingresa un valor válido");
  }
}
// Eliminar un juego del carrito
consultaEliminar = prompt(`Quiere eliminar un elemento de su carrito? s/n\n${carrito.join(`\n`)}`);
if (consultaEliminar == "s") {
  let pos = parseInt(prompt(`Escriba la posición del elemento que quiere eliminar \n${carrito.join(`\n`)}`));
  eliminarVideojuego(pos);
  alert(carrito.join(`\n`));
} else if (consultaEliminar == "n") {
  alert(`Su carrito: \n${carrito.join(`\n`)}`);
}
