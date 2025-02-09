//** Herrança com class e extends */

/** Herrança with class and extends */

class Dispositivo{
    constructor(nomeDispositivo, modeloDispositivo, versaoDispositivo){
        this.nome = nomeDispositivo
        this.modelo = modeloDispositivo
        this.versaoDispositivo - versaoDispositivo
    }
    on(){
        console.log(`${this.nome} está ligado.`)
    }
    off(){
        console.log(`${this.nome} está desligado.`)
    }
    //Função que ao verificar a versão do dispositivo acrescentará funções novas ao dispositivo
    atualizar(versaoDispositivo){
        if(typeof versaoDispositivo === 'number' && versaoDispositivo == 1){
            Dispositivo.prototype.dolbyAudio = function(){
                console.log('Dispositivo com Dolby Audio')
            }
        }
    }
}
class Radio extends Dispositivo{
    constructor(nomeRadio, modeloRadio, versaoRadio){
        super(nomeRadio, modeloRadio, versaoRadio)
        }

        on(){
            console.log(`${this.nome} está ligado.`)
        }
        off(){
            console.log(`${this.nome} está desligado.`)
                }
                //Função que ao verificar a versão do dispositivo acrescentará funções novas ao dispositivo
                atualizar(versaoRadio){
                    if(typeof versaoRadio === 'number' && versaoRadio == 1){
                        Radio.prototype.dolbyAudio = function(){
                            console.log('Radio com Dolby Audio')
                        }
                        }else{
                            console.log('Versão não suportada')
                        }
                    }
                
}
