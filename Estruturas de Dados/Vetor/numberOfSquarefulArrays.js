/**
 * @param {number[]} nums
 * @return {number}
 */

var numSquarefulPerms = function(nums) {
    // Função que verifica se um número é quadrado perfeito
    function isPerfectSquare(num) {
        const sqrt = Math.sqrt(num);
        return sqrt === Math.floor(sqrt);
    }

    // Função que gera todas as permutações do array
    function permutar(nums) {
        if (nums.length === 1) {
            return [nums];
        }

        const resultado = [];
        const used = new Set(); // Para evitar permutações duplicadas

        for (let i = 0; i < nums.length; i++) {
            if (used.has(nums[i])) continue;
            used.add(nums[i]);

            const elementoAtual = nums[i];
            const resto = nums.slice(0, i).concat(nums.slice(i + 1));
            const permutacoesResto = permutar(resto);

            for (let j = 0; j < permutacoesResto.length; j++) {
                resultado.push([elementoAtual].concat(permutacoesResto[j]));
            }
        }
        return resultado;
    }

    // Função que conta todas as permutações válidas
    function contarPermutacoesValidas(arr) {
        const permutacoes = permutar(arr);
        let count = 0;

        for (let i = 0; i < permutacoes.length; i++) {
            const permutacao = permutacoes[i];
            let isValid = true;

            for (let j = 0; j < permutacao.length - 1; j++) {
                const soma = permutacao[j] + permutacao[j + 1];
                if (!isPerfectSquare(soma)) {
                    isValid = false;
                    break;
                }
            }

            if (isValid) {
                count++;
            }
        }

        return count;
    }

    // Chamada para contar permutações válidas
    return contarPermutacoesValidas(nums);
};

// Exemplos de uso
console.log(numSquarefulPerms([1, 17, 8])); // Output: 2
console.log(numSquarefulPerms([2, 2, 2]));  // Output: 1
