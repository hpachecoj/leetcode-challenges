/**
 * Exercícios práticos com arrays para sedimentação 
 * de conhecimento de Estrutura de Dados e Algoritmos
 * 
 * @author: @henriquepacheco
 * @since: 2024-07-14
 * 
 * 
 */



//Criarei uma lista array com vários objetos livros

//Utilizando uma classe Book para criar algumas instâncias
// e um método que verifica se dentre a lista de livros 
// instanciados, há algum livro com valores nulos
class Book{
    constructor(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year;
    }

    //Método que verifica se o livro é nulo
    checksIfBookIsNull(){
        return this.title === null && this.author === null && this.year === null;
    }
}


//Várias instâncias da classe ListBook
const book1=new Book('O Pequeno Príncipe', 'Antoine de Saint-Exupéry', 1943);
const book2=new Book('1984', 'George Orwell', 1949);
const book3=new Book('O Alquimista', 'Paulo Coelho', 1988);
const book4=new Book(null, null, null);



//Função que verifica se algum livro na lista é nulo e imprime o resultado
const checkIfInstanceItemIsNull = function(){
    const books = [book1, book2, book3, book4];
//Verifico se o livro é nulo - o forEach percorre todos os elementos do array
    books.forEach(book => {
        if(book.checksIfBookIsNull()){
            console.log('O livro é nulo');
        }else{
            console.log('O livro não é nulo');
        }
    });
}

checkIfInstanceItemIsNull();

//Função que insere valores no objeto com valor nulo
function insertValuesInObject(book){
    book.title = 'O Pequeno Príncipe';
    book.author = 'Antoine de Saint-Exupéry';
    book.year = 1943;
}



//Função que insere numa array vazia todos os objetos instanciados
function insertBooksInArray(myArray){
    listBooks.push(book1, book2, book3, book4);
    return listBooks;
}



