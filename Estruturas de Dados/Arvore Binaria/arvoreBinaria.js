class BST {
    constructor(value, right = null, left = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }

    // Método de inserção de dados
    insert(value) {
        if (value >= this.value) {
            // Insere valor à direita
            if (this.right) {
                this.right.insert(value);
            } else {
                this.right = new BST(value);
            }
        } else {
            // Insere valor à esquerda
            if (this.left) {
                this.left.insert(value);
            } else {
                this.left = new BST(value);
            }
        }
    }

    // Método que verifica os valores nos nós da árvore
    contains(value) {
        if (value === this.value) return true; // Valor encontrado

        if (value > this.value) {
            // Realiza busca à direita da árvore
            return this.right ? this.right.contains(value) : false; // Continua procurando à direita ou retorna false
        } else {
            // Realiza busca à esquerda da árvore
            return this.left ? this.left.contains(value) : false; // Continua procurando à esquerda ou retorna false
        }
    }

    // Método que exclui um nó da árvore
    remove(value, parent = null) {
        const noADireita = value > this.value; // O nó que precisamos remover está à direita

        if (noADireita) {
            if (this.right) { 
                this.right.remove(value, this); // Remove na subárvore à direita
            }
        } else if (value < this.value) { 
            if (this.left) { 
                this.left.remove(value, this); // Remove na subárvore à esquerda
            }
        } else {
            // Encontramos o nó que precisamos remover
            if (this.left && this.right) {
                this.value = this.right.getMinValue(); 
                this.right.remove(this.value, this);
            } else if (this.left || this.right) { 
                const child = this.left ? this.left : this.right;
                if (parent) {
                    if (parent.left === this) parent.left = child;
                    else parent.right = child;
                } else { 
                    Object.assign(this, child); 
                }
            } else { 
                if (parent) {
                    if (parent.left === this) parent.left = null;
                    else parent.right = null;
                } else { 
                    Object.assign(this, {});
                }
            }
        }
    }

    getMinValue() {
        return this.left ? this.left.getMinValue() : this.value; // Retorna o menor valor na subárvore esquerda
    }
}

// Exemplo de uso da árvore binária de busca:
const bst = new BST(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);

console.log(bst.contains(7));  // Saída: true
console.log(bst.contains(8));  // Saída: false

bst.remove(5);
console.log(bst.contains(5));  // Saída: false