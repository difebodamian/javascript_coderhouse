
// pedir un numero por prompt y repetir "hola" la cantidad de veces ingresada

let num = parseInt(prompt("Decime un número del 1 al 10"));
let i = 1;

while (i <= 10) {
    console.log(`Hola ${i}`);
    if (i == num) {
        break;
    }
    i++
}