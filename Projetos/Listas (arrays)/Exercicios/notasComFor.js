const notas = [];

notas.push(7);
notas.push(6);
notas.push(9);
notas.push(4);

let totalNotas = 0;

for (let i = 0; i < notas.length; i++) {
    totalNotas = totalNotas + notas[i];
}

const mediaNotas = totalNotas / notas.length;
console.log(mediaNotas.toFixed(1));