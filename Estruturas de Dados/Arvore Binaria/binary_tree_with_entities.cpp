#include <iostream>
#include <cstdlib>
#include <ctime>

// Estrutura que representa a Entidade com três atributos numéricos de 4 dígitos
struct Entidade {
    int atributo1;
    int atributo2;
    int atributo3;

    // Construtor que gera valores aleatórios de 4 dígitos
    Entidade() {
        atributo1 = 1000 + rand() % 9000;
        atributo2 = 1000 + rand() % 9000;
        atributo3 = 1000 + rand() % 9000;
    }

    // Exibir os atributos da entidade
    void mostrar() const {
        std::cout << "Atributo 1: " << atributo1 << ", Atributo 2: " << atributo2 << ", Atributo 3: " << atributo3 << std::endl;
    }
};

// Estrutura da árvore binária
struct Node {
    Entidade entidade;
    Node* esquerda;
    Node* direita;

    Node(Entidade e) : entidade(e), esquerda(nullptr), direita(nullptr) {}
};

// Função para inserir uma entidade na árvore binária com base em um dos atributos
Node* inserir(Node* raiz, Entidade entidade) {
    if (!raiz) {
        return new Node(entidade);
    }
    
    if (entidade.atributo1 < raiz->entidade.atributo1) {
        raiz->esquerda = inserir(raiz->esquerda, entidade);
    } else {
        raiz->direita = inserir(raiz->direita, entidade);
    }
    return raiz;
}

// Função para realizar um percurso em ordem na árvore binária
void emOrdem(Node* raiz) {
    if (raiz) {
        emOrdem(raiz->esquerda);
        raiz->entidade.mostrar();
        emOrdem(raiz->direita);
    }
}

int main() {
    srand(static_cast<unsigned>(time(0))); // Inicializar o gerador de números aleatórios

    // Criar 10 instâncias de Entidade e armazená-las em uma árvore binária
    Node* raiz = nullptr;
    for (int i = 0; i < 10; ++i) {
        Entidade entidade;
        entidade.mostrar();
        raiz = inserir(raiz, entidade);
    }

    std::cout << "\nPercorrendo a árvore em ordem:\n";
    emOrdem(raiz);

    return 0;
}
