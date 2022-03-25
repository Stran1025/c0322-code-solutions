/* exported tail */

/*
assign an empty array as output
starting at the second item in the array
  add the items into output array
  repeat for each item in the array
return output array
*/

function tail(array) {
  var returnArray = [];
  for (var i = 1; i < array.length; i++) {
    returnArray.push(array[i]);
  }
  return returnArray;
}
