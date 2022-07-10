
    /*Mi proyecto trata de una tienda de videojuegos, donde la idea es que se despliegue un catálogo y se le pregunte
    al usuario cuál producto desea comprar, el producto que elija va a ser agregado al carrito. 
    Después de cada vez que se agrega un producto, al usuario se le pregunta si quiere seguir eligiendo productos, 
    una vez que el usuario no quiera agregar más, se le muestra su carrito.
    Después de mostrarle el carrito al usuario hay que preguntar si quiere eliminar algún producto de su carrito
    En el caso de que quiera, le preguntamos cuál quiere eliminar, en el caso de que no quiera finaliza el programa
    Luego puedo agregar la opción de pagar en cuotas */
/* Primer paso, crear los objetos y pedir los datos al usuario */
/* Pedirle al usuario que elija un producto */
/* Añadir al carrito el producto que el usuario eligió */
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

const catalogo = [
    {nombre: "resident evil village", genero: "terror", valor: 60},
    {nombre: "gta v", genero: "acción - mundo abierto", valor: 15},
    {nombre: "assassin's creed origins", genero: "acción - mundo abierto", valor: 30},
    {nombre: "the sims 4", genero: "simulación", valor: 5},
    {nombre: "cyberpunk", genero: "fps - mundo abierto", valor: 70},
    {nombre: "god of war", genero: "acción", valor: 60},
    {nombre: "far cry 5", genero: "fps - mundo abierto", valor: 40},
    {nombre: "fallout 4", genero: "rol - mundo abierto", valor: 25}
]


let carrito;

function mostrarCatalogo() {
    catalogo.forEach((juego, indice) => console.log(`${indice}: ${juego.nombre}. Valor: $${juego.valor} \n`));
    alert("En la consola tenés el catálogo")
} 

function mostrarCarrito() {}

function agregarAlCarrito () {}

function eliminarDelCarrito () {}

function pedirDatosAlUsuario() {
    const productoIngresado = prompt("Ingrese el juego que desea buscar", mostrarCatalogo());
    console.log(filtrarProducto(productoIngresado));
}

function filtrarProducto(productoFilter) {
    const filtrar = catalogo.filter(elemento => elemento.nombre.indexOf(productoFilter) !== -1);
    return filtrar
}

mostrarCatalogo()
pedirDatosAlUsuario()
