// @Autora: Pâmela Taiane

/*
Formas de pagamento:
1 - Débito;
2 - Dinheiro e Pix;
3 - crédito em 2 vezes;
4 - crédito acima de 2 vezes.
*/

const precoEtiqueta = 100;
const tipoPagamento = 4;

if (tipoPagamento === 1) {
    const desconto = (precoEtiqueta * 0.9);
    console.log('Você terá que pagar R$' + desconto.toFixed(2));
} else if (tipoPagamento === 2) {
    const desconto = (precoEtiqueta * 0.85);
    console.log('Você terá que pagar R$' + desconto.toFixed(2));
} else if (tipoPagamento === 3) {
    console.log(precoEtiqueta);
} else {
    const desconto = (precoEtiqueta * 1.10);
    console.log('Você tera que pagar R$' + desconto.toFixed(2));
}