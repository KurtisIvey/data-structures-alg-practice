//console.log("his");

// goal determine if str1 and str2 have same amount of characters and same characters

//steps
// convert both arr to arrays. then to objects to count the number of identical letters
// create for loop to determine if obj1 and obj2 have same keys and identical values for said keys
// if all are present, return true

function validAnagram(str1, str2) {
  if (str1.length !== str2) {
    return false;
  }
  const arr1 = [...str1];
  const arr2 = [...str2];
  //console.log(arr1);
  let obj1 = {};
  let obj2 = {};

  for (let val of arr1) {
    obj1[val] = (obj1[val] || 0) + 1;
  }
  for (let val of arr2) {
    obj2[val] = (obj2[val] || 0) + 1;
  }

  for (let key in obj1) {
    if (!(key in obj2)) {
      // if key(letter) is not present in obj2, return false because its not an anagram
      return false;
    }
    if (obj1[key] !== obj2[key]) {
      // if value of key in obj1 doesn't equal key in obj2, the same quantity of letters isn't present
      return false;
    }
  }
  return true;

  //console.log(obj1);
}

//console.log(validAnagram("hello", "hello"));

/*
two strings, convert into object and count values of recurrent character in string
run twice for both strings
if
*/

function frequencyCounter(str1, str2) {
  // convert to string if necessary.
  if (str1.length !== str2.length) {
    return false;
  }

  //handle obj1
  // convert into arr using spread operator, stores duplicates as new string in arr
  let arr1 = [...str1];
  // empty obj to assign later
  let obj1 = {};
  // for loop to iterate through adding arr strings into object and incrementing if already present
  for (let val of arr1) {
    obj1[val] = (obj1[val] || 0) + 1;
  }
  let arr2 = [...str2];
  // empty obj to assign later
  let obj2 = {};
  // for loop to iterate through adding arr strings into object and incrementing if already present
  for (let val of arr2) {
    obj2[val] = (obj2[val] || 0) + 1;
  }

  for (let key in obj1) {
    if (!(key in obj2)) {
      return false;
    }
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}

console.log(frequencyCounter(182, 281));
console.log(frequencyCounter("hellos", "hellos"));

console.log(frequencyCounter("he2llo", "hello"));

console.log(frequencyCounter("hello", "hel2lo"));
