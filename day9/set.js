const readlineSync = require('readline-sync');


const numeros = new Set([2, 5, 1, 7, 3, 4, 9, 0, 6, 8]);

console.log("Lista de números: ");
for (let numero of numeros) {
    process.stdout.write(`${numero} `);
}

const buscado = readlineSync.questionInt("\n\nDigite o número que você deseja encontrar: ");

if (numeros.has(buscado)) {
    console.log(`\nO número ${buscado} foi encontrado!`);
} else {
    console.log(`\nO número ${buscado} NÃO foi encontrado!`);
}
