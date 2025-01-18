
    /**
 *  @param {number[]} height
 *   @return {number}
 */

    var maxArea = function(height) {
        let left = 0;             // Ponteiro no início
        let right = height.length - 1;  // Ponteiro no final
        let maxArea = 0;          // Variável para armazenar a área máxima
    
        // Enquanto os dois ponteiros não se cruzam
        while (left < right) {
            // Calcula a altura mínima entre as duas linhas
            let minHeight = Math.min(height[left], height[right]);
            // Calcula a área atual
            let area = minHeight * (right - left);
            // Atualiza a área máxima se a área atual for maior
            maxArea = Math.max(maxArea, area);
    
            // Move o ponteiro da linha de menor altura
            if (height[left] < height[right]) {
                left++;
            } else {
                right--;
            }
        }
    
        return maxArea;  // Retorna a área máxima encontrada
    };
    



