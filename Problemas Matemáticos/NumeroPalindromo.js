// Função para verificar se um número é palíndromo
var isPalindromo = function(x) {
    const main = () => {
        let num = Math.abs(x); // Considera o valor absoluto
        let reversed = 0;
        let original = num;

        do {
            let resto = num % 10;
            reversed = reversed * 10 + resto; // Constrói o número invertido
            num = Math.floor(num / 10);
        } while (num !== 0);

        return original === reversed; // Verifica se o original é igual ao invertido
    }
    
    return main();
}

// Exemplos de uso da função isPalindromo
console.log(isPalindromo(121));  // Saída: true
console.log(isPalindromo(-121)); // Saída: false
console.log(isPalindromo(10));   // Saída: false

function countDigits(N) {
    if (N === 0) return 1;
    return Math.floor(1 + Math.log10(Math.abs(N))); // Considera o valor absoluto
}

// Exemplos de uso da função countDigits
console.log(countDigits(123));   // Saída: 3
console.log(countDigits(12345)); // Saída: 5
console.log(countDigits(7));     // Saída: 1
console.log(countDigits(0));     // Saída: 1
console.log(countDigits("0")); 
console.log(countDigits("7")); 



