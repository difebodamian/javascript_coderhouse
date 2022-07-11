
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
/* Preguntarle al usuario si quiere seguir eligiendo productos */ //LISTO
/* Si el usuario quiere, volver a mostrar el catálogo y que elija un nuevo producto */ //LISTO
/* Ese producto agregarlo al carrito y volver a preguntarle al usuario si quiere seguir comprando */ //LISTO
/* Si no quiere seguir comprando, mostrar el carrito */ //LISTO
/* Preguntarle al usuario si quiere eliminar algún producto de su carrito */
/* Si quiere, preguntarle cuál quiere eliminar */
/* Eliminarlo */
/* Mostrarle el carrito de nuevo y preguntarle si quiere eliminar otro producto */
/* Si no quiere, preguntarle si quiere pagar en cuotas */
/* Si quiere, mostrarle las opciones de cuotas (3,6,9,12) agregando intereses según la cantidad de cuotas */
/* Mostrar precio final y carrito */
/* Si no quiere pagar en cuotas mostrar carrrito y precio final */

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
const juego5 = new Videojuego(4, "cyberpunk", "mundo abierto", 70);

const catalogo = [juego1, juego2, juego3, juego4, juego5]

const carrito = [];
let seguirComprando = false;

function mostrarCatalogo() {
    catalogo.forEach((element) => console.log(`Id: ${element.id}, ${element.nombre}, $${element.valor}`));
    alert("En la consola está el catálogo")
}

function pedirDatosAlUsuario() {
    let entrada = parseInt(prompt("Ingrese el id del videojuego que desea agregar a su carrito"));
    switch (entrada) {
        case 0:
            const salida1 = catalogo.find(element => element.nombre === juego1.nombre);
            return agregarCarrito(salida1);
        case 1:
            const salida2 = catalogo.find(element => element.nombre === juego2.nombre);
            return agregarCarrito(salida2);
        case 2:
            const salida3 = catalogo.find(element => element.nombre === juego3.nombre);
            return agregarCarrito(salida3);
        case 3:
            const salida4 = catalogo.find(element => element.nombre === juego4.nombre);
            return agregarCarrito(salida4);
        case 4:
            const salida5 = catalogo.find(element => element.nombre === juego5.nombre);
            return agregarCarrito(salida5);
    }

}

function agregarCarrito(element) {
    carrito.push(element)
}

function mostrarCarrito() {
    console.log(`Su carrito: \n`, carrito)
}

function calcularTotalCarrito() {
    const total = carrito.reduce((acc, juego) => acc += parseInt(juego.valor), 0);
    console.log(`El valor total de su carrito es: $${total}`);
}

mostrarCatalogo()

do {
    pedirDatosAlUsuario();
    seguirComprando = confirm("Quiere seguir comprando?")
} while (seguirComprando);

mostrarCarrito()
calcularTotalCarrito()





