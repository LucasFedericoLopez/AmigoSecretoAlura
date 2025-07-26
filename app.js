let amigos = []
let amigosSorteados = []

function agregarAmigo() {
    let ingresarAmigo = document.querySelector('input').value;
    if (amigos.includes(ingresarAmigo) || ingresarAmigo == "") {
        alert("Ingresa un nombre valido");
    } else {
        amigos.push(ingresarAmigo);
        agregarAmigosALista();
    }
    document.querySelector('input').value = "";
}

function agregarAmigosALista() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        listaAmigos.innerHTML += "<li>" + amigos[i] + "</li>";
    }
}

function sortearAmigo() {
    let indiceSorteado = Math.floor(Math.random()*amigos.length);
    let amigoSorteado = amigos[indiceSorteado];
    let resultado = document.getElementById('resultado');

    if (amigos.length == 0) {
        alert("No hay amigos para sortear");
    }
    else {
        resultado.innerHTML = `El amigo sorteado es ${amigoSorteado}`;
    }
}