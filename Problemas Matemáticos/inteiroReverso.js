/**Leetcode: https://leetcode.com/problems/reverse-integer/?envType=problem-list-v2&envId=math  */

/**
* @param {number}x
* @return {number}
*/
var x =-100

var reverse = function(x){
//Determina se o número é negativo
const negative = x < 0;
if(negative){x = -x}; 

//Inverte os dígitos do número
const reverseStr = String(x).split('').reverse().join('');
let reverInt = parseInt(reverseStr, 10);

//Restaura o sinal negativo se necessário
if(negative){ reverInt = -reverInt};

//Verifica se o número invertido está dentro do intervalo de 32 bits
if(reverInt < Math.pow(-2,31) || reverInt > Math.pow(2,31)-1){return 0;}

return reverInt;


}

console.log( reverse(x))
