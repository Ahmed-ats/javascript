// creating pointers or values that correspond to an index or position and move towards the beginning, 
//end or middle based on a certain condtion.
//Very efficient for solving problems with minimal space complexity as well 


// Write a function called sumZero which accepts sorted array of integrs. the function find the first pair where the sum 
// is zero. Return an array that includes both values that sum to zero or undefined if a pair does not exist.
let log = console.log;
let time = console.time;
let timeEnd= console.timeEnd;

// Time complexity O(N^2)
// Space complexity O(1)
// function sumZero(arr){
//     for(let i = 0; i < arr.length; i++){
//         for(let j = arr.length - 1 ; j > i  ; j--){
//             if(arr[i] + arr[j] == 0){
//                 return [arr[i], arr[j]];
//             }
//         }
//     }
// }

// Time complexity O(N)
// Space complexity O(1)
// function sumZero(arr){
//     let left = 0 ;
//     let right = arr.length - 1;
//     while(left < right){
//         let sum = arr[left] + arr[right];
//         if(sum === 0){
//             return [arr[left], arr[right]];
//         } else if (sum > 0 ){
//             right--;
//         }else {
//             left++ ;
//         }
//     }
// }

// time('Time Elapsed');
// log(sumZero([-4,-3,-2,-1,0,2,3,5,7]));
// timeEnd('Time Elapsed');

////////////////////////////////
//////////////////////////////

//Implenet a function called countUniqueValues, which accepts a sorted array. and counts the unique values in the array. 
// There can be negative numbers in the array.
 
function countUniqueValues(arr) {
// creat a uniqVals object
let uniqVals = {};
//  declear a var counter to return later
let counter = 0; 
// loop through the array
// if the value is not in the object initiate it and increament counter
for (let val of arr) {
    if (!(val in uniqVals)){
    uniqVals[val] = val;
    counter++
    }
}
return counter
}

 
// function countUniqueValues(arr) {
//     let counter = 0; 
//     for (let i = 0; i < arr.length; i++) {
//        if( arr[i] != arr[i - 1]){
//            counter++
//        }
//     }
//     return counter
//     }


// function countUniqueValues(values) {
//     var count = 0;
//     for (let i = 0; i < values.length; i++) {
//       if (i == 0) {
//         count++;
//       } else if (values[i] != values[i - 1]) {
//         count++;
//       }
//     }
//     return count;
//   }

// function countUniqueValues(arr) {
//  if (!arr) return [];
// return uniques = [...new Set(arr)].length;

//  }

// function countUniquevalues (arr) {
//     let set =  new Set(arr)
//     return set.size;
// }

time('Time Elapsed')
log(countUniqueValues([-4,-3,6,9,0,-2,-1,0,1,1,1,3,2,3,4,5,6,7,8,8,8,8,9,9,9]))
timeEnd('Time Elapsed')