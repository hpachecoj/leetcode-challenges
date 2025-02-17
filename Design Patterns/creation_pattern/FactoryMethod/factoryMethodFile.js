//Interface do Produto
class Produto{
    criar(){
        throw new Error("Este método deve ser sobrescrito!")
    }
}

//Implementação as classes concretas
class ProductConcretoA extends Produto{
    criar(){
        return 'Produto A criado!'
    }
}

class ProductConcretoB extends Produto{
    criar(){
        return 'Produto B criado!'
    }
}

class ProductConcretoC extends Produto{
    criar(){
        return 'Produto C criado!'
    }
}

//Factory Method 
class Criador{
    factoryMethod(tipo){
        switch(tipo){
            case 'A':
                return new ProductConcretoA();
            case 'B':
                return new ProductConcretoB();
            case 'C':
                return new ProductConcretoC();
            default:
                throw new Error(`Tipo de produto desconhecido.`)
        }
    }
}

//Uso do Factory Method
const criador = new Criador();

const produtoA = criador.factoryMethod('A');
console.log(produtoA.criar()); //Saída: Produto A criado!

const produtoB = criador.factoryMethod('B');
console.log(produtoB.criar()); //Saída: Produto B criado!

const produtoC = criador.factoryMethod('C');
console.log(produtoC.criar()); //Saída: Produto C criado!

const produtoD = criador.factoryMethod('D');
console.log(produtoD.criar()); //Saída: "Tipo de produto desconhecido."
