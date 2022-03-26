/* exported numVowels */

/*
assign 0 to output
lowercase string input and assign it to input variable
starting at the first character of the input
  check each of the character if they are a vowel
  if they are a vowel add 1 to output
return output
*/

function numVowels(string) {
  var output = 0;
  var input = string.toLowerCase();
  for (var i = 0; i < input.length; i++) {
    if (input[i] === 'a' || input[i] === 'e' || input[i] === 'i' || input[i] === 'o' || input[i] === 'u') {
      output++;
    }
  }
  return output;
}
