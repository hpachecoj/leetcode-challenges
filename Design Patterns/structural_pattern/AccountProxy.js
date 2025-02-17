// Objeto real
class ContaBancaria {
    constructor(saldo) {
      this.saldo = saldo;
    }
  
    getSaldo() {
      console.log("Consultando o saldo do banco...");
      return this.saldo;
    }
  }
  
  // Proxy para controlar o acesso à conta bancária
  class ProxyContaBancaria {
    constructor(conta) {
      this.conta = conta;
      this.cache = null;
    }
  
    getSaldo() {
      if (this.cache === null) {
        this.cache = this.conta.getSaldo();
      } else {
        console.log("Retornando saldo do cache...");
      }
      return this.cache;
    }
  }
  
  // Uso
  const conta = new ContaBancaria(1000);
  const proxyConta = new ProxyContaBancaria(conta);
  
  console.log(proxyConta.getSaldo()); // Acessa o banco
  console.log(proxyConta.getSaldo()); // Usa o cache
  