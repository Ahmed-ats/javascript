
// this patten uses objects or sets to collect values/frequencies of values.
//this can often avoid the need for nested loops or O(N^2) oprestions with arrays/strings 


// write function called same, which accepts two arays. 
// the function should return true if every value in the aray has it's corresponding value squared in the second array.
// the frequency of values must be the same.


let log = console.log;

// function same1(arr1, arr2){
//     if(arr1.length !== arr2.length){
//         return false;
//     }
//     for(let i = 0; i < arr1.length; i++){
//         //nested loops  O(N^2)
//         let correctIndex = arr2.indexOf(arr1[i] ** 2)
//         if(correctIndex === -1) {
//             return false;
//         }
//         // log(arr2);
//         arr2.splice(correctIndex,1)
//     }
//     return true;
// }

// log(same([1,2,3,2], [9,4,1,4]))

///////////////////////////////////////////
// REFACTOR 
function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
    }
    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    return true
}


/////////////////////////////////
////////////////////////////

// function same2(arr1, arr2) {
//     if (arr1.length !== arr2.length) {
//         return false;
//     }
//     let base = {}
//     let squared = {}
//     for (let val of arr1) {
//         base[val] = (base[val] || 0) + 1;
//     }
//     for (let val of arr2) {
//         squared[val] = ++squared[val] || 1;
//     }
//     for (let key in base) {
//         if (!(key ** 2 in squared) || (squared[key ** 2] !== base[key])) {
//             return false;
//         }
//     }
//     return true
// }


// console.time('Time Elapsed')
// log(same1([1,2,3,2,5,9], [9,1,4,4,25,81]))
// console.timeEnd('Time Elapsed')


//////////////////////////////////////////////
////////////////////////////////////////////

//given two strings, write a function to determine if the second string is an anagram of the first.
// an anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed iceman.  

// creat 2 arrays to save the strings  
// loop over strings and count them 
// if the first array === this second one return true otherwise reeturn false 
 
function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let obj = {};
  for (let i of str1.toLowerCase()) {
    obj[i] ? obj[i]++ :  obj[i] = 1;
  }
  for (let j of str2.toLowerCase()) {
    if (!(obj[j])) {
        return false;  
    } else {
      obj[j]--;
    }
  } 
    return true; 
}
log(validAnagram('racecar', 'carracE'))