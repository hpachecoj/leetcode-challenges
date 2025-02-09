const solution = (function(){
    /**
 * @param {string} s
 * @param {number}
 */

var lengthOfLongestSubstring = function(s){
    let start = 0
    let end = 0
    //Usar um conjunto (set) para armazenar os caracteres únicos da substring
    let uniqueChars = new Set()
   //Mover o ponteiro 'end' para a direitas e adicionar caracteres ao conjunto
   // até encontrar um caractere repetido
   while(end < s.length){
     if(!uniqueChars.has(s[end])){
         uniqueChars.add(s[end])
         end++
         }
         else{
             uniqueChars.delete(s[start])
             start++
             }
             }
 }
})




// var b = function(string){
// let i = 0
// let f = 0
// let uniqueChars = new Set()
// while(f < string.length){
//     if(!uniqueChars.has(string[f])){
//         uniqueChars.add(string[f])
//         f++
//         }
//         else{
//             uniqueChars.delete(string[i])
//             i++ 
//             }
// }
// }

// console.log(b('sksjnmssk'))


const number = [1, 5, 6, 8, 5, 6, 5, 8, 7, 8];

const string = ["Banana", "Pera", "Banana", "Maçã", "Pera", "Pitaia", "Pitaia"];

const uniqueNum = [...new Set(number)];
const uniqueStr = [...new Set(string)];

console.log(uniqueNum.sort()); // [ 1, 5, 6, 7, 8 ]
console.log(uniqueStr.sort()); // [ 'Banana', 'Maçã', 'Pera', 'Pitaia' ]

var alfa = [1,1,1,2,3,4,4,3,32,2]
var dic = [...new Set(alfa)]
console.log(typeof dic)
