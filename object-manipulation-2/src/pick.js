/* exported pick */

/*
assign an empty object as output
get all the properties in the source object
check each and every property in the input object if the input keys matches
check if the value of the matched properties is undefined
if it is undefined dont add the keys to the outut
if the key match then add the property and its value to the output
repeat until no more key is left in input array
return output
*/

function pick(source, keys) {
  var output = {};
  for (var prop in source) {
    for (var i = 0; i < keys.length; i++) {
      if (prop === keys[i]) {
        if (source[prop] !== undefined) {
          output[keys[i]] = source[prop];
        }
      }
    }
  }
  return output;
}
