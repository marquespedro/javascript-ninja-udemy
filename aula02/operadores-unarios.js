//operador unario + irá converter a string para numero
console.log(+'10');
//o mesmo ocorre com operador unario -
//porem o numero fica negativo 
console.log(-'10');

//ira imprimir NaN(Not a number) 
//operador unario não consegue realizar a conversao para numero
console.log(+'pedro');

//ira concatenar as strings
console.log('pedro' + 'ivo');

//ira concatenar as strings
var soma = '2' + '2';
console.log('Soma :', soma);
console.log('Soma é string ? ' , typeof soma == 'string');
console.log('Soma é number ? ' , typeof soma == 'number');

//ira converter em numeros
//ira realizar subtracao
//
var subtracao = '2' - '2';
console.log('Subtracao: ', subtracao);
console.log('Subtracao é string ? ' , typeof subtracao == 'string');
console.log('Subtracao é number ? ' , typeof subtracao == 'number');

//ira concatenar as duas strings '2' 
//ira converter o 10 para string
//noa ira realizar operacao aritimetica com os numeros 
var resultado = '2' + '2' + 10;
console.log('Resultado : ', resultado);
console.log('Resultado é string ? ' , typeof resultado == 'string');
console.log('Resultado é número ? ' , typeof resultado == 'number');