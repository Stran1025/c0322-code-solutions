/* exported isLowerCased */

/*
create an empty string assign it to compareWord to compare with word
lowercase each letter and add it compareWord
compare the compareWord with the original
return the result
*/

function isLowerCased(word) {
  var compareWord = '';
  for (var i = 0; i < word.length; i++) {
    compareWord += word[i].toLowerCase();
  }
  return compareWord === word;
}
