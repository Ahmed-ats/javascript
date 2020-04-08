//Iterable and Enumerable are different things in JavaScript.
//When you add properties to an object they can be defined as enumerable or not.
//Some object types like Arrays, Strings, Maps, Sets, and NodeLists also have Iterators
// which are objects that let you access certain values from the object.

let log = console.log;

// let names = ['Ali', 'Moe', 'Obama', 'Nilson'];
// names.elf = 'Legoals';
// Object.defineProperty(names, 'ent', {
//   value: 'Treebeard',
//   enumerable: true
// });

// let middleEarth = {
//   town: ['Hobbiton', 'Rivendell'],
//   rece: ['Elves', 'Hobbies', 'Men']
// };
// middleEarth.creator = 'J.R.R. Tolkein';
// Object.defineProperty(middleEarth, 'age', {
//   value: '3rd',
//   enumerable: false
// });

// // for.. in  is looking through all of the enumerable properties inside of the object names
// // for(let p in names) {
// //     log('in names', p);
// // }

// for (let p of names) {
//   log('in names', p);
// }

// var array = ['a', 'b', 'c', 'd'];
// for (var i of array) {
//   log(i);
// }

// var hash = {
//   a: 1,
//   b: 2
// };
// for (var i in hash) {
//   log(i);
// }

// //Another interesting part of for...of is that i t can easily reach through nested values, like below:var nestedArray = [['a', 1], ['b', 2], ['c', 3]]
// var nestedArray = [
//   ['a', 1],
//   ['b', 2],
//   ['c', 3]
// ];

// for (var outer of nestedArray) {
//   log(outer);
// }

// for (var [innerFirst, innerSecond] of nestedArray) {
//   log(innerFirst + ' is:');
//   log(innerSecond);
// }
