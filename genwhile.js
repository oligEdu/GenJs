const leia = require('readline-sync')

let idade = leia.questionInt("Digite sua idade: ")
let contadorMenor = 0;
let contadorMaior = 0;

while(idade >= 0){

        if(idade < 21) {
            contadorMenor++
        }else if(idade > 50){
            contadorMaior++
    }
        idade = leia.questionInt("Digite sua idade: ")
}
            console.log("\nTotal de pessoas menores de 21 anos: ", contadorMenor)
            console.log("\nTotal de pessoas maiores de 50 anos: ", contadorMaior)
