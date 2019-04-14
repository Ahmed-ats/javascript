// Constructor

function Book(title, author, year) {
     this.title = title;
     this.author = author;
    this.year = year;

    this.getSummary = function(){
        return ` ${this.title} was written by ${this.author} in ${this.year}  `     
    }
}

// Instatiate an Object

const book1 = new Book('Book One', 'John', '2016');
const book2 = new Book('Book Two', 'John', '2017');

console.log(book1.getSummary())