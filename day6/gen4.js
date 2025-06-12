const leia = require('readline-sync');

let num1, num2, num3, num4
let produto

num1 = leia.questionFloat("Numero 1: ");
num2 = leia.questionFloat("Numero 2: ");
num3 = leia.questionFloat("Numero 3: ");
num4 = leia.questionFloat("Numero 4: ");

produto = ((num1 * num2) - (num3 * num4))

console.log("\nDiferença: " + produto)