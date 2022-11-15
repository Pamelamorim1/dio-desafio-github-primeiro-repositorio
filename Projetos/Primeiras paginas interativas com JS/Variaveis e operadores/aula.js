// @autora: Pâmela Taiane

const precoCombustivel = 5.6;
const DistanciaKM = 100;
const GastoKmPorLitro = 1;

const litrosConsumidos = DistanciaKM / GastoKmPorLitro;
const valorGasto = litrosConsumidos * precoCombustivel;

console.log(valorGasto.toFixed(2));