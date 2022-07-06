//Divisível por 3 => Fizz
//Divisível por 5 => Buzz
//Divisível por 3 e 5 => FizzBuzz
//NÃO Divisível por 3 e 5  => Entrada + Mensagem
//NÃO é um número => NaN

const resultado = fizzBuzz(0);
console.log(resultado);

function fizzBuzz(entrada) {

    if (typeof entrada != 'number') {
        return 'Não é um número!';
    }

        else if (entrada % 5 === 0 && entrada % 3 === 0) {
            return 'fizzBuzz';
        }

        else if (entrada % 3 === 0) {
            return 'Fizz';
        }

        else if (entrada % 5 === 0) {
            return 'Buzz';
        }

    return 'NÃO é Divisível por 3 ou 5, número digitado: ' + entrada;

}

