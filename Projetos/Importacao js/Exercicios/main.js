// @Autora: Pâmela Taiane

const {sorteio, print} = require('./sorteio');

const numSorteados = [];

for (let i = 0; i < 5; i++) {
    const numSorteio = sorteio();
    numSorteados.push(numSorteio);
    
}

let maiorValor = 0;

for (let i = 0; i < numSorteados.length; i++) {
    const numSorteado = numSorteados[i];
    if (numSorteado > maiorValor) {
        maiorValor = numSorteado;
    }
    
}

print(maiorValor);









//const dados = require('./sorteio');

/*
console.log(dados.sorteio());
console.log(dados.sorteio());
console.log(dados.sorteio());
console.log(dados.sorteio());
console.log(dados.sorteio());*/
