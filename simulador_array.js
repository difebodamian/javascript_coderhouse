class Videojuego {
  constructor(nombre, genero, precio) {
    this.nombre = nombre;
    this.genero = genero;
    this.precio = precio;
  }
  mostrarInfo() {
    this.info = `El nombre del juego es ${this.nombre}, su género es ${this.genero} y su valor es $${this.precio}`;
  }
}
//Creación de objetos
const juego1 = new Videojuego("Resident Evil Village", "Terror", 60);
const juego2 = new Videojuego("GTA V", "Acción - Mundo Abierto", 15);
const juego3 = new Videojuego("Assassin's Creed Origins", "Acción", 30);
const juego4 = new Videojuego("The Sims 4", "Simulación", 5);
const juego5 = new Videojuego("Cyberpunk 2077", "Acción", 70);

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
let catalogo = [
  juego1.nombre,
  juego2.nombre,
  juego3.nombre,
  juego4.nombre,
  juego5.nombre,
];

let carrito = [];
let continuar = true;
let agregar;
let consultaEliminar;
// Un ciclo que se repite siempre que el usuario quiera seguir eligiendo juegos
while (continuar == true) {
  agregar = prompt(`Ingrese la inicial del juego que quiere agregar a su carrito \n${catalogo.join(`\n`)}`);
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
