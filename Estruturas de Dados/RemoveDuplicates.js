// Função para remover duplicatas de um array
function removeDuplicates(nums){
    // Se o array estiver vazio, retorna 0
    if(nums.length === 0) return 0
    // Inicializa um índice para o elemento atual
    let j = 0
    // Percorre o array começando do segundo elemento
    for(let i = 1; i< nums.length; i++){
        // Se o elemento atual for diferente do elemento na posição j, incrementa j e atribui o elemento atual à posição j
        if(nums[i] !== nums[j]){
            j++
            nums[j] = nums[i]
        }
    }

    // Retorna o número de elementos únicos, que é j + 1
    return j + 1
}

// Exemplo de uso
let nums1 = [1,1,2]
// Chama a função e armazena o resultado em k1
let k1 = removeDuplicates(nums1)
// Imprime o número de elementos únicos
console.log(k1)
// Imprime os elementos únicos do array
console.log(nums1.slice(0,k1))
