import java.util.HashMap;
import java.util.Map;

package SistemaGerenciamentoDocumentos;

public class Document implements Prototype {
    private String title;
    private String content;
    private Map<String, String> metadata;

    public Document(String title, String content, Map<String, String> metadata){
        this.title = title;
        this.content = content;
        this.metadata = new HashMap<>(metadata);
    }

    //Método clone para criar uma cópia do objeto

    @Override
    public Document clone(){
        return new Document(this.title, this.content, this.metadata);
    }

    //Getters e setters...
    @Override
    public String toString() {
        return "Document{" +
                "title='" + title + '\'' +
                ", content='" + content + '\'' +
                ", metadata=" + metadata +
                '}';
    }

    
}
