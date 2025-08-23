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
};
//si no está vacio, push al array inicial
amigos.push(nombre);
console.log(amigos);
// limpia la cajita
input.value = "";
pintarLista(); 
}

//función para sortear amigo
function sortearAmigo() {
if (amigos.length === 0) {
//manda alerta si no se escribió ningun nombre
    alert ("No has escrito ningun nombre.");
    return;
}
//calcular el índice aleatorio con el math.random
let i = Math.floor(Math.random()*amigos.length);
let ganador = amigos[i];
document.getElementById("listaAmigos").innerHTML = ganador;
console.log (ganador);
 }

function pintarLista (){
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML ="";
    for (let i = 0; i < amigos.length; i++) {
        let li =document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }

}
