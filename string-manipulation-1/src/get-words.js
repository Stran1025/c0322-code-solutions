/* exported getWords */

/*
create an empty array for output
create an empty string for words to put into the array
check each individual character in the string from first character to the last
  if the character is not space then add the letter to empty string (word)
when character is space add the word to array
reset word back to empty array
repeat until the end of the string
add the last word
  checking if the index is at the end of the string
  if the index is equal to array.length
  push the word into the array
return array
*/

function getWords(string) {
  var returnArray = [];
  var word = '';
  for (var i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      word += string[i];
    }
    if (string[i] === ' ') {
      returnArray.push(word);
      word = '';
    }
    if (i === string.length - 1) {
      returnArray.push(word);
    }
  }
  return returnArray;
}

// function getWords(string) {
//   if (string === '') {
//     return [];
//   }
//   return string.split(' ');
// }
