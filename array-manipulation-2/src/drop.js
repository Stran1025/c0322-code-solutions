/* exported drop */

/*
assign an empty array to output
starting at the end of the input array
using unshift to add the item of the front of the output array from input
decrease the index until the specified count input
return output
*/

function drop(array, count) {
  var output = [];
  for (var i = array.length - 1; i >= count; i--) {
    output.unshift(array[i]);
  }
  return output;
}
