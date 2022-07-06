//Faça uma função que retorne o maior número entre os dois.

function maiorNumero(numeroX, numeroY) {

    if (numeroX > numeroY) {
        console.log('O maior número é: ' + numeroX)
    }

    else if (numeroY > numeroX) {
        console.log('O maior número é: ' + numeroY)
    }
    else {
        console.log('Os números são iguais, tente novamente.')
    }
}

maiorNumero(14, 14);

