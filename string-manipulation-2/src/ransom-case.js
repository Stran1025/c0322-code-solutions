/* exported ransomCase */

/*
lowercase all the letter and assign to input
set an empty string as output
starting at 0 divide index by 2
if there is no leftover just add the character to the output
if there is a leftover uppercase and then add to output
return output
*/

function ransomCase(string) {
  var input = string.toLowerCase();
  var output = '';
  for (var i = 0; i < input.length; i++) {
    if ((i % 2) === 0) {
      output += input[i];
    } else {
      output += input[i].toUpperCase();
    }
  }
  return output;
}
