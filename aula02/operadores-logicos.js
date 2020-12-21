var x = 10;
var y = 5;

//Operador AND --> && 
console.log('Operador AND:', x > 5 && y < 4);

//Operador OU --> ||
console.log('Operador OU:',  y > 10 || x == '10');

//Operador DIFERENTE sem validar o tipo do dado --> !=
//Sem utilizar o criterio de tipo, javascript assume que 10 é igual a '10' (string)
console.log(`${x} é diferente de '10' sem considerar o tipo de dado: `,  x != '10');

//Operador DIFERENTE com validação de tipo  --> !==
console.log(`${y} é diferente de '5' considerando o tipo de dado: `,  y !== '5');