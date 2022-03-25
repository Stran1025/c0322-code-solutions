/* exported isUpperCased */

/* assign an empty string to variable compareWord
capitalize all letter in the word and assigned it variable compareWord
check if compareWord is exactly equal to input word
return the result */

function isUpperCased(word) {
  var compareWord = '';
  for (var i = 0; i < word.length; i++) {
    compareWord += word[i].toUpperCase();
  }
  return compareWord === word;
}
