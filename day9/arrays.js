const leia = require('readline-sync');

let cores = [];

console.log("Digite 5 cores:\n");

for (let contador = 0; contador < 5; contador++) {
    const cor = leia.question(`Cor ${contador + 1}: `);
    cores.push(cor);
}

console.log("\nListar todas as cores:\n");
for (let cor of cores) {
    console.log(cor);
}

console.log("\nOrdenar as cores:\n");
const coresOrdenadas = [...cores].sort(); 
for (let cor of coresOrdenadas) {
    console.log(cor);
}
