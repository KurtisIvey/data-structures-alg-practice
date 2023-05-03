/*
take string in
slice last char of string off
set boundary, for when str has only 1 char left

*/

function reverse(str) {
  // return string in reverse recursively
  if (str.length <= 1) {
    return str;
  }
  return reverse(str.slice(1)) + str[0];
}
