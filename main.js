class Videojuego {
    constructor(id, nombre, genero, valor) {
        this.id = id;
        this.nombre = nombre;
        this.genero = genero;
        this.valor = valor;
    }
}

const juego1 = new Videojuego(0, "resident evil village", "terror", 60);
const juego2 = new Videojuego(1, "gta v", "mundo abierto", 15);
const juego3 = new Videojuego(2, "assassin's creed origins", "mundo abierto", 30);
const juego4 = new Videojuego(3, "the sims 4", "simulación", 15);

const cards = document.querySelectorAll(".card");
const titles = document.querySelectorAll(".title");
const precios = document.querySelectorAll(".precio");
const generos = document.querySelectorAll(".genero");
const buttons = document.querySelectorAll(".button")
const span = document.querySelectorAll("span");


titles[0].textContent = juego1.nombre;
titles[1].textContent = juego2.nombre;
titles[2].textContent = juego3.nombre;
titles[3].textContent = juego4.nombre;

precios[0].textContent = "$" + juego1.valor;
precios[1].textContent = "$" + juego2.valor;
precios[2].textContent = "$" + juego3.valor;
precios[3].textContent = "$" + juego4.valor;

generos[0].textContent = juego1.genero;
generos[1].textContent = juego2.genero;
generos[2].textContent = juego3.genero;
generos[3].textContent = juego4.genero;


let seguir = false

function seleccionarProducto(num) {
    num -= 1;
    cards[num].classList.add("border--red");
}

function pedirDatoUsuario() {
    let entrada = parseInt(prompt("Qué juego desea seleccionar? 1 al 4"));
    if (entrada < 5) {
        return entrada
    } else {
        alert("ingrese un valor válido")
    }
}


seleccionarProducto(pedirDatoUsuario()); 