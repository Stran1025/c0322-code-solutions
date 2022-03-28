/* exported omit */

/*
create an empty object and assign it as output
make the output the same as the input source object
for each property in the source object
check if the keys matches the properties in the input source
if it is a match remove the properties from the output object
return output object
*/

function omit(source, keys) {
  var output = source;
  for (var prop in source) {
    for (var i = 0; i < keys.length; i++) {
      if (prop === keys[i]) {
        delete output[prop];
      }
    }
  }
  return output;
}
