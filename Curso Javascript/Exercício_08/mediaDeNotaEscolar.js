// Exercício Nota Escolar
// Obter a média a partir de um array

//0-59: F
//50-69: D
//50-79: C
//80-89: B
//50-100: A

const array = [50, 50, 50, 50, 50];

mediaEscolar(array);

function mediaEscolar(notas) {

    let soma = 0;
    let somaTotal;

    for (let nota of notas) {
        soma += nota;
    }

    somaTotal = soma / 5;

    if (somaTotal <= 59) {
        console.log("Média F")
    }

    else if (somaTotal <= 69) {
        console.log("Média D")
    }

    else if (somaTotal <= 79) {
        console.log("Média C")
    }

    else if (somaTotal <= 89) {
        console.log("Média B")
    }

    else {
        console.log("Média A")
    }

}