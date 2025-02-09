
/** Outra forma de encapsular propriedades é através de getters e 
 * setters, que permitem controle sobre como os dados são acessados e modificados. */

class Pessoa {
    constructor(nome) {
        this._nome = nome; // Convenção para indicar uma propriedade "privada"
    }

    get nome() {
        return this._nome;
    }

    set nome(novoNome) {
        this._nome = novoNome;
    }
}

let pessoa = new Pessoa("Henrique");
console.log(pessoa.nome); // Henrique
pessoa.nome = "João";
console.log(pessoa.nome); // João
