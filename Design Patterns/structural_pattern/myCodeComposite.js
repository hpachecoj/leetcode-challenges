// Classe base para os componentes da árvore (Composite Pattern)
class Component {
    constructor() {
      if (this.constructor === Component) {
        throw new Error("Component é uma classe abstrata e não pode ser instanciada.");
      }
    }
  
    // Método para calcular o valor
    calculate() {
      throw new Error("Método calculate() deve ser implementado.");
    }
  }
  
  // Classe para números (folhas)
  class Number extends Component {
    constructor(value) {
      super();
      this.value = value;
    }
  
    calculate() {
      return this.value;
    }
  }
  
  // Classe para operações (nós internos)
  class Operation extends Component {
    constructor(operator, left, right) {
      super();
      this.operator = operator;
      this.left = left;
      this.right = right;
    }
  
    calculate() {
      const leftValue = this.left.calculate();
      const rightValue = this.right.calculate();
  
      switch (this.operator) {
        case "+":
          return leftValue + rightValue;
        case "-":
          return leftValue - rightValue;
        case "*":
          return leftValue * rightValue;
        case "/":
          return leftValue / rightValue;
        default:
          throw new Error(`Operador desconhecido: ${this.operator}`);
      }
    }
  }
  
  // Construindo a árvore para a expressão (3 + 5) * (10 - 4)
  const tree = new Operation(
    "*",
    new Operation("+", new Number(3), new Number(5)),
    new Operation("-", new Number(10), new Number(4))
  );
  
  // Calculando o resultado
  const result = tree.calculate();
  console.log(`Resultado da expressão: ${result}`); // Deve imprimir: Resultado da expressão: 48