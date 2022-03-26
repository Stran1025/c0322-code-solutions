/* exported capitalizeWords */

/*
break input string by space between word and assign it to variable input
assign an empty string as output
assign an empty string as word
for each item in the input
  run a loop for each character in each item
  capitalized the first index of each item
  add it to word
  lowercase the rest of the character
  add them to word
add word to output with space at the end
  check if its the last word if it is the last word dont add space
reset word back to an empty string
repeat until the end of input array
return output
*/

function capitalizeWords(string) {
  var input = string.split(' ');
  var word = '';
  var output = '';
  for (var i = 0; i < input.length; i++) {
    word += input[i][0].toUpperCase();
    for (var j = 1; j < input[i].length; j++) {
      word += input[i][j].toLowerCase();
    }
    if (i === input.length - 1) {
      output += word;
      return output;
    }
    output += word + ' ';
    word = '';
  }
}
