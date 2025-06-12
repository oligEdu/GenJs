export class Stack {
  private items: string[] = [];

  push(element: string): void {
    this.items.push(element);
  }

  pop(): string | undefined {
    return this.items.pop();
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  list(): void {
    console.log("\nLista de Livros na Pilha:");
    this.items.forEach((livro) => console.log(livro));
  }
}
