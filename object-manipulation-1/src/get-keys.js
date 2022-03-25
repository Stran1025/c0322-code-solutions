/* exported getKeys */

/*
assign an empty array to output
loop throught all the object properties and add all of them to array
return empty array
*/

function getKeys(object) {
  var returnArray = [];
  for (var key in object) {
    returnArray.push(key);
  }
  return returnArray;
}
