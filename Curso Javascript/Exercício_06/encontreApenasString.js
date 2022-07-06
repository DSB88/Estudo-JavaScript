//Criar um método para ler propriedades de um objeto e..
// Exibir somente as propriedades do props string que estão nesse objeto

const filme = {         // Valores num Objeto
    ator: 'Diego',
    idade: 33,
    estaAprovado: true,
    corSelecionado: null,
    filme: "The GodFather"
}

let valores = [10, 'Ola', "TMJ", 9, 5, 2, null, "Fim"]; // Valores num Array

exibirPropriedades(filme)

function exibirPropriedades(obj) {

    for (let props in obj) {

        if (typeof obj[props] === 'string') {
            console.log(props, obj[props]);
        }
    }
};

