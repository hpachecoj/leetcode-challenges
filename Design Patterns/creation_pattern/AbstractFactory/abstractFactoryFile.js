class Pessoa {
    constructor(nome, idade, cidade, bairro, telefone, email, peso, altura, casado, profissao) {
        this.nome = nome;
        this.idade = idade;
        this.cidade = cidade;
        this.bairro = bairro;
        this.telefone = telefone;
        this.email = email;
        this.peso = peso;
        this.altura = altura;
        this.casado = casado;
        this.profissao = profissao;
    }

    getNome() {
        return this.nome;
    }

    setNome(nome) {
        this.nome = nome;
    }

    getIdade() {
        return this.idade;
    }

    setIdade(idade) {
        this.idade = idade;
    }

    getCidade() {
        return this.cidade;
    }

    setCidade(cidade) {
        this.cidade = cidade;
    }

    getBairro() {
        return this.bairro;
    }

    setBairro(bairro) {
        this.bairro = bairro;
    }

    getTelefone() {
        return this.telefone;
    }

    setTelefone(telefone) {
        this.telefone = telefone;
    }

    getEmail() {
        return this.email;
    }

    setEmail(email) {
        this.email = email;
    }

    getPeso() {
        return this.peso;
    }

    setPeso(peso) {
        this.peso = peso;
    }

    getAltura() {
        return this.altura;
    }

    setAltura(altura) {
        this.altura = altura;
    }

    isCasado() {
        return this.casado;
    }

    setCasado(casado) {
        this.casado = casado;
    }

    getProfissao() {
        return this.profissao;
    }

    setProfissao(profissao) {
        this.profissao = profissao;
    }


    toString() {
        return `Pessoa {
            nome: ${this.nome},
            idade: ${this.idade},
            cidade: ${this.cidade},
            bairro: ${this.bairro},
            telefone: ${this.telefone},
            email: ${this.email},
            peso: ${this.peso},
            altura: ${this.altura},
            casado: ${this.casado},
            profissao: ${this.profissao}
          }`;
    }
}
function main() {
    const pessoa = new PessoaBuilder()
        .nome("João")
        .idade(30)
        .cidade("São Paulo")
        .bairro("Centro")
        .telefone("11-99999-9999")
        .email("joao@email.com")
        .peso(80.5)
        .altura(1.75)
        .casado(true)
        .profissao("Engenheiro")
        .build();

    console.log(pessoa.toString());
}
main()
