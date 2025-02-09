function romanToInt(s) {
    // Dicionário para mapear símbolos romanos para valores inteiros
    const romanValues = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
    };
  
    // Inicializa o resultado
    let result = 0;
  
    // Itera sobre o número romano
    for (let i = 0; i < s.length; i++) {
      // Verifica se o símbolo atual é menor que o próximo
      if (i < s.length - 1 && romanValues[s[i]] < romanValues[s[i + 1]]) {
        // Se for, subtrai o valor do símbolo atual do resultado
        result -= romanValues[s[i]];
      } else {
        // Caso contrário, adiciona o valor do símbolo atual ao resultado
        result += romanValues[s[i]];
      }
    }
  
    return result;
  }


  console.log(romanToInt('XXII'))
