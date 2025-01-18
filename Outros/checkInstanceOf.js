var checkIfInstanceOf = function(obj, classFunction) {
   return obj instanceof classFunction;
   
};

class Objeto{
   constructor(nome) {
      this.nome = nome;
   }
}
const obj = new Objeto("Cadeira")
var r=checkIfInstanceOf(obj, Objeto)
console.log(r)