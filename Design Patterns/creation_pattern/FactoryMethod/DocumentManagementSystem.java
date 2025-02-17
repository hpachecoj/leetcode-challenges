import java.util.Map;

import org.w3c.dom.Document;


package SistemaGerenciamentoDocumentos;

public class DocumentManagementSystem{
   public static void main(String[]args){
    //Criar documento prototítipica
    Map<String, String> initialMetadata = Map.of("Autor", "Departamento Jurídico","Data", "2025-02-17");
    Document prototypeDocument = new Document("Contrato Padrão", "Conteúdo do contrato...", initialMetadata)

    //Clonar o documento prototípico para criar novos documentos
    Document document1 = prototypeDocument.clone();
    Document document2 = prototypeDocument.cloneNode();

    //Modificar os documentos clonados
    document1.setTitle("Contrato Client A");
    document2.setTitle("Contato client B");

   //Exibir documentos
   System.out.println(document1);
   System.out.println(document2);

   }


     
} 
