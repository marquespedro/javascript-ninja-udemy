/*
    Estrutura lexica : conjunto de regras para se escrever um código em uma linguagem
*/

/*
    Este é um comentário de bloco em javascript
*/

//Este é um comentário de linha em javascript

/*   
    Javascript é case sensitive portanto as variaveis abaixo são diferentes
*/

var animal = 'onça';  
var Animal = 'tigre';
console.log(`${animal}  - ${Animal}`);

/*
    Exemplos de literais em javascript
*/

var numeroLiteral = 1;
var stringLiteralAspasSimples = 'teste';
var stringLiteralAspasDuplas = "teste";
var objetoLiteral = {'nome' : 'Pedro'};
var arrayLiteralNumerico = [1,3,5,7];
var arrayLiteralString = ['a','b','c','d'];
var nuloLiteral = null;
var boleanoLiteral = true; //ou false

/*
    Identificadores em javascript
    - podem iniciar com _ ou $
    - pode conter letras de a-z ou A-Z
*/

var  _teste = 'comUnderScore';
console.log(_teste);
var $teste = 'comCifrao';
console.log($teste);
var Σ = 'comCaracteUnicode';
console.log(Σ);

/*
    Palavras reservadas em javascript
    link : https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Lexical_grammar#Palavras-chave
*/