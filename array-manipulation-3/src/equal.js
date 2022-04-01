/* exported equal */

/*
first if the 2 array length is not equal to each other
  eturn false
for each index in the first array compare it to the same index on the second array
  if any index is not equal to each other
    return false
  if there are no indexes that doesnt match
    return true at the end
*/

function equal(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  for (var i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
}
