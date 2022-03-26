/* exported takeRight */

/*
guard: if the count is larger then the length of the array return array
assign an empty array as output
starting from the end of input array
unshift each input array index to output
until the index is equal to the count
return output
*/

function takeRight(array, count) {
  if (count > array.length) {
    return array;
  }
  var output = [];
  for (var i = array.length - 1; i >= array.length - count; i--) {
    output.unshift(array[i]);
  }
  return output;
}
