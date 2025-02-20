let listaAmigos = [];
let inputAmigo = document.getElementById ("amigo");
let ulListaAmigos = document.getElementById ("listaAmigos");
let ulResultado = document.getElementById ("resultado");


function agregarAmigo() {
  listaAmigos.push(inputAmigo.value);
  ulListaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`;
};

function sortearAmigo() {
   let random = Math.floor(Math.random() * listaAmigos.length);
   let amigoSecreto = listaAmigos[random];
   ulResultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;
}
