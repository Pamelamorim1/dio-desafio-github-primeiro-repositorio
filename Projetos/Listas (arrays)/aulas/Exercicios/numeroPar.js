// @Autora: Pâmela Taiane

const lista = [2, 5, 7, 9, 10];
console.log('Os números pares são:');

for (let i = 0; i < lista.length; i++) {
    const percorrerLista = lista[i] % 2;
    if ((percorrerLista === 0)) {
        console.log(lista[i]);
    }
}
