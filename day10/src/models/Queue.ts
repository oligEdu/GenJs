export class Queue {
  private items: string[] = [];

  enqueue(element: string): void {
    this.items.push(element);
  }

  dequeue(): string | undefined {
    return this.items.shift();
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  list(): void {
    console.log("\nFila:");
    this.items.forEach((cliente) => console.log(cliente));
  }
}
