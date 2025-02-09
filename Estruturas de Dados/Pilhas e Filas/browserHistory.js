// Classe que representa o histórico de navegação do navegador
class HistoricoNavegacao {
    constructor() {
        this.pilha = []; // Pilha principal para armazenar o histórico de páginas visitadas
        this.pilhaAvancar = []; // Pilha auxiliar para armazenar páginas ao voltar
    }

    // Método para visitar uma nova página
    visitarPagina(url) {
        this.pilha.push(url); // Adiciona a URL à pilha principal
        this.pilhaAvancar = []; // Limpa a pilha auxiliar ao visitar uma nova página
    }

    // Método para obter a página atual
    paginaAtual() {
        if (this.pilha.length > 0) {
            return this.pilha[this.pilha.length - 1]; // Retorna a última URL da pilha
        }
        return null; // Retorna null se a pilha estiver vazia
    }

    // Método para voltar à página anterior
    voltar() {
        if (this.pilha.length > 1) {
            this.pilhaAvancar.push(this.pilha.pop()); // Move a URL atual para a pilha auxiliar
        }
        return this.paginaAtual(); // Retorna a nova página atual
    }

    // Método para avançar para a próxima página
    avancar() {
        if (this.pilhaAvancar.length > 0) {
            this.pilha.push(this.pilhaAvancar.pop()); // Move a URL da pilha auxiliar de volta para a pilha principal
        }
        return this.paginaAtual(); // Retorna a nova página atual
    }
}

// Testando a classe HistoricoNavegacao
const historico = new HistoricoNavegacao();
historico.visitarPagina("https://exemplo.com"); // Visita a página exemplo.com
historico.visitarPagina("https://google.com"); // Visita a página google.com
historico.visitarPagina("https://wikipedia.org"); // Visita a página wikipedia.org
console.log(historico.paginaAtual());  // Saída esperada: https://wikipedia.org
historico.voltar(); // Volta para a página anterior
console.log(historico.paginaAtual());  // Saída esperada: https://google.com
historico.avancar(); // Avança para a próxima página
console.log(historico.paginaAtual());  // Saída esperada: https://wikipedia.org
