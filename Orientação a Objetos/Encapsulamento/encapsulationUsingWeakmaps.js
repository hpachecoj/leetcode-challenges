/** Com WeakMap, você pode associar propriedades privadas a um objeto, mantendo-as ocultas do escopo externo. */

const _dadosPrivados = new WeakMap();

class Pessoa {
    constructor(nome) {
        _dadosPrivados.set(this, { nome });
    }

    getNome() {
        return _dadosPrivados.get(this).nome;
    }

    setNome(novoNome) {
        _dadosPrivados.get(this).nome = novoNome;
    }
}

let pessoa = new Pessoa("Henrique");
console.log(pessoa.getNome()); // Henrique
pessoa.setNome("João");
console.log(pessoa.getNome()); // João
console.log(pessoa.nome); // undefined (não é acessível diretamente)
