const leia = require('readline-sync')

let numero1, numero2, intervalo
let encontrou = false

numero1 = leia.questionInt("Digite o primeiro numero do intervalo: ")
numero2 = leia.questionInt("Digite o ultimo numero do intervalo: ")

if (numero1 >= numero2) {
    console.log("O intervalo é inválido!")
    return
    
}else{
    for(intervalo = numero1; intervalo <= numero2; intervalo++){
        if (intervalo % 3 === 0 && intervalo % 5 === 0){
            if (!encontrou) {
        console.log(`\nNo Intervalo entre ${numero1} e ${numero2} :\n`)
        encontrou = true
            }
        console.log(intervalo)
        }
    }

    
}