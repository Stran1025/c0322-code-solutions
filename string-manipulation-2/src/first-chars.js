/* exported firstChars */

/*
guard: if the input string's length is less than input length return the input string
assign an empty string as output
starting at the first character of the input string until the input length
  add each character of the input string to the output
return output
*/

function firstChars(length, string) {
  if (length > string.length) {
    return string;
  }
  var output = '';
  for (var i = 0; i < length; i++) {
    output += string[i];
  }
  return output;
}
