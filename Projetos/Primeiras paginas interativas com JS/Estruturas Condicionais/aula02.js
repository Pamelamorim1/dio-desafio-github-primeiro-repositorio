// @autora: Pâmela Taiane

const precoEtanol = 4.56;
const precoGasolinha = 5.86;
const kmPorLitro = 10;
const distanciaKm = 100;

const tipoCombustivel = 'gasolina';

const nomeDoCombustivel = tipoCombustivel === "etanol";

if (nomeDoCombustivel) {
    const gastoEtanol = ((distanciaKm / kmPorLitro) * precoEtanol);
    console.log(gastoEtanol.toFixed(2));
    console.log('Etanol')
} else {
    const gastoGasolina = ((distanciaKm / kmPorLitro) * precoGasolinha);
    console.log(gastoGasolina.toFixed(2));
}
