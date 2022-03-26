/* exported swapChars */

/*
set an empty string as output
create an empty array for a placeholder
starting at the first character until the last character of the input string
push all the character into the placeholder array
set the firstIndex in the array to the secondIndex of the string
set the secondIndex in the array to the firstIndex of the string
starting at the first index of the placeholder array until the whole length of it
add each item in the array to the output
return output
*/

function swapChars(firstIndex, secondIndex, string) {
  var output = '';
  var array = [];
  for (var i = 0; i < string.length; i++) {
    array.push(string[i]);
  }
  array[firstIndex] = string[secondIndex];
  array[secondIndex] = string[firstIndex];
  for (var j = 0; j < array.length; j++) {
    output += array[j];
  }
  return output;
}
