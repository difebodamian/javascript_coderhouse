// hacer este ejercicio con objetos

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

const juego1 = new Videojuego("GTA V", "Acción", 500);
const juego2 = new Videojuego("God of War", "Aventura", 1500);
const juego3 = new Videojuego("Fortnite", "Battle Royale", 0);
const juego4 = new Videojuego("Call of Duty Vanguard", "FPS", 1000);

juego1.resumen = `Grand Theft Auto V (abreviado como GTA V o GTA 5) es un videojuego de acción-aventura de mundo abierto 
desarrollado por el estudio Rockstar North y distribuido por Rockstar Games. Fue lanzado el 17 de septiembre de 2013 para
las consolas PlayStation 3 y Xbox 360`;
juego2.resumen = `God of War es un videojuego de acción-aventura desarrollado por SCE Santa Monica Studio y publicado por
Sony Interactive Entertainment. Su lanzamiento se produjo el 20 de abril de 2018 como un título exclusivo para la consola
PlayStation 4.1​ Posteriormente, fue lanzado en Microsoft Windows el 14 de enero de 2022.2​ Se trata de la octava entrega 
de la serie de God of War, cronológicamente, y la secuela de God of War III. La historia se centra en la mitología nórdica
y Kratos regresa como el protagonista principal.`;
juego3.resumen = `Fortnite Battle Royale es un videojuego multiplataforma gratuito perteneciente al género battle royale
desarrollado y publicado por Epic Games. Fue lanzado como un título con acceso anticipado para Microsoft Windows, macOS,
PlayStation 4, Xbox One el 26 de septiembre de 2017, seguido de iOS, Android y Nintendo Switch al año siguiente.
Así mismo, en 2020, fue lanzado para las consolas de nueva generación, PlayStation 5 y Xbox Series X|S. Es un spin-off
del modo de juego Fortnite: Salvar el Mundo y un cooperativo juego de supervivencia con elementos de construcción.`;
juego4.resumen = `Call of Duty: Vanguard es un videojuego de disparos en primera persona desarrollado por Sledgehammer Games
y distribuido por Activision.1​ Es el decimoctavo título de la franquicia Call of Duty. Fue lanzado internacionalmente el 5 de 
noviembre de 2021 en PlayStation 4, PlayStation 5, Xbox One, Xbox Series X/S y Microsoft Windows.2​ La campaña se desarrolla 
durante la Segunda Guerra Mundial y se centra en un equipo de fuerzas especiales compuesto por miembros de las Naciones Aliadas.`;

let lista = `
1) Nombre: ${juego1.nombre} \n Género: ${juego1.genero} \n Precio: $${juego1.precio}
2) Nombre: ${juego2.nombre} \n Género: ${juego1.genero} \n Precio: $${juego2.precio}
3) Nombre: ${juego3.nombre} \n Género: ${juego1.genero} \n Precio: $${juego3.precio}
4) Nombre: ${juego4.nombre} \n Género: ${juego1.genero} \n Precio: $${juego4.precio}
`;
let listaNombres = `
1) ${juego1.nombre} 
2) ${juego2.nombre}
3) ${juego3.nombre}
4) ${juego4.nombre}
5) No
`;

let carrito = [];
let precioCarrito = 0;
let continuar;
let continuarLista;
let i = 0;
let i_2 = 0;

function mostrarResumen() {
  let pregunta = parseInt(
    prompt(
      `Quieres ver la información de uno de estos videojuegos? \n ${listaNombres}`
    )
  );
  switch (pregunta) {
    case 5:
      break;
    case 1:
      alert(juego1.resumen);
      break;
    case 2:
      alert(juego2.resumen);
      break;
    case 3:
      alert(juego3.resumen);
      break;
    case 4:
      alert(juego4.resumen);
      break;
    default:
      alert("No seleccionaste ningún videojuego");
      break;
  }
}
function mostrarLista() {
  let solicitud = parseInt(prompt(`Elije un videojuego \n` + lista));
  switch (solicitud) {
    case 1:
      alert(`Elegiste ${juego1.nombre}`);
      carrito.push(juego1.nombre);
      precioCarrito += juego1.precio;
      break;
    case 2:
      alert(`Elegiste ${juego2.nombre}`);
      carrito.push(juego2.nombre);
      precioCarrito += juego2.precio;
      break;
    case 3:
      alert(`Elegiste ${juego3.nombre}`);
      carrito.push(juego3.nombre);
      precioCarrito += juego3.precio;
      break;
    case 4:
      alert(`Elegiste ${juego4.nombre}`);
      carrito.push(juego4.nombre);
      precioCarrito += juego4.precio;
      break;
    default:
      alert("No seleccionaste ningún producto");
      break;
  }
}

while (i < 5) {
  if (carrito == false) {
    alert("Puedes elegir un máximo de 5 juegos");
    while (i_2 < 5) {
      mostrarResumen();
      continuarLista = prompt("Quiere ver un resumen de otro videojuego? s/n");
      if (continuarLista == "s") {
        i_2++;
      } else if (continuarLista == "n") {
        break;
      }
    }
    mostrarLista();
  } else {
    continuar = prompt("Quiere seguir comprando? (s/n)");
    if (continuar == "s") {
      mostrarLista();
    } else if (continuar == "n") {
      alert(
        `Seleccionó estos productos \n ${carrito.join(
          ", "
        )} \nSu valor es $${precioCarrito}`
      );
      break;
    } else {
      alert("Ingrese una respuesta válida");
    }
  }
  i++;
  if (i == 5) {
    alert(
      `Seleccionó estos productos\n${carrito.join(
        ", "
      )}\nSu valor es $${precioCarrito}`
    );
  }
}
alert(`Su carrito es: ${carrito.join(", ")}\n Desea eliminar un producto?`);
