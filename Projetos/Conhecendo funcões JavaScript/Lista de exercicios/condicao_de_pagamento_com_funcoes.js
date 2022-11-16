//@Autora: Pâmela Taiane

/*
1 - Debito
2 - Dinheiro e Pix
3 - crédito em até 2 vezes
4 - crédito acima de 2 vezes
*/

const precoEtiqueta = 100;
const tipoPagamento = 4;

function desconto(valor, desconto) {
    return (valor - (valor * (desconto / 100))).toFixed(2);
}

if (tipoPagamento === 1) {
    console.log('Você terá que pagar R$' + desconto(precoEtiqueta, 10));
} else if (tipoPagamento === 2) {
    console.log('Você terá que pagar R$' + desconto(precoEtiqueta, 15));
} else if (tipoPagamento === 3) {
   console.log(precoEtiqueta);
} else {
    console.log('Você tera que pagar R$' + desconto(precoEtiqueta, -10));
}

function aplicarDesconto(precoEtiqueta, tipoPagamento) {
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
}
