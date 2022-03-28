/* exported includes */

/*
starting at 0
check if each index of the array if strictly equal to the input value
if found return true
if not return false
*/

function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (value === array[i]) {
      return true;
    }
  }
  return false;
}
