class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getSummary(){
        const  years = new Date().getFullYear() - this.year;
        return ` ${this.title} is ${years}  years old `  
    }

    static topBookStore() {
        return 'Banes & Noble';
    }
}

// Instantiate Object 
const book1 = new Book('Book One', 'John Doe', '2018');

console.log(Book.topBookStore());
