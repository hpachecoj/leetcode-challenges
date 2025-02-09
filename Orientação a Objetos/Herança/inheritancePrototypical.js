/** Abaixo herança prototípica utilizando object.create()*/

/** Below prototypical inheritance using object.create() */

//Abaixo um Banco de Dados Global que "abriga"  o cadastro de vários funcionários 
//de uma empresa fictício e um outro Banco de Dados Local.

//Below a Global Database that "hosts" the registration of various employees
//of a fictional company and another Local Database.

var SystemDataBase = {
    nameSystemDataBase: "General Employee Data",
    creationDate: "August 25, 2024",
    dataBaseSize: "5 Gigabytes",
    dataBaseType: "SQL",
    dataBaseLocation: "USA",
    versionDataBase: "1.0",
    //Método do Banco de Dados
    dataBaseMethod: function() {
        return "The data base method is: " + this.dataBaseType;
        }
}

var localDataBase = Object.create(SystemDataBase)
localDataBase.nameSystemDataBase = "Local Employee Data";
localDataBase.creationDate = "August 25, 2024";
localDataBase.dataBaseSize = "1 Gigabyte";
localDataBase.dataBaseType = "NoSQL";
localDataBase.dataBaseLocation = "Brazil";
localDataBase.versionDataBase = "1.0";
//Método do Banco de Dados Local
//Local Database method
localDataBase.dataBaseMethod = function() {
    return "The local data base method is: " + this.dataBaseType;
    }
    //Abaixo o uso do método do Banco de Dados Global
    //Below the use of the Global Database method
    console.log(SystemDataBase.dataBaseMethod());
  
