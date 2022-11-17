//@Autora: Pâmela Taiane

class dadosUsuario {
    nome;
    idade;
    anoDeNascimento;
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    }
    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho que ${p2.nome}`);
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho que ${p1.nome}`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade.`);
    }
}

const vitor = new dadosUsuario('Vitor', 23);
const pamela = new dadosUsuario('Pâmela', 22);

compararPessoas(vitor, pamela);

/*
const teste = {
    nome: 'Pâmela',
    idade: 22,
    cidade: 'Salvador',
    descreve: function () {
        //${this.nome}
        console.log('Meu nome é e minha idade é ');
    }
};

console.log(teste.descreve);
teste.nome = 'Joilma';

console.log(teste);
console.log(teste.nome);
console.log(teste.cidade);

console.log(teste['cidade']);

console.log(teste.descreve());
*/
