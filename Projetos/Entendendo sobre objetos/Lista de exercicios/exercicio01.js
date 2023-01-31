class Carro {
    marca;
    cor;
    gastoMedioPorKm;
    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }
    calcularGasto(distanciaKm, precoCombustivel) {
        return distanciaKm * this.gastoMedioPorKm * precoCombustivel;
    }
}

const pamela = new Carro('Chevrolet', 'Azul', 1 / 12);
const palio = new Carro('Fiat', 'Preto', 1 / 10);


console.log(pamela)
console.log(pamela.calcularGasto(70, 5).toFixed(2));
console.log(palio.calcularGasto(70, 5).toFixed(2));