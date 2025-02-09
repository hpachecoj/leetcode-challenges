// Definição da classe Stack (Pilha)
class Stack {
    constructor() {
        this.stack = []; // Inicializa a pilha como um array vazio
        this.top = -1; // Inicializa o topo da pilha como -1, indicando que está vazia
    }

    // Método para verificar se a pilha está vazia
    STACK_EMPTY() {
        return this.top === -1; // Retorna true se o topo for -1, indicando que a pilha está vazia
    }

    // Método para adicionar um elemento à pilha
    PUSH(x) {
        this.top += 1; // Incrementa o topo
        this.stack[this.top] = x; // Adiciona o elemento no topo da pilha
    }

    // Método para remover e retornar o elemento do topo da pilha
    POP() {
        if (this.STACK_EMPTY()) { // Verifica se a pilha está vazia
            throw new Error("underflow"); // Lança um erro se a pilha estiver vazia
        } else {
            const poppedElement = this.stack[this.top]; // Armazena o elemento do topo
            this.top -= 1; // Decrementa o topo
            return poppedElement; // Retorna o elemento removido
        }
    }
}

// Exemplo de uso da classe Stack
const pilha = new Stack();
console.log(pilha.STACK_EMPTY()); // true - A pilha está vazia
pilha.PUSH(1); // Adiciona o elemento 1 à pilha
pilha.PUSH(2); // Adiciona o elemento 2 à pilha
console.log(pilha.STACK_EMPTY()); // false - A pilha não está vazia
console.log(pilha.POP()); // 2 - Remove e retorna o elemento do topo (2)
console.log(pilha.POP()); // 1 - Remove e retorna o próximo elemento do topo (1)
console.log(pilha.STACK_EMPTY()); // true - A pilha está vazia novamente
