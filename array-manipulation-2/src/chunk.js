/* exported chunk */

/*
guard if the size is larger than the array length return array
assign and empty array as output
assign another empty array as group
starting at the first item
add each item to the group array
until the group array length is equal to the specify input size
add the group in to output
reset group back to an empty array
repeat the process
add the last group into output
return output
*/

function chunk(array, size) {
  if (size > array.length) {
    return array;
  }
  var output = [];
  var group = [];
  for (var i = 0; i < array.length; i++) {
    group.push(array[i]);
    if (group.length === size) {
      output.push(group);
      group = [];
    }
  }
  if (group.length > 0) {
    output.push(group);
  }
  return output;
}
