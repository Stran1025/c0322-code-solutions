/* exported intersection */

/*
assign an empty array as output
for each item in the first array
  match it agaisnt the second array
    if the item matches add it to the output;
return output
*/

function intersection(first, second) {
  var output = [];
  for (var i = 0; i < first.length; i++) {
    for (var j = 0; j < second.length; j++) {
      if (first[i] === second[j]) {
        output.push(first[i]);
      }
    }
  }
  return output;
}
