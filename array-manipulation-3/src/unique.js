/* exported unique */

/*
assign an empty array as output
push the first item of the array into output
for each item in the input array
  check if it is in the output array already
  if the item is already in the output array do nothing
  if the item is not anywhere in the output array
  push the item to the output
return output
*/

function unique(array) {
  if (array.length === 0) {
    return [];
  }
  var output = [];
  output.push(array[0]);
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < output.length; j++) {
      if (array[i] === output[j]) {
        break;
      } else if (array[i] !== output[j] && j === output.length - 1) {
        output.push(array[i]);
      }
    }
  }
  return output;
}
