/* exported take */

/*
guard if the array length is less than count return array
assign an empty array to output
starting at the first item of input
add each item into output
until the length of output matches the count
return output
*/

function take(array, count) {
  if (array.length < count) {
    return array;
  }
  var output = [];
  for (var i = 0; i < count; i++) {
    output.push(array[i]);
  }
  return output;
}
