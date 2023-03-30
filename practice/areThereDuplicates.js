// accept var number of arguments
// checks whether duplicates of variables exist

// parse through all vars determining if there are duplicates.
// assign vars into object
/* function areThereDuplicates(...args) {
  let obj = {};
  for (let val of args) {
    obj[val] = (obj[val] || 0) + 1;
  }
  for (key in obj) {
    if (obj[key] > 1) {
      return true;
    }
  }
  return false;
} */

function areThereDuplicates() {
  console.log(arguments);
  let newArg = new Set(arguments).size;
  console.log(newArg);
}

console.log(areThereDuplicates(1, "k", "l", 3));
