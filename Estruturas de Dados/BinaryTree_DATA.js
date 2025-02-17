class Nodo{
    constructor(valor){
        this.valor = valor
        this.direito = null
        this.esquerdo = null
    }
}

class ArvoreBinaria{
    constructor(){
        this.raizArvore = null
    }

    //Métodos
    inserirValor(valor){
        const novoNodo = new Nodo(valor)
        if(!this.raizArvore){
            this.raizArvore = novoNodo
            return
        }

        let current = this.raizArvore
        while(true){
            if(valor < current.valor){
                if(!current.esquerdo){
                    current.esquerdo = novoNodo
                    return 
                }
                current = current.esquerdo
            }else{
                if(!current.direito){
                    current.direito = novoNodo
                    return
                }
                current = current.direito
            }
        }
    }

    //Percurso em ordem
    emOrdemDeTravessia(node = this.raizArvore){
        if(node){
            this.emOrdemDeTravessia(node.esquerdo)
            console.log(node.valor)
            this.emOrdemDeTravessia(node.direito)
        }
    }
}


//Criando e testando a árvore binária
const tree = new ArvoreBinaria()
tree.inserirValor(3)
tree.inserirValor(4)
tree.inserirValor(10)
tree.inserirValor(45)

console.log("Árvore em ordem crescente:")
tree.emOrdemDeTravessia


function Main(){
    class TreeCollection{
        constructor(){}
        getDepthIterator(){}
        getBreadhIterator(){}
    }

    class DepthFirstIterator  extends TreeCollection{
        constructor(currentElement){
            this.currentElement = currentElement
        }
        getNext(){

        }
        hasMore(){

        }
    }

    class BreadthFirstIterato extends TreeCollection{
        constructor(currentElement) {
            this.currentElement = currentElement
        }
        getNext(){

        }
        haMore(){
            
        }
    }
}