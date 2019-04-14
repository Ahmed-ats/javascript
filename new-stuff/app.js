// to to deacler a set 
const ary = [1,2,2,3];

//  Set() is iterable
const mySet = new Set();
// convert an array into a set to get rid of duplicate then convert it back into an array 
console.log([...new Set(ary)])
console.log(new Set(ary))
// or 
console.log(Array.from(new Set(ary)))

// WeakSet() is not iterable 
const ws = new WeakSet();
ws.add({a:2})
// pass an array(itrable obj) into WeakSet() :
console.log(ws)

