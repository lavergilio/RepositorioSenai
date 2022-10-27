//Se a peça possuir um peso superior a 100 gramas, pode cadastrar.

let peso = 50;

if(peso <100){
    console.log("A peça precisa pesar no mínimo 100 gramas.")
}else{
    console.log("A peça possui peso adequado.")
}


//Dada a capacidade de cada caixa, caso a lista de peças seja superior a 10, imprima uma mensagem informando não ter capacidade suficiente.

let listadePecas = ["Lanterna", "Amortecedor", "Disco de Freio", "Motor", "Câmbio", "Painel"]

if(listadePecas.length < 10){
    console.log("É possível cadastrar mais peças.")
}else{
    console.log("Não tem mais espaço na lista.")
}


//Caso a peça tenha um nome com quantidade inferior a 3 caracteres, informar uma mensagem de erro.

let nomePeca = "Motor"

if(nomePeca.length > 3){
    console.log("O nome é válido.")
}else{
    console.log("Coloque um nome válido.")
}