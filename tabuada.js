const leia = require('readline-sync')

let numero 
let contador

numero = leia.questionInt("Calcule a Tabuada do: ")

for (contador = 0; contador <= 10; contador++) {
    console.log(`${numero} * ${contador} = (${numero} * ${contador})`)

}