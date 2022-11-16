//Autora: Pâmela Taiane

function escrevaNome(nome) {
    return ('Meu nome é ' + nome);
}

function escevaIdade(idade) {
    if (idade >= 18) {
        console.log(escrevaNome('Pâmela') + ' e sou maior de idade!');
    } else {
        console.log(escrevaNome('Pâmela') + ' e sou menor de idade.');
    }
}

escevaIdade(11);