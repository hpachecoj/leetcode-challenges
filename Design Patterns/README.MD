# Design Patterns: Comparação Geral e Classificação

## Comparação Geral dos Padrões

Os **Design Patterns** (Padrões de Projeto) são soluções reutilizáveis para problemas comuns no desenvolvimento de software. Eles ajudam a criar sistemas mais estruturados, escaláveis e fáceis de manter.

### 1. **Padrões de Criação**
Esses padrões tratam da criação de objetos, abstraindo ou adiando a lógica de instanciamento. Eles ajudam a tornar o código mais flexível e desacoplado.

| Padrão           | Descrição                                                                 | Exemplo de Uso                                  |
|------------------|---------------------------------------------------------------------------|------------------------------------------------|
| **Factory Method** | Define uma interface para criar objetos, mas permite que subclasses decidam qual classe instanciar. | Criação de diferentes tipos de usuários.       |
| **Abstract Factory** | Fornece uma interface para criar famílias de objetos relacionados sem especificar suas classes concretas. | Interface gráfica com temas diferentes.        |
| **Builder**        | Permite a criação passo a passo de objetos complexos.                  | Construção de objetos com configurações variadas. |
| **Prototype**      | Cria novos objetos copiando uma instância existente.                   | Clonagem de objetos com estruturas similares.  |
| **Singleton**      | Garante que uma classe tenha apenas uma instância no sistema.          | Gerenciamento de configurações ou conexões.    |

### 2. **Padrões Estruturais**
Estes padrões lidam com a composição de classes ou objetos para formar estruturas maiores e mais flexíveis.

| Padrão           | Descrição                                                                 | Exemplo de Uso                                  |
|------------------|---------------------------------------------------------------------------|------------------------------------------------|
| **Adapter**       | Converte a interface de uma classe em outra que o cliente espera.        | Integração com APIs ou bibliotecas legadas.    |
| **Bridge**        | Desacopla a abstração da implementação, permitindo que ambas variem independentemente. | Separação de lógica de negócios e visualização. |
| **Composite**     | Permite tratar objetos individuais e composições de objetos de maneira uniforme. | Representação de árvores (ex.: DOM).          |
| **Decorator**     | Adiciona funcionalidades a objetos dinamicamente sem modificar sua classe. | Adicionar log ou cache a métodos.             |
| **Facade**        | Fornece uma interface simplificada para um conjunto de interfaces mais complexas. | API simplificada para um sistema complexo.    |
| **Flyweight**     | Minimiza o uso de memória compartilhando objetos semelhantes.            | Renderização de objetos gráficos repetidos.   |
| **Proxy**         | Fornece um substituto ou lugar para controlar o acesso a um objeto.      | Controle de acesso a recursos remotos.        |

### 3. **Padrões Comportamentais**
Esses padrões se concentram em como as classes ou objetos interagem e se comunicam.

| Padrão           | Descrição                                                                 | Exemplo de Uso                                  |
|------------------|---------------------------------------------------------------------------|------------------------------------------------|
| **Chain of Responsibility** | Passa uma solicitação por uma cadeia de manipuladores até que seja resolvida. | Manipulação de eventos em interfaces gráficas. |
| **Command**       | Encapsula uma solicitação como um objeto, permitindo que você parametrize ações. | Implementação de "Desfazer" (Undo).          |
| **Interpreter**   | Define uma representação para gramáticas e interpreta expressões.        | Parsing de linguagens específicas.            |
| **Iterator**      | Fornece uma maneira de acessar elementos de uma coleção sequencialmente. | Navegação em listas ou arrays.                |
| **Mediator**      | Reduz as dependências entre objetos, controlando sua comunicação.        | Controle de widgets em uma interface gráfica. |
| **Memento**       | Permite restaurar um estado anterior de um objeto.                      | Implementação de "Salvar" e "Restaurar".   |
| **Observer**      | Define uma dependência um-para-muitos entre objetos para que todos sejam notificados de mudanças. | Sistema de eventos ou notificações.           |
| **State**         | Permite que um objeto altere seu comportamento quando seu estado interno muda. | Implementação de máquinas de estado.          |
| **Strategy**      | Define uma família de algoritmos, encapsula cada um e os torna intercambiáveis. | Implementação de diferentes métodos de pagamento. |
| **Template Method** | Define o esqueleto de um algoritmo, permitindo que subclasses implementem partes específicas. | Processamento de dados em etapas.             |
| **Visitor**       | Representa uma operação a ser realizada em elementos de uma estrutura de objetos. | Análise de estruturas complexas como árvores. |

---

## Classificação dos Padrões

### **1. Padrões de Criação**
- Factory Method
- Abstract Factory
- Builder
- Prototype
- Singleton

### **2. Padrões Estruturais**
- Adapter
- Bridge
- Composite
- Decorator
- Facade
- Flyweight
- Proxy

### **3. Padrões Comportamentais**
- Chain of Responsibility
- Command
- Interpreter
- Iterator
- Mediator
- Memento
- Observer
- State
- Strategy
- Template Method
- Visitor

---

Se precisar de exemplos detalhados ou de ajuda com um padrão específico, é só perguntar! 🚀
