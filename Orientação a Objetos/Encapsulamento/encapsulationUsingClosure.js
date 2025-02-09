/** Com funções closures, você pode criar variáveis privadas
 * que só podem ser acessadas dentro de uma função ou de um 
 * método específico.
 */


/*
* Closures are a powerful tool in JavaScript that allows you to create
* private variables that can only be accessed within a specific function or method.
*/


function Pessoa(nome) {
    let _nome = nome; // Variável privada

    this.getNome = function() {
        return _nome;
    };

    this.setNome = function(novoNome) {
        _nome = novoNome;
    };
}

let pessoa = new Pessoa("Henrique");
console.log(pessoa.getNome()); // Henrique
pessoa.setNome("João");
console.log(pessoa.getNome()); // João
console.log(pessoa._nome); // undefined (não é acessível diretamente)




function DataBase(nameDataBase){
    let _nameDataBase = nameDataBase;

    this.getNameDataBase = function(){
        return _nameDataBase;
    }

    this.setNameDataBase = function(){
        _nameDataBase = nameDataBase;
    }
}

let database = new DataBase("MySQL")
console.log(database.getNameDataBase()); // MySQL
database.setNameDataBase("PostGree")
console.log(database.getNameDataBase()); // PostGree
console.log(database._nameDataBase)
