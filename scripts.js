/*
* Desenvolvido por: Luiz Valmir Teixeira Braga Junior 
* Não copie meu código safadinho =]
* Script em JS para fazer a conversao de dolar pra real e vice e versa
* O script tbm obriga o usuário a digitar um numero valido
*/
//funções pra conversão
var dolarbase = 4.93;
function conversaousdtobrl(valor){
    let calcula = valor * dolarbase;
    return calcula;
}

function conversaobrltousd (valor){
    let calcula = valor/dolarbase;
    return calcula;
}
//chamada dos inputs
let pegarInput1 = document.querySelector("#inputmoeda1");
let pegarInput2 = document.querySelector("#inputmoeda2");

//evento para quando uma tecla for digitada
pegarInput1.addEventListener('keyup', function(){
    
    let valorEmReal = pegarInput1.value;
    //condição pra o usuário digitar um numero
    if(isNaN(valorEmReal)){
        alert("Digite um número!");
    } else {
        pegarInput2.value = `${conversaobrltousd(valorEmReal).toFixed(2)} $`;
    }
    
    
});

pegarInput2.addEventListener('keyup', function(){
    let valorEmDolar = pegarInput2.value;
    if(isNaN(valorEmDolar)){
        alert("Digite um número!");
    } else {
        pegarInput1.value = `${conversaousdtobrl(valorEmDolar).toFixed(2)} R$`;
    }
    
});


