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
}

// Magazine Subclass 
class Magazine extends Book {
    constructor(title, author, year, month){
        super(title, author, year);
        this.month;
    }
}

// Instantiate Magazine 
const mag1 = new Magazine('Mag', 'Johne Doe', '2017', 'Oct');

console.log(mag1)

