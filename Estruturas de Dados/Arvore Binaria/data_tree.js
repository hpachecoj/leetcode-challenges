//Definição da Estrutura do Nó
class TreeNode {
    constructor(data) {
      this.data = data;  //Pode ser qualquer tipo de dados
      this.children = [] //Array para armazenar os nós filhos
    }
  }
  
  //Criar a Estrutura da Árvore
  class Tree {
    constructor(rootData) {
      this.root = new TreeNode(rootData); //Criar o nó raiz
    }
  
    //Método que percore e manipula dados encontrados nos nós da árvore
    traverseDFS(node = this.root){
      console.log(node.data); //Imprime o valor do nó atual
      node.children.forEach(child => {
        this.traverseDFS(child); //Chama a função recursivamente para os nós filhos
      });
    }
  
    //Método específico que busca nós com tipos de dados apenas number
    searchNumber(node = this.root){
      if (typeof node.data === 'number') {
        console.log(node.data);
      }
      node.children.forEach(child => {
        this.searchNumber(child);
      });
    }
  
    //Método específico que determina a profundidade máxima de uma árvore
    maxDepth(node = this.root){
      if (node.children.length === 0) {
        return 1;
      }
      return 1 + Math.max(...node.children.map(child => this.maxDepth(child)));
    }
  
    //Adiciona um novo nó como filho de um nó existente
    addChild(parentNode, childData) {
      const newNode = new TreeNode(childData)
      parentNode.children.push(newNode)
      return newNode //Retorna o novo nó para que ele possa ser referenciado
    }
  }
  
  //Exemplo de uso da árvore
  
  const myDataTree = new Tree({name:"Root", type:"Folder"})
  
  //Adiciona nós filhos ao nó raiz
  const child1 = myDataTree.addChild(myDataTree.root, "File 1.txt")
  const child2 = myDataTree.addChild(myDataTree.root, "File 2.txt")  
  const child3 = myDataTree.addChild(myDataTree.root, { name: "Folder 1", type: "Folder" });
  
  //Adiciona nós filhos ao primeiro filho
  myDataTree.addChild(child1, "Line of text in File 1")
  myDataTree.addChild(child2, 43) //Pode adicionar números
  myDataTree.addChild(child3, "56") //Adicionei uma string que deverá ser convertida em number
  
  //Adiciona um nó ao segundo filho que é um objeto
  const child4 = myDataTree.addChild(child3, {
    name: "File 3.txt",
    type: "File",
  })
  
  //Adiciona mais um filho ao novo nó
  myDataTree.addChild(child4, ["List", "of", "items"])
  
  //Usando o método traverse
  myDataTree.traverseDFS()
