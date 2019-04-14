// Spread Opreator and Rest Opreator

// add the elements of an exisiting  array into a new array 

// var namesToAdd = ['Ali', 'Ashly', 'Barack'];
// var names = ['Ahmed', 'Holli', ...namesToAdd, 'Nawal' ];
// console.log(names)


// pass elemenys of an array as arguments to a function
// function addThreeNumbers(x,y,z) {
//     console.log(x+y+z)
// }

// var args = [1,1,2];
// addThreeNumbers(...args)

// copy arrays 
// var arr = [1,2,3];
// var arr2 = [...arr]; // like arr.slice()
// arr2.push(4);
// console.log(arr);
// console.log(arr2);


// concatenate arrays
// var arr1 = [1,2,3];
// var arr2 = [4,5,6];
// arr1.concat(arr2);
// // OR
// arr1 = [...arr1, 'eklgjkl', ...arr2]
// console.log(arr1);
// console.log(arr2);

// REST: condense multiple elements into an array
// since the 3 dots are past as an argument into a function, that is
//  how we know its used as REST Opreator not as Spread Opeator
function multiply(multiplier, ...theArgs) {
    return theArgs.map( element => {
        return multiplier * element;
    });
}

var arr = multiply(2,1,2,3);
console.log(arr);
