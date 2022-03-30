/* exported reverseWords */

/*
assign an empty string as output
assign an empty string for word
break the input string into an array separating by ' '
for each item in the array
  for each letter in the array index reverse the order
  add the letter into word
concatanate the words into a string
return output string
*/

function reverseWords(string) {
  var output = '';
  var word = '';
  var array = string.split(' ');
  for (var i = 0; i < array.length; i++) {
    for (var j = array[i].length - 1; j >= 0; j--) {
      word += array[i][j];
    }
    output = output + word;
    word = ' ';
  }
  return output;
}
