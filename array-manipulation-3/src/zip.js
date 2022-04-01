/* exported zip */

/*
assign an empty array as output
assign an empty array as pair
if one of the array is longer than the other
  take the longer array anc chop it to the same size as the shorter one
  arrayLong.splice(arrayShort.length)
for each item in the first array
  push first at index to pair
  push second at indext to pair
  push pair to output
  reset pair back to empty array
return output
*/

function zip(first, second) {
  var output = [];
  if (first.length > second.length) {
    first.splice(second.length);
  } else if (second.length > first.length) {
    second.splice(first.length);
  }
  for (var i = 0; i < first.length; i++) {
    output.push([first[i], second[i]]);
  }
  return output;
}
