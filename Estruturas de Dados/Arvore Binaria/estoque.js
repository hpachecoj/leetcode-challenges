const listaEstoque =[
    ['Elétrico', [{nomeProduto:"lâmpada 15w"},
                  {nomeProduto:"lâmpada 15w"},
                  {nomeProduto:"lâmpada 15w"},
                  {nomeProduto:"lâmpada 15w"},
    ]],
    [ 'Hidráulico',[{nomeProduto:"lâmpada 15w"},
                    {nomeProduto:"lâmpada 15w"},
                    {nomeProduto:"lâmpada 15w"},
                    {nomeProduto:"lâmpada 15w"},

    ]],
    ['Manutenção', [{nomeProduto:"lâmpada 15w"},
                    {nomeProduto:"lâmpada 15w"},
                    {nomeProduto:"lâmpada 15w"},
                    {nomeProduto:"lâmpada 15w"},
]],

]


class Item{
    _nome
    _quantidade
    _dataEntrada
    _dataSaida
    constructor(nomeProduto, quantidadeProduto, dataEntradaProduto, dataSaidaProduto){
        this._nome = nomeProduto
        this._quantidade = quantidadeProduto
        this._dataEntrada = dataEntradaProduto
        this._dataSaida = dataSaidaProduto
    }

    verificaEstoque(){
        if(this._quantidade === null){
            console.log("Estoque está vazio");
        }else if(this._quantidade !== null){
               this.verificaProduto()
        }
    }

    verificaProduto(){
      return this._quantidade
    }
}


class Node{
    constructor(produto){
        this.produto = produto
        this.esquerda = null;
        this.direita = null;
    }
}


class ArvoreBinaria{
    constructor(){
        this.raiz = null
    }

    inserir(produto){
        if(this.raiz === null){
            this.raiz = new Node(produto)
        }else{
            this.inserirNo(this.raiz, produto)
        }
    }

    // Método para inserir um novo produto em um nó específico da árvore
    inserirNo(no, produto) {
        if (produto.codigo < no.produto.codigo) {
          if (no.esquerda === null) {
            no.esquerda = new Node(produto);
          } else {
            this.inserirNo(no.esquerda, produto);
          }
        } else {
          if (no.direita === null) {
            no.direita = new Node(produto);
          } else {
            this.inserirNo(no.direita, produto);
          }
        }
    }

    // Método para buscar um produto pela código
    buscar(codigo) {
        return this.buscarNo(this.raiz, codigo);
    }

    // Método para buscar um produto em um nó específico da árvore
    buscarNo(no, codigo) {
        if (no === null) {
          return null;
        }
        if (codigo === no.produto.codigo) {
          return no.produto;
        }
        if (codigo < no.produto.codigo) {
          return this.buscarNo(no.esquerda, codigo);
        } else {
          return this.buscarNo(no.direita, codigo);
        }
    }

    // Método para listar todos os produtos em estoque
    listar() {
        const produtos = [];
        this.listarNo(this.raiz, produtos);
        return produtos;
    }

    // Método para listar todos os produtos em um nó específico da árvore
    listarNo(no, produtos) {
        if (no !== null) {
          this.listarNo(no.esquerda, produtos);
          produtos.push(no.produto);
          this.listarNo(no.direita, produtos);
        }
    }
}

// Exemplo de uso
const arvore = new ArvoreBinaria();

// Inserir produtos
arvore.inserir(new Produto(1, "Produto 1", 10.99, 5));
arvore.inserir(new Produto(2, "Produto 2", 5.99, 3));
arvore.inserir(new Produto(3, "Produto 3", 7.99, 2));

// Buscar produto
const produto = arvore.buscar(2);
console.log(produto); // { codigo: 2, nome: "Produto 2", preco: 5.99, quantidade: 3 }

// Listar produtos
const produtos = arvore.listar();
console.log(produtos);
// [
//   { codigo: 1, nome: "Produto 1", preco: 10.99, quantidade: 5 },
//   { codigo: 2, nome: "Produto 2", preco: 5.99, quantidade: 3 },
//   { codigo: 3, nome: "Produto 3", preco: 7.99, quantidade: 2 }
