// @autora: Pâmela Taiane

const peso = 150;
const altura = 1.80;
const imc = peso / (altura * altura);

console.log(imc.toFixed(1));

if (imc < 18.5) {
    console.log('Abaixo do peso');
} else if (18.5 <= imc && imc < 25) {
    console.log('Peso normal');
} else if (25 <= imc && imc < 30) {
    console.log('Acima do Peso');
} else if (30 <= imc && imc < 40) {
    console.log('Obesidade severa');
} else {
    console.log('Obesidade morbida');
}