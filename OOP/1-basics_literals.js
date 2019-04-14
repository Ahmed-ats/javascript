// const s1 = "hello"
// console.log(typeof s1)

// const s2 = new String("hello")
// console.log(typeof s2)


// Object Literal 
const book1 = {
    title : "Book One",
    author: "John Doe",
    year: "2003",
    getSummary: function(){
        return ` ${this.title} was written by ${this.author} in ${this.year}  `     
    }
}

// console.log(book1.getSummary());

// to get all values of an object 
// console.log(Object.values(book1));