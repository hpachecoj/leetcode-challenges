const main = function(size, data, id) {
    class LoggingSystem {
        constructor() {
            this.size = size;
            this.data = data;
            this.id = id;
        }

        /** Método que insere cada instância da 
         * classe SystemLog numa estrutura de 
         * dados em árvore.
         */
        insertObjectInBinaryTree() {
            const tree = new TreeBinary();
            this.data.forEach(item => tree.insertNewNodeInTheTree(item));
            tree.printTree();
            return tree;
        }
    }

    class Node {
        constructor(info) {
            this.info = info;
            this.left = null;
            this.right = null;
        }
    }

    class TreeBinary {
        constructor() {
            this.root = null;
        }

        // Método que insere um novo nó na árvore
        insertNewNodeInTheTree(value) {
            const newNode = new Node(value);
            if (this.root === null) {
                this.root = newNode;
            } else {
                this.insertNodePositionCorrect(this.root, newNode);
            }
        }

       // Método auxiliar para inserir o nó na posição correta
       insertNodePositionCorrect(node, newNode) {
            if (newNode.info.value < node.info.value) {
                if (node.left === null) {
                    node.left = newNode;
                } else {
                    this.insertNodePositionCorrect(node.left, newNode);
                }
            } else {
                if (node.right === null) {
                    node.right = newNode;
                } else {
                    this.insertNodePositionCorrect(node.right, newNode);
                }
            }
        }

        // Método para exibir a árvore (in-order traversal)
        printTree(node = this.root) {
            if (node !== null) {
                this.printTree(node.left);
                console.log(node.info);
                this.printTree(node.right);
            }
        }

        // Método de busca para encontrar um nó pelo valor
        searchNode(value, node = this.root) {
            if (node === null) {
                return null;  // Retorna null se o valor não for encontrado
            }
            
            if (value === node.info.value) {
                return node.info;  // Retorna o objeto completo encontrado
            } else if (value < node.info.value) {
                return this.searchNode(value, node.left);  // Busca no lado esquerdo
            } else {
                return this.searchNode(value, node.right); // Busca no lado direito
            }
        }
    }

    const loggingSystem = new LoggingSystem(size, data, id);
    const tree = loggingSystem.insertObjectInBinaryTree();

    // Exemplo de busca
    const searchValue = 15;  // Substitua por um valor desejado para a busca
    const result = tree.searchNode(searchValue);
    if (result) {
        console.log("Objeto encontrado:", result);
    } else {
        console.log("Objeto não encontrado");
    }

    return tree;  // Retorna a árvore para uso externo
};

// Dados de exemplo: objetos com mais informações
const data = [
    { id: 'log1', value: Math.floor(Math.random() * 100), timestamp: '2024-01-01T10:00:00Z' },
    { id: 'log2', value: Math.floor(Math.random() * 100), timestamp: '2024-01-01T10:05:00Z' },
    { id: 'log3', value: Math.floor(Math.random() * 100), timestamp: '2024-01-01T10:10:00Z' },
    { id: 'log4', value: Math.floor(Math.random() * 100), timestamp: '2024-01-01T10:15:00Z' },
    { id: 'log5', value: Math.floor(Math.random() * 100), timestamp: '2024-01-01T10:20:00Z' },
    { id: 'log6', value: Math.floor(Math.random() * 100), timestamp: '2024-01-01T10:25:00Z' },
    { id: 'log7', value: Math.floor(Math.random() * 100), timestamp: '2024-01-01T10:30:00Z' }
];

main(7, data, 'log123');

// Exportando esta função para que seja usada em outros códigos
module.exports = main;
