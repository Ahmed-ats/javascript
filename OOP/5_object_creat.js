// Objects of proto 
const bookProto = {
    getSummary: function(){
        const  years = new Date().getFullYear() - this.year;
        return ` ${this.title} is ${years}  years old `     
    },
    getAge: function() {
        const years = new Date().getFullYear() - this.year;
        return ` ${this.title} is ${years} years old`; 
    }

}

// Creat Object 
const book1 = Object.create(bookProto);
book1.title = "Book";
book1.author = "John Doe";
book1.year= "2013";

console.log(book1.getSummary)