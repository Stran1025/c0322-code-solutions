/* exported defaults */

/*
assign and empty object as output
add all the property and value of target into output
for every property in the source object
check if the value for that property is undefined in the output
if value is undefine then add the property and value to output
if value is anything else then do nothing
return the output
*/

function defaults(target, source) {
  var output = target;
  for (var sourceProp in source) {
    if (output[sourceProp] === undefined) {
      output[sourceProp] = source[sourceProp];
    }
  }
  return output;
}
