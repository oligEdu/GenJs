const leia = require('readline-sync');

let salarioBruto, adicionalNoturno, horasExtras, descontos

salarioBruto = leia.questionFloat("Salario Bruto: ");
adicionalNoturno = leia.questionFloat("Adicional Noturno: ");
horasExtras = leia.questionFloat("Horas Extras: ");
descontos = leia.questionFloat("Descontos: ");

salarioFinal =salarioBruto + adicionalNoturno + (horasExtras*5) - descontos

console.log("\nSalário líquido: " +
    new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(salarioFinal))