/** Desde a introdução das propriedades privadas no ECMAScript 2022, você pode usar o 
 * símbolo # para definir campos privados diretamente dentro de uma classe. */

class Pessoa {
    #nome; // Campo privado

    constructor(nome) {
        this.#nome = nome;
    }

    getNome() {
        return this.#nome;
    }

    setNome(novoNome) {
        this.#nome = novoNome;
    }
}

let pessoa = new Pessoa("Henrique");
console.log(pessoa.getNome()); // Henrique
pessoa.setNome("João");
console.log(pessoa.getNome()); // João
console.log(pessoa.#nome); // SyntaxError: Private field '#nome' must be declared in an enclosing class
