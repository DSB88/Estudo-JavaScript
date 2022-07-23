// JavaScript aula 47 - Faixa de Preço (Exercício)
// Crie um array de objetos de faixa de preço para que 
// ele possa ser usado em um site igual o mercado livre.

// Primeira Opção 
let faixas = [
    { tooltip: 'até R$700', minimo: 0, maximo: 700 },
    { tooltip: 'de R$700 a R$1000', minimo: 700, maximo: 1000 },
    { tooltip: 'R$1000 ou mais', minimo: 1000, maximo: 9999999 }
];


// Segunda Opção (Factory Function) 
function criaFaixaPreco(tooltip, minimo, maximo) {
    return {
        tooltip,
        minimo,
        maximo
    }
}

let faixas2 = [
    criaFaixaPreco('a', 1, 100),
    criaFaixaPreco('b', 100, 1000),
    criaFaixaPreco('c', 1000, 10000),
]

console.log(faixas);




