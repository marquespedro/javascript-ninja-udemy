//funcoes criam  escopo 
function imprimir(){
    var valor = 'Hello Js';
}
//ReferenceError: valor is not defined
//console.log(valor);


function outroImprimrir(a , b){
    if(a && b){
        console.log('Valor A : ' , a);
        console.log('Valor B : ' , b);
        return;
    }
    if(a){
        console.log('Somente valor A foi passado  : ' , a);
        return;
    }
    if(!a && !b){
        console.log('Nenhum valor passado ');
        return;
    }

}

//independente da quantidade de parametros passados a chamada da funcao 
//e capaz de entender qual funcao deve ser chamada.
outroImprimrir();
outroImprimrir(2);
outroImprimrir(2 ,3);
