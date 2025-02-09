function dizz(){
  const union = () => {
    const n = [1, 2, 3, 4, 5];
    const m = [6, 7, 3, 4];
  
    function Union() {
      let union = [];
      union = [...new Set([...n, ...m])];
      return union;
    }
  
    function Intersection() {
      let intersection = [];
      intersection = n.filter((value) => m.includes(value));
      return intersection;
    }
  
    function difference() {
      let difference = [];
      difference = n.filter((value) => !m.includes(value));
      return difference;
    }
  
    let u = Union();
    let i = Intersection();
    let d = difference();
  
    let resultFinally = [u, i, d];
    return resultFinally;
  };
  
  let result = union();
  console.log(`A união entre os dois conjuntos é: ${result[0]}`);
  console.log(`A intersecção entre os dois elementos é ${result[1]}`);
  console.log(`A diferença entre os dois elementos é: ${result[2]}`);
}

function bizz(){
  let listOfAIs = new Set(["ChatGPT", "Gemini", "Blackbox", "Perplexity"])  
let version = new Set(["v1.0", "v3.3", "v1.0.02", "v1.3", "v2.0", "v4.1", "v5.0"])
//União
let union = new Set([...listOfAIs,...version])
console.log(`União: `, Array.from(union))
let intersection = new Set([...listOfAIs].filter(value => version.has(value)))
console.log(`Intersecção: `, Array.from(intersection))
if(Array.from(intersection) == []){ console.log("Conjunto vazio")}else{console.log("Conjunto não vazio")}
}

function mizz(){
  class MathSet {
    constructor(elements = []) {
        this.set = new Set(elements);
    }
  
    union(otherSet) {
        return new MathSet([...this.set, ...otherSet.set]);
    }
  
    intersection(otherSet) {
        return new MathSet([...this.set].filter(value => otherSet.set.has(value)));
    }
  
    difference(otherSet) {
        return new MathSet([...this.set].filter(value => !otherSet.set.has(value)));
    }
  
    toArray() {
        return Array.from(this.set);
    }
  }
  
  let setA = new MathSet([1, 2, 3, 4]);
  let setB = new MathSet([3, 4, 5, 6]);
  
  console.log("União:", setA.union(setB).toArray()); // [1, 2, 3, 4, 5, 6]
  console.log("Interseção:", setA.intersection(setB).toArray()); // [3, 4]
  console.log("Diferença:", setA.difference(setB).toArray()); // [1, 2]
  
}
