class Pessoa {
    nome;
    peso;
    altura;
    imc;
    faixaImc;
    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
        this.imc = this.calcularImc().toFixed(1);
        this.faixaImc = this.classificarImc();
    }
    calcularImc() {
        return this.peso / (this.altura * this.altura);
    }
    classificarImc() {
        const pesoImc = this.imc
        if (pesoImc < 18.5) {
            return 'IMC baixo'
        } else if (pesoImc >= 18.5 && pesoImc < 30.0) {
            return 'IMC normal'
        } else if (pesoImc >= 30.0 && pesoImc < 40.0) {
            return 'Está acima do peso'
        } else {
            return 'IMC alto, nível obeso'
        }
    }
}

const paulo = new Pessoa('Paulo', 100, 1.75);
const pamela = new Pessoa('Pâmela', 54, 1.73);
new Pessoa('pam', 66, 88)

console.log(paulo);
console.log(pamela);


