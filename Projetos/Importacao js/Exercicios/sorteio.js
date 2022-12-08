// @Autora: Pâmela Taiane

const entradas = [5, 50, 10, 98, 23];

let i = 0;

function sorteio() {
    let valor = entradas[i];
    i++;
    return valor;
}

function print (texto){
    console.log(texto);
}

module.exports = {
    sorteio,
    print
}