/* exported toObject */

/*
assign an empty object as output
using bracket notation add a new property to the object with the name the same
  as the first index of the input
assigned a value to the newly added property. the value is the same as the second index from the arguement
return output object
*/

function toObject(array) {
  var returnObj = {};
  returnObj[array[0]] = array[1];
  return returnObj;
}
