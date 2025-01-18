// class Node {
//     constructor(data) {
//       this.data = data;
//       this.left = null;
//       this.right = null;
//     }
//   }
  
//   class BinarySearchTree {
//     constructor() {
//       this.root = null;
//     }
  
//     // Função para inserir um nó na árvore
//     insert(data) {
//       const newNode = new Node(data);
//       if (this.root === null) {
//         this.root = newNode;
//       } else {
//         this.insertNode(this.root, newNode);
//       }
//     }
  
//     insertNode(node, newNode) {
//       if (newNode.data < node.data) {
//         if (node.left === null) {
//           node.left = newNode;
//         } else {
//           this.insertNode(node.left, newNode);
//         }
//       } else {
//         if (node.right === null) {
//           node.right = newNode;
//         } else {
//           this.insertNode(node.right, newNode);
//         }
//       }
//     }
  
//     // Função para percorrer a árvore em ordem (in-order traversal)
//     inOrder(node, result = []) {
//       if (node !== null) {
//         this.inOrder(node.left, result);
//         result.push(node.data);
//         this.inOrder(node.right, result);
//       }
//       return result;
//     }
  
//     // Função para balancear a árvore
//     balance() {
//       const sortedArray = this.inOrder(this.root);
//       this.root = this.sortedArrayToBST(sortedArray, 0, sortedArray.length - 1);
//     }
  
//     // Função auxiliar para converter um array ordenado em uma árvore balanceada
//     sortedArrayToBST(arr, start, end) {
//       if (start > end) {
//         return null;
//       }
  
//       const mid = Math.floor((start + end) / 2);
//       const node = new Node(arr[mid]);
  
//       node.left = this.sortedArrayToBST(arr, start, mid - 1);
//       node.right = this.sortedArrayToBST(arr, mid + 1, end);
  
//       return node;
//     }
  
//     // Função para imprimir a árvore em ordem (para ver os resultados)
//     printInOrder() {
//       console.log(this.inOrder(this.root));
//     }
//   }
  




function main(){
    //Função construtura que cria objetos registros
    function Registro(nome, idade, altura){
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        }

        const reg = new Registro("Henrique", 23, 1.45);
        const listaRegistros = []
        listaRegistros.unshift(reg);
        
        const reg2 = new Registro("Alessandra", 23, 1.55);
        if(reg2.nome[0] === "A" && typeof reg2.nome[0] === "string"){
            listaRegistros.unshift(reg2.nome);
            return console.log(listaRegistros)
        }
}

main();


var list = {
    nome:'Jorge',
    reg: function(){
        return console.log(list.nome)
    }
}

list.reg();


var hash = {
    size: "14Kb",
    code: () =>{return hash.size}
}
console.log(hash.code())