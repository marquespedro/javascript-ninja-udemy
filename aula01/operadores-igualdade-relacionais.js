//operadores  == , != , ===

// expressao : 1 === '1'
//sempre ira verificar tambem o tipo de dado

//expressao : 1 == '1'
//tenta realizar conversao e verificar iguldade somente de valor 


var numeroString = '10';

//output Igual ignorando tipo : true
console.log('Igual ignorando tipo :' , numeroString == 10);

//output Igual ignorando considerando tipo : false
console.log('Igual ignorando considerando tipo :' , numeroString === 10);

//output Diferente ignorando tipo : false
console.log('Diferente ignorando tipo :' , numeroString != 10);

//output Diferente considerando ignorando tipo : true
console.log('Diferente considerando ignorando tipo :' , numeroString !== 10);


var p1 = {nome: 'Pedro', idade : 32};
var p2 = {nome: 'Pedro', idade : 32};
var p3 = p1;
console.log('Objeto igual com referencias diferente porem mesmas propriedades :' , p1 === p2);
console.log('Objeto igual com mesmas referencias utilizando Object.is :' , Object.is(p1,p3));
console.log('Objeto igual com mesmas referencias :' , p1 === p3);
