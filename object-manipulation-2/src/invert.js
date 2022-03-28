/* exported invert */

/*
assign an empty object as output
for every property in the source object
  make the value of the property the new property for output
  then make the property name in the source the value
return output
*/

function invert(source) {
  var output = {};
  for (var prop in source) {
    output[source[prop]] = prop;
  }
  return output;
}
