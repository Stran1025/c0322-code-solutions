/* exported truncate */

/*
set an empty string as output
starting at the first character in the string
add each character into output string until the specified input number
add ... to the end of the output string
return output string
*/

function truncate(length, string) {
  if (length > string.length) {
    return string + '...';
  }
  var output = '';
  for (var i = 0; i < length; i++) {
    output += string[i];
  }
  output += '...';
  return output;
}
