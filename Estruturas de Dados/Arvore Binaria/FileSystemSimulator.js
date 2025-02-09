// Classe que representa um nó no sistema de arquivos
class Node {
    constructor(name, type) {
        this.name = name; // Nome do nó
        this.type = type; // Tipo do nó (diretório ou arquivo)
        this.children = []; // Lista de nós filhos
        this.parent = null; // Nó pai
    }
    
    // Adiciona um nó filho
    addChild(node) {
        node.parent = this;
        this.children.push(node);
    }

    // Remove um nó filho
    removeChild(node) {
        const index = this.children.indexOf(node);
        if (index !== -1) {
            this.children.splice(index, 1);
            node.parent = null;
        }
    }

    // Percorre a árvore de forma recursiva, executando um callback em cada nó
    traverse(callback) {
        callback(this);
        this.children.forEach(child => child.traverse(callback));
    }
}

// Classe que representa o sistema de arquivos
class FileSystem {
    constructor() {
        this.root = new Node('root', 'directory'); // Cria o nó raiz
    }

    // Cria diretórios com base no caminho fornecido
    mkdir(path) {
        const directories = path.split('/');
        let current = this.root;
        directories.forEach(dir => {
            let child = current.children.find(child => child.name === dir);
            if (!child) {
                child = new Node(dir, 'directory');
                current.addChild(child);
            }
            current = child;
        });
    }

    // Cria um arquivo com base no caminho fornecido
    touch(path) {
        const directories = path.split('/');
        let current = this.root;
        directories.slice(0, -1).forEach(dir => {
            let child = current.children.find(child => child.name === dir);
            if (!child) {
                child = new Node(dir, 'directory');
                current.addChild(child);
            }
            current = child;
        });
        const file = new Node(directories[directories.length - 1], 'file');
        current.addChild(file);
    }

    // Lista os nós filhos de um diretório
    ls(path) {
        const directories = path.split('/');
        let current = this.root;
        for (const dir of directories) {
            let child = current.children.find(child => child.name === dir);
            if (!child) return [];
            current = child;
        }
        return current.children.map(child => child.name);
    }

    // Remove um arquivo ou diretório com base no caminho fornecido
    rm(path) {
        const directories = path.split('/');
        let current = this.root;
        directories.slice(0, -1).forEach(dir => {
            let child = current.children.find(child => child.name === dir);
            if (!child) return;
            current = child;
        });
        const file = current.children.find(child => child.name === directories[directories.length - 1]);
        if (file) current.removeChild(file);
    }
}

// Instancia o sistema de arquivos
const fs = new FileSystem();

// Cria diretórios e arquivos de exemplo
fs.mkdir('dir1/dir2');
fs.touch('dir1/file1.txt');
fs.touch('dir1/dir2/file2.txt');

// Exibe a estrutura de diretórios e arquivos
console.log(fs.ls('dir1')); // Output: ['file1.txt', 'dir2']
console.log(fs.ls('dir1/dir2')); // Output: ['file2.txt']

// Remove um arquivo e exibe a estrutura atualizada
fs.rm('dir1/file1.txt');
console.log(fs.ls('dir1')); // Output: ['dir2']
