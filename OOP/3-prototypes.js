// Constructor

function Book(title, author, year) {
    this.title = title;
    this.author = author;
   this.year = year;

   
}

Book.prototype.getSummary = function(){
    const  years = new Date().getFullYear() - this.year;
    return ` ${this.title} is ${years}  years old `     
}

Book.prototype.revised = function(newYear){
    this.year = newYear;
    this.revised = true;     
}

// Instatiate an Object
const book1 = new Book('Book One', 'John', '2016');
const book2 = new Book('Book Two', 'John', '2017');

console.log(book2);
book2.revised('2019');
console.log(book2);