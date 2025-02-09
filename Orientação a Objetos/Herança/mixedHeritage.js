/** Herança mista com Object.assign() e mixins */

/** Mixed inheritance with Object.assign() and mixins */

var voiceFeedbackSystem = function(){
    let voxSystem = {
        voiceSystemStatus: true,
        startVoxSystem: function(){
            //Vamos criar uma variável que recebe a data de 'start' do sistema
            let formattedDate = dataStart.toLocaleDateString('pt-BR', {
                weekday: 'long', // Nome do dia da semana
                year: 'numeric', // Ano com 4 dígitos
                month: 'long',   // Nome completo do mês
                day: 'numeric'   // Dia do mês
            });
            console.log('Sistema iniciado em: ', formattedDate);
            
            
        }
    }
    let voiceSystemCommunication = {
        startCommunication: function() {
            let dataStartCom = new Date();
            let formattedDateCom = dataStartCom.toLocaleDateString('pt-BR', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
            console.log('Comunicação iniciada em: ', formattedDateCom);
        }
    }
     let systemsControlled = Object.assign({}, voxSystem, voiceSystemCommunication)
     if(voxSystem.voiceSystemStatus === true){
        return systemsControlled.startCommunication
     }
    

}

const result = voiceFeedbackSystem()
result()

