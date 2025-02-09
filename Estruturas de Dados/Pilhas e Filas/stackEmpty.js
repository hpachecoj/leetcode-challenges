// Dada uma cadeia de caracteres contendo apenas os caracteres , , , e , 
// determine se a cadeia de caracteres de entrada é válida.

// Uma cadeia de caracteres de entrada é válida se:

// Os colchetes abertos devem ser fechados pelo mesmo tipo de colchetes.
// Os colchetes abertos devem ser fechados na ordem correta.
// Cada colchete fechado tem um colchete aberto correspondente do mesmo tipo.

function isValidString(inputString) {
    const stack = new Stack();
    const mapping = { ')': '(', '}': '{', ']': '[' };
    for (let i = 0; i < inputString.length; i++) {
        const char = inputString[i];
        if (char === '(' || char === '{' || char === '[') {
            stack.PUSH(char);
        } else if (char === ')' || char === '}' || char === ']') {
            if (stack.STACK_EMPTY()) return false; // Se a pilha estiver vazia, a string não é válida
            const top = stack.POP();
            if (mapping[char] !== top) return false; // Se o caractere de fechamento não combinar com o caractere de abertura, a string não é válida
        }
    }
    return stack.STACK_EMPTY(); // A string é válida se a pilha estiver vazia no final
}


