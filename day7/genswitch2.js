const leia = require('readline-sync');

const codigo = leia.questionInt("\nEscolha a operacao desejada (1 a 4): ");

        let num1 = leia.questionFloat("\nDigite o primeiro número: ");
        let num2 = leia.questionFloat("Digite o segundo número: ");

switch (codigo) {

    case 1: 
        num1 + num2;
        console.log(`\nResultado da soma: ${num1 + num2.toFixed(2)}`);
        break;

    case 2:
        num1 - num2
        console.log(`\nResultado da subtração: ${num1 - num2.toFixed(2)}`);
        break;

    case 3:
        num1 * num2;
        console.log(`\nResultado da multiplicação: ${num1 * num2.toFixed(2)}`);
        break;

    case 4:
        num1 / num2;
        if (num1 === 0 || num2 === 0) {
            console.log("O resultado é 0. ");
        } else {
            console.log(`\nResultado da divisão: ${num1 / num2.toFixed(2)}`);
        }
        break;

    default:
        console.log("\nOperação inválida. Por favor, escolha uma operação válida (1 a 4).");
        break;
    }