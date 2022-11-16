// @autora: Pâmela Taiane

const nota1 = 7.5;
const nota2 = 10;
const nota3 = 9;

const mediaNotas = (nota1 + nota2 + nota3) / 3;
console.log(mediaNotas.toFixed(1));

if (mediaNotas < 5) {
    console.log('Reprovado')
} else if (5 <= mediaNotas && mediaNotas <= 7) {
    console.log('Recuperação')
} else {
    console.log('Passou no semestre')
}