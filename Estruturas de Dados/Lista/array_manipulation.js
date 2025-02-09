// Definição de dois arrays com diferentes tipos de elementos
const arr = [1, 2, 3, "4", 5, 6];
const arr2 = [12, 13, '12'];

// Função para concatenar os dois arrays
var concat = function() {
    let conc = arr.concat(arr2);
    return conc;
}

// Concatena os arrays e armazena o resultado em 'resp'
const resp = concat(); 
console.log(resp); // Imprime o array concatenado

// Função para selecionar um elemento aleatório do array concatenado e identificar seu tipo
let listInsertElements = [];
for (let index = 0; index < resp.length; index++) {
    // Gera um índice aleatório dentro do comprimento do array
    let randomIndex = Math.floor(Math.random() * resp.length);
    // Seleciona o elemento no índice aleatório
    let element = resp[randomIndex];
    
    // Verifica o tipo do elemento e preenche o array com uma mensagem apropriada
    if (typeof element === 'string') {
        listInsertElements.push(`O elemento ${element} é uma string`);
    } else if (typeof element === 'number') {
        listInsertElements.push(`O elemento ${element} é um number`);
    }
}

// Exibe o array preenchido com os resultados no console
console.log(listInsertElements);

// Se o primeiro elemento do array é um número, adiciona-o novamente ao array
if (typeof listInsertElements[0] === 'number') {
    var r = listInsertElements.push(listInsertElements[0]);
    console.log("Oi " + r);
}

// Código comentado para verificar o tipo de um elemento aleatório
// var dizz = function(listInsertElements){
//     if(typeof listInsertElements[Math.random()*listInsertElements.length] === 'string' ){
//         return 'É uma string'
//     }else
//     if(typeof listInsertElements[Math.random()*listInsertElements.length] === 'number'){
//         return 'É um number'
//     }
// }

// console.log(`Resultado: ${dizz()}`)
