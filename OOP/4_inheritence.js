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

// Magazine Constuctor 
function Magazine(title, author, year, month) {
    Book.call(this, title, author, year);
    this.month = month;
}

// Inherit Prototype 
Magazine.prototype = Object.create(Book.prototype);

// instantiate Magazine Object 
const mag1 = new Magazine('Mag One', 'John Doe', '2018', 'Jan');

console.log(mag1);
