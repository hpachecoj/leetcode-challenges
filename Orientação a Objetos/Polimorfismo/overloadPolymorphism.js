/** Polimorfismo de Sobrecarga*/

function somar(a,b){
    if(typeof b === "undefined"){
        return function(b){
            return a + b;
        }
    }

    return a + b
}
console.log(somar(2, 3)); // 5
console.log(somar(2)(3)); // 5

/** A condição para se fazer o cálculo é: o número tem que ser number e estar entre 5 e 15 */
var insertNumberAndConvert = (entry) =>{
    let typeNumberInsert =  typeof  entry === "number"?true:false
    if(typeNumberInsert){
        if(entry >= 5 && entry <= 15){
              const calculo = (entry) =>{
                return entry * 2
              }
              return console.log(calculo(entry))
            }
    }
}
insertNumberAndConvert(45)
