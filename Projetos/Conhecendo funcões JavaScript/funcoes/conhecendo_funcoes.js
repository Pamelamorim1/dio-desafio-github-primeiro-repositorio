//Autora: Pâmela Taiane

function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc) {
    if (imc < 18.5) {
        return 'Abaixo do peso';
    } else if (18.5 <= imc && imc < 25) {
        return 'Peso normal';
    } else if (25 <= imc && imc < 30) {
        return 'Acima do Peso';
    } else if (30 <= imc && imc < 40) {
        return 'Obesidade severa';
    } else {
        return 'Obesidade morbida';
    }
}
//main
(function () {
    const peso = 54;
    const altura = 1.73;

    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
})();



