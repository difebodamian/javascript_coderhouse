
/*Mi proyecto trata de una tienda de videojuegos, donde la idea es que se despliegue un catálogo y se le pregunte
al usuario cuál producto desea comprar, el producto que elija va a ser agregado al carrito. 
Después de cada vez que se agrega un producto, al usuario se le pregunta si quiere seguir eligiendo productos, 
una vez que el usuario no quiera agregar más, se le muestra su carrito.
Después de mostrarle el carrito al usuario hay que preguntar si quiere eliminar algún producto de su carrito
En el caso de que quiera, le preguntamos cuál quiere eliminar, en el caso de que no quiera finaliza el programa
Luego puedo agregar la opción de pagar en cuotas */
/* Primer paso, crear los objetos y pedir los datos al usuario */ //LISTO
/* Pedirle al usuario que elija un producto */ //LISTO
/* Añadir al carrito el producto que el usuario eligió */ //LISTO
/* Preguntarle al usuario si quiere seguir eligiendo productos */
/* Si el usuario quiere, volver a mostrar el catálogo y que elija un nuevo producto */
/* Ese producto agregarlo al carrito y volver a preguntarle al usuario si quiere seguir comprando */
/* Si no quiere seguir comprando, mostrar el carrito */
/* Preguntarle al usuario si quiere eliminar algún producto de su carrito */
/* Si quiere, preguntarle cuál quiere eliminar */
/* Eliminarlo */
/* Mostrarle el carrito de nuevo y preguntarle si quiere eliminar otro producto */
/* Si no quiere, preguntarle si quiere pagar en cuotas */
/* Si quiere, mostrarle las opciones de cuotas (3,6,9,12) agregando intereses según la cantidad de cuotas */
/* Mostrar precio final y carrito */
/* Si no quiere pagar en cuotas mostrar carrrito y precio final */

class Videojuego {
    constructor(nombre, genero, valor) {
        this.nombre = nombre;
        this.genero = genero;
        this.valor = valor;
    }
}

const juego1 = new Videojuego("resident evil village", "terror", 60);
const juego2 = new Videojuego("gta v", "terror", 15);
const juego3 = new Videojuego("assassin's creed origins", "terror", 30);
const juego4 = new Videojuego("the sims 4", "terror", 15);
const juego5 = new Videojuego("cyberpunk", "terror", 70);
const juego6 = new Videojuego("god of war", "terror", 50);
const juego7 = new Videojuego("far cry 5", "terror", 30);
const juego8 = new Videojuego("fallout 4", "terror", 30);

const catalogo = [juego1, juego2, juego3, juego4, juego5, juego6, juego7, juego8]

const carrito = []
let seguir = false;

function mostrarCatalogo() {
    catalogo.map((juego, valor) => console.log(`${juego.nombre} $${juego.valor}`))
}

function pedirDatosAlUsuario() {
    let entrada = prompt("Ingrese el videojuego que desea agregar a su carrito");
    let filtracion = filtrarJuegos(entrada);
    return filtracion;
}

function filtrarJuegos(juegoFilter) {
    const filtrado = catalogo.filter(element => element.nombre.indexOf(juegoFilter) !== -1)
    return filtrado
}

function agregarCarrito(juegoCarrito) {
    carrito.push(juegoCarrito)
}

function mostrarCarrito() {
    console.log(carrito)
}

function calcularTotalCarrito() {
    const total = carrito.reduce((acc, juego) => acc += parseInt(juego.valor), 0);
    console.log(total)
}

mostrarCatalogo()
do {
    agregarCarrito(pedirDatosAlUsuario());
    seguir = confirm("Quiere seguir comprando?")
} while (seguir)

mostrarCarrito()
calcularTotalCarrito()