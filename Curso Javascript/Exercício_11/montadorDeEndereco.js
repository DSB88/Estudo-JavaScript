// JavaScript - Objeto Endereço

// Criar um objeto endereco que contenha:
// Rua
// Cidade
// Cep
// exibirEndereco(endereco)

let endereco = {
    rua : 'Travessa',
    cidade : 'Santos',
    cep : '11000-456'
};

function exibirEndereco(endereco) {
    for (let valor in endereco) {
        console.log(valor, endereco[valor]);
    }
}
    exibirEndereco(endereco);
