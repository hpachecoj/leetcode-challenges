
/**
 * Conceitos básicos de arrays, vetores e matrizes
 */

// const versio = [ 1,2,3,4]

// const matriz = [
//     [{nome:'casa', id:23},{nome:'cadeira', id:34},
//      {nome: 'computador', id:22}, {nome:'livro', id:12},
//      {nome:'garrafa', id:45}, {nome:'caderno', id:89}   
//     ],
//     [{}, {}, {}, {}, {}, {}]
// ]
// console.log(matriz[0][0].id)


/**
 * Conceitos básicos de Pilhas
 */

class Pilha{
    constructor(){
        this.elementos = []
    }

    push(elementos){
        this.elementos.push(elementos)
    }

    pop(){
        this.elementos.pop()
    }
}

const p1 = new Pilha()
p1.push('12') //Acrescenta um elemento na pilha 
console.log(p1) 
p1.push(12)  //Acrescenta outro elemento na pilha 
console.log(p1)
p1.pop(12)   //Elimina um outro elemento na pilha


/**
 * Conceitos básicos de filas
 */

class Fila{
    constructor(){
        this.elemento = []
    }
//Para adicionar um elemento no final da fila
    enqueue(elemento){
        this.elemento.push(elemento)
    }
//Para remover um elemeno no início da fila 
    dequeue(){
        this.elemento.shift()
    }
}

const filaDeAtendimento = new Fila()
filaDeAtendimento.enqueue('Vanessa') //Adiciona um elemento no final da fila
filaDeAtendimento.enqueue('Gabriel') //Adiciona um elemento no final da fila
filaDeAtendimento.dequeue('Gabriel') //Elimina um elemento no início da fila
console.log(`A fila de atendimento é ${filaDeAtendimento}`) 


/**
 * Conceitos básicos de árvore - árvore binária de busca,
 */

class Arvore{
    constructor(){
        this.nos ={}
    }
    //Método de inserção de nós
    inserir(arvore, valor){
        if(arvore.valor){
            if(valor > arvore.valor){
                this.inserir(arvore.direta, valor)

                
            }else{
                this.inserir(arvore.esquerda, valor)
            }
        }else{
            arvore.valor = valor
            arvore.direta ={}
            arvore.esquerda ={}
        }
    }
}

const novaArvore = new Arvore()
novaArvore.inserir(novaArvore.nos, 23)
novaArvore.inserir(novaArvore.nos, 12)
novaArvore.inserir(novaArvore.nos, 4)
novaArvore.inserir(novaArvore.nos, 18)
novaArvore.inserir(novaArvore.nos, 1)
novaArvore.inserir(novaArvore.nos, 27)
novaArvore.inserir(novaArvore.nos, 25)
console.log(novaArvore)
