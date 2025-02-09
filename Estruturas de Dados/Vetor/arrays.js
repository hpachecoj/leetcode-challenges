//Arrays e seus métodos

//Aprendendo o conceito matemático de Conjuntos
// const N = [0,1,2,3,4,5,6,7,8,9] //conjunto dos números naturais
// const Z = [-3,-2,-1,0,1,2,3,4,5,6] // conjunto dos números inteiros
// const Q = [1/2, 1/3, 2/3, 1/4, 3/4, 1/5, 2/5, 3/5, 4/5] //conjuntos dos números racionais
// const R = [1.4142135624, 3.1415926535] //conjuntos dos números reais


// const VOGAIS = [a,e,i,o,u]
// const CONSOANTES = [a,b,]

// class Server{
//     constructor(ip, url){
//         this.ip = ip
//         this.url = url
//     }
// }

// const server_apache = new Server()
// server_apache.ip = '192.898.00'
// server_apache.url = 'https://www.apacheserver.com/hostmain/rout/index.hml'


const union = () => {
    const n = ["a", "b", "c", "d", "e"];
    const m = ["x", "p", "b", "c"];
  
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
