/** Elaborei um código simples onde adiciona várias camadas de solo
 *  Cada camada possui diversas características
 */


//Classe que criar objetos Camada - De acordo com as características reais do solo, o objeto
//será instanciando de acordo com tais informações
class CamadaSolo{
    constructor(tipoSolo,horizonte, nome, textura, presencaAreia, presencaArgila){
       this.tipoSolo = tipoSolo
       this.horizonte = horizonte
       this.nome = nome
       this.textura = textura
       this.presencaAreia = presencaAreia
       this.presencaArgila = presencaArgila
       this.proprieadadesQuimicas = {
            porcentagemElementosNaturais:null,
            quantidadeAr:null,
            quantidadeAgua:null,
            materiaOrganica:null
       }
    }
    adicionaPropriedadesQuimicas(){
        this.proprieadadesQuimicas = {porcentagemElementosNaturais:24, quantidadeAgua:45,quantidadeAr:12,materiaOrganica:false}
    }

}


class Camada{
    constructor(){
        this.pilhaDeCamadaDeSolo = []
        this.top = -1 //Inicializa o topo da pilha com -1, indicando que está vazia
    }
    
    //Métodos do classe Camada

    /**Verifica se a pilha está vazia */
    stack_empty(){
        return this.top === -1 // Retorna true se o topo for -1, indicando que a pilha está vazia
    }
  
    /**Adiciona um elemento à pilha */
    push(x){
        this.top += 1 //Incrementa o topo
        this.pilhaDeCamadaDeSolo[this.top] = x //Adiciona o elemento no topo da pilha
    }
    /**Remove e retorna o elemento do topo da pilha */
    pop(){
        if(this.stack_empty()){
            throw new Error("underflow") //Lança um erro se a pilha estiver vazia
        }else{
            const armazenaTopoPilha = this.pilhaDeCamadaDeSolo[this.top] //Armazena o elemento no topo da pilha
            this.top -= 1 //Decremanta o topo
            return armazenaTopoPilha //Retorna o elemento removido
        }
    }
}

const camada1 = new CamadaSolo("Argiloso", "A", "Camada 1", "Fina", true, true);
const camada2 = new CamadaSolo("Arenoso", "B", "Camada 2", "Grossa", true, false);

const pilhaDeCamadas = new Camada();
pilhaDeCamadas.push(camada1);
pilhaDeCamadas.push(camada2);
