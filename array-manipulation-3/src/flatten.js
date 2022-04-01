/* exported flatten */

/*
assign an empty array as output
for all the item in the input array
  check if the items at each index is an array
    if it is a array
      for each item in that nested array push it into the output array
    if it is not an array
      just push that item into the output array
return array
*/

function flatten(array) {
  var output = [];
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (var j = 0; j < array[i].length; j++) {
        output.push(array[i][j]);
      }
    } else {
      output.push(array[i]);
    }
  }
  return output;
}
