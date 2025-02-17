function inicializacao(msg, callback){
    console.log("Preparando sistema. Por favor, aguarde" + msg)
    callback()
}

function BootGeral(){
    class KernelV10 {
        mover() {
          console.log("Kernel iniciado...");
        }
      }
      
      class BootSystem {
        mover() {
          console.log("Sistema logado...");
        }
      }
      
      class DriversSystem {
        mover() {
          console.log("Drivers carregados...");
        }
      }
      
      const SistemaOperacional = [new KernelV10(), new BootSystem(), new DriversSystem()];
      
     return SistemaOperacional.forEach(veiculo => veiculo.mover());
}
  
inicializacao("Código 23", BootGeral)



