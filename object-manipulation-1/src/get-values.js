/* exported getValues */

/*
assign an empty array to output
loop throught all the object properties and add all the value to the output array
return empty array
*/

function getValues(object) {
  var returnArray = [];
  for (var key in object) {
    returnArray.push(object[key]);
  }
  return returnArray;
}
