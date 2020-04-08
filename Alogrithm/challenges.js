/// #1 write a function called sameFrequency. Given two positive integers, find out if the number have same frequency of digits.
/// your solution MUST have O(N) complexities

let log = console.log;
// 1st solution
//  function sameFrequency(int1, int2) {
//    let str1 = int1.toString();
//    let str2 = int2.toString();
//    if (str1.length !== str2.length) return false;

//    let obj1 = {};
//    let obj2 = {};

//    for (let char of str1) {
//      obj1[char] = ++obj1[char] || 1;
//    }
//    for (let char of str2) {
//      obj2[char] = ++obj2[char] || 1;
//    }
//    for (let key in obj1) {
//      if (obj1[key] != obj2[key]) {
//        return false;
//      }
//    }
//    return true;
//  }

// 2nd solution
//  function sameFrequency(int1, int2) {
//      if ( int1.toString().length != int2.toString().length) return false ;
//     let obj = {};
//      for(let num of int1.toString()) {
//         obj[num] ? obj[num]++ : obj[num] = 1;
//      }
//      for (let num of int2.toString()) {
//          if ( num in obj) obj[num]--
//      }
//      for( let key in obj) {
//          if ( obj[key] > 0) return false
//      }
//      return true
//  }

//  log(sameFrequency(12334,123353))

/////////////////////////
//////////////////////////
/////////////////////////////

// #2 Implement a function called areaThereDuplicates which accepts a variable number of arguments,
// and checks whether there are any duplicates among the arguments passed in.
// Time MUST be O(N)
// Space MUST be O(N)

// (Frequency Counter)
//  function areThereDuplicates() {
//    if (arguments.length < 2) return false;
//    let args = {};
//    for (let arg of arguments) {
//      args[arg] = ++args[arg] || 1;
//    }
//    log(args);
//    for (let key in args) {
//      if (args[key] > 1) return true;
//    }
//    return false;
//  }

// (Frequency Counter)
// function areThereDuplicates() {
//   var frequency = {}
//     for(let char of arguments){
//       if(frequency[char]){
//         return true
//       }else{
//         frequency[char] = 1
//       }
//     }
//     return false
//  }

// (Multiple Pointers)
// function areThereDuplicates(...args) {
//   // Two pointers
//   args.sort();
//   log(args);
//   let start = 0;
//   let next = 1;
//   while (next < args.length) {
//     if (args[start] === args[next]) {
//       return true;
//     }
//     start++;
//     next++;
//   }
//   return false;
// }

// (Liner Solution)
// function areThereDuplicates() {
//   return new Set(arguments).size !== arguments.length;
// }

// log(areThereDuplicates('a', 'b', 'h','a'));

// Multiple Pointers - averagePair
// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the ////// array where the average of the pair equals the target average. There may be more than one pair that matches the average target.
// Bonus Constraints:
// Time: O(N)
// Space: O(1)

// function averagePair(arr, target) {
//   if (arr.length === 0) return false;
//   for (let i of arr) {
//     if (target === (i + arr[i]) / 2) return true;
//   }
//   return false;
// }

// function averagePair(arr, target) {
//   if (arr.length === 0) return false;
//   let left = 0;
//   let right = arr.length - 1;
//   while (left < right) {
//     let avrg = (arr[left] + arr[right]) / 2;
//     if (avrg === target) return true;
//     else if (avrg < target) left++;
//     else right--;
//   }
//   return false;
// }

// log(averagePair([1,2,3],2.5)) // true
// log(averagePair([1,3,3,5,6,7,10,12,19],8)) // true
// log(averagePair([-1,0,3,4,5,6], 4.1)) // false
// log(averagePair([],4)) // false

////////////////////////////////////////////////
///////////////////////////////////////////////////

// Multiple Pointers - isSubsequence
// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

// function isSubsequence(str1, str2) {
//   if (str1.length === 0 || str2.length === 0) return false;
//   let i = 0;
//   let j = 0;
//   while (j < str2.length) {
//     if (str1[i] === str2[j]) i++, j++;
//     else j++;
//     if (i == str1.length) return true;
//   }
//   return false;
// }

// log(isSubsequence('hello', 'hello world')); // true
// log(isSubsequence('sing', 'sting')); // true
// log(isSubsequence('abc', 'abracadabra')); // true
// log(isSubsequence('abc', 'acb')); // false (order matters)

// Sliding Window - maxSubarraySum
// Given an array of integers and a number, write a function called maxSubarraySum, which finds
//the maximum sum of a subarray with the length of the number passed to the function.
// Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

// Constraints:

// Time Complexity - O(N)

// Space Complexity - O(1)
// function maxSubarraySum(arr, num) {
//   if (arr.length < num) return null ;
//   let maxSum = 0;
//   let tempSum = 0;
//   for (let i = 0; i < num; i++) {
//     maxSum += arr[i];
//   }
//    tempSum = maxSum;
//   for (let j = num; j < arr.length; j++) {
//     tempSum = tempSum - arr[j - num] + arr[j]
//     if (tempSum > maxSum) maxSum = tempSum;
//   }
//   return maxSum
// }

// log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4))  // 39
// log(maxSubarraySum([100,200,300,400], 2)) // 700
// log(maxSubarraySum([-3,4,0,-2,6,-1], 2)) // 5
// log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2)) // 5
// log(maxSubarraySum([2,3], 3)) // null

// Sliding Window - minSubArrayLen
// Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.

// This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.
// Time Complexity - O(n)

// Space Complexity - O(1)
// Examples:

// function minSubArrayLen(arr, num) {

//   for (let i of arr) {
//     if (i >= num) return 1;
//   }
//   let minimal = 2;

//    return 0;
// }

// log(minSubArrayLen([2,3,1,2,4,3], 7)) // 2 -> because [4,3] is the smallest subarray
// log(minSubArrayLen([2,1,6,5,4], 9)) // 2 -> because [5,4] is the smallest subarray
// log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52)) // 1 -> because [62] is greater than 52
// log(minSubArrayLen([1,4,16,22,5,7,8,9,10],39)) // 3
// log(minSubArrayLen([1,4,16,22,5,7,8,9,10],55)) // 5
// log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)) // 2
// log(minSubArrayLen([1,4,16,22,5,7,8,9,10],95)) // 0

///////////////////////////////////////////////////////
/////////////////////////////////////////////////////

// Trolls are attacking your comment section!
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
// Your task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
// Note: for this kata y isn't considered a vowel

function vowelsRemoved(comment) {
  const vowels = ['a', 'A', 'e', 'E', 'i', 'o', 'O', 'u', 'U'];
  let commentArray = comment.split('');
  return commentArray
    .map(letter => {
      if (vowels.includes(letter)) {
        letter = '';
      } else {
        return letter;
      }
    })
    .join('');
}
