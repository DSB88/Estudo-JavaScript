// Velocidade máxima de até 70 km/h
// A cada 5km/h acima do limite você ganha 1 ponto
// Usar biblioteca Math.Flor()
// Caso pontos maior que 12 => "Carteira Suspendida"


verificarVelocidade(78);

function verificarVelocidade(velocidade) {

    const velocidadePermitida = 70;

    if (velocidade <= velocidadePermitida) {
        console.log("Dentro da velocidade indicada. =)")
    }
    else {
        let pontos = Math.floor(((velocidade - velocidadePermitida) / 5)); //Usado para arredondar o número

        if (pontos > 12) {
            console.log("Carteira Suspendida!");
        }
        else {
            console.log("Você ultrapassou o limite de velocidade, por isso ganhou:", pontos +
                " ponto(s) na carteira!");
        }
    }
}