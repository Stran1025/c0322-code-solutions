/* exported reverse */

/*
assign empty array as an output
starting from the last item of the input array
  add each item into the output array
return output array
*/

function reverse(array) {
  var returnArray = [];
  for (var i = array.length - 1; i >= 0; i--) {
    returnArray.push(array[i]);
  }
  return returnArray;
}
