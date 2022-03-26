/* exported lastChars */

/*
guard: if the input string's length is less than input length return the input string
assign an empty string as output
starting at the character of input string length minus the input length until the end of the string
add each of the character to the output
return the output
*/

function lastChars(length, string) {
  if (string.length < length) {
    return string;
  }
  var output = '';
  for (var i = (string.length - length); i < string.length; i++) {
    output += string[i];
  }
  return output;
}
