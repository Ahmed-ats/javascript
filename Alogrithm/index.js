// write a function which takes in a string and returns counts of each
// character in the string .

// write down some example
charCount('aaaa');
/* {
    a:4
}
*/

charCount('hello');
/*
{
    h:1,
    e:1,
    l:2,
    o:1
}
*/
// skeleton
function charCount(str) {
  // make object to return at end
  var result = {};
  // loop over strings, for each char...
  for (var i = 0; i < str.length; i++) {
    var char = str[i].toLowerCase();
    // if the char is number/letter AND is a key in object, add one to count
    if (result[char] > 0) {
      result[char]++;
    }
    // if the char is number/letter AND is not a key in object, add it to object and set value to 1
    else {
      result[char] = 1;
    }
  }
  // if char is something else (space, period, ect.) skip

  // return object at end
  return result;
}

function charCount(str) {
  // make object to return at end
  var obj = {};
  // loop over strings, for each char...
  for (var i = 0; i < str.length; i++) {
    var char = str[i].toLowerCase();
    // if char is something else (space, period, ect.) skip
    if (/[a-z0-9]/.test(char)) {
      // if the char is number/letter AND is a key in object, add one to count
      if (obj[char] > 0) {
        obj[char]++;
      }
      // if the char is number/letter AND is not a key in object, add it to object and set value to 1
      else {
        obj[char] = 1;
      }
    }
  }

  // return object at end
  return obj;
}

// REFACTOR
function charCount(str) {
  // make object to return at end
  var obj = {};
  // loop over strings, for each char...
  for (var char of str) {
    // if char is something else (space, period, ect.) skip
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase();
      // if the char is number/letter AND is a key in object, add one to count
      // if the char is number/letter AND is not a key in object, add it to object and set value to 1
      obj[char] = ++obj[char] || 1;
    }
  }
  // return object at end
  return obj;
}

function isAlphaNumeric(char) {
  var code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) && // numeric (0-9)
    !(code > 64 && code < 91) && // upper alpha (A-Z)
    !(code > 96 && code < 123)
  ) {
    // lower alpha (a-z)
    return false;
  }
  return true;
}

console.log(charCount('Hello111!!!'));
