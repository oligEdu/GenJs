const leia = require('readline-sync');

let salario, abono, novoSalario

salario = leia.questionFloat("Digite o Salario: \t");
abono = leia.questionFloat("Digite o abono: \t")

novoSalario = salario + abono

console.log("Novo Salário: \t\t" +
new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
}).format(novoSalario))

