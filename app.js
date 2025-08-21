//El array inicial para almacenar amigos
let amigos = [];

function agregarAmigo() {
//Captura el valor de entrada
let input =  document.getElementById("amigo");
//Sacar el valor y limpiarlo con trim
let nombre = input.value.trim();
// si esta vacio, manda alerta + return
if (nombre === "") {
    alert ("Por favor, inserta un nombre.");
    return;
//si no está vacio, push al array inicial
    amigos.push(nombre);
};
// limpia la cajita
input.value = "";
}

