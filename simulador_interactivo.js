let precio_1 = 50;
let precio_2 = 100;
let precio_3 = 75;
let precio_4 = 30;
let carrito = "";
let precioCarrito = 0;
let continuar;

let lista = `Producto 1: $${precio_1}
Producto 2: $${precio_2}
Producto 3: $${precio_3}
Producto 4: $${precio_4}`;

function mostrarLista() {
    let solicitud = parseInt(prompt(`Elije un producto \n` + lista));
    switch (solicitud) {
        case 1: 
        alert("Elegiste el producto 1");
        carrito += "Producto 1, ";
        precioCarrito += precio_1;
            break;
        case 2: 
        alert("Elegiste el producto 2");
        carrito += "Producto 2, ";
        precioCarrito += precio_2;
        break;
        case 3: 
        alert("Elegiste el producto 3");
        carrito += "Producto 3, ";
        precioCarrito += precio_3;
        break;
        case 4: 
        alert("Elegiste el producto 4");
        carrito += "Producto 4, ";
        precioCarrito += precio_4;
        break;
        default:
        alert("No seleccionaste ningún producto")
            break;
    }
}
let i = 0
while (i < 5) {
    if (carrito == false) {
        alert("Puedes elegir un máximo de 5 productos");
        mostrarLista();
    } else {
        continuar = prompt("Quiere seguir comprando? (s/n)");
        if (continuar == "s") {
            mostrarLista();
        } else if (continuar == "n") {
            alert(`Seleccionó estos productos \n ${carrito}, su valor es ${precioCarrito}`);
            break;
        } else {
            alert("Ingrese una respuesta válida")
        }
    }
    i++;
    if (i == 5) {
        alert(`Seleccionó estos productos \n ${carrito}, su valor es ${precioCarrito}`);
    }
} 
