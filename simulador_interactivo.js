// hacer este ejercicio con objetos

class Videojuego {
    constructor (nombre, genero, precio) {
        this.nombre = nombre;
        this.genero = genero;
        this.precio = precio;
        this.info = `El nombre del juego es ${this.nombre}, su género es ${this.genero} y su valor es $${this.precio}`
    }
}

const juego1 = new Videojuego ("GTA V","Acción",500);
const juego2 = new Videojuego ("God of War","Aventura",1500);
const juego3 = new Videojuego ("Fortnite","Battle Royale",0);
const juego4 = new Videojuego ("Call of Duty","FPS",1000);

let lista = `
1) Nombre: ${juego1.nombre} \n Género: ${juego1.genero} \n Precio: $${juego1.precio}
2) Nombre: ${juego2.nombre} \n Género: ${juego1.genero} \n Precio: $${juego2.precio}
3) Nombre: ${juego3.nombre} \n Género: ${juego1.genero} \n Precio: $${juego3.precio}
4) Nombre: ${juego4.nombre} \n Género: ${juego1.genero} \n Precio: $${juego4.precio}
`;


let carrito = "";
let precioCarrito = 0;
let continuar;



function mostrarLista() {
    let solicitud = parseInt(prompt(`Elije un videojuego \n` + lista));
    switch (solicitud) {
        case 1: 
        alert(`Elegiste ${juego1.nombre}`);
        carrito += juego1.nombre + "\n";
        precioCarrito += juego1.precio;
        break;
        case 2: 
        alert(`Elegiste ${juego2.nombre}`);
        carrito += juego2.nombre + "\n";
        precioCarrito += juego2.precio;
        break;
        case 3: 
        alert(`Elegiste ${juego3.nombre}`);
        carrito += juego3.nombre + "\n";
        precioCarrito += juego3.precio;
        break;
        case 4: 
        alert(`Elegiste ${juego4.nombre}`);
        carrito += juego4.nombre + "\n";
        precioCarrito += juego4.precio;
        break;
        default:
            alert("No seleccionaste ningún producto")
            break;
        }
    }
    let i = 0
    while (i < 5) {
        if (carrito == false) {
            alert("Puedes elegir un máximo de 5 juegos");
            mostrarLista();
        } else {
            continuar = prompt("Quiere seguir comprando? (s/n)");
            if (continuar == "s") {
                mostrarLista();
            } else if (continuar == "n") {
                alert(`Seleccionó estos productos \n ${carrito}Su valor es $${precioCarrito}`);
                break;
            } else {
                alert("Ingrese una respuesta válida")
            }
        }
        i++;
        if (i == 5) {
            alert(`Seleccionó estos productos \n ${carrito} Su valor es $${precioCarrito}`);
        }
    } 
    
    