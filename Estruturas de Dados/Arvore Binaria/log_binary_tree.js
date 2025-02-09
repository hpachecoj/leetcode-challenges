// Função para criar logs
const database_logs = function() {
    let array_logs = [];
    
    function Log(id, name, data) {
        this.id = id;
        this.name = name;
        this.data = data;
    }

    Log.prototype.juntaInstancias = function() {
        array_logs.push(this);
    }

    const cria_logs = () => {
        for (let i = 0; i < 8; i++) { // Gera 8 instâncias
            let log = new Log(i, "log" + i, "data" + i);
            log.juntaInstancias();
        }
    }

    cria_logs();
    return array_logs; // Retorna o array_logs para acesso externo
}

// Criar logs
const logs = database_logs();
console.log("Logs:", logs);

// Classe para nó da árvore
class Node {
    constructor(info) {
        this.info = info;
        this.left = null;
        this.right = null;
    }
}

// Classe para a árvore binária
class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(info) {
        let node = new Node(info);
        if (this.root === null) {
            this.root = node;
        } else {
            this.insertNodeRec(this.root, node);
        }
    }

    insertNodeRec(root, node) { // Corrigido para receber 'root' e 'node'
        if (node.info < root.info) {
            if (root.left === null) {
                root.left = node;
            } else {
                this.insertNodeRec(root.left, node);
            }
        } else {
            if (root.right === null) {
                root.right = node;
            } else {
                this.insertNodeRec(root.right, node);
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

    searchNode(value, node = this.root) {
        if (node === null) {
            return false;
        }
        if (value === node.info) {
            return true;
        }
        if (value < node.info) {
            return this.searchNode(value, node.left);
        } else {
            return this.searchNode(value, node.right);
        }
    }
}

// Criar a árvore binária e inserir os logs
const binaryTree = new BinaryTree();
logs.forEach(log => {
    binaryTree.insert(log.id); // Insere o id de cada log na árvore
});

// Exibir a árvore
console.log("Árvore em ordem:");
binaryTree.printTree();
