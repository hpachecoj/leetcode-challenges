/**
 * @param {number[]} nums
 * @param {number[]} target
 * @return {number[][]}
 */

var fourSum = function(nums, target){
    //Primeiro devemos ordenar o array 'sums' com o método sort
    nums.sort((a,b) => a -b)
    //Array para armazenar os quadruplos encontrados
    const result = []

    const n = nums.length

    //Dois loops para selecionar os primeiros dois números do quadruplo ('nums[a]' e 'nums[b]')
    for(let i = 0; i < n - 3; i++){
        if (i > 0 && nums[i] === nums[i - 1]) continue // Evita duplicados para i
       for(let j = 1 + 1; j < n - 2; j++){
        if (j > i + 1 && nums[j] === nums[j - 1]) continue //Evita duplicados para j
       }
    }

  //Agora que temos os dois primeiros números vamos usar dois ponteiros
  //para encontrar os dois últimos números do quadruplo ('nums[left]' e 'nums[right]

  let left = j +1
  let right = n - 1
  while (left < right) {
    const sum = nums[i] + nums[j] + nums[left] + nums[right]
    if(sum  === target){
        result.push([nums[i], nums[left], nums[j], nums[right]])
        while (left < right && nums[left] === nums[left + 1]) left++ //
        while (left < right && nums[right] === nums[right - 1]) right--
        left++
        right--
        } else if (sum < target) {
            left++
            } else {
                right--
                }

    }
}


    console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
// Saída: [ [ -2, -1, 1, 2 ], [ -2, 0, 0, 2 ], [ -1, 0, 0, 1 ] ]


//Abaixo uma condicional 
if (target === 0) {
    return result
    } else {
        return []
        }
        };
        \end{code}
        


