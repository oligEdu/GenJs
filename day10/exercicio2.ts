import readlinesync from 'readline-sync';
import { Stack } from './src/models/Stack';

const pilha = new Stack();
let opcao: number;

do {
    console.log("\n***********************");
    console.log("1 - Adicionar Livro na pilha");
    console.log("2 - Listar todos os Livros");
    console.log("3 - Retirar Livro da pilha");
    console.log("0 - Sair");
    console.log("***********************");

    opcao = readlinesync.questionInt("Entre com a opcao desejada: ");

    switch (opcao) {
    case 1:
        const livro = readlinesync.question("Digite o nome: ");
        pilha.push(livro);
        pilha.list();
        console.log("Livro adicionado!");
        break;

    case 2:
        pilha.list();
        break;

    case 3:
        if (pilha.isEmpty()) {
        console.log("A Pilha está vazia!");
        } else {
        pilha.pop();
        }
        break;

    case 0:
        console.log("Programa finalizado.");
        break;

    default:
        console.log("Opcao invalida!");
    }
} while (opcao !== 0);
