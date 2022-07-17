/*
Agregar la funcionalidad de agregar al carrito
Poder ver el carrito 
Poder ver el precio final del carrito  
Poder eliminar un game del carrito si quiero 
Darle la posibilidad al usuario de pagar en cuotas
Agregar la funcionalidad de que cuando aprete el botón de "add to cart" se agregue al array del carrito
Que cuando agregue un objeto al carrito este se muestre en pantalla
Agregar una cruz roja para eliminar game (en el carrito)
Que cuando toque esa cruz roja el game se elimine del carrito
Agregar un botón en el nav para cambiar los precios de los games a dólares o pesos
Que se sumen los totales de los precios al carrito
Mostrar el price final del carrito
*/

//Agregar funcionalidad de agregar el precio en pesos

// OBJETOS

class Game {
    constructor(id, name, category, price) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.price = price;
    }
}

const game1 = new Game(0, "Resident Evil Village", "Horror", 4299);
const game2 = new Game(1, "Gta V", "Action - Open World", 1199);
const game3 = new Game(2, "Assasin's Creed Origins", "Action - Open World", 5299);
const game4 = new Game(3, "The Sims 4", "Simulation", 3599);
const game5 = new Game(4, "Battlefield 2042", "FPS - Action", 111899)
const game6 = new Game(5, "Elden Ring", "Open World - Souls Style", 6899)
const game7 = new Game(6, "Dying Light 2: Stay Human", "Zombies - Action", 5199)
const game8 = new Game(7, "The Quarry", "Drama", 5999);


const buttons = document.querySelectorAll(".button");
const main = document.querySelector("#main");
const games = document.querySelector(".games");
const formContainer = document.querySelector(".form-container");
const cart = document.querySelector(".cart")

const nav = document.querySelector("#nav");
const div = document.createElement("div");
const div2 = document.createElement("div");

buttons[0].addEventListener("click", (e) => {
    newGameToCart(game1)
})
buttons[1].addEventListener("click", (e) => {
    addGame(game2)
})
buttons[2].addEventListener("click", (e) => {
    addGame(game3)
})
buttons[3].addEventListener("click", (e) => {
    addGame(game4)
})
buttons[4].addEventListener("click", (e) => {
    addGame(game5)
})
buttons[5].addEventListener("click", (e) => {
    addGame(game6)
})
buttons[6].addEventListener("click", (e) => {
    addGame(game7)
})
buttons[7].addEventListener("click", (e) => {
    newGameToCart(game8)
})


function cartAppears() {
    cart.classList.add("cart-style")
}
cartAppears();



function createNewDiv() {
    return newDiv = cart.appendChild(div);
}

function newDivClass() {
    newDiv.classList.add(game1.id)
}

function newDivElements(element) {
    const name = document.createElement("h6");
    const price = document.createElement("span");
    const category = document.createElement("span");
    const id = document.createElement("span");
    element.appendChild(name);
    name.classList.add("name")
    element.appendChild(price);
    price.classList.add("price")
    element.appendChild(category);
    category.classList.add("category")
    element.appendChild(id);
    id.classList.add("id")
}

function addGame(element) {
    let name = document.querySelector(".name");
    name.innerText = element.name;
    let price = document.querySelector(".price");
    price.innerText = element.price;
    let category = document.querySelector(".category");
    category.innerText = element.category;
    let id = document.querySelector(".id");
    id.innerText = element.id;
}
function newGameToCart(element) {
    let gameDiv = createNewDiv();
    newDivClass(gameDiv)
    newDivElements(gameDiv)
    addGame(element)
}



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
    total = carrito.reduce((acc, element) => acc += element.price, 0);
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
            alert("Seleccione un price válido");
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
    carrito.map(element => alert(`${element.name} está en tu carrito, vale $${element.price}`));
}

function calcularTotalCarrito() {
    alert("El price de tu carrito es $" + carrito.reduce((acc, element) => acc += element.price, 0));
}

function preguntaEliminar() {
    return prompt("Quiere eliminar un game? s/n");
}

function eliminarDelCarrito(elementPosition) {
    posicion = elementPosition -= 1;
    alert(`Eliminaste ${carrito[posicion].name}`)
    carrito.splice((posicion), 1);
}

function pedirDatoUsuario() {
    let entrada = parseInt(prompt("Qué game desea seleccionar? 1 al 4"));
    if (entrada < 5) {
        switch (entrada) {
            case 1:
                carrito.push(game1);
                return entrada;
            case 2:
                carrito.push(game2);
                return entrada;
            case 3:
                carrito.push(game3);
                return entrada;
            case 4:
                carrito.push(game4);
                return entrada;
        }
    } else {
        alert("ingrese un price válido")
    }
}
// FLUJO DEL PROGRAMA
// do {
//     seleccionarProducto(pedirDatoUsuario());
//     seguir = confirm("Quiere seguir eligiendo games?")
// } while (seguir)

// mostrarCarrito()
// calcularTotalCarrito()

// if (preguntaEliminar() == "s") {
//     do {
//         pregunta = parseInt(prompt("Ponga el número del game que desea eliminar, en orden numérico"));
//         eliminarDelCarrito(pregunta);
//         mostrarCarrito();
//         seguirEliminando = confirm("Desea eliminar otro game?")
//     } while (seguirEliminando);
//     pagarEnCuotas()
// } else {
//     mostrarCarrito();
//     calcularTotalCarrito();
//     pagarEnCuotas();
// }
