/* exported isPalindromic */

/*
assign am empty string as a comparator
remove all the spaces in between words
  do this by replacing all the spaces with ''
add all the letter of the input string to the comparator
but in reverse order
check to see if the two string is equal
return the boolean value for the check
*/

function isPalindromic(string) {
  var comparator = '';
  var noSpace = string.replace(' ', '');
  for (var i = noSpace.length - 1; i >= 0; i--) {
    comparator += noSpace[i];
  }
  return comparator === noSpace;
}
