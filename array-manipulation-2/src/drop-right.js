/* exported dropRight */

/*
assign empty array to output
starting from the first item
add it to the output array
until the length of the input minus the count is equal to the index
return output
*/

function dropRight(array, count) {
  var output = [];
  for (var i = 0; i < array.length - count; i++) {
    output.push(array[i]);
  }
  return output;
}
