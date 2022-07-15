/*
Agregar la funcionalidad de agregar al carrito LISTO
Agregar más juegos
Poder ver el carrito LISTO
Poder ver el precio final del carrito LISTO 
Poder eliminar un juego del carrito si quiero LISTO
Darle la posibilidad al usuario de pagar en cuotas
*/

// OBJETOS

class Videojuego {
    constructor(id, nombre, genero, valor) {
        this.id = id;
        this.nombre = nombre;
        this.genero = genero;
        this.valor = valor;
    }
}

const juego1 = new Videojuego(0, "resident evil village", "terror", 60);
const juego2 = new Videojuego(1, "gta v", "mundo abierto", 20);
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

// VARIABLES Y CONSTANTES

const carrito = [];
let seguir = false;
let seguirEliminando = false;
let pregunta;
let posicion;
let total;
let recargo;

// FUNCIONES

function pagarEnCuotas() {
    pregunta = prompt("Desea pagar en cuotas? s/n");
    if (pregunta == "s") {
        calculoCuotas()
    } else {
        calcularTotalCarrito();
    }
}

function opcionesDeCuotas() {
    return pregunta = parseInt(prompt(`En cuantas cuotas desea pagar? 3 / 6 / 9 / 12 \n 
    Si pagas en 3 cuotas tenés un recargo del  5% \n
    Si pagas en 6 cuotas tenés un recargo del  10% \n
    Si pagas en 9 cuotas tenés un recargo del  15% \n
    Si pagas en 12 cuotas tenés un recargo del  20% \n
    `));
}

function calculoCuotas() {
    pregunta = opcionesDeCuotas();
    total = carrito.reduce((acc, element) => acc += element.valor, 0);
    switch (pregunta) {
        case 3:
            recargo = total * 0.05;
            total += recargo;
            total /= 3;
            return alert(`Vas a pagar 3 cuotas de $${total}`);
        case 6:
            recargo = total * 0.1;
            total += recargo;
            total /= 6;
            return alert(`Vas a pagar 6 cuotas de $${(total)}`);
        case 9:
            recargo = total * 0.15;
            total += recargo;
            total /= 9;
            return alert(`Vas a pagar 9 cuotas de $${total}`);
        case 12:
            recargo = total * 0.2;
            total += recargo;
            total /= 12;
            return alert(`Vas a pagar 12 cuotas de $${total}`);
        default:
            alert("Seleccione un valor válido");
    }
}

function seleccionarProducto(num) {
    num -= 1;
    cards[num].classList.add("border--red");
}

function agregarAlCarrito(element) {
    carrito.push(element)
}

function mostrarCarrito() {
    carrito.map(element => alert(`${element.nombre} está en tu carrito, vale $${element.valor}`));
}

function calcularTotalCarrito() {
    alert("El valor de tu carrito es $" + carrito.reduce((acc, element) => acc += element.valor, 0));
}

function preguntaEliminar() {
    return prompt("Quiere eliminar un juego? s/n");
}

function eliminarDelCarrito(elementPosition) {
    posicion = elementPosition -= 1;
    alert(`Eliminaste ${carrito[posicion].nombre}`)
    carrito.splice((posicion), 1);
}

function pedirDatoUsuario() {
    let entrada = parseInt(prompt("Qué juego desea seleccionar? 1 al 4"));
    if (entrada < 5) {
        switch (entrada) {
            case 1:
                carrito.push(juego1);
                return entrada;
            case 2:
                carrito.push(juego2);
                return entrada;
            case 3:
                carrito.push(juego3);
                return entrada;
            case 4:
                carrito.push(juego4);
                return entrada;
        }
    } else {
        alert("ingrese un valor válido")
    }
}
// FLUJO DEL PROGRAMA
do {
    seleccionarProducto(pedirDatoUsuario());
    seguir = confirm("Quiere seguir eligiendo juegos?")
} while (seguir)

mostrarCarrito()
calcularTotalCarrito()

if (preguntaEliminar() == "s") {
    do {
        pregunta = parseInt(prompt("Ponga el número del juego que desea eliminar, en orden numérico"));
        eliminarDelCarrito(pregunta);
        mostrarCarrito();
        seguirEliminando = confirm("Desea eliminar otro juego?")
    } while (seguirEliminando);
    pagarEnCuotas()
} else {
    mostrarCarrito();
    calcularTotalCarrito();
    pagarEnCuotas();
}
