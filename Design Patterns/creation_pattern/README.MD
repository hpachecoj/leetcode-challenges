# ⚙️ Creation Pattern
Os padrões criacionais fornecem vários mecanismos de criação de objetos, que aumentam a flexibilidade e reutilização de código já existente. São eles:

- Factory Method
O Factory Method é um padrão criacional de projeto que fornece uma interface para criar objetos em uma superclasse, mas permite que as subclasses alterem o tipo de objetos que serão criados.

- Abstract Factory
Permite que você produza família de objetos relacionados sem ter que especificar suas classes concretas

- Builder 
Permite construir objetos complexos passo a passo. O padrão permite produzir diferentes tipos e representações de um objeto usando o mesmo código de construção.

- Singleton
Permite a você garantir que uma classe tem apenas uma instância, enquanto provê um ponto de acesso global para a instância.


##  🔗 Fontes
- [Visite o Refactoring Guru](https://refactoring.guru/pt-br/design-patterns/creational-patterns)
- [DevMedia](https://www.devmedia.com.br/introducao-aos-padroes-criacionais-abstract-factory-factory-method-prototype-e-singleton/21249)
- [Medium](https://medium.com/@jonesroberto/desing-patterns-parte-2-2a61878846d)




# Como funciona o Factory Method

## Partes do código Conceito em Java Script

Vamos usar como exemplo, um sistema de notificação em que utiliza-se três tipos de notificações: SMS, Email e Push.

- Sistema de Notificação

/
  
    
    
    //Interface para os produtos(Notificações) classe abstrata
    
    class Notification{
      constructor(){
        if(new.target === Notification){
            throw new Error("Esta é uma classe abstrata e não pode ser instanciada diretamente!")
        }
    }
    
    send(message) {
      throw new Error("Este método deve ser sobrescrito!");
    }
    }

    //Implementações concretas dos produtos - classes concretas
    class EmailNotification extends Notification{
        send(message){
            console.log(`Notificação via Email. Mensagem:${message}`)
        }
    }
    class SMSNotification extends Notification{
        send(message){
            console.log(`Notificação via SMS. Mensagem: ${message}`)
        }
    }
    class PushNotification extends Notification{
        send(message){
            console.log(`Notifcação via Push. Mensagem: ${message}`)
        }
    }
    //Método Factory
    class NotificationFactory{
        static createNotification(type){
            if(typeof type === "string" && type !== null){
                switch(type.toLowerCase()){
                    case 'email':
                    return new EmailNotification()
                    case 'sms':
                    return new SMSNotification()
                    case 'push':
                    return new PushNotification()
                    default:
                    throw new Error(`Tipo de notificação desconhecido.`)
                }
            }else{
                throw new Error("Tipo inválido de notificação.")
            }
        }
    }
    //Cliente que usa a fábrica de notificações
    class NotificationService{
        constructor(factory){
            this.factory = factory
        }
        sendNotification(type,message){
            const notification = this.factory.createNotification(type)
            notification.send(message)
        }
    }
    //Uso do Factory Method em um contexto maix complexo
    const notificationService = new NotificationService(NotificationFactory)

    notificationService.sendNotication('email', 'Mensagem de email')
    no
    notifcationService.sendNotification('sms', 'Mensagem de SMS')
    notificationService.sendNotification('push', 'Mensagem Push.')
  
  
 # Quando implementar o Factory Method

- Use quando desejar economizar recursos do sistema reutilizando objetos existentes em vez de recriá-los sempre.
- Use quando desejar fornecer aos usuários da sua biblioteca ou framework uma maneira de estender seus componentes internos.
- Use quando não souber de antemão os tipos e dependências exatas dos objetos com os quais seu código deve funcionar.
 
# Como implementar

Faça todos os produtos implementarem a mesma interface. Essa interface deve declarar métodos que fazem sentido em todos os produtos.

Adicione um método fábrica vazio dentro da classe criadora. O tipo de retorno do método deve corresponder à interface comum do produto.

No código da classe criadora, encontre todas as referências aos construtores de produtos. Um por um, substitua-os por chamadas ao método fábrica, enquanto extrai o código de criação do produto para o método fábrica.

Pode ser necessário adicionar um parâmetro temporário ao método fábrica para controlar o tipo de produto retornado.

Neste ponto, o código do método fábrica pode parecer bastante feio. Pode ter um grande operador switch que escolhe qual classe de produto instanciar. Mas não se preocupe, resolveremos isso em breve.

Agora, crie um conjunto de subclasses criadoras para cada tipo de produto listado no método fábrica. Sobrescreva o método fábrica nas subclasses e extraia os pedaços apropriados do código de construção do método base.

Se houver muitos tipos de produtos e não fizer sentido criar subclasses para todos eles, você poderá reutilizar o parâmetro de controle da classe base nas subclasses.

Por exemplo, imagine que você tenha a seguinte hierarquia de classes: a classe base Correio com algumas subclasses: CorreioAéreo e CorreioTerrestre; as classes Transporte são Avião, Caminhão e Trem. Enquanto a classe CorreioAéreo usa apenas objetos Avião, o CorreioTerrestre pode funcionar com os objetos Caminhão e Trem. Você pode criar uma nova subclasse (por exemplo, CorreioFerroviário) para lidar com os dois casos, mas há outra opção. O código do cliente pode passar um argumento para o método fábrica da classe CorreioTerrestre para controlar qual produto ele deseja receber.

Se, após todas as extrações, o método fábrica base ficar vazio, você poderá torná-lo abstrato. Se sobrar algo, você pode tornar isso em um comportamento padrão do método.

  
