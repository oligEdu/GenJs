import readlinesync from 'readline-sync';
import { Queue } from './src/models/Queue';

const fila = new Queue();
let opcao: number;

do {
console.log("\n***********************");
console.log("1 - Adicionar Cliente na Fila");
console.log("2 - Listar todos os Clientes");
console.log("3 - Retirar Cliente da Fila");
console.log("0 - Sair");
console.log("***********************");

opcao = readlinesync.questionInt("Entre com a opcao desejada: ");

switch (opcao) {
    case 1:
    const nome = readlinesync.question("Digite o nome: ");
        fila.enqueue(nome);
        fila.list();
        console.log("Cliente Adicionado!");
    break;

    case 2:
        fila.list();
    break;

    case 3:
    if (fila.isEmpty()) {
        console.log("A Fila está vazia!");
        } else {
        fila.dequeue();
        }
        break;

    case 0:
        console.log("Programa finalizado.");
        break;

    default:
        console.log("Opcao invalida!");
}
} while (opcao !== 0);
