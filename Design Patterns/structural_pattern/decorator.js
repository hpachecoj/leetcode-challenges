class Notifier {
    constructor(emailList) {
      // Lista de emails para onde as notificações serão enviadas
      this.emailList = emailList;
    }
  
    // Método para enviar uma notificação
    send(message) {
      if (!message) {
        console.log("Mensagem inválida. Não foi possível enviar a notificação.");
        return;
      }
  
      // Simula o envio de e-mails
      this.emailList.forEach(email => {
        console.log(`Notificação enviada para ${email}: ${message}`);
      });
    }
  }
  
  // Simulando a criação e configuração de um objeto Notifier
  const emailRecipients = ["user1@example.com", "user2@example.com", "user3@example.com"];
  const notifier = new Notifier(emailRecipients);
  
  // Enviando notificações
  notifier.send("Novo pedido recebido.");
  notifier.send("Seu relatório está pronto.");
  notifier.send("");
  