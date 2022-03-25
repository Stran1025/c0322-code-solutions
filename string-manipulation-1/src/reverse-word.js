/* exported reverseWord */

/*
create an empty string for output word
countdown from last letter
add letter to word
repeat until first letter
return word
*/

function reverseWord(word) {
  var returnWord = '';
  for (var i = word.length - 1; i >= 0; i--) {
    returnWord += word[i];
  }
  return returnWord;
}
