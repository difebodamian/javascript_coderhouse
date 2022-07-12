
const titles = document.querySelectorAll(".title");
const title_1 = titles[0];
const title_2 = titles[1];
const title_3 = titles[2];
const title_4 = titles[3];
const cards = document.querySelectorAll(".card")

title_2.textContent = "FIFA 22";
title_3.textContent = "Valorant";
title_4.textContent = "League of Legends";

let seguir = false

function seleccionarProducto(num) {
    num -= 1;
    cards[num].classList.add("border--red")
    alert("El producto ha sido seleccionado")
}

function pedirDatoUsuario() {
    let entrada = parseInt(prompt("Qué juego desea seleccionar? 1 al 4"));
    return entrada
}


seleccionarProducto(pedirDatoUsuario());