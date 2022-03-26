/* exported initial */

/*
assign an empty array as the output for function
add each item in input array to the output array
  excluding the last item
return output array
*/

function initial(array) {
  var returnArray = [];
  for (var i = 0; i < array.length - 1; i++) {
    returnArray.push(array[i]);
  }
  return returnArray;
}
