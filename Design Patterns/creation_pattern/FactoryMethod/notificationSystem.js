// Interface para os produtos (Notificações) - classe abstrata
class Notification {
    constructor() {
      if (new.target === Notification) {
        throw new Error("Esta é uma classe abstrata e não pode ser instanciada diretamente!");
      }
    }
  
    send(message) {
      throw new Error("Este método deve ser sobrescrito!");
    }
  }
  
  // Implementações concretas dos produtos - classes concretas
  class EmailNotification extends Notification {
    send(message) {
      console.log(`Notificação via email. Mensagem: ${message}`);
    }
  }
  
  class SMSNotification extends Notification {
    send(message) {
      console.log(`Notificação via SMS. Mensagem: ${message}`);
    }
  }
  
  class PushNotification extends Notification {
    send(message) {
      console.log(`Notificação via Push. Mensagem: ${message}`);
    }
  }
  
  // Método Factory
  class NotificationFactory {
    static createNotification(type) {
      if (typeof type === "string" && type !== null) {
        switch (type.toLowerCase()) {
          case 'email':
            return new EmailNotification();
          case 'sms':
            return new SMSNotification();
          case 'push':
            return new PushNotification();
          default:
            throw new Error(`Tipo desconhecido. Contate o Suporte Técnico.`);
        }
      } else {
        throw new Error("Tipo de notificação inválido.");
      }
    }
  }
  
  // Cliente que usa a fábrica de notificações
  class NotificationService {
    constructor(factory) {
      this.factory = factory;
    }
  
    sendNotification(type, message) {
      const notification = this.factory.createNotification(type);
      notification.send(message);
    }
  }
  
  // Uso do Factory Method em um contexto mais complexo
  const notificationService = new NotificationService(NotificationFactory);
  
  notificationService.sendNotification('email', 'Olá, este é um email!');
  notificationService.sendNotification('sms', 'Olá, este é um SMS!');
  notificationService.sendNotification('push', 'Olá, esta é uma Push Notification!');
