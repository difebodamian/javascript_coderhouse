// forEach
// forEach Recorre un array, se indica como variable el nombre unitario de cada elemento del array
// Se suele usar singular y plural para ser descriptivos a la hora de nombrar las variables

/*
const juegos = ["gta", "batman", "resident evil", "dying light"];

juegos.forEach((juego, indice) => {
    console.log(`${indice} : ${juego}`);
}
) 
*/

// map
// es igual que forEach solo que map crea un nuevo array

/*
juegos.map((juego, indice) => {
    console.log(`${indice} : ${juego}`);
}
) 


*/
/*

let total = 0;

carrito.forEach((juego) => (total += juego.valor))

console.log(total);
*/

// reduce 
// reduce funciona con un acumulador, que podemos adjuntar a una variable
// sirve por ejemplo para hacer la suma de el precio de productos en un carrito

//recibe 2 valores, primero la función y luego el valor del acumulador
// los 2 valores que recibe reduce son diferenciados por una coma

// let resultado = carrito.reduce((acumulador, producto) => {return acumulador + producto.valor}, 0);

//filter
//filter impone una condición para poder hacer un filtro sobre nuestros productos
//utiliza operadores lógicos para definir la condición
//podemos filtrar productos por precios por ejemplo o por nombres

const carrito = [
    {nombre: "Gta V", valor: 10},
    {nombre: "Batman", valor: 20},
    {nombre: "Fortnite", valor: 5},
    {nombre: "CSGO", valor: 5},
]

//let resultado = carrito.filter((producto) => producto.valor > 5)
//let resultado = carrito.filter((producto) => producto.nombre !== "Fortnite")

//find
//find encuentra un solo objeto que se busque, por lo que va a devolver el primer valor que encuentra

const filtrado = carrito.find((producto) => producto.nombre == "Gta V");

console.log(filtrado);
filtrado

//Objeto Math
//tenemos varios métodos, pi, max, min, random, ceil, floor, round
// ceil redondea para arriba
// floor redondea para abajo

console.log(new Date(2022, 11, 23, 59, 59) + "Casi navidad");


// como recorrer un array con For

// for(i=0;i < array.lenght; i++)

// de esta forma el bucle va a recorrer el array siempre y cuando i sea menor que el lenght del array
// y siempre va a ser de esta manera porque el lenght cuenta un número más que el indice 
//  me quede en min 45 de after de david
/* puedo hacer una función que le solicite datos al usuario, y dentro de esa función puedo poner dos funciones 
con un condicional. por ejemplo si el usuario quiere agregar un producto mediante un condicional llamaré a una función
que agregue productos al carrito. Si, por el contrario, el usuario quiere eliminar un producto llamo a una función que 
elimine productos del carrito */

// function filtrarProducto(productoFilter)
// const filter = productos.filter(producto) => producto.nombre.indexOf(productoFilter) !== -1

/* En este caso el usuario va a ingresar el nombre de un producto, 
donde la variable filter va a ser un filtrado del producto, donde se recorra el array y se busque el nombre del producto
donde producto.nombre.indexOf(productoFilter) significa voy a poder filtrar productos por nombre,
sin necesidad de poner el nombre de manera estricta

Es mejor que hacer producto.nombre === productoFilter 
porque el usuario debe escribir el nombre estricto en el buscador*/


// function pedirDatosAlUsuario() {
//     const productoIngresado = prompt("Ingrese el juego que desea buscar");
//     buscarJuego(productoIngresado);
// }

// function buscarJuego(producto) {
//     const find = catalogo.find(elemento => elemento.nombre === producto)
//     console.log("Encontrado con find: ", find);
// }  

/* En la función pedirDatosAlUsuario() mediante un prompt le pedimos al usuario que ingrese un dato, con ese dato
llamamos a otra función, que es un callback 
En la función buscarJuego() como parámetro va a ingresar el dato que nos dio el usuario, donde con el método
find vamos a buscar en el array catalogo[]. Al método find le ingresamos una función como parámetro
Le ingresamos la función elemento => elemento.nombre === producto.
Donde la función se llama elemento, y la condición será que el nombre del elemento coincida con el producto ingresado */


// function filtrarProducto(productoFilter) {
//     const filtrar = catalogo.filter(elemento => elemento.nombre.indexOf(productoFilter) !== -1);
//     console.log(filtrar);
// }

/* En esta función filtraremos un producto, ingresa como parámetro el dato que nos da el usuario.
Creamos una constante filtrar, donde vamos a filtrar desde el array catalogo [], le ingresamos una función como
parámetro , donde se llamará elemento, donde la condición será que vamos a buscar */

// function quitarProducto() {
//     let nombreExcluido = prompt("Ingrese el producto que quiere quitar");
//     const filterExcluyente = productos.filter(element => element.nombre !== nombreExcluido);
//     console.log("Producto excluido con filter", filterExcluyente);
// }

/* En este caso le pedimos al usuario el producti que quiere quitar, donde en una nueva constante
hacemos productos.filter recorriendo el array, le pasamos una función como parámetro, donde el nombre
del elemento tiene que ser distinto al nombre ingresado por el usuario, finalmente imprimimos en la 
consola el array resultante*/

// metodo some
/* EL método some comprueba si al menos un elemento del
array cumple con la condición implementada por la 
función proporcionada, es una función de orden superior 
Es igual a filter pero en lugar de devolvernos un array
nos devuelve true o false si el producto existe*/

// let existe = productos.some((prod)=>prod.nombre.indexOf("gta")!== -1);
// console.log("Existe el producto con some:" existe);

//some sirve para chequear si está o no está

// MAP
/* 
function mapearProductos() {
    const productosMapeados = productos.map((producto) => producto.nombre);
    console.log("Mapeados por nombre", productosMapeados)
}
*/