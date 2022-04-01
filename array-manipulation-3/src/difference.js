/* exported difference */

/*
assign an empty array as output
for each item in the first array
  check if it matches with items in the second array
  if the items matches
    do nothing
  if the items matches with nothing in the second array
  push the item into the output
for each itemsin the second array
  check if it matches with any item in the first array
    if the item matches
      dont do anything
    if the item doesnt match with any items
      add it to the output
return output
*/

function difference(first, second) {
  var output = [];
  for (var i = 0; i < first.length; i++) {
    for (var j = 0; j < second.length; j++) {
      if (first[i] === second[j]) {
        break;
      } else if (j === second.length - 1) {
        output.push(first[i]);
      }
    }
  }
  for (var k = 0; k < second.length; k++) {
    for (var l = 0; l < first.length; l++) {
      if (second[k] === first[l]) {
        break;
      } else if (l === first.length - 1) {
        output.push(second[k]);
      }
    }
  }
  return output;
}
