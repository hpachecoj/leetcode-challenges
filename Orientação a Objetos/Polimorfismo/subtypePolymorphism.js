/** Polimorfismo de subtipo */

class Animal{
    fazerSom(){
        console.log("Som de animal")
    }
}

class Cachorro extends Animal{
    fazerSom(){
        console.log("Latido de cachorro")
        }
}

let animal = new Animal()
let cachorro = new Cachorro()

animal.fazerSom()
cachorro.fazerSom()


//Polimorfismo em ação
let meuAnimal = new Cachorro()
meuAnimal.fazerSom() // Latido de cachorro
