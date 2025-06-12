const leia = require('readline-sync')

const codigo = leia.questionInt("Digite o código do produto (1 a 6): ");
const quantidade = leia.questionInt("Digite a quantidade comprada: ");

let produto, preco

switch (codigo) {

    case 1:
        produto = "Cachorro Quente"
        preco = 10.00
break
    case 2:
        produto = "X-Salada"
        preco = 15.00   
break
    case 3: 
        produto = "X-Bacon"
        preco = 18.00
    break

    case 4:
        produto = "Bauru"
        preco = 12.00
    break

    case 5: 
        produto = "Refrigerante"
        preco = 8.00
    break

    case 6: 
        produto = "Suco de Laranja"
        preco = 13.00
    break

    default:
        console.log("Código inválido")
    break
}

const valorTotal = quantidade * preco;

console.log('\nProduto: ' + produto);
console.log('\nValor Total da compra (R$): ', valorTotal.toFixed(2));