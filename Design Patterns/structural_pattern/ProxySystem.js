// Simulando acesso ao "banco de dados"
class PessoaDAO {
    static getPessoaByID(id) {
        console.log(`select * from PESSOA where id=${id}`);
        return new PessoaImpl(id, `Pessoa ${id}`);
    }
}

// Interface comum (representada por uma classe base em JS)
class Pessoa {
    getNome() {}
    getId() {}
}

// Objeto real
class PessoaImpl extends Pessoa {
    constructor(id, nome) {
        super();
        this.id = id;
        this.nome = nome;
        console.log(`Retornou a pessoa do banco de dados -> ${nome}`);
    }

    getNome() {
        return this.nome;
    }

    getId() {
        return this.id;
    }
}

// Proxy
class ProxyPessoa extends Pessoa {
    constructor(id) {
        super();
        this.id = id;
        this.pessoa = null; // Objeto real inicializado apenas quando necessário
    }

    getNome() {
        if (!this.pessoa) {
            this.pessoa = PessoaDAO.getPessoaByID(this.id);
        }
        return this.pessoa.getNome();
    }

    getId() {
        return this.id;
    }
}

// Exemplo de uso
const pessoas = [];

// Criando Proxies para encapsular acesso à classe PessoaImpl
pessoas.push(new ProxyPessoa("A"));
pessoas.push(new ProxyPessoa("B"));
pessoas.push(new ProxyPessoa("C"));

console.log("Nome: " + pessoas[0].getNome()); // Busca no banco
console.log("Nome: " + pessoas[1].getNome()); // Busca no banco
console.log("Nome: " + pessoas[0].getNome()); // Já buscou, retorna do cache

// A terceira pessoa nunca será consultada no banco (lazy loading)
console.log("Id da 3ª - " + pessoas[2].getId()); // Apenas retorna o ID
