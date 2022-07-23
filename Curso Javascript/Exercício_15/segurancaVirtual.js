//# Projeto 1 - Segurança Virtual
//* Você precisa pegar o nome da pessoa que está tentando entrar naquele lugar 
//* Você precisa perguntar a ele(a) quem a convidou para essa festa 
//* Você precisa de um botão na tela que quando você clicar irá acessar o seu código javascript 
// para verificar se a pessoa que está tentando entrar foi de fato convidado por quem ela 
// diz que a convidou. (ex: nome da pessoa Jhonatan,
// quem convidou para a festa? Cristian. clico no botão, 
// o javascript pega as informações que eu preenchi na tela e verifica no meu código javascript 
// se aquela pessoa está dentro da lista de convidados do cristian, o meu nome está lá) 
//* Caso meu nome esteja, eu vou alterar a descrição de "Pesquisando" para "Você pode Entrar!" 
//* Caso meu nome não esteja, eu vou alterar a descrição de "Pesquisando" para "Você não pode Entrar!"

function VerificarEntrada() {

    NomeConvidado = document.getElementById('nome').value;
    ConvidadosCristian = ['Diego', 'Sabrina', 'Rafael', 'Jonas', 'Carol', 'Jhonatan']

    if (ConvidadosCristian.includes(NomeConvidado)) {
        document.getElementById('PermissaoDeEntrada').innerText = 'Você pode Entrar!' 
        } else {
        document.getElementById('PermissaoDeEntrada').innerText = 'Você não pode Entrar!'
    }
}