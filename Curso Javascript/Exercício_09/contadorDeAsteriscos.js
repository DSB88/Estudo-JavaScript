// Criar uma função que exiba a quantidade de astéristicos (*) pedida.

exibirAsteristicos(5);


function exibirAsteristicos(quantidade) {
    let simbolo = '';  

    for (let i = 1; i <= quantidade; i++) {
        simbolo += '*';
        console.log(simbolo);
    }
}


