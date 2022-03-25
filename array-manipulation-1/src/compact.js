/* exported compact */

/*
assign an empty array as output array
starting from the first item in the input array
  check if each item is false, null, undefined, NaN, 0, -0, ''
  dont add the item if the condition is true
add all other item into the array
return output array
*/

function compact(array) {
  var returnArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] !== false && array[i] !== null && array[i] !== '' && array[i] !== 0 && array[i] !== undefined && !Number.isNaN(array[i])) {
      returnArray.push(array[i]);
    }
  }
  return returnArray;
}
