// Receber uma quantidade de valores para avaliar
// Função exibe se cada valor é ímpar ou par

exibirTipo(10);

function exibirTipo(entrada) {
    for (let i = 0; i <= entrada; i++) {
        i % 2 === 0 ? console.log(i,' Par') : console.log(i," Ímpar");
    }
}

