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

const juego1 = new Videojuego("Resident Evil Village", "Terror", 60);
const juego2 = new Videojuego("GTA V", "Acción - Mundo Abierto", 15);
const juego3 = new Videojuego("Assassin's Creed Origins", "Acción", 30);
const juego4 = new Videojuego("The Sims 4", "Simulación", 5);
const juego5 = new Videojuego("Cyberpunk 2077", "Acción", 70);

function agregarVideojuego(name) {
  carrito.push(name);
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

while (continuar == true) {
  agregar = parseInt(
    prompt(
      `Ingrese el número del juego que quiere agregar a su carrito \n${catalogo.join(
        `\n`
      )}`
    )
  );
  switch (agregar) {
    case 1:
      agregarVideojuego(juego1.nombre);
      break;
    case 2:
      agregarVideojuego(juego2.nombre);
      break;
    case 3:
      agregarVideojuego(juego3.nombre);
      break;
    case 4:
      agregarVideojuego(juego4.nombre);
      break;
    case 5:
      agregarVideojuego(juego5.nombre);
      break;
    default:
      alert("No seleccionaste ningún videojuego");
      break;
  }
  let consulta_continuar = prompt("Desea agregar otro videojuego? s/n");
  if (consulta_continuar == "s") {
    continuar = true;
  } else if (consulta_continuar == "n") {
    alert(`Su carrito \n${carrito.join(`\n`)}`);
    break;
  } else {
    alert("Ingresa un valor válido");
  }
}
//agregar funcionalidad de eliminar un videojuego del carrito
