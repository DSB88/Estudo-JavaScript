//Inverta os valores das variáveis

let a = 10;
let b = 7;

console.log("\nAntes da Inversão\n", 
'Letra A:',a,'\n',
'Letra B:', b);

a = a + b;
b = a - b;
a = a - b ;

console.log('\nApós a Inversão de valores:\n', 
'Letra A:',a,'\n',
'Letra B:', b);